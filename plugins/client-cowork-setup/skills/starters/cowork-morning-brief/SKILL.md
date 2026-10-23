---
name: cowork-morning-brief
description: |
  Reads the calendar, the inbox and the working folder first thing and gives back the day in one shape: what today looks like, one first move for the next 30 minutes, the day ranked MUST, SHOULD and COULD with a deadline time on every item, and anything already drafted and waiting to be sent. A MUST costs money, breaks a commitment to a named person, or blocks somebody else today, and the brief says which of the three. Runs in one of two shapes, prepare and hold or deliver, picked per person at build. Triggers on "/brief", "morning brief", "brief me", "what does my day look like", "what should I do first", "start my day", or on its scheduled desktop run. It drafts and never sends, money is read only, nothing is deleted, and anything client-facing waits for a person. Not a legal brief, case brief or briefing note for counsel. Not the cowork-health-check audit, not cowork-inbox-triage, not cowork-meeting-prep, not cowork-meeting-followup, not cowork-draft-in-my-voice.
effort: medium
---

# Morning brief

## Purpose

Claude waits to be opened. A person with a full day does not open it, so the day starts in the inbox and runs on whoever mailed first.

This skill goes the other way. It arrives before the inbox does, with one thing to do and a ranked list behind it.

The first version rendered a finished document at 07:00 and left it in a folder. It sat unread. The team that built this moved its own run to prepare and hold on 28-08-2026, where the run assembles everything and stops on one line, and the brief started getting used. Both shapes ship, and the build wizard picks one per person.

## Procedure

### How to run it

Work the steps in order. The ranking needs all three sources, so a brief written from the calendar alone is a timetable and gets reported as one.

Read the date from the calendar or a live clock before writing any time into the brief. Yesterday's date in the header kills trust in every line under it.

Say NOT CHECKED against anything you could not reach, and say what it would take. A silent gap reads as an all clear.

It drafts, it never sends. Money is read only. Nothing gets deleted; anything retired moves to an `_archive` subfolder. Anything client-facing waits for a person.

### The steps

**1. Fix the date, then read the day.** Meetings, times, travel, who is in each one, and where the gaps sit. A 45 minute gap between two calls is not an hour of work, so say what each gap is actually worth.

**2. Read the inbox for what changes today.** Anything carrying a date, anything from a named person waiting on a reply, anything that moves money. Leave the rest alone and say how far back you read.

**3. Read the working folder.** Open what has changed since the last brief. Name the folder you read and list what you opened, the same way step 2 says how far back it went. Deadlines live inside documents as often as they live in the calendar, and that is the half a calendar-only brief misses.

**4. Write the first move.** One thing, doable in 30 minutes, sitting down, with no one else to wait for. Name it, say where it starts (the file, the thread, the person), say why it goes first.

**5. Rank the day.** MUST, SHOULD, COULD, with a deadline time on every single line. A MUST costs money, breaks a commitment to a named person, or blocks somebody else if it does not happen today, and each MUST names which of the three it is. Three is the ceiling. Past three the ranking is wrong, so re-rank and say what moved down and why.

**6. List what is already drafted and waiting.** Every unsent draft, who it goes to, how long it has been sitting. This section gets the most action per line of anything in the brief.

### Scheduling

This one reads the working folder, so it is a desktop task. The rule and the reasoning are in `../../../references/cloud-vs-local.md`. Read them there rather than working from memory.

Desktop costs something, and that cost gets said out loud at build rather than left for the person to discover. The worked example, and what happens to a run whose machine was asleep, are in that same file.

### What the interview tunes

| Interview answer | What it changes |
|---|---|
| Start time and time zone | when the scheduled run fires |
| Prepare and hold, or deliver | the shape above |
| The named people they answer to | what counts as a broken commitment |
| What money looks like in the role: invoices, quotes, orders, payroll | what counts as a money MUST |
| Working folder path, and which subfolders matter | step 3 |
| Hours of real work a day actually holds | how long SHOULD is allowed to get |
| Voice profile at `About Me/[name]-voice-profile.md` | the wording of the brief and of anything it drafts |

## Quality criteria

### The shape on the page

```
TODAY                   two or three lines, the shape of the day
FIRST MOVE              one thing, 30 minutes, where it starts
MUST                    three at most, each with a time and its reason
SHOULD                  each with a time
COULD                   each with a time
WAITING ON YOUR SEND    drafts, who to, how long they have sat
```

### Two shapes

**Prepare and hold.** The scheduled run assembles the brief and stops on a single line saying it is ready. The person opens it when they sit down and talks it through. Better for anyone who wants a conversation, and better for anyone with ADHD, where a wall of text at 07:00 is a reason to close the laptop.

**Deliver.** The scheduled run renders the brief and it is waiting. Better for people who read and go.

Pick one per person at build and write the choice into the skill. Switching later costs one line.

## Example

No brief from a live seat is on record in this plugin. The two shapes are in the
quality criteria above. The first brief the person keeps reading after the first week,
with names and client details removed, goes here.

## Edge cases

Guidance, not rules. Judgement covers the rest.

- A calendar full of meetings and a day with room to work are different days. Say which one today is in the TODAY lines.
- The first move competes with the first meeting. Where the day opens at 09:00 with a call, the first move is preparation for that call or there is no first move worth naming.
- A deadline lifted from a subject line is somebody else's guess at urgency. Check the thread before it becomes a MUST.
- Four MUSTs on a Monday usually means the weekend's mail has not been triaged. Say that rather than ranking around it.
- An empty MUST section on a quiet day is a real finding. Write it plainly instead of promoting a SHOULD to fill the gap.
- Where a folder or a connector returns nothing, name the silent source in the brief. Half a brief presented as a whole one is the expensive failure here.
