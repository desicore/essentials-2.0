# 08 Debrief / Review — plan

Date: 2026-09-30. Sources: Mobbin (web + iOS) and Refero (web). Orchestrator: Opus 5.5. Fetchers: Haiku 4.5. Annotators: Sonnet 5.5.

## Jobs (verbatim from the prompt)

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

## Seams (already covered, don't repeat)

- `courses/08-recordings-course-reports`: Loom library + AI chapters, Zoom share audience/expiry, Vimeo named roles vs link privacy, Grain transcript → timestamped comment, course reporting. Excluded flow ids: `mobbin:9e8909a2-43b5-4007-b72d-05475a8c0af4`, `mobbin:ab3d0cfe-b7ab-40a8-8aaf-b4579be5f001`, `mobbin:5262ab95-d5ee-4376-ba68-5e780dcad8a8`, `mobbin:62d0f6ef-1c16-452c-8766-b3133d5bc0c7`, `mobbin:9c7d6717-30ad-411d-96a1-465961438578`, `mobbin:cf7c8043-a315-4bc5-a889-d3683430232c`, `mobbin:179edc0d-797b-47fa-9999-7a3998407b80`, `mobbin:bd482934-e96c-4560-967f-2509d3c341d8`, `refero:1429d347-5ed3-4ac6-b9d1-f906e69c23e9`.
- `04-recording`: grading/notes during the recording. Here grading is after, in the debrief.
- `09-mobile-ipad`: general mobile app. Here `second-screen` = QR → phone remote for the debrief only.

## Product longlist (22)

- Direct: Hudl, Veo, OnForm / Coach's Eye, Catapult, Frame.io, Loom, Vimeo, Wistia, Dropbox Replay
- Adjacent: Grain, Gong, Fathom, Otter, tl;dv, Fireflies, Zoom (AI Companion), Descript, Opus Clip, Riverside, Netflix / YouTube (cast + phone remote), Google Home / Chromecast, Kahoot, Mentimeter, Slido
- Wildcard: Parabol, Miro / FigJam voting, Perusall, ClassDojo (whole-class points), Ring / Nest / Arlo (multi-camera event timeline), Insta360 (360 reframing)

## Queries (job → platform)

| # | Query | Jobs | Platform | Fetcher |
|---|---|---|---|---|
| 1 | Watch game film and jump between tagged plays (Hudl / Veo) | rewatch, camera-views | ios, web | A |
| 2 | Security camera event timeline: scrub, jump to events, switch cameras (Ring / Nest / Arlo) | rewatch, camera-views | ios | A |
| 3 | Video player: chapters, playback speed, resume where you left off | rewatch | ios, web | A |
| 4 | 360 video reframing / change viewing angle (Insta360, GoPro) | camera-views | ios | A |
| 5 | Cast a video from phone to TV and use phone as remote (YouTube, Netflix, Google Home) | second-screen | ios | B |
| 6 | Host a game on a big screen, players join by QR/code on phones (Kahoot, Mentimeter, Slido) | second-screen | ios, web | B |
| 7 | Sign in on TV / desktop by scanning a QR code with phone | second-screen | ios, web | B |
| 8 | Record a meeting/conversation in person, live transcript, notes attached (Otter, Fireflies, Granola, voice memo) | record-debrief | ios, web | B |
| 9 | AI meeting summary review and edit before sending (Fathom, Zoom AI Companion, tl;dv, Gong) | ai-debrief | web | C |
| 10 | AI highlights / key moments linked to timestamps (Grain, Gong, Otter) | ai-debrief, rewatch | web, ios | C |
| 11 | Generate short clips from a long video with AI, review and publish (Opus Clip, Descript, Riverside) | ai-clips | web | C |
| 12 | Create a highlight clip / reel from a recording and trim (Loom, Grain, Hudl) | ai-clips | web, ios | C |
| 13 | Grade a group assignment / give feedback to a whole team with individual overrides (Canvas, Google Classroom, Gradescope, ClassDojo) | group-grading | web, ios | D |
| 14 | Team retrospective voting and group feedback (Parabol, Miro, FigJam) | group-grading | web | D |
| 15 | Share a video link with expiry, password and download permission (Frame.io, Wistia, Dropbox, WeTransfer) | download-share | web, ios | D |
| 16 | Download a video with a confirmation step / send to a specific person | download-share | ios, web | D |
| R | Refero: Frame.io review, Descript/Opus/Riverside clips, Grain/Fathom/tl;dv/Gong summaries, Kahoot/Mentimeter/Slido join, Parabol, Wistia share | all | web | E |

## Fetcher split (parallel, one raw file each)

- A → `raw/mobbin.A.json`: `rewatch`, `camera-views` (queries 1–4)
- B → `raw/mobbin.B.json`: `second-screen`, `record-debrief` (queries 5–8)
- C → `raw/mobbin.C.json`: `ai-debrief`, `ai-clips` (queries 9–12)
- D → `raw/mobbin.D.json`: `group-grading`, `download-share` (queries 13–16)
- E → `raw/refero.json`: all jobs, Refero only (query R)

Mobbin settings on every call: `task_intent: "Research complete user flows for reviewing recorded sessions, AI highlight clips, group feedback and sharing videos in a simulation-education debrief"`, `output_destination: "doc"`.

## Then

Shortlist 8–12 products / 18–25 flows via `build-gallery.mjs --list` → one gap round max → 3–4 annotators → synthesis → `--check` → build → index → browser QA.
