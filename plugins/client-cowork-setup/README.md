# Your Cowork, {{CLIENT_NAME}}

**A user guide to the sixteen skills in your Cowork plugin**

Version 0.2.0. For the person sitting at the seat. Keep it open beside Cowork for the first fortnight; after that you will not need it. If you are ever unsure what to type, type `/guide`.

---

## What you have

Claude Cowork is Claude working inside your own folders, with your own email and calendar connected. On its own it is a capable assistant that knows nothing about you. This plugin gives it sixteen skills.

A skill is a set of instructions Claude follows for one job: the morning brief, the inbox, a meeting write-up, a draft in your voice. Each one was written from how people in firms like yours actually do the job, then tuned to you on your first day from your own answers and your own files.

You call a skill by typing its command, `/brief` for example, or by saying what you want in ordinary words. "What does my day look like" runs the same skill as `/brief`. The command is there when you want to be exact.

## The four rules it never breaks

These hold in every skill, on every seat, and nothing you type will change them.

1. **It drafts. It never sends.** Every email, message and follow-up lands as a draft for you to read and send yourself.
2. **Money is read only.** It can read an invoice or a figure. It cannot pay, move or change anything financial.
3. **It never deletes.** Anything retired goes into an `_archive` folder. Nothing is lost.
4. **Anything a client will see waits for a person.** You.

If it ever appears to have broken one of these, tell {{CLIENT_CONTACT}} the same day.

## Your first day

The build day runs for about two and a half hours with a facilitator, and it starts by doing something useful before any setup. You bring one real task you were going to do that day anyway. Claude reads your working folder and does the task with you. Then, one piece at a time, it sets up what it needs, and each piece arrives as the fix for something you just watched go wrong: your folders, your writing voice, your settings, your connectors, your first skill.

Three things only you can do on the day. You sign in to each connector yourself, because the login belongs to you. You read each setting off your own screen. And you bring the task.

By the end you will have used it for real, seen it get something wrong, corrected it, and watched it get it right. That last part matters more than anything in this guide.

## How to talk to it

Say what you want done, where the result should go, and how you will know it is finished. "Draft a reply to Jo about the September dates, keep it short, I'll send it" is a good instruction. "Deal with Jo" is not.

One job per message. It works better on "sort my inbox" then "now prep me for the two o'clock" than on both at once.

Correct it out loud. "Too long." "I would never say 'going forward'." "The summary goes first." Every correction goes into the file that produced the mistake, so the next run inherits it. A correction you make twice becomes a rule. This is how it learns your job; there is no other way.

When it says **NOT VERIFIED** or **NOT CHECKED**, it is telling you it could not confirm something with its own eyes. That is it being honest. Ask what it would take to check.

---

## The skills you will use every day

### /guide, your coach

**What it does.** Answers what any skill does, in the words of this guide. When you ask for help with a job in your own words, it runs the skill that does that job and tells you which one it picked. For your first thirty days it opens every session with one suggestion: a skill you have not tried yet, or something you could build. On Mondays it tells you what you used last week, what you have not, and one thing worth ten minutes. It stops on its own once you have the hang of everything.

**When to use it.** Whenever you are not sure what to do. It is the safe thing to type.

**What to type.** `/guide`, or "help", "I'm stuck", "what can you do", "what should I do next", "what could I build".

**What it never does.** Gives you a list when one suggestion will do. Keeps nudging after you say stop, or after you are confident.

### /brief, the morning brief

**What it does.** Reads your calendar, your inbox and your working folder first thing, and gives back the day in one shape: what today looks like, one first move for the next thirty minutes, then everything ranked MUST, SHOULD and COULD with a deadline time on every line. A MUST is something that costs money, breaks a promise to a named person, or blocks somebody else today, and the brief says which. It finishes with anything already drafted and waiting for you to send.

**When to use it.** Start of the day. It can also run on a schedule so the brief is waiting when you open the laptop.

**What to type.** `/brief`, or "what does my day look like", "what should I do first", "brief me".

**What it never does.** Sends anything. Puts more than three things in MUST without saying what it moved down.

### /triage, the inbox

**What it does.** Reads everything since the last run and puts each message in exactly one of four buckets: needs a reply from you, needs a decision from you, someone is blocked waiting on you, and safe to ignore. It leads with whoever is waiting. It drafts the replies it is allowed to write, in your voice, and for the ones only you can write it says why it stopped.

