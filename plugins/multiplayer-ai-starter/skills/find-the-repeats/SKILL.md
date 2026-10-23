---
name: find-the-repeats
description: "Stage 1 of moving to shared agents: shows a team what single-player AI is costing it. Runs the 'find your team's repeats' exercise: the questions the team asks most weeks, who else asks each one, what goes wrong when people get different answers, and what changes if one shared agent answered once, in the open. Returns a short table the pilot later uses to choose the agent's first job. Use it whenever a team asks why it should share an agent, where its AI effort is duplicated, or wants to make the case for a team agent, even if they do not name the exercise. Triggers on \"find the repeats\", \"why multiplayer\", \"where are we duplicating\", \"make the case for a team agent\", \"stage 1\". Not the readiness check (stage 3)."
effort: medium
---

# Find the repeats

## Purpose

When everyone uses AI on their own, the same question gets asked and answered several
times a week, in private, with slightly different answers. Nobody sees it. Single-player
AI makes each person faster and leaves what they learned in their own chat; the bigger
the team, the more that costs. A shared agent answering once, in the open, removes the
duplication and gets a view of the whole team, which lets it act before being asked and
fit its work to each person.

This exercise makes the cost visible in ten minutes, using the team's own questions.

## Procedure

**1. Ask the team size** and who is in the room.

**2. Ask for three questions the team asks most weeks.** If they stall, offer three
categories: status questions ("where are we with X?"), where-is-it questions ("which is
the latest version?"), and how-do-we questions ("how do we handle Y?").

**3. For each question, work through three things,** one at a time:
- Who else probably asks it?
- What goes wrong when the answers differ? A concrete consequence: rework, a wrong figure
  sent out, a missed handover.
- What changes if one shared agent answered it once, where everyone can see?

**4. Ask the two reflection questions.**
- Where has AI made you faster in ways the team never sees?
- If an agent could see your shared space today, what should it notice first?

**5. Write the table** from `../../templates/repeats-table.md` into the Repeats section of
`multiplayer-pilot.md`, and say which row looks like the best first job for a shared
agent, and why.

## Quality criteria

- Three rows at least.
- Every "what goes wrong" names a concrete consequence. "Inefficiency" is not one.
- The table is in the pilot file, not only in the chat.
- Done means the team can point at one repeat and say what a shared answer would save.

## Example

Northgate Supplies, four-person operations team (invented).

| Question | Who else asks it | What goes wrong when answers differ | What one shared answer would change |
|---|---|---|---|
| What's the delivery status for the Harper order? | Sales, the warehouse lead | Sales quoted Thursday, the warehouse said Monday; the customer got both | One status, posted once, that sales and the warehouse both read |
| Which price list is current? | All four | An old discount went out on two quotes | The agent names the current list and its date every time |
| How do we log a damaged return? | New starters | Returns logged three ways; the monthly count is wrong | One method, written down, that the agent follows and points to |

Best first job: the delivery status line, because two people already answer it daily.

## Edge cases

- **The team names fewer than three.** Use the three categories in step 2; most teams
  find three in a minute.
- **A repeat is sensitive** (pay, a disciplinary matter, a client's private affairs).
  Leave it off the table; that work stays private.
- **Everyone agrees there is no duplication.** Ask who answers the newest starter's
  questions. There usually is.
