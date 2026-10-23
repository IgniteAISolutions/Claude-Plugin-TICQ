---
name: tool-or-teammate
description: "Stage 2 of moving to shared agents: works out whether an AI tool the team relies on is a single-player tool or a multiplayer teammate. Asks three questions per tool, one at a time (does it act under its own name and sign-in, does it remember the team's goals between conversations, can it read the team's shared spaces), then says which it is today, what the team keeps re-explaining or losing because of that, and the smallest change this week that moves it one step towards teammate. Runs on one tool or several. Use it whenever a team asks whether its AI tools are really shared, what makes an agent a teammate, or what to change about a chat assistant, meeting notetaker or AI in documents. Triggers on \"tool or teammate\", \"is our AI a teammate\", \"stage 2\", \"what's missing from our assistant\". Not the readiness check (stage 3)."
effort: medium
---

# Tool or teammate

## Purpose

The line between a tool and a teammate is identity. A single-player agent is an
extension of one person: it signs in as them and knows what they know. A multiplayer
agent works as itself, and the team decides what it can reach and which tools it has.

Three capabilities make an agent a teammate:
1. **Its own identity and credentials**, not borrowed from a person.
2. **Shared memory** that grows from everyone who works with it.
3. **Shared context**: it reads what the team writes in shared spaces, so it stays current.

This skill checks one tool at a time against those three and finds the smallest next step.

## Procedure

**1. Pick the tool.** A chat assistant, a meeting notetaker, AI inside documents,
anything the team relies on. Several are fine; run the questions for each in turn.

**2. Ask the three questions, one at a time,** and wait for each answer:
- Does it act under its own name and sign-in, or under yours?
- Does it remember the team's goals between conversations, or start fresh?
- Can it read the team's shared spaces, or only what you paste in?

**3. Place it.** Tool (none of the three), partway (one or two), or teammate (all three).

**4. Say what the team is losing,** in their terms: what gets re-explained, re-pasted or
answered differently because of the missing capability.

**5. Name the smallest change this week** that moves it one step: a shared project
instead of personal chats, a team account for the notetaker, pinned instructions everyone
uses, a shared folder it can read.

**6. Ask the two reflection questions.**
- Which tasks would benefit from one shared set of instructions and context?
- Which recent decision was made out loud and never written down?

**7. Write it** to the Tool audit section of `multiplayer-pilot.md`.

## Quality criteria

- Each of the three questions has an answer, from the team, per tool.
- The smallest change is something this team can do this week, with a named owner.
- Done means each tool has a place, a loss and a next step in the pilot file.

## Example

Northgate Supplies (invented), the meeting notetaker.

> **Identity:** signs in as whoever started the call. **Memory:** none between meetings. **Shared context:** notes land in each organiser's own account.
> **Today: tool.** Lost: actions from Tuesday's supplier call sit in one person's notes; two people chased the same supplier on Wednesday.
> **Smallest change:** send every meeting's notes to the shared operations channel the same day. Owner: the ops lead, from Monday.

## Edge cases

- **Teammate on identity, no shared memory.** Partway; name memory as the gap.
- **The team does not know how the tool signs in.** Mark it unknown and name who would
  (usually whoever administers the account); do not guess.
- **A tool that must stay single-player** (an assistant handling one person's HR or
  client-confidential work). Say so and leave it; the move is for team work.