**When to use it.** Twice a day is the usual rhythm, or whenever you come back from being away.

**What to type.** `/triage`, or "sort my email", "what have I missed", "who is waiting on me".

**What it never does.** Sends a reply. Deletes a message. Answers on a subject you told it always goes to someone else.

### /prep, before a meeting

**What it does.** Looks at the next forty-eight hours of your calendar, finds the email thread behind each meeting, reads the documents in your folder, and reads the write-up from the last time you met these people. Hands back one short page per meeting: who is in the room and what each of them cares about, what happened last time, what is still unresolved, and three things worth raising.

**When to use it.** The evening before, or the morning of.

**What to type.** `/prep`, or "prep me for tomorrow", "who am I meeting", "get me ready for the client call".

**What it never does.** Guesses. Anything it could not find is marked NOT FOUND with where it looked.

### /followup, after a meeting

**What it does.** Takes a transcript, a recording summary or your typed notes and turns it into actions with an owner and a date, decisions with the name of whoever made them, a draft follow-up message, and a separate list of the things promised in passing that never got an owner. That last list is the one that saves you the most. It files the write-up where `/prep` will find it next time, and offers to put every dated commitment in your calendar.

**When to use it.** Straight after the meeting, while the recording is fresh.

**What to type.** `/followup`, or "write up the call", "what did we agree", "who owes what".

**What it never does.** Sends the follow-up. Creates a calendar entry without asking. Invents an owner where the record names none: it writes UNOWNED and says who was in the room.

### /draft, writing in your voice

**What it does.** Writes an email, a proposal section, a report or a client update that reads as though you wrote it. It reads your voice profile first every time, including the real pieces of your writing kept at the bottom of that file, and weighs those samples above any description of how you write. It tells you which part of the profile it was unsure of, before you have to, and offers to write your correction back into the file.

**When to use it.** Anything going out under your name.

**What to type.** `/draft`, or "write this as me", "put it in my words", "turn my notes into an email".

**What it never does.** Sends. Drafts from an empty profile: if the profile is missing it says so and stops, because a guessed voice is worse than none. Hands you a figure, a date or an agreed point without saying where it came from: anything it could not trace is marked NOT VERIFIED.

### /sub-agent, the big jobs

**What it does.** When a job has many separate parts, such as twelve contracts to check or a month of supplier emails to compare, it plans the job, hands each part to a helper running at the same time on a lighter, cheaper model, and checks every result before you see one joined-up answer. It tells you the plan and the size of the job before it starts, and says plainly what it could not cover.

**When to use it.** Whenever the job is "go through all of these". It also steps in on its own when another skill has a wide job to do. For one question or one document it stays out of the way.

**What to type.** `/sub-agent`, or "check all of these", "go through every", "compare these", "do this for each".

**What it never does.** Lets a helper send, delete, pay or change a record. Helpers read and prepare; anything that leaves goes through you. Hands you five separate reports when one checked answer will do.

---

## The skills that build and keep your system

### /twin, turning a task into a skill

**What it does.** Sits with you and turns one task you do into a skill Claude can run, by asking about the job rather than handing you a form. It walks a real instance of the task with you, goes after the reasoning behind how you do it, opens your files to find the best example you have ever produced, builds a first version, runs it on a second real case while you watch, and corrects each miss in the one place that caused it. You leave with something tested, and with a map of what to digitise next and what should be left to people.

**When to use it.** When you notice you have done the same thing three times. Your first one is built on the build day.

**What to type.** `/twin`, or "I keep doing this", "capture how I do this", "build me a skill for".

**What it never does.** Shows you the form while it is asking. Puts a skill that touches money, clients or records live without a yes from whoever the firm named.

### /end, closing a session

**What it does.** Reviews the session against your firm's own rules, checks everything it wrote against your voice profile, names what it learned, and files each lesson where it will act: a skill that misfired gets the fix written into that skill, a fact you corrected goes into memory, a task you keep doing goes on the list for `/twin`. Then it tells you in one line per change what it changed and where.

**When to use it.** The end of every working session. Two lines for a trivial one; it does not invent lessons.

**What to type.** `/end`, or "wrap up", "that's it for today", "what could I have done better".

