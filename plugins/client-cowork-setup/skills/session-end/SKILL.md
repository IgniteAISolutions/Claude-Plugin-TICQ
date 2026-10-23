---
name: session-end
description: |
  Closes a working session with a short, honest review and turns what it finds into changes that stick. Scores the session against the workspace's own rules in CLAUDE.md, scans everything written for voice drift against the person's voice profile, names what was learned, and routes each lesson to the thing that produced it: a skill that misfired gets the fix written into that skill, a rule that was skipped gets a line in MEMORY.md, a repeated task gets proposed to the weekly audit. Writes the review to System/Reviews and says in chat what changed. Triggers on "/end", "wrap up", "we're done", "that's it for today", "what could I have done better", "session review", or any clear sign the person is closing. Not for "end of file" or "wrap the text". Never sends, never deletes, never touches money.
effort: medium
---

# Session end

## Purpose

Every session produces a review, every review produces a change, and every change
tightens the next session. Without the review, the same skill misfires for six weeks
and nobody notices because each session starts fresh.

### Model and effort

Session model at **medium**. The audit is structured and the inputs are in front of
you. Spend the effort on routing the lesson to the right place, not on the prose.

## Procedure

**1. Read the rules you are scoring against.** `CLAUDE.md` at the root of this
workspace, and the voice profile named in it. Score against those, never against a
list carried in this skill. A client's session is reviewed against the client's rules.

**2. Protocols.** For each rule in `CLAUDE.md` that could have applied this session,
one line: followed, not followed, did not apply. Quote the evidence for anything not
followed. A review with no failures on a real session is rare; if every line passes,
say what you actually checked so it can be told apart from a review that did not run.

**3. Output quality.** Every file written this session and the chat itself, scanned
against the voice profile's own never list. Quote each hit with the file and line.
Where the profile names structural patterns as well as words, check those by eye.

**4. Lessons.** What drifted, what was learned, what the person corrected. Then route
each one:

| The lesson came from | It goes to | What is written |
|---|---|---|
| A skill that fired and produced the wrong thing | That skill's `SKILL.md` | The smallest rule that closes the gap, in the part that produced it (criteria, procedure, edge cases, example) |
| A skill that should have fired and did not | That skill's description | The trigger words that were said |
| A rule in CLAUDE.md that was skipped | `MEMORY.md` | One dated line, and the review names it |
| A fact the person stated or corrected | `MEMORY.md` | The fact, dated |
| A task done the same way that has been done before | `System/Twin/backlog.md`, via `/audit` | One line proposing it |
| Something about how the person wants to work | Their file in `About Me/` | The preference, in their words |

Say in chat what changed and where, in one line per change. A change nobody can see
is a change nobody trusts.

**5. Cost.** The heavy operations, the wasted turns, and one thing that would have made
this session cheaper. Short.

**5a. Next.** While the seat is in its first thirty days (`System/progress.md` exists
and does not say "coaching complete" or "prompts off"), one suggestion from `/guide`:
a skill they have not used that fits their role, or one thing they could build. Two
sentences, and log the skills this session ran to `progress.md`.

**6. Write the review** to `System/Reviews/<date>-session-review.md` and give the four
headings in chat.

## Quality criteria

- Every "not followed" carries a quote.
- Every lesson has a destination and the destination was written to.
- The review is under 400 words in chat. The file can be longer.
- No lesson is filed only in the review. The review is the record; the change lives
  where it acts.

## Example

Illustrative, in the shape a review takes. The first real review from this seat
replaces it.

> **Protocols.** Rule 2, voice: not followed. `Projects/<client>/README.md` line 14
> used "going forward"; corrected in the file. Rule 6, naming: followed. Rule 10,
> firewall: did not apply, nothing was sent.
> **Output quality.** One hit, above. Structure clean.
> **Lessons.** The README template invited the phrase, so the fix went to the template,
> not to memory. The person corrected where leads are filed: one dated line in
> `MEMORY.md`.
> **Cost.** One wasted turn re-reading a file already open. Cheaper next time: read
> once, keep the line numbers.
> Written to `System/Reviews/<date>-session-review.md`.

It is the standard because every "not followed" carries a location, every lesson has a
destination, and nothing is filed only in the review.

## Edge cases

- **The session was trivial.** Say so in two lines and write nothing to memory. A
  review that invents lessons to look thorough teaches the person to ignore reviews.
- **The lesson is about a skill served from a plugin cache.** Write the fix to the
  skill's source and say plainly that it does not reach production until the plugin is
  reinstalled. Do not claim the fix is live.
- **The person disagrees with a finding.** Take the instruction, record the
  disagreement in the review, do not write the lesson to the skill. Their call.
- **The failure was the reviewer's.** If this skill fired on "end of file", say so and
  tighten its own trigger.
- **The same lesson has appeared three times.** It is not a memory line any more; it is
  a rule. Propose the `CLAUDE.md` line and wait for a yes.
