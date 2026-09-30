# Courses – low-fidelity flow spec (Essentials 2.0)

Status: v0.1 draft, 2026-09-18. Companion to the nine inspiration reports in `../` (`01-…` to `09-…`, ~290 references) and to the User Manager spec in `../../userflow-patterns--user-mgmt/wireframes/user-manager-flow-spec.md`, whose kit, shell and model assumptions this file inherits.

Purpose: one source of truth for the wireframe prompts in `pencil-prompts.md`. Fix assumptions here, then regenerate the affected prompt. Nothing here is final design; every screen is a solution concept to test against the product vision.

Evidence base (vault): `wiki/work/ls-essentials-product-model.md` (legacy model), `wiki/work/essentials-2.0-concept-validation.md` and `raw/meetings/2026-09-10-thu--Essentials-Weekly-Checkpoint.md` (Gabor's course-as-organizing-unit concept, Gergely's reactions), `raw/meetings/2026-09-08-tue--DDC-Essentials-solution-concept.md` (courses first, three roles, Canvas works course-based), site visits John Carroll / Kent State / Galen, `wiki/work/essentials-2.0-cornerstones-ideation.md` (C4, C6).

## Scope and actors

- **In scope:** the ten FigJam nodes under *Courses*: objectives / outcomes / requirements, files / links / media, skills and competencies, learner groups, scenarios, events, share with participants (learner portal), recordings / course reports (learner portal), announcements / send materials to Canvas (shareable link), simulation dates / calendar (invitations). Grouped into six journeys A–F below.
- **Actors:** **Faculty** (primary: owns the course, its outcomes, content, scenarios, announcements), **SimCoordinator** (roster, learner assignment, session scheduling and dates), **Admin** (only the Canvas connection, already wireframed as UM-D; appears here as a precondition), **Learner** (actor of flow F only; the portal is a named node, so unlike User Manager the learner is in scope).
- **Out of scope:** faculty reporting dashboards and accreditation exports (deferred 2026-09-15), the scenario editor / SCE, simulator control, storyboard, room and equipment inventory, in-room audio announcements (a different feature that shares the word), grading and checklists during a session.
- **Precondition:** the People module from the User Manager wireframes exists: groups with source badges (Local / Directory / Canvas), 3 roles, Canvas connected by an Admin.

## Shared model assumptions (hypotheses to test)

