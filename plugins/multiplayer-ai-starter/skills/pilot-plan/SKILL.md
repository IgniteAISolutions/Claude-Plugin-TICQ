---
name: pilot-plan
description: "Stage 4, steps 1 to 3 of moving to shared agents: plans a small 30-day pilot on one page. Chooses one shared space, three to five people who already work on a project together, and one agent; helps choose how to set the agent up (Claude Tag in Slack, or the Claude Managed Agents API); and agrees the open-by-default habit, so decisions made in meetings or private messages are posted to the shared space the same day. Returns a pilot charter with a sponsor, a start date and a review date. Use it whenever a team is ready to start a pilot, wants to scope its first team agent, or asks Claude Tag or Managed Agents. Triggers on \"plan the pilot\", \"start small\", \"set up our first team agent\", \"Claude Tag or Managed Agents\", \"pilot charter\". Not the roster or north star, which have their own skills."
effort: high
---

# Pilot plan

## Purpose

Start soon, start small. One shared space, three to five people, one agent, for about
thirty days, is enough to learn what works and small enough that a misstep costs little.
A team that already trusts each other and shares a project gets there fastest.

## Procedure

**1. Scope.** Agree, one at a time:
- The space: one channel or shared workspace where the pilot team already works.
- The people: three to five, already on a shared project.
- The agent: one, with one name.
- The sponsor: the person who decides when the team disagrees.

**2. Choose the set-up route** (`../../reference/sources.md` notes these come from the course;
check current availability and plan before committing):
- **Claude Tag**, for a team that works in Slack.
- **The Claude Managed Agents API**, for anything else; someone technical owns the set-up.
Say which fits and why, and who will do it.

**3. Agree the open-by-default habit.** Decisions made in a meeting or a private message
are posted to the shared space the same day, because the agent can use only what is
written down and reachable. Agree who posts after each regular meeting. Private and
sensitive work stays private, outside the pilot.

**4. Set the dates.** A start date and a review date about thirty days later, both in the
sponsor's calendar. Suggest the review be a `weekly-retro` with a decision at the end:
widen, change, or stop.

**5. Write the charter** to the Pilot charter section of `multiplayer-pilot.md`, then
point to the next steps: `team-roster`, `north-star`, `first-job-briefing`.

## Quality criteria

- Names the space, three to five people, one agent, the route, the sponsor and both dates.
- The people already share a project.
- The open-by-default habit has a named person posting after each regular meeting.
- Done means the charter is in the pilot file and the dates are in the sponsor's calendar.

## Example

Northgate Supplies (invented).

> **Space:** #ops-orders in Slack. **People:** Priya (ops lead), Tom (warehouse), Sam (sales), Leah (accounts). **Agent:** "Northgate Ops". **Route:** Claude Tag, since the team lives in Slack; Priya sets it up. **Sponsor:** the operations director.
> **Open by default:** after Monday stand-up and Thursday supplier call, Priya posts the decisions to #ops-orders the same day.
> **Dates:** start 03/11/2026, review 03/12/2026.

## Edge cases

- **The team is not on Slack.** Claude Tag is out; recommend the Managed Agents API and
  say plainly that someone technical must own the set-up.
- **More than five people want in.** Recommend keeping the pilot at five and adding the
  rest after the review; if they insist, record the choice.
- **No shared project.** Pick one first; an agent with no common work has nothing to learn
  from.
- **The readiness check left gaps open.** Name them in the charter under "carried gaps",
  with who accepted each. They do not stop the pilot.
