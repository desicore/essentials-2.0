# 10-14 · New screens: multi-room recording, recording feedback, Settings, People, Excel import

Decisions agreed with Daniel on 10-14 (chat). Five Cursor prompts, **one Cursor chat each**. Recommended order: **P2 → P1 → P3 → P4 → P5** (P2 is the IMSH must-have; P5's People entry reuses P4's list).

| Prompt | What | Figma page | Frames |
|---|---|---|---|
| P1 | Center overview + multi-room recording (side step after step 3) | **Wireframe** (288:19165) | 3a–3g |
| P2 | "How was the recording?" (IMSH step 6b/6c) + "Report a problem" link | **Wireframe** (288:19165) | 6b, 6c |
| P3 | Settings, reorganised, auto-save | **NEXT · explorations** (202:8898) | S1–S7 |
| P4 | People (user manager) | **NEXT · explorations** (202:8898) | U1–U5 |
| P5 | Import from Excel (events + people, one pattern) | **NEXT · explorations** (202:8898) | I1–I5 |

> Note: the Wireframe link in the 10-14 chat (node 288-19166) points at the **UI** page. The prompts target **Wireframe (288:19165)**, where step 3 lives.

## Decisions (10-14)

**Multi-room recording**
- Entry: sidebar **Recordings** → top-right **Center overview** button (mirrors today's "Go to Center Overview" in the Recording module). A tile click opens that room's recording view.
- Start: tick room tiles → sticky bar "Record 3 rooms" → one setup sheet; each room is matched to today's event, or "Ad hoc" if none → one **Start** for all.
- Stop: **each room stops on its own from its tile** on Center overview, plus **Stop all** (with confirmation, "Keep recording" as the default, same as step 6).
- Banner: 1 recording = today's banner unchanged. 2+ = "● 3 rooms recording · Manage ▾" → dropdown, one row per room (timer, Open, Pause, Stop), **Stop all** at the bottom.
- Placement: Daniel asked for "after step 3". Built as a **branch row directly under step 3** (labels 3a–3g), not inline: inline would push steps 4–17 ~11,000 px right and make a side step read like a main IMSH step. To put it inline instead, change P1's layout line.

**Recording feedback (IMSH)**
- New step **6b** right after Stop on the desktop; it fills the "debrief ready in ~30 s" wait. 1–5 stars; at ≤3, Audio / Video / App performance chips + optional comment. Skippable.
- Demo asks every time; the real product samples (annotation only). "Report a problem" link in the recording view.
- Consent line: "Sent to Elevate with technical logs, no video."

**Settings**
- Admin-only (as today). Auto-save with "Saved · Undo"; **explicit confirm** for risky changes; **explicit Apply** for changes that restart a service.
- 10 tabs → 6 groups (mapping below). Ehli AI stays (under Integrations). Downloads leaves Settings (→ Help menu).
- User manager is **People**, a separate module (agreed 10-12). People takes archive UM-A (users), UM-B (groups), UM-E (roles). UM-F (sign-in) moves into Settings › Sign-in & security.

**Import**
- One pattern (Upload → Map columns → Review → Done), two entry points: **Calendar › Import events** and **People › Import**. Built in Astryx with UM-C (53:4 on 🚫 wireframe archive) as reference only. Review flags fixed inline: unknown group, room double-booking, unknown scenario; roles set inline for people. Excel/CSV only (no Outlook/ICS).

## Settings: how to simplify (recommendations)

1. **Group by the admin's job, not by the device driver.** Six groups replace ten tabs; each group is one scrollable page with section headings, label left / control right, max ~720 px wide.
2. **Rooms are the hub.** Today: add cameras on Cameras, simulators on Simulators, then attach them in a Room pop-up with fixed slots #1–#9. New: devices are detected and listed as **Unassigned**; you assign them *inside the room*. Camera and speaker settings live on the room's camera row. Intercom announcements live in the room's audio section.
3. **Auto-save, with three honest exceptions.** Today the save model is already inconsistent (one Save covers all tabs, but email templates save on dropdown change, pop-ups have their own Save, SMTP has Save & Test). New: everything auto-saves, except
   - *risky* (confirm dialog that states the consequence): LDAP/directory, certificate removal (breaks intercom), recording auto-delete, deleting a room/device;
   - *restart* (explicit Apply): time zone (system reset), transcription (runs a health check, may refuse);
   - *test-first* (Test & save): SMTP, LDAP connection.
4. **Search settings** at the top of Settings home; most admins arrive looking for one field.
5. **Say what a setting does in one line under its label** instead of info-icon tooltips.
6. **Kill the dead weight:** Downloads → Help menu; the system password stops being shown in plain text (masked, reveal on click); "Activity types" opens its own editor, not a button in a form.
7. **Toggle that enables fields shows the fields only when on** (calendar API, LDAP login, LDAP sync), instead of greyed-out fields.

### Old tab → new group

| Today (tab · field) | New home |
|---|---|
| General · Institution name, Demo users, Activity types, QR code label size | **Organization** |
| Local Settings · language, region/city, Set Time zone, date/time/first-day formats, currency | **Organization › Language & region** (time zone = Apply + restart warning) |
| General · Delete recordings older than…, System Storage Details | **Recordings & privacy › Storage & retention** (auto-delete = confirm) |
| Local Settings · Enable Transcription | **Recordings & privacy › Transcription** (Apply + health check) |
| General · Show SP names / simulator names on video review, Disable Privacy Mode for SPs, Placard autoscroll | **Recordings & privacy › Video review & privacy** |
| Security · certificates, system password | **Sign-in & security › Certificates** (remove = confirm, warns about intercom) |
| Directory Access (LDAP servers, login, sync) | **Sign-in & security › Directory (LDAP / SSO)** (Test & save) |
| General · password change every N days, at first login, forgotten-password message for LDAP users, cookie-based station authorization | **Sign-in & security › Passwords & stations** |
| Emails · sender addresses, templates, SMTP | **Email** (SMTP = Test & save) |
| Rooms, Cameras, Simulators (+ wireless bridges), Intercom announcements | **Rooms & devices** (room detail holds its cameras, audio/intercom, simulator, screens, push-buttons) |
| General · External Calendar sync interval + API endpoint; Ehli AI | **Integrations** |
| Downloads · Log Uploader, Sim Workstation Utility | **Help menu** (not Settings) |

Field inventory with KB provenance: `db-llm-second-brain/tehran/.context/ls-essentials-settings-inventory.md` (Claude's workspace; not needed by Cursor).

---

## Shared rules A · for P1 and P2 (Wireframe page)

```
Load the figma-use skill first. File: Essentials 2.0 - wireframes (maOZqRuLdksiPwUA43qSVI).
TARGET = page "Wireframe" (288:19165). Frames sit directly on the page in ONE row: frames at y=128, their 24 px text labels "Label · <#> · <Screen>" at y=32, 160 px gaps. Do not touch the Section "IMSH storyboard" (310:32501).
Never edit an existing Wireframe frame unless this prompt says so. Build new frames by cloning an existing Wireframe frame (node.clone()) and editing the clone.
Use ONLY the Astryx library, Neutral Light, greyscale (recording red is the one exception). Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md.
Naming: "<#> · <Screen>", no version suffix. One frame per screen state.
SHELL: every desktop frame keeps the TopNav + SideNav exactly as in the frame you cloned; only change the active nav item. Never rebuild the shell.
Copy: sentence case, plain English, same demo world (Riverbend College of Nursing, Dr. Maya Ortiz, January 2027, NURS 310/340, Sim Room 1–4).
Delete duplicated Dev Mode annotations on every clone.
```

## Shared rules B · for P3, P4, P5 (NEXT page)

```
Load the figma-use skill first. File: Essentials 2.0 - wireframes (maOZqRuLdksiPwUA43qSVI).
TARGET = page "NEXT · explorations" (202:8898). SOURCE pages "Wireframe" (288:19165), "🚫 wireframe archive" (0:1) and "learningspace screenshots" (70:3) are READ-ONLY: clone what you need and append the clone to the target section; never edit or move anything on a source page.
Use ONLY the Astryx library, Neutral Light, greyscale. Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md.
SHELL: start every desktop frame from a clone of "4 · Dashboard (sim day)" (290:20528): keep TopNav + SideNav, replace only the "Content" frame. Set the right nav item active (People, Calendar, or the Settings item at the bottom of the SideNav). Never rebuild the shell. Frames 1440×900; grow the height if the content needs it.
Naming: "<#> · <Screen>", no version suffix. One frame per screen state.
Layout: one Section per module (name given in the prompt). Frames in ONE horizontal row, top-aligned, 160 px gaps, 24 px text label "<#> · <Screen>" 96 px above each frame. Sections stacked vertically on the page, 400 px apart, in the order P3, P4, P5 (find the bottom of the last existing Section; start at x=0, y=0 if the page is empty).
Copy: sentence case, plain English, same demo world (Riverbend College of Nursing, Dr. Maya Ortiz, January 2027, NURS 310/340, Sim Room 1–4).
Delete duplicated Dev Mode annotations on every clone.
```

---

## P2 · "How was the recording?" (IMSH 6b, 6c) — Wireframe page

```
<Shared rules A>
LAYOUT: insert two frames between "6 · Stop confirmation" (x=11280) and "7 · Debriefs list (iPad)" (x=12880). First move EVERY top-level frame and text label on the page with x >= 12880 (and y >= 0) right by 3200 px, keeping their y. Then place 6b at x=12880 and 6c at x=14480, labels at y=32.

6b · How was the recording?: clone "6 · Stop confirmation" (290:22703). Remove the stop dialog. The recording has ended: replace the "● Recording 08:00" pill with a neutral "Stopped · 20:00" pill; remove Pause / Stop recording; timeline playhead at the end. Under the recording header, a muted inline status "Preparing the debrief… ready in about 30 seconds" with a small spinner.
Modal Dialog (480 px), centred, same scrim as step 6:
 - Title "How was the recording?" · subtitle 14 px muted "Your answer helps us improve LearningSpace."
 - Row of 5 star IconButtons (40 px, outline stars, none selected), under it two 12 px muted labels "Poor" (left) and "Excellent" (right).
 - 12 px muted footnote: "Sent to Elevate with technical logs, no video."
 - Footer: ghost Button "Skip" (left), primary Button "Send" (right, disabled until a star is picked).

6c · Recording feedback, details: clone 6b. Stars 1–2 filled (dark), 3–5 outline. The dialog grows (max 640 px tall, body scrolls if needed) and shows:
 - Heading 14 px semibold "What went wrong?" + 12 px muted "Pick anything that applies."
 - Three groups, each a 12 px muted uppercase label + a wrap of selectable Chips/Tags (selected = dark fill, white text):
   AUDIO: "Echo" (selected) · "Too quiet" · "Noise or static" · "Out of sync" · "Mic dropped out"
   VIDEO: "Frozen camera" (selected) · "Blurry" · "Camera missing" · "Lagging"
   APP PERFORMANCE: "Slow to respond" · "Controls froze" · "Crashed" · "Something else"
 - Textarea "Anything else? (optional)", 3 lines, placeholder "e.g. Camera 2 froze around 04:00".
 - Checkbox (ticked) "Include technical logs (no video or audio)".
 - Same footnote and footer; "Send" enabled.
 - Dev Mode annotation on the dialog: "Demo asks after every recording. Product: ask after ~1 in 5 recordings, always ask after a recording that had a device error. Chips appear only at 3 stars or fewer."

"Report a problem": in frames "4b · Participants popover", "5 · Recording view" and "6 · Stop confirmation" (these three are the ONLY existing frames you may edit), add a small ghost Button with a flag/alert icon, "Report a problem", at the right end of the SRV's own header row (the row with Back to event / title / avatars), left of the avatar stack, 12 px. Same position in all three. Also present (identical) in 6b/6c behind the scrim.

Screenshot 6b, 6c and one of frame 5 header. Reply in under 6 lines.
```

## P1 · Center overview + multi-room recording (3a–3g) — Wireframe page

```
<Shared rules A>
LAYOUT: a branch row UNDER step 3. Frames at y=1700, labels at y=1604, first frame at x=3280 (under "3 · Edit event"), then 160 px gaps to the right. Draw one 2 px #444 elbow arrow from the bottom of "3 · Edit event" down to 3a, and a 20 px muted text at x=3280, y=1540: "Side step · Maya checks the rooms (and multi-room recording)". Do not move any existing frame.
Demo date for the whole row: Mon Jan 12 (same as frame 1). Rooms: Sim Room 1, Sim Room 2, Sim Room 3, Sim Room 4. Today's events = the ones on "1 · Dashboard (week before)"'s Today list; a room with no event today is "Free today".
Live camera feeds: clone the camera image nodes from "5 · Recording view" (Camera 1, Camera 2, …) and reuse their image fills, varying the crop per room. Never fetch new images.

3a · Recordings: clone "1 · Dashboard (week before)" (290:19153); SideNav "Recordings" active. Content: page title "Recordings" + muted "All recordings at Riverbend". Header actions top-right: secondary Button with grid icon "Center overview", primary Button with video icon "New recording". Below: search Input + Select "All rooms" + Select "Last 30 days", then a Table: Recording (title + group) · Room · Date · Length · Status Badge ("Debrief ready", "Shared"), 6 rows reusing the dashboard's NURS 340/310 recordings.

3b · Center overview: clone 3a, keep "Recordings" active. Breadcrumb "Recordings / Center overview". Title "Center overview" + muted "4 rooms · all cameras live". Header right: secondary Button "Select rooms", SegmentedControl "2×2 | 3×3" (2×2 selected).
2×2 grid of room Cards filling the content area. Each card: header row = room name (14 px semibold) + muted next event ("10:00 · NURS 340 · Postpartum hemorrhage" or "Free today") + small ghost IconButton "Open room" (arrow); body = 16:9 live feed with a small "LIVE" tag top-left and "Camera 1 of 3" bottom-right; footer row 12 px muted = "3 cameras · 2 mics · Simulator connected" with a small neutral check icon. Whole card is clickable → that room's recording view (annotation).

3c · Rooms selected: clone 3b. Selection mode is on: a Checkbox in the top-left of every card header; Sim Room 1, 3 and 4 ticked (2 px dark border on the selected cards). "Select rooms" Button becomes "Cancel selection". Sticky action bar pinned to the bottom of the content area (full content width, 64 px, elevated): left "3 rooms selected" + ghost "Clear"; right primary Button with a red record dot "Record 3 rooms".

3d · Record 3 rooms (setup sheet): clone 3c. Right-side Sheet (480 px) over a scrim. Title "Record 3 rooms" + muted "Each room records on its own. You can stop them one by one."
One block per room (divider between): room name 14 px semibold + "3 cameras" muted; Select "Event" prefilled with the matched event (e.g. "NURS 340 · Postpartum hemorrhage · Group A · 10:00") with a 12 px muted "Matched from today's calendar"; for the room with no event the Select reads "Ad hoc recording" with 12 px muted "Add learners during or after the recording."
Footer: ghost "Cancel", primary Button with red dot "Start 3 recordings".

3e · Center overview, 3 recording: clone 3b (selection mode off). Add the MULTI banner above the TopNav (copy the banner bar from "5+ · Recording banner" 290:22105 and change it): red dot + "3 rooms recording" + muted "longest 02:14" + ghost Button "Manage" with chevron-down; right side: secondary "Center overview" link and ghost destructive "Stop all". Frame height +48 (as 5+).
Recording cards (Sim Room 1, 3, 4): red "● REC 02:14" pill top-left of the feed instead of "LIVE"; card header actions = ghost IconButton "Pause" + secondary small Button "Stop" (per-room stop). Sim Room 2 stays as in 3b. Page header right: ghost destructive Button "Stop all (3)" replaces "Select rooms".

3f · Banner, manage recordings: clone "1 · Dashboard (week before)" (290:19153) and add the same MULTI banner as 3e (frame height +48). "Manage" is open: a Popover/DropdownMenu (420 px) anchored under it. Title "Recording now · 3". One row per room: red dot · room name + event (12 px muted) · mono timer "02:14" · ghost "Open" · IconButton "Pause" · small secondary "Stop". Divider, then a full-width ghost destructive Button "Stop all 3 recordings" and a ghost "Open center overview".

3g · Stop all confirmation: clone 3e. Modal Dialog (copy the structure of the dialog in "6 · Stop confirmation"): title "Stop all 3 recordings?"; body "This ends the recordings in Sim Room 1, Sim Room 3 and Sim Room 4. Each debrief will be ready in about 30 seconds."; buttons "Keep recording" (default focus, secondary) and "Stop all 3" (primary). Same as step 6, "Keep recording" is the safe default.

Screenshot each frame. Reply in under 6 lines; say which existing nodes you cloned from.
```

## P3 · Settings (S1–S7) — NEXT page

```
<Shared rules B>
Section name: "Settings". Reference (read-only): today's screens in "Ls Essentials - settings page" (310:32513) on "learningspace screenshots". The mapping from today's 10 tabs to the 6 new groups is the table "Old tab → new group" in @wireframe-benchmark/reviews/10-14-next-screens.md — follow it.
SideNav: the "Settings" item at the bottom is active in every frame. Settings is admin-only (annotation on S1).
SUBPAGE LAYOUT (S2–S5, S7): inside Content, a left secondary nav (220 px) listing the 6 groups with icons — Organization · Rooms & devices · Recordings & privacy · Sign-in & security · Email · Integrations — the current one active; a "Search settings" Input above that list. Right: page title + one-line description, then sections (14 px semibold heading + 12 px muted description), rows = label (+ 12 px muted one-line help under it) on the left, control on the right, content max 720 px. No Save button anywhere: each control auto-saves.

S1 · Settings home: Content = title "Settings" + muted "Changes save automatically." + large "Search settings" Input (480 px). Below, a 3×2 grid of Cards, one per group: icon, title, one-line description, then 3 muted links to its most-used items:
 Organization — "Name, language and region, demo users" — Institution name · Time zone · Demo users
 Rooms & devices — "Rooms, cameras, microphones, simulators, intercom" — Rooms · Unassigned devices (3) · Intercom announcements
 Recordings & privacy — "Storage, retention, transcription, what learners see" — Storage · Auto-delete · Transcription
 Sign-in & security — "Passwords, directory (LDAP/SSO), certificates" — Directory · Password rules · Certificates
 Email — "Sender addresses, templates, mail server" — Templates · Mail server
 Integrations — "Calendar feed, Ehli AI" — Calendar feed · Ehli AI
 Annotation: "Admin only. Downloads (Log Uploader, Sim Workstation Utility) moved to the Help menu."

S2 · Organization (shows auto-save): sections
 - Institution: "Institution name" Input = "Riverbend College of Nursing" — just edited: inline 12 px muted "✓ Saved" right of the field. Toast bottom-left: "Institution name saved" + ghost "Undo".
 - Language and region: Language Select "English (US)"; Region Select "United States · Columbus"; Time zone Select "America/New_York" with a small secondary "Apply…" Button next to it and 12 px help "Changing the time zone restarts the system."; Date format, Time format, First day of week, Currency Selects.
 - Demo users: help text "For training only. Activates all demo users for today with one shared password; they switch off overnight." + secondary Button "Activate demo users for today".
 - Activity types: row "Activity types" + "5 types" muted + ghost "Edit" (opens its own editor).
 - Printing: "QR code label size" Select.

S3 · Rooms & devices: title + "Rooms hold their own cameras, microphones and simulator." Primary "Add room" top-right.
 Callout/Alert (neutral) at top: "3 devices found on the network aren't in a room yet." + secondary "Assign" — under it a compact list: "Axis P5655 camera · 10.0.4.21", "Speaker unit (DAK) · 10.0.4.30", "SimMan 3G Plus".
 Table of rooms: Room · Cameras ("3") · Audio ("2 mics · intercom") · Simulator ("SimMan 3G Plus" / "—") · Status Badge ("Ready" / "1 camera offline") · chevron. 4 rows, Sim Room 1–4; Sim Room 4 "1 camera offline".

S4 · Room detail · Sim Room 2: breadcrumb "Rooms & devices / Sim Room 2". Header: room name (inline-editable look) + "Ready" Badge + ghost "Open live view". Sections:
 - Cameras: a reorderable list (drag handles; order = order in the recording view), each row = 96 px 16:9 thumbnail (clone a camera image fill) + "Camera 1 · PTZ · Axis Q6075" + status "Live". Camera 1 row is EXPANDED inline showing its settings (replaces today's camera pop-up): Video size Select "1920×1080 (16:9)", Quality Select "High", Audio source Select "Bed mic", Mic gain Slider, White balance Select "Auto", Switch "Image upside down", ghost destructive "Remove from room". Below the list: ghost "+ Add camera" (opens the unassigned devices picker).
 - Audio and intercom: "Intercom device" Select, "Second intercom device" Select, "Announcements" row "4 announcements" + ghost "Manage".
 - Simulator: Select "SimMan 3G Plus · connected"; "Simlog station" Select.
 - Screens: "Send to screen" targets: two Selects "Patient monitor", "Room TV".
 - Push-buttons: "Record button" Select (speaker unit), "Privacy button" Select, 12 px help "One speaker unit can drive either the record or the privacy button."
 - Danger zone: outlined block, "Delete room" + help "Recordings stay; the room's devices go back to Unassigned." + destructive secondary Button "Delete room…".

S5 · Sign-in & security (shows test-first + confirm): sections
 - Sign-in method: SegmentedControl "Passwords | Directory (LDAP) | Both" = Directory.
 - Directory (LDAP): list of servers with status Badge ("dc1.riverbend.edu · Connected"), ghost "Add server". "Sign in with" Switch on → its fields shown (Base DN, User filter). "Sync users and groups" Switch on → field mapping rows (First name, Last name, Email, Username, Group, Directory ID) each as "Directory attribute" Input → Essentials field.
   The "User filter" Input has been edited: instead of auto-saving, a pinned inline bar under the section: "Directory changes aren't saved yet. Test them first so no one gets locked out." + ghost "Discard" + primary "Test and save".
 - Passwords and stations: Switch "Ask for a new password at first sign-in"; "Password expires after" Input "90" days (0 = never); Textarea "Forgotten-password message for directory users"; Switch "Remember stations by cookie" + help.
 - Certificates: Card "HTTPS certificate · issued by Riverbend CA · expires 3 Mar 2028" + secondary "Replace…" + ghost destructive "Remove…" with help "Removing it turns off the intercom (the microphone needs HTTPS)."
 - System password: masked "••••••••••" + ghost "Reveal" (today it's shown in plain text).

S6 · Save states (spec board, no shell): frame 1440 wide, title "Settings · how saving works" 32 px. Four columns, each a label + a small row mock (label left, control right):
 1. Auto-save (most settings): idle → "Saving…" (spinner) → "✓ Saved" (fades after 2 s) → error "Couldn't save. Retry" (icon + text) ; and the "Saved · Undo" toast.
 2. Confirm (risky): Dialog "Turn on auto-delete?" body "Recordings older than 90 days will be deleted tonight: 214 recordings. This can't be undone." Buttons "Cancel" / destructive "Turn on auto-delete". Caption: "Used for: auto-delete, certificate removal, deleting rooms or devices, LDAP sign-in method."
 3. Apply (restarts a service): Dialog "Change the time zone?" body "LearningSpace restarts to apply it. Recordings in progress will stop." Buttons "Cancel" / "Apply tonight at 02:00" / "Apply now". Caption: "Used for: time zone, transcription (runs a health check first)."
 4. Test and save: the inline bar from S5 + a result state "✓ Connection works. Saved." Caption: "Used for: LDAP / directory, mail server (SMTP)."

S7 · Recordings & privacy: sections
 - Storage and retention: usage bar "2.1 TB of 4 TB used" + ghost "Storage details"; RadioGroup "Keep recordings" = "Forever" / "Delete after [ 90 ] days" (selecting the second opens S6 col. 2 confirm; annotate).
 - Transcription: Switch "Transcribe recordings" (off) + help "New recordings only. Turning it on runs a quick service check." + secondary "Turn on…".
 - Video review and privacy: Switches "Show simulated patient names", "Show simulator names", "Privacy mode for simulated patients" (on), "Auto-scroll placards".

Screenshot each frame. Reply in under 6 lines.
```

## P4 · People (U1–U5) — NEXT page

```
<Shared rules B>
Section name: "People". SideNav "People" active. Read-only references on "🚫 wireframe archive": "UM-A Users – invite, edit, deactivate" (51:4), "UM-B Groups – create, manage, archive" (52:4), "UM-E Access – roles and scope" (55:4). Read their "Notes" rows (REF / HYPOTHESIS / DON'T BUILD) and follow them. Rebuild in Astryx with the shell; do NOT clone archive screens.
Roles: 3 roles only — Admin, Staff, Learner. Status: Invited → Active → Deactivated. Staff never set passwords.
Page header for U1, U4, U5: title "People" + muted "214 people · 12 groups"; Tabs "People | Groups | Roles"; header right: secondary "Import" (with upload icon) + primary "Invite people".

U1 · People: Tabs = People. Toolbar: search Input "Name or email", Selects "All roles", "All groups", "All statuses". Table: Checkbox · Person (Avatar + name + email muted) · Role (inline SegmentedControl-looking Select: Admin/Staff/Learner) · Groups (Tags, "+1") · Status Badge · Last active. 10 rows: Maya Ortiz (Staff), Olivia Grant / Ethan Brooks / Priya Shah / Marcus Chen / Nora Patel (Learner, NURS 310 · Group A), one "Invited" row, one "Deactivated" row (muted). Bulk bar when rows ticked is NOT shown here.

U2 · Invite people: clone U1, modal Dialog (560 px): title "Invite people"; Textarea "Emails" with 3 pasted addresses on separate lines + 12 px muted "Paste one or a hundred. Separated by commas or new lines."; resulting chip list "3 people" ; SegmentedControl "Role" = Learner (Admin / Staff / Learner) with 12 px consequence text "Learners only see recordings shared with them."; Select "Add to group" = "NURS 310 · Group A"; footnote "They'll get an email to set up their account."; footer ghost "Cancel", primary "Invite 3 people".

U3 · Person · Olivia Grant: clone U1, right Sheet (480 px): Avatar + name + email + Status Badge "Active"; Role SegmentedControl (Learner); Groups (Tags + ghost "Add to group"); "Recordings" row "6 recordings · 4 shared"; "Sign-in" row "Directory (LDAP) · last sign-in 2 days ago"; bottom: ghost destructive "Deactivate…" with 12 px help "Loses access. Their recordings and checklist results stay."

U4 · Groups: Tabs = Groups. Primary "New group" replaces "Invite people". Table: Group · Course · Members (avatar stack + count) · Source Badge ("Manual", "Import 2027-01-12", "Directory") · Last used. 6 rows (NURS 310 · Group A/B, NURS 340 · Group A/B/C, Faculty).

U5 · Roles: Tabs = Roles. Three Cards side by side (Admin · 3 people, Staff · 18, Learner · 193): each with a short "Can" list (4 bullets) and "Can't" list (2 bullets) in plain language, e.g. Staff "Can: run recordings and debriefs; manage their courses' events; share recordings with learners; see reports for their courses" / "Can't: change Settings; see other staff's unshared recordings". Under the cards, 12 px muted note: "What staff can touch is set by their courses, not by extra roles." No per-user permission grid.

Screenshot each frame. Reply in under 6 lines.
```

## P5 · Import from Excel (I1–I5) — NEXT page

```
<Shared rules B>
Section name: "Import from Excel". One pattern, two entry points. Read-only reference: "UM-C Imports – upload, map, review" (53:4) on "🚫 wireframe archive" and its Notes row. DON'T BUILD: a template download step, a full-screen 4-step wizard. Any Excel/CSV with recognisable columns works. Excel/CSV only.
Pattern = a page inside the shell with breadcrumb + a small 3-step indicator "Upload · Map columns · Review" (not a wizard chrome).

I1 · Calendar · Import events (upload): clone "2 · Calendar" (290:19724) from the Wireframe page, SideNav "Calendar" active. Add a secondary Button "Import" (upload icon) to the calendar header, shown pressed. Replace the calendar body with: breadcrumb "Calendar / Import events"; step indicator at "Upload"; large dashed drop zone "Drop an Excel or CSV file here" + secondary "Choose file" + 12 px muted "Any column order. No template needed."; under it "We look for:" Tags Date · Start · End · Room · Course · Scenario · Group · Facilitator; then "Past imports" Table (File · Date · Created · Updated · Failed, 2 rows).

I2 · Import events · Map columns: same page, step "Map columns". File chip "spring-sim-schedule.xlsx · 48 rows · 8 columns" + ghost "Change file". Table with columns: Column in your file · Sample values (muted, 2 values) · Essentials field (Select). Rows: "Sim date" → Date; "From" → Start; "To" → End; "Lab" → Room; "Course code" → Course; "Case" → Scenario; "Cohort" → Group; "Notes" → "Don't import". Each auto-mapped Select has a 12 px muted "Matched automatically"; "Notes" has none. Footer: ghost "Back", primary "Review 48 events".

I3 · Import events · Review: same page, step "Review". Summary row of 3 stat Cards: "44 ready" · "3 need a decision" · "1 will be skipped". Then "Needs a decision" list, each item = row number + problem sentence + an inline fix control:
 - Row 12 · "Group 'BSN 2nd yr B' doesn't exist." → Select "Use existing: NURS 310 · Group B" (options also "Create group 'BSN 2nd yr B'").
 - Row 18 · "Sim Room 3 is already booked Tue 26 Jan, 10:00–11:00 (NURS 340 · Group A)." → SegmentedControl "Move to Sim Room 4 | Keep both | Skip row" = Move to Sim Room 4.
 - Row 31 · "Scenario 'Sepsis v2' not found." → Select "Use: Sepsis recognition" (option "Import without a scenario").
 - Skipped: "Row 40 · no date" (muted).
 Below: a collapsed "Preview all 48 events" Accordion. Footer: ghost "Back", primary "Import 47 events" + 12 px muted "You can undo the whole import afterwards."

I4 · Import events · Done: clone 2 · Calendar again with the week of Jan 26 showing several new events, each with a small "Imported" Tag; Toast/Alert at the top of the calendar: "47 events imported · 0 failed. Labelled 'Import 2027-01-12'." + ghost "Filter by this import" + ghost "Undo import".

I5 · People · Import · Review: start from a clone of "U1 · People" if Section "People" exists on this page, otherwise from the shell with "People" active. Breadcrumb "People / Import"; step "Review"; file chip "bscn-spring-cohort.xlsx · 52 rows". Stat Cards: "42 new" · "8 already here, will be updated" · "2 need a decision". Matching rule line: "People are matched by email. Existing people are updated, never duplicated."
 Table preview (6 rows) with an inline Role Select per row (Learner default) — 3 rows where the file says "Instructor" show the Select empty with a 12 px warning "Pick a role" → choose Staff; a bulk ghost Button "Set all 'Instructor' to Staff". Checkbox "Add everyone in this file to group" + Select "NURS 310 · Group C". Guard line: "This import deactivates 0 people. Imports that would deactivate more than 10 people pause for confirmation." Footer: ghost "Back", primary "Import 52 people".
 Annotation: "Same Upload → Map columns → Review pattern as Calendar › Import events (I1–I3)."

Screenshot each frame. Reply in under 6 lines.
```

## After these run

- Send Claude the Wireframe and NEXT links for review.
- The IMSH final-board prompt (10-12 file, "Later") needs two additions before it runs: hotspots 6b "★★" + "Send", 6c "Send"; and decide whether the 3a–3g side branch goes on the final board.
