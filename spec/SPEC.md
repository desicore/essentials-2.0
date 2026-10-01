# Essentials 2.0: prototype specification (SpecMD)

Version 0.1 · 2026-09-30 · Owner: Daniel Brassnyo (the only editor) · Status: **draft, waiting for the scope sign-off**

This folder is the single source of truth for the Essentials 2.0 prototype up to the **2026-10-15 design handoff**. Wireframes (Pencil), the clickable prototype and the engineering handoff are all generated from it. If a screen and this spec disagree, the spec wins. Fix the spec, then regenerate the screen.

## 1. Purpose

1. **IMSH demo (January 2027).** A click-through of "a normal day at a small sim center, run by one person without training".
2. **Engineering start (from 10-15).** Engineering builds *Early Essentials 2.0* from these flows until 12-15.

The PRD (v0.2, 2026-09-30) is the main input and stays the long-term target. For the prototype, this spec supersedes it. Requirement IDs (`SES-01`, `AS-07` …) point back to the PRD.

## 2. Folder map

| File | What it is | Who writes it |
|---|---|---|
| `SPEC.md` | This file: purpose, scope, navigation, model, rules and non-goals | Daniel |
| `scope.md` | The scope one-pager: demo flows, wireframe level, out of scope | Daniel, agreed with Gabor and Patrik (signed off by Gergely?) |
| `flows/DF-*.md` | One file per demo flow: steps, screens, states, done-when | Daniel |
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

