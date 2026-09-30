<!-- vars
SLUG: 10-dashboard
PRODUCTS: 8–12
FLOWS: 18–25
FETCHERS: 5
PLATFORMS: web first; ios/ipad only for glanceable status and today views
TASK_INTENT: Research complete user flows for role-based home dashboards with today's agenda, room and system status, key metrics and action items in a simulation-center platform
-->
# Essentials 2.0 — Dashboard (home): flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. A simulation center runs recorded training sessions in several rooms with manikins/simulators, standardized patients (SPs) and cameras. The **dashboard** is the first screen after login. It has to answer, per role, *"what's happening, what needs me, and is everything working?"*, then get people into the right module in one click.

The modules it sits on top of have been researched already (see Seams): Courses, User management, Scenario manager, Recording, Inventory, Scheduling, Reports, Debrief/Review, Mobile/iPad.

**Personas:**
- **Sim coordinator / admin:** runs the center, schedules, reports to leadership.
- **Sim tech / operator:** preps rooms and AV, wants recording to "just work".
- **Faculty:** 40–60, non-technical. Designs, observes, debriefs and grades.
- **Learner:** mostly doesn't log in today. Wants their own recording and feedback, via a lightweight web page rather than an app.

## Jobs (derived from Daniel's notes; the FigJam concept map has no dashboard boxes)

| id | Job | What to look for |
|---|---|---|
| `role-home` | Role-based home | Different first screens per role (admin vs. faculty vs. tech vs. learner), switching roles/views, what's hidden vs. shown per role |
| `today` | Today & upcoming | Today's agenda (sessions by time and room), "up next", countdowns, jumping straight into the session's action (start recording, open checklist, open debrief) |
| `center-overview` | Center overview / room status | Compact multi-room status (free / in use / recording / problem) on the home, drill into one room. The full live wall belongs to Recording. |
| `system-health` | System health at a glance | "All systems OK" vs. warning vs. failing, last self-test result, what's broken and the guided path to fix it or who to call |
| `kpis` | Few, precise KPIs | A handful of metrics (utilisation, sessions run, recordings, learner contact hours), trend vs. last period, click-through to the full report |
| `action-items` | Action items & notifications | What needs me: pending grading, checklists to review, recordings to share, setup tasks, approvals. Inbox vs. cards; dismiss / snooze / done |
| `widgets` | Customizable widgets | Add / remove / reorder / resize widgets, widget library, defaults per role, reset to default. **Also counter-examples of clutter.** |
| `navigation` | Module navigation & quick actions | How the home exposes modules (tiles vs. sidebar vs. command palette), global search, quick-create ("new session", "new scenario"), recents / favourites |
| `first-run` | Empty state & setup guide | A brand-new center: setup checklist (rooms, cameras, users, first course), progress, sample data, "what's new" announcements for existing users |

## Baseline

**Today (LS Essentials):**
- The dashboard is a set of **module tiles**: Recording, Video Review, Reports, SC (scenario) management, Calendar.
- A **Center Overview** shows rooms and their activity from the calendar.
- In the team's own words, **today's dashboard is weak**.

**The LearningSpace Enterprise dashboard facelift (shipped mid-2026):**
- Scope was **WCAG / screen-reader compliance + visual cleanup, "redrawn not rewritten"**.
- A clean white layout, modules in their own row so "Core Activities" breathes, a raised **Upcoming** tab, a **"Your Activities"** tab, buttons instead of links, the settings cogwheel kept.
- Responsive to iPad portrait/landscape and mobile.
- **Explicitly deferred to a "phase 2":** a **role-specific, widget-based layer** (admin / center lead vs. learner: event counts, sim-center utilisation, recording stats, toggleable widgets). Leadership (Gergely) keeps asking for widgets modelled on a third-party dashboard he saw.
- Daniel's standing line, agreed with engineering: **a good dashboard shows little, but precisely. Don't add widgets or charts just to have something there.** Widgets need a dashboard rewrite anyway, so they are being folded into Essentials 2.0.

**Direction for Essentials 2.0:**
- A **central dashboard** that brings learner feedback, faculty grading and reports together (data sources: LS, Qualtrics, Power BI; KPIs; access rules still to be specified).
- A **"system health OK"** status fed by the automatic per-room device check.
- A **center overview** for fast multi-room awareness.
- Open strategic question: **build the Essentials 2.0 dashboard new, or facelift the existing one**. This research should inform that call.
- A **multi-campus dashboard** has been floated, but it's an access-control rabbit hole (separate LS instances per campus). At most one flow on it, as a pointer.
- Cross-cutting principle: **information entered once** (calendar, sessions, participants) feeds everything the dashboard shows. There is no separate data entry for the dashboard.

## Seams (read, don't re-research)

Every earlier module has a built gallery. Read **only** the `synthesis` block and the product list of these `module.json` files (not the HTML, not raw/notes). Use them to avoid repeating flows and to see which module each dashboard card should hand off to:
- `inspiration/04-recording/work/module.json`: multi-room wall, device check. Here: the **home-level summary** only.
- `inspiration/06-scheduling/work/module.json`: the calendar itself. Here: the **today/upcoming slice** on the home.
- `inspiration/07-reports/work/module.json`: full reports and scheduled digests. Here: the **few KPIs** and the click-through.
- `inspiration/08-debrief-review/work/module.json` and `inspiration/09-mobile-ipad/work/module.json`: learner/faculty follow-ups that may surface as action items.

A product already used in another module may appear again only with a **different flow** (its home/dashboard flow).

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Ops and facility homes: UniFi / Ubiquiti site manager, Verkada Command, Envoy, Robin, Skedda (room status + health)
  - Education homes: Canvas dashboard and to-do, Google Classroom, Schoology, Blackboard Ultra, Docebo, 360Learning
  - Healthcare/clinic ops: Jane App, Cliniko, Doctolib Pro, SimplePractice (today's schedule + to-dos)
- **Adjacent:**
  - Role-based SaaS homes: Stripe (home + setup guide), Shopify admin home, Square dashboard, HubSpot home, Linear "My issues" / Inbox, GitHub dashboard, Vercel/Netlify overview, Datadog/Better Stack status (health)
  - Personal "today" homes: Sunsama, Motion, Notion Calendar, Google Calendar Today, Apple Fitness/Health Summary (few precise metrics)
  - Widget systems: Notion home, ClickUp dashboards, Monday dashboards, Jira dashboards, iOS/iPadOS widgets, Home Assistant
- **Wildcard:**
  - Tesla / car apps (single glanceable status + one primary action)
  - Airline apps on the day of travel: United, Delta, American (time-sensitive "what's next")
  - Smart-home health: Google Home, Eero, Ring (all-OK vs. problem states)

## Module-specific rules

- Favour homes that **show little, but precisely**. At least one counter-example must be a **cluttered widget/chart wall**, with a `why` that says what it costs the user.
- For `role-home`, prefer products that show **two or more role variants** of the same home. A single role's home is weak evidence.
- For `system-health` and `center-overview`, the **problem state** (warning/failing, with a fix path) matters more than the all-green state. Keep flows that show both.
- Every `fit` line must name which Essentials module the card hands off to (Recording, Scheduling, Reports, Debrief, Scenario manager, Inventory, Courses, User management), or say that it lives only on the dashboard.
