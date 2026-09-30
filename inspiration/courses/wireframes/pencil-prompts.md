# Pencil (pen.dev) prompt pack – Courses low-fi wireframes

Derived from `courses-flow-spec.md`. If the spec changes, regenerate only the affected prompt. Uses the `LF/*` kit built by the User Manager pack (`../../userflow-patterns--user-mgmt/wireframes/pencil-prompts.md`, Prompt 0); Prompt 0b below adds four course-specific components.

## How to use

1. Open `pen-files/essentials_v0.1.pen`. The LF kit and the UM-A … UM-F artboards should already be there. If the kit is missing (new file, or Paper / Brilliant), paste the User Manager Prompt 0 first.
2. Paste **Prompt 0b** once. It adds `LF/CourseScreen`, `LF/LearnerScreen`, `LF/Card` and `LF/Calendar`. Check the components row before continuing.
3. Paste **Prompt E** as the pilot. It is the highlighted node on the feature map and the densest flow, so it calibrates the style fastest. Then paste A, B, C, D, F one at a time; each is self-contained.
4. Every flow is one artboard named `CO-<letter> <name>`, placed 120px below the previous one (start below UM-F).

## Model suggestions

| Task | Model | Why |
|---|---|---|
| Prompt 0b (kit additions) and the pilot Prompt E | Claude Sonnet 5 | Same structured tool-call work as the UM pack; cheap enough to iterate. |
| Prompts A, B, C, D, F | Claude Sonnet 5 | Same. If a prompt fails twice, retry once on Opus 5 rather than iterating on Sonnet. |
| Mechanical edits after review (duplicate a screen, swap copy, move stickies) | Claude Haiku 4.5 | Cheap and fine for copy / duplicate / rename. |
| Critique pass (artboards vs spec) | Claude Opus 5 | Judgement, not generation. Fable is overkill for building. |

Lessons from the three-app run of the UM pack: Pencil and Paper apply a whole screen per call; Brilliant through Cursor ACP pauses at every block. If you run Brilliant again, use its direct provider and medium thinking, and keep the "lookup before resend" line at the end of every prompt.

---

## Prompt 0b – kit additions for Courses (paste once)

```
The LF low-fi kit (LF/Screen, LF/Shell, LF/Button, LF/Input, LF/Table, LF/Badge, LF/Dialog, LF/SideSheet, LF/Sticky, LF/ArrowLabel, LF/Flow) already exists in this file. Keep every rule from it: greyscale only, Inter, lucide 16px, radius 4, no shadows, stickies #FFF4B8 220 wide with prefixes "HYPOTHESIS:", "REF:", "DON'T BUILD:", "OPEN:".

ADD THESE FOUR COMPONENTS to the right end of the components row, named exactly:

0. First fix "LF/Shell" (the nav inside LF/Screen): its items must be exactly Events, Recording, Video Review, Reports, Calendar, People, Courses, Settings. Add the missing "Courses" item after "People" in the master component; remove nothing. Selection stays an overridable property. Existing UM screens keep "People" selected.
1. "LF/CourseScreen" – a variant of LF/Screen (1280×800) that reuses the same LF/Shell with nav item "Courses" selected (all eight items present, "People" unselected), and whose content area starts with a course header row: a 20px title "NURS 210 – Adult Health I" with a 12px grey line under it "Fall 2026 · Owner Helen Gibson" and an LF/Badge "Canvas" to the right of the title; then a tabs row "Overview · Outcomes · Content · People · Sessions · Announcements · Share" (selected tab bold with a 2px bottom rule). Title, subtitle, badge text and selected tab are overridable.
2. "LF/LearnerScreen" – 1280×800 frame, white, 1px stroke, vertical layout, NO left nav. A 56px top bar with "Montgomery College" at the left, a course switcher chip "NURS 210 ▾" in the middle, and "Emily Baker" at the right. Under it a tabs row "My courses · Sessions · Recordings · Progress". Content area fill_container with padding 32.
3. "LF/Card" – 280 wide stroke-only frame, padding 16, vertical layout gap 8: a 14px title, a 12px grey meta line, an optional LF/Badge, and a 12px text link at the bottom. All text overridable.
4. "LF/Calendar" – a week strip 100% wide and 96px tall: seven columns Mon–Sun with a 12px day label and a placeholder block row; one column contains a stroke-only 14px chip "09:00 Session 1". Used only as a small context strip, never as a full calendar.

Take one screenshot of the components row and verify nothing is collapsed or clipped. Do not build any flows yet.
```

---

## Prompt E – Announcements: announce, send to Canvas, link, invitations (pilot)

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "CO-E Announcements – announce, send to Canvas, invite", placed 120px below the last UM artboard (or below the kit if none). Title "E · Announcements – announce, send materials and dates, Canvas, link, invitations". Subtitle "Actor: Faculty (announcements, materials), SimCoordinator (dates, invitations) · Legacy pain: nothing exists; customers send reminders through Canvas, scan debrief PDFs into Canvas and re-shoot video because LS content can't reach Canvas".