| Assumption | Legacy today | 2.0 hypothesis | Why |
|---|---|---|---|
| Organizing unit | SCE → Event → Activity; Activity is a reporting bucket that must be assigned *before* data collection, no retroactive attach; longitudinal reporting depends on a naming convention | **The course is the container.** Outcomes, materials, skills, groups, scenarios, sessions, recordings and announcements all live *inside* a course. Sessions are created from the course, not from the calendar. | Gabor's concept (2026-09-10), endorsed by Gergely with a naming caveat ("Activity exists for this"). Canvas is course-based and faculty are used to it (2026-09-08). |
| Course source | No course object | Every course carries a **source badge: Native / Canvas.** A Canvas-linked course shows which fields Canvas owns (name, term, roster) as locked with an "edit in Canvas" hint. Everything must also work with no Canvas at all. | Gergely: "Canvas-linked = partly locked, Canvas is source of truth for some fields"; hospital customers have no LMS. Overwrite rules are an open question, flagged, not designed. |
| Reuse | Every SCE and event built from scratch; one scenario becomes up to 30 group events | **Import path on every object:** copy a course from a previous term, pick scenarios from a library, reuse materials across courses, create a session series from one scenario. | `essentials-2.0.md` decisions; STAT-1 → STAT-2 traversal. |
| Material delivery | Pre-event emails carry study material; emails are notifications, never a delivery channel | Materials live in the course with a **release state (Draft / Released / Scheduled / Relative to session)** and reach learners through the portal, a link, or a push to Canvas. | John Carroll pays a studio to re-shoot video because LS content cannot reach Canvas; C4. |
| Recordings to learners | Video review released by a relative delay, only for calendar-event recordings, as an undifferentiated list | **Released per course to the enrolled learners**, filtered by course in the portal, with faculty feedback attached. Download off by default. | C4 evidence; Kent State 2-week window; Gabor's learner-portal description. |
| Skills | None; checklists per activity | Course picks skills from an **institutional framework** (e.g. AACN); scenarios declare which skills they develop; per-learner mastery reads across semesters. Measurement model deferred. | Victoria's AACN material; C6 data continuity. |
| Learner assignment | Learners attached per event by hand | A group arrives whole from Canvas or People; **slotting learners into sessions and rooms stays a manual step** ("Learner Assignment", Gergely's other key story). One hypothesis screen, not a flow. | 2026-09-10 line 528. |
| Roles on a course | 8 global roles | 3 roles inherited from People. A course has an **Owner** (Faculty) and **co-instructors** (Staff); SimCoordinator and SimTech are Staff scoped to the course. | User Manager spec, 2026-09-08 "tanár, admin, diák". |

## Shared shell (used on every staff screen)

Left nav (Events, Recording, Video Review, Reports, Calendar, People, **Courses**, Settings). Top bar with search. Inside a course: a header (course name, term, source badge, owner) and tabs **Overview · Outcomes · Content · People · Sessions · Announcements · Share**. Recordings are reached from a session, not from a top-level tab; flag as a naming hypothesis.

Learner screens use a separate **learner shell**: top bar with institution name, course switcher and the person's name; tabs **My courses · Sessions · Recordings · Progress**. No admin nav.

Each artboard is one journey: screens left to right, a short arrow label between screens, sticky notes below for hypotheses, references and things not to build.

Sample data used everywhere: institution montgom.edu; course **NURS 210 – Adult Health I, Fall 2026**; group **BScN 2nd-year** (31 learners, source Canvas); scenarios *Sepsis recognition*, *Post-op hemorrhage*, *Chest pain – STEMI*; rooms *Sim Lab A*, *Sim Lab B*; faculty *Helen Gibson* (owner), *Jill Beckman* (co-instructor); coordinator *Mark Ellis*; learner *Emily Baker*.

---

## A. Course setup – create, outcomes, requirements, skills

**Actor:** Faculty.
**Legacy pain:** no course object; SCE and events carry no learning intent; learners never see objectives; nothing links a session to a competency.

Screens:

1. **Courses list.** Rows or cards: name, code, term, source badge (Native / Canvas), learner count, sessions count, next session date, owner. Filters: Term, Owner, Source. Primary action **New course**. Sticky: the list is the faculty's home in 2.0, replacing "Your Events".
2. **New course (dialog).** Three ways in on one screen: **Start blank** (name, code, term), **Copy a previous course** (searchable list of past courses; checkboxes for what to copy: outcomes, materials, scenarios, session pattern, *not* the roster), **Link a Canvas course** (searchable list the connection can see; one line stating what Canvas will own: name, term, roster; and what stays here: outcomes, materials, sessions). Disabled with a hint when Canvas is not connected ("Ask an Admin to connect Canvas in People → Sign-in").
3. **Course overview (fresh).** Header with source badge; for a linked course a locked-field line "Name, term and roster come from Canvas · Last synced 5 min ago". A setup checklist as cards with counts and a primary link each: *Outcomes (0)*, *Content (0)*, *People (31 synced)*, *Sessions (0)*, *Share (Draft)*. Podia pattern: three concerns, one glance.
4. **Outcomes tab.** Three sections. *Learning outcomes*: numbered list, "Add outcome" (Udemy: "Add more", learner-facing wording hint "Learners will be able to…"), a small "Preview as learner" toggle showing the Coursera "What you'll learn" list. *Requirements*: prerequisites as plain rows ("Complete NURS 110", "Pre-brief materials read before Session 1"), each with a rule (Kajabi: locks Session content until done – shown as a hypothesis, not enforced). *Skills*: chips from the framework with a level, button **Add from framework**.
5. **Add skills (dialog).** Framework selector (AACN Essentials · Institution framework · This course only), search, checkbox list with a level control per skill (Novice / Competent / Proficient), running chip review before Save (Handshake). Each chip later shows "used in 2 scenarios" once flow D links them.

Don't build: AI-generated outline review (Kajabi), rubric builder with points (Google Classroom), requirements as free text detached from anything (Skillshare).

---

## B. Content – materials, release timing, share with participants

**Actor:** Faculty.
**Legacy pain:** study material attached to pre-event emails only; no library, no reuse, no idea what a learner can see and when; video can't reach Canvas.

Screens:

1. **Content tab.** Sections in course order (*Pre-brief*, *Sim day*, *Debrief*), each a list of items with a type icon (file, link, video), size or duration, and a state badge: Draft / Released / Scheduled 1 Oct / 2 days before Session 1. Section-level "Release…" control. Primary **Add material** opens one menu: Upload file, Paste link, Record video, Pick from library, From Canvas files (Podia: one menu for every type; Teachable: sources unified).
2. **Add material (dialog).** Tabs Upload · Link · Library · Canvas. Library tab lists materials from other courses with "Used in NURS 110" and a **Reuse** action (link, not copy, with a sticky flagging the copy-vs-link question). Drop zone shows upload progress inline in the section, not as a modal.
3. **Release timing (popover).** Radios: Release now · On a date · Relative to a session ("2 days before ▾ Session 1 ▾") · Keep as draft. Squarespace state model: the state is visible in the outline, not buried in an overflow menu.
4. **Share tab.** Three separated concerns (Podia): *Status* – Draft / Live toggle with the consequence line "Live: enrolled learners see released materials and sessions in their portal". *Who can access* – Enrolled groups (BScN 2nd-year · 31), Named people (add), Link (Off / Anyone at montgom.edu / Anyone with the link, expiry preset). *Instructors* – Owner and co-instructors with "Can edit". Button **Preview as learner**.
5. **Preview as learner.** Learner shell, course home as Emily Baker would see it *today*: only released items, next session, outcomes. A top banner "Previewing as a learner · Exit preview". This is the moment faculty discover a draft they thought was live.

Don't build: Gumroad's single freeform content document, Podia's hidden-toggle in a row overflow, per-file permission grids.

---

## C. People – learner groups, roster sync, learner assignment

**Actor:** SimCoordinator; Faculty views.
**Legacy pain:** rosters pulled from Canvas to Excel and typed in one at a time (Kent State); learners attached per event; a late joiner has no path.

Screens:

1. **People tab.** Two sections. *Instructors*: Owner Helen Gibson, co-instructor Jill Beckman, coordinator Mark Ellis, "Add instructor". *Learner groups*: group cards with source badge, count, sync line ("Synced from Canvas 5 min ago" / "Local"), "Add group". Below, the merged roster table: Name, Group, Status (Enrolled / Invited / Dropped), Assignment ("Session 1 · Sim Lab A" or *Unassigned*), Last sign-in. Primary **Assign learners** (opens screen 4).
2. **Add group (dialog).** One screen, three ways: checkbox list of existing groups from People (Circle: inherit an existing group), **Use the Canvas roster** (pre-selected and read-only on a linked course), **Upload a CSV** (hands off to the People → Imports flow, UM-C, then returns). Below: a radio *Send invitation emails now* / *Add quietly, invite later* (Circle). Preview counts before commit (Deel): "31 learners · 27 already have accounts · 4 will be invited".
3. **Roster synced state.** Roster with a stroke banner: "Canvas roster synced 5 min ago · 2 new enrolments added · 1 dropped – flagged, not removed". Dropped row shows a badge and a "Keep / Remove" choice. Sticky: never remove people automatically (same policy as UM-D).
4. **Learner assignment (hypothesis).** Split view: left, *Unassigned* list (28) with search and group filter; right, the course's sessions as slots with capacity (Session 1 · Oct 6 · Sim Lab A · 6/8; Session 1 · Oct 6 · Sim Lab B · 0/8 …). Multi-select and "Assign to ▾", or drag. A Secondary **Auto-fill evenly** with a sticky: "HYPOTHESIS – the system suggests, the coordinator confirms." Waitlist appears when a slot is full (Luma capacity + waitlist together).

Don't build: Basecamp snapshot membership (changes after adding don't propagate), a per-learner permission grid, a fourth roster source.

