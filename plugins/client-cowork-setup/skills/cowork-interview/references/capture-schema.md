# The capture schema

The three interviews produce prose. The build wizard and the day-30 review need numbers
they can compute with. This file is the bridge, and it exists because the field manual
tells the facilitator to take notes and never says in what shape.

Write these files as the interview runs, block by block. They live in the client's
working folder and the client can read and correct every one of them.

## Where the files go

```
About Me\
  company-context.md          the business interview, in prose, for humans
  task-inventory.md           the table below, the measurement baseline
  function-map.md             every task with an owner and a classification
  [name]-role.md              one per seat, from the role interview
  [name]-voice-profile.md     one per seat, from the voice interview
firewall.md                   the send, money and publish gates, in their words
```

## The task inventory

One row per recurring task. This is the frozen baseline, so it gets signed on the day it
is built.

| Column | Type | Notes |
|---|---|---|
| task | text | The client's own words for it |
| owner | text | A named person, never a role |
| mins_per_instance | number | Measured where possible. Mark estimates as estimates |
| instances_per_week | number | Monthly tasks convert: a 2-hour monthly task is 30 mins a week |
| mins_per_week | number | The product of the two above. Compute it, do not ask for it |
| classify | one of | agent-run, owner-reviewed, human-only |
| source | text | Which interview and which question it came from |
| measured | yes or no | Whether the time was timed or estimated |

Keep it as a markdown table. A client who cannot open the baseline cannot check it, and
a baseline they cannot check is one they will dispute at day 30.

### The day-30 calculation

Walk the same table, re-ask `mins_per_instance` and `instances_per_week` only, and write
the new numbers into new columns rather than overwriting the old ones. The old numbers
are the evidence.

```
hours_saved_per_week = sum(mins_per_week_before - mins_per_week_after) / 60
```

The guarantee asks for five hours a week. State the number with the assumption visible,
and say plainly which rows were measured and which were estimated. A modelled saving
presented as a measured one is the fastest way to lose an argument you were winning.

## The function map

Every row from the inventory, plus who owns the decision when the classification is
wrong. This is the document that lets a client say "that should not have gone out
without me" and get an answer rather than an apology.

| Column | Type |
|---|---|
| task | text |
| classify | agent-run, owner-reviewed, human-only |
| owner | named person |
| gate | which of the three firewall gates applies, if any |
| changed_on | date, when a classification moves |

Classifications move over time and that is the point. Widen what runs on its own where
the output has earned it, and pull a task back to a person where it has not. Record the
date either way, because an undated change is an argument waiting to happen.

## The role file, per seat

Written from the role interview. Free prose in the sections, structured where the
starter skills read it.

```
# [Name], [role]

## The named task
## The mapped workflow          trigger, steps, handoffs, time per step, pain point
## The four boxes               must stay human / pure data / waiting / the 80% case
## Tuning
  morning_brief_shape:          prepare-and-hold or deliver
  start_time:                   when they actually sit down
  urgent_means:                 their three examples
  senders_that_always_matter:   list
  can_answer_unchecked:         list
  always_route_to:              name, and what goes to them
  prep_lead_time:               how far ahead they want meeting prep
  regular_counterparts:         list
  writes_most_often:            what, and who reads it
## The three jobs               each with the condition for trusting it
## What finished looks like
```

The `Tuning` block is the part the five starter skills read. Everything above it is for
the person.

## Unanswered questions

Write `not yet answered` and move on. Never write a plausible guess, because a guess
here gets believed and then gets built on.

At the end of each interview, list what was skipped and offer to pick it up. A file with
honest gaps is worth more than a file with filler, and the gaps close over the first
fortnight if somebody can see them.

## The sign-off

The task inventory needs initials on the printed table, or a one-line email the same
day. Nothing else in this schema needs signing.

Record the sign-off in the file itself, with the date and who gave it. An unsigned
baseline stops being a baseline the moment anybody disagrees with it.
