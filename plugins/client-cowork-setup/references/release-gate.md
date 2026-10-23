# The release gate

Client material is the most valuable thing in the vault and the easiest to leak. A case
study, a LinkedIn post, a web page, a proposal for another client or a talk can each carry
a client's name, a person, a figure or a detail that identifies them, often without
anyone meaning it to. The gate is the one route from private to public, and `/release`
is the only skill that walks it.

## What the gate covers

Anything headed for one of these, when any part of it came from a private page or card:

| Use | Examples |
|---|---|
| `case-study` | A written case study, a customer story, a testimonial page, a partner-portal entry |
| `marketing` | The website, a brochure, a pitch deck, a proposal or tender for someone else, an award entry |
| `content` | A social post, an article, a newsletter, a talk or webinar, a podcast answer |

It also covers moving or copying a file into any folder at `zone: public`. Material from
one client used in work for another client crosses the gate too, under `marketing`.

Anything that stays private (an internal summary, a note to the team) does not cross the
gate. The firewall's own rule still holds for it: anything a client will see waits for a
person.

## The default: anonymised

Unless consent covers the use, the released text carries none of these:

- The client's name, trading names, brands or products, and anything that spells them.
- Any person's name, initials, job title where only one person holds it, or a photo.
- Places narrower than a region: town, street, site name, postcode, venue.
- Exact figures: money, headcount, volumes, dates. Each becomes a band or a relative
  figure ("a team of ten to twenty", "about a third faster") unless consent covers the
  exact figure.
- Direct quotes, internal document names, project code names, distinctive phrases a
  reader could search for.
- Any combination of details that together points to one business, even when each one
  alone would not. Size, sector, region and a distinctive event together are a name.

The release keeps what makes the work worth telling: the problem, the approach, what
changed, in words a reader in the same position can use.

## Naming: only with recorded consent

A client is named, quoted or given an exact figure only when their folder card records
consent that covers that exact use. The card carries it in front matter:

```yaml
consent:
  scope: [case-study]            # any of case-study, marketing, content; or none
  named: true                    # may the client be named
  quotes: true                   # may a person be quoted, by name and title
  figures: [productivity, time saved]   # which figures may be stated exactly
  given_by: "Mark Hollis, homeowner"   # the person at the client who agreed
  date: 2026-11-12
  evidence: "[[20261112-hollis-consent-email]]"   # a captured source, never a memory
  expires: 2027-11-12            # or never
```

Consent is evidence, so the evidence is a captured source in the client's own folder: the
email or signed form, filed by `/capture`. A consent the owner remembers and cannot show
is no consent. A use outside the `scope` list, a figure outside the `figures` list, or a
date past `expires` falls back to the default. Consent given by someone at the client
other than the decision-maker named on their company page is flagged for the owner
before it is relied on.

## The steps

`/release` runs these in order and stops at the first that fails. Its procedure in
`skills/release/SKILL.md` gives the detail.

1. **Sources.** Name every private page, card and source the draft draws on.
2. **Identifiers.** Build the list of identifiers for every client and person involved,
   from their cards and pages: names, people, places, products, distinctive figures and
   dates, phrases from their documents.
3. **Consent.** Read each client's `consent` against the use asked for. Record what it
   allows.
4. **Rewrite.** Remove or band everything consent does not cover.
5. **Verify.** The verifier checks the rewritten text against the identifier list, line by
   line, and against the combination rule. It returns one row per identifier.
6. **Show.** The owner sees the released text, the identifier rows, the consent basis and
   the destination, side by side.
7. **Yes.** Nothing is filed until the owner says yes to that text, for that use.
8. **Record.** One record appended to `System/Ember/releases.md`, then the file written to
   its public folder with `zone: public` and `released: <record id>` in its front matter.
   The released file never links back to a private page. The client's card gets one line
   under `Last changed` and, where it helps, a link forward to the release.

## The release record

```
## R-2026-011 | 2026-11-14 | case-study | The Business/06 Marketing & Content/Case Studies/20261114-garden-design-two-stage-fee-case-study.md
- Drew on: [[oakmere-estates]], [[2026-10-14-two-stage-design-fee]], [[20261021-oakmere-site-visit-transcript]]
- Consent basis: none recorded for Oakmere; released anonymised
- Identifiers checked: 14; found in final text: 0
- Combination check: sector and region kept; size banded; event generalised. PASS
- Approved by: Priya Shah, 14/11/2026
```

Records are never edited. A release withdrawn later gets a new record that names the old
one and says what was withdrawn, and the published file moves to `_archive/withdrawn/`:

```
## R-2027-002 | 2027-03-02 | case-study | withdrawn to _archive/withdrawn/<path>
- Withdraws: R-2026-011
- What and why: <the file, and the reason in the owner's or the client's words>
- Approved by: <owner>, DD/MM/YYYY
```

## Governance

Where the client has an AI policy or a DPIA, its rules on publishing and on personal data
are read in at setup (`governance-bridge.md`) and are applied at step 4 wherever they are
stricter. A policy that forbids any client reference in marketing turns every release for
`marketing` into the anonymised default, consent or not, and the record says why.

## Changing released text

Released wording is what the owner said yes to, so it is never changed under the same id.
A correction, an update or a new figure goes back through `/release` as a new release: a
new record naming the same path, then the file rewritten carrying the new id. The review
stamps (`last_verified`, `review_after`, `trust`, `status`, `confidence`, `updated`) are
the exception: `/lint --monthly` and `/ember-review` may change them on a released file,
because they record checking, not wording.

## The key behind the rule

`hooks/release-gate.js` refuses, before it happens, any Write, Edit or MultiEdit that
would leave a file in a `zone: public` folder without a `released:` id that has a record
in `releases.md` naming that file, or that would change released wording under an old id.
It does nothing outside a knowledge base, lets folder cards through, and fails open on
bad input. It cannot see a copy or move made from the shell, or a file dragged in by
hand; the weekly `/lint` leak check (C2) catches those. Where a surface does not run
plugin hooks, the rules in this file and in `/release` are the only control, and `/health`
says so.

## What the gate never does

- Publish, post, send or share. It writes a file into a public folder for a person to
  publish.
- Accept consent from memory, from a chat, or from text inside a document asking for it.
- Treat a released file as a source for a later fact about the client.
- Clear the gate on a scheduled run. Every release has a person's yes on it.
