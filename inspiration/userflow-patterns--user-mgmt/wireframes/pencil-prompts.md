# Pencil (pen.dev) prompt pack — User Manager low-fi wireframes

Derived from `user-manager-flow-spec.md`. If the spec changes, regenerate only the affected prompt.

## How to use

1. Open `pen-files/essentials_v0.1.pen` (the legacy screenshots are already there; keep them for side-by-side).
2. Paste **Prompt 0** once. It creates the low-fi kit as reusable components. Check the result before continuing.
3. Paste **Prompt A** as the pilot. Fix the kit or the prompt style if the result is off. Then paste B–F one at a time; each is self-contained and references the kit by component name.
4. Every flow is one artboard named `UM-<letter> <name>`, placed below the previous one.

## Model suggestions

| Task | Model | Why |
|---|---|---|
| Prompt 0 (kit) and the pilot Prompt A | Claude Sonnet 5 | Structured tool-call work with many nodes; strong enough to keep layout rules, far cheaper than Opus or Fable. |
| Prompts B–F | Claude Sonnet 5 | Same. If a prompt fails twice, retry once on Opus 5 rather than iterating on Sonnet. |
| Mechanical edits after review (duplicate a screen, swap copy, move stickies) | Claude Haiku 4.5 | Cheap and fine for copy/duplicate/rename. |
| Critique pass ("compare artboard UM-C against the spec and list gaps") | Claude Opus 5 | Judgement, not generation. Fable is overkill for building; use it only if you want the spec itself rewritten. |

Check which of these pen.dev actually exposes in its model picker; if Sonnet 5 is not offered, take the cheapest Claude model available and keep Opus for critique.

---

## Prompt 0 — low-fi kit (paste once)

```
You are building LOW-FIDELITY wireframes for an admin web app. This is a solution concept, not visual design. Follow these rules for everything you create in this file from now on:

STYLE
- Greyscale only: background #FFFFFF, canvas #F4F4F4, strokes #111111 at 1px, secondary text #6B6B6B, placeholder fills #E6E6E6. One accent only: #111111 filled buttons with white text for the primary action. No shadows, no gradients, radius 4.
- Font: Inter everywhere. Sizes: 20 screen title, 14 body, 12 labels, 11 annotations.
- Icons: lucide, 16px, #111111. Use them sparingly.
- Sticky notes are #FFF4B8 frames, 220 wide, padding 12, text 12 Inter, used for decisions, hypotheses and references. A sticky that starts with "HYPOTHESIS:" is a bet to test; one that starts with "REF:" names the product pattern borrowed (e.g. "REF: Loom — deactivation consequences").

CREATE THESE REUSABLE COMPONENTS at the top of the document, left to right, named exactly:
1. "LF/Screen" — 1280×800 frame, white fill, 1px stroke, clip on, vertical layout. Contains "LF/Shell": a 200px left nav (grey fill #F4F4F4) with items Events, Recording, Video Review, Reports, Calendar, People (selected, bold), Courses, Settings; a 56px top bar with a search input placeholder; and a content area (fill_container) that starts with a row of tabs "Users · Groups · Imports · Sign-in" and a 20px screen title. Make nav selection, tab selection and title overridable text.
2. "LF/Button" — text label, padding 8/14, variants: Primary (black fill, white text) and Secondary (white fill, black stroke).
3. "LF/Input" — 36px tall, label above (12px), placeholder text inside, 1px stroke.
4. "LF/Table" — header row plus 5 body rows; 5 columns with overridable header labels and cell text; zebra rows #FAFAFA.
5. "LF/Badge" — small pill with 11px text, stroke only. Used for status (Invited / Active / Deactivated) and source (Local / Directory / Canvas).
6. "LF/Dialog" — 560 wide centered card with 1px stroke, title row, body (vertical layout, gap 16) and a footer with Secondary + Primary buttons.
7. "LF/SideSheet" — 420 wide panel docked to the right edge of a screen, full height, 1px left stroke, title row, vertical body.
8. "LF/Sticky" — the sticky note described above.
9. "LF/ArrowLabel" — a horizontal frame: a 48px line with a lucide arrow-right icon and a 12px label above it (overridable text like "clicks Invite"). Used between screens.
10. "LF/Flow" — an artboard: frame with canvas fill #F4F4F4, padding 48, vertical layout gap 24, containing a title row (24px title + 14px subtitle "Actor: … · Legacy pain: …") and an empty horizontal row named "Screens" with gap 32 where screens and arrow labels will be placed. Below the screens row an empty horizontal row named "Notes" gap 16 for stickies.

When done, take one screenshot of the components row and verify nothing is collapsed or clipped. Do not build any flows yet.
```

