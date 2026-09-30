<!-- vars
SLUG: 08-debrief-review
PRODUCTS: 8–12
FLOWS: 18–25
FETCHERS: 4
PLATFORMS: web and ios (phone-controlled debrief is central)
TASK_INTENT: Research complete user flows for reviewing recorded sessions, AI highlight clips, group feedback and sharing videos in a simulation-education debrief
-->
# Essentials 2.0 — Debrief / Review: flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available.

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. After a recorded simulation session, faculty lead a **debrief**: the group sits in a debrief room with a big screen, rewatches key moments, discusses what happened, and faculty give (mostly **group**) feedback and grades. Later, learners and faculty may **rewatch**, download or share the recording.

**Personas:**
- **Faculty:** 40–60, non-technical. Runs the debrief, often straight after the session.
- **Learners:** want their own recording and feedback.
- **Sim tech:** sets up the debrief room.

## Jobs (from the FigJam concept map "Essentials — Concept", node 141:429)

| id | Job | What to look for |
|---|---|---|
| `rewatch` | Rewatch videos | Jump to moments from markers/chapters/transcript, playback speed, multi-angle, resume where you left off |
| `second-screen` | Separate app or QR: see notes and annotations | Scan a QR on the big screen → phone becomes the private remote/notes view while the big screen shows only video; handoff between devices |
| `ai-debrief` | AI-based debriefing (formative & summative) | AI summary of what happened, suggested discussion points, evidence-linked moments, faculty edit/approve before showing |
| `ai-clips` | AI-provided short clips | Auto-generated highlight clips/reels from long recordings, trimming, reviewing and publishing clips |
| `record-debrief` | Record the debriefing and attach the evaluation to reports | Record the discussion itself (audio), transcribe, attach outcomes/grades to the session record |
| `group-grading` | Group grading | Grade/give feedback to a whole team at once with per-person overrides; rubric for a group |
| `download-share` | Download videos / easy sharing of recordings | Share link with expiry and permissions, share with a specific learner, download with a consent/confirmation step |
| `camera-views` | 360 camera / PTZ in review | Switching camera angles or a 360 view during playback |

## Baseline

**The SRV (LearningSpace's session video review screen) is reused, not rebuilt.** Screenshot: `/Users/danielbrassnyo/conductor/workspaces/essentials-2.0/windhoek/inspiration/04-recording/baseline/srv-transcript-tab.png`.
- Layout: video left; right-panel tabs **Annotation · Data Entry · Layout · Transcript**.
- Transcript tab: chapters with speaker-labelled transcript and search.
- A chaptered timeline with clickable manual and AI annotation markers.
- Today faculty annotations are **visible to learners** on the debrief-room screen, which faculty dislike.

**The headline concept (from the solution concept):**
- When the recording ends, the SRV shows a **QR for this recording's debrief**. The faculty member scans it and gets a **web page on their phone**: their own annotations, the AI annotations, the AI summary and AI clips.
- The **big screen shows only the video**, controlled from the phone.
- The debrief's audio is captured and AI-harvested (phone voice-memo as a fallback).

**Open conflict:** one stakeholder wants a **tablet** interface like SimStation/Laerdal because a phone is too small; the concept deck says don't mandate tablets. Flows that work on both are especially valuable.

**Also proposed:**
- Prioritize group grading (it is the dominant mode).
- Easy download and link sharing.
- AI short clips.

**Constraints:**
- AI clips must exist **immediately after** the session; render-then-transcribe is too slow.
- Recording faculty speech raises a separate consent question.
- Learners get video via an **expiring share link or SSO**. Stand-alone vs. Canvas SSO is still debated.
- No native app is preferred for the debrief page (web first).

## Seams (read, don't re-research)

- `courses/08-recordings-course-reports/` covers access to recordings from a course (library, per-learner access, playback enrichments like chapters/transcripts). Read `synthesis.json` / `notes/` first and don't repeat it.
- `04-recording` covers live control, live notes and grading **during** the recording. Here, grading is **after**, in the debrief.
- `09-mobile-ipad` covers the general mobile/iPad app. Here, `second-screen` is specifically the **QR → phone remote for the debrief**.

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:**
  - Sports video review: Hudl, Veo, Coach's Eye / OnForm, Catapult (team review, clips, group feedback)
  - Video feedback: Frame.io, Loom, Vimeo review, Wistia (comments on the timeline, share links with expiry, download permissions)
- **Adjacent:**
  - Meeting recorders with AI summaries and clips: Grain, Gong, Fathom, Otter, tl;dv, Fireflies, Zoom AI Companion
  - AI clip makers: Descript, Opus Clip, Riverside Magic Clips
  - Second-screen / QR handoff: Netflix/YouTube phone-as-remote, Chromecast, Kahoot (big screen + phones), Mentimeter/Slido, Apple Continuity
- **Wildcard:**
  - Group feedback and peer review: Miro/FigJam voting, Parabol / Retrium retrospectives, Perusall
  - Smart-home "tap to cast" flows

## Module-specific rules

- `second-screen` must show **both sides** (big screen and phone) where the source allows. A lone phone screen is weak evidence.
- For `ai-debrief` and `ai-clips`, keep flows that show **human review before sharing**. Flag products that publish AI output with no review step as counter-examples.
