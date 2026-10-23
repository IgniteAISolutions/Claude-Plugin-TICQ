# The folder descriptor

One `README.md` per folder. Frontmatter, so Claude can read every one in a single pass
and get a routing table without loading the bodies.

```
---
folder: Projects
purpose: One folder per client, company or person with a live or past engagement.
belongs: Proposals, delivery, correspondence, notes, builds and artefacts for that party.
does-not-belong: The firm's own material (The Business). Prospects not yet engaged
  (The Business/05 Sales & Proposals/Pipeline). Reusable material naming no party (Library).
routing-test: Does this artefact name a party we have or had an engagement with?
  If yes it lives here, in that party's folder.
updated: 2026-09-10
version: 1.0
---
```

`does-not-belong` carries more weight than `belongs`. A descriptor listing what belongs
is a suggestion. One listing what does not belong is a rule. `routing-test` reads a fact
rather than asking for an opinion, which is what makes filing repeatable months apart.

## The two-file rule

`README.md` describes the folder and never accumulates facts. `MEMORY.md` accumulates
facts and never describes the folder. Different lifecycles, so two files is right. If
either drifts into the other's job they will contradict each other and nothing will say
which wins.

## The graduation rule

New material with no clear home goes to `Library/` in a subfolder named for what it is.
When that subfolder reaches three items it has proved it is a real category and gets
promoted. Under three, it stays. This is what stops `Library/` becoming the next inbox.
