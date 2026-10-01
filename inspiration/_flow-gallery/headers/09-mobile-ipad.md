<!-- vars
SLUG: 09-mobile-ipad
PRODUCTS: 8–12
FLOWS: 18–25
FETCHERS: 4
PLATFORMS: ios first (iPad layouts preferred, phone acceptable), web only for companion screens
TASK_INTENT: Research complete mobile and iPad user flows for controlling a live training session: recording control, checklists, timers, participant tagging and voice notes
-->
# Essentials 2.0 — Mobile / iPad app: flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. During a simulation session, faculty and sim techs are on their feet: in the control room, at the bedside, or in the debrief room. A phone or iPad app would let them run the session without a desktop: start/stop recording, tick a checklist, run a timer, tag who is present, dictate timestamped notes, talk to the room, check equipment, and annotate for the debrief.

**Personas:**
- **Faculty:** 40–60, non-technical, often wearing gloves or holding things. Needs **one-hand, glanceable, big-target** UI.
- **Sim tech / operator:** runs room setup and AV.

## Jobs (from the FigJam concept map "Essentials — Concept", node 141:429)

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

## Baseline

**Today:** **TouchPro** is LearningSpace's existing tablet client. There is no phone app.

**Ideas from the solution concept (Gabor, 2026-09-10):**
- A QR-scan checklist interface
- Start/stop recording
- Private debrief annotations
- A sim-tech equipment/setup checklist
- A **timer** (customers buy separate digital timers today)
- Learner tagging (even the proposer was unsure why mobile beats other options for tagging, so show us)
- Speech-to-text timestamped notes
- The phone as an **intercom microphone** to the simulator

The starter PRD lists mobile access for notes, annotations, AI evaluation and playback/video control.

**Constraints:**
- A **web page (no native install)** is preferred for the debrief page.
- Phones may be **banned in summative exams** or at some sites.
- One stakeholder wants tablets (phones too small); the concept deck says don't mandate tablets.
- Leadership is lukewarm on a mobile MVP until the feature list is prioritized. This research should show which jobs genuinely **benefit** from mobile.
- **GDPR:** no biometrics/face ID tied to names in the cloud; on-device speech-to-text is being explored.

## Seams (read, don't re-research)

- `04-recording` covers the desktop/SRV side of recording, tagging and live notes. `08-debrief-review` covers the QR → phone debrief remote (`second-screen`). Here, focus on the **device-native experience** of each job and on **iPad** layouts.
- `03-scenario-manager` covers building checklists. Here, `checklist` is **filling** one live.
- `05-inventory` covers stock. Here, `equipment-check` is the pre-session room readiness check.

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Inspection and checklist apps: SafetyCulture (iAuditor), GoCanvas, Lumiform, Fulcrum
  - Sports coaching on iPad: Hudl Assist, Coach's Eye, GameChanger (live tagging, scoring, timers)
  - Clinical/field apps if present: Epic Haiku/Rover, Doximity, field-service apps (ServiceTitan, Jobber)
- **Adjacent:**
  - Timers: Apple Clock timers and Live Activities, Timery, Toggl, Tabata/interval timers, sports scoreboards
  - Voice notes and dictation: Otter, Just Press Record, Apple Notes transcription, Whisper-based notes apps, Granola
  - Push-to-talk: Zello, Walkie-Talkie on Apple Watch, Slack huddles
  - Remote controls: Zoom Rooms controller, Sonos, DJI, GoPro Quik (remote record)
  - Attendance and roll-call: ClassDojo, Google Classroom, TeamSnap check-in
- **Wildcard:**
  - Restaurant POS / KDS on iPad: Toast, Square (big targets, fast state changes)
  - Music live-performance apps (setlists, big buttons)
  - Aviation checklists: ForeFlight, Garmin Pilot

## Module-specific rules

- Tag `platform: "ipad"` for tablet layouts and prefer them when a product has both. Keep at least 6 iPad flows if Mobbin has them.
- Prefer flows showing **in-the-moment** use (live state, lock-screen/live activity, one-hand input) over settings and onboarding.
- For each job, the annotator's `fit` line should say **why mobile beats the desktop/SRV** for that job, or that it doesn't. This answers leadership's open question.