See `scope.md`. In short: **three demo flows** (DF-1 Walk in and record, DF-2 The day doesn't go to plan, DF-3 Debrief in 30 seconds, then share), a set of wireframe-level screens, and an explicit out-of-scope list.

## 4. Users and roles

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

| Item | Holds | Main PRD sections |
|---|---|---|
| **Today** (home) | Today's sessions, room status, "Record now", things waiting for you | EXP-03 |
| **Sessions** | List and day view, New session, Import | SES, IMP |
| **Rooms** | Live rooms, readiness, room detail and live control | CAP, AV, RDY |
| **Recordings** | Recent recordings, debrief, sharing | DEB, SHR |
| **Scenarios** | A library to pick from and link to. No authoring. | SES-08 |
| **Reports** | Curated core reports | RPT |
| **People** | Users, groups, recipients, imports | IAM |
| *(footer)* **Settings** | Institution, integrations, retention | INT, SHR-12 |
| *(footer, admins only)* **Inventory 🔒** | Locked entry with "Contact Sales" | INV-05 |

Recipient app (learner): no navigation. A single page per share: what was shared, who shared it, when it expires, and the player. Designed at phone width first (390 px), because learners open it from an email link with no account or app, and it works in any browser. **Not validated with learners yet** (Q-25).

Debrief: a full-screen mode opened from a recording or straight from "Stop". Tablet first (DEB-03).

## 6. Information model and UI terms

Use these words in the UI, exactly. Don't bring back legacy LearningSpace terms (SCE, Activity, Event-as-container, Video Review). Why: the PRD drops them (EXP-02) and lets Engineering replace the event/activity model (PRD Information model). The old words also carry the old model with them: "Activity" means the Enterprise container that must be set up before data collection, and trainees already mix up SCE/Event and Activity/Case. Agreed with Patrik, 2026-10-01.

| Model term (PRD) | UI label | Prototype rule |
|---|---|---|
| Session | **Session** | Scheduled or ad hoc, one model (SES-07). Can be incomplete (SES-03). |
| Event | *(hidden)* | Not shown in the prototype. Scheduled sessions are simply sessions with a time. |
| Recording | **Recording** | A session shows the user **at most one** recording. Capture attempts stay behind the scenes. |
| Capture attempt | *(hidden)* | Only surfaces as "recovered after interruption" in the recording's history |
| Segment | **Part** (hypothesis) | A non-destructive time range, usually one group. "Group A · 09:02–09:24". |
| Marker | **Marker** | Has a time, an optional category, a note and a source (Faculty / AI) |
| Participant | **Participant** | Learner, faculty, guest, SP or evaluator. May exist without an account. |
| Group | **Group** | Membership can change before, during or after recording |
| Room | **Room** | Has a readiness state and a known-good AV configuration |
| Scenario | **Scenario** | Reusable reference and materials. It seeds sessions. |
| Share | **Share** | A revocable grant, with separate view and download rights, an expiry, and delivery status |
| Readiness check | **Room check** | Labels are **Ready** / **Issue detected**. "Can record" is tracked separately (RDY-05). |
| Audit event | **History** | Every correction shows the old value, who changed it, when and why |

### 6a. Glossary: screens

The screen names used in `flows/`, `golden-paths/` and `screens.md`, one line each. Routes are in `screens.md`.

| Screen | What it is |
|---|---|
| **Today** | The staff home screen, the first thing you see after signing in (EXP-03). A one-line room status ("3 of 4 rooms ready"), today's sessions in time order with each row's action ("Open room", "Open debrief"), the **Record now** button, and "Waiting for you". Not a dashboard of tiles. |
| **Start a session** | The side sheet that **Record now** opens over Today: room → scenario (optional) → people (optional) → **Open room**. It creates an ad hoc session and opens the Live room. It does **not** start recording. |
| **Live room** | The control screen for one room during a session: cameras, audio, who's here, markers, Start / Stop recording, next group. |
| **Session sheet** | One session's details: Details · People (planned parts) · Recording · History · Shares. Opened from Today or Sessions. |
| **Fix parts** | Correcting a recording's group time ranges after the session: split, move a boundary, assign, with a reason. |
| **Room check** | A room's readiness: the last check, what failed, and guided fix steps. |
| **Debrief home** | The start screen of the tablet debrief mode. The latest relevant session is on top. |
| **Debrief player** | Video with markers and notes, where faculty pick a time range to share. |
| **Share sheet** | Who gets the range, view and download rights, expiry. Recipients are prefilled from attribution. |
| **Share status** | Per-recipient delivery (sent, opened, not opened) with Resend and Revoke. |
| **Share page** | What the learner sees on their phone: only the shared range, who shared it, and until when. |
| **Room display** | The wall screen in the debrief room. |

### 6b. Glossary: words that are easy to mix up

| Word | Means | Doesn't mean |
|---|---|---|
| **Session** | The sim occurrence: a room, a time, the participants and optionally a scenario. It exists before anyone presses record. | A recording. Recording is one thing that happens *in* a session. |
| **Recording** | The video captured during a session. A session has at most one. Markers, parts and shares belong to it. | The session itself |
| **Ad hoc / scheduled** | Two kinds of the same session. Ad hoc: started on the spot from Record now (DF-1). Scheduled: imported or created ahead, with a time (DF-2). | Two different objects |
| **Part** | A time range of one recording, usually one group ("Group A · 09:02–09:24"). Non-destructive. | A separate video file or a separate session |
| **Course** | Only a label on a session or group, synced from Canvas. Whether it becomes a container for scenarios and groups is open (Q-02). | A container, for now |
| **Activity** | Not used. Legacy LearningSpace term. | — |
| **Recipient** | The access role of someone who only receives shared material (usually a learner). No full account needed. | A kind of participant |
| **Guest** | A kind of participant in a session (like an observer), next to learner, faculty, SP and evaluator. | A role. The no-account role is Recipient. |
| **Admin / Faculty** | The two staff roles as the UI shows them. The model names are Administrator and Faculty operator. Admin can do everything Faculty can. | Personas. Four personas map onto these two roles (§4). |
| **Waiting for you** | Things on Today that need the user's action: paused shares, unconfirmed parts. Each has Done / Snooze. | Notifications |

## 7. Rules that hold on every screen

1. **Recording state is confirmed, not assumed (CAP-04).** Six states only: *Starting…* (command sent), *Recording* (backend confirmed), *Pausing…*, *Paused* (backend confirmed), *Stopping…*, *Not recording*. The UI never shows "Recording" or "Paused" on a click alone. When recording is on or paused, a persistent banner shows the room name, the state, the elapsed time and Stop (plus Resume when paused), across the whole app. A pause and resume stays **one recording** (CAP-07): it doesn't create a new recording or a new part.
2. **Attribution is always visible (ATT-01).** Any session or recording whose participants are not confirmed shows **"Participants not confirmed"** with a one-click fix. Nothing blocks recording or debrief because of it (DEB-12).
3. **Readiness is advisory (RDY-05, RDY-06).** "Issue detected" never hides or disables Record. Only "Can't record" (the backend is down) disables Record, and it then shows the reason and the fix next to the disabled button.
4. **Say what happens, then do it.** Destructive or far-reaching actions (stop, revoke, split, correct attribution after sharing) state the consequence in one line before confirming.
5. **AI output is labelled and reviewable (AI-04).** Each AI marker, transcript or summary carries an "AI" badge and a source time, and it never goes to a learner without a faculty approval. Without the AI subscription the screen still works; AI areas simply aren't there (AI-03).
6. **Every list has four states:** loading, empty (with the next action), error (what failed, plus retry), and populated.
7. **Plain, task-based language (EXP-02).** Verbs on buttons ("Start recording", "Share part"), no internal codes, no abbreviations a first-time faculty member wouldn't know.
8. **Advanced settings stay folded (EXP-05).** Anything a normal session doesn't need sits behind "More options".
9. **Localizable (EXP-08).** No text baked into images. Dates and times use the locale format. The prototype runs in English.
10. **WCAG 2.1 AA.** Status is never shown by colour alone (use an icon and a label). Targets are at least 44px on tablet screens.

## 8. Platforms

| Surface | Primary | Also works |
|---|---|---|
| Staff app (Today, Sessions, Rooms, Reports, People) | Laptop, 1280–1440 wide | Tablet in landscape |
| Live room control | Laptop | Tablet |
| Debrief | **Tablet, iPad landscape 1194×834** | Laptop, phone |
| Recipient share page | **Phone, 390×844** (design call, not validated: Q-25) | Any browser |

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
- **Per flow:** every screen named in the flow file, with the states listed there.
- **Definition of done per flow:** all "Done when" items in the flow file pass a scripted walkthrough (click path plus expected screen per step), and there are no open-question stickies left without an owner.

## 11. Order of work

1. The AI reads this folder and lists its **ambiguities** (`open-questions.md`, appended). It doesn't invent answers.
2. Daniel answers them in the spec.
3. The AI proposes a **screen plan** per flow.
4. Pencil wireframes are built one flow at a time (`wireframes/`). There's a joint walk on 10-05.
5. The clickable build runs one flow at a time, each with a scripted walkthrough. Gabor tests every flow persona by persona.

## 12. Open questions (spec level)

The live list is in `open-questions.md`. The ones that block wireframes:
- Navigation: wait for Gabor's map (§5).
- Courses: in or out of the prototype (`scope.md`, decision 1).
- "Part" vs "Segment" as the UI word for a group's time range. Test it with faculty.
- Marker categories (DEB-08). Proposal: *Good practice · Discuss · Safety*, plus no category.
