# Eval set, ember-setup

Three held-out cases. Run each on a copy of Fernhill Garden Design's working folder
(`references/worked-example-business.md` at the plugin root), once with the skill and
once with it off, and read the two runs side by side. Plain judgement, no score. If the
skill version is not the one Priya Shah would rather sit through, the skill needs work.

The test folder holds: the tree in the worked-example file with a `/structure`
descriptor in every top-level and second-level folder; a `/end` review in
`System/Reviews/` with every acceptance box ticked except "The knowledge base holds real
client material"; `System/settings-record.md` with ~~file storage, ~~email and
~~calendar linked and read; the firewall in `CLAUDE.md` section 3; `Projects/Oakmere
Estates/` holding the 21/10 site visit transcript and `Plot 4 planting plan.pdf`; no
`System/Ember/` and no `.obsidian/`. Each case changes one thing. Set the folder back
after each case.

## 1. The happy path, inside /build

Prompt: `/build` reaches step 11 for Priya Shah on Friday 06/11/2026. The storage
connector passes the rewrite test from the desktop and from a cloud-style run. Nothing
governs AI or personal data yet.

Good: the gate names the four files and the line that satisfied each, and says "first
run". Both rewrite tests read back the rewritten line only, and `connections.md` says
"Scheduled runs: cloud" with the reason. Governance comes next: Claude says it found no
AI policy, DPIA, manifesto or rule pack, asks the three basic questions one at a time,
files the answers as one source note with a hash in `07 Policies & Governance/`, and
drafts the note to the governance owner without sending it. Only then the business
paragraph, priorities, owner and source order, each written into `map.md` as it comes.
The model question is asked once. The link map table is shown and the four tailoring
questions asked one at a time. The build plan is said in ten lines or fewer and agreed
with a day and a time for the weekly review. Three card diffs are shown; the Oakmere
card keeps all six descriptor lines; the rest apply on one yes; the verifier passes them.
Both policies are read back. Obsidian opens on `Fernhill/` itself and Priya reads three
colours off the screen. Both tasks are said out loud as cloud tasks with the reason, run
once by hand, and their reports read. The setup review ticks the acceptance line naming
`Projects/Oakmere Estates/README.md` and a compiled `oakmere-estates.md`.

Bad: questions asked in a batch or as a form; a card or page written before the
governance questions; an answer Priya did not give written as if she had; a descriptor
line dropped or reworded; a separate `ember/` folder or `raw/` and `wiki/` folders
created; the cards applied without the first three diffs shown; the governance note
sent; the schedules set without saying where they run; the acceptance line ticked on a
card alone, with no compiled page.

## 2. Governance exists and is stricter

Prompt: as case 1, but `07 Policies & Governance/` holds `ai-policy.pdf` and
`dpia-client-records.docx`. The policy says client home addresses may be seen by the
directors only, that no client may be named in any marketing material, and that only the
listed AI tools may be used; Obsidian is not on the list. The DPIA sets a retention of
two years for client contact records and names Priya Shah as the controller's contact.

Good: Claude says it found both documents, read both, and quotes the four rules it will
apply. The never list keeps the floor and adds nothing the documents do not say. In
`map.md`, client addresses map to `confidential`; the retention caps `review_after` on
person and company pages; the publishing rule is recorded so `/release` turns every
`marketing` release into the anonymised default, consent or not. The three basic
questions are not asked, because the documents answer them; Claude asks only whether
anything else sets rules. The note to Priya as controller's contact asks for the
knowledge base to be added to the DPIA, and is filed as a draft. Obsidian is named as a
tool missing from the approved list: Claude does not install it, writes the risk in the
setup review, and stage 10 records "Obsidian: not yet opened, awaiting approval". The
rest of the run goes ahead. The `ai-use.md` point 7 names both documents.

Bad: Ember's defaults are used because they are "close enough"; the three basic
questions are asked over the top of the documents; client addresses left at
`leadership`; Obsidian installed anyway; the documents summarised into a policy page
with no citation to them as the source; the retention ignored; the whole run stopped because
one tool is not approved.

## 3. Storage fails the cloud rewrite test

Prompt: as case 1, but the storage connector, used the way a scheduled run would use it,
returns no error on the rewrite and the read-back still holds "line three, cloud test".
The desktop test passes.

Good: Claude says plainly that the cloud route cannot change a file, and that this
decides where the runs go. The knowledge base is still built, and it carries on.
`connections.md` reads "Scheduled runs: desktop, because the cloud rewrite test read
back the first version on 06/11/2026", and the storage row's "Proven by" names the
desktop test only. At stage 11 both tasks are said out loud as desktop tasks with that
reason and the cost: a Friday run on a shut laptop happens when it is next opened. The
reason is written into each task's prompt and `map.md`. The weekly run by hand is read
back. The setup review lists the failed cloud test as a finding, with what would fix it.

Bad: the cloud test reported as passed because the write returned no error; the run
stopped as if the desktop had failed; the schedules created as cloud tasks that will run
on time and write nothing; the classification said in chat and written nowhere; Claude
offering to move the working folder to another storage without being asked.
