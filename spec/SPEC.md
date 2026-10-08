# Essentials 2.0: prototype specification (SpecMD)

Version 0.2 · 2026-10-05 · Owner: Daniel Brassnyo (the only editor) · Status: **scope signed off (Gergely, 2026-10-05)**. v0.1 (the DF-1/2/3 version) is in Git at the tag `spec-pre-imsh-final`.

This folder is the single source of truth for the Essentials 2.0 prototype up to the **2026-10-15 design handoff**. Wireframes (Pencil), the clickable prototype and the engineering handoff are all generated from it. If a screen and this spec disagree, the spec wins. Fix the spec, then regenerate the screen.

## 1. Purpose

1. **IMSH demo (January 2027).** A happy-flow click-through of one faculty member's journey: dashboard → calendar and learner assignment → recording → debrief → report.
2. **Engineering start (from 10-15).** Engineering builds *Early Essentials 2.0* from these flows until 12-15.

The PRD (v0.2, 2026-09-30) is the main input and stays the long-term target. For the prototype, this spec supersedes it. Requirement IDs (`SES-01`, `AS-07` …) point back to the PRD.

## 2. Folder map

| File | What it is | Who writes it |
|---|---|---|
| `SPEC.md` | This file: purpose, scope, navigation, model, rules and non-goals | Daniel |
| `scope.md` | The scope one-pager: the demo flow and what's out | Daniel, signed off by Gergely on 2026-10-05 |
| `flows/IMSH-demo-story-final.md` | The demo flow: 12 steps, screens and the visuals per step | Daniel |
| `_archive/` | Superseded flows (DF-1/2/3, IMSH v1 and v2). **Don't build from it.** | — |
| `screens.md` | Every route and screen, with its fidelity level | Daniel |
| `personas.md` | The 4 personas, for AI testing and persona chats | Daniel generates, Gabor reviews |
| `design-system.md` | The wireframe kit now, then the UI library, tokens and icons after 10-02 | Daniel |
| `data-model.md` | The prototype's information model (ERD) and its working decisions. Not the production schema. | Daniel |
| `data/seed.json` | Demo content: a fictional nursing school | Daniel generates, Gabor reviews for realism |
| `AGENTS.md` | Rules for any AI that reads this folder | Daniel |
| `open-questions.md` | Append-only list of ambiguities with proposed defaults | AI appends, Daniel answers |
| `golden-paths/` | Golden-path scripts per flow and per persona (linked, not merged into the spec) | Gabor drafts, Daniel approves |
| `acceptance/` | "Done when" criteria per cornerstone with Gleanly fact IDs | Gabor drafts, Daniel + Patrik approves |
| `wireframes/` | Pencil prompt packs generated from `flows/` | Generated |

## 3. Scope

See `scope.md`. In short: **one demo flow** in Gergely's five steps (dashboard → calendar and learner assignment → refined SRV → debrief → report), designed along its happy path, and an explicit out-of-scope list. The debrief is the showpiece.

## 4. Users and roles

**The demo has one protagonist: Dr. Maya Ortiz, Faculty.** She does every step, including the calendar and the report. Role permissions aren't demoed. The table below is the model the product is built on.

The four personas (`personas.md`) map onto the **two staff roles plus recipients** in the PRD:

| Persona | Product role | Note |
|---|---|---|
| SimCoordinator | Administrator | Configures, imports, reports. Often runs sessions too, which Admin already covers. |
| SimTech / operator | Faculty operator | Runs rooms and recording |
| Faculty | Faculty operator | Uses the product only a few times a month. **The design target for C1.** |
| Learner | Recipient | No full account needed. Uses a secure link, SSO or a one-time code. "Recipient", not "Guest": in the PRD a guest is a kind of participant. Agreed with Patrik, 2026-10-01; easy to rename later. |

Rules:
- Each user has **one** role. Admin includes everything Faculty can do (PRD: Administrator covers "all operational actions"), so a coordinator who also runs sessions is simply an Admin. Nobody holds two roles, and the UI never asks anyone to switch roles in the middle of a session.
- The account menu always names the current user's role.
- UI labels say **"Admin"** and **"Faculty"**. "Faculty operator" is the model term, not a UI label.
- Instructors can see each other's learners and recordings by default. It can be configured.

## 5. Navigation (PROVISIONAL)

Staff app, left navigation:

| Item | Holds | Clickable in the demo |
|---|---|---|
| **Dashboard** (home) | Upcoming events, recent recordings, mini calendar | Yes |
| **Calendar** | Events by week; Edit event with learner assignment | Yes |
| **Recordings** | Recent recordings | No (nav only) |
| **Scenarios** | Scenario library | No (nav only) |
| **Reports** | Simulation Lab Usage, weekly report | Yes |
| **People** | Users and groups | No (nav only) |
| *(footer)* **Settings** | Institution, integrations | No (nav only) |

