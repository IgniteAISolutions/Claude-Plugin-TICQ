---
name: cowork-interview
description: |
  Runs the interviews that make a generic Cowork build specific to one organisation and one person. The business interview once per firm and the role interview once per seat, both before the build day in the person's own time. The voice profile is not an interview: it is mined from ten real pieces the person wrote and was happy with, then fifteen questions fill what samples cannot show, on the build day or before it. Writes the context files from their answers, so the person never opens a text editor. Triggers on "/interview", "run the interview", "the pre-work", "business interview", "voice interview", "role interview", "set up my profile", or when /build stops because the pre-work is missing. Never sends, never deletes, never touches money. Not the build wizard, which is cowork-build, and not the health check, which is cowork-health-check.
effort: high
---

# The interviews

## Purpose

This is the part that turns a generic plugin into their system, and it does not
compress. The business and role interviews take two to three hours of the client's
hardest effort, so they run beforehand, asynchronously, in the person's own time.

The voice profile is different. Nobody can describe their own voice; they can only
recognise it. So it is mined from their real writing first and interviewed second.

### Model and effort

Session model at **high**. Deciding which answer is thin and which thread to follow is
the whole job.

### What produces what

| Interview | Who | How long | Writes |
|---|---|---|---|
| Business | The owner or leadership, once | 90 to 120 min | `company-context.md`, the function map, the task inventory |
| Role | Each person | 30 to 45 min | `About Me/[name]-role.md` |
| Voice | Each person | 30 to 45 min | `About Me/[name]-voice-profile.md`, mined from samples, then fifteen gap questions |

Every seat inherits the business interview. Run it first.

## Procedure

### How to run any of them

Read the reference for the one you are running and follow it. The wording in those files
was tested in real rooms, so use it rather than improving it.

- Business: `references/business-32q.md`
- Role: `references/role.md`
- Voice: `references/voice-mining.md` first; `references/voice-100q.md` is the question bank the fifteen gap questions are drawn from, never run in full cold
- The file shapes all three write into: `references/capture-schema.md`

Four rules hold across all three.

**One question at a time.** Never a batch, never a form. A form gets the answers people
think they should give.

**Follow the thread.** When an answer opens something interesting, go there and come
back. The script is the floor rather than the route.

**Push on vagueness.** "I write conversationally" is not an answer. "I write like I am
explaining something to a friend who is short of time and will stop reading if I waste
it" is one. Ask again, differently, until you get the second kind.

**Write as you go.** After each block, write to disk and say you have done it. If the
session drops they lose one block instead of the lot.

### Show it back

At the end of each interview, show them what you wrote and walk it in one line per
section. Then ask three questions.

What did I get wrong? Is there anything here you do and wish you did not? If you read
something drafted from this, what would make you say you would never write that?

The last one produces the do-not list, which is the part that stops bad drafts.

Something will be wrong. That is the point of showing it.

## Quality criteria

Say which of the three are done, which seats are outstanding, and what `/build` still
needs before it will run. The build wizard checks for these files and stops without
them, so an honest list here saves an argument on the day.

## Example

No example profile ships in the plugin, because a real one belongs to the person it
was mined from. The shape is `references/capture-schema.md`; the mining method, with
what a good and a thin sample look like, is `references/voice-mining.md`. The first
profile a client agrees to share, anonymised, goes here.

## Edge cases

### What people find hard

Taste is what somebody rejects, so most of a useful voice profile is what they would
never do. Ask for the rejections directly, because people volunteer their preferences
and hide their refusals.

Accept voice input and expect mess. Writing neatly is not a condition of being
interviewed.

Where an answer never comes, write `not yet answered` in the file and move on. A guess
gets believed, and then it gets built on.

### Gotchas

- The interviews are the build. Everything after them is assembly. Anyone who describes
  the client's part as light is about to build a thin system.
- The task inventory is where most builds win or lose, and it is the block where people
  fade. When they fade, stop and take the break.
- Most owners call everything human-only at first. Coach them row by row rather than
  arguing. The question that works is in `references/business-32q.md`.
- Time estimates get undersold to seem efficient. A real hour beats an impressive
  twenty minutes, and it is worth more at day 30.
- Cowork ships its own writing-voice setup. This plugin writes a file instead, because
  the drafting skill has to read it and the client has to be able to edit it. Running
  both leaves two profiles that disagree, so run one.
- Do not run the hundred questions cold. A person asked "what words would you never
  use" gives a sanitised answer; the same person crossing a buzzword out of a draft
  gives the truth. Mine first, ask second, and let the rest accumulate from what they
  reject over the following weeks.
- A voice profile keeps the raw writing samples at the bottom. A description of a voice
  is a lossy copy, and the samples are the original.
