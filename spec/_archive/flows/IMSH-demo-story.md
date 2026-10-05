# IMSH demo story · First sim of the semester

**Status:** final, agreed 2026-10-05 (Daniel, Gabor, Patrik) · Replaces the DF-1, DF-2 and DF-3 demo flows as the IMSH demo story · Handoff to engineering: next week

## Why this story

One continuous story instead of three separate flows. It follows a semester from setup to the management report, and every screen shown belongs to that story. Engineering gets one clearly specified thing to build in the 10-day window.

The showpiece is **Act 3, the debrief on the tablet.**

## Cast

| Persona | Role | Appears in |
|---|---|---|
| **Dana Whitfield** | Sim coordinator. Sets up the semester and reports to management. | Act 1, Act 4 |
| **Dr. Maya Ortiz** | Faculty. Runs the simulation and the debrief. | Act 2, Act 3 |
| **Emily Baker** | Nursing student in NURS 310 · Group A. Receives the shared recording. | Act 5 (optional) |

**Course:** NURS 310 · Group A, five learners. The course came in from Canvas with the *Sepsis recognition* scenario and a yes/no checklist already attached.

## Prototype note: persona switcher

The prototype has a **demo-only persona switcher** in the top-right corner ("Demo: viewing as Dana Whitfield ▾", with avatar, name and role). Picking a persona switches in place and lands on that persona's dashboard. This avoids logging in and out during the demo.

It is clearly labelled as a demo control. It is not a product feature, and the interface is otherwise the same for every persona.

## Out of scope

- Scheduling and the calendar
- Course creation (courses come from the LMS)
- Editing scenarios and checklists (they are pre-populated)
- Scoring and grading (the checklist is yes/no only)
- Learner performance reports
- Recording the debrief itself
- User management beyond the import (roles are fixed only in the import review)

---

## Act 1 · Semester start

**Dana, a few weeks before the first simulation.** The new semester has started and there are new learners to bring into Essentials.

| # | Screen | What Dana does | What the system does |
|---|---|---|---|
| 1 | **Dashboard** | Opens Essentials at the start of the semester | Shows the coordinator dashboard, with **Import users** available |
| 2 | **Import users** | Uploads the class list as an Excel file | Reads the file and moves to column mapping |
| 3 | **Column mapping** | Matches the Excel columns to fields: name, email, role | Previews the first rows with the mapping applied |
| 4 | **Review import** | Spots one row with the wrong role: an instructor tagged as a learner. Changes the role inline, then confirms. | Imports the users with their roles and shows how many were added |
| 5 | **Sync with Canvas** | Clicks **Sync with Canvas** | Accounts and courses line up with the LMS. This is the answer to "where do courses come from?" |

## Act 2 · Sim day

**Maya, weeks later (timeline jump).** NURS 310 · Group A has its first simulation.

| # | Screen | What Maya does | What the system does |
|---|---|---|---|
| 6 | **Dashboard → Course page** | Opens the **NURS 310** course card from the dashboard | The course page shows the scenario, the checklist and Group A, all already set up |
| 7 | **Start new recording from NURS 310** | Clicks the button in the top right of the course page. One learner is off sick, so she unticks her. | Room, scenario and group are prefilled. People can still be added during or after recording. |
| 8 | **Recording view** (existing SRV, facelift) | Runs the scenario. Picks the camera layout, adds annotations and markers, and ticks the yes/no checklist on the Evaluation tab. | Records the session with the annotations, markers and checklist attached |
| 9 | **Stop** | Stops the recording and walks to the debrief room with the tablet | Processing starts straight away |

## Act 3 · Debrief on the tablet (the showpiece)

**Maya, in the debrief room with the learners.**

| # | Screen | What Maya does | What the system does |
|---|---|---|---|
| 10 | **Debrief** (tablet) | Opens the debrief | Ready **within 30 seconds** of Stop: the checklist results (yes/no, no score), a short **AI summary**, **AI short clips**, her annotations, and playback speed |
| 11 | **Debrief: room display** | Uses the layout selector to put the video on the room TV | The TV shows single, dual or quad camera views. Control stays on the tablet. |
| 12 | **Debrief: photo of notes** | Takes a photo of her handwritten notes with the tablet camera | The AI reads the notes and folds them into the summary |
| 13 | **Share with participants** | Taps **Share with participants** in the top right | The learners get the recording with the annotations, AI clips and evaluation. The core flow ends here. |

## Act 4 · Management

**Dana, back at her desk.** Management now asks for regular usage numbers.

| # | Screen | What Dana does | What the system does |
|---|---|---|---|
| 14 | **Simulation Lab Usage** | Opens the report and filters by period (12 weeks, quarter, year to date) | Shows total simulation hours, students in simulation, room usage, learner contact hours, simulator usage and types of simulation sessions. The charts can be exported. |
| 15 | **Weekly report** | Sets up a weekly report to management | The report is emailed to management every week |

## Act 5 · The learner's side (optional)

> **Optional.** Included only if management and the team agree, and there is time to finish it before the handoff next week. The main journey (Acts 1–4) comes first.

| # | Screen | What Emily does | What the system does |
|---|---|---|---|
| 16 | **Shared recording** (phone) | Opens the share on her phone | Shows the recording with the annotations, AI clips and evaluation |

---

## Open questions

- **The 30-second definition.** Is it "debrief material ready" or "video playable"? Engineering needs to give a number.
- **Desktop and tablet sync.** How video control and annotations stay in sync between the recording view and the debrief tablet is a technical question for engineering.
- **Act 5.** Whether it goes in depends on agreement with management and on time left.

## Source

Agreed in the 2026-10-05 Essentials proto standup (Daniel, Gabor, Patrik), with the follow-up review in chat the same day.
