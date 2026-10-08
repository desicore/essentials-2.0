# Routes and screens

The complete list. A builder (Pencil or code) creates **exactly these**. A new screen needs a spec change first.

Fidelity: **Demo** = full polish along the happy path of `flows/IMSH-demo-story-final.md` · **Nav only** = a navigation item that isn't clickable, with no screen behind it.

The "Steps" column refers to the step numbers in the flow file.

**References.** The layout reference for each screen is its section in `wireframe-benchmark/wireframe-brief.md`. Gabor's Figma screens are **not** a reference: the two design tracks stay apart until the end-of-week comparison (10-07 standup rule). Ideas taken from the other track are allowed and are credited inline, e.g. *(idea: Gabor, 10-07 checkpoint)*.

## Staff app (laptop 1280–1440)

| Route | Screen | Fidelity | Steps | Notes |
|---|---|---|---|---|
| `/dashboard` | Dashboard (new) | **Demo** | 1, 4 | Upcoming events, recent recordings and a mini calendar. On sim day, today's NURS 310 event is on top. Brief: Screen 1. |
| `/calendar` | Calendar | **Demo** | 2 | Week view with event blocks. Clicking an event opens Edit event. Brief: Screen 4. |
| `/events/:id/edit` | Edit event: learner assignment | **Demo** | 3 | Time, room, scenario, and the learners assigned to the event (no rotations). Brief: Screen 5. A simplified version of the existing scheduling. |
| `/events/:id` | Event (today) | **Demo** | 4 | Today's event with its prefilled room, scenario and learners. Untick an absent learner, then **Start recording**. |
| `/rooms/:id/live` | Recording view (refined SRV) | **Demo** | 5, 6 | The existing SRV with a facelift: camera layout, annotations and markers, the yes/no checklist, Stop with a confirmation. Each note is **private or shared** (a lock toggle on the note field; no tagging of people) *(idea: Gabor, 10-07 checkpoint)*. Brief: Screen 3. |
| `/reports` | Simulation Lab Usage | **Demo** | 11 | Total simulation hours, students in simulation, room usage, learner contact hours, simulator usage, types of sessions. Period filter (12 weeks, quarter, year to date), a **"Compare with same period last year"** switch *(idea: Gabor, 10-07 checkpoint)*, and export. Brief: to be written (10-08). |
| `/reports` + dialog | Weekly report | **Demo** | 12 | Schedule a weekly email of the report: day, recipients, **Schedule**. |

## Debrief (iPad landscape 1194×834)

| Route | Screen | Fidelity | Steps | Notes |
|---|---|---|---|---|
| `/debrief/:recordingId` | Debrief | **Demo** | 7, 9 | Ready within 30 seconds of Stop: checklist results (yes/no, no score), AI summary, AI short clips, annotations, playback speed. Photo of paper notes into the AI summary. Brief: Screen 2; photo of notes: Screen 8. |
| `/debrief/:recordingId` + layout | Room display control | **Demo** | 8 | Layout selector (single, dual, quad) for the room TV. |
| `/display/:roomId` | Room display (wall screen, 1920×1080) | **Demo** | 8 | Video only, in the chosen layout |
| `/debrief/:recordingId` + sheet | Share with participants | **Demo** | 10 | Learners prefilled from the event. A checkbox per item to share (AI summary, checklist results, debrief notes); ticking an AI item approves it, which settles Q-28 *(idea: Gabor, 10-07 checkpoint)*. Generates a secure link, emailed to each learner, that opens **in the browser without logging in**. The page the learner opens is out of scope. Brief: Screen 9. |

## Navigation items without screens (Nav only)

Shown in the left navigation so the app looks complete, but not clickable: **Recordings**, **Scenarios**, **People**, **Settings**.

## Global elements

- **Recording banner.** App-wide while a room is recording: room, state, elapsed time, Stop. Brief: Screen 7.
- **Account menu.** Name and role label (Faculty), not clickable beyond that.
