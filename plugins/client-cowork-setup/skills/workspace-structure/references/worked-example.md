# Worked example: two trees, 58,147 paths

The restructure this skill was written from, September 2026.

**The state.** One workspace in two places: a local tree and a Google Drive copy, both
live, diverged. 25 top-level entries. Seven plausible homes for one client document.
Nine separate archives. One inbox holding 20,394 files, 19,115 of them `node_modules`
under two code projects nobody had noticed were in there.

**The audit.** Walked both trees and hashed every path present in both at the same
size. 52,004 identical. 3,156 existed only on Drive, including 415 files of client
delivery work and the whole scheduled-task folder. 479 existed only locally. Neither
tree was the source of truth; the truth was per folder. A migration from either tree
alone would have lost work silently.

**The stop.** One folder had 2,306 differing pairs. The rule says stop above 200. A
sample said "date re-stamp". Reading all 2,306 said "full recompile with more
entities", plus 16 files where the compile had dropped a field. The sample was wrong
and the full read was right, so the rule stands.

**Duplicates.** A `Client Delivery` folder held 419 files that were byte-identical to
the same clients' folders in `PROJECTS`; an earlier reorganisation had copied and
stopped halfway. Merged, with the duplicates recorded.

**The stray folder.** Inside the Notion export, a folder literally named
`C:\Users\...\vault-compiled`, an absolute path written as a folder name by a script.
Windows refuses the colon. 2,298 files archived under a legal name and recorded.

**The loss.** Ten `.bak` snapshots existed only in the Drive root archive, which the
owner cleared before the copy. Recorded as LOST in the manifest, named in the report.
The lesson: the manifest is only a reverse map if nothing is deleted before it is
verified.

**The result.** 27,117 files copied and verified, zero mismatches. 71 descriptors.
1,448 files repointed. Five hooks repointed with a backup. The gate blocked a planted
banned term from its new location. Working tree 12,780 files, archive 14,175, and a
person who could find things.
