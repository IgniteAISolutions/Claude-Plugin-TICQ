---
name: team-roster
description: "Stage 4, step 4 of moving to shared agents: writes the team's roster with the agent on it. The agent drafts the list of recurring jobs from what it can read; the people assign one lead per job (a named person or the agent) and a drafter or preparer, say how often each runs and how its work gets checked, mark the decisions that need human judgement and one job not handed to the agent yet, and name who says yes or no to the agent's unrequested proposals. Use it whenever a team asks who does what with an agent, wants a roster or RACI including AI, or finds work being done twice. Triggers on \"draft our roster\", \"who owns what\", \"roster with the agent\", \"step 4\", \"we keep doing things twice\". Not the north star."
effort: medium
---

# Team roster

## Purpose

When nobody has written down who does what, people run their own AIs on the side, work
gets done twice, and the team's context splits. One roster for people and agents, agreed
at the start, fixes that. People keep the roles only people should hold and make the
important judgement calls; the agent takes the jobs it is suited to, with the tools they
need.

## Procedure

**1. Gather the inputs.** The project and its deadline, the people on it and what each is
good at.

**2. Draft the jobs list.** The agent drafts every recurring job it can see from the
shared space and the project's documents, and says what it read. The people add what it
missed.

**3. The people assign each job,** one at a time where it is not obvious:
- Lead: one named person, or the agent.
- Drafter or preparer.
- How often it runs.
- How its work gets checked (a rubric, a person, a second agent).
- Whether it involves a decision that needs human judgement.
- The tools it needs.

**4. Mark three more things.** Roles only a person holds; one job not handed to the agent
yet, and why; who says yes or no when the agent proposes work nobody asked for.

**5. Write it** from `../../templates/roster.md` into the Roster section of
`multiplayer-pilot.md`, and post it to the shared space so the agent can read it.

## Quality criteria

- No job has two leads and no job has none.
- Every job has a check, even if the check is "a person reads it".
- The agent's draft is labelled as a draft; every assignment came from a person.
- Done means the roster is in the pilot file and in the shared space.

## Example

Northgate Supplies (invented), project: winter stock changeover, deadline 30/11/2026.

| Job | Lead | Drafter | Frequency | Checked by | Human judgement? | Tools |
|---|---|---|---|---|---|---|
| Delivery status line | Northgate Ops (agent) | agent | daily | Priya, first two weeks | no | order system (read) |
| Supplier chase list | Tom | agent | weekly | Tom | yes, which supplier to push | inbox (read), shared drive |
| Price list check | Northgate Ops (agent) | agent | on change | rubric, then Leah | no | shared drive |
| Customer credit decisions | Leah | Leah | as needed | n/a | yes | accounts system |

Not handed to the agent yet: supplier chasing itself, until the chase list has run clean
for a month. Unrequested proposals go to Priya.

## Edge cases

- **Two people both claim a job.** Record both claims and send to the sponsor to decide.
  The agent never settles ownership.
- **A job nobody wants.** Leave it unassigned in the table, flagged; an unowned job in
  writing is better than one nobody admits to.
- **The agent cannot see a job's work.** Say so; that job is invisible to it until the work
  is written down where it can read it.