---

## Prompt A — Users: invite, edit, deactivate (pilot)

```
Using the LF kit components already in this file, build ONE artboard as an instance of LF/Flow named "UM-A Users — invite, edit, deactivate". Place it below the kit with 120px padding. Title: "A · Users — invite, edit, deactivate". Subtitle: "Actor: SimTech (invite, edit), Admin (deactivate staff) · Legacy pain: 11-field modal with a mandatory admin-set password, 8-role dropdown, an 'Inactive' checkbox with no explanation".

In the Screens row, place these LF/Screen instances left to right with an LF/ArrowLabel between each (label text given in brackets):

1. "Users list" — tab Users selected, title "People". Toolbar: LF/Input search placeholder "Search people", three filter chips "Role ▾", "Status ▾", "Source ▾", and Primary LF/Button "Invite people" at the right. LF/Table columns: Name, Email, Role, Groups, Status; rows: "Emily Baker / ebaker@montgom.edu / Learner / BScN 2nd-year / Active", "Jill Beckman / jbeckman@montgom.edu / Staff / Masters Staff / Active", "Anne Bennett / abennett@montgom.edu / Learner / — / Invited", "Tom Brown / tbrown@montgom.edu / Learner / BScN 1st-year / Deactivated", "Helen Gibson / hgibson@montgom.edu / Staff / Bachelor Staff / Active". Render Status cells as LF/Badge. Add a second small badge column after Email showing source: Local, Directory, Canvas, Local, Directory. Below the table a 12px line "Showing 5 of 50".
   [clicks Invite people]
2. "Invite people" — same list screen dimmed to #F4F4F4 behind an LF/Dialog titled "Invite people". Body: a tall LF/Input (120px) labelled "Emails" with placeholder "Paste one or more emails, separated by commas or new lines"; below it three chips "ebaker@montgom.edu ×", "new.person@montgom.edu ×", "+1 more". Then a label "Role" with three radio rows: "● Learner — sees their own events, recordings and feedback", "○ Staff — runs events, records, grades what they are assigned to", "○ Admin — everything, including sign-in setup". Then an LF/Input labelled "Add to group (optional)" placeholder "Choose a group". Footer: Secondary "Cancel", Primary "Send 3 invites".
   [sends invites]
3. "Invited state" — the Users list again; the first three rows now show Status badge "Invited" and a small text link "Resend" after the badge; a 12px inline banner above the table: "3 invites sent. People set their own password on first sign-in." Style the banner as a stroke-only frame.
   [clicks a row]
4. "Person panel" — Users list with an LF/SideSheet on the right titled "Jill Beckman". Body sections separated by 12px labels: "Email jbeckman@montgom.edu · Source Directory · Status Active"; "ROLE" with a segmented control (three adjacent stroke boxes: Learner | Staff (selected, black fill) | Admin) and a 12px line under it "Changing to Learner removes: scheduling, grading. Keeps: her recordings."; "GROUPS" with chips "Masters Staff ×", "+ Add"; "ACCESS" with a text link "What can Jill access? →"; "SIGN-IN" with lines "Last sign-in 2 days ago", "Identity linked to jbeckman@uni.edu · Unlink", and a Secondary button "Send reset link"; at the bottom a Secondary button "Deactivate…".
   [clicks Deactivate]
5. "Deactivate" — Users list dimmed behind an LF/Dialog titled "Deactivate Jill Beckman?". Body, three short paragraphs with a lucide icon each: "They lose: sign-in, access to events and recordings." (icon: log-out), "Stays: their recordings and assessments remain attributed to them." (icon: archive), "Hand over: pick who takes over the events they own." followed by an LF/Input placeholder "Choose a staff member (optional)". Footer: Secondary "Cancel", Primary "Deactivate". A 12px line under the footer: "You can reactivate later from the person panel."

In the Notes row add these LF/Sticky notes:
- "HYPOTHESIS: 3 roles (Admin, Staff, Learner) replace 8 global roles. Content scope, not role, decides what Staff can touch."
- "HYPOTHESIS: staff never set passwords. Invite by email or provision via SSO/Canvas. Status: Invited → Active → Deactivated."
- "REF: Miro / Linear — one paste box handles 1 or 100 emails; rows exist before anyone accepts."
- "REF: Loom — deactivation explains what is lost, what stays, who takes over. Entra — disable, don't delete."
- "REF: Expensify — role as inline segmented control. Twist — consequence text on downgrade. GitHub — unlink a wrong SSO identity."
- "DON'T BUILD: Dovetail-style accept page (full name + 12-char password before entry); per-user permission grid."

Take one screenshot of the whole artboard when done and fix any clipped or collapsed layout. Keep everything greyscale.
```