---

## D. Sessions – scenarios in the course, session calendar, dates

**Actor:** Faculty (scenarios), SimCoordinator (sessions, rooms, dates).
**Legacy pain:** one scenario becomes up to 30 hand-built group events; "Your Events" is unusable; the calendar is the entry point instead of the course; no link between a session and the skills it develops.

Screens:

1. **Sessions tab.** Agenda by week: rows *Session 1 · Mon 6 Oct 09:00–11:00 · Sim Lab A · Sepsis recognition · BScN 2nd-year group A (8/8) · Facilitator Jill Beckman · Ready*, plus Planned / Done states. A list/calendar toggle (calendar is a small week strip, reusing the Enterprise calendar; not redesigned). Two actions: **Add scenario** (Secondary) and **New session** (Primary). A *Scenarios in this course* strip above the agenda with three cards.
2. **Add scenario (dialog).** Tabs: Institution library · My scenarios · Elevate catalogue. List with search; right pane shows a **preview before insert** (Figma): description, duration, room type, equipment, skills it develops, provenance "Institution library · v3 · updated by H. Gibson". Multi-select with a running "2 selected" (PandaDoc). Button **Add 2 scenarios**.
3. **Scenario in course (side sheet).** Placed-instance pattern (Figma): a source line "From Institution library · v3 · Open original" and local settings: order in course, skills developed (chips; pre-filled from the library, editable here), course notes, and a primary **Create sessions from this scenario**. Sticky: changes here never edit the library scenario.
4. **New session (dialog).** Pre-filled from the scenario (Understory): duration, room type, equipment list. Fields: date and time, room picker with a **conflict line that still allows save** ("Sim Lab A is booked 09:00–10:00 by NURS 110 · Save anyway / Pick another"), group or sub-group, facilitators, capacity, **Repeat**: none / weekly for N weeks / pick dates (Luma), producing a session list preview ("4 sessions · Oct 6, 13, 20, 27"). Checkbox "Publish dates to learners when saved" (hands to flow E).
5. **Sessions created + edit scope.** Agenda shows the four new sessions with **Planned** badges and "Dates published · 31 invited" line. One session opened for editing shows the *This session / All sessions in the series* choice (Amie / Motion). After a past date, a session row shows attendance disposition Completed / No-show (Lyssna) and a "Recordings (3)" link.