Screens row, left to right, an LF/ArrowLabel between each (label text in brackets):

1. "Announcements tab" – LF/CourseScreen, tab Announcements selected. Content: a collapsed composer row (stroke frame 48px tall) with grey text "Announce something to  All enrolled (31) ▾" and a Primary LF/Button "New announcement" at its right. Below, a list of 4 past posts as rows (1px bottom stroke, padding 12): 14px first line, 12px grey meta, three small LF/Badge chips for channels, and a 12px status. Rows: "Pre-brief materials for Session 1 are up · 2 d ago · All enrolled · Portal Email Canvas · 28 seen · 3 not yet"; "Session dates for October published · 5 d ago · All enrolled · Portal Email Canvas · 31 seen"; "Sim Lab A moved to Lab B on 13 Oct · 6 d ago · Group A · Portal Email · 8 seen"; "Welcome to NURS 210 · 12 Sep · All enrolled · Portal Canvas · 31 seen". Right rail (280 wide) with one LF/Card: title "Canvas", meta "Connected · NURS 210 · last push 2 days ago", badge "Linked", link "Open in Canvas".
   [clicks New announcement]
2. "Compose" – same screen with the composer expanded to a 640-wide LF/Dialog titled "New announcement". Body: a row "To  [All enrolled (31) ▾]" with a 12px hint under it "All enrolled · Group A · Session 1 participants · Named people"; a tall LF/Input (100px) placeholder "Write the announcement"; a label "Attach" with two chips "Pre-brief slides.pdf ×", "Sepsis video ×" and two text links "+ from Content", "+ session dates"; a label "Channels" with four checkbox rows each ending in a 12px grey recipient summary: "☑ Learner portal – 31 (always on)", "☑ Email notification – 29 with an email address", "☑ Canvas announcement – 31 in NURS 210", "☐ Shareable link – off"; a 12px line "Everyone in the audience sees this in their portal. Channels decide who is also notified."; a label "When" with radios "● Send now  ○ On a date  ○ 2 days before Session 1". Footer: Secondary "Cancel", Primary "Send".
   [Canvas channel is on]
3. "Send to Canvas" – screen 1 dimmed behind an LF/Dialog titled "Send to Canvas". Body: a stroke row "NURS 210 · Fall 2026 · 31 students · Linked"; a label "This will create in Canvas" with three lines with lucide icons: "1 announcement" (megaphone), "2 files as module 'Pre-brief'" (folder), "4 calendar events (Session 1–4)" (calendar); radios "● Create new  ○ Update the ones sent on 12 Sep"; a stroke banner with lucide alert-circle: "Edits made in Canvas do not sync back. This course stays the source." Footer: Secondary "Cancel", Primary "Send to Canvas".
   [sent]
4. "Delivery status" – LF/CourseScreen, tab Announcements, showing the post detail: 14px "Pre-brief materials for Session 1 are up", 12px "Sent 2 d ago · Portal · Email · Canvas", a 12px line "Posted to Canvas · Open in Canvas". Filter chips "All (31)", "Opened (28)", "Not yet (3)", "Bounced (0)". LF/Table columns: Name, Channel, Status, Opened, (blank); rows: "Emily Baker / Portal, Email / Opened / 2 d ago", "Anne Bennett / Portal, Email / Opened / 1 d ago", "Tom Brown / Portal / Not yet / –", "Noah Davidson / Portal, Email / Not yet / –", "Christian Dale / Portal, Email / Bounced / – · Fix email in People". Above the table a Secondary button "Send reminder to 3 not yet" with a checkbox row hint "select rows".
   [opens Shareable link]
5. "Shareable link" – screen 4 with an LF/SideSheet titled "Shareable link". Body: "WHO CAN OPEN IT" with radios "○ Enrolled learners only  ● Anyone at montgom.edu  ○ Anyone with the link"; LF/Input "Password (optional)"; "EXPIRES" with three chips "End of term (Dec 19)" (selected, black fill), "7 days", "Custom…" and a 12px line "Expires Dec 19, 2026 23:59 America/New_York"; an LF/Input showing "montgom.elevate.app/c/nurs210/xk92" with a Secondary "Copy" beside it; a 12px text link "Reset link (old link stops working)". Footer: Primary "Save".
   [learner receives it]