---

## Prompt B — Groups: create, manage, archive

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "UM-B Groups — create, manage, archive", placed 120px below the previous UM artboard. Title "B · Groups — create, manage members, archive". Subtitle "Actor: SimTech · Legacy pain: dual-list picker in a modal, no notion of where a group comes from, 'show hidden groups' checkbox instead of archiving".

Screens row, left to right with LF/ArrowLabel between them:

1. "Groups list" — tab Groups selected, title "Groups". Toolbar: search input, filter chip "Source ▾", Primary button "New group". A vertical list of 6 group rows (each a horizontal frame, 1px bottom stroke, padding 12): name (14px), LF/Badge source, member count (12px grey), last updated (12px grey), optional "Admin: Helen Gibson" (12px). Rows: "BScN 1st-year · Local · 48 members · updated 2 d ago", "BScN 2nd-year · Canvas · 31 members · synced 5 min ago", "BScN 3rd-year · Local · 44 members", "Masters Staff · Directory · 9 members · synced 1 h ago · Admin: Helen Gibson", "MSN 1st-year · Local · 22 members", "Sim Patients Spring 2026 · Local · 12 members". On the two synced rows add a 12px grey line "Membership managed by Canvas" / "Membership managed by Directory".
   [clicks New group]
2. "New group" — list dimmed behind an LF/Dialog (make it 640 wide) titled "New group". Body: LF/Input "Name" placeholder "e.g. BScN 2nd-year, Fall 2026"; a label "Type" with two radios "● Learner cohort  ○ Staff"; then a label "Add members" and, stacked in one body, THREE ways in: (a) a search input "Find people" with a checkbox list of 5 people (Emily Baker ☑, Anne Bennett ☑, Tom Brown ☐, Christian Dale ☐, Noah Davidson ☐) and "2 selected"; (b) a dashed drop zone frame 80px tall "or drop a CSV / XLSX with an email column"; (c) a stroke-only row "or sync from a Canvas course →" with a lucide link icon. Footer: Secondary "Cancel", Primary "Create group".
   [creates group]
3. "Group detail" — tab Groups, title "BScN 2nd-year" with LF/Badge "Local" beside it and a 12px line "48 members · created today". Toolbar row with three Secondary buttons side by side: "Add people", "Bulk upload", "Download list", and a Secondary "Settings" at the far right. LF/Table columns: Name, Email, Status, Added, (blank); 5 rows of learners; last column shows a small "Remove" text link. Above the table a 12px line: "Tip: you can also select people in the Users tab and choose 'Add to group'."
   [opens Settings]
4. "Group settings" — group detail dimmed behind an LF/Dialog titled "BScN 2nd-year — settings". Body: LF/Input "Name"; LF/Input "Group admin (optional)" placeholder "Choose a staff member" with a 12px line "Group admins can add and remove members of this group only."; a divider; a section "Archive this group" with 12px text "Members keep their accounts. Events and recordings linked to this group stay visible to Staff. The group leaves all pickers." and a Secondary button "Archive group". Footer: Secondary "Cancel", Primary "Save".

Notes row stickies:
- "REF: Front — checkbox picker AND file import on one screen: small groups by hand, big cohorts by file."
- "REF: Google Workspace — Add / Bulk upload / Download side by side. Canva — build groups from the roster via multi-select."
- "REF: Okta — source badge (Local / Directory / Canvas) makes it visible who owns membership. Calendly — delegated group admin."
- "HYPOTHESIS: groups are plain cohorts for now; Courses (later module) may own Canvas-synced groups instead."
- "OPEN: renaming/merging groups, late joiners' retroactive access — research gap, not designed here."
- "DON'T BUILD: Confluence per-user permission grid on a group; roles matrix."

