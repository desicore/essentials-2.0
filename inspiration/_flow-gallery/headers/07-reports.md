<!-- vars
SLUG: 07-reports
PRODUCTS: 8–12
FLOWS: 15–25
FETCHERS: 3
PLATFORMS: web
TASK_INTENT: Research complete user flows for performance reports, KPI dashboards, scheduled report delivery and report sharing in a simulation-education platform
-->
# Essentials 2.0 — Reports: flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. A simulation center evaluates learners in recorded sessions: faculty fill checklists and rubrics, learners give feedback, and AI can now draft formative or summative evaluations. Reports turn this into:
- **learner/group performance** for faculty
- **utilisation and KPIs** (room and simulator usage, faculty hours, learner contact hours) for the coordinator
- periodic evidence for **deans and accreditation**

**Personas:**
- **Sim coordinator / admin:** reports up, and assembles accreditation data by hand today.
- **Faculty:** 40–60, non-technical.
- **Leadership / deans:** data recipients only; they don't log in.

## Jobs (from the FigJam concept map "Essentials — Concept", node 141:429)

| id | Job | What to look for |
|---|---|---|
| `scheduled-reports` | Automatic weekly/monthly reports | Subscribe to a report, pick cadence/recipients/format, email digest / PDF / "newsletter" layout, pausing, what the recipient sees |
| `comparison` | Compare performance by learner / group / semester / course / faculty | Pivot and segment controls, cohort comparison, period-over-period, drill from aggregate to one learner, heatmap/matrix views |
| `ai-evaluation` | AI evaluation (formative / summative) | AI-drafted assessment or summary with evidence links, human review/approve/edit, confidence, formative (colour/severity scale) vs. summative (score) framing |
| `kpis` | Aggregate simulation / resource data (KPIs) | Utilisation dashboards (rooms, equipment, people-hours), KPI cards with trends, date-range and filter model, empty/low-data states |
| `sharing` | Easy sharing of reports | Share link with expiry/permissions, export PDF/CSV, embed, "send to my dean" without an account |

## Baseline

**Today:** Essentials has four reports:
- Responses
- Group Performance
- Performance Matrix
- Skill Development

Their limits:
- Skill areas depend on program-wide naming conventions (abbreviations).
- An activity must be assigned before data is collected, so late setup means lost data.

**Known pains:**
- Accreditation data is hand-assembled.
- **Utilisation reporting** is the one report all visited centers want and none can get.

**Direction:**
- **Automatic weekly/monthly PDF or "newsletter" for deans**, shared by link.
- One place for learner feedback, faculty grading and dashboards, comparable by course / year / learner / period.
- KPIs: sim and room usage, faculty hours.
- A **colour/severity scale instead of points** for formative work.
- AI-generated formative/summative reports.
- Room utilisation and learner contact hours should be **calendar-generated** ("entered once").
- A multi-campus dashboard is floated but is an access-control rabbit hole.

**Constraints:**
- Deep reporting was conceded as not deliverable in the first cut. Favour patterns that give a lot with little configuration.
- Learners may rarely return, so learner-facing longitudinal views are lower priority.

## Seams (read, don't re-research)

- `courses/08-recordings-course-reports/` covers **course-level reports reached from a course** (structure, default metrics, learner-side view). Read `synthesis.json` / `notes/` first. This module is the **center-wide and cross-course** reporting layer plus delivery.
- `courses/03-skills-competencies/` covers defining skills to measure. Only reference it.
- Grading itself (scoring a session) belongs to Recording / Debrief. Here, `ai-evaluation` is about how AI evaluations are **reported, reviewed and approved**.

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Learning analytics: Canvas New Analytics, Google Classroom grades, Gradescope statistics, Docebo, 360Learning, Coursera for Business
  - People/performance analytics: Lattice, Culture Amp, 15Five, Leapsome
- **Adjacent:**
  - Product analytics: Amplitude, Mixpanel, PostHog, Heap (segmentation, cohort compare, scheduled digests, share links)
  - Business dashboards: Stripe dashboard, Shopify analytics, Metabase, Looker Studio, Notion charts, Databox (scheduled email reports)
  - Utilisation dashboards: Robin, Envoy, Skedda workplace analytics
- **Wildcard:**
  - Fitness/health weekly recaps: Whoop, Oura, Strava, Apple Screen Time weekly report (digest framing for non-experts)
  - AI summaries with approval: Gong deal summaries, Grammarly/Notion AI, Linear/Jira AI summaries

## Module-specific rules

- Favour **zero-configuration** patterns: sensible default reports, templates and suggested comparisons over build-your-own chart editors. Include at most one "report builder" product, as the contrast case.
- For `scheduled-reports` and `sharing`, show the **recipient side** too (the email/PDF/link view) when the source has it.