6. "Invitation" – an LF/LearnerScreen, tab Sessions selected, containing a 640-wide stroke frame styled as the invitation: 20px "Session 1 – Sepsis recognition", 14px lines "NURS 210 – Adult Health I", "Mon 6 Oct 2026 · 09:00–11:00", "Sim Lab A · You are in Group A", a label "Prepare" with two checkbox rows "☐ Pre-brief slides.pdf", "☐ Sepsis video (12 min)", a Secondary button "Add to calendar (.ics)", and a 12px grey "Sent by Mark Ellis · Questions: sim-center@montgom.edu". Beside it a small 12px annotation "Same content arrives as an email".

Notes row stickies:
- "REF: Google Classroom – audience dropdown on the composer. beehiiv – per-channel recipient summary before Send. Basecamp – 'who sees this' vs 'who gets notified'."
- "REF: SchoolAI – export → permission → class picker → success: the only complete LMS hand-off in the research. Navan – per-person status table with reminder in place."
- "REF: Mural – one access panel: level, password, timezone-stamped expiry, reset. The Leap – seen / not yet loop."
- "HYPOTHESIS: this course is the source of truth for materials and dates; Canvas receives copies. Edits in Canvas never sync back."
- "HYPOTHESIS: the portal is always a channel; email, Canvas and link are opt-in notifications. Hospital customers without an LMS simply don't see the Canvas row."
- "OPEN: node 10 (simulation dates / calendar) has no inspiration references yet – invitation borrows from events (Luma / Partiful). REF GAP."
- "DON'T BUILD: ClickUp-style 'Expire after: Never'; a Coursera-style discussion feed; a separate email module; RSVP."

Take one screenshot of the whole artboard, fix any clipped or collapsed layout, keep greyscale. After each screen, look up the Screens row to confirm it exists before continuing; never resend a block you have not confirmed missing.
```

---

## Prompt A – Course setup: create, outcomes, requirements, skills

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "CO-A Course setup – create, outcomes, skills", placed 120px below the previous CO artboard. Title "A · Course setup – create, outcomes, requirements, skills". Subtitle "Actor: Faculty · Legacy pain: no course object; SCEs and events carry no learning intent; learners never see objectives; nothing links a session to a competency".

Screens row, left to right, LF/ArrowLabel between each:

1. "Courses list" – LF/Screen with nav "Courses" selected, no course header, title "Courses". Toolbar: LF/Input "Search courses", chips "Term ▾", "Owner ▾", "Source ▾", Primary "New course" at the right. LF/Table columns: Course, Term, Learners, Sessions, Next session; rows: "NURS 210 – Adult Health I / Fall 2026 / 31 / 8 / Mon 6 Oct", "NURS 110 – Fundamentals / Fall 2026 / 48 / 12 / Wed 1 Oct", "NURS 310 – Critical Care / Fall 2026 / 22 / 6 / –", "NURS 110 – Fundamentals / Spring 2026 / 44 / 12 / Completed", "MSN 520 – Advanced Assessment / Fall 2026 / 12 / 4 / Thu 9 Oct". Add a small LF/Badge after each course name: Canvas, Canvas, Native, Canvas, Native. Below the table 12px "Showing 5 of 14".
   [clicks New course]
2. "New course" – list dimmed behind a 640-wide LF/Dialog titled "New course". Body has THREE stroke-only option frames stacked, each with a radio, a 14px title and 12px content: "● Start blank" with LF/Inputs "Name", "Code", "Term ▾" in a row; "○ Copy a previous course" with an LF/Input "Search past courses" and four checkboxes in a row "☑ Outcomes ☑ Materials ☑ Scenarios ☑ Session pattern ☐ Roster"; "○ Link a Canvas course" with an LF/Input "Search Canvas courses you teach" and a 12px line "Canvas will own: name, term, roster. Stays here: outcomes, materials, sessions." Footer: Secondary "Cancel", Primary "Create course". A 12px grey line under the third option: "Canvas not connected? Ask an Admin (People → Sign-in)."
   [creates a linked course]
3. "Course overview" – LF/CourseScreen, tab Overview. Under the header a 12px stroke banner "Name, term and roster come from Canvas · Last synced 5 min ago · Sync now". Then five LF/Card in a row (make them 200 wide): "Outcomes / 0 added / Add outcomes →", "Content / 0 materials / Add material →", "People / 31 learners synced / View roster →" with badge "Canvas", "Sessions / 0 planned / Add scenario →", "Share / Draft / Go live →" with badge "Draft". Below the cards a 12px line "A course is live when at least one session and one released material exist. Hypothesis."
   [opens Outcomes]
4. "Outcomes tab" – LF/CourseScreen, tab Outcomes. Three sections with 12px uppercase labels. "LEARNING OUTCOMES": numbered rows "1. Recognise early signs of sepsis and escalate using SBAR", "2. Prioritise care for a post-operative patient with hemorrhage", "3. Perform a focused cardiac assessment in a chest-pain presentation", a text link "+ Add outcome" and a 12px hint "Write it as 'Learners will be able to…'"; at the right of the section a small toggle "Preview as learner" with a 220-wide stroke frame beside it titled "What you'll learn" listing the three outcomes with check icons. "REQUIREMENTS": rows "Complete NURS 110 – Fundamentals · before enrolling", "Read pre-brief materials · before Session 1 (not enforced)", link "+ Add requirement". "SKILLS": chips "Clinical judgement · Competent", "Communication (SBAR) · Competent", "Patient safety · Novice", each with a small "× ", and a Secondary button "Add from framework".
   [clicks Add from framework]
5. "Add skills" – Outcomes tab dimmed behind a 640-wide LF/Dialog titled "Add skills". Body: a row of three chips "AACN Essentials" (selected, black fill), "Institution framework", "This course only"; an LF/Input "Search skills"; a checkbox list of 5 rows, each with a skill name and a small segmented control "Novice | Competent | Proficient": "☑ Clinical judgement – Competent", "☑ Communication (SBAR) – Competent", "☑ Patient safety – Novice", "☐ Delegation", "☐ Evidence-based practice"; a 12px line "3 selected · appear as chips on the course and can be attached to scenarios". Footer: Secondary "Cancel", Primary "Add 3 skills".

Notes row stickies:
- "HYPOTHESIS: the course is the container. Outcomes, materials, skills, roster, scenarios, sessions, recordings and announcements all live inside it. Sessions are created from the course, not from the calendar."
- "HYPOTHESIS: source badge Native / Canvas on every course. Canvas owns name, term, roster; everything else is local. Works with no Canvas at all."
- "REF: Udemy – 'Add more' outcomes with learner-facing wording. Coursera – 'What you'll learn' preview. Kajabi – requirement can lock content (shown, not enforced)."
- "REF: Handshake – pick skills, review chips, save. Podia – setup as three separate concerns at a glance."
- "OPEN: Canvas overwrite rules when both sides change; whether 'Course' replaces 'Activity' or sits above it."
- "DON'T BUILD: AI-generated outline review (Kajabi); rubric builder with points (Google Classroom); free-text requirements detached from anything (Skillshare)."

Screenshot the artboard, fix clipping, keep greyscale. Look up the Screens row after each screen; never resend a block you have not confirmed missing.
```

