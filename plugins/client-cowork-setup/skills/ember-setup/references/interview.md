# The Ember setup interview, word for word

Read only the part you are on. Each question has the words to say, why it
is asked, what a good answer looks like, the fallback when the answer is thin, and where
the answer is written. One question per message. Adjust the words to the person; keep
the destination and the proof.

Plain words for the owner: "your working folder" for the vault, "a folder card" for a
`README.md`, "a page" for a knowledge page, "the map" for `System/Ember/map.md`, "the
never list" for `<policies>/what-never-goes-in.md`, "the graph" for Obsidian's view.
Never say front matter, wikilink, repo, MCP or YAML to the owner.

Where an answer never comes, write `not yet answered` and move on. Say once, at the
start, that "not sure" is a good answer and will be written down as that.

## Opening

Inside `/build`, after the acceptance bar: "The build has passed. The last step turns your
working folder into the knowledge base: the place where what the business knows is
written down with a source and an owner, so I answer from your records and never from a
guess. Nothing moves and nothing new sits beside your folders. Each folder's README
grows into a card that says what is in it and what it links to. About thirty questions,
one at a time. Say 'not sure' whenever you are."

Alone: the same, after one line naming the working folder and the storage it sits in.

Resuming: "Welcome back. Last time we stopped at [stage, in plain words]. I will check
what is already written still reads back, then carry on from there."

## Part one: the storage test

Say: "Before I write anything of yours, I check your storage can change a file as well as
add one. One small test file, rewritten, then read back. Then the same test the way a
scheduled run would do it, from the cloud."

Why: Ember edits cards and pages in place. A route that can only add files would leave
two versions of every card, and nothing would say which wins.

Pass, both routes: "Your storage changes files properly from here and from the cloud, so
the weekly and monthly runs can go in the cloud and your laptop does not need to be on."

Pass on the desktop, fail from the cloud: "From this computer your storage changes files
properly. From the cloud it does not, so the weekly and monthly runs will go on the
desktop. If the laptop is shut when a run is due, it happens when the laptop is next
opened."

Fail on the desktop: "Your storage can add a file here but cannot change one, and the
knowledge base needs both. The fix is a folder your storage's desktop app keeps on this
computer. I will stop here and write down what I found." Stop.

Written to: `System/Ember/connections.md`, the storage row's "Proven by" and the
"Scheduled runs" line; the test file in `System/Ember/reviews/`.

## Part two: governance

Say first: "Before I write a single page, I look for any rules you already have about AI
and personal data, because a knowledge base holds both. If you have them, your rules win
wherever they are stricter than mine."

### What was found

Say what was found and quote the rules that will apply, then: "Is there anything else,
anywhere, that sets rules for AI or personal data here? A policy, a contract clause, a
client's requirement?"

Why: a document the owner knows about and Claude did not find is the most likely gap.

Good answer: a named document and where it is, or "no, that is everything".

Written to: the governance source note in `<policies>`; `map.md`, "Sensitivity".

### The three basic questions, when nothing exists

**What personal data goes in.**

Say: "What personal information about clients, contacts or staff will go into the
knowledge base? Names, business contact details and what someone bought or agreed are
business records. Anything beyond that, say so now."

Why: it sets the boundary every capture is checked against.

Good answer: a short list in the owner's words, all inside names, contact details and
what was bought or agreed.

Fallback: the answer includes health, payroll, HR records, identity numbers or anything
given in confidence. Say: "That goes past what this setup can hold safely. It needs a
full governance step, which is separate work. I will write the basic boundary now and
record the gap." Write the boundary; record the gap for the setup review.

Written to: `<policies>/ai-use.md` point 2; the governance source note.

**Who can see it.**

Say: "Who in the business can see what the knowledge base holds? Is there anything only
you should see?"

Why: it fills the three sensitivity levels with named people.

Good answer: names against levels. "Tom and Ana see everything except money pages, which
are mine."

Fallback: "everyone". Ask once: "Is there anything about a client or about money you
would not want a new starter to read on day one?" Write what comes.

Written to: `<policies>/ai-use.md` point 3; `map.md`, "Sensitivity".

**What never goes in.**

Say: "What must never go in, whatever the reason? The list I start from is passwords and
logins, bank and card details, identity numbers, health, pay, and anything given in
confidence. Add to it. You cannot take anything off it."

Why: the floor protects the business on a scheduled run with nobody watching.

Good answer: additions specific to the business ("a homeowner's alarm codes").

Fallback: the owner wants a floor line removed. Say which line and why it is there, once.
It stays.

Written to: `<policies>/what-never-goes-in.md`, "Added by [company]".

### The governance owner

Say: "Who looks after data protection here? I will draft a short note for them saying the
knowledge base exists and what it holds. I will not send it."

Why: a knowledge base is a new processing activity, and it belongs in the record.

Good answer: a named person. Where it is the owner, the note is still written, as their
own record.

