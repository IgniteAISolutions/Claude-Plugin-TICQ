# Cloud or desktop, and why every scheduled task gets classified

Get this wrong and tasks run on time and do nothing, which is worse than not running at
all. Anthropic's own warning on scheduled tasks is that punctuality proves nothing about
correctness, and a task quietly producing the wrong output costs the team's trust in
every other task alongside it.

Verified against Claude Academy on 28-08-2026. Where this file and a trainer's memory
disagree, re-check the Academy before the build day.

## The rule

- A **cloud** run works on the web and in the mobile app. It does not need the desktop.
  It reaches **connectors but not local folders**.
- A **desktop** run needs the machine on. It reaches the local folder. If the computer
  or the app was closed when the task was due, **the task catches up when you are back**.

That last clause matters, and it is the half people get wrong in both directions. A
desktop task on a laptop that sleeps overnight is not lost, it is late. The task that
fails and keeps failing is the **cloud task that needs local files**, because no amount
of waiting gives it the folder.

Set them up with the schedule command. Cadences are hourly, daily, weekday, or on
demand. Scheduled tasks are Cowork only, and a scheduled run has the same access as any
other Cowork session.

## Where it runs

A session stays where it started, so to change where the work happens you start a new
session. The working rule holds: where you create it is where it runs. Creating a task
in the desktop app and expecting it to run in the cloud is not something you can change
afterwards.

## The working default

| The task | Type |
|---|---|
| Reads or writes the working folder | desktop |
| Only touches connectors: calendar, email, CRM | cloud |
| Needs both | split it, or make it desktop and say why |

## What the plugin must do with it

Every scheduled task it creates gets classified out loud, and the classification is
written where the client can read it rather than buried in a settings pane.

When a task is classified desktop, say what that costs. A 07:00 brief on a laptop that
wakes at 08:30 arrives at 08:30, so either the person accepts a late brief or the task
moves to a time the machine is on.

## The check

Listing a task is not testing it. Read when it last ran, and compare that against when
it should have run.

- A **cloud** task with no run history is broken.
- A **cloud** task that runs on schedule and writes nothing useful is the silent
  failure, and it is the one to hunt for. Read its output rather than its status.
- A **desktop** task running hours late is usually the machine. Say so rather than
  reporting it as a fault.
