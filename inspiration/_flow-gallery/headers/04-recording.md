<!-- vars
SLUG: 04-recording
PRODUCTS: 8–12
FLOWS: 18–25
FETCHERS: 4
PLATFORMS: web first; ios for remote-control and tagging flows
TASK_INTENT: Research complete user flows for controlling, monitoring and annotating live video recordings across multiple rooms in a simulation-center platform
-->
# Essentials 2.0 — Recording: flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. A simulation center runs training sessions in rooms with manikins/simulators, standardized patients (SPs) and fixed cameras + microphones. Every session is **recorded** from a control room: an operator or faculty member starts and stops recording, watches several rooms, talks to the room (announcements / "voice of the manikin"), tags who is in the room, and faculty take timestamped notes that later drive the debrief. Recording has to **just work**. Missing or broken recordings are the most expensive failure in a center.

**Personas:**
- **Sim tech / operator:** runs AV, wants zero-touch recording.
- **Faculty:** 40–60, non-technical, observes, annotates and grades.
- **Coordinator / admin:** oversees rooms.

## Jobs (from the FigJam concept map "Essentials — Concept", node 141:429)

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

## Baseline: the current SRV (LearningSpace's session video review screen), which will be **reused, not rebuilt**

Screenshot of the current design: `/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/04-recording/baseline/srv-transcript-tab.png`. The orchestrator should brief annotators to open it once so their `fit` lines are concrete.

**Layout:** video left; right panel with tabs **Annotation · Data Entry · Layout · Transcript**.
- Transcript tab: **Chapters** (collapsible, time ranges, colour-coded) with speaker-labelled transcript lines and search.
- Below the video: a **timeline split into chapter segments**, with clickable manual and AI annotation markers above it (overlapping markers are a known UI risk).
- Controls: pause/stop, time, "Video Review", CC.
- Evaluation variant (Abbott): two video tracks (source + selfie camera) with a checklist + timestamps.

**Planned or proposed around it:**
- A **mixer panel** in the SRV with automated guardrails, not raw gain.
- A one-button / scheduled (~5 am) **per-room device self-test** reporting "system health OK".
- A **Center Overview** for multi-room.
- **Simplified PTZ**. The 360 camera has a mixed reception.
- **Separate announcement targets:** room/control room vs. simulator audio.
- **Auto-record** by voice, button, "on air" light or schedule, and it must be **reschedulable mid-event**.
- A **QR at the end of a recording** that opens the debrief on the faculty's phone (see 08).
- Maestro mirroring is to be avoided.

**Known pains:**
- Recording is often skipped or started manually. The real fix is **check-in**, not a bigger button.
- Audio failed at 4 of 6 visited centers.

**Constraints:**
- No face-recognition / camera ID: GDPR forbids biometrics + names in the cloud.
- On-device speech-to-text is being explored.

**Implication for this research:** we are not looking for a new video player. Every flow's `fit` line must say what it would **add to or change in the SRV**, or what it would replace outside it (e.g. room overview, check-in).

## Seams (read, don't re-research)

- `courses/08-recordings-course-reports/` covers **accessing** recordings and course reports from a course (library, sharing, playback enrichments). Read `synthesis.json` / `notes/` first.
- Post-session review, clips, sharing and group grading after the session belong to **Debrief/Review** (`08-debrief-review`). Here, `grading` means scoring **during or right after** the recording, inside the recording/SRV context.
- The phone/iPad remote for recording belongs to `09-mobile-ipad`. Only include mobile here when the product's core recording flow is mobile.

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Recording/production: Riverside, Loom, Zoom (cloud recording + recording consent), Descript, OBS-style control surfaces, StreamYard, Restream, Vimeo Record
  - Security-camera and NVR apps: UniFi Protect, Verkada, Ring, Nest, Arlo, Eufy, Wyze. Strong for `multi-room`, `camera-control`, `device-check` and event markers.
- **Adjacent:**
  - Sports video tagging: Hudl, Veo, Catapult. Strong for `live-notes` and `participant-tagging`.
  - Call recorders with live AI notes and markers: Otter, Fathom, Fireflies, Grain, Gong, Granola.
  - Push-to-talk / intercom: Zello, Slack huddles, Discord, Sonos/Alexa announcements.
  - Event check-in: Eventbrite Organizer, Luma, Zoom Events, Whova.
  - Pre-call device checks: Google Meet green room, Zoom test, Teams.
- **Wildcard:**
  - Drone/gimbal camera apps: DJI Mimo / DJI Fly (PTZ-like control, presets)
  - Baby monitors: Nanit, Owlet (always-on monitoring states)
  - Smart-home device health: Google Home, Philips Hue, Eero
  - Grading tools: Gradescope, Turnitin Feedback Studio

## Module-specific rules

- Prefer flows that show **states**: idle → armed → recording → processing → ready, device OK / warning / failing, room occupied / free.
- For `device-check`, `multi-room` and `camera-control`, iOS results from camera apps are welcome; tag platform correctly.
- Include at least one counter-example about **silent failure** (recording "on" but nothing captured, or no feedback).
