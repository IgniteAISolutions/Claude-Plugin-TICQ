# Multiplayer AI starter

Version 0.1.1. From IgniteAI Solutions.

For a team that already uses AI one person at a time and wants agents that work as
shared teammates. Single-player AI makes one person faster and leaves what they learn in
their own chat. Multiplayer AI puts people and agents in one shared space, so every
request and answer becomes something the next person, or the next agent, can build on.

## What it builds towards

A system that knows what is going on in the business and keeps every person informed:
**progress, actions, next steps.** It does not run the business. People make the
decisions; the shared agent keeps the picture current, says who owes what, checks the
work it is given, and earns more responsibility one task at a time.

This plugin walks a team through that move in four stages, then runs a small 30-day
pilot with them. It is built on Anthropic Academy's *Building effective human-agent
teams* course and the blog post behind it (`reference/sources.md`).

## It advises, it never enforces

Every skill recommends. None blocks. A team can start at any skill, skip a stage, or start
the pilot with a readiness gap open. Where a team sets advice aside, the skill says once
what that is likely to cost, writes the choice down, and carries on. It works alongside
whatever the team already uses; it replaces nothing.

Everything it produces is a draft for the team. Nothing is posted to a team's channels
without a person approving it.

## The skills

Say what you want in plain words, or name the skill.

| Stage | Skill | What it does |
|---|---|---|
| Start | `multiplayer-start` | Says where the team is and recommends the next step |
| 1. Diagnose | `find-the-repeats` | The questions the team asks every week, and what one shared answer would save |
| 2. Classify | `tool-or-teammate` | Whether each AI tool is a tool or a teammate today, and the smallest step towards teammate |
| 3. Readiness | `readiness-check` | Five questions: openness, ownership, tools, verification, direction. Gaps and a plan the team orders |
| 4. Pilot, steps 1 to 3 | `pilot-plan` | One space, three to five people, one agent, the set-up route, open-by-default, dates |
| 4. Pilot, step 4 | `team-roster` | Who does what, the agent included |
| 4. Pilot, step 5 | `north-star` | The goal people write and the agent works towards |
| 4. Pilot, step 6 | `first-job-briefing` | One visible first job: a team morning briefing, reviewed for the first days |
| 4. Pilot, step 7 | `rubric-builder` | Pass or fail checks for each task, and an optional verifier agent |
| 4. Pilot, step 8 | `trust-ladder` | Autonomy earned one task type at a time |
| 4. Pilot, step 9 | `capture-the-method` | Anything explained twice, written down once |
| 4. Pilot, step 10 | `weekly-retro` | What worked, what changes, the agent's lessons and missteps |

## Where everything is kept

One file in the team's shared workspace, `multiplayer-pilot.md`, created by
`multiplayer-start` from `templates/multiplayer-pilot.md`. Every skill reads and writes
it, so nothing lives only in a chat, which is the course's own rule applied to the plugin.

## The four principles underneath

`reference/four-principles.md`: work in public, clear roles with the right tools, a
written north star, and trust built over time. Each skill's edge cases come from the
failure modes listed there.

## Installing

From this repository's plugin marketplace, as **Available**: people install it when their
team is ready. It needs no connectors of its own. The pilot's agent is set up through
Claude Tag (Slack) or the Claude Managed Agents API; check what the organisation's plan
supports first.
