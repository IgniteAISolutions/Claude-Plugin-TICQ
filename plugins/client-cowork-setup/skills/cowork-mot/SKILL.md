---
name: cowork-mot
description: |
  The monthly MOT: tests whether the thinking is rotting, where /health tests the wiring. Measures context weight across CLAUDE.md, MEMORY.md and the skills against Anthropic's guidance of roughly 200 lines and proposes a cut list; finds contradictions between the three files, quoted with file and line; finds skill descriptions that fire on the same words; checks file integrity, brackets left in, dead paths, stale rules; checks the learning loop is moving; checks live settings against the record; re-runs each starter on its eval set; proposes stale memory lines for removal. Writes a one-page memo with a numbered fix list to System/Reviews, applies only the unambiguous, waits for a yes on the rest. Triggers on "/mot", "run the MOT", "monthly check", "why does Claude keep contradicting itself", "is my CLAUDE.md too big", "context weight", or the day-1 local task after /health. Never rewrites CLAUDE.md wholesale, never sends, never deletes, never touches money.
effort: high
---

# Cowork MOT

## Purpose

A seat that learns also accumulates. Rules get added the week something goes wrong and never
removed, a convention gets stated twice and the copies drift apart, a skill description widens
until it wins its neighbour's requests. None of that throws an error, so the complaint arrives
as "Claude keeps contradicting itself" rather than as a bug.

`/health` tests the wiring: the folder, the connectors, the tasks, whether memory carries. This
tests the thinking: the weight, the contradictions, the routing, the loop. On day 1 of the month
at 08:00 the local scheduled task runs `/health` first and then this one.

It proposes. It applies only what cannot be wrong (a pointer to a file that is not there, a
bracket left in from the template, a memory line duplicated word for word) and the rest waits
for a yes from the owner named in `CLAUDE.md`. It never rewrites `CLAUDE.md` wholesale, never
sends, never deletes, never touches money.

**Model and effort.** Session model at **high**. Every finding is a judgement about whether two
pieces of writing can both be true, and the cut list has to tell a rule from the story of why
the rule exists.

## Procedure

**Before you start.** Today's date, the owner named in `CLAUDE.md`, and these open: `CLAUDE.md`,
`MEMORY.md`, `System/settings-record.md`, `System/progress.md`, `System/Twin/backlog.md`,
everything in `System/Reviews/` from the last month, and every `SKILL.md` this seat loads, the
plugin's included. A missing file is a finding, never a reason to stop. Run the nine checks in
order; `references/checks.md` holds what passes, what gets applied, and what needs a yes.

**1. Weigh the context.** Count lines, and approximate tokens at roughly four characters each,
for `CLAUDE.md`, `MEMORY.md` and every `SKILL.md` that loads before work starts. Report each,
the total, and that the token figures are approximate. Anthropic's published guidance is that
`CLAUDE.md` stays short and signal-dense, under roughly 200 lines, detail in referenced files.
Prevents 400 lines of preamble competing with the rule that mattered.

**2. Propose the cut list, sorted by kind.** A **rule** stays where it is. The **story of why
the rule exists** moves to a referenced file, intact, and the rule gets followed more often for
it: say so, because the first instinct is that shorter means weaker. **Repetition** collapses to
one statement in one place, a **dead reference** goes, and a rule carrying a dated incident is
never cut. Lines saved per item. Prevents a lean file that lost a control.

**3. Contradictions.** Put every "always" and "never" in `CLAUDE.md`, `MEMORY.md` and the skills
beside everything else on the same subject. They cluster in four places: tone, length, format,
and when to ask before acting. Quote both sides with file and line, recommend which wins in one
line, then stop. Prevents a reliability complaint being answered by changing tools.

**4. Routing overlaps.** Read every skill description as a set, tested against the phrasings this
person actually uses. Quote any two that would both claim the same request and name the words
they collide on. A generic skill matching a request more literally than the purpose-built one
wins on literalism, so flag it; the fix is a reciprocal boundary in both descriptions, never one.
Prevents the wrong skill answering while the right one looks broken.

**5. File integrity.** Read the last ten lines of every `CLAUDE.md`, `MEMORY.md` and `SKILL.md`: a
file ending mid-sentence was truncated by a failed save, and what is gone is the end, where the
quality criteria live. Check frontmatter markers and the description field on every skill, and
report anything in square brackets. Resolve every path these files name, saying for each failure
whether the target moved to `_archive` or never existed. Prevents a rule failing quietly.

**6. Stale dates and superseded rules.** Sweep for dates inside the files: review-by notes,
last-verified stamps, events that have passed. Then the facts that decay with no date on them:
prices, people, product names, client statuses, which tools are live. A review date inside a
file cannot nag, so propose a diary entry beside each one. Prevents the instruction set
describing the firm as it was a year ago.

