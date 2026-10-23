---
name: cowork-audit
description: |
  The weekly flywheel that keeps a seat improving after the facilitator leaves. Reads the week's session reviews in System/Reviews, the progress file and the role map; finds tasks that came round three or more times, tasks /end flagged as repeated, skills that misfired more than once, and anything on the role map marked next. Every candidate becomes one dated line in System/Twin/backlog.md with its evidence; at most three reach the person in a note under 200 words, ranked by how often and how much it hurt. Never reads chat history. Triggers on "/audit", "weekly audit", "what did I repeat this week", "what should I automate", "find skills to build", "what should I build next", or the Friday 16:00 local task. Proposes only: never runs /twin without a yes, never builds, never sends, never deletes, never touches money. Not the health check and not /end; this reads a week of reviews.
effort: medium
---

# Cowork audit

## Purpose

A seat improves for about three weeks after the facilitator leaves, then stops, because nobody
is counting. The third time somebody rebuilds the same report by hand it feels like work rather
than a pattern, and a pattern is only visible from above a week.

This is the thing that counts. It reads what `/end` wrote down, finds the tasks that came
round three or more times, ranks them by how often and how much they hurt, and puts at most
three in front of the person with the dates that prove it. It proposes and nothing else: the
backlog is written weekly, `/twin` runs only after a yes.

It never reads chat history: a plugin cannot count on having it, and an audit whose evidence
vanishes when a session closes reports nothing two weeks in. `System/Reviews/` is the record.

**Model and effort.** Session model at **medium**. Counting repeats and keeping the backlog
is mechanical; the judgement is in ranking three candidates out of nine and in saying which
one is judgement all the way down and should never be built.

## Procedure

**Before you start.** Every `System/Reviews/*-session-review.md` from the last seven days,
read in full. `System/progress.md`, for what ran, how it went, and whether it says "prompts
off". `System/Twin/<role>-map.md` if it exists, for tasks marked "next". `System/Twin/backlog.md`,
shaped as `references/backlog.md`, created now if missing. Today's date, so the window is real.

**1. Set the window and say what you have.** Name the date range and how many reviews you
found. If the week was thin and you widen to the last four weeks, say so in the note and on
every evidence line. Prevents one busy Tuesday being presented as a pattern.

**2. Count the repeats.** One task, done the same way, three or more times inside the window.
Same way matters: three client reports in the same five headings are a repeat, three
different pricing decisions are not. Count across reviews, never inside one, and write the
dates against each count as you go. Prevents a count reconstructed later from memory.

**3. Pick up what /end already flagged.** Any line a review routed to the audit queue is a
candidate, evidence attached; take it as read. Prevents the one repetition the person noticed
themselves falling through the floor.

**4. Split the misfires out.** A skill that produced the wrong thing more than once in the
window is a fault in that skill, not a gap in the library. Route it to a fix in the part that
caused it and say which part. Prevents a second skill that does the same job badly.

**5. Add the role map.** Every task marked "next" joins the candidate list, with the map
as its evidence. Prevents the map going stale while the audit proposes what is on it.

**6. Drop what should not be built.** A candidate that is judgement all the way down goes on
the not suitable line, with the reason, said plainly. So does anything touching money, a
client or a record with nobody to sign it off. Prevents a skill that pretends to do a human's
job, which costs more trust than it saves time.

**7. Write the backlog.** Every surviving candidate becomes one line in `System/Twin/backlog.md`:
the idea, the evidence with the dated review filenames, the time saved per week in the
person's own words if a review quotes them, and status `proposed`. Never invent a figure they
did not say; write "not stated". Prevents a wish list nobody can trace back to a source.

**8. Write the note.** Under 200 words, at most three proposals, ranked by how often the task
came round first and how much it hurts second. Two lines each: what it would do, and the
dates that prove it. Then say how to approve one, in those words: "say yes to number 2 and
I'll run /twin on it Monday". Prevents a ranked list of nine that gets read once.

**9. Stop.** Wait for the yes. On a yes, mark that line `approved` and hand the task to
`/twin` with its evidence lines as the brief. On a no, mark it `declined` with the date and
the reason in their words. Never run `/twin` on your own judgement, and never build here.

## Quality criteria

- Every proposal carries at least three dated review filenames, or it is not a proposal.
- The note is under 200 words and holds at most three proposals.
- No figure for time saved appears unless a review or the person said it.
- Every misfire is routed to a named part of a named skill, and none appears as a new skill.
- The not suitable line is written even when empty, so a skipped question is visible.
- Nothing was built, and `/twin` did not run.
- Where it goes: `System/Twin/backlog.md`, one line per candidate with its status kept
  current, and the note in chat. One line for the run goes to `System/progress.md` under
  Nudges with the date.
- Done means: the backlog is written, the note is sent or deliberately withheld under the
  "prompts off" rule, and the skill is waiting rather than working.

## Example

Illustrative, in the shape the Friday note takes. The first real audit on this seat
replaces it.

> Three reviews this week, 07 to 11 September. Two things repeated.
>
> **1. The Marchmont status update.** Written from scratch three times (reviews dated 09-09,
> 10-09, 11-09), same five headings every time, and on Wednesday you said it "eats forty
> minutes I do not have". Top of the list.
>
> **2. The supplier chase list.** Twice this week, marked "next" on your role map. Queued.
>
> **3. Pricing a one-off job.** Not suitable. Judgement all the way down, and a skill
> would hand you a confident wrong number.
>
> `/triage` put a newsletter in the wrong bucket twice. That is a fix to `/triage`'s edge
> cases, not a new skill, and the fix is written. Three lines added to
> `System/Twin/backlog.md`, all `proposed`. Say yes to number 1 and I'll run `/twin` on
> it Monday.

It is the standard because every claim is a dated review the person can open, the misfire goes
to a fix rather than a new skill, the thing that should not be built is named, and approval
takes four words.

## Edge cases

- **No reviews this week.** Say so, propose nothing, write nothing, and say what would fix it:
  `/end` at the close of each session. An invented pattern teaches them to ignore every audit.
- **The same proposal has been declined twice.** Stop proposing it. Leave the line at
  `declined` with both dates, and say once that it stays off the list because they said no
  twice. Their call, and a third ask is nagging.
- **A candidate is judgement all the way down.** Name it, say it is not suitable and why,
  and move on. Never soften it into a partial skill that does the easy half.
- **The backlog has more than ten open items.** Propose nothing new. Say how many are open,
  list the oldest three, and ask which to drop or build. A backlog nobody can read is the
  same as no backlog.
- **The seat says "prompts off" in `progress.md`.** Write the backlog as normal and do not
  message. The record still has to be kept; the nudging is what they switched off.
- **A candidate touches money, a client or a record.** It can be proposed; it cannot go to
  `/twin` without the signer named in `CLAUDE.md` saying yes. Name who that is.
- **The task ran late because the machine was asleep.** It is a local task, so it catches up:
  say which date it should have run and which it did.