---

## Prompt B – Content: materials, release timing, share with participants

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "CO-B Content – materials, release, share", placed 120px below the previous CO artboard. Title "B · Content – materials, release timing, share with participants". Subtitle "Actor: Faculty · Legacy pain: study material only travels inside pre-event emails; no library, no reuse, no way to see what a learner can see and when; video can't reach Canvas".

Screens row, left to right, LF/ArrowLabel between each:

1. "Content tab" – LF/CourseScreen, tab Content. Three sections with a 14px section title, a 12px grey "Release: 2 days before Session 1 ▾" at the right, and item rows (lucide icon 16px, 14px name, 12px grey size, LF/Badge state): "PRE-BRIEF": "file-text · Pre-brief slides.pdf · 2.1 MB · Released", "video · Sepsis recognition (12 min) · Released", "link · SBAR handout (Canvas file) · Scheduled 1 Oct"; "SIM DAY": "file-text · Patient chart – Mrs. Alvarez.pdf · Draft"; "DEBRIEF": "file-text · Debrief guide.pdf · Draft", "video · Recording – released after session · Relative". Primary "Add material" at the top right with an open menu beneath it (stroke frame, 5 rows): "Upload file", "Paste link", "Record video", "Pick from library", "From Canvas files".
   [Pick from library]
2. "Add material" – Content tab dimmed behind a 640-wide LF/Dialog titled "Add material". Body: tabs row "Upload · Link · Library (selected) · Canvas"; an LF/Input "Search materials in other courses"; LF/Table columns: Name, Used in, Updated, (blank), 4 rows: "Hand hygiene refresher.pdf / NURS 110 / Aug 2026 / Reuse", "SBAR pocket card.pdf / NURS 110, NURS 310 / Jul 2026 / Reuse", "Chest pain video (9 min) / NURS 310 / Sep 2026 / Reuse", "IV pump quick guide.pdf / NURS 110 / May 2026 / Reuse"; a 12px line "Reused materials stay linked: updating the file updates every course. Hypothesis." Footer: Secondary "Cancel", Primary "Add to Pre-brief".
   [sets release timing]
3. "Release timing" – Content tab with a small 320-wide stroke popover anchored under the "PRE-BRIEF" release control: title 14px "Release Pre-brief", radios "○ Release now", "○ On a date  [1 Oct 2026]", "● Relative to a session  [2 days ▾] before [Session 1 ▾]", "○ Keep as draft"; 12px line "Learners see it in their portal on 4 Oct 09:00"; Primary "Apply to 3 items". In the outline behind it, the three Pre-brief badges read "4 Oct".
   [opens Share tab]
