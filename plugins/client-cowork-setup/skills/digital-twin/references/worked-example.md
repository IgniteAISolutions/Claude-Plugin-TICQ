# Worked example: the weekly client report

An operations manager at a professional services firm. Seven clients, one report each,
every Friday. She has done it for four years and described it, when asked cold, as
"pull the numbers, write it up, send it".

## The walk

Against last Friday's actual report for one client. What came out under questioning:

- She opens the time-tracking export first, not the previous report, because the
  previous report anchors her and she once carried a wrong figure three weeks running.
- She looks up the client's contracted hours every time, in the engagement letter,
  because two clients changed terms mid-year and nobody told her.
- The judgement call: if utilisation is under 70%, the report leads with the reason
  rather than the number. "If they see 62% before they see why, I get a phone call."
- Done means: the partner can read it in ninety seconds and knows whether to call the
  client this week.

## The example

Her best one was March, client four. Opened from her files. What made it the best: it
led with one sentence a partner could act on, the table had four columns not nine, and
it said plainly that the month was thin because the client had paused a workstream.

The bad one was the July report that took a rounding error from the previous month
forward. The fix she made afterwards: never open last week's report until this week's
numbers are in.

## The never list

Never "as per". Never a table wider than five columns. Never a percentage without the
hours behind it. Never "going forward". Never send without the engagement letter open.

## Version one, and the miss

Built and run on the second live case, client two. The output was 340 words and
led with the utilisation figure. She read it and said "the partner would call me."

Two misses. Too long: fix to quality criteria, "under 200 words". Led with the number
when utilisation was under 70%: fix to procedure, "check utilisation against 70%
before writing the first sentence; below it, lead with the reason". Neither fix went
into a general instruction to be more careful.

## Version two

Run on client two again. 180 words, led with "Utilisation was 64% because the client
paused the data workstream on the 12th; hours resume Monday." She said "that is what I
would have written." Stop.

## What was filed

The skill, her March report as the example, both live cases as the eval set, and a
role map with the next task on it: the month-end pack, which she named as "the one
that eats a day".

## The skill, as filed

`Skills/weekly-client-report/SKILL.md`, with her March report beside it as
`example-2026-03-client-four.md` and the two live cases in `evals/`. Five parts, in
this order, and nothing else.

```
---
name: weekly-client-report
description: Writes the Friday client report from the time-tracking export. Triggers on "Friday report", "client report", "weekly report for". Never sends it; the partner sends.
effort: medium
---
# Weekly client report

## Purpose
One report per client every Friday, so the partner knows in ninety seconds whether to
call the client this week. Fires on "Friday report", "client report", "weekly report
for <client>". Never sends; the partner sends.

## Procedure
Before you start: this week's time-tracking export, and the client's engagement letter
open at the contracted hours. Not last week's report.
1. Read the export in full before writing anything. Prevents drafting from page one.
2. Look up contracted hours in the engagement letter, every time. Prevents the mid-year
   change nobody announced.
3. Check utilisation against 70% before writing the first sentence. Below it, lead
   with the reason. Prevents the phone call.
4. Write the sentence the partner can act on, then the table, then the note on
   anything paused.
5. Open last week's report only now, to check nothing carried forward is wrong.

## Quality criteria
Under 200 words. The first sentence is the one the partner acts on. Table no wider
than five columns. Every percentage carries the hours behind it. Never "as per", never
"going forward". Saved as `Projects/<client>/Reports/<yyyy-mm-dd>-weekly-report.md`.
Done means the partner could read it in ninety seconds and know whether to call.

## Example
`example-2026-03-client-four.md`. Led with one sentence a partner could act on, four
columns, and said plainly that the month was thin because a workstream was paused.

## Edge cases
Hours missing from the export: say so in the first line and report on what exists; do
not estimate. Contracted hours in the letter disagree with the tracker: report both and
flag it; do not pick one. A client paused a workstream: lead with it, as in the
example. A figure that looks carried forward from last week: check the export, not the
previous report.
```
