# The four principles, and how they fail

Read by every skill in this plugin. Paraphrased from Anthropic Academy, *Building
effective human-agent teams* (lesson 3), and the Claude blog post the course is built on
(`sources.md`). Read 22/10/2026.

## Why the set-up matters

Strong human-agent teams follow four deliberate practices. They help teams with no
agents too, but agents finish tasks faster, which raises the cost of being misaligned or
wrong. So the habits a team sets at the start matter most.

Most of these were healthy team habits before agents existed. Agents make skipping them
more expensive.

## 1. Right information access: work in public

Anything not written down and reachable is invisible to an agent. Agents learn only from
searchable text: chat channels, documents, code, meeting notes.

- Default channels to open within the team.
- Write decisions down the same day, where the team works.
- Draw a few workspace-level boundaries rather than deciding item by item what an agent
  may see.
- Keep direct messages for sensitive one-to-ones. Private work between one person and
  their own AI stays private; open-by-default applies to team work.

## 2. Clear roles with the right tools

One roster for humans and agents, one set of shared artefacts, one working space, agreed
at the start. Humans keep the roles only humans can hold, and make the most important
judgement calls.

- Every job has one owner, human or agent.
- Each agent gets tools matched to its job (the blog's examples: a data warehouse for
  analysis, a browser-testing tool for quality checks).
- Role descriptions and skill files make agents easy to specialise and copy.

## 3. A written north star

People write an ambitious, measurable goal grounded in the organisation's purpose, and
share it with the agents. People decide which agents may propose new work. An agent that
knows the goal can bring useful work towards it without being asked; the blog's example
is an onboarding goal that led an agent to suggest error-message changes, which measurably
improved onboarding the next week.

## 4. Gradual release: build trust over time

Autonomy grows with demonstrated reliability, one task type at a time, widened
deliberately.

- Start with a person reviewing everything.
- Add rubrics, tests or a second checking agent (doer and verifier).
- Agents write a weekly "lessons and missteps" note.
- Retest prompts and guardrails when models improve; old constraints can hold a newer
  model back.
- Agents batch their questions and limit how much each person has to read.

## Failure modes (edge cases across the plugin)

| Failure | What it looks like | Principle it breaks |
|---|---|---|
| Missing context | The agent proposes work the team already dropped in a private chat | 1 |
| Fragmented work | No roles, so people run personal AIs on the side and split the team's context | 2 |
| Item-by-item sharing | Decision fatigue, and confusion about what the agent can see | 1 |
| Stale guardrails | Constraints written for older models hold newer ones back | 4 |
| Human overload | The agent floods people with questions; review becomes impossible | 4 |
| Unverified output | No rubric or test, so quality drifts | 4 |

## How this plugin uses them

As advice. Every skill recommends; none blocks. A team may start anywhere, skip a stage,
or go ahead with a readiness gap open. The skills say plainly what a gap is likely to
cost, record the team's choice in `multiplayer-pilot.md`, and carry on.
