# 07-reports — plan

Date: 2026-09-30. Sources: Mobbin (web) + Refero (web). Orchestrator: Opus 5.5. Fetchers: Haiku 4.5 (`gallery-fetcher` rules). Annotators: Sonnet 5.5 (`gallery-annotator` rules).

## Jobs (verbatim)

| id | Job | What to look for |
|---|---|---|
| `scheduled-reports` | Automatic weekly/monthly reports | Subscribe to a report, pick cadence/recipients/format, email digest / PDF / "newsletter" layout, pausing, what the recipient sees |
| `comparison` | Compare performance by learner / group / semester / course / faculty | Pivot and segment controls, cohort comparison, period-over-period, drill from aggregate to one learner, heatmap/matrix views |
| `ai-evaluation` | AI evaluation (formative / summative) | AI-drafted assessment or summary with evidence links, human review/approve/edit, confidence, formative (colour/narrative scale) vs. summative (score) framing |
| `kpis` | Aggregate simulation / resource data (KPIs) | Utilisation dashboards (rooms, equipment, people-hours), KPI cards with trends, date-range and filter model, empty/low-data states |
| `sharing` | Easy sharing of reports | Share link with expiry/permissions, export PDF/CSV, embed, "send to my dean" without an account |

## Seams (not re-researched)

- `courses/08-recordings-course-reports/`: course-level reports from a course (overview → learner drill-down → export; default metrics; learner-side grades). Skip duplicating Kajabi/SchoolAI/Circle course-progress and Coursera learner Grades captures already there. This module is **center-wide / cross-course** reporting + delivery (scheduled digests, KPIs, share-to-dean).
- `courses/03-skills-competencies/`: defining skills to measure — reference only.
- Grading a live/post session belongs to Recording / Debrief. Here `ai-evaluation` = how AI evaluations are **reported, reviewed and approved**.

## Product longlist (22)

- Direct (learning / people analytics): Canvas New Analytics, Google Classroom, Gradescope, Docebo, 360Learning, Coursera for Business, Lattice, Culture Amp, 15Five, Leapsome
- Adjacent (product analytics / dashboards / utilisation): Amplitude, Mixpanel, PostHog, Heap, Stripe, Shopify, Metabase, Looker Studio, Databox, Robin, Envoy, Skedda
- Wildcard (digest framing / AI approve): Whoop, Oura, Strava, Apple Screen Time, Gong, Notion AI, Linear, Grammarly
- Contrast (report builder — at most one): Looker Studio or Metabase as the heavy-config counter-example

## Queries → jobs → platforms

| # | Query | Jobs | Platform | Fetcher |
|---|---|---|---|---|
| 1 | Subscribe to a weekly email analytics digest, pick cadence and recipients (Databox, Amplitude, Mixpanel) | scheduled-reports | web | A |
| 2 | Schedule a PDF or newsletter-style performance report and pause it (Stripe, Shopify, Culture Amp) | scheduled-reports | web | A |
| 3 | Open a scheduled report email or PDF as the recipient (Whoop weekly, Oura, Strava) | scheduled-reports | web, ios | A |
| 4 | Share a dashboard link with expiry or view-only permissions, export PDF/CSV (Amplitude, Mixpanel, Looker Studio) | sharing | web | A |
| 5 | Send a report to someone without an account / public share link (Notion, Databox, Stripe) | sharing | web | A |
| 6 | Compare cohorts or segments side by side with date range (Amplitude, Mixpanel, PostHog) | comparison | web | B |
| 7 | Drill from a class/group performance table down to one learner (Canvas, Coursera for Business, Lattice) | comparison | web | B |
| 8 | Performance heatmap or matrix by skill/person over time (15Five, Leapsome, Gradescope) | comparison | web | B |
| 9 | AI-drafted performance summary with edit and approve before sending (Gong, Lattice, Notion AI) | ai-evaluation | web | B |
| 10 | AI assessment or coaching feedback with evidence links and confidence (Gong, Grammarly, Linear) | ai-evaluation | web | B |
| 11 | Room / desk utilisation dashboard with date filters and trends (Robin, Envoy, Skedda) | kpis | web | C |
| 12 | KPI cards for usage hours with empty or low-data state (Stripe, Shopify, Databox) | kpis | web | C |
| 13 | Workplace analytics: people-hours and resource occupancy over time (Robin, Envoy) | kpis | web | C |
| 14 | Refero: weekly scheduled analytics email / digest setup | scheduled-reports | web | C (Refero) |
| 15 | Refero: cohort comparison or pivot filters on a performance dashboard | comparison | web | C (Refero) |
| 16 | Refero: share or export a report / dashboard | sharing, kpis | web | C (Refero) |

## Fetcher split

- **A** → `raw/mobbin.A.json`: `scheduled-reports`, `sharing` (queries 1–5). Prefer recipient-side views for digests. Cap 3 per product per job.
- **B** → `raw/mobbin.B.json`: `comparison`, `ai-evaluation` (queries 6–10). Prefer multi-step approve/edit for AI, not single marketing screens.
- **C** → `raw/mobbin.C.json` + `raw/refero.json`: `kpis` on Mobbin (queries 11–13); then Refero for queries 14–16 across all jobs. Prefer utilisation over vanity charts. Include at most one report-builder counter-example if found.

## Module rules reminder

- Zero-config defaults over chart builders; ≤1 builder as contrast.
- For scheduled-reports and sharing, keep recipient-side when available.
- Favour complete flows; screens ≤20% of cards.

## Run log

- Phase 0: plan + module.json written.
- Phase 1 round 1: A=19 (scheduled/sharing, images OK), B=11 INVALID (no images, wrong job ids), C=10 (kpis-tagged filters, weak utilisation), refero=8 (1-image stubs).
- Repair D: rewrite B + new mobbin.D utilisation (Robin/Envoy) + re-download assets.
- Repair D failed (100-image limit from parallel Mobbin). A assets fixed (82). Relaunched sequential B rewrite + D utilisation.
- Utilisation D wrote 12 refs WITHOUT images (invalid). B rewrite produced 9 valid refs with images (comparison + ai-evaluation); assets skipped=40. Relaunched D image repair.
- Phase 1 complete after D repair (9 KPI flows w/ images). Shortlisted 12 products / 21 flows. Annotators A/B/C launched.
- Phase 3–5: all 12 notes OK; synthesis 6 patterns + 6 OQs; --check 0 errors; built 07-reports.html 4.7 MB; browser QA passed (filters, search, lightbox next).
- Phase 3–5: all 12 notes OK; synthesis 6 patterns / 6 OQs; `--check` 0 errors; built `07-reports.html` 4.7 MB; index refreshed; browser QA OK (favicon 404 only).
