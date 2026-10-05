# Routes and screens

The complete list. A builder (Pencil or code) creates **exactly these**. A new screen needs a spec change first.

Fidelity: **Demo** = full polish along the happy path of `flows/IMSH-demo-story-final.md` · **Nav only** = a navigation item that isn't clickable, with no screen behind it.

The "Steps" column refers to the step numbers in the flow file.

## Staff app (laptop 1280–1440)

| Route | Screen | Fidelity | Steps | Notes |
|---|---|---|---|---|
| `/dashboard` | Dashboard (new) | **Demo** | 1, 4 | Upcoming events, recent recordings and a mini calendar. On sim day, today's NURS 310 event is on top. Gabor's Figma *Dashboard* is the reference. |
| `/calendar` | Calendar | **Demo** | 2 | Week view with event blocks. Clicking an event opens Edit event. |
| `/events/:id/edit` | Edit event: learner assignment | **Demo** | 3 | Time, room, scenario, and the learners assigned to the event and its rotations. Gabor's Figma *Edit Event* is the reference. A simplified version of the existing scheduling. |
| `/events/:id` | Event (today) | **Demo** | 4 | Today's event with its prefilled room, scenario and learners. Untick an absent learner, then **Start recording**. |
| `/rooms/:id/live` | Recording view (refined SRV) | **Demo** | 5, 6 | The existing SRV with a facelift: camera layout, annotations and markers, the yes/no checklist, Stop. Gabor's Figma *SRV* is the reference. |
| `/reports` | Simulation Lab Usage | **Demo** | 11 | Total simulation hours, students in simulation, room usage, learner contact hours, simulator usage, types of sessions. Period filter (12 weeks, quarter, year to date) and export. Gabor's Figma *Reports* is the reference. |
| `/reports` + dialog | Weekly report | **Demo** | 12 | Schedule a weekly email of the report: day, recipients, **Schedule**. |

## Debrief (iPad landscape 1194×834)

| Route | Screen | Fidelity | Steps | Notes |
|---|---|---|---|---|
| `/debrief/:recordingId` | Debrief | **Demo** | 7, 9 | Ready within 30 seconds of Stop: checklist results (yes/no, no score), AI summary, AI short clips, annotations, playback speed. Photo of paper notes into the AI summary. Gabor's Figma *Debrief* is the reference. |
| `/debrief/:recordingId` + layout | Room display control | **Demo** | 8 | Layout selector (single, dual, quad) for the room TV. |
| `/display/:roomId` | Room display (wall screen, 1920×1080) | **Demo** | 8 | Video only, in the chosen layout |
| `/debrief/:recordingId` + sheet | Share with participants | **Demo** | 10 | Learners prefilled from the event. Generates a secure link, emailed to each learner, that opens **in the browser without logging in**. The page the learner opens is out of scope. |

## Navigation items without screens (Nav only)

Shown in the left navigation so the app looks complete, but not clickable: **Recordings**, **Scenarios**, **People**, **Settings**.

## Global elements

- **Recording banner.** App-wide while a room is recording: room, state, elapsed time, Stop.
- **Account menu.** Name and role label (Faculty), not clickable beyond that.