4. "Share tab" – LF/CourseScreen, tab Share. Three stroke-only sections stacked, each with a 12px uppercase label. "STATUS": a segmented control "Draft | Live (selected, black)" with the 12px line "Live: enrolled learners see released materials and sessions in their portal. Nothing unreleased is shown." "WHO CAN ACCESS": rows "Enrolled groups – BScN 2nd-year (31)" with badge "Canvas", "Named people – 2 · Add", "Link – Off ▾ (Anyone at montgom.edu · Anyone with the link · expiry)". "INSTRUCTORS": rows "Helen Gibson · Owner", "Jill Beckman · Can edit", "Mark Ellis · Coordinator · Can edit", link "+ Add instructor". At the top right a Secondary button "Preview as learner".
   [Preview as learner]
5. "Preview as learner" – LF/LearnerScreen, tab My courses, with a full-width stroke banner at the top of the content "Previewing as Emily Baker · what she can see today · Exit preview". Content: an LF/Card 100% wide titled "Next session – Session 1 · Sepsis recognition", meta "Mon 6 Oct · 09:00 · Sim Lab A · Group A", link "Add to calendar"; a section "Materials" with two rows "Pre-brief slides.pdf", "Sepsis recognition (12 min)" and NO draft items; a section "What you'll learn" with the three outcomes. A 12px annotation beside the banner: "Scheduled and draft items are absent, not greyed."

Notes row stickies:
- "REF: Podia – one 'Add' menu for every material type; Teachable – local, cloud and URL sources unified. Dropbox Dash – preview without losing context."
- "REF: Squarespace – draft / published / scheduled visible in the outline. Teachable – release timing separate from publication."
- "REF: Podia – status, access and discoverability as three separate controls. Figma – invitations, link and levels in one share dialog."
- "HYPOTHESIS: materials reach learners through the portal, a link, or a push to Canvas – never as email attachments. This is the fix for John Carroll re-shooting video."
- "OPEN: reuse across courses – link or copy? Wireframe shows link."
- "DON'T BUILD: Gumroad's single freeform content document; Podia's hidden toggle in a row overflow menu; per-file permission grids."

Screenshot the artboard, fix clipping, keep greyscale. Look up the Screens row after each screen; never resend a block you have not confirmed missing.
```

---

## Prompt C – People: learner groups, roster sync, learner assignment

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "CO-C People – groups, roster, assignment", placed 120px below the previous CO artboard. Title "C · People – learner groups, roster sync, learner assignment". Subtitle "Actor: SimCoordinator (Faculty views) · Legacy pain: rosters pulled from Canvas into Excel and typed in one at a time; learners attached per event by hand; a late joiner has no path".

Screens row, left to right, LF/ArrowLabel between each:

1. "People tab" – LF/CourseScreen, tab People. Section "INSTRUCTORS": three rows "Helen Gibson · Owner", "Jill Beckman · Co-instructor", "Mark Ellis · Coordinator", link "+ Add instructor". Section "LEARNER GROUPS": two LF/Card side by side: "BScN 2nd-year / 31 learners · Synced from Canvas 5 min ago / badge Canvas / Sync now", and a dashed stroke card "+ Add group". Section "ROSTER (31)": toolbar with LF/Input "Search", chips "Group ▾", "Status ▾", "Assignment ▾", Primary "Assign learners" at the right; LF/Table columns: Name, Group, Status, Assignment, Last sign-in; rows: "Emily Baker / Group A / Enrolled / Session 1 · Sim Lab A / 2 d ago", "Anne Bennett / Group A / Invited / Session 1 · Sim Lab A / never", "Tom Brown / – / Enrolled / Unassigned / 5 d ago", "Noah Davidson / Group B / Enrolled / Session 1 · Sim Lab B / 1 d ago", "Christian Dale / – / Dropped / – / 20 d ago". Status as LF/Badge.
   [clicks + Add group]
2. "Add group" – People tab dimmed behind a 640-wide LF/Dialog titled "Add a learner group". Body: three stacked stroke options with radios: "○ Existing group from People" with a checkbox list "☐ BScN 1st-year (48) · Local", "☐ MSN 1st-year (22) · Local", "☐ Masters Staff (9) · Directory"; "● Use the Canvas roster" with a 12px line "NURS 210 – 31 students · read-only, kept in sync"; "○ Upload a CSV" with a 12px line "Opens People → Imports, then returns here". Below, radios "● Send invitation emails now  ○ Add quietly, invite later". A stroke row "31 learners · 27 already have accounts (matched by email) · 4 will be invited". Footer: Secondary "Cancel", Primary "Add 31 learners".
   [Canvas roster changes later]
3. "Roster synced" – People tab, roster section, with a stroke banner above the table with lucide refresh-cw: "Canvas roster synced 5 min ago · 2 new enrolments added · 1 dropped – flagged, not removed". The table shows a row "Christian Dale / – / Dropped in Canvas / – / 20 d ago" with two small text links at the end "Keep" · "Remove", and two rows with a small LF/Badge "New". A 12px line under the banner "People are never removed automatically. Recordings and results stay with them."
   [clicks Assign learners]
4. "Learner assignment" – LF/CourseScreen, tab People, title area shows a 14px "Assign learners to sessions" with a Secondary "Auto-fill evenly" and Primary "Done" at the right. Two columns: LEFT (400 wide) titled "Unassigned (28)" with LF/Input "Search" and a checkbox list of 6 names ("☑ Tom Brown", "☑ Sara Cole", "☐ Ravi Desai", "☐ Lena Fischer", "☐ Omar Haddad", "☐ Priya Iyer") and a 12px "2 selected · Assign to ▾"; RIGHT (fill) titled "Sessions" with four stroke rows each showing "Session 1 · Mon 6 Oct 09:00 · Sim Lab A · Sepsis recognition" + an LF/Badge "6 / 8", "Session 1 · Mon 6 Oct 09:00 · Sim Lab B · Sepsis recognition" + "0 / 8", "Session 1 · Mon 6 Oct 13:00 · Sim Lab A · Sepsis recognition" + "8 / 8 · Waitlist 2", "Session 2 · Mon 13 Oct 09:00 · Sim Lab A · Post-op hemorrhage" + "3 / 8". A 12px line under the right column "Full sessions take a waitlist. Learners see their slot in their portal once you press Done."

Notes row stickies:
- "REF: Circle – inherit an existing group; choose 'send invitations' vs 'add quietly'. Deel – selected count and warning before continuing."
- "REF: Teachable – manual and CSV enrolment on one screen. Luma – capacity and waitlist in one control."
- "HYPOTHESIS: a group arrives whole (Canvas, People, CSV) but slotting learners into sessions and rooms is a deliberate manual step – Gergely's 'Learner Assignment' story. Auto-fill only suggests."
- "HYPOTHESIS: Canvas is source of truth for the roster; dropped learners are flagged, never removed (same policy as UM-D)."
- "OPEN: late joiners' access to already-released materials and past recordings."
- "DON'T BUILD: Basecamp snapshot membership (later group changes don't propagate); a per-learner permission grid; a fourth roster source."

Screenshot the artboard, fix clipping, keep greyscale. Look up the Screens row after each screen; never resend a block you have not confirmed missing.
```

