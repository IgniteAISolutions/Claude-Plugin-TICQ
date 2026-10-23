---
name: cowork-meeting-followup
description: |
  Turns a transcript or a page of notes into actions with an owner and a date, decisions with the person who made them, a draft follow-up message, and a list of the things promised in passing that never got an owner. Writes the write-up into the working folder under the client's naming convention so the next prep run finds it, and offers to put every dated commitment in the calendar. Triggers on "/followup", "follow up on that meeting", "write up the call", "what did we agree", "who owes what after that call", "turn this transcript into actions", or straight after a meeting that produced a recording. It drafts and never sends. Money is read only. It never deletes; superseded files move to an _archive subfolder. Anything client-facing waits for a person. Not the pre-meeting brief, which is cowork-meeting-prep. Not cowork-morning-brief, not cowork-inbox-triage, not cowork-draft-in-my-voice, not cowork-health-check.
effort: medium
---

# Meeting follow-up

## Purpose

A meeting leaves two kinds of debt behind it. The action list is the obvious kind and most people capture it. The expensive kind is the thing offered in passing, by whoever happened to be talking, that lands on no owner and surfaces six weeks later when the client asks where it is. One engagement lost a fortnight to a report three people had each assumed another was writing. The whole of step 4 exists because of that fortnight.

This pairs with `cowork-meeting-prep`. Prep reads what this run writes, so the file has to land where prep will look for it.

## Procedure

### How to run it

Point it at a transcript, a recording summary, or typed notes. It works from whatever exists and says which of the three it had.

Read the whole record before writing a line of output. A decision reversed in the last five minutes is still the decision.

Work quietly. Give the output at the end rather than narrating each step.

It drafts and never sends. Money is read only. It never deletes; a superseded write-up moves to an `_archive` subfolder beside it. Anything client-facing waits for a person.

### The steps

**1. Name the source.** Which meeting, when it ran, who was in it, and where the record came from. If the transcript is partial, or the notes cover half the call, say so here rather than burying it at the end.

**2. Pull the actions.** One line each: what, who owns it, by when. Where the record names no owner, write **UNOWNED** and say who was in the room when it came up. Where it names no date, write **NO DATE** and propose one from what was said about timing.

**3. Pull the decisions.** What was decided and who decided it. A decision with no name against it is a discussion, so record it as a discussion and say what would settle it.

**4. Sweep for the loose promises.** Go back through for anything volunteered, agreed or half-agreed that never became an action. "I'll dig that out." "Leave it with me." "We can probably get you the numbers by then." Each one goes on its own list with the exact words and the timestamp, because both sides remember the promise and each assumes the other is carrying it. Give this list its own heading in the output. It is the part people skip and the part that costs them.

**5. Draft the follow-up message.** Actions and dates first, decisions under them, then the open questions. Tone and length come from the voice profile. It stays a draft, always. Whether the mail connector can save a draft is in `../../../references/volatile-facts.md`, so check there before promising one. Where it cannot, put the message in the write-up for copying and say that is what you did.

**6. Write the file.** Into the working folder, under the client's naming convention as recorded in `company-context.md`, so prep finds it next time without being told where to look. Give the full path in the output so it can be opened and checked.

**7. Offer the calendar entries.** Ask before creating them, then create the ones that get a yes. Put the evidence in the description: what was promised, by whom, in whose words, and the one thing to check before acting.

### Tuning

Fill these from the role interview and the voice profile at `About Me/[name]-voice-profile.md`.

- **Who they meet regularly.** Names, organisations, which meetings recur. This tunes step 1, and it stops the write-up guessing at who "Dave from ops" is.
- **What their commitments usually look like.** A report, a quote, an introduction, a data pull. Typical turnaround for each. This tunes steps 2 and 4, and it is what lets the sweep recognise a promise it has seen before.
- **How formal their follow-ups need to be.** From the voice profile. A partner writing to a regulated client and a founder writing to a mate they met at a conference need different drafts from the same call. This tunes step 5.
- **Where the working folder is and how files are named.** From `company-context.md`. This tunes step 6.
- **Who gets copied by default.** This tunes step 5 and belongs in the draft rather than in a person's head.

## Quality criteria

- Every action has an owner and a date, or is marked as having neither, in the
  person's words.
- Nothing appears that was not said in the meeting; a decision the transcript does not
  support is flagged, not written.
- It is a draft. Nothing is sent by this skill.
- Done means the person can send it after reading it once.

## Example

No follow-up from a live seat is on record in this plugin. The first one the person
sends without editing, with names and client details removed, goes here.

## Edge cases

Guidance, not rules. Judgement covers the rest.

- A commitment with a date on it belongs in the calendar as well as in the note. A ledger is a record, a calendar entry is a prompt, and people run on prompts. Calendar writes are reversible, so they sit inside the firewall rather than outside it. Ask first, then create.
- Read what the other side actually said about timing before setting any date. A client who ruled out September twice on the call has given you an answer, and the silence after it is the agreed position. Chasing that reads as not having listened.
- The voice profile governs the draft message and nothing else. The action list wants to be dull and precise.
- A promise made by the client is still a promise. Both directions go on the list.
- Where the transcript is ambiguous about who owns something, say so and ask. A confident wrong owner is worse than an open question, because it gets copied forward into every following write-up.
- When this runs as a scheduled task it reads and writes the working folder, which makes it a desktop task. The reasoning is in `../../../references/cloud-vs-local.md`.