Don't build: the SCE editor, simulator control, storyboard (legacy dead ends), a rescheduling-only 1:1 flow (Preply), a resources field with no conflict feedback (Understory session modal).

---

## E. Announcements – announce, send materials and dates, Canvas, link, invitations (pilot)

**Actor:** Faculty (announcements, materials), SimCoordinator (dates, invitations).
**Legacy:** nothing; John Carroll sends reminders through Canvas, scans debrief PDFs into Canvas, re-shoots video for Canvas. Emails in LS are notifications with no delivery role.

Screens:

1. **Announcements tab.** Composer collapsed at the top ("Announce something to All enrolled (31) ▾"). Below, past posts as rows: date, first line, audience, channel chips (Portal · Email · Canvas · Link), and a status line "28 seen · 3 not yet" (The Leap). Right rail: *Canvas* card – "Connected · NURS 210 · last push 2 days ago · Open in Canvas".
2. **Compose.** Audience dropdown (All enrolled · Group A · Session 1 participants · Named people) – the Google Classroom composer. Message field. **Attach** row: from Content (picker of materials, e.g. "Pre-brief slides.pdf", "Sepsis video"), from Sessions (dates as a session list). **Channels** as checkboxes with a per-channel recipient summary before send (beehiiv): *Learner portal* (always on, 31), *Email notification* (29 with email), *Canvas announcement* (31 in NURS 210), *Shareable link* (off). Basecamp split: "Who sees this" vs "Who gets notified". Schedule: Send now · On a date · 2 days before Session 1. Primary **Send** (or **Schedule**).
3. **Send to Canvas (dialog).** SchoolAI hand-off: linked course shown ("NURS 210 · Fall 2026 · 31 students"); a list of what will be created: "1 announcement", "2 files as module *Pre-brief*", "4 calendar events (Session 1–4)"; radio *Create new* / *Update the ones sent on 12 Sep*; a warning line "Edits made in Canvas do not sync back. This course stays the source." Buttons: Cancel · **Send to Canvas**.
4. **Delivery status.** Post detail with a per-person table (Navan): Name, Channel, Status (Delivered / Opened / Not yet / Bounced), Opened at. Filter "Not yet (3)", multi-select → **Send reminder**. Canvas line: "Posted to Canvas · Open in Canvas". Email bounce row links to the person in People.
5. **Shareable link (panel).** Mural's single access panel: access level (Enrolled learners only · Anyone at montgom.edu · Anyone with the link), password optional, **expiry with presets** (End of term · 7 days · Custom) and a timezone-stamped date, Copy link, Reset link. Sticky: no "Never" expiry (ClickUp counter-example).
6. **Invitation (learner side, email + portal).** What Emily receives for a published session: course, session, date and time, room, what to prepare (links to released materials), **Add to calendar (.ics)**, and a one-line "You are in Group A · Sim Lab A". Below it the same as a portal card. Sticky: RSVP is not designed; attendance is taken by staff (D5).

