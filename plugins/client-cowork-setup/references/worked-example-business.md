# The worked-example business

Every worked example and eval case in this plugin uses this one business. It is invented.
No person, company, place or figure here belongs to a real client, and none of it is ever
copied into a client's folder. Setup builds from the client's own answers and files; this
file exists only so the examples agree with each other.

## Fernhill Garden Design

A six-person garden design and build firm. It designs gardens for homeowners and does the
landscaping on new-build plots for one housing developer. It makes its money on a design
fee and a fixed build price per garden.

| Who | Role |
|---|---|
| Priya Shah | Founder and managing director. Owner of the knowledge base |
| Tom Reyes | Operations lead. Runs the build crews and the suppliers |
| Ana Ruiz | Lead designer |
| Oakmere Estates | The housing developer, a client since 2025. Contact: Grace Okoro, commercial director |
| The Hollis family | A homeowner client, a back-garden redesign. Contact: Mark Hollis |
| Larchway Nursery | The main plant supplier, 30-day terms |

## The working folder

```
Fernhill/                                   the vault root
  CLAUDE.md  MEMORY.md
  About Me/
  The Business/
    00 Company & Legal/
    01 Finance/                             pointers only; figures live in ~~accounting
    02 Team/
    03 Offers & Pricing/                    design-service.md, build-service.md, pricing.md
    04 Operations/                          quoting-process.md, lead-times.md, planting-season.md
    05 Suppliers & Partners/                larchway-nursery.md
    06 Marketing & Content/                 zone: public
      Case Studies/                         zone: public
    07 Policies & Governance/               ai-use.md, what-never-goes-in.md
    Decisions/                              2026-10-14-two-stage-design-fee.md
    Sales & Pipeline/
  Projects/
    Oakmere Estates/                        oakmere-estates.md, grace-okoro.md, sources
    Hollis family/                          hollis-family.md (Mark Hollis, decision-maker), sources
  Library/
  Skills/
  System/
    Ember/                                  map.md, hot.md, index.md, log.md, ...
  _archive/
```

## The facts the examples use

- Design fee is charged in two stages, concept then detailed plan, decided on 14/10/2026
  by Priya Shah (`The Business/Decisions/2026-10-14-two-stage-design-fee.md`).
- Standard lead time from signed design to build start is six weeks, eight in March to
  May (`04 Operations/lead-times.md`).
- Larchway Nursery supplies on 30-day terms (`05 Suppliers & Partners/larchway-nursery.md`).
- Oakmere buys the design service and the build service for three plots; plot 4 was handed
  over on 05/11/2026.
- No consent is recorded for Oakmere. The Hollis family gave consent on 12/11/2026 for a
  named case study with quotes, by email, captured as a source in their folder.
- Priya already goes through the week on Friday afternoons and meets her bookkeeper on
  the first Monday of the month, so the weekly refresh runs Friday 15:00 and the monthly
  check the Friday before that meeting. Both run on the desktop, because the storage connector failed
  the cloud rewrite test.
