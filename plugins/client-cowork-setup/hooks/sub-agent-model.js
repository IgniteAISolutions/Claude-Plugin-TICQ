// Refuses a general-purpose sub-agent dispatched without a declared model.
//
// Why: a sub-agent sent with no model runs at the session's weight, so legwork
// (reading, extracting, comparing) gets billed at the rate meant for judgement.
// The rule lives in skills/sub-agent/SKILL.md; this hook is the half that refuses.
//
// Scope, kept narrow on purpose so it cannot break other plugins:
// - Only general-purpose sub-agents, or ones with no type, are checked. A named
//   agent type sets its own model in its definition, so it is left alone.
// - Fails open. Unreadable input, a missing field or any error lets the call
//   through, because a broken guard must never stop a seat working.
//
// Exit 2 blocks the call and shows the reason to Claude. Exit 0 allows it.

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { raw += chunk; });
process.stdin.on('end', () => {
  try {
    const event = JSON.parse(raw);
    const input = event && event.tool_input;
    if (!input || typeof input !== 'object') process.exit(0);
    const type = input.subagent_type;
    const checked = type === undefined || type === null || type === '' || type === 'general-purpose';
    const model = typeof input.model === 'string' ? input.model.trim() : '';
    if (checked && !model) {
      process.stderr.write(
        'Sub-agent refused: no model set. Set `model` on this sub-agent and send it again. ' +
        'Reading, extracting, comparing and lookups go to sonnet, or haiku for a yes, no or a number. ' +
        'Opus only for judgement or words going out under the person\'s name. ' +
        'Open the brief with a ROUTE line, as the sub-agent skill says.\n'
      );
      process.exit(2);
    }
  } catch (e) {
    // Fail open.
  }
  process.exit(0);
});
