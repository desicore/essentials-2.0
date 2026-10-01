# 06 Scheduling — plan

Date: 2026-09-30. Sources: Mobbin (web + iOS) and Refero (web). Orchestrator: Opus 5.5. Fetchers: Haiku 4.5. Annotators: Sonnet 5.5.

## Jobs (verbatim from the prompt)

| id | Job | What to look for |
|---|---|---|
| `new-scheduling` | New scheduling experience in Essentials | Calendar views (day/week/resource-by-room), create/edit an event, drag to move/resize, conflict detection (room/faculty/simulator double-booked), filters |
| `simple-events` | Simple events | The fastest path to "this scenario, this room, this time, these people"; quick-create vs. full form; recurring events |
| `flexi-custom` | Flexi or custom scheduling | Rotations and group splitting: auto-generate N sessions from a roster, assign learners to slots/cells, swap people, capacity per slot, self-sign-up slots |
| `excel-import` | Excel to calendar | Upload a spreadsheet → map columns → preview → resolve errors/duplicates → create events in bulk; re-import to update |
| `outlook-sync` | Outlook calendar sync | Connect Outlook/Google/ICS, two-way vs. one-way, what shows where, invite emails, handling changes and cancellations |

## Seams (already covered, build on it, don't repeat)

- `courses/06-events` (course-side events): Understory "pick Experience first", Kajabi inline sessions, Luma session series, Acuity soft room conflict, Amie/Motion this/all dialog, Teams create form, Partiful/Lyssna attendance. Findings: start from the thing that runs; series = editable session list; conflicts are soft warnings that arrive late; no waitlist; nobody shows live per-resource availability inside the form.
- Open questions it handed on: "one event with several slots vs. one event per group per slot"; resource model before conflict UI; assigned vs. sign-up; Canvas/calendar hand-off (module 10 never ran → `outlook-sync` covers invites/RSVP here).
- **Excluded ids** (already in `courses/06-events`; fetchers skip them): `refero:9859`, `refero:df769788-29a1-4768-94e1-cd5d7ca0e2f9`, `mobbin:b360aa69-e3f5-4404-af95-8021ce320f4b`, `mobbin:f92f2d5a-2102-4cc3-8a62-aeb6c88c1ade`, `mobbin:1680974d-4690-4922-86a4-d8b2c206755b`, `mobbin:64f56885-93b8-4556-9e69-743262c30997`, `mobbin:c497ddd0-6c10-4284-b085-d9d624400ad6`, `refero:1843`, `mobbin:5094f489-8907-46ac-87e4-b43f44c6f5b7`, `refero:5222`, `mobbin:0135db7d-6118-4df0-b8eb-645026ef853f`, `mobbin:787e8052-f653-4151-9df7-924b5726d087`, `refero:9226`, `mobbin:1caacacf-3691-435b-8ac4-5f6a1f0e8b42`, `refero:12719`, `mobbin:da2ca788-e66b-44ba-8008-7659ccc746a3`, `refero:9872`, `mobbin:68dd9778-9f74-4201-b2f5-97a2a6d36059`, `mobbin:1c7e609d-71a1-4cb9-b179-043d6b2f4d55`, `refero:1848`, `mobbin:1eb73c81-c835-4437-a444-d53e11c78a05`, `mobbin:d5d0e3c0-9ec5-4f9a-9ced-4818e9c3c14d`, `refero:12705`, `mobbin:b85c076b-737e-4b49-a131-dd793cac679b`, `mobbin:8796902e-18e6-4f82-98d8-2146b96be325`, `refero:9868`, `mobbin:671e0870-f520-4d92-bc16-8ee9b332bb3b`, `mobbin:ac5e971e-8cfb-47ca-9b36-bb6ae392b53f`, `mobbin:0a1650e1-ee88-4fa3-aff4-3ebca4f38e81`, `mobbin:44fd56e6-24d2-448c-aec2-34f92834c348`, `refero:12709`, `refero:023aed7b-e219-4ddc-8374-63091cfda3f7`, `mobbin:2ef394f0-635f-4411-b702-d0b703e8128f`, `mobbin:4fa0df58-06ad-4449-8141-952065d330fe`, `mobbin:c0b0ead0-fe5d-4322-a478-6e0c1841c5c0`, `mobbin:68dc9ea7-e6ed-41eb-a36f-0c43a2e416c3`, `mobbin:8a3407fe-0c39-4e39-a9ed-07c6df5e1dc1`, `refero:10204`, `mobbin:4022cce6-c624-4831-9f9f-b52243749684`, `refero:3371`, `refero:12706`, `refero:3492`, `mobbin:8a0d881c-dc4e-438d-a815-d9c37e6a11f1`, `mobbin:1fe20459-c6bd-465d-a838-f19d1b7bc362`, `refero:7186`, `mobbin:5de887fe-2eaf-474f-90b1-4c42855747d8`, `refero:9746`, `mobbin:9a8fc4f4-d70b-416c-9965-38c5359cfc4d`, `mobbin:55d0a62f-e866-40a5-8bc0-1025d8ebaa2e`, `mobbin:f6032c78-fe04-459c-95ff-d231a2a28d85`.
- `05-inventory`: equipment reservation. Settings: room/simulator configuration. Both out of scope.

