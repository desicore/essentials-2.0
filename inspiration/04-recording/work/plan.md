# 04-recording — plan

Date: 2026-09-30. Orchestrator: Opus 5.5. Fetchers: Haiku 4.5 (general-purpose subagents running the `gallery-fetcher` rules). Annotators: Sonnet 5.5 (`gallery-annotator` rules).

## Jobs (verbatim)

| id | Job | What to look for |
|---|---|---|
| `start-stop` | Start/stop manual or automatic recording | One-click record; countdown; recording-state indicator; auto-start by schedule/trigger; stop/confirm; what happens after stop (processing, share) |
| `device-check` | Automatic device check | Pre-flight camera/mic/speaker test; scheduled self-test; "system health OK" status; guided fix when something fails |
| `multi-room` | Multi-room management | Overview wall of many live feeds/rooms with status; drill into one; bulk actions |
| `camera-control` | New PTZ interface + 360 camera | Pan/tilt/zoom controls, presets, click-to-point, 360° dewarp/view switching |
| `announcements` | Send manual/automatic announcements to room or simulator | Push-to-talk / intercom, pre-recorded or scheduled messages, target selection (room vs. device) |
| `participant-tagging` | Tag participants ad hoc / QR check-in / automatic learner tagging | Who's in this session: check-in by QR/code/badge, quick-add attendees, correct mistakes after the fact |
| `live-notes` | Add faculty notes / automatic annotations | Timestamped notes or markers during a live recording; quick-tag buttons; AI-generated markers appearing on the timeline |
| `grading` | Manual / AI grading (summative & formative) | Score against a checklist/rubric while or after watching; AI-suggested scores with evidence timestamps; formative vs. summative modes |

## Seams (not re-researched)

- `courses/08-recordings-course-reports/` already covers library, sharing/permissions, transcripts, AI chapters and comments on finished recordings (Loom library + AI chapters, Zoom sharing, Vimeo privacy, Grain timestamp comments). Fetchers skip those playback/access flows.
- Post-session clips/sharing/group grading → `08-debrief-review`. Phone remote → `09-mobile-ipad`.

## Product longlist (22)

- Direct, recording/production: Riverside, Loom, Zoom, Descript, StreamYard, Restream, Vimeo Record, OBS-style surfaces (Streamlabs)
- Direct, security/NVR: UniFi Protect, Verkada, Ring, Nest / Google Home, Arlo, Eufy, Wyze
- Adjacent: Hudl, Veo (sports tagging); Otter, Fathom, Fireflies, Gong, Granola (live AI notes); Zello, Discord, Slack huddles (push-to-talk); Eventbrite Organizer, Luma, Whova (check-in); Google Meet / Teams (pre-call device check)
- Wildcard: DJI Mimo / DJI Fly (gimbal control), Nanit / Owlet (always-on monitoring states), Eero / Philips Hue (device health), Gradescope / Turnitin (rubric grading)

## Queries → jobs → platforms

| # | Query | Jobs | Platform | Fetcher |
|---|---|---|---|---|
| 1 | Start a recording with countdown, then stop and see it processing (Riverside, Loom, Descript) | start-stop | web | A |
| 2 | Schedule a recording / auto-record a meeting or live stream (Zoom, StreamYard, Restream) | start-stop | web | A |
| 3 | Pre-call camera, microphone and speaker test in a green room (Google Meet, Riverside, Teams) | device-check | web | A |
| 4 | Device offline / connection problem warning and troubleshoot flow (Eero, Wyze, Arlo) | device-check | ios | A |
| 5 | Live view of multiple security cameras in a grid, then open one camera (UniFi Protect, Verkada, Ring) | multi-room | ios, web | B |
| 6 | Camera dashboard with online/offline status per device and room (Nest, Eufy, Arlo) | multi-room, device-check | ios | B |
| 7 | Pan, tilt and zoom a camera with presets (Wyze, Eufy, DJI Mimo) | camera-control | ios | B |
| 8 | 360° / fisheye camera view switching and dewarp | camera-control | ios, web | B |
| 9 | Push-to-talk / two-way talk to a camera or channel (Ring, Zello, Discord) | announcements | ios | C |
| 10 | Broadcast an announcement to speakers/rooms, scheduled message (Alexa, Sonos, Slack) | announcements | ios, web | C |
| 11 | Event check-in by scanning attendee QR codes, manual lookup, undo (Eventbrite Organizer, Luma, Whova) | participant-tagging | ios | C |
| 12 | Tag players / people in a video, fix the roster (Hudl, Veo) | participant-tagging, live-notes | ios, web | C |
| 13 | Live meeting notes and AI highlights with timestamps during recording (Otter, Fathom, Granola, Fireflies) | live-notes | web | D |
| 14 | Add a marker / bookmark / clip during a live recording (Hudl, Veo, Riverside) | live-notes | web, ios | D |
| 15 | Grade a submission against a rubric, AI-suggested scores (Gradescope, Turnitin) | grading | web | D |
| 16 | Scorecard / call evaluation against a checklist with timestamps (Gong, Fireflies) | grading, live-notes | web | D |

## Fetcher split

- **A** → `raw/mobbin.A.json`: start-stop, device-check (queries 1–4). Also look for a silent-failure counter-example (recording "on" but no feedback, mic muted, nothing captured).
- **B** → `raw/mobbin.B.json`: multi-room, camera-control (+ device status) (queries 5–8).
- **C** → `raw/mobbin.C.json`: announcements, participant-tagging (queries 9–12).
- **D** → `raw/mobbin.D.json`: live-notes, grading (queries 13–16).
- **R** → `raw/refero.json`: dedicated Refero fetcher, all 8 jobs, web first (Refero is web-heavy).

## Run log

- Round 1 (A–D, R): 65 candidates. Gap round (E: camera wall/PTZ, F: talk-back/silent failure): +15.
- `raw/refero.json` is unreliable: the Refero fetcher attached image sets to the wrong flow ids (e.g. `refero:4656` "Riverside" holds Vimeo screens, `refero:9213` "Preply" holds Miro/Riverside). No Refero flow is used in the report; Mobbin equivalents replaced them.
- Annotators retagged Philips Hue (motion-sensor test, no camera steering) and Apollo (comments, not grading); both were dropped for Google Home and Wellfound. Halide added as a second camera-control product → 13 products (one over target) to keep every job at ≥2 products.

Mobbin settings on every call: `task_intent: "Research complete user flows for controlling, monitoring and annotating live video recordings across multiple rooms in a simulation-center platform"`, `output_destination: "doc"`.
