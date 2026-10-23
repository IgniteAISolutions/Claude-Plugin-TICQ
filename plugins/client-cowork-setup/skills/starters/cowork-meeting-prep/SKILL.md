---
name: cowork-meeting-prep
description: |
  Builds a briefing before a meeting. Pulls the next 48 hours of calendar, searches email for the thread behind each one, reads the working folder and any connected drive for related documents, and reads the followup notes from last time so the loop closes. Hands back who is in the room and what each of them cares about, what happened last time, what is still unresolved, and three things worth raising. Triggers on "/prep", "prep me for", "prep me for tomorrow", "what do I need to know before this call", "who am I meeting", "brief me on my meetings", "get me ready for the client call". Drafts only. Never sends, never deletes, money is read only, and anything client-facing waits for a person. Not the daily scan cowork-morning-brief, not the write-up cowork-meeting-followup, not cowork-inbox-triage, not cowork-health-check, not cowork-draft-in-my-voice.
effort: medium
---

# Meeting prep

## Purpose

A good meeting has half an hour of digging behind it, and that digging usually happens in the ten minutes before the call, badly. The person walks in holding the agenda and having forgotten the thing they promised last time. So the client repeats themselves, and the meeting spends its first quarter getting back to where the last one ended.

This runs on request and hands back a page you can read standing up.

It pairs with `cowork-meeting-followup`. What that skill wrote after the last meeting is what this one reads before the next, which is how the loop closes.

## Procedure

### How to run it

Default window is the next 48 hours. If the person names one meeting, one company or one person, prep that and ignore the window.

Work quietly. Narrating each search burns the time the skill exists to save.

Mark anything you could not confirm as **NOT FOUND**, and say where you looked. A blank is a finding. A guess dressed as a fact gets repeated in the room.

It drafts, it never sends. Money is read only. It never deletes; anything retired moves to an `_archive` subfolder. Anything client-facing waits for a person.

### The steps

**1. Get the meetings.** Read the calendar for the window. For each one, note the title, the time, who was invited and which of them has actually accepted. An invitation with no acceptances against it yet is worth flagging on its own.

**2. Work out who is in the room.** For every external attendee, pull what the connected sources hold: past email from them, their signature block, their company, their role. Write one line per person on what they care about, drawn from their own words rather than from their job title.

**3. Read last time.** Search the working folder for followup notes from `cowork-meeting-followup`, matched on the attendee names, the company and the meeting title. Those notes carry what was said, what was agreed and who owed what. Where a note exists, it outranks your reading of the email thread, because somebody wrote it down deliberately.

**4. Search email for the thread.** Read the whole thread in both directions, oldest first. The answer is usually four messages below the newest one. Check what the person has already sent, so the briefing never suggests raising something already raised.

**5. Check the documents.** Look in the working folder and any connected drive for the proposal, the report, the contract or the deck this meeting is about. Open what you find. A filename is not a document.

**6. Pull the open threads.** Anything promised, asked for, quoted or scheduled that has no closing answer in the record. Give each one its age in days and say who owes it.

**7. Pick three things worth raising.** Three, chosen because they move something, not because there were three left in the list. Each one gets a sentence saying why now.

### What the interview tunes

Fill these from the person's role interview, and read their voice profile at `About Me/[name]-voice-profile.md` so the briefing reads like their own notes.

| Interview answer | What it changes |
|---|---|
| Which meetings are worth prepping | Whether the window covers everything or only external and client meetings. Internal stand-ups usually want skipping |
| How far ahead they want it | The default 48 hours moves to the night before, or to Sunday for the week |
| What they always want to know before walking in | The IN THE ROOM lines. Some people want the last thing that person said, some want the commercial position, some want the personal detail that makes the first minute human |
| Which sources they trust | Ordering of the search: the folder first for a delivery role, email first for a sales role |

## Quality criteria

One page per meeting, in this shape.

```
MEETING              title, time, where, who accepted
IN THE ROOM          one line per person, what they care about
LAST TIME            what was said and what was agreed
STILL OPEN           each with an age and an owner
THREE THINGS         each with a reason it matters today
NOT FOUND            and where you looked
```

Keep it short enough to read in a lift. A three-page prep pack gets skimmed, and skimming is where the promise from last time gets missed again.

## Example

No briefing from a live seat is on record in this plugin. The shape is in the quality
criteria above. The first briefing the person reads before a real meeting and does not
need to add to, with names and client details removed, goes here.

## Edge cases

Guidance, not rules. Judgement covers the rest.

- Absence of a transcript means there was no recording. It never means there was no meeting. Say the recording is missing and carry on with the email and the notes.
- An email sent before a meeting says nothing about how the meeting went. Check its timestamp against the start time before drawing any conclusion from it.
- The calendar title is what somebody typed weeks ago. The email thread is what is actually happening. When they disagree, believe the thread and say so in the briefing.
- One connected mailbox is not all their mail. "No email found" is a statement about the mailbox you can reach, and it gets written that way.
- Three things worth raising means three. Handing over eleven is handing the work back.
- Where this is set to run on a schedule rather than on request, it reads the working folder, which makes it a desktop task. The rule and the reasoning are in `../../../references/cloud-vs-local.md`.
- Where a meeting has no history at all, say that plainly and prep it as a first conversation. Inventing continuity is worse than admitting there is none.