**What it never does.** Files a lesson you disagreed with. Claims a fix is live when it is not.

### /structure, your folders

**What it does.** Counts what is in your workspace, finds every folder named for a stage rather than a subject (inbox, outputs, drafts, to-sort) and says how many files are stuck in each, then proposes the layout the plugin builds to: folders named for who or what they are about, with a short README in every one saying what belongs there and what does not. It shows you the full table of where everything would go, with a reason per line, before a single file moves. On your yes it copies rather than moves, checks every file arrived, and writes a report.

**When to use it.** On the build day. Again whenever you cannot find things.

**What to type.** `/structure`, or "sort my folders", "my files are a mess", "where should this go".

**What it never does.** Deletes. Moves anything without a yes for your seat.

### /settings, every switch decided

**What it does.** Walks every Cowork setting with you: how much it asks before acting, which model and effort, which connectors and how often each asks, web access, where scheduled tasks run, memory, usage limits, your working folder. For each one you read the current value off your own screen, it recommends a value and gives the reason in one sentence, and the decision is written down with your reason. A later health check can then tell a choice from an accident.

**When to use it.** On the build day. Again after any Cowork update.

**What to type.** `/settings`, or "go through my settings", "what should be on".

**What it never does.** Changes a setting only an administrator can change. It names those for the admin instead.

### /health, is it still working

**What it does.** Audits the whole setup. Confirms the connected folder, checks the rules file section by section, opens every file path the rules point at, tests every connector with a live read, lists every scheduled task and says whether it runs in the cloud or on your machine, proves memory carries between sessions, and sweeps for places where the documents say one thing and the machine does another. It fixes what is unambiguous, asks about the rest, and says NOT VERIFIED for anything it could not check itself.

**When to use it.** Day thirty. Whenever a scheduled task seems to do nothing. Whenever something feels off.

**What to type.** `/health`, or "check my setup", "why is my scheduled task doing nothing".

**What it never does.** Reads a toggle and calls it tested. Repairs anything ambiguous without asking.

### /audit, what to build next

**What it does.** Looks back over the week and finds the jobs you did the same way three times or more, with the proof for each one. It picks the best of those, at most three, and tells you about them in one short note. Nothing gets built until you say yes.

**When to use it.** Friday afternoon, or whenever you wonder what to automate next. It also runs on its own on a schedule.

**What to type.** `/audit`, or "what should I automate", "what did I repeat this week".

**What it never does.** Builds a skill without your yes. Keeps suggesting the same idea after you have said no twice.

### /mot, the monthly check-up

**What it does.** Once a month it checks whether your rules file, your memory and your skills still agree with each other. It weighs how much Claude has to read before it can start work, finds places where two files say different things, and writes a short memo with a numbered list of fixes. It makes the safe fixes itself and asks you about the rest.

**When to use it.** The first of the month, or whenever Claude seems to be contradicting itself.

**What to type.** `/mot`, or "run the monthly check", "why does Claude keep contradicting itself".

**What it never does.** Rewrites your rules file from scratch. Sends anything, deletes anything, or touches money.

### /interview, the pre-work

**What it does.** Runs the interviews that make a generic Cowork yours: the business interview once per firm, the role interview once per seat, both before the build day in your own time. It asks one question at a time, pushes back on vague answers, and writes your answers into the files Claude reads, so you never open a text editor. Your writing voice is different: nobody can describe their own voice, so it is mined from ten real pieces you wrote and were happy with, then fifteen questions fill what the samples cannot show.

**When to use it.** Before the build day. The build will not start without it.

**What to type.** `/interview`, or "run the interview", "the pre-work".

**What it never does.** Guesses an answer you did not give. It writes "not yet answered" and moves on.

### /build, day one

**What it does.** Runs the build day for one seat, in the order described earlier: the live task first, then each piece of setup as the repair for a miss you just watched, your first skill through `/twin`, and `/end` to close. It verifies every step with a real test before moving to the next, and anything it could not verify is reported as such.

**When to use it.** Once per seat, with a facilitator. Running it again is safe: it finds what exists and repairs rather than starting over.

**What to type.** `/build`, or "set me up", "new seat".

**What it never does.** Starts without the interviews. Calls the build live before the acceptance bar is walked.

---

## How your skills are built

