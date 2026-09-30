<!-- vars
SLUG: 06-scheduling
PRODUCTS: 8–12
FLOWS: 15–25
FETCHERS: 3
PLATFORMS: web first; ios only for calendar-sync and invite-response flows
TASK_INTENT: Research complete user flows for scheduling rooms, sessions and learner rotations with calendar import and sync in a simulation-education platform
-->
# Essentials 2.0 — Scheduling: flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. A simulation center schedules **sessions** (a scenario run in a room, at a time, with faculty and a group of learners) across several rooms and simulators.

A nursing course may run one scenario as up to 30 sessions for groups of 4–10 learners, rotating through stations. Schedules are born in the university's own tools (Excel master files, Outlook, Google Docs, Teams Shifts) and today get re-typed into the sim system.

**Personas:**
- **Sim coordinator / admin:** owns the schedule.
- **Faculty:** needs to know where and when to be.
- **Learners:** receive invitations.

## Jobs (from the FigJam concept map "Essentials — Concept", node 141:429)

| id | Job | What to look for |
|---|---|---|
| `new-scheduling` | New scheduling experience in Essentials | Calendar views (day/week/resource-by-room), create/edit an event, drag to move/resize, conflict detection (room/faculty/simulator double-booked), filters |
| `simple-events` | Simple events | The fastest path to "this scenario, this room, this time, these people"; quick-create vs. full form; recurring events |
| `flexi-custom` | Flexi or custom scheduling | Rotations and group splitting: auto-generate N sessions from a roster, assign learners to slots/cells, swap people, capacity per slot, self-sign-up slots |
| `excel-import` | Excel to calendar | Upload a spreadsheet → map columns → preview → resolve errors/duplicates → create events in bulk; re-import to update |
| `outlook-sync` | Outlook calendar sync | Connect Outlook/Google/ICS, two-way vs. one-way, what shows where, invite emails, handling changes and cancellations |

## Baseline

**Reuse decision:** the **new LearningSpace Enterprise scheduling component** will be cleaned up and reused.
- OSCE features are dropped.
- **Flexi scheduling** and **calendar filtering** are kept.
- The exact keep/remove list is still open. This research should help decide it.
- The previous scheduling build took 4–5 months, so patterns must be cheap to adopt.

**Direction:**
- A **simple event model**.
- **Custom rotation with learner-cell assignment**.
- **Excel master-file import** that generates events.
- **Outlook sync**.
- **Import everywhere / enter once** is a cross-cutting principle. Calendar data should later feed Reports (room utilisation, learner contact hours).
- Canvas course/learner sync via LTI exists, but learner-to-session assignment is still manual.

**Known pain:** slots and rosters live in Excel, Outlook, Google Docs and Shifts, so every change is entered twice.

## Seams (read, don't re-research)

- `courses/06-events/` covers **adding events to a course** (the course-side view). Read its `synthesis.html` and `notes/` first and build on it. This module is the **center-wide scheduler**.
- The planned Courses sub-module "10 — Simulation dates / calendar" was **never run**, so this module also covers communicating dates to learners where a product shows it (invitation/RSVP flows under `outlook-sync`).
- Equipment reservation belongs to `05-inventory`. Room/simulator settings belong to Settings (not in scope).

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Resource and room booking: Skedda, Robin, Envoy, Condeco, Teem, Google Calendar room resources
  - Staff rostering / shifts: Deputy, When I Work, Homebase, Connecteam, Teams Shifts, Rotageek
  - Education timetabling: Google Classroom calendar, Canvas calendar, Schoology
- **Adjacent:**
  - Booking and slots: Calendly (group events, round robin), Cal.com, SavvyCal, Acuity
  - Calendars: Notion Calendar, Fantastical, Outlook, Google Calendar (import, subscription, sync settings)
  - Spreadsheet import with mapping: Airtable, Notion, HubSpot, Attio, Flatfile-style importers, Linear CSV import
- **Wildcard:**
  - Sports league schedulers: TeamSnap, LeagueApps (auto-generated round robins)
  - Restaurant table management: OpenTable, SevenRooms (capacity, rotations, drag to reseat)
  - Interview scheduling: Greenhouse, Ashby, GoodTime (multi-person, multi-room)

## Module-specific rules

- For `excel-import`, the column-mapping + preview + error-resolution steps matter more than the upload screen. Keep flows that show all three.
- For `flexi-custom`, look for flows that turn **one roster into many sessions**. That is the core simulation-center problem.
