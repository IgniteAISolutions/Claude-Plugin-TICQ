---
name: workspace-structure
description: |
  Audits a Cowork workspace's folders, proposes the subject-named structure this plugin builds to, and applies it only on a yes, file by file, with a manifest. Counts the tree, finds every stage-named folder (inbox, outputs, drafts), finds duplicate trees, writes a routing table mapping every top-level entry to its new home with a reason, and shows it before a single file moves. On approval, copies rather than moves, verifies every file, writes a README.md descriptor into every folder, repoints every path, and writes a verification report. Triggers on "/structure", "sort my folders", "restructure my workspace", "where should this go", "my files are a mess", or as step 2 of /build and step 3 of /health. The filing sweep checks only the last week's files against each folder's routing test; triggers on "/structure sweep", "filing sweep", "what landed in the wrong place", or the Friday 16:30 local task. Never deletes. Never moves without a yes.
effort: high
---

# Workspace structure

## Purpose

A messy file system produces a confused assistant. The intelligence is the same; the
difference is the environment. This skill builds the environment, and it does it by one
rule that stops the mess coming back.

**Name folders by subject, never by stage.** A document's subject never changes. Its
stage changes constantly. A folder named for a subject means a file is filed once and
never moves. A folder named for a stage (`inbox`, `outputs`, `drafts`, `to-sort`) means
every file has to be moved by hand the moment its stage changes, and something always
has to remember to do the moving. That is how one inbox reached twenty thousand files.

### Model and effort

**High** for the audit and the routing table, where every line is a judgement about
where something belongs. **Low** for the apply step, which is mechanical once the table
is approved.

## Procedure

### The structure it builds to

```
<Workspace>/
├── CLAUDE.md          rules, one copy
├── MEMORY.md          facts, one copy
├── README.md          descriptor for the root
├── About Me/          who this person is, how they write
├── The Business/      the firm itself: offers, sales, marketing, ops, finance, people
├── Projects/          one folder per client, company or person with an engagement
├── Library/           reusable and party-free: knowledge base, templates, reference
├── Skills/            what Claude loads
├── System/            what Claude executes to run the workspace: hooks, scheduled tasks, pipelines, reviews
└── _archive/          closed, superseded, retired; the one stage-named folder, kept because retired only travels one way
```

The top level answers one question: who or what is this about? Every folder carries a
`README.md` in the shape in `references/descriptor.md`. The `does-not-belong` and
`routing-test` fields do the work.

### The steps

**1. Audit, change nothing.** Count files per top-level folder. Find every stage-named
folder and how many files sit in it. Find every `_archive` and every duplicate tree
(two folders holding the same client). Find nested rule files (`CLAUDE.md` below the
root). Report the numbers before proposing anything, so the person sees the problem in
their own figures.

**2. Propose the routing table.** Every top-level entry mapped to its destination with
a reason on the line, using the rules in `references/routing-rules.md`. Anything with no
rule goes to `_archive/unrouted-<date>/` and is labelled as a graveyard, not hidden in
Library. Show the table. Wait.

**3. On yes, copy with a manifest.** Copy, never move. One manifest line per file:
source, destination, rule, size and hash on both sides, result. Regenerable build
output (`node_modules`, `.next`) is excluded by rule with lockfiles kept, and the
exclusion is a manifest line. Personal life admin leaves the tree altogether.

**4. Write the descriptors.** `README.md` in the root, every top-level folder, every
second-level folder, and every Projects folder. Not inside a vault's compiled
internals, not inside skills (they have `SKILL.md`), not inside `_archive`.

**5. Repoint.** Every path in `CLAUDE.md`, `MEMORY.md`, the skills and any hooks. Old
path to new path, mechanically, with a log of every change. References to a retired
inbox or outputs folder become "the subject folder, per the README routing test".

**6. Verify and report.** Every file present or accounted for. Nothing deleted. Paths
resolve. Descriptors present with all four fields. No stage-named folder in the
working tree. Anything not checked with your own eyes marked NOT VERIFIED.

**7. The old tree stays** until the person has read the report and said so. Deletion is
theirs, never this skill's.

### 8. The filing sweep

Run this instead of the full audit when the question is only what landed in the wrong
place this week. Looks only at files written or modified in the last 7 days, or since
the last sweep recorded in `System/Reviews/<date>-filing.md`. Tests each against the
`routing-test` field in the `README.md` of the folder it sits in. Lists every file that
fails, the folder it should be in, and the reason, quoting the README line it matched.
Writes the list to `System/Reviews/<date>-filing.md`. Moves nothing. On a yes in a
later session, copies the file to the right folder and moves the original to
`_archive/misfiled/<date>/`, never deletes.

## Quality criteria

- Every file in the old tree is in the new tree, in `_archive`, or named in the manifest
  as excluded or lost, with the reason. Zero unexplained.
- Zero mismatches on hash.
- No folder in the working tree is named for a stage.
- Every folder to the second level has a `README.md` with purpose, belongs,
  does-not-belong, routing-test.
- Ten files chosen by the person can be located by reading descriptors alone.
- A sweep lists only files that fail a routing test, with the line quoted; nothing
  moves without a yes.

## Example

`references/worked-example.md`: the 58,000-file, two-tree restructure this skill was
built from, including the two folders that turned out to be duplicates, the stray
absolute-path folder, and the ten files that were lost because an archive was cleared
before the copy.

## Edge cases

- **Two folders hold the same client.** Hash a sample. If identical, merge and record
  the duplicate. If they differ, newer wins and the older goes to
  `_archive/superseded/<original path>`.
- **A folder is named with an absolute path or a reserved name** (a stray `C:\...`
  folder, a `nul` file). Windows will not create it. Archive under a legal name and
  record it; do not skip it silently.
- **The workspace is synced to Drive or OneDrive.** Read from it, never write to it
  while sync is live. The new tree is local; the sync gets pointed at it afterwards,
  one direction.
- **Hooks or scripts hardcode paths.** Find them before the copy, list them, repoint
  them after, and run one to prove it. A gate that reads its rules from a folder that
  no longer exists fails silently.
- **More than 200 differing files in one folder.** Stop. Diff a sample and explain
  before applying newer-wins in bulk. Bulk differences usually mean a script ran, not
  that a person edited 200 files.
- **The person wants a stage folder back.** Say what it will cost: a folder that has to
  be swept by hand, forever. Then do what they say, and write the sweep into a scheduled
  task so it does not depend on memory.
- **A folder has no `README.md`.** Report it as the sweep's finding; do not guess
  where its files belong.
- **A live task writes into a stage-named folder** (a daily brief that writes to
  `drafts/`). Do not rename it under the task. Flag it, and rename folder and task
  together, on a yes.
