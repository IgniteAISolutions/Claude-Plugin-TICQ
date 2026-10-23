---
name: multiplayer-start
description: "The starting point for moving a team from people using AI on their own to agents working as shared teammates. Reads the team's multiplayer-pilot.md (or creates it), says where the team is across the four stages (diagnose, classify, readiness, pilot), recommends the next step, and hands to the skill that does it. The team can start anywhere or skip ahead; this skill advises and records the choice, it never blocks. Use it whenever a team asks how to start with shared agents, multiplayer AI, a team agent, Claude Tag, Managed Agents, or where they are in the pilot, even if they do not say \"multiplayer\". Triggers on \"help us start with multiplayer AI\", \"set up a team agent\", \"where do we start with agents\", \"what's next in our pilot\", \"agent for the whole team\". Not for one person's own AI set-up."
effort: medium
---

# Multiplayer start

## Purpose

Teams that already use AI one person at a time usually want to jump straight to "give us
a team agent". The ones that get value from it first see what single-player AI is costing
them, check whether the agent will have anything to work with, and then start small. This
skill keeps that path in view without making anyone walk it in order.

What the team is building towards: a system that knows what is going on in the business
and keeps every person informed on progress, actions and next steps. It does not run the
business; people decide. Say this plainly at the start, because a team sold "an agent
that runs things" either resists it or over-trusts it.

It advises. It never stops a team doing what it has decided to do.

## Procedure

**1. Read the pilot file.** `multiplayer-pilot.md` in the team's shared workspace. If it
does not exist, create it from `../../templates/multiplayer-pilot.md`, fill the Team section by
asking who is on the team, how many, which shared space they work in, and who sponsors
it, then recommend stage 1.

**2. Say where the team is.** One line per stage: done, partly done, not started, or
skipped by choice (from the Choices section).

| Stage | Skills | Done when the pilot file holds |
|---|---|---|
| 1. Diagnose | `find-the-repeats` | A repeats table with three rows or more |
| 2. Classify | `tool-or-teammate` | At least one tool audited |
| 3. Readiness | `readiness-check` | A scorecard and a fix plan |
| 4. Pilot | `pilot-plan`, `team-roster`, `north-star`, `first-job-briefing`, `rubric-builder`, `trust-ladder`, `capture-the-method`, `weekly-retro` | A charter, then each of the ten steps in turn |

**3. Recommend one next step, and why.** Usually the first stage not done. Where the
team asks to go further ahead, say in two lines what the skipped stage would have given
them (`../../reference/four-principles.md`, failure modes), then go where they asked and write
the choice in the Choices section. If the request itself already asks to skip ("skip the
theory", "just get the agent going"), that is the choice: record it in Choices with who
asked and the date, say the two-line cost once, and hand to `pilot-plan`. Do not ask them
to confirm what they have already said.

**4. Hand over.** Run the skill for the step, or tell them what to type.

## Quality criteria

- The pilot file exists and its Team section is filled.
- Every stage has a status, and every skip is recorded once with who chose it.
- The recommendation is one step with a reason, never a list.
- Done means the team knows where it is and what the next step is, and has either
  started it or chosen another.

## Example

Northgate Supplies, a four-person operations team (invented).

> **Where you are.** Diagnose: done (four repeats, 15/10). Classify: not started. Readiness: not started. Pilot: not started.
> **Next, recommended:** `tool-or-teammate` on the meeting notetaker you all use. It takes ten minutes and shows what the team keeps re-explaining.
> You asked to go straight to the pilot. You can; the readiness check is the step that usually catches an agent with nothing to read. Your call, and I'll note it.

## Edge cases

- **"We already have Claude Tag running."** Start at `readiness-check` and
  `tool-or-teammate` on the existing agent, not at stage 1.
- **The team wants to skip the readiness check.** Say what a gap usually costs (an agent
  with no context, every output needing full review), record the choice, and carry on.
- **No shared space yet.** Recommend choosing one before stage 4; stages 1 to 3 can run
  in a meeting.
- **One person asking for their own AI set-up.** This plugin is for teams; say so.