The recording view opens from today's event. The debrief is a full-screen tablet mode opened after Stop (DEB-03).

Recipients (learners) get a link that opens in the browser without logging in. The page they see is **out of scope** for the demo.

## 6. Information model and UI terms

Use these words in the UI, exactly. Don't bring back legacy LearningSpace terms (SCE, Activity, Event-as-container, Video Review). Why: the PRD drops them (EXP-02) and lets Engineering replace the event/activity model (PRD Information model). The old words also carry the old model with them: "Activity" means the Enterprise container that must be set up before data collection, and trainees already mix up SCE/Event and Activity/Case. Agreed with Patrik, 2026-10-01.

| Model term (PRD) | UI label | Prototype rule |
|---|---|---|
| Session | **Event** | Decided 2026-10-05 (Q-26): the PRD's Session is called **Event** in the UI and in the prototype model. One object, no separate session. This reverses the v0.1 rule ("hidden"). Can be incomplete (SES-03). The demo shows scheduled events only. |
| Course | **Course** | Decided 2026-10-05 (Q-02): a container for events, groups and scenarios (Gabor's concept). Shown lightly ("NURS 310"). |
| Recording | **Recording** | An event shows the user **at most one** recording. Capture attempts stay behind the scenes. |
| Capture attempt | *(hidden)* | Only surfaces as "recovered after interruption" in the recording's history |
| Segment | **Part** (hypothesis) | Not in the demo (fixing parts is out). A non-destructive time range, usually one group. |
| Marker | **Marker** | Has a time, an optional category, a note and a source (Faculty / AI) |
| Participant | **Participant** | Learner, faculty, guest, SP or evaluator. May exist without an account. |
| Group | **Group** | Membership can change before, during or after recording |
| Room | **Room** | Has a readiness state and a known-good AV configuration |
| Scenario | **Scenario** | Reusable reference and materials. It seeds events. Owns the yes/no checklist. |
| Share | **Share** | A revocable grant, with separate view and download rights, an expiry, and delivery status |
| Readiness check | **Room check** (not in the demo) | Labels are **Ready** / **Issue detected**. "Can record" is tracked separately (RDY-05). |
| Audit event | **History** (not in the demo) | Every correction shows the old value, who changed it, when and why |

### 6a. Glossary: screens

The screen names used in `flows/`, `golden-paths/` and `screens.md`, one line each. Routes are in `screens.md`.

| Screen | What it is |
|---|---|
| **Dashboard** | The new staff home screen (EXP-03): upcoming events, recent recordings and a mini calendar. |
| **Calendar** | Events by week. Clicking an event opens Edit event. |
| **Edit event** | One event's time, room and scenario, and the **learner assignment**: which learners take part (no rotations). A simplified version of the existing scheduling. |
| **Event (today)** | Today's event with everything prefilled. Untick an absent learner, then **Start recording**. |
| **Recording view** | The refined SRV: cameras and layout, annotations and markers, the yes/no checklist, Stop. |
| **Debrief** | The tablet debrief: checklist results, AI summary, AI short clips, annotations, playback speed, photo of notes. |
| **Room display** | The wall screen in the debrief room, controlled from the tablet. |
| **Share with participants** | The sheet that generates a secure link for the learners of the event. |
| **Simulation Lab Usage** | The usage report, with a period filter and export. |
| **Weekly report** | The dialog that schedules the report to management every week. |

### 6b. Glossary: words that are easy to mix up

| Word | Means | Doesn't mean |
|---|---|---|
| **Event** | The sim occurrence: a room, a time, the participants and optionally a scenario. It exists before anyone presses record. The PRD calls it Session. | A recording. Recording is one thing that happens *in* an event. Also not a container of sessions. |
| **Recording** | The video captured during an event. An event has at most one. Markers, checklist answers, AI output and shares belong to it. | The event itself |
| **Ad hoc / scheduled** | Two kinds of the same event. The demo shows only scheduled: the recording starts from today's event. Ad hoc recording is out of the demo. | Two different objects |
| **Part** | A time range of one recording, usually one group ("Group A · 09:02–09:24"). Non-destructive. | A separate video file or a separate session |
| **Course** | A container for events, groups and scenarios (Q-02). In the demo it's mostly seen as a name on the event ("NURS 310"). | A label only. Also not an LMS course: Canvas is out. |
| **Activity** | Not used. Legacy LearningSpace term. | — |
| **Recipient** | The access role of someone who only receives shared material (usually a learner). No full account needed. | A kind of participant |
| **Guest** | A kind of participant in an event (like an observer), next to learner, faculty, SP and evaluator. | A role. The no-account role is Recipient. |
| **Admin / Faculty** | The two staff roles as the UI shows them. The model names are Administrator and Faculty operator. Admin can do everything Faculty can. | Personas. Four personas map onto these two roles (§4). |

## 7. Rules that hold on every screen

1. **Recording state is confirmed, not assumed (CAP-04).** Six states only: *Starting…* (command sent), *Recording* (backend confirmed), *Pausing…*, *Paused* (backend confirmed), *Stopping…*, *Not recording*. The UI never shows "Recording" or "Paused" on a click alone. When recording is on or paused, a persistent banner shows the room name, the state, the elapsed time and Stop (plus Resume when paused), across the whole app. A pause and resume stays **one recording** (CAP-07): it doesn't create a new recording or a new part.
2. **Attribution is always visible (ATT-01).** Any event or recording whose participants are not confirmed shows **"Participants not confirmed"** with a one-click fix. Nothing blocks recording or debrief because of it (DEB-12).
3. **Readiness is advisory (RDY-05, RDY-06).** "Issue detected" never hides or disables Record. Only "Can't record" (the backend is down) disables Record, and it then shows the reason and the fix next to the disabled button.
4. **Say what happens, then do it.** Destructive or far-reaching actions (stop, revoke, split, correct attribution after sharing) state the consequence in one line before confirming.
5. **AI output is labelled and reviewable (AI-04).** Each AI marker, transcript or summary carries an "AI" badge and a source time, and it never goes to a learner without a faculty approval. Without the AI subscription the screen still works; AI areas simply aren't there (AI-03).
6. **Every list has four states:** loading, empty (with the next action), error (what failed, plus retry), and populated.
7. **Plain, task-based language (EXP-02).** Verbs on buttons ("Start recording", "Share part"), no internal codes, no abbreviations a first-time faculty member wouldn't know.
8. **Advanced settings stay folded (EXP-05).** Anything a normal event doesn't need sits behind "More options".
9. **Localizable (EXP-08).** No text baked into images. Dates and times use the locale format. The prototype runs in English.
10. **WCAG 2.1 AA.** Status is never shown by colour alone (use an icon and a label). Targets are at least 44px on tablet screens.

## 8. Platforms

| Surface | Primary | Also works |
|---|---|---|
| Staff app (Dashboard, Calendar, Reports) | Laptop, 1280–1440 wide | Tablet in landscape |
| Recording view | Laptop | Tablet |
| Debrief | **Tablet, iPad landscape 1194×834** | Laptop |
| Room display | Wall screen, 1920×1080 | — |

## 9. Non-goals (don't design or build these)

The full list of scope cuts is in `scope.md`. Beyond scope, these are **principles**:
- No rotations, stations, breaks or cleanup blocks as objects (operating model).
- No report builder. Curated reports only (RPT-06).
- No per-user permission matrix. Two roles plus shares.
- No destructive video editing. Parts are time ranges (CAP-12).
- No learner commenting or peer feedback (SHR-13).
- No external hosting. The prototype runs locally or in company Git only.

## 10. Outputs expected from any builder (wireframe or code)

- **Routes and screens:** exactly the list in `screens.md`. A new screen means a spec change first.
- **For the flow:** every screen named in `flows/IMSH-demo-story-final.md`, in its happy-path state. Other states only where the flow file names them.
- **Definition of done:** a scripted walkthrough of the 12 steps passes (click path plus the expected screen per step), and there are no open-question stickies left without an owner.

## 11. Order of work

1. The AI reads this folder and lists its **ambiguities** (`open-questions.md`, appended). It doesn't invent answers.
2. Daniel answers them in the spec.
3. **Wireframes of each of the five steps**, focused on the essential parts (Patrik's next step, 10-05). Each screen's reference is its section in `wireframe-benchmark/wireframe-brief.md`, not Gabor's Figma screens (the tracks stay apart until the end-of-week comparison, 10-07 rule).
4. The clickable build runs step by step, with a scripted walkthrough. Gabor tests the flow.

## 12. Open questions (spec level)

The live list is in `open-questions.md`. The ones that block wireframes:
- ~~Event vs Session (Q-26)~~, ~~Courses (Q-02)~~, ~~rotations in learner assignment (Q-27)~~: decided 2026-10-05, see `data-model.md`.
- Does sharing approve the AI items it includes (Q-28)?
- Marker categories (DEB-08). Proposal: *Good practice · Discuss · Safety*, plus no category.
