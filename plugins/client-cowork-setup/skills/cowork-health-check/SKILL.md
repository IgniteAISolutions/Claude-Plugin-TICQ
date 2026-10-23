---
name: cowork-health-check
description: |
  Audits a Claude Cowork setup and repairs what is safe to repair. Proves the connected folder is really mounted with a round-trip write rather than reading its label, checks CLAUDE.md section by section against the standard, resolves every file path the rules point at, confirms the folders exist and hold something, tests every connector with a live read, lists the scheduled tasks and classifies each cloud or local, proves memory carries between sessions, then sweeps for contradictions between what the documents claim and what the machine does. Fixes the unambiguous, asks about the rest, and says NOT VERIFIED for anything it could not check itself. Triggers on "/health", "health check", "check my setup", "is my Cowork set up properly", "audit my install", "why is my scheduled task doing nothing", or at the day-30 review. Never sends, never deletes, never touches money. Not the build wizard, which is /build. Not the weekly audit and not the monthly MOT.
effort: high
---

# Cowork health check

## Purpose

A setup that looks right and is not right costs more than one that is obviously broken, because it never gets investigated. Seven weeks into one build, a whole-company session was still being spent on wrong folder paths, cloud mode left on, and connectors switched on at admin level and never authorised by the person. Every check below exists because it was earned.

Run it on an install that already exists, or at the day-30 review after `/build`. `/health` tests the wiring and `/mot` tests the thinking, and on day 1 of the month the local scheduled task runs both, this one first.

### Model and effort

Session model at **high**. Every finding is a judgement about whether a document agrees with the machine.

## Procedure

### How to run it

Work through the steps in order. Step 1 identifies the folder and everything after it is relative to that, so nothing gets reordered and nothing gets skipped.

Do not assume anything you have not checked with your own eyes. If you cannot verify something, say **NOT VERIFIED** and say what you would need. Guessing here is worse than not knowing.

Fix what is unambiguous and say what you fixed. Where there is any doubt, stop and ask before changing a thing.

Work quietly. Give the report at the end rather than narrating each step.

Never send, never delete, never touch money. If a fix would need any of those, it goes in WHAT NEEDS A PERSON instead.

### The steps

**1. Prove the folder is mounted.** A folder that reports itself connected and is not connected is the most expensive kind of broken, because everything downstream carries on working and the only symptom is a file card that will not render. A label is not a mount, and neither is a path on screen. Request the folder by its full path, then prove it with a round trip: append one dated line to `System/mount-check.log` and read that line back. Nothing is deleted, so the log becomes the record of every check ever run. Report the result in one of three words: **MOUNTED**, verified by round trip; **NOT MOUNTED**, refused, with the refusal quoted verbatim; or **NOT VERIFIED**, with what it would take.

Where the write is refused, the refusal names the location that blocked it, and that name is the finding. A protected location anywhere inside a folder makes the whole folder unmountable, permanently, until the layout changes. The usual case is the scheduled-task store sitting inside the workspace root: the first task created there makes the root unmountable from that moment, with no warning and no visible change. The fix is to connect a subfolder that holds no protected location, then write down which folder is the mount and why, or the next person repeats this diagnosis from nothing. Do not move the protected folder: scheduled tasks hold absolute paths into it, and every one of them unregisters and then fails quietly at its next run rather than at the moment of the move.

Then name the connected folder with its full path and list the top level. Say whether a `CLAUDE.md` sits at the top of it. If it does not, that is the single most important finding and it goes first in the report.

**2. Check `CLAUDE.md` against the standard.** Read it. Report every required section as present, missing or incomplete, and quote what you find rather than paraphrasing it. The section list is in `references/check-matrix.md`, and it reads the client's own `company-context.md` for the parts that vary by client. Where sections are missing and the file is otherwise the firm's own, the repair is an
upgrade, never a replacement: back the file up to `_archive/CLAUDE.md.<date>.bak`, add
the missing sections from the plugin template, keep everything else, and show the
difference before writing. **Anything still in square brackets counts as missing.** That one rule catches the most common defect on the list.