## Product longlist (24)

- Direct — room/resource booking: Skedda, Robin, Envoy, Condeco, Teem, Google Calendar (room resources)
- Direct — staff rostering: Deputy, When I Work, Homebase, Connecteam, 7shifts, Rotageek, Microsoft Teams Shifts
- Direct — education timetabling: Canvas calendar, Google Classroom, Schoology
- Adjacent — slots and booking: Calendly (group events, round robin), Cal.com (seats), SavvyCal, Acuity, SignUpGenius
- Adjacent — calendars: Notion Calendar, Fantastical, Outlook, Google Calendar, Amie, Motion, Reclaim
- Adjacent — spreadsheet import: Airtable, Notion, HubSpot, Attio, Linear, Pipedrive, Flatfile-style importers
- Wildcard: TeamSnap, LeagueApps (auto round robins), OpenTable / SevenRooms (table rotations, drag to reseat), Greenhouse / Ashby / GoodTime (multi-person, multi-room interview loops)

## Queries (job → platform → fetcher)

| # | Query | Jobs | Platform | Fetcher |
|---|---|---|---|---|
| 1 | Book a room on a resource calendar with rooms as columns, then drag to move or resize (Skedda, Robin, Google Calendar rooms) | new-scheduling | web | A |
| 2 | Create an event and get warned that a room or person is double-booked | new-scheduling | web | A |
| 3 | Filter a shared team calendar by location, room or person (Deputy, Notion Calendar, Google Calendar) | new-scheduling | web | A |
| 4 | Quick-create an event by clicking an empty calendar slot, then expand to the full form (Notion Calendar, Fantastical, Outlook) | simple-events | web | A |
| 5 | Create a recurring event and choose which occurrences to edit | simple-events | web | A |
| 6 | Build a weekly staff rota: auto-schedule, assign people to shifts, publish (Deputy, When I Work, Homebase, Connecteam) | flexi-custom | web | B |
| 7 | Swap a shift or claim an open shift, manager approves (When I Work, Homebase, 7shifts) | flexi-custom | web, ios | B |
| 8 | Group event with several time slots, capacity per slot and self sign-up (Calendly group event, Cal.com seats, SignUpGenius) | flexi-custom | web | B |
| 9 | Auto-generate a round-robin schedule or split a roster into teams (TeamSnap, LeagueApps); multi-person interview loop (Greenhouse, GoodTime) | flexi-custom | web, ios | B |
| 10 | Import a CSV or spreadsheet: map columns, preview rows, fix errors and duplicates (Airtable, Notion, HubSpot, Attio, Linear) | excel-import | web | C |
| 11 | Import shifts, events or an .ics file into a schedule or calendar | excel-import | web | C |
| 12 | Connect an Outlook or Google calendar and choose sync settings (Calendly, Cal.com, Notion Calendar, Motion, Reclaim) | outlook-sync | web | C |
| 13 | Subscribe to or export a calendar feed (ICS link) into Outlook/Google (Canvas, Deputy, When I Work) | outlook-sync | web, ios | C |
| 14 | Receive an event invitation and RSVP; see an update or cancellation notice | outlook-sync | ios | C |
| R | Refero: room booking (Skedda, Robin, Envoy), rota building (Deputy, When I Work, Homebase), group slots (Calendly, Cal.com), CSV import with mapping (Airtable, Attio, HubSpot, Notion), calendar connect (Cal.com, Calendly, Notion Calendar), recurring and conflict | all | web | D |

## Fetcher split (parallel, one raw file each)

- A → `raw/mobbin.A.json`: `new-scheduling`, `simple-events` (queries 1–5)
- B → `raw/mobbin.B.json`: `flexi-custom` (queries 6–9)
- C → `raw/mobbin.C.json`: `excel-import`, `outlook-sync` (queries 10–14)
- D → `raw/refero.json`: all jobs, Refero only (query R)

Mobbin settings on every call: `task_intent: "Research complete user flows for scheduling rooms, sessions and learner rotations with calendar import and sync in a simulation-education platform"`, `output_destination: "doc"`.

## Then

Shortlist 8–12 products / 15–25 flows via `build-gallery.mjs --list` → one gap round max → 3–4 annotators → synthesis → `--check` → build → index → browser QA.