Every skill in this plugin, and every skill `/twin` builds for you, has the same five parts in the same order.

**Purpose.** What it is for, the words that make it run, and what it must never do without asking.

**Procedure.** What has to be open before it starts, then the steps in the order you actually work, each one there to prevent a named mistake.

**Quality criteria.** Standards the output has to meet that can actually be checked: under two hundred words, the summary first, never "as per". Ending with where the result goes and what finished looks like.

**Example.** One real piece of your own work, the one you would point to as the standard.

**Edge cases.** What to do when the input is thin, when two sources disagree, when something is missing, and when a case reaches a line it needs a yes for.

You will never be asked to fill these in. `/twin` asks about your job and the five parts fill in behind the questions. But once a skill exists, the five parts are what you will see if you open it, and they are where every fix goes. When a skill gets something wrong, say what was wrong and the fix goes into one part: too long goes to the quality criteria, a step it skipped goes to the procedure, an odd case goes to the edge cases, the wrong tone goes to the example. One miss, one rule, one place. A skill fixed this way gets better. A skill fixed with a paragraph of general advice gets worse.

## What runs on its own

Seven jobs run by themselves, on a schedule, once they are set up on your build day.

- **The morning brief**, every day at 07:30: the day ahead and one first move, waiting when you open the laptop.
- **Inbox triage**, at 08:00 and 14:00: your email sorted into four buckets, with the easy replies drafted.
- **The Monday nudge**, Monday at 08:00: one suggestion for what to try or build next, until you have the hang of things.
- **The weekly flywheel**, Friday at 16:00: up to three ideas for what to build next, with the proof behind each one.
- **The filing sweep**, Friday at 16:30: a list of anything that landed in the wrong folder this week.
- **The monthly check-up**, the first of the month at 08:00: a check on the wiring, then a memo on the thinking.
- **The backup**, Sunday at 20:00: a copy of your rules, memory and skills, zipped and saved.

They only run when your laptop is open and Cowork is running: a job that reads your folder needs the machine awake to do it. None of the seven ever sends anything; every one only drafts or writes something for you to read.

## When something goes wrong

| What you notice | What to do |
|---|---|
| It does not sound like me | Correct the draft out loud, then say "write that into my profile". Twice is a rule. |
| A scheduled task did nothing | `/health`. A task that reads your folder runs on your machine, which has to be awake with Cowork open. |
| It said NOT VERIFIED | Ask "what would it take to verify that". It will tell you. |
| It will not send | Correct. It never sends. Read the draft and send it yourself. |
| It cannot find a file | Tell it where the file is, or run `/structure`. |
| I have done the same task three times this week | `/twin`. |
| It did something I did not ask for | `/end`, and say so. The lesson gets filed against the skill that did it. |
| A setting seems wrong since an update | `/settings`. |
| It used a word I would never use | Say so. The word goes on your never list and it stays there. |

## The words it uses

**Draft.** Anything written but not sent. Every message it produces is one.

**Skill.** A set of instructions for one job. Sixteen come with the plugin; `/twin` builds more.

**Connector.** A link to your email, calendar or drive. You sign in to each one yourself.

**Scheduled task.** A skill that runs on its own at a set time. A cloud task runs on Anthropic's servers and cannot see your folders. A local task runs on your machine, sees your folders, and needs the machine awake with Cowork open.

**Working folder.** The one folder Claude can see. Everything it reads and writes lives inside it.

**CLAUDE.md.** Your rules file, written from your interview. Claude reads it at the start of every session.

**Memory.** Facts Claude keeps between sessions, in a file you can open and edit.

**Voice profile.** The description of how you write, with real samples of your writing at the bottom. `/draft` reads it every time.

**The firewall.** The four rules on the second page.

## Who to ask

{{CLIENT_CONTACT}} is your firm's champion for Cowork, at {{CLIENT_CONTACT_EMAIL}}. Ask them first. For anything they cannot answer, your IgniteAI contact: chris.duffy@igniteaisolutions.co.uk.

---

*Built for {{CLIENT_NAME}} by IgniteAI Solutions Ltd. Plugin version 0.2.0, October 2026.*

---

*Installing or packing this plugin? The developer notes are in `docs/for-the-installer.md`. A printable copy of this guide is `docs/Cowork-User-Guide_v0.2.0.docx`.*
