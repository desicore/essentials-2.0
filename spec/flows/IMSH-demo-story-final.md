# IMSH demo story · final

**Status:** final, 2026-10-05. The flow was chosen and approved by Gergely Németh on the scope call with Balázs Vegső and Patrik Makrai. · Replaces `IMSH-demo-story.md` (v1) and `IMSH-demo-story-v2.md` · Handoff to engineering: **15 October**

## What this is

A **happy-flow demo** of one end-to-end journey. It's not a full product: not every button has to work, and only the main path is designed. It follows Gergely's five steps:

**Dashboard → Calendar and learner assignment → Refined SRV → Debrief → Report**

The showpiece is **the debrief on the tablet.** That's the part to get exactly right.

## Protagonist

**Dr. Maya Ortiz**, faculty, runs the whole story from setup to report. With only one persona there's no persona switcher and no logging in and out.

**Course:** NURS 310 · Group A, five learners, with the *Sepsis recognition* scenario and a yes/no checklist already set up.

## Out of scope

- Excel user import and user management
- Canvas / LMS integration
- Course creation, and editing scenarios and checklists (they are pre-populated)
- Scoring and grading (the checklist is yes/no only)
- SRV sound controls (voice modulator, background sounds)
- The learner's side and a mobile app
- Learner performance reports
- Recording the debrief itself

---

## Step 1 · Dashboard

**Maya, the week before the simulation.**

| # | Screen | What Maya does | What the system does |
|---|---|---|---|
| 1 | **Dashboard** (new) | Opens Essentials | Shows the new dashboard: upcoming events, recent recordings and a mini calendar. The NURS 310 sim event is coming up. |

**Visuals, in order:**
1. Storyboard: *A new dashboard*
2. Figma · Dashboard

## Step 2 · Calendar and learner assignment

| # | Screen | What Maya does | What the system does |
|---|---|---|---|
| 2 | **Calendar** | Opens the calendar and clicks the NURS 310 *Sepsis recognition* event | Opens the event |
| 3 | **Edit event: learner assignment** | Assigns the learners of Group A to the event, and checks the time and room | Saves the event. On sim day it shows up on her dashboard with the learners already assigned. |

**Visuals, in order:**
1. Storyboard: *The sim event in the calendar*
2. Storyboard: *Assign the learners*
3. Figma · Edit Event

## Step 3 · Sim day: the refined SRV

**Maya, on sim day.**

| # | Screen | What Maya does | What the system does |
|---|---|---|---|
| 4 | **Dashboard → today's event** | Opens today's NURS 310 event and clicks **Start recording**. One learner is off sick, so she unticks her. | Room, scenario and learners are prefilled from the event. Opens the recording view. |
| 5 | **Recording view** (existing SRV, refined) | Runs the scenario. Picks the camera layout, adds annotations and markers, and ticks the yes/no checklist. | Records the session with the annotations, markers and checklist attached |
| 6 | **Stop** | Stops the recording and walks to the debrief room with the tablet | Processing starts straight away |

**Visuals, in order:**
1. Storyboard: *Start from today's event*
2. Storyboard: *Recording, annotating*
3. Figma · SRV recording view
4. Storyboard: *Stop, then walk to debrief*

## Step 4 · Debrief on the tablet (the showpiece)

**Maya, in the debrief room with the learners.**

| # | Screen | What Maya does | What the system does |
|---|---|---|---|
| 7 | **Debrief** (tablet) | Opens the debrief | Ready **within 30 seconds** of Stop: the checklist results (yes/no, no score), a short **AI summary**, **AI short clips**, her annotations, and playback speed |
| 8 | **Debrief: room display** | Uses the layout selector to put the video on the room TV | The TV shows single, dual or quad camera views. Control stays on the tablet. |
| 9 | **Debrief: photo of notes** | Takes a photo of her handwritten notes with the tablet camera | The AI reads the notes and folds them into the summary |
| 10 | **Share with participants** | Taps **Share with participants** in the top right. The learners are already filled in. | Generates a secure link and emails it to each learner. They open the recording, annotations, AI clips and evaluation **in the browser, without logging in**. |

**Visuals, in order:**
1. Storyboard: *Ready in 30 seconds*
2. Storyboard: *Video on the big screen*
3. Storyboard: *Paper notes, folded in*
4. Figma · Debrief (tablet)
5. Storyboard: *Shared. No login needed*

## Step 5 · Report

**Maya, back at her desk.** Management now asks for regular usage numbers.

| # | Screen | What Maya does | What the system does |
|---|---|---|---|
| 11 | **Simulation Lab Usage** | Opens the report and filters by period (12 weeks, quarter, year to date) | Shows total simulation hours, students in simulation, room usage, learner contact hours, simulator usage and types of simulation sessions. The charts can be exported. |
| 12 | **Weekly report** | Sets up a weekly report to management | The report is emailed to management every week |

**Visuals, in order:**
1. Storyboard: *Simulation Lab Usage*
2. Figma · Reports
3. Storyboard: *Every week, automatically*

---

## Open questions

- **The 30-second definition.** Is it "debrief material ready" or "video playable"? Engineering needs to give a number.
- **Desktop and tablet sync.** How video control and annotations stay in sync between the recording view and the debrief tablet is a technical question for engineering.
- ~~**Course / activity concept.**~~ Decided 2026-10-05: the course is a container for events, groups and scenarios (Gabor's concept). The demo shows it lightly, as "NURS 310 · Group A" on the event.
- **Checklist editor and shadowing.** Both are flagged as complex. Not part of the demo, but they need a simplification plan.

## Sources

- 2026-10-05 11:35 call "Essentials user story IMSH" (Patrik, Gabor, Daniel): Gergely's five-step flow, his approval, the cut import, sharing as optional link generation, Canvas rejected, the 15 October handoff.
- Earlier the same day: the proto standup (v1) and the Teams review (v2), for the debrief, SRV and report details.