Written to: `<policies>/yyyymmdd-knowledge-base-note-draft.md`.

### The plan

Ask only where client or confidential material will go in. Say: "Can you open Claude's
settings and read me the plan name and the setting about how your data is used? I will
write what you read."

Why: the plan carries the terms on training use, and Ember does not assert them from
memory.

Fallback: they cannot find it. Write "plan and data-use setting: not yet read".

Written to: `map.md`, "Sensitivity", the plan line; a risk line in the setup review if
confidential client material is going in on an individual plan.

### Access, set in the tool

Say: "Next, the connections themselves. A rule that says I never send an email is only a
request. A connection that cannot send is a lock. For each one, open its permissions and
read me what it allows. Where it can be set to read only, we set it now. Your file
storage keeps write, because the knowledge base lives there."

Why: the controls should hold even when an instruction is misread, on a run with nobody
watching.

Good answer: each permission read off the screen, and read-only set where offered.

Fallback: the setting is greyed out or only an administrator can change it. Say: "Then
that is one for your administrator. I will name it in the setup review." Never change an
administrator setting from here.

Written to: `connections.md`, "Set in the tool"; any "cannot be restricted" as a risk in
the setup review.

## Part three: the business

### What the business does

Say: "In one paragraph, in your own words, what does the business do, for whom, and how
does it make money? Say it the way you would to someone you trust."

Why: every skill reads this first to know what kind of business it is answering for.

Good answer: who pays, for what, and how the money is made. "We design gardens for
homeowners and build the gardens on new-build plots for one developer. We charge a
design fee and a fixed build price per garden."

Fallback: "a bit of everything". Ask once: "Pick the job you did most last month. Who
paid for it, and what did they get?"

Written to: `map.md`, "The business", in the owner's words, spelling tidied only.

### The three priorities

Say: "What matters most in the business this year?" Then: "And next?" Then: "And the
third?"

Why: the build plan and the twenty questions are weighted to these.

Good answer: three things that could be checked by the end of the year.

Fallback: a fourth arrives. "Three only. Which leaves?"

Written to: `map.md`, "This year".

### The rhythm you already keep

Say: "How do you already look back on the week and plan the next one? A Monday plan, a
Friday review, a notebook on a Sunday night, a month-end with your bookkeeper? I fit the
knowledge base's runs around what you already do, rather than giving you a new habit."

Why: a report that lands just before a sit-down the owner already keeps gets read. One
that needs a new habit is the first thing dropped.

Good answer: a day and a time for the week, and a monthly sit-down if there is one.
"Friday afternoons I go through the week. First Monday of the month with the bookkeeper."

Fallback: "nothing regular". Say: "Then Friday afternoon is the usual place to start.
Which time on a Friday would you really sit down for ten minutes?" Write that time.

Written to: `map.md`, "The rhythm"; it sets the weekly review day and time in the build
plan and the times of both runs.

### The owner of the knowledge base

Say: "Whose name goes on the knowledge base as its owner? That person answers the weekly
review, and a page becomes company knowledge only when they say yes. It is never me."

Why: the contract needs a named human on every page and card.

Good answer: one person's name.

Fallback: a company or a role. "A person, because a company cannot say yes on a Friday."

Written to: `map.md` front matter and "Owner of the knowledge base"; every card's
`owner` unless stage 6 names another.

### The source order

Four questions, one at a time:

- "Which system holds your money: invoices, payments, what is owed?"
- "Where do you keep clients, contacts and what you have promised them? A system, a
  sheet, a notebook, whatever it really is."
- "Where do dates and meetings live?"
- "Where do the documents themselves live?"

Why: when two sources disagree, this order says which wins, and Ember never copies a
balance or a date it should read live.

Good answer: a named place for each. "In my head" is a real answer for contacts; write
it.

Fallback: never write a product the owner did not say.

Written to: `map.md`, "The source order"; each named tool in `connections.md` against
its slot.

## Part four: models

Say the recommendation, one sentence per job, from `references/models.md`. Then:

Say: "One question. Is cost or care the bigger worry for you this year?"

Why: it decides whether the weekly writing and the monthly check run on the stronger or
the cheaper model.

Good answer: one word. Then say: "Setup and the release step stay on the strongest model
either way, because a mistake there costs a client's trust."

Written to: `map.md`, "Models, per job".

## Part five: the link map

Say first: "I have matched each of your folders to what it is about. This is what the
graph will draw and what the weekly check looks for." Show the table.

1. "Is each of these right?" Why: a wrong match puts required links in the wrong place.
   Good answer: yes, or a named correction.
2. "Which of these does the business not have?" Why: a kind with no folder produces false
   gaps every week. Good answer: a named kind, which is dropped with its rules.
3. "What else does the business keep that matters and is not on the list?" Why: a
   business's own kind of record (plans, warranties, site surveys) deserves its own
   colour and its own link rule. Good answer: a named thing and one link it must carry,
   agreed.
