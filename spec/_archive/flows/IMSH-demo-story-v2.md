# IMSH demo story v2 · First sim of the semester

**Status:** v2, 2026-10-05, after Patrik's and Gabor's review in Teams (10:01–10:34) · Replaces v1 (`IMSH-demo-story.md`) · Waiting for approval from Balázs and Gergely · Handoff to engineering: next week

**Changes from v1**
- **Act 1:** "Sync with Canvas" is no longer a step. The button is still on the screen, but the demo doesn't use it.
- **Act 1:** new step 5, a light **event schedule fine-tune** (a simplified version of the existing scheduling).
- **Act 2:** new step 9, **sound controls** in the recording view: a **voice modulator** and **background sounds**, both changed on the fly.
- **Act 3:** sharing now stresses that learners **open the recording without logging in**.
- **Act 5 (the learner on a phone) is removed.**

## Why this story

One continuous story instead of three separate flows. It follows a semester from setup to the management report, and every screen shown belongs to that story. Engineering gets one clearly specified thing to build in the 10-day window.

The showpiece is **Act 3, the debrief on the tablet.**

## Cast

| Persona | Role | Appears in |
|---|---|---|
| **Dana Whitfield** | Sim coordinator. Sets up the semester and reports to management. | Act 1, Act 4 |
| **Dr. Maya Ortiz** | Faculty. Runs the simulation and the debrief. | Act 2, Act 3 |

**Course:** NURS 310 · Group A, five learners. The course is already set up, with the *Sepsis recognition* scenario and a yes/no checklist attached.

## Prototype note: persona switcher

The prototype has a **demo-only persona switcher** in the top-right corner ("Demo: viewing as Dana Whitfield ▾", with avatar, name and role). Picking a persona switches in place and lands on that persona's dashboard. This avoids logging in and out during the demo.

It is clearly labelled as a demo control. It is not a product feature, and the interface is otherwise the same for every persona.

## Out of scope

- The full scheduling and calendar (only a light event edit is shown, in step 5)
- Course creation (the course is already set up)
- Editing scenarios and checklists (they are pre-populated)
- Scoring and grading (the checklist is yes/no only)
- Learner performance reports
- Recording the debrief itself
- User management beyond the import (roles are fixed only in the import review)
- Learners watching recordings on a phone, or a mobile app

---

## Act 1 · Semester start

**Dana, a few weeks before the first simulation.** The new semester has started. There are new learners to bring into Essentials, and the first sim event needs a final check.

| # | Screen | What Dana does | What the system does |
|---|---|---|---|
| 1 | **Dashboard** | Opens Essentials at the start of the semester | Shows the coordinator dashboard, with **Import users** available |
| 2 | **Import users** | Uploads the class list as an Excel file | Reads the file and moves to column mapping |
| 3 | **Column mapping** | Matches the Excel columns to fields: name, email, role | Previews the first rows with the mapping applied |
| 4 | **Review import** | Spots one row with the wrong role: an instructor tagged as a learner. Changes the role inline, then confirms. | Imports the users with their roles and shows how many were added |
| 5 | **Edit event** | Opens the NURS 310 sim event and fine-tunes it: time, room and group | Saves the event. It shows up on the dashboard on sim day. |

**Visuals, in order:**
1. Storyboard panel 1
2. Figma · User Manager
3. Storyboard panels 2, 3 and 4
4. Storyboard panel 5 *(new)*
5. Figma · Edit Event
6. Figma · Course page

## Act 2 · Sim day

**Maya, weeks later (timeline jump).** NURS 310 · Group A has its first simulation.

| # | Screen | What Maya does | What the system does |
|---|---|---|---|
| 6 | **Dashboard → Course page** | Opens the **NURS 310** course card from the dashboard | The course page shows the scenario, the checklist and Group A, all already set up |
| 7 | **Start new recording from NURS 310** | Clicks the button in the top right of the course page. One learner is off sick, so she unticks her. | Room, scenario and group are prefilled. People can still be added during or after recording. |
| 8 | **Recording view** (existing SRV, facelift) | Runs the scenario. Picks the camera layout, adds annotations and markers, and ticks the yes/no checklist on the Evaluation tab. | Records the session with the annotations, markers and checklist attached |
| 9 | **Recording view: sound controls** | Speaks as the patient through the manikin and switches the **voice modulator** on the fly (e.g. from an adult voice to an elderly one). Turns on **background sounds** (e.g. ward noise, monitor alarms). | The learners in the sim room hear the changed voice and the background sounds straight away. Nothing has to be set up in advance. |
| 10 | **Stop** | Stops the recording and walks to the debrief room with the tablet | Processing starts straight away |

**Visuals, in order:**
1. Figma · Dashboard
2. Storyboard panels 6, 7 and 8
3. Figma · SRV recording view
4. Storyboard panel 9 *(new)*
5. Storyboard panel 10

## Act 3 · Debrief on the tablet (the showpiece)

**Maya, in the debrief room with the learners.**

| # | Screen | What Maya does | What the system does |
|---|---|---|---|
| 11 | **Debrief** (tablet) | Opens the debrief | Ready **within 30 seconds** of Stop: the checklist results (yes/no, no score), a short **AI summary**, **AI short clips**, her annotations, and playback speed |
| 12 | **Debrief: room display** | Uses the layout selector to put the video on the room TV | The TV shows single, dual or quad camera views. Control stays on the tablet. |
| 13 | **Debrief: photo of notes** | Takes a photo of her handwritten notes with the tablet camera | The AI reads the notes and folds them into the summary |
| 14 | **Share with participants** | Taps **Share with participants** in the top right. The five learners are already filled in. | Each learner gets a secure link by email, with the recording, annotations, AI clips and evaluation. They **open it in the browser without logging in**: no account and no app. The core flow ends here. |

**Visuals, in order:**
1. Storyboard panels 11, 12 and 13
2. Figma · Debrief (tablet)
3. Storyboard panel 14 *(new)*

## Act 4 · Management

**Dana, back at her desk.** Management now asks for regular usage numbers.

| # | Screen | What Dana does | What the system does |
|---|---|---|---|
| 15 | **Simulation Lab Usage** | Opens the report and filters by period (12 weeks, quarter, year to date) | Shows total simulation hours, students in simulation, room usage, learner contact hours, simulator usage and types of simulation sessions. The charts can be exported. |
| 16 | **Weekly report** | Sets up a weekly report to management | The report is emailed to management every week |

**Visuals, in order:**
1. Storyboard panel 15
2. Figma · Reports
3. Storyboard panel 16

---

## Open questions

- **The 30-second definition.** Is it "debrief material ready" or "video playable"? Engineering needs to give a number.
- **Desktop and tablet sync.** How video control and annotations stay in sync between the recording view and the debrief tablet is a technical question for engineering.
- **Edit event scope.** How much of the existing scheduling is reused, and in what simplified form. Gabor has talked to Gergely about it. To be discussed.
- **Sound controls.** Which voice presets and background sounds are in the demo, and where they sit in the SRV.

## Sources

- Agreed in the 2026-10-05 Essentials proto standup (Daniel, Gabor, Patrik), with the follow-up review in chat the same day (v1).
- Teams "Essentials proto sprint standup", 2026-10-05 10:01–10:34: Patrik's and Gabor's feedback (v2).
