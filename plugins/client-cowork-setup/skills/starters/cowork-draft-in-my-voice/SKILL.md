---
name: cowork-draft-in-my-voice
description: |
  Drafts an email, a proposal section, a report or a client update that reads like the person wrote it, by reading their voice profile first every time, including the raw writing samples kept at the bottom of that file. Weighs the samples above the written description of the voice. Says which part of the profile it was unsure about before it gets corrected, and offers to write any correction back into the file so the next draft inherits it. Triggers on "/draft", "draft this in my voice", "write this as me", "put it in my words", "make this sound like me", "draft a reply to this", "write the client update", "turn my notes into an email". It drafts and never sends, money is read only, it never deletes and retired files move to an _archive subfolder, and anything client-facing waits for a person. Not the cowork-health-check, not the cowork-morning-brief, not the cowork-inbox-triage, not the cowork-meeting-prep, not the cowork-meeting-followup.
effort: high
---

# Draft in my voice

## Purpose

A team stops using Claude for the writing that counts the moment somebody reads a draft and thinks it sounds like a machine. That judgement gets made once, quietly, and it sticks. On one build the voice interview was done properly and the profile still sat unread at draft time, so every draft came back in house-consultant prose and the person went back to typing from scratch. Reading the profile takes seconds. Losing the writing costs the whole install.

Use it for an email, a section of a proposal, a report, a client update, or anything else going out under their name.

### The firewall

It drafts, it never sends. The person sends. Money is read only. It never deletes; anything retired moves to an `_archive` subfolder. Anything client-facing waits for a person.

## Procedure

### How to run it

**1. Read the voice profile first, every time.** It lives at `About Me/[name]-voice-profile.md`. Read the whole file, samples at the bottom included. Say in one line that you have read it, so the person can tell a drafted voice from a guessed one.

**2. Weigh the samples above the description.** The written description is a second-hand account, made by someone describing their own writing under time pressure. The samples are the voice itself: how they open, how long their sentences run, whether they use contractions, how blunt they get, how they close. Where description and samples disagree, follow the samples and say you did.

**3. Settle what the draft has to do before writing a word.** Who reads it, what you want them to do afterwards, what came before it in the thread or the relationship, roughly how long, how formal. Ask if any of that is missing.

**4. Draft it.** Match the shape as well as the words: their opening move, their paragraph length, their sign-off. A draft with the right vocabulary and the wrong rhythm still reads wrong.

**5. Check every fact and every banned mark before handing it over.** Every figure, date, name, quote and claim about what was agreed either points at the file, email or note it came from, or is marked NOT VERIFIED in the draft. Then read the draft against the never list and the no-ai-slop standard in the profile, and fix every hit. Prevents a wrong number reaching a client under the person's name, and the draft that sounds like a machine.

**6. Say what you were unsure about.** Name the part of the profile that was thin, before the person has to tell you. Correction is how the profile gets better, so ask for it rather than waiting for it.

**7. Offer the correction back into the file.** When they change a line, ask whether to write that rule into the profile so the next draft carries it. The profile is a plain file they can open and edit themselves, and it should be growing.

### What tunes this per person

Everything here comes from the voice interview and lands in `About Me/[name]-voice-profile.md`. The build wizard fills it in.

- **Three pieces of their own writing they are happy with.** These become the sample block at the bottom of the profile, and they do more work than the rest of the file put together. Get them even when the interview runs late.
- **What they write most often** (email, proposals, reports, updates) sets the shape the skill reaches for first.
- **Who they write to most** (clients, their team, a board, suppliers) sets the register, meaning how formal the writing gets.
- **Words and phrases they never use** become the ban list at the top of the profile.
- **How they open and how they sign off**, in their own words, because those two lines carry more of a voice than the middle does.

An empty profile means this skill does the exact thing it exists to prevent. Say so and stop rather than drafting from a guess.

## Quality criteria

Take something the person actually wrote, from their sent mail or a document they own. Ask for a draft of the same thing through the profile, without reading their version first. Put the two side by side and let them say whether it sounds like them.

Every draft, every time: each figure, date, name and agreed point names its source or carries NOT VERIFIED, and nothing on the never list or the no-ai-slop standard survives into the draft. A source written as "from memory" is not a source.

Run it in the room, before anybody leaves. Where the draft misses, the profile is wrong and gets corrected while the person who owns the voice is still sitting there. A setup that fails this test gets used for the writing that does not matter and abandoned for the writing that does.

## Example

No example ships in the plugin, because the example for this skill is the person's own
best piece of writing, chosen on the build day and kept beside their voice profile. The
skill reads that file, never a generic one. If it is missing, stop and go and find it
with them before drafting anything.

## Edge cases

Guidance, not rules. Judgement covers the rest.

- This one reads the working folder, so any scheduled run of it is a desktop task. The rule and the reasoning are in `../../../references/cloud-vs-local.md`. Read them there rather than working from memory.
- Where a draft does not sound like them, say so first and name the part of the profile you were unsure about. Waiting to be corrected teaches the file nothing.
- A correction the person makes twice is a rule the profile is missing. Offer to write it in on the second time at the latest.
- The voice stays the same across a report and an email. Only the register moves.
- Someone dictating rough notes is handing you the voice directly. Keep their phrasing where it works and edit around it.
- Long documents drift. Re-read the samples before drafting the closing section of anything over a page.
- A draft that hedges everything reads as machine-written whatever the vocabulary. If the person commits to a view in their samples, commit in the draft.
