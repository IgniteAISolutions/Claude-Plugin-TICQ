---
name: cowork-build
description: |
  Runs day one for one seat, from a folder Claude has never seen to a working system the person has already used, and proves every step took. Opens by reading their real folder and producing something useful in the first twenty minutes, then does one live task they brought, then introduces each piece of setup as the repair for a failure they just watched: folders and descriptors, context files, settings, connectors, the firewall. Builds their first skill from the task they just did with /twin, stages the schedules, sets the target list, walks the acceptance bar, rolls straight into the knowledge base with /ember-setup, then closes with /end. Triggers on "/build", "build day", "set me up", "run the build", "get me started", "new seat". Never sends, never deletes, never touches money. Not the interviews, which are /interview; not the audit, which is /health.
effort: high
---

# The build

## Purpose

One seat, about two and a half hours of working time, on a day when the business and
role interviews are already done. The voice profile is built on the day, from their
own files, because that is where it comes from.

The principle that orders the day: **setup is taught as repair, never as
prerequisite.** Produce something worth having in the first twenty minutes, then
introduce each piece of setup as the fix to a failure they have just watched happen.
People repair problems they have felt. They resent forms.

### Model and effort

Session model at **high** throughout. This is the day the person decides whether the
tool is for them, and every judgement about what to say next is worth the effort.

## Procedure

### The gate, before anything

Four conditions, all true, or this stops: seats provisioned with the client owning
admin; connector authorisation cleared with their IT; the plugin installed and Cowork
opened once on the machine; the business and role interviews done with files on disk.
Plus one thing the person brings: **one live task they were going to do today**, agreed
when the session was booked. Without it the day becomes a demo, and demos impress once.

Name what is missing and stop. Do not carry on without the interview output; a build
without it produces a generic Cowork that does not know them, and the day gets spent
proving that.

### How to run it

Read `references/sequence.md` and work the twelve steps in order. They are
dependency-ordered, so the order is the method. One step per message. Explain each
thing in one sentence before you do it, in plain language, and say what a term means
the first time you use it.

**Verify every step before moving on.** Each verification in the sequence is a test,
not a look. Read the file back. Make the live call. Watch the task fire and read what
it produced. Where you cannot verify, say NOT VERIFIED and what it would take. A step
reported as done that was not done is worse than one reported as failed, because it
never gets revisited.

**Write as you go.** If the session drops, they lose one step.

### What a person has to click

Claude writes files, creates folders, installs skills and stages schedules. A person
authorises each connector, because the sign-in belongs to them, and a person reads
each setting off their own screen. Say which is which as you reach it.

### Running it twice

Safe by design. Detect what exists and repair rather than duplicate. Somebody resuming
a half-done build never starts again; starting again is how people abandon wizards.

## Quality criteria

Walk `references/acceptance-bar.md` at step 10, before the knowledge base, and record it.
Binary. Step 11 decides the knowledge base line; step 12 closes with every box true or the
open one named. Never call it live early.

## Example

No completed build day is on record in this plugin yet. `references/sequence.md` is the
shape of the day, twelve steps: about 150 minutes, then 60 to 90 for the knowledge base. The first day that runs to
acceptance on a real seat produces a `/end` review, and that review, with the client's
identifying details removed, goes here as the example.

## Edge cases

- **Their folder is chaos.** The cold open returns a shrug and the best moment of the
  day is spent. Point at one project folder; if even that is a mess, the cold open
  becomes "read these six documents", and /structure runs earlier than step 4.
- **They arrive with no real task.** Do not invent one. Ask for the thing they would
  otherwise be doing at four o'clock. If there is nothing, run the morning brief on
  their real calendar and inbox instead, and say why.
- **Setup overruns.** The win is first, so an overrun costs polish, not the outcome.
  Cut in this order: schedules, then settings beyond the first three, then the target
  list. Never cut the first skill or the firewall. The knowledge base is never cut; it
  moves to a second session in the same week and resumes where it stopped.
- **The room has ten seats.** Checkpoint every step, hands up when done, the room does
  not move until it is level. Build the shared skills once; each seat layers one
  role-specific skill in their own session.
- **A demo on invented data is asked for.** Decline it. Fire the first skill on the
  person's own real data. It is the moment that sells the day, and it is also the
  first calibration.

### Gotchas

- Scope the folder to one stream of work. Documents or Downloads is letting a new
  colleague read every file they have.
- Set the usage budget on the day. Somebody who burns a quota in week one concludes
  the tool is expensive rather than that the budget was never set.
- Point scheduled tasks at drafting, never sending, while trust is being built.
- The target list is the step people skip because the room is tired. It is the one
  defect that undid a whole client build, so it is the last thing that gets cut.