4. "Which of your folders, if any, are published: case studies, the website, social
   posts?" Why: a public folder is reached only through `/release` and never links to a
   private one. Good answer: named folders, or "none yet".
5. "Who owns each folder? I will put you on all of them unless you say otherwise." Why:
   a card with no owner is reported every week.

Written to: `map.md`, "The link map", with the owner's name and today's date; the
`owner` and `zone` fields of each card.

## Part six: the build plan

Say the plan in no more than ten lines, then: "Is this the order you want? Change
anything."

Why: a knowledge base that starts everywhere finishes nowhere. A short, agreed first
month is what gets it used.

Good answer: a yes, or a named change. The weekly review needs a person, a day and a
time, taken from the rhythm they gave: "Priya, Fridays, by 16:00." "When I get a chance"
is pushed once: "Which day, and by what time?"

Written to: `hot.md`, "Open"; the setup review.

### What the weekly run may file on its own

Say: "Each week I look at what changed. Some things I can file without asking, because
you have said I may. Which kinds of document are safe for me to file with nobody
watching? A meeting transcript saved into a client folder, say, or a signed document.
Email is never on that list: I always ask about email."

Why: the weekly run is unattended, and anything it files without asking was agreed
here.

Good answer: one or two named kinds and where they live. "Transcripts in a client's
folder."

Fallback: "I'm not sure". Say: "Then nothing: I propose everything and you say yes in
the weekly review." Write "none: propose everything".

Written to: `map.md`, "Auto-capture".

## Part seven: the folder cards

Say: "Now I extend each folder's README into its card. Nothing you or the build wrote is
removed. Here are the first three, before and after." Show each diff. Then: "Shall I do
the other [n] the same way?"

Why: the owner sees the shape on folders they know before trusting it on the rest.

Good answer: yes, or a named change to the shape, applied to all.

For a README in an unfamiliar shape: "This README is not in the shape the build uses. I
will keep a copy in the archive, then write the card with everything it said."

Written to: each folder's `README.md`; `_archive/readme-before-ember/` for any copy;
`log.md`.

## Part eight: the twenty questions

Say first: "Now the questions people in the business ask most, the ones answered by hand
again and again. I need ten from you, one at a time. Then I will suggest ten more and you
keep the ones that are right."

For each: "Where does the answer live today: a document, a system, or a person?"

Why: the quarterly test scores Ember on these, so they must be the business's real
questions.

Good answer: a question someone actually asked last month, and a place.

Fallback: fewer than ten. "Think about last week. What did someone ask that you had to
look up?" Then write "n of 10 given". Never pad.

Then: "Each quarter I answer all twenty cold and score myself. How many of the twenty
should I get right before you would trust me with them? Sixteen is the usual line."

Written to: `System/Ember/questions.md`, the handover line, and each row with the page that should answer it,
named for the folder it will live in. A person named as the answer is noted; no person
page is written here.

## Part nine: the policies

Show each policy as it will be written. Say: "This is your rules page, written from your
answers. Is it right? A yes marks it verified."

Why: the policies govern every later run, so they are the first pages the owner verifies.

Written to: `<policies>/ai-use.md` and `<policies>/what-never-goes-in.md`; `trust:
verified` only on the yes, logged.

## Part ten: Obsidian

Say: "Your working folder can be viewed in a free app called Obsidian, which shows the
folders and pages as a map with the links between them. It is a window onto the folder;
the folder works without it. Is your working folder synced to this computer?"

If yes: "Go to obsidian.md and install it. When it opens, read me the buttons on the
first screen." Then: "Choose the one that opens a folder as a vault, and pick your
working folder itself, the one with CLAUDE.md in it." Then: "Read me the name at the top
of the window." Then: "Open the graph view. Read me three colours you can see, and which
folder each one is."

Why: the owner reading the colours off their own screen is the proof the graph matches
the agreed map.

Fallback: Obsidian asks whether to trust the folder's settings; they came with Ember and
set the colours. If it offers to create a new vault, they picked the wrong option: back
one screen. If no, "Then it is not opened yet. I will note it."

Written to: the setup review.

## Part eleven: the schedules

For each task, say: "The [weekly | monthly] run goes on [day and time], [an hour before
your weekly review | the working day before your monthly sit-down], [in the cloud | on
the desktop], because [reason from connections.md]. It checks the date first and writes nothing on any
other day, so an empty Tuesday is not a fault."

Then: "I will run it once now, by hand, and we read what it wrote together."

Why: punctuality proves nothing about correctness. The owner sees one real report on day
one.

Written to: the task's prompt; `map.md`, "The schedules"; `connections.md`.

## Closing

Say what exists now, in plain words: the map, the rules page and the never list, the
note for the governance owner waiting to be sent by them, the folder cards, the twenty
questions, the graph, the two runs and where they run. Then the acceptance line, ticked
with its two files or with what it still needs. Then: "Back to the build to close the
day."