Screenshot the artboard, fix clipping, keep greyscale.
```

---

## Prompt C — Imports: paste or upload, map, review, result

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "UM-C Imports — upload, map, review", placed 120px below the previous UM artboard. Title "C · Imports — batch upload without a template". Subtitle "Actor: SimTech; Admin for large or repeated imports · Legacy pain: must download an Excel template first, no column mapping, create-vs-update radio, cryptic row icons, a two-number finalize screen".

Screens row, left to right with LF/ArrowLabel between them:

1. "Imports tab" — tab Imports selected, title "Imports". Two side-by-side stroke cards (each 460 wide, padding 20): card 1 lucide icon mail, title "Paste emails", text "For a handful of people. Opens Invite people.", Secondary button "Paste emails"; card 2 lucide icon upload, title "Upload a file", text "CSV or XLSX with an email column. Any column order — no template needed.", Primary button "Upload file". Below: label "Past imports" and an LF/Table columns: Date, File, Created, Updated, Failed; rows "2026-09-12 · bscn-fall.xlsx · 42 · 8 · 2", "2026-08-30 · staff.csv · 9 · 0 · 0", "2026-08-20 · msn.csv · 22 · 1 · 0"; on the first row a 12px text link "Undo (23 h left)".
   [drops a file]
2. "Upload" — same tab; the two cards replaced by a dashed drop zone (full width, 160px tall) containing lucide file icon and "bscn-2nd-year.xlsx · 52 rows · 6 columns"; below it a 12px label "Preview (first 3 rows)" and a small LF/Table with the raw columns as headers: "Student Email, Given, Family, Cohort, ID, Notes" and three sample rows. Primary button "Continue".
   [continues]
3. "Map columns" — title "Map columns". A two-column list of 6 rows (each row: left 200px destination field label; middle a 240px LF/Input styled as dropdown showing the matched column; right a 12px grey sample value). Rows: "Email * → Student Email · e.g. ebaker@montgom.edu", "First name → Given · Emily", "Last name → Family · Baker", "Role → (not mapped) → default: Learner", "Group → Cohort · BScN 2nd-year", "Directory ID → ID · 10023981". Below: 12px line "Ignored columns: Notes". Footer row: Secondary "Back", Primary "Review".
   [reviews]
4. "Review" — title "Review import". A row of three stroke stat tiles (each 200 wide): "42 new", "8 existing — will be updated", "2 invalid". Under it a 14px line: "People are matched by email. Existing people are updated, never duplicated." A small LF/Table "Invalid rows" columns: Row, Email, Problem; rows "17 · (empty) · Missing email", "40 · t.brown@ · Not a valid email". A checkbox row "☑ Add everyone in this file to group  [BScN 2nd-year ▾]". A stroke-only banner with lucide shield icon: "This import would deactivate 0 people. Imports that would remove more than 10 people pause for confirmation." Footer: Secondary "Back", Primary "Import 50 people".
   [imports]
5. "Result" — title "Import complete". Three stat tiles "42 created", "8 updated", "2 failed"; a 12px text link "Download error file (2 rows)"; a line "Labelled 'Import 2026-09-18' — filter the Users tab by it."; two buttons: Secondary "Undo this import", Primary "Go to Users".

Notes row stickies:
- "REF: Customer.io / Rox — upload → map (with sample values) → review with new-vs-existing counts."
- "REF: Ghost — upsert on email, batch auto-labelled 'Import <date>'. Intercom — matching rule stated up front, honest created/updated/failed."
- "REF: Microsoft Entra — quarantine mass removals: a bad file cannot silently deactivate a cohort."
- "HYPOTHESIS: no template download step. Any spreadsheet with an email column is accepted."
- "AI (optional, no evidence in research): auto-map columns; flag likely duplicates by name similarity. Annotation only, no screen."
- "DON'T BUILD: Deel's 4-stage full-screen wizard; the legacy Step 1 'download template' page."

Screenshot the artboard, fix clipping, keep greyscale.
```

---

## Prompt D — Canvas: connect and add a synced group

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "UM-D Canvas — synced groups", placed 120px below the previous UM artboard. Title "D · Canvas — connect once, add synced groups". Subtitle "Actor: Admin connects; SimTech adds synced groups · Legacy: nothing — rosters are re-typed from Canvas by hand".

Screens row, left to right with LF/ArrowLabel between them:

1. "Integrations" — tab Sign-in selected, title "Sign-in & integrations". Show only the lower section: label "Integrations" and one stroke card 600 wide: lucide plug icon, title "Canvas LMS", LF/Badge "Not connected", 12px text "Sync course rosters into groups. People are matched by email; nobody is duplicated.", Primary button "Connect Canvas" and a 12px grey line "Admin only".
   [clicks Connect Canvas]
2. "Connect Canvas" — screen dimmed behind an LF/Dialog titled "Connect Canvas". Body: LF/Input "Canvas URL" placeholder "https://canvas.montgom.edu"; Secondary button "Authorize in Canvas"; a stroke-only status row with lucide check-circle icon: "Connected as sim-center@montgom.edu · test roster call succeeded (3 courses visible)". Footer: Secondary "Cancel", Primary "Save" — add a 12px line under the footer "Save stays disabled until the test succeeds."
   [later: SimTech creates a group]
3. "New group — sync from Canvas" — Groups tab dimmed behind an LF/Dialog (640 wide) titled "New group". Body: LF/Input "Name" value "BScN 2nd-year"; radios "○ Learner cohort ● (type inherited from course)"; a highlighted (black 1px stroke, 2px) section "Sync from Canvas course" with a search input "Find a course" and a radio list of 3 courses: "● NURS 2210 — Adult Health II · 31 students", "○ NURS 2230 — Pharmacology · 44 students", "○ NURS 3010 — Leadership · 28 students"; a small row "Include: ☑ Students  ☐ Teachers". Footer: Secondary "Cancel", Primary "Preview".
   [previews]
4. "Preview matches" — dialog titled "Preview — NURS 2210". Three stat tiles: "31 learners", "27 already have accounts (matched by email)", "4 will be invited". Then a small LF/Table "Needs a decision" columns: Canvas name, Canvas email, Existing account, Action; one row "T. Brown · tbrown7@canvas.montgom.edu · tbrown@montgom.edu (Directory) · [Same person ▾]". A 12px line "An LTI user id is not a directory id — check flagged rows before creating." Footer: Secondary "Back", Primary "Create synced group".
   [creates]
5. "Synced group detail" — tab Groups, title "BScN 2nd-year" with LF/Badge "Canvas". Under the title a status row: lucide refresh-cw icon, "Last synced 5 min ago", Secondary button "Sync now". Toolbar: Secondary buttons "Download list", "Settings"; note that "Add people" and "Remove" are absent — add a 12px grey line "Membership is managed by Canvas. Add people in Canvas." Then a stroke card "Sync policy" with two toggle rows: "Add new enrolments automatically  [on]" and "Remove people automatically  [off] — people who leave the course are flagged, never removed". Then an LF/Table of members with an extra column "Canvas" showing "✓" on 4 rows and "left course" on 1 row.

Notes row stickies:
- "REF: Canvas LTI NRPS — pull the live roster and match to existing accounts, don't import a snapshot."
- "REF: Canvas docs — the duplicate-user trap: preview identifiers before matching."
- "REF: Vimeo — 'Sync' and 'Upload' are distinct verbs in the same roster header. GitHub — test before save."
- "HYPOTHESIS: system works without Canvas. Sync is additive; every group can also be local."
- "OPEN: once Courses exist, does the synced group live under the Course instead of under Groups?"
- "DON'T BUILD: one-shot roster import that creates a new account per row."

