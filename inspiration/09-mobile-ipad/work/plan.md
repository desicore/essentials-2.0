# 09-mobile-ipad — plan

Date: 2026-09-30. Orchestrator: Opus 5.5. Fetchers: Haiku 4.5 (general-purpose subagents running the `gallery-fetcher` rules). Annotators: Sonnet 5.5 (`gallery-annotator` rules).

## Jobs (verbatim)

| id | Job | What to look for |
|---|---|---|
| `recording-control` | Recording control | Remote start/stop, recording-state indicator, which room/camera, confirmation, lock-screen / live activity / widget controls |
| `checklist` | Checklist interface | Fill a checklist/rubric fast during a live event: big toggles, partial credit, comments, auto-timestamp, offline, submit/review |
| `timer` | Timer | Session/phase timers, multiple timers, visible across the room, alerts, lock-screen/live activity |
| `learner-tagging` | Learner tagging | Pick who's in the session or who did what: roster chips, quick-add, QR/badge scan, attach a tag to a moment |
| `voice-notes` | Speech-to-text note taking | Dictate a note that's timestamped to the recording; edit transcript; on-device vs. cloud transcription indicator |
| `intercom` | Intercom device | Push-to-talk to a room or device; target selection; muted/live state |
| `equipment-check` | Equipment check | Tech's pre-session setup checklist per room: scan QR on the room, tick items, flag missing/broken, hand off |
| `debrief-annotations` | Debriefing tool: annotations | Private timestamped annotations/bookmarks during playback, controlling the big screen from the device |

## Seams (not re-researched)

- `04-recording`: desktop/SRV side of recording, tagging, live notes, announcements (fetch done, not yet synthesized). Here: the device-native version only.
- `08-debrief-review`: QR → phone debrief remote (`second-screen`). Here: private annotations on the device and big-screen control as a native pattern, not the pairing flow.
- `03-scenario-manager`: building checklists. Here: filling one live.
- `05-inventory`: stock. Here: pre-session room readiness.

## Product longlist (24)

- Direct, inspection/checklists: SafetyCulture (iAuditor), GoCanvas, Lumiform, Fulcrum, UpKeep / MaintainX (asset QR + work order)
- Direct, iPad sports coaching: Hudl / Hudl Assist, Coach's Eye, GameChanger, TeamSnap
- Direct, clinical/field: Epic Haiku/Rover, Doximity (dictation), ServiceTitan, Jobber
- Adjacent, timers: Apple Clock + Live Activities, Timery, Toggl Track, interval/Tabata timers, Structured
- Adjacent, voice: Otter, Just Press Record, Apple Voice Memos / Notes transcription, Granola, AudioPen
- Adjacent, push-to-talk: Zello, Walkie-Talkie (Watch), Slack huddles, Discord, Ring/Nest two-way talk
- Adjacent, remotes: Zoom Rooms controller, Sonos, DJI Mimo, GoPro Quik, Insta360, Apple TV Remote
- Adjacent, attendance: ClassDojo, Google Classroom, TeamSnap check-in
- Wildcard: Toast / Square KDS & POS on iPad, setlist/live-performance apps, ForeFlight / Garmin Pilot checklists

## Queries → jobs → platforms

| # | Query | Jobs | Platform | Fetcher |
|---|---|---|---|---|
| 1 | Remote start/stop recording on a camera from the phone, recording indicator (GoPro Quik, DJI Mimo, Insta360) | recording-control | ios | A |
| 2 | Record audio/video with lock-screen / Live Activity controls, pause and stop (Just Press Record, Voice Memos, Riverside) | recording-control, timer | ios | A |
| 3 | Control a meeting room from a tablet: start, mute, record (Zoom Rooms controller, Teams Rooms) | recording-control, intercom | ipad | A |
| 4 | Start several named timers, pause, alert, Live Activity (Clock, Timery, Toggl, interval timers) | timer | ios, ipad | A |
| 5 | Game clock / period timer and scoreboard on iPad (GameChanger, scoreboard apps) | timer, learner-tagging | ipad | A |
| 6 | Complete an inspection checklist: pass/fail/N.A., photo, note, submit report (SafetyCulture, Lumiform, GoCanvas) | checklist, equipment-check | ios, ipad | B |
| 7 | Scan a QR code on an asset/site to open its checklist, flag an issue, hand off (SafetyCulture, Fulcrum, MaintainX, UpKeep) | equipment-check | ios | B |
| 8 | Score a performance fast on a tablet: rubric, points, comments (judging, teacher grading, evaluation) | checklist | ipad, ios | B |
| 9 | Wildcard big-target state changes: KDS "bump" / POS order on iPad (Toast, Square); aviation checklist (ForeFlight) | checklist | ipad | B |
| 10 | Take attendance / roll call, mark present/absent, quick-add (ClassDojo, TeamSnap, Google Classroom) | learner-tagging | ios, ipad | C |
| 11 | Live-tag an event to a player during a game (Hudl, GameChanger, stats trackers) | learner-tagging, debrief-annotations | ipad, ios | C |
| 12 | Draw on / comment a video frame at a timestamp (Coach's Eye, Frame.io, Hudl) | debrief-annotations | ipad, ios | C |
| 13 | Control playback on a TV / big screen from the phone (Apple TV Remote, Plex, YouTube cast, Sonos) | debrief-annotations | ios | C |
| 14 | Record a voice note → timestamped transcript → edit (Otter, Just Press Record, Voice Memos, Notes) | voice-notes | ios, ipad | D |
| 15 | Dictate into a record / AI scribe with on-device indicator (Doximity, clinical scribes, AudioPen, Granola) | voice-notes | ios | D |
| 16 | Push-to-talk channel: pick channel, hold to talk, live/muted state (Zello, Walkie-Talkie, Discord, Slack huddle) | intercom | ios | D |
| 17 | Two-way talk through a camera/speaker (Ring, Nest, Arlo) | intercom | ios | D |

## Fetcher split

- **A** → `raw/mobbin.A.json`: recording-control, timer (queries 1–5).
- **B** → `raw/mobbin.B.json`: checklist, equipment-check (queries 6–9).
- **C** → `raw/mobbin.C.json`: learner-tagging, debrief-annotations (queries 10–13).
- **D** → `raw/mobbin.D.json`: voice-notes, intercom (queries 14–17).
- **R** → `raw/refero.json`: dedicated Refero fetcher, all 8 jobs, iOS/iPad first.

Mobbin settings on every call: `task_intent: "Research complete mobile and iPad user flows for controlling a live training session: recording control, checklists, timers, participant tagging and voice notes"`, `output_destination: "doc"`.

## Fetch log

- A 12, B 9, C 6, D 9 Mobbin candidates; R 15 Refero candidates.
- Gap round: **E** → `raw/mobbin.E.json` (iPad, checklist, equipment-check; 16 after removing 2 duplicates of B/D). **C2** (learner-tagging, `raw/mobbin.C2.json`) crashed on the 100-image-per-request limit before writing; C's own second pass crashed the same way. Fetching stopped after this round.
- Refero image CDN returned HTTP 403 for 72/80 step images; no Refero flow is complete, so Refero is excluded from the shortlist.
- Mobbin's MCP search has no iPad filter; only one tablet layout surfaced (Superlist). iPad stays a documented gap.

Module rules: tag tablet layouts `ipad` and prefer them (≥6 iPad flows if Mobbin has them); prefer in-the-moment use (live state, lock screen, one-hand) over settings/onboarding; annotators' `fit` says why mobile beats desktop/SRV for the job, or that it doesn't.
