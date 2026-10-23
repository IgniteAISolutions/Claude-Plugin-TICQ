---
name: settings-pass
description: |
  Walks every Cowork setting with the person and leaves each one deliberately on or off, with the reason written down. Permission mode, model and effort, connectors and how often each asks, web access, scheduled-task mode, memory, usage limits, the working folder, the writing-voice setting. Reads the current value off the person's own screen rather than reciting it, decides it against the workspace's firewall, and records the decision in System/settings-record.md so a later health check can tell drift from choice. Triggers on "/settings", "settings pass", "go through my settings", "what should be on", "set up my permissions", or as step 3 of /build. Never changes an admin-level setting; names it for the admin instead.
effort: low
---

# Settings pass

## Purpose

A setting nobody decided is a setting that will surprise somebody. Cloud mode left on
for a task that needs local files fails silently for weeks. A connector enabled by an
admin and never authorised by the person does nothing at all. The pass exists so every
setting has a decision and a reason behind it, and the health check has something to
compare against.

### Model and effort

**Low.** The decisions are made by the firewall and the list; the work is reading
screens and recording.

## Procedure

Read `references/settings-list.md`. For each setting, in order:

1. Ask the person to read the current value off their own screen. Do not recite it.
   Names and positions move between versions; `references/volatile-facts.md` in the
   plugin root says what was true when this was written, and the screen says what is
   true now.
2. State the recommended value and the reason in one sentence, drawn from the firewall
   in `CLAUDE.md`.
3. If they agree, they change it. If they do not, record their choice and their reason.
   Their reason wins; the record is what matters.
4. Write one line to `System/settings-record.md`: setting, value, reason, date, who
   decided.

Admin-level settings (org web access, connector enablement, seat limits) are named,
not changed. Write them as a list for the admin with the recommended value beside each.

## Quality criteria

- Every setting in the list has a line in the record.
- Every line has a reason, and no reason is "default".
- The record distinguishes "chosen" from "left as found".
- The admin list exists if any setting was admin-level.

## Example

Three lines from a settings record, in the shape the pass writes. The first real record
from this seat replaces them.

```
| Setting | Value | Reason | Date | Decided by |
| Permission mode | Ask before acting | First fortnight; review on <date> | <date> | seat holder |
| Scheduled tasks | Local | Tasks read the shared folder | <date> | seat holder |
| Web access | On, org level | Admin decision; the research skills need it | <date> | admin |
```

It is the standard because no reason is "default", the admin-level line is marked as
such, and a later health check can tell a choice from drift.

## Edge cases

- **A setting is not where the list says.** Say so, ask the person to find it, and
  note the new location in the record so the list gets corrected.
- **The person wants "Act without asking" from day one.** Say what it means: Claude
  proceeds without approval on everything except permanent deletion. Recommend "Ask
  before acting" for the first fortnight and a review date. Record their choice either
  way.
- **A scheduled task needs local files.** It must be a local task, and the machine
  must be awake with the app open. Say so, write it on the task, and check it against
  `references/cloud-vs-local.md`.
- **The org has turned web access off.** Record it and say which skills it affects.
  Do not work around it.
