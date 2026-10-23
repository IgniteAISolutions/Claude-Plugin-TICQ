---
name: readiness-check
description: "Stage 3 of moving to shared agents: tests a team against five readiness questions before an agent joins it (openness, ownership, tools, verification, direction), scores each 1 to 5 with one line of evidence, names the gaps and what each is likely to cost, and builds a fix plan the team orders itself. Advises, never blocks: the team decides which gaps to close before the pilot and which to carry. Use it whenever a team asks whether it is ready for a team agent, what to fix before bringing one in, or why an existing agent is doing thin work. Triggers on \"readiness check\", \"are we ready for an agent\", \"what should we fix first\", \"stage 3\", \"why is our agent guessing\". Not the pilot plan (stage 4)."
effort: high
---

# Readiness check

## Purpose

An agent joining a team can only be as good as what it can read, what it is allowed to
do, and how its work gets checked. Five questions find where a team falls short before
the agent shows it the hard way. Where a team falls short tells it what to fix; when to
fix it is the team's call.

## Procedure

**1. Score the five, one at a time,** 1 (not at all) to 5 (fully), each with one line of
evidence from the team. A score above 3 needs a named document, channel or tool behind it.

| # | Area | Question | What tends to go wrong at a low score |
|---|---|---|---|
| 1 | Openness | Is what people and agents need open and searchable, rather than stuck in private documents and messages? | The agent cannot stay current |
| 2 | Ownership | Is it written down who owns what, agents included? | Work gets done twice |
| 3 | Tools | Does every teammate, agents included, have the tools for the job? | The agent does thin work, guesses or makes mistakes |
| 4 | Verification | Can an agent's key work be checked by a rubric, a test or a second agent before a person sees it? | Every output needs full human review; finishing takes longer |
| 5 | Direction | Is there a written north star everyone can point to? | Nobody, human or agent, can act on what is needed next without being told |

**2. Ask the two reflection questions.**
- Which of the five would the team disagree about most?
- What is private by habit that could be open on purpose?

**3. List the gaps.** Any score of 3 or below. For each: what it is likely to cost in the
pilot, the fix, an owner (where nobody is named yet, write "owner: to be named by" and the
sponsor, so the gap is never left without someone to decide), and which skill helps (`team-roster` for ownership,
`rubric-builder` for verification, `north-star` for direction).

**4. Let the team order the plan.** Recommend which gaps are worth closing before the
pilot (usually openness and direction, because they decide what the agent can do at all),
then ask the team to put each in "before the pilot", "during it" or "later". Their order
stands. Write it with `../../templates/readiness-scorecard.md` into the Readiness section of
`multiplayer-pilot.md`, and record any recommendation they set aside in Choices.

## Quality criteria

- Every score has evidence; none above 3 without a named source.
- Every gap has a likely cost, a fix and an owner.
- The order is the team's, and any recommendation they set aside is recorded once.
- Done means the scorecard and plan are in the pilot file.

## Example

Northgate Supplies (invented).

> Openness 2 (supplier updates live in three people's inboxes). Ownership 3 (a jobs list exists, no agent on it). Tools 4 (shared drive and the order system, both readable). Verification 1 (no checks written). Direction 2 (a target exists only in the MD's head).
> **Recommended before the pilot:** openness and direction. **The team chose:** direction before, openness during (post supplier updates to the channel from week 1), verification during with `rubric-builder`. Recorded.

## Edge cases

- **Openness is low for a good reason** (HR, legal, client-confidential work). Recommend a
  workspace-level boundary and keep that work out of the pilot. Never push those channels
  open.
- **The team disagrees on a score.** Record both views and the evidence for each; the
  disagreement is itself the finding.
- **Everything scores 4 or 5.** Ask for the evidence behind each; if it holds, say so and
  move to the pilot.
- **The team wants to start the pilot with gaps open.** Fine. Name the likely cost once,
  record the choice in Choices of `multiplayer-pilot.md` straight away (a choice already made
  in the request does not wait for the ordering), and recommend the rubric and the reviewer for the first job, which
  carry most of the risk.
