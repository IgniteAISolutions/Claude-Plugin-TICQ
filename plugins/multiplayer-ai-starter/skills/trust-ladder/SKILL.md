---
name: trust-ladder
description: "Stage 4, step 8 of moving to shared agents: sets how much the team's agent may do on its own, one task type at a time. Defines levels per task (a person reviews everything; a verifier reviews and a person spot-checks; the agent acts and escalates hard trade-offs), the run of rubric passes that earns a step up, what drops it back, and records who decided each move. Trust on one task never carries to another. Use it whenever a team asks how much to let its agent do, when to stop reviewing everything, how to give the agent more autonomy safely, or what to do after a model upgrade. Triggers on \"trust ladder\", \"how much should the agent do on its own\", \"can we stop checking everything\", \"step 8\", \"give the agent more autonomy\". Not the rubric itself."
effort: medium
---

# Trust ladder

## Purpose

Autonomy should grow with what the agent has shown, one kind of task at a time, the way
a new colleague earns trust. A team that hands everything over at once spends the next
month cleaning up; a team that never widens anything gets an expensive drafting tool.
The ladder makes each step deliberate, earned by evidence, and easy to reverse.

## Procedure

**1. Pick the task type** from the roster. It needs a rubric first (`rubric-builder`).

**2. Set the levels** from `../../templates/trust-ladder.md`, adjusted to the task:
1. The agent drafts; a person reviews every output.
2. The agent drafts; a verifier checks every output; a person spot-checks.
3. The agent acts; it escalates hard trade-offs to the named person.

**3. Set the evidence for a step up.** A run of consecutive rubric passes at the current
level (suggest ten for most tasks, more where a mistake reaches a customer), and who
decides the move.

**4. Set what drops it back.** A fail a person had to catch, or a model change before the
rubric has been retested.

**5. Record** the table and the current level in the Trust ladder section of
`multiplayer-pilot.md`. Each move gets a dated line with the evidence and who decided.

## Quality criteria

- One ladder per task type; a step up on one says nothing about another.
- Every move has the evidence and the person who decided.
- Done means the ladder is in the pilot file with a current level.

## Example

Northgate Supplies (invented), the morning briefing.

> Level 1 from 03/11/2026. Ten passes running by 17/11/2026. **Moved to level 2 by Priya, 17/11/2026:** a verifier agent checks each briefing against the rubric; Priya spot-checks Mondays.
> Supplier chase list stays at level 1: different task, no run yet.

## Edge cases

- **A model upgrade.** Retest the rubric on recent outputs before keeping the current
  level; old guardrails can also be loosened if the new model passes more.
- **The team wants to jump to level 3.** It can; name the likely cost (mistakes reaching
  people unchecked), record the choice, and keep the drop-back rule.
- **One bad miss on a good run.** Drop back one level, fix the rubric or the instructions,
  and restart the count. Say what happened in the next retro.