**7. The learning loop.** Four counts, each a count rather than an impression. How many session
reviews `System/Reviews/` holds for the month. Whether each lesson those reviews routed
somewhere landed in the file it named, checked by opening it. Whether `System/progress.md` has
moved since last month, and whether `System/Twin/backlog.md` has moved or anything on it reached
`built`. Prevents a loop everybody believes is running because `/end` exists.

**8. Settings drift.** Ask the person to read the live value off their own screen for each line
in `System/settings-record.md`, rather than reciting the record back. Every difference is drift
or a decision nobody wrote down, and the record is where that gets settled. Prevents cloud mode
quietly back on underneath a task that reads the folder.

**9. Starter performance, then condense `MEMORY.md`.** Re-run every starter skill holding a
`references/eval-set.md` against its own cases, scored pass or fail per case with one line on
what failed, and **NOT VERIFIED** with what it would take wherever a case needs a connector that
is off. Firing once on build day proves nothing about week six. Then propose for removal from
`MEMORY.md`: the same fact stated twice, facts a later line supersedes, finished work with a
passed date. Retired lines go to `_archive/memory-<date>.md`, intact. Propose only, because that
file is the seat's brain.

**10. Write the memo and stop.** The shape is in `references/checks.md`. Then wait.

## Quality criteria

- Every contradiction, overlap and defect carries a quote with its file and line.
- Every weight figure is counted rather than guessed, and token counts say "approximate".
- Every numbered fix is marked safe (applied) or needs a yes (not applied), and nothing in the
  second group was touched.
- No cut is proposed to a rule that carries a dated incident, `CLAUDE.md` was not rewritten,
  and no file was deleted.
- Every eval case reads pass, fail or NOT VERIFIED. None is blank.
- Where it goes: `System/Reviews/<date>-mot.md`, one page, plus a chat summary under 250 words
  naming the worst finding and the approvals needed. One line for the run goes to
  `System/progress.md`.
- Done means: the memo is written, the safe fixes are applied and listed as applied, and the
  skill is waiting on the owner rather than working.

## Example

Illustrative, an excerpt in the memo's shape. The first real MOT on this seat replaces it.

> **Weight.** `CLAUDE.md` 318 lines, about 4,100 tokens (approximate). `MEMORY.md` 604 lines,
> about 9,800. Eleven skills, about 14,200. Around 28,000 tokens load before any work starts.
> Sections 6 and 10 hold 140 lines of why, against a rule count of nine.
> **Worst finding.** `CLAUDE.md` line 31: "Never send. <name> sends." `MEMORY.md` line 88, dated
> 14-07-2026: "Priya can send the Friday supplier chase herself." Both live. Fix 3.
> **Fix list.** 1. The voice profile named at `CLAUDE.md` line 61 sits in `About Me/`, not
> `System/`. Pointer corrected. Safe, applied. 2. `MEMORY.md` lines 140 and 402 carry the same
> fact. 140 removed, 402 kept as the later. Safe, applied. 3. The send contradiction above, and
> `[PATH TO company-context.md]` still in brackets at line 23. Both need a yes from <owner>.
> **Loop.** Nine reviews. Seven lessons routed, six landed; the seventh named
> `Skills/chase/SKILL.md`, and that file is unchanged. `progress.md` last moved 22-08-2026,
> `backlog.md` not since 08-08-2026: three open, none built.
> **Evals.** `/triage` 4 of 5, the newsletter case failed again. `/brief` 5 of 5. `/prep` NOT
> VERIFIED, calendar connector off.

It is the standard because every number was counted, both halves of the contradiction carry a
line, each fix says applied or waiting and who decides, and the loop names the file the lesson
failed to reach.

## Edge cases

- **The seat has never run `/end`.** No session reviews in `System/Reviews/`. Do not score the
  loop and do not invent a trend. Say the loop is not running, that this is the finding, and what
  starts it: `/end` at the close of each session. Checks 1 to 6 and 8 still run on the files, so
  the MOT is that, said plainly.
- **The person disagrees with a cut.** Record the disagreement in the memo with their reason in
  their own words, leave the line exactly as it is, and do not raise it next month. Their call.
- **A skill is served from a plugin cache.** The fix goes to the skill's source, and it is NOT
  VERIFIED until the plugin is reinstalled. Say so on that line, and never mark it applied.
- **`CLAUDE.md` and `MEMORY.md` disagree on a fact.** `MEMORY.md` wins, by the rule at the top of
  `CLAUDE.md` itself. Propose the `CLAUDE.md` line for correction and name the dated memory line
  that beat it. Where they disagree about a rule rather than a fact, precedence settles nothing:
  it is a contradiction for the owner.
- **The machine was asleep on day 1.** It is a local task, so it catches up. Say at the top of
  the memo which date it should have run and which date it did: a window that slid by four days
  makes the trend wrong.
- **A fix would send, delete, move money or touch a client-facing draft.** It goes on the list
  as needs a yes, named for the person in the firewall, whatever the owner says.
