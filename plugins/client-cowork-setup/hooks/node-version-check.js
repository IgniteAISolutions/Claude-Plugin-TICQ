// Warns at session start when this computer's Node.js has a known security flaw.
//
// Why: the plugin's hooks run on the computer's own Node.js. An old Node.js is a
// risk to the whole computer, so the person hears about it on the day it matters
// rather than from an IT audit.
//
// It informs and never installs. Updating software is the person's call, or their
// IT team's, so the message names the fix and stops there.
//
// Silent when Node.js is up to date. Fails open: any error prints nothing and
// exits 0, because a broken check must never stop a seat working.
//
// The minimum versions below have a shelf life. They were checked against
// nodejs.org/dist/index.json on 27-10-2026 (the 20-10-2026 security release).
// references/volatile-facts.md says when to re-check them.

const MINIMUM_BY_MAJOR = { 22: '22.23.4', 24: '24.22.1', 26: '26.12.1' };
const RECOMMENDED = '24.22.1';
const NEWEST_CHECKED_MAJOR = 26;

function parse(version) {
  return String(version).replace(/^v/, '').split('.').map((part) => parseInt(part, 10) || 0);
}

function isOlder(current, minimum) {
  const a = parse(current);
  const b = parse(minimum);
  for (let i = 0; i < 3; i += 1) {
    if (a[i] !== b[i]) return a[i] < b[i];
  }
  return false;
}

function findProblem(current) {
  const major = parse(current)[0];
  if (major > NEWEST_CHECKED_MAJOR) return null;
  const minimum = MINIMUM_BY_MAJOR[major];
  if (!minimum) return `Node.js ${current} no longer gets security fixes`;
  if (isOlder(current, minimum)) return `Node.js ${current} has a known security flaw, fixed in ${minimum}`;
  return null;
}

function message(problem) {
  return (
    `${problem}. Update this computer to Node.js ${RECOMMENDED} or later. ` +
    'On Windows run: winget install --id OpenJS.NodeJS.LTS --exact. ' +
    'On a Mac run: brew upgrade node. Or download it from nodejs.org. ' +
    'If your IT team looks after this computer, send them this message instead.'
  );
}

try {
  const problem = findProblem(process.versions.node);
  if (problem) {
    const text = message(problem);
    process.stdout.write(JSON.stringify({
      systemMessage: text,
      hookSpecificOutput: {
        hookEventName: 'SessionStart',
        additionalContext: `Tell the person this once, early in the session, in plain words: ${text}`,
      },
    }));
  }
} catch (e) {
  // Fail open.
}
process.exit(0);