---

## Prompt D – Sessions: scenarios in the course, session calendar, dates

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "CO-D Sessions – scenarios, calendar, dates", placed 120px below the previous CO artboard. Title "D · Sessions – scenarios in the course, session calendar, dates". Subtitle "Actor: Faculty (scenarios), SimCoordinator (sessions, rooms, dates) · Legacy pain: one scenario becomes up to 30 hand-built group events; 'Your Events' is unusable; the calendar is the entry point instead of the course".

Screens row, left to right, LF/ArrowLabel between each:

1. "Sessions tab" – LF/CourseScreen, tab Sessions. Top: a strip "SCENARIOS IN THIS COURSE" with three LF/Card (200 wide): "Sepsis recognition / Institution library · v3 / Clinical judgement, SBAR / 4 sessions", "Post-op hemorrhage / My scenarios / Patient safety / 2 sessions", "Chest pain – STEMI / Elevate catalogue / Clinical judgement / 0 sessions", and a dashed card "+ Add scenario". Then a toolbar: segmented "List | Calendar", chips "Week ▾", "Room ▾", Secondary "Add scenario", Primary "New session". Then an LF/Calendar strip with the chip in Monday. Then an agenda list of 4 rows (12px date column, 14px text, LF/Badge state): "Mon 6 Oct 09:00–11:00 · Session 1 · Sepsis recognition · Sim Lab A · Group A (8/8) · Jill Beckman · Ready", "Mon 6 Oct 13:00–15:00 · Session 1 · Sepsis recognition · Sim Lab A · Group B (8/8) · Jill Beckman · Ready", "Mon 13 Oct 09:00–11:00 · Session 2 · Post-op hemorrhage · Sim Lab B · Group A (3/8) · Helen Gibson · Planned", "Mon 29 Sep 09:00–11:00 · Orientation · – · Sim Lab A · All (31) · Helen Gibson · Done · Recordings (3)".
   [clicks Add scenario]