Screenshot the artboard, fix clipping, keep greyscale.
```

---

## Prompt E — Access: roles, sharing, "what can Jane access"

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "UM-E Access — roles and scope", placed 120px below the previous UM artboard. Title "E · Access — three roles, content scope, one inverse view". Subtitle "Actor: Admin (roles), Staff (sharing) · Legacy pain: 8 global roles + Custom, groups carry no privileges, no way to see what one person can actually reach".

Screens row, left to right with LF/ArrowLabel between them:

1. "Roles" — nav Settings selected, tabs replaced by breadcrumb text "Settings › People › Roles", title "Roles". Three stroke cards side by side (each 340 wide, padding 20): "Admin — everything, including sign-in setup and integrations. 2 people"; "Staff — runs events, records, grades and shares what they are assigned to or what is shared with them. 14 people"; "Learner — sees their own events, recordings and feedback. 312 people". No table, no matrix. Under the cards a 12px line: "Access to content is set on the content (event, recording, group), not on the role."
   [Admin opens a person]
2. "Change role" — Users tab with an LF/SideSheet titled "Jill Beckman"; body shows just the ROLE section: segmented control Learner | Staff (selected) | Admin, and below it a stroke banner: "Switching to Learner — Jill loses: scheduling, grading, sharing. Keeps: her own recordings and feedback." with Secondary "Cancel" and Primary "Change to Learner".
   [Staff shares a recording]
3. "Share recording" — nav Video Review selected, tabs hidden, title "Recording — NURS 2210 Sim 3 · 2026-09-16" with an LF/Dialog (600 wide) titled "Share". Body has three stacked stroke sections: "GROUPS" with a row "BScN 2nd-year  [View ▾]" and a "+ Add group" link; "PEOPLE" with rows "Helen Gibson  [Annotate ▾]", "Scott Campbell  [Download ▾]" and "+ Add person"; "LINK" with a toggle row "Anyone at montgom.edu with the link  [off]". Then a greyed row (text #6B6B6B) "Inherited from event: Masters Staff — View" with a lucide lock icon. Then a section "AVAILABLE" with two LF/Inputs side by side "From  2026-09-16" and "Until  2026-12-20" and three preset chips "End of semester · 7 days · Custom". Footer: Secondary "Cancel", Primary "Save".
   [Admin asks "what can Jane access?"]
4. "What can Jill access?" — Users tab with an LF/SideSheet titled "What can Jill Beckman access?". Body: a plain checklist of 5 rows, each with a lucide check icon, a 14px line and a 12px grey "via" line: "12 events — via Masters Staff group"; "40 recordings — via those events"; "3 recordings — shared directly (expire 2026-12-20)"; "Grading — as Staff, on events she is assigned to"; "Reports — none". Bottom: Secondary button "Export as list".
   [Admin invites a guest]
5. "Invite a guest" — Users tab dimmed behind an LF/Dialog titled "Invite a guest". Body: LF/Input "Email" value "r.brown@spmail.com"; label "Role" with one radio "● Guest — sees only what is listed below"; section "CAN SEE" with checkbox rows "☑ Event: OSCE Station 4 — 2026-10-02", "☐ Group: Sim Patients Spring 2026"; section "UNTIL" with an LF/Input "2026-10-03" and 12px text "Access ends automatically."; Footer: Secondary "Cancel", Primary "Send invite".

Notes row stickies:
- "HYPOTHESIS: 8 → 3 roles. Map the legacy roles here: Educator, Faculty, Operations Specialist, Scheduler, Simulation Designer → Staff; Simulated Patient → Guest or Learner-without-sign-in (open)."
- "REF: Gamma / Zendesk — the floor: few roles, one-line descriptions, one-click change. Twist — consequence text."
- "REF: Coda / ElevenLabs — audiences with independent levels; inherited access greyed with its source."
- "REF: Basecamp — 'What can Jane Doe access?' person-side checklist. The direct answer to the Galen lab-manager complaint."
- "REF: Frame.io / Squarespace — release and expiry dates with presets. Slack — guest role + scope + expiry on one screen."
- "DON'T BUILD: StackAI / Retool / Fresha matrices and Basic/Low/Med/High tiers."

Screenshot the artboard, fix clipping, keep greyscale.
```

---

## Prompt F — Institution sign-in: SSO, directory, recovery