Then **resolve every file path the document names**. A rule that points at a file which is not there is a rule the person cannot follow, and it fails silently because the session simply proceeds without it. Where a named file has been moved to `_archive`, say so, because that is a pointer left behind rather than a file lost.

**3. Check the folders exist, hold something, and are named by subject.** Existence is half the test. An empty `About Me/` is a serious finding, because nothing else works without it. Then run `/structure` in audit mode: it counts the tree, names every stage-named folder (inbox, outputs, drafts, to-sort) and how many files sit in each, finds duplicate trees and nested rule files, and reports whether every folder to the second level carries a `README.md` with the four fields. A stage-named folder with more than fifty files in it is the finding to lead with, because it is where work goes to be lost. Propose, never apply, inside a health check.

**4. Check the voice profile is real.** Read it. Say in one line whether it is content or a placeholder. An unfilled profile is why people conclude Claude does not sound like them.

**5. Test the connectors.** One small live read each: today's calendar, the three most recent emails, one record from the CRM. Report which returned data and which failed. A connector enabled by an admin and never authorised by the person does nothing at all, so test rather than read a toggle.

**6. List the scheduled tasks.** For each: what it does, when it runs, when it last ran, and whether it is cloud or local. Then flag any cloud task that needs local files, because it is failing silently. The rule and the reasoning are in `../../references/cloud-vs-local.md`.

**7. Check memory carries.** Write a fact, start a fresh session, ask for it back. Memory that was never wired is invisible until somebody notices Claude has forgotten a client for the third time.

**8. The contradiction sweep.** Steps 1 to 7 test whether things work. This one tests whether the documents agree with the machine, and it is where the findings people cannot see themselves come from. Four checks, all mechanical, all in `references/check-matrix.md`: pointers that resolve, controls that cover every route the rules name, conventions stated once rather than twice, and memory's claims about the schedule matching the schedule. Two more in the same file: backups piling up (8e) and, where `System/Ember/` exists, whether the knowledge base is being kept (8f).

Every one of these was earned on the first live run of this skill, against the setup of the person who wrote it. A setup built by somebody careful still had all four.

**9. Repair what is missing.** Where the weekly review is absent, create it as a **local** task, Friday afternoon, and say why it has to be local. The wording is in `references/check-matrix.md`. Then say what will happen the first time it runs. This step is the difference between an audit and a fix.

**10. Day 30 only: check the skills still work.** Firing once on build day proves nothing about week four. Run each installed skill against its eval set and report anything whose output has drifted. A skill that has been quietly producing rubbish for six weeks is worse than one that never ran.

## Quality criteria

Short and scannable, in this shape, with no long paragraphs.

```
WHAT IS WORKING
WHAT I FIXED FOR YOU        (or "nothing needed")
WHAT NEEDS A PERSON         (each line naming who)
NOT VERIFIED                (and what it would take to check)
SEND THIS BACK              (three lines, ready to paste into an email)
```

## Example

No health-check report from a live seat is on record in this plugin yet. The report
shape is in the quality criteria above and the checks are in
`references/check-matrix.md`. The first report from a real seat, with identifying
details removed, goes here.

## Edge cases

Guidance, not rules. Judgement covers the rest.

- A clean sweep on a real install is rare. If every check passes first time, say so plainly and name what you actually tested, so somebody can tell a healthy setup from a check that did not run.
- "The connector is enabled" and "the connector works" are different claims. Only the second one is testable, so only make the second one.
- A file listed in a directory is not a file read. Open it before writing its status.
- `CLAUDE.md` present and `CLAUDE.md` finished are different findings. Report them differently.
- Where a fix would touch a client-facing draft, money, or anything outside the working folder, it belongs to a person, whatever the person says.
