// Refuses a write into a public folder that has not crossed the release gate.
//
// Why: client material reaches a case study, marketing or content only through
// /release, anonymised unless recorded consent covers the use. The rule lives in
// references/release-gate.md and skills/release/SKILL.md; this hook is the half
// that refuses, so the gate is a key and not only a prompt.
//
// What it checks, on Write, Edit and MultiEdit:
// - Only inside a knowledge base: a folder with System/Ember/ somewhere above the
//   file. Anywhere else it does nothing.
// - Only where the nearest folder card (README.md) above the file says
//   `zone: public`. Folder cards themselves are let through; /lint checks their links.
// - The file as it would be after the write must carry `released: R-YYYY-NNN` in
//   its front matter, that id must have a record in System/Ember/releases.md, the
//   record must name this file's path, and the id must not have been withdrawn.
// - Released wording is never changed under an old id. A change to the body, the
//   title or any field other than the review stamps needs a new release. The review
//   stamps (last_verified, review_after, trust, status, confidence, updated) may change.
//
// What it does not see: a copy or move made from the shell. The weekly /lint leak
// check covers that route.
//
// Fails open. Unreadable input, a missing file or any error lets the call through,
// because a broken guard must never stop a seat working.
//
// Exit 2 blocks the call and shows the reason to Claude. Exit 0 allows it.

const fs = require('fs');
const path = require('path');

const STAMPS = new Set(['last_verified', 'review_after', 'trust', 'status', 'confidence', 'updated']);

function splitFrontMatter(text) {
  const t = text.replace(/\r\n/g, '\n');
  if (!t.startsWith('---\n')) return { fields: null, body: t };
  const end = t.indexOf('\n---', 4);
  if (end === -1) return { fields: null, body: t };
  const fields = new Map();
  let key = null;
  for (const line of t.slice(4, end).split('\n')) {
    const m = line.match(/^([A-Za-z_][\w-]*):(.*)$/);
    if (m) { key = m[1]; fields.set(key, m[2].trim()); }
    else if (key) fields.set(key, fields.get(key) + '\n' + line);
  }
  const rest = t.slice(end + 4);
  return { fields, body: rest.replace(/^[^\n]*\n?/, '') };
}

function releasedId(fields) {
  if (!fields || !fields.has('released')) return '';
  return fields.get('released').replace(/["'\s]/g, '').replace(/#.*$/, '');
}

function findVaultRoot(dir) {
  let d = dir;
  for (;;) {
    try { if (fs.statSync(path.join(d, 'System', 'Ember')).isDirectory()) return d; } catch (e) { /* keep walking */ }
    const up = path.dirname(d);
    if (up === d) return null;
    d = up;
  }
}

function nearestZone(dir, root) {
  let d = dir;
  for (;;) {
    try {
      const card = splitFrontMatter(fs.readFileSync(path.join(d, 'README.md'), 'utf8'));
      if (card.fields && card.fields.has('zone')) return card.fields.get('zone').replace(/["'\s]/g, '');
    } catch (e) { /* no card here */ }
    if (d === root) return '';
    const up = path.dirname(d);
    if (up === d) return '';
    d = up;
  }
}

function readRegister(root) {
  const records = new Map();
  const withdrawn = new Set();
  const text = fs.readFileSync(path.join(root, 'System', 'Ember', 'releases.md'), 'utf8').replace(/\r\n/g, '\n');
  for (const line of text.split('\n')) {
    const h = line.match(/^##\s+(R-\d{4}-\d+)\s*\|(.*)$/);
    if (h) {
      const parts = h[2].split('|').map((s) => s.trim());
      records.set(h[1], parts[2] || '');
      continue;
    }
    const w = line.match(/^-\s*Withdraws:\s*(R-\d{4}-\d+)/);
    if (w) withdrawn.add(w[1]);
  }
  return { records, withdrawn };
}

function norm(p) {
  return p.replace(/\\/g, '/').replace(/^\.?\//, '').trim().toLowerCase();
}

function afterWrite(toolName, input, before) {
  if (toolName === 'Write') return typeof input.content === 'string' ? input.content : null;
  const edits = toolName === 'MultiEdit' ? input.edits : [input];
  if (!Array.isArray(edits) || before === null) return null;
  let text = before;
  for (const e of edits) {
    if (!e || typeof e.old_string !== 'string' || typeof e.new_string !== 'string') return null;
    if (!text.includes(e.old_string)) return null;
    text = e.replace_all ? text.split(e.old_string).join(e.new_string) : text.replace(e.old_string, () => e.new_string);
  }
  return text;
}

function refuse(reason) {
  process.stderr.write(
    'Write refused by the release gate: ' + reason + ' ' +
    'This folder is public. Material reaches it only through /release: anonymised by default, ' +
    'named only where the client card records consent with captured evidence, the owner\'s yes ' +
    'to the exact text, and a record in System/Ember/releases.md naming this file. Run /release.\n'
  );
  process.exit(2);
}

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { raw += chunk; });
process.stdin.on('end', () => {
  try {
    const event = JSON.parse(raw);
    const toolName = event && event.tool_name;
    const input = event && event.tool_input;
    if (!['Write', 'Edit', 'MultiEdit'].includes(toolName) || !input || typeof input.file_path !== 'string') process.exit(0);

    const file = path.resolve(event.cwd || process.cwd(), input.file_path);
    if (path.basename(file).toLowerCase() === 'readme.md') process.exit(0);

    const root = findVaultRoot(path.dirname(file));
    if (!root) process.exit(0);
    if (nearestZone(path.dirname(file), root) !== 'public') process.exit(0);

    let before = null;
    try { before = fs.readFileSync(file, 'utf8'); } catch (e) { before = null; }
    const after = afterWrite(toolName, input, before);
    if (after === null) process.exit(0);

    const next = splitFrontMatter(after);
    const id = releasedId(next.fields);
    if (!id) refuse('the file carries no `released:` id in its front matter.');

    let register;
    try { register = readRegister(root); } catch (e) { refuse('System/Ember/releases.md cannot be read, so no release can be confirmed.'); }
    if (!register.records.has(id)) refuse('release ' + id + ' has no record in System/Ember/releases.md.');
    if (register.withdrawn.has(id)) refuse('release ' + id + ' has been withdrawn.');

    const recorded = norm(register.records.get(id));
    const relative = norm(path.relative(root, file));
    if (recorded !== relative) refuse('release ' + id + ' is recorded for "' + register.records.get(id) + '", not for this file.');

    if (before !== null) {
      const prev = splitFrontMatter(before);
      if (releasedId(prev.fields) === id) {
        const changed = [];
        if (prev.body.trim() !== next.body.trim()) changed.push('the body');
        const keys = new Set([...(prev.fields || new Map()).keys(), ...(next.fields || new Map()).keys()]);
        for (const k of keys) {
          if (STAMPS.has(k)) continue;
          const a = prev.fields ? prev.fields.get(k) : undefined;
          const b = next.fields ? next.fields.get(k) : undefined;
          if (a !== b) changed.push('`' + k + '`');
        }
        if (changed.length) refuse('this changes ' + changed.join(', ') + ' of text released as ' + id + '. A change to released wording is a new release.');
      }
    }
  } catch (e) {
    // Fail open.
  }
  process.exit(0);
});