2. "Add scenario" – Sessions tab dimmed behind an 800-wide LF/Dialog titled "Add scenario to NURS 210". Body is two columns: LEFT (360) with tabs "Institution library (selected) · My scenarios · Elevate catalogue", an LF/Input "Search", and a checkbox list of 5: "☑ Sepsis recognition · v3", "☑ Post-op hemorrhage · v1", "☐ Chest pain – STEMI · v2", "☐ Stroke – FAST · v1", "☐ Pediatric asthma · v4"; RIGHT (fill) a preview of the highlighted one: 14px "Sepsis recognition", 12px lines "Duration 90 min · Room type: Sim Lab · Equipment: high-fidelity manikin, IV pump, monitor", "Skills: Clinical judgement, Communication (SBAR)", "Institution library · v3 · updated by H. Gibson, Aug 2026", and a placeholder grey block 100% × 120 labelled "storyboard preview". Footer: 12px "2 selected", Secondary "Cancel", Primary "Add 2 scenarios".
   [opens a scenario card]
3. "Scenario in course" – Sessions tab with an LF/SideSheet titled "Sepsis recognition". Body: a stroke row "From Institution library · v3 · Open original" with lucide external-link; "ORDER IN COURSE" with a small stepper "1 ▾"; "SKILLS DEVELOPED" with chips "Clinical judgement ×", "Communication (SBAR) ×", "+ Add"; "COURSE NOTES" tall LF/Input placeholder "Notes for facilitators in this course only"; a 12px line "Changes here never edit the library scenario."; Primary button "Create sessions from this scenario".
   [Create sessions]
4. "New session" – Sessions tab dimmed behind a 640-wide LF/Dialog titled "New session – Sepsis recognition". Body: a 12px grey line "Pre-filled from the scenario: 90 min · Sim Lab · manikin, IV pump, monitor"; a row of LF/Inputs "Date [Mon 6 Oct 2026]", "Start [09:00]", "Duration [90 min]"; an LF/Input "Room [Sim Lab A ▾]" with a stroke banner under it with lucide alert-triangle: "Sim Lab A is booked 09:00–10:00 by NURS 110 · Save anyway · Pick another"; LF/Input "Group [Group A (8) ▾]"; LF/Input "Facilitators [Jill Beckman ▾]"; LF/Input "Capacity [8]"; a label "Repeat" with radios "○ Once  ● Weekly for [4] weeks  ○ Pick dates" and a 12px line "Creates 4 sessions: Oct 6, 13, 20, 27 · 09:00 · Sim Lab A"; a checkbox "☑ Publish dates to learners when saved (portal + invitation)". Footer: Secondary "Cancel", Primary "Create 4 sessions".
   [saved]
5. "Sessions created + edit scope" – Sessions tab, agenda now listing the four new rows with LF/Badge "Planned" and a 12px line above them "4 sessions created · Dates published · 31 invited". One row is highlighted with a small LF/Dialog (400 wide) over it titled "Edit session 2": radios "● This session only  ○ All 4 sessions in the series", footer Secondary "Cancel", Primary "Continue". At the bottom of the agenda the past "Orientation" row shows an attendance disposition segmented control "Completed | No-show" and the link "Recordings (3)".

Notes row stickies:
- "REF: Figma – preview before insert; placed instance shows source + local settings. PandaDoc – running selection count."
- "REF: Understory – session pre-filled from the experience. Luma – one event into a series. Acuity – conflict named but save still allowed. Amie / Motion – this / all events edit scope. Lyssna – attendance disposition."
- "HYPOTHESIS: sessions are created from a scenario inside the course, never from the calendar. The Enterprise calendar is reused for rooms and equipment, not redesigned."
- "HYPOTHESIS: recordings live under the session, not in a course-level Recordings tab."
- "OPEN: node 10 (simulation dates / calendar) has no inspiration references – this artboard borrows from events (06). REF GAP."
- "DON'T BUILD: the SCE editor, simulator control, storyboard (legacy dead ends); a 1:1 rescheduling flow (Preply); a resources field with no conflict feedback (Understory)."