Don't build: ClickUp "Expire after: Never", a Coursera-style discussion feed, a separate "email module".

---

## F. Learner portal – my courses, materials, recordings, progress

**Actor:** Learner.
**Legacy pain:** learners barely touch the system; video review is a dumped list gated by a delay; grade report is a PDF; no per-course view.

Screens:

1. **My courses.** Learner shell. Cards: *NURS 210 – Adult Health I · Fall 2026 · Next: Session 1, Mon 6 Oct 09:00, Sim Lab A · 2 new materials*, *NURS 110 · Spring 2026 · Completed*. Coursera returning-learner pattern: **Resume** / next-up above the fold.
2. **Course home.** *Next session* card (date, room, group, prep checklist of released materials with done ticks, Add to calendar). *Materials* list – released only, grouped by section. *Announcements* – latest two. *What you'll learn* – the outcomes list from A4. Nothing unreleased is visible or hinted at.
3. **My recordings.** Filtered by course by default with a course switcher. Rows: session date, scenario, "Available until 1 Nov", faculty feedback badge ("1 comment"), **Watch**. Sticky: only recordings released by faculty for this course appear; download is off by default; this is C4.
4. **Recording view.** Video placeholder with a transcript strip and **timestamped faculty comments** (Grain) as a right column; below, the session's checklist result ("14 / 18 · Completed") and a "Reply" box. No share button.
5. **My progress.** Per-session results table (session, scenario, score, feedback link) and a *Skills* panel: each skill from the framework with a level bar and "evidence: 2 sessions", spanning courses (NURS 110 → NURS 210) – Uxcel score panel with a reliability note. Sticky: this is the learner-facing "Scorecard" John Carroll asked for; faculty reporting dashboards are deliberately not here.

Don't build: Loom "Anyone with link" default on a debrief recording, Vimeo's dead-end "No speech detected", a faculty reports tab.

---

## Open questions for the artboard (sticky notes, not screens)

- Canvas overwrite rules: when a linked field changes on both sides, who wins? Wireframe assumes Canvas wins for name / term / roster and everything else is local-only; flag it.
- Does "Course" replace "Activity" or sit above it (Gergely's naming pushback)? Wireframe assumes it replaces it.
- Where do recordings live in the staff shell: under the session, or a course-level Recordings tab? Wireframe assumes under the session.
- Material reuse across courses: link or copy? Wireframe shows link with a flag.
- Learner assignment: does auto-fill exist at all, or is it purely manual? Shown as a suggestion button, flagged.
- Node 10 (simulation dates / calendar) has no inspiration references yet; D1, D4 and E6 borrow from the events node (06) and the Enterprise calendar reuse decision. REF GAP.
- Hospital customers with no LMS: does the Canvas channel simply not appear, or is there an Outlook / SharePoint equivalent (Steve Lichtinberg)? Not designed.
- Skills measurement model (levels, evidence, reliability) is deferred; the wireframe only shows where it would surface.
