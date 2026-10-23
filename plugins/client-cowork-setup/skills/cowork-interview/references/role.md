# The role interview

Per seat, 30 to 45 minutes, before the build day. The shortest of the three interviews
and the one that decides which starter skills each person gets and how they are tuned.

It uses the 3-5-4 method, already used with clients as a self-service
worksheet. Three signs of friction, five questions about the workflow, four decisions
about what to automate. Running it as an interview rather than a worksheet gets better
answers, because most people cannot see their own repetition. They are inside it.

## Before you start

Read the business interview output first. You are looking for where this person sits in
the job flow the owner described, and you will hear the same task described differently
from two seats. Both descriptions are useful and the difference between them is often
the finding.

Ask one question at a time. Never a batch, never a form.

Follow the thread. If an answer opens something interesting, go there and come back.

Push on vagueness. "I do a lot of admin" is not an answer. "Every Monday I rebuild the
same report from four spreadsheets and it takes ninety minutes" is.

## Step 1, find the friction, the 3 signs

Ask them to think of one task they repeat, then test it against three signs. Two out of
three and it is worth going further.

```
1. Do you do this every day, or every week without fail, in more or less the same way?
2. Does it take a long time while being simple? Clear rules, but it eats hours?
3. Are you copying information from one place to another? A system, a document, an email?
```

Then: name the one task. That becomes the working example for everything below.

Size matters here and people get it wrong in both directions. "Putting a travel pack
together" is the right size. "Looking after clients" is too big. "Pasting the address
into the header" is too small.

## Step 2, map the workflow, the 5 questions

Most people have never written this down, and the writing down is where the answer
appears.

```
4. TRIGGER. What starts it? Something always does, even if it is you remembering.
5. STEPS. What happens, in order? Open this, copy that, paste there, save, send.
   Ten to fifteen lines is normal. The boring detail is the part that matters.
6. HANDOFFS. Where does it pass to someone else, or to another system? System to
   system counts, and it is usually the bigger number.
7. TIME. How long does each step take? Per step, not the total. Measure it rather than
   estimating it.
8. PAIN POINT. Where does it stick or go wrong? What makes people groan? Do not be
   polite about it.
```

Question 7 is the one people rush. The whole day-30 measurement rests on it, so slow
down and get real numbers. If they do not know, ask them to time it once
before the build day rather than accepting a guess.

## Step 3, decide what to automate, the 4 boxes

Walk back through the steps from question 5 and put each one in a box.

| Box | What goes in it |
|---|---|
| **Must stay human** | Judgement, exceptions, relationships. Leave these alone |
| **Pure data transformation** | Information in, clear rules, information out. This box is the one that matters |
| **Just waiting time** | Waiting on a reply, an approval, someone else. Pure waste |
| **The 80% case** | The standard version. Automate that, handle the odd one by hand |

These map onto the business interview's classification: must-stay-human is human-only,
pure data transformation is agent-run, and the 80% case is usually owner-reviewed.
Waiting time has no equivalent there, and it is often the largest number on the page.

## Step 4, the questions that tune the skills

Everything above finds the work. This part decides how each starter skill behaves for
this person. Ask all of it, because a skipped answer here becomes a generic skill.

**For the morning brief**
```
9.  When do you actually sit down and start? Not when you arrive, when you start.
10. Do you want to read a brief, or talk it through? Be honest, there is no better answer.
11. What would have to be true for a day to have gone well?
```

**For inbox triage**
```
12. What counts as urgent in your job? Give me the last three examples.
13. Which senders always matter, whatever the subject line says?
14. What are you allowed to answer without checking with anyone?
15. What always goes to somebody else, and who?
```

**For meeting prep and follow-up**
```
16. Which meetings are worth preparing for, and how far ahead do you want it?
17. What do you always want to know about a person before you walk in?
18. Who are your regular counterparts, and what do your commitments to them look like?
```

**For drafting**
```
19. What do you write most often, and who reads it?
20. How formal does it need to be, and does that change by audience?
```

**The three jobs**
```
21. If you could hand over three jobs tomorrow and never think about them again, which
    three, and what would have to be true for you to trust that?
22. Who else touches your work, before you or after you?
23. When one of these is finished properly, what does that look like? How do you know?
```

Question 23 is the one that makes a skill good rather than plausible. A skill that does
not know what finished looks like produces something that reads fine and is wrong.

## What to write

Their section of `About Me/`, holding: the named task from step 1, the mapped workflow,
the four boxes with every step placed, the tuning answers from step 4, and the three
jobs from question 21 with the trust conditions attached.

Write it as you go, block by block, rather than holding it all to the end. If the
session drops they lose one block.

Where something was not answered, write "not yet answered" rather than a plausible
guess. A guess here gets believed, and it gets built on.

## The people note

Two things go wrong in this interview.

**They undersell the time**, usually to seem efficient. The manual's line works here
too: be honest with me rather than impressive. The bigger the real number, the bigger
the saving at day 30.

**They describe the job they think they should have** rather than the one they do. The
tell is a workflow with no pain point and no waiting time. Everybody has both. Go back
to question 8 and ask what went wrong the last time they did it.