Screenshot the artboard, fix clipping, keep greyscale. Look up the Screens row after each screen; never resend a block you have not confirmed missing.
```

---

## Prompt F – Learner portal: my courses, materials, recordings, progress

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "CO-F Learner portal – courses, recordings, progress", placed 120px below the previous CO artboard. Title "F · Learner portal – my courses, materials, recordings, progress". Subtitle "Actor: Learner · Legacy pain: learners barely touch the system; video review is a dumped list gated by a delay; the grade report is a PDF; nothing is per course".

All screens are LF/LearnerScreen instances (no admin nav). Screens row, left to right, LF/ArrowLabel between each:

1. "My courses" – tab My courses. A 20px "Welcome back, Emily". A 100%-wide LF/Card titled "Next up – Session 1 · Sepsis recognition", meta "NURS 210 · Mon 6 Oct · 09:00 · Sim Lab A · Group A", link "Prepare (2 materials)". Below, two LF/Card (320 wide) side by side: "NURS 210 – Adult Health I / Fall 2026 · 2 new materials · next Mon 6 Oct / badge Live / Open", "NURS 110 – Fundamentals / Spring 2026 · 12 sessions / badge Completed / Open".
   [opens NURS 210]
2. "Course home" – tab My courses, course switcher "NURS 210 ▾". Two columns: LEFT (fill): LF/Card 100% "Next session – Session 1 · Sepsis recognition", meta "Mon 6 Oct · 09:00–11:00 · Sim Lab A · Group A", a "Prepare" checklist "☑ Pre-brief slides.pdf", "☐ Sepsis recognition (12 min)", link "Add to calendar (.ics)"; section "MATERIALS" grouped "Pre-brief" with the two released rows only; section "WHAT YOU'LL LEARN" with the three outcomes and check icons. RIGHT (280): section "ANNOUNCEMENTS" with two rows "Pre-brief materials for Session 1 are up · 2 d ago", "Session dates for October published · 5 d ago". A 12px annotation at the bottom: "Draft and scheduled items are not shown or hinted at."
   [opens Recordings]
3. "My recordings" – tab Recordings, a chip row "NURS 210 (selected, black) · NURS 110 · All". LF/Table columns: Session, Scenario, Available until, Feedback, (blank); rows: "29 Sep · Orientation / Orientation run / 1 Nov / – / Watch", "6 Oct · Session 1 / Sepsis recognition / 20 Nov / 1 comment / Watch", "13 Oct · Session 2 / Post-op hemorrhage / 27 Nov / Not yet released / –" (greyed), "Spring · Session 12 / Medication safety / expired 30 Jun / 2 comments / Expired". A 12px line "Only recordings released by your instructors for this course appear here. Download is off."
   [clicks Watch]
4. "Recording view" – tab Recordings. LEFT (fill): a grey #E6E6E6 block 100% × 360 with a lucide play icon centred and a 12px "Session 1 · Sepsis recognition · 6 Oct · 42:10"; under it a stroke frame 100% × 48 "Transcript ▸ … 'the patient's lactate is 4.2, I'm going to call the provider' …"; under that "CHECKLIST RESULT" row "14 / 18 · Completed" with a 12px "See details". RIGHT (320): "INSTRUCTOR COMMENTS" with two stroke rows "12:40 · Jill Beckman – Good SBAR handoff; state the lactate trend, not just the value.", "31:05 · Jill Beckman – Escalation was 6 min late; what would trigger you earlier?", and an LF/Input placeholder "Reply". No share or download button anywhere.
   [opens Progress]
5. "My progress" – tab Progress, chip row "NURS 210 (selected) · All courses". Section "SESSIONS": LF/Table columns Session, Scenario, Score, Feedback, (blank); rows "29 Sep · Orientation / Orientation run / – / – / –", "6 Oct · Session 1 / Sepsis recognition / 14 / 18 / 2 comments / View", "13 Oct · Session 2 / Post-op hemorrhage / – / – / upcoming". Section "SKILLS" with four rows each: 14px skill name, a 200-wide stroke bar with a black fill at 33 / 66 / 100 %, 12px level and evidence: "Clinical judgement · Competent · evidence: 3 sessions (NURS 110, 210)", "Communication (SBAR) · Competent · 2 sessions", "Patient safety · Novice · 1 session", "Delegation · not yet assessed". A 12px line "Levels are set by your instructors from session results. Hypothesis: this is the learner Scorecard."

Notes row stickies:
- "REF: Coursera – returning learner: progress and Resume above the fold; results show overall and components. Loom – recording library with metadata."
- "REF: Grain – transcript to timestamped comment. Zoom / Vimeo – named access and expiry separate from link privacy. Uxcel – competency score with reliability note."
- "HYPOTHESIS: recordings are released per course to enrolled learners with feedback attached; download off by default. Cornerstone C4."
- "HYPOTHESIS: skills progress spans courses (NURS 110 → NURS 210). Measurement model deferred; only where it surfaces is shown."
- "OPEN: what a late joiner or a dropped learner still sees; retention period after the term."
- "DON'T BUILD: Loom 'Anyone with link' default on a debrief recording; Vimeo's dead-end 'No speech detected'; a faculty reports tab (deferred 2026-09-15)."

Screenshot the artboard, fix clipping, keep greyscale. Look up the Screens row after each screen; never resend a block you have not confirmed missing.
```

---

## After all six: critique prompt (Opus)

```
Compare each CO-A … CO-F artboard in this file against the flow spec I paste below. For each artboard list: (1) screens that are missing or merged, (2) copy that contradicts the spec, (3) any place where the wireframe drifted into visual design (colour, shadows, decorative icons), (4) one thing the wireframe makes obvious that the spec did not anticipate, (5) any place where a Courses screen contradicts a UM-A … UM-F screen (roles, source badges, sync policy, invitation wording). Do not change the file. Reply as a short table per artboard.

<paste courses-flow-spec.md here>
```
