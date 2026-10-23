---
name: rubric-builder
description: "Stage 4, step 7 of moving to shared agents: writes a rubric for each task the team's agent does, a short list of pass or fail checks a person or a second agent can apply in under two minutes, plus an optional instruction for a verifier agent (the doer and verifier pattern). Every check is decidable without a judgement call. Use it whenever a team wants to check an agent's work faster, trust it with more, set up a verifier agent, or stop quality drifting. Triggers on \"build a rubric\", \"how do we check the agent's work\", \"verifier agent\", \"step 7\", \"quality is drifting\". Not the trust ladder, which uses these rubrics to decide autonomy."
effort: medium
---

# Rubric builder

## Purpose

Without a way to check an agent's work, every output needs a person to read it in full,
and quality drifts without anyone noticing. A short rubric per task is the fastest way to
build trust: a person checks against it in two minutes, a second agent can check against
it before a person sees anything, and the trust ladder uses the results to decide when the
agent can do more.

## Procedure

**1. Pick the task** from the roster. One rubric per task.

**2. Ask what a bad one looks like.** Two or three real misses, if the task has run.
Each miss becomes a check.

**3. Write the checks.** Five to eight, each pass or fail, each decidable by someone who
did not do the task:
- "Names the source of every figure" passes. "Is accurate" fails as a check.
- "States the delivery date for every open order" passes. "Is helpful" fails.

**4. Offer a verifier instruction.** If the team wants a second agent to check first, add
the instruction in `../../templates/rubric.md`: check each line, quote the evidence, do not
rewrite.

**5. Write it** from `../../templates/rubric.md`, link it in the Rubrics section of
`multiplayer-pilot.md`, and name an owner and a retest date.

## Quality criteria

- Every check is pass or fail with no judgement call.
- Every real miss the team named is covered by a check.
- The rubric takes under two minutes to apply.
- Done means the rubric is linked in the pilot file with an owner.

## Example

Northgate Supplies (invented), the morning briefing.

| # | Check | Pass when |
|---|---|---|
| 1 | Most-asked repeat first | The orders section is the first section |
| 2 | Every order has a date | Each open order shows a delivery date or "no date, why" |
| 3 | Sources named | Every figure points at the order system, the price list or a channel message |
| 4 | Waiting-on is named | Every blocked item names who it waits on and since when |
| 5 | Two-minute read | Under 200 words |
| 6 | Gaps declared | Any source it could not read is named in its own line |

## Edge cases

- **The team wants "good writing" as a check.** Turn it into something decidable (under
  200 words, no internal abbreviations, the first line says what changed).
- **The task has never run.** Write the rubric from what good would look like, then
  revise it after the first five runs.
- **After a model upgrade.** Retest the rubric on recent outputs before trusting the
  results it gives.
