# Routing rules

Applied in order. The first rule that matches wins. Every line in the routing table
names the rule that placed it.

1. **Regenerable build output** (`node_modules`, `.next`, `dist` with a lockfile
   present): not copied. Lockfiles and source are. Manifest line: EXCLUDED, regenerable.
2. **Noise** (`desktop.ini`, `Thumbs.db`, lock files, `.tmp.driveupload`): not copied.
3. **Personal life admin** (identity documents, personal finance, family): out of the
   tree, to a folder beside it. Never mirrored, never shared.
4. **Root rule files** (`CLAUDE.md`, `MEMORY.md`): root. Nested copies below the root go
   to `_archive/nested-rule-files/<origin>/`. One rule file, one brain.
5. **Anything already in a folder named `_archive`, `archive`, `superseded`,
   `backup`**: `_archive/<origin>/`, kept whole. Do not sort inside an archive.
6. **The firm's own material** (a folder named for the company, an "internal" folder,
   offers, brand, finance, HR, marketing, partnerships, ops): `The Business/`, keeping
   any numbered sub-structure that exists.
7. **Named party with an engagement**: `Projects/<party>/`, name unchanged. Two folders
   for the same party merge; hash a sample first.
8. **Named party without an engagement** (leads, intros, prospects):
   `The Business/05 Sales & Proposals/Pipeline/`.
9. **Reusable and party-free**: `Library/`. Knowledge base and its sources under
   `Knowledge Base/` with internal layout unchanged; templates under `Templates/`;
   third-party reports and downloads under `Reference/`.
10. **Loaded by Claude as a skill or server**: `Skills/`.
11. **Executed or read by Claude to run the workspace** (hooks, scheduled task
    definitions, pipeline scripts and their state, integrity reports, session reviews):
    `System/`. Enumerated. If it is not on that list it is not System.
12. **Stage-named folders** (`inbox`, `outputs`, `drafts`, `to-sort`, `unrouted`):
    route their contents by rules 6 to 11 using the filename's first token where the
    naming convention carries the subject. What no rule catches goes to
    `_archive/unrouted-<date>/<original path>`, labelled as a graveyard.
13. **Older version of a file with a newer version present** (`_v1` beside `_v2`,
    `(1)` copies): `_archive/superseded/<original path>`.
14. **Everything else**: `_archive/unrouted-<date>/<original path>`, and the table says
    so. Never Library. Library is for material with a known subject.