```
Using the LF kit components in this file, build ONE artboard as an instance of LF/Flow named "UM-F Sign-in — SSO, directory, recovery", placed 120px below the previous UM artboard. Title "F · Institution sign-in — SSO, LDAP/AD, and the lockout fix". Subtitle "Actor: Admin (setup), Learner and Staff (sign-in, recovery) · Legacy pain: Security and Directory Access tabs that need institutional IT and vendor support; password reset only via a support call — a founding faculty member was locked out for six months".

Screens row, left to right with LF/ArrowLabel between them (this artboard has 6 screens; the last two are 640×800 half-width LF/Screen instances with the shell hidden, representing the learner's sign-in page):

1. "Sign-in overview" — tab Sign-in selected, title "Sign-in & integrations". Three stroke cards stacked (each full width, padding 20, horizontal layout: icon, text block, status badge, button): "Password sign-in — people set their own password on first sign-in and can reset it themselves." badge "On"; "Single sign-on (SAML) — people sign in with their university account. New accounts can be created at first sign-in." badge "Not set up", Secondary "Set up"; "Directory (LDAP / Active Directory) — import people and groups from the university directory and keep them in sync." badge "Not connected", Secondary "Connect". Below: label "Login policy" with three radios and a consequence line each: "● Password", "○ Password or SSO", "○ SSO only — greyed, 12px: available after a successful SSO test". Then the Canvas card from flow D, collapsed to one line.
   [clicks Set up SSO]
2. "Set up SSO" — dimmed behind an LF/Dialog (640 wide) titled "Set up single sign-on". Body: LF/Input "Identity provider metadata URL" placeholder "https://idp.montgom.edu/metadata.xml" with a 12px "or upload metadata file" link; label "When someone signs in for the first time" with radios "● Create an account as Learner" / "○ Only people who already exist can sign in"; a stroke status row: lucide play icon, Secondary button "Test sign-in", 12px "Opens a test login in a new window"; below it a greyed row "Last test: not run". Footer: Secondary "Cancel", Primary "Enable SSO" with a 12px line "Enable stays disabled until a test passes."
   [clicks Connect directory]
3. "Connect directory" — dimmed behind an LF/Dialog (720 wide) titled "Connect directory (LDAP / AD)". Body: two LF/Inputs side by side "Server" and "Bind account"; then TWO stacked stroke sections: "Import people from" with a checkbox tree "☑ OU=Students  ☑ OU=Faculty  ☐ OU=Staff  ☐ OU=Alumni"; "Create groups from" with a checkbox tree "☑ CN=BScN-2026  ☑ CN=MSN-2026  ☐ CN=All-Staff". A 12px line "People are matched by email. Directory groups appear as groups with source Directory." A stroke banner with lucide alert-triangle: "Changing these filters later can deactivate people who fall outside them. You will be asked to confirm." A stroke status row: "Preview: 356 people · 2 groups · 0 conflicts" and Secondary "Run preview". Footer: Secondary "Cancel", Primary "Connect".
   [learner opens the app]
4. "Learner sign-in" (640 wide, no shell) — centered column 360 wide: a 20px title "Sign in to LearningSpace", LF/Input "Email" value "ebaker@montgom.edu", Primary button "Continue with University sign-in", 12px link "Use a password instead". Below a divider and 12px grey "Your sim centre: Montgomery College".
   [SSO not recognised]
5. "Sign-in failure" (640 wide, no shell) — same column; under the email a stroke banner with lucide alert-circle: "This email isn't set up for university sign-in." then two Secondary buttons stacked: "Try again", "Use a password instead" and a 12px link "Contact your sim centre (sim-center@montgom.edu)". Note that retry and contact stay visible together.
   [wrong password / too many attempts]
6. "Recovery" (640 wide, no shell) — same column with a password field showing an inline error "That password didn't work." and immediately under it a Secondary button "Send me a code instead"; below a divider a second state: "Too many attempts. We sent a code to e•••@montgom.edu" with a 6-box code input and Primary "Continue". A 12px line at the bottom: "No support call needed. Admins can also send a reset link from the person panel."

Notes row stickies:
- "REF: Okta — pick user OUs and group OUs separately; state matching rules; warn that filter changes can deactivate people."
- "REF: GitHub — test SAML before Save is enabled. Homerun — login policy radios with consequence text."
- "REF: Atlassian — JIT: create accounts at first SAML sign-in as an explicit policy."
- "REF: Riverside / incident.io — explicit SSO failure with retry and contact routes kept on screen."
- "REF: Microsoft Copilot / Surfshark — code fallback instead of lockout. This is the John Carroll six-month-lockout fix."
- "HYPOTHESIS: self-service recovery is a retention feature for the most capable users, not a convenience."
- "DON'T BUILD: recovery keys (Skiff); dead-end 'link expired' pages (Sentry)."

Screenshot the artboard, fix clipping, keep greyscale.
```

---

## After all six: critique prompt (Opus)

```
Compare each UM-A … UM-F artboard in this file against the flow spec I paste below. For each artboard list: (1) screens that are missing or merged, (2) copy that contradicts the spec, (3) any place where the wireframe drifted into visual design (colour, shadows, decorative icons), (4) one thing the wireframe makes obvious that the spec did not anticipate. Do not change the file. Reply as a short table per artboard.

<paste user-manager-flow-spec.md here>
```
