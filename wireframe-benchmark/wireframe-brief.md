# Wireframe brief — Essentials 2.0, IMSH demo (benchmark screens)

The shared brief for every wireframe run. The library changes between runs; this brief doesn't. Source: `spec/flows/IMSH-demo-story-final.md`, `spec/screens.md`, `spec/data/seed.json`.

## Product in one paragraph

Essentials is a simulation-centre platform for nursing schools: faculty schedule simulation events, record the scenario on room cameras, and debrief the learners right after. The demo follows **Dr. Maya Ortiz** (faculty) at **Riverbend College of Nursing** through one sim: dashboard → calendar and learner assignment → recording → **debrief on a tablet** (the showpiece) → report.

## Wireframe rules

- **Greyscale.** Background #FFFFFF, canvas #F4F4F4, strokes and primary text #111111, secondary text #6B6B6B, placeholders #E6E6E6. The **only** colour is recording red #D92D20 (recording dot / recording banner).
- **Build from the library.** Use instances of the library components, never hand-drawn lookalikes. Don't detach instances. Where the library has no fitting component, build a plain frame, name it `CUSTOM · <what>`, and note it in the run log.
- **Greyscale vs library colour:** if the library's variables have a neutral or grey mode, switch the frame to it. If not, keep the library's defaults and **don't override colours by hand**. Note in the run log which colours leaked in (e.g. a blue primary button). That's a benchmark finding, not something to fix.
- **Icons:** lucide. Use the icon size the library's components ship with (typically 16 px, 20 px at most on the tablet). **Never force a bigger icon into a component** (changed after run 2A: forced 24 px icons overflowed their wrappers and ended up after the labels). If the library ships its own icon set, use the lucide icon where it fits and note the mismatch.
- **Type:** the library's type styles. If none fit, Inter: 20 title / 14 body / 12 label. **Tablet too:** screen title 16–18 semibold, section headings 14 semibold, body 14, meta and timestamps 12. Don't scale type up for the tablet.
- **Accessibility:** status is never colour alone (icon + label). Tablet touch targets: use the library's **largest native control size** and don't resize instances beyond it. If that is under 44 px, log it as a finding instead of stretching the component (changed after run 2A: resizing to 44 px broke the components' inner spacing).
- **Real content only**, from the data below. No lorem ipsum, no invented features, no extra screens.
- Media (video, camera feeds) = grey placeholder rectangles with a lucide `video` icon and a label.

## Shells

- **Staff app:** 1440×900. Left navigation like the current LearningSpace Essentials layout (see the Figma page `learningspace screenshots`: keep its structure, nav position and header placement, updated with the nav items below). Top bar: institution name left, search, help, user menu "Dr. Maya Ortiz" right.
  - Nav: **Dashboard** (active) · Calendar · Recordings · Scenarios · Reports · People · *(footer)* Settings
  - Nav width: neither library has the current ~86 px icon-above-label rail. Use the library's **expanded sidebar (icon beside label, ~240–260 px)** in both runs: Astryx `SideNav` State=Expanded, shadcn built from `Item`/`Button` Ghost rows. Don't build a custom rail.
- **Debrief (tablet):** iPad landscape **1194×834**, **no left navigation**: a full-screen mode with a back button.

## Screen 1 · Dashboard (staff app, sim day: Tue 19 Jan 2027, about 09:40)

Purpose: Maya sees what's happening today and starts her sim from here.

- **Page header:** "Good morning, Maya" · date "Tuesday, January 19"
- **Today** (the most prominent block), 3 events in time order:
  - 09:00–10:00 · NURS 340 · Postpartum hemorrhage · Sim Room 3 · Group A · status **Done** · action "Open debrief"
  - **10:00–11:00 · NURS 310 · Sepsis recognition · Sim Room 2 · Group A · 5 learners** · status **Up next** · primary action **Start recording**, secondary "Open event". This is the demo's event and must stand out.
  - 13:00–14:00 · NURS 340 · Postpartum hemorrhage · Sim Room 3 · Group B · status Planned
- **Upcoming** (rest of the week):
  - Wed 20 Jan, 14:00 · NURS 310 · Medication safety · Sim Room 2 · Group A
  - Thu 21 Jan, 10:00 · NURS 340 · Pediatric asthma · Sim Room 4 · Group C
- **Recent recordings** (thumbnail placeholder, title, date, duration, status):
  - NURS 340 · Postpartum hemorrhage · Group A · Today 09:03 · 21 min · Debrief ready
  - NURS 310 · Chest pain (STEMI) · Group A · Thu 14 Jan · 22 min · Debrief ready
- **Mini calendar:** January 2027, 19th selected, dots on 14, 19, 20, 21.
- **Sim usage** (added after run 1A, card under Recent recordings): title "Simulation hours" · period "Last 12 weeks" · big number **186 h** with "+22% vs previous 12 weeks" (previous 152) · a 12-bar column chart of weekly hours **12, 14, 13, 15, 16, 14, 17, 15, 18, 16, 19, 17** (oldest → this week; axis labels only "12 wks ago" and "This week"; the last bar darker) · link "View report" → Reports. Greyscale only. Use the library's chart component if it has one; otherwise `CUSTOM · Bar chart` built from rectangles bound to library tokens. Source: `spec/data/seed.json` → reports.simulationLabUsage.

## Screen 1b · Dashboard + AI assistant (EXPLORATION, outside the IMSH demo scope)

Added 2026-10-06 after the benchmark, from Daniel's ideas. **Not part of the approved demo flow:** ad hoc recording was cut on 10-05 (SPEC.md "Ad hoc / scheduled", Q-20), and the assistant isn't in the spec yet. Build it only as separate exploration frames; the S1 Dashboard frames stay as they are.

- **Base:** a duplicate of the accepted S1 Dashboard of the same library, with all of its content.
- **Start new recording (ad hoc):** a **Secondary** button "Start new recording" (lucide `circle-dot`) at the right of the page header, across from "Good morning, Maya". Secondary, so NURS 310's "Start recording" stays the only primary action. No red, because nothing is recording yet.
- **Top bar:** an "Assistant" button (lucide `sparkles`) left of help, shown pressed/selected because the panel is open.
- **AI assistant panel (open state):** docked on the right, full height under the top bar, about 380 px wide, with a 1 px left divider. The dashboard content reflows into the remaining width (the calendar and Upcoming may stack under the main column; the frame height may grow).
  - Header: `sparkles` icon · "Assistant" · right: a "New chat" icon button (`square-pen`) and a collapse button (`panel-right-close`).
  - Conversation (newest at the bottom):
    1. Assistant: "Hi Maya. I can find things in LearningSpace for you, or do tasks like scheduling recordings or building a report." Suggestion chips: "Schedule next week's recordings" · "Generate a usage report" · "Where do I edit a checklist?"
    2. Maya: "Generate the simulation lab usage report for the last 12 weeks."
    3. Assistant: "Here's your Simulation Lab Usage report for the last 12 weeks." plus a **result card**: "Simulation Lab Usage · Last 12 weeks" · 186 h simulation (+22%) · 214 students · 1,048 learner contact hours · busiest room: Sim Room 2, 61 h · buttons "Open report" (secondary) and "Export PDF" (ghost). Source: seed.json → reports.simulationLabUsage.
    4. Maya: "Set up a recording for NURS 310 Group A next week, same room."
    5. Assistant: "I drafted this event. Check it before I add it to the calendar." plus a **draft card**: badge "Draft" · "NURS 310 · Sepsis recognition (repeat)" · Tue 26 Jan, 10:00–11:00 · Sim Room 2 · Group A · 5 learners · "Recording: on" · buttons "Add to calendar" (primary) and "Edit" (secondary). *Illustrative: next week's events aren't in the seed.* The pattern matters more than the data: **the assistant drafts, Maya confirms**, and it never acts without confirmation.
  - Composer at the bottom: a multi-line input "Ask anything or tell me what to do…", a send icon button (`arrow-up`), and under it in 12 px secondary text "The assistant can make mistakes. Check before you confirm."
- Greyscale like everything else. User messages may use the muted fill as a bubble; assistant messages sit on the plain background.

## Screen 2 · Debrief (tablet, 1194×834, 10:20, 25 s after Stop)

Purpose: Maya leads the debrief with the learners. Everything is ready within 30 seconds; nothing to set up, **no score**.

- **Header:** back arrow · "NURS 310 · Sepsis recognition" · "Group A · Sim Room 2 · Jan 19, 10:02–10:19 (17:40)" · status "Ready" (icon + label) · right: **Room display** control (segmented: Single / Dual / Quad) · primary button **Share with participants**
- **Video** (largest area): player placeholder, timeline with markers at 02:40, 04:12, 07:30, 08:50, 11:05, 12:30 (faculty vs AI markers distinguishable by icon, not colour), play/pause, ±10 s, **playback speed** (0.5× / 1× / 1.5× / 2×).
- **Side panel**, tabs or stacked sections:
  - **AI summary:** "The team took vitals early and recognized SIRS criteria within four minutes. The lactate result was mentioned but not escalated, and fluids were started before blood cultures were drawn. The SBAR handoff to the provider was clear and complete." · label "AI-generated · review before sharing" · button **Add photo of notes** (camera icon)
  - **Checklist** (yes/no, **no score, no percentage**), each item with its timestamp, tappable to jump the video:
    1. Performs hand hygiene and introduces self · Yes · 00:40
    2. Takes a full set of vital signs · Yes · 02:40
    3. Recognizes SIRS criteria · Yes · 03:30
    4. Escalates the lactate result to the provider · **No** · 04:12
    5. Starts IV fluids as ordered · Yes · 08:50
    6. Draws blood cultures before antibiotics · **No** · 09:20
    7. Uses SBAR in the handoff · Yes · 11:05
  - **AI clips** (3 cards: thumbnail, title, range, "Approve" toggle): The lactate result 03:50–04:40 · Fluids before cultures 08:30–09:30 · SBAR handoff 10:50–11:40
  - **Annotations and markers** (time · source · note): 04:12 · Maya · Discuss · Lactate result not escalated / 07:30 · Maya · Check the IV site before fluids / 11:05 · Maya · Good practice · SBAR handoff to provider / 02:40 · AI · First set of vitals taken / 08:50 · AI · Fluids started / 12:30 · AI · Provider called
- Learners for context (avatars/initials row): Emily Baker, Priya Shah, Marcus Chen, Noah Patel. Olivia Grant is absent.

## Screen 3 · Recording view, the refined SRV (staff app, 1440×900, sim day 10:10, 08:00 into the recording)

*Changed after runs 4A/4B (2026-10-07): the moment moved from 04:20 to 08:00 so two notes exist.* *Changed again after explorations E1–E3b (2026-10-07): the side panel is back to tabs, the Yes/No pairs are equal-width without icons, and the recording controls sit above the cameras with a Stop confirmation.*

Added 2026-10-07. Purpose: Maya runs the scenario. She watches the cameras, drops markers and notes, and ticks the yes/no checklist as things happen. Then she presses Stop and walks to the debrief room.

**This is a facelift of the existing SRV, not a new concept.** Look at it first: Figma page `learningspace screenshots`, frame `LS Essentials- Recording`, images `ls-essentials-recoding--recoding--single-room-view-srv` (node `126:1841`) and `…--srv-recording-setup` (node `126:1844`). Keep its structure: a focused full-screen mode with no left navigation, the camera area on the left, the transport bar (record/stop, timecode, state) under the video, and a tabbed side panel on the right. Restyle it with the library and replace the content as below.

**What changes against today's SRV:**
- **No Recording setup dialog.** Room, scenario and learners come prefilled from the event (Maya confirmed them on the Event page before pressing Start recording). They show in the header.
- **The side panel gets the checklist.** Today's panel has Annotations and Layout tabs. The new one keeps tabs (**Notes · Checklist · Chapters · Transcript**, room for more later, close to today's SRV so engineering can reuse it); camera layout moves above the video.
- **The bottom strip comes back as "Room audio"**, an **exploration layer** (see below). Sound controls are outside the approved demo scope, but audio quality and mic sensitivity are a top customer pain point, so Daniel wants it ready in case it goes into the demo as a highlight.
- **Out of this wireframe:** the contrast toggle, AI markers (AI output appears only after processing, in the debrief).

**Layout (locked, the same in both libraries):**

| Zone | Size | Content |
|---|---|---|
| Header | full width × 64 | left · centre · right, see below |
| Camera area | left, fill (about 1060 wide) | camera toolbar row (layout selector + recording controls), cameras, timeline, quick notes bar, Room audio strip (about 160 high) |
| Side panel | right, 380 wide, 1 px left divider | tabs **Notes 2** · **Checklist** (active) · Chapters · Transcript |

- **Header:**
  - Left: back arrow "Back to event" (icon button with tooltip text, or ghost button) · title **"NURS 310 · Sepsis recognition"** · meta "Sim Room 2 · Group A · Tue, Jan 19 · 10:00–11:00"
  - Right: learners: 4 initials avatars (EB, PS, MC, NP) + text "4 learners" · muted text "Olivia Grant absent"
  - **No recording controls in the header** (moved to the camera toolbar row, E3b).
- **Camera area:**
  - **Camera toolbar row** above the cameras. Left: segmented control **"1 + 2"** (selected) · "Single" · "Grid" · muted "Sim Room 2 · 3 cameras". Right: **recording state** = red dot (#D92D20, the only colour on the screen) + **"Recording"** + **"08:00"** in tabular figures · 24 px gap · secondary **"Pause"** (`pause`) · primary **"Stop recording"** (`square`, the library's dark button, **not red**). Why here: the cameras separate Stop from the note input (the most-used target), so a misclick under stress can't end the recording.
  - **Stop always asks first** (SPEC §7.4; an event has only one recording): a state frame "Stop confirmation" with a 40 % overlay and a dialog, about 440 wide: "Stop the recording?" · "This ends the recording for NURS 310 · Sepsis recognition. The debrief will be ready on the tablet in about 30 seconds." · "Keep recording" (secondary, default focus) · "Stop recording" (primary). Pause needs no dialog (resumes as the same recording, CAP-07).
  - **Cameras in the "1 + 2" layout:** Camera 1 large (about two thirds of the width), Camera 2 and Camera 3 stacked on the right. Grey placeholders with a lucide `video` icon and the label ("Camera 1", "Camera 2", "Camera 3"). Camera 1 is the selected camera (1 px darker border) and has a small overlay toolbar at its bottom-right: **"Preset"** dropdown button, zoom in (`zoom-in`), zoom out (`zoom-out`), full screen (`maximize`). Camera 2 and 3 show only their label.
  - **Timeline** under the cameras, full width of the camera area:
    - A live progress track for the planned 20-minute scenario (08:00 of 20:00 filled). **Two markers on the track: 04:12 (lucide `message-circle`, Discuss) and 07:30 (lucide `sticky-note`, note)**, each an icon above the track, a tick on it and the time below, built like the accepted Debrief timeline: the marker sits on the track, not above it.
    - Left of the track: **"08:00 / 20:00"** (tabular figures). Right: muted "Planned 20 min".
  - **Quick notes bar** under the timeline: a text input "Add a note at 08:00…" (fills the width) · then three secondary buttons with icons: **"Discuss"** (`message-circle`) · **"Good practice"** (`thumbs-up`) · **"Marker"** (`flag`). Each button drops a marker at the current time; the input adds a note to it.
- **Room audio strip (EXPLORATION, outside the approved demo scope):** at the bottom of the camera area, full width, 1 px top divider. Build it as **one frame named "EXPLORATION · Room audio"**, and give the cameras fill height, so hiding this one layer gives the screen back to the cameras for the approved demo. Visual reference for the controls: audiocn.dev (shadcn audio components: fader, level meter, knob, channel toggle, mixer). Neither Figma kit has these, so they will be `CUSTOM ·` frames; keep them greyscale (meters in greys, the loudest segments darker, **no green/yellow/red**). Four groups left to right, separated by vertical dividers, each with a 12 px group label and icon:
  1. **Intercom** (`mic`): talk-to segmented control **"In-room"** (selected) · "Facilitator" · a large round **push-to-talk** button (`mic`, label "Hold to talk") · an "Announcements" select with a play icon button (`play`).
  2. **Simulator voice** (`audio-lines`): switch **"Voice modulator"** (on) · select **"Adult male · low"** (other presets would be Adult female, Older adult, Child) · a small **Pitch** knob showing "-3". Applies to In-room talk, so the learners hear "the patient", not Maya.
  3. **Microphones** (`sliders-horizontal`): three compact channel rows, each: name · mute toggle icon button (all three are live, so it shows `mic`; `mic-off` would mean muted) · a horizontal live level meter · a gain slider · value in tabular figures. **"Bed mic · +6 dB"**, **"Room mic · 0 dB"**, **"Manikin · -3 dB"**. A small text button "Auto gain" at the group header right.
  4. **Send to screen** (`monitor`): two outputs, each a select: "Patient monitor" · "No decoder added to room" (disabled look, as in today's SRV).
  - Mic names and presets are **illustrative** (they aren't in `seed.json`); fine for an exploration layer.
- **Side panel · tabs:** **"Notes 2"** (the count shows a new note landed without switching tabs) · **"Checklist"** (active) · "Chapters" · "Transcript". Chapters and Transcript are labels only, no content. The Layout tab of today's SRV is gone (the layout selector is above the cameras).
- **Checklist tab (active):**
  - Heading "Sepsis recognition checklist" · muted "Yes / no · no score" · counter "4 of 7 answered" (count of answered items, **not** a score or a percentage)
  - 7 rows, each: number · item text with **"Answered 00:40"** under it (muted 12 px; nothing when unanswered) · the Yes/No pair **flush right**:
    1. Performs hand hygiene and introduces self · **Yes** · 00:40
    2. Takes a full set of vital signs · **Yes** · 02:40
    3. Recognizes SIRS criteria · **Yes** · 03:30
    4. Escalates the lactate result to the provider · **No** · 04:12
    5. Starts IV fluids as ordered · (unanswered)
    6. Draws blood cultures before antibiotics · (unanswered)
    7. Uses SBAR in the handoff · (unanswered)
  - **The Yes/No pair:** two buttons of **equal, fixed width**, **no icons**, the same size selected or not, all 14 forming one straight column at the panel's right padding. Selected = a **solid dark fill** (primary/default button); unselected = outline/secondary. A subtle selected state (e.g. a raised white segment on a grey track) is not enough: answered and unanswered rows must differ at a glance. Dividers between rows, no cards.
- **Notes tab (not active in this frame; content for when it's opened):**
  - Header: "Notes and markers" · muted count "2".
  - A flat list in time order, **newest at the top** (the one Maya just added is where her eye is). Each row: time in tabular figures · the type as icon + label · the note text · a "more" icon button (`ellipsis`, for edit/delete):
    - 07:30 · Note (`sticky-note`) · "Check the IV site before fluids"
    - 04:12 · Discuss (`message-circle`) · "Lactate result not escalated"
  - Under the last row, muted 12 px: "Notes added here appear on the debrief timeline."
  - The same items are the markers on the timeline; the list is the readable version of them.

Source: `spec/data/seed.json` → events `e-nurs310-sepsis` (afterStep4), scenarios `sepsis-recognition`, recordings `r-nurs310-sepsis` (markers m-1, checklistResults), rooms `sim-2`. Spec rules used: SPEC §7.1 (the state label only says "Recording" once confirmed), §7.4, §7.10.

## Screen 4 · Calendar (staff app, 1440×900, planning day: Tue 12 Jan 2027, 14:00) · frame S2a

Added 2026-10-07. Flow step 2. Purpose: a week before the sim, Maya opens next week in the calendar and sees that her NURS 310 event has no learners yet. Clicking it opens Edit event. **Don't look at the current LearningSpace calendar ("Your Events") for this screen**: it's the known pain point, and the layout should be new.

**Shell:** copy the sidebar and top bar from the accepted S1 Dashboard frame on the same page. **Calendar** is the active nav item.

**Layout (locked, the same in both libraries):**

| Zone | Content |
|---|---|
| Page header (one row) | left: title **"Calendar"** · right: "New event" (secondary, `plus`; not part of the flow, there so the page looks complete) |
| Toolbar (one row) | left: "Today" (secondary) · prev/next icon buttons (`chevron-left` / `chevron-right`) · **"Jan 18 – 22, 2027"** · right: room filter select **"All rooms"** · switch **"Only my events"** (off) · view segmented control "Day" · **"Week"** (selected) · "Month" |
| Notice (one row, only because something needs attention) | `user-x` icon + **"1 of your events next week has no learners assigned."** + link button "Assign learners" (opens the same Edit event) |
| Week grid | fills the rest. 5 day columns **Mon 18 · Tue 19 · Wed 20 · Thu 21 · Fri 22** (work week; weekends hidden). Time gutter on the left, **08:00 to 16:00**, one row per hour, thin hour lines. |

**Event blocks** (placed by time; height = duration; each block shows course · scenario, time, room · group, and the faculty in 12 px):
- **Tue 19, 09:00–09:40** · NURS 340 · Postpartum hemorrhage · Sim Room 3 · Group A · Sam Keller
- **Tue 19, 10:00–11:00 · NURS 310 · Sepsis recognition · Sim Room 2 · Group A · Dr. Maya Ortiz.** The demo event. It carries a badge **"No learners"** (`user-x` icon + label, neutral/outline badge, never colour alone) and is shown in the **hover state** (darker 1 px border + the pointer over it), because Maya is about to click it.
- **Tue 19, 13:00–13:40** · NURS 340 · Postpartum hemorrhage · Sim Room 3 · Group B · Sam Keller
- **Wed 20, 14:00–14:45** · NURS 310 · Medication safety · Sim Room 2 · Group A · Tom Reyes
- **Thu 21, 10:00–10:30** · NURS 340 · Pediatric asthma · Sim Room 4 · Group C · Sam Keller
- Mon 18 and Fri 22 are empty.

Maya's own events have a slightly stronger fill (the muted fill) than the others (plain background + border), and a small `user` icon before her name. Short blocks (30–40 min) may drop the group/faculty line; they never shrink the type below 12 px.

Source: `spec/data/seed.json` → `events` (all five in that week), `rooms`, `groups`, `users`. The planning date comes from `_meta.dates`.

## Screen 5 · Edit event: learner assignment (staff app, 1440×900, same afternoon) · frame S2b

Added 2026-10-07. Flow step 3. Purpose: Maya assigns Group A to the event and checks the time and room. **Learner assignment is the focus of the screen** (scope.md). Learners are assigned to the event; there are no rotations.

**Shell:** the same as S2a, **Calendar** active.

**Layout (locked, the same in both libraries):**

| Zone | Content |
|---|---|
| Page header | breadcrumb "Calendar / NURS 310 · Sepsis recognition" · title **"Edit event"** · right: "Cancel" (secondary) · **"Save event"** (primary) · muted "Unsaved changes" left of the buttons |
| Left column, about 480 wide | **Event details** |
| Right column, fills the rest | **Learners** (the focus) |

**Event details (left), as a plain form, label above field:**
- Course: **NURS 310 · Adult Health II** (read-only text)
- Scenario: select **"Sepsis recognition"** · helper "20 min · checklist with 7 items"
- Date: **Tue, Jan 19, 2027** (date picker field) · Time: **10:00** – **11:00** (two time fields)
- Room: select **"Sim Room 2 · Med-surg · 3 cameras"** · under it a muted line with `circle-check` icon: "Sim Room 2 is free at this time"
- Faculty: **Dr. Maya Ortiz** (select)
- Simulator: **Adult high-fidelity manikin** (read-only text, from the room)
- A collapsed "More options" row (`chevron-down`), nothing inside it shown (SPEC rule 8)

**Learners (right):**
- Header: **"Learners"** · muted counter **"5 assigned"**
- An "Assign a group" row: select showing **"Group A · NURS 310 · 5 learners"** + secondary button **"Assign group"**. Under it, muted: "Assigning a group adds all its members. You can untick anyone later, also on the day."
- A search field **"Add a learner by name or email"** (`search`), for someone outside the group.
- The list, flat rows with dividers (no cards), each: initials avatar · name · email (muted) · a remove icon button (`x`, tooltip "Remove from event"). **No checkboxes** here: being in the list means assigned. Ticking someone off as absent happens on the day, on Event (today). *(Changed after 5A/5B: checkbox + remove were two controls for one thing.)*
  - Emily Baker · ebaker@student.riverbend.edu
  - Priya Shah · pshah@student.riverbend.edu
  - Marcus Chen · mchen@student.riverbend.edu
  - Olivia Grant · ogrant@student.riverbend.edu
  - Noah Patel · npatel@student.riverbend.edu
- Under the list, muted 12 px with `info` icon: "On the day, the learners come prefilled when you start the recording."

Source: `spec/data/seed.json` → events `e-nurs310-sepsis` (`afterStep3`), groups `nurs310-grp-a`, participants, courses `nurs310`, scenarios `sepsis-recognition`, rooms `sim-2`, resources `manikin-adult-2`. Decisions: Event is the UI word (Q-26) and learners are assigned to the event, not to rotations (Q-27), both 2026-10-05.

## Screen 6 · Simulation Lab Usage (staff app, 1440×900, sim day Tue 19 Jan 2027, 15:00) · frame S6

Added 2026-10-08, metrics updated the same day. Flow step 11. Purpose: back at her desk, Maya opens the usage report that management keeps asking for, checks the last 12 weeks against last year, and exports it.

**Which metrics, and why:** the 09-29 nursing school survey (13 responses, Q5 "Which metrics do you collect or would you like to collect?"). Ranked: Total simulation hours 12 · Students in simulation 11 · Room usage 10 · Learner contact hours 10 · Simulator usage 9 · Types of sessions 9 · **Faculty contact hours 5** · Other 2 ("room usage per activity / programme", "anything SSH requires"). The report shows the top seven, in roughly that order, and **every school can show or hide each one** (frame S6c), because no school wanted all of them. **Don't look at any existing Reports screen** (current product or the other track): the layout should be new.

**Shell:** copy the sidebar and top bar from the accepted S1 Dashboard frame on the same page. **Reports** is the active nav item.

**Layout (locked, the same in both libraries):**

| Zone | Content |
|---|---|
| Page header (one row) | left: title **"Simulation Lab Usage"** · muted subtitle "Riverbend College of Nursing · all rooms" · right: **"Customize"** (secondary, `sliders-horizontal`) · **"Schedule weekly report"** (secondary, `calendar-clock`) · **"Export"** (primary, `download`) |
| Filter bar (one row) | left: period segmented control **"12 weeks"** (selected) · "Quarter" · "Year to date" · muted range text **"Oct 26, 2026 – Jan 17, 2027"** · right: switch **"Compare with same period last year"** (**on**) *(idea: Gabor, 10-07 checkpoint)* |
| KPI row | 4 equal tiles (below) |
| Chart row 1 | **Simulation hours per week**, full width |
| Chart row 2 | 3 equal cards: **Room usage** · **Simulator usage** · **Types of sessions** |

The page may scroll; let the frame grow in height rather than squeezing the charts.

**KPI tiles** (label 12 px muted · value as the largest number on the page · comparison line 12 px). The switch is on, so each tile shows the comparison as an icon + text, **never colour alone**:
- **Total simulation hours** · **186 h** · `trending-up` "+22% vs 152 h last year"
- **Students in simulation** · **214** · `trending-up` "+14% vs 188 last year"
- **Learner contact hours** · **1,048 h** · `trending-up` "+20% vs 874 h last year" · `info` tooltip trigger "0.25 h per learner per event"
- **Faculty contact hours** · **262 h** · `trending-up` "+19% vs 221 h last year" · `info` tooltip trigger "Faculty time in simulation events, including debrief" (definition assumed: Q-29)

Under the KPI row, muted 12 px: "Compared with Oct 27, 2025 – Jan 18, 2026." The comparison appears **only on the tiles**; the charts show this period only. (Gabor's reason for a single switch: comparing everything with everything makes the interface too complex.)

**Charts** (greyscale: bars #111111, gridlines #E6E6E6, labels 12 px #6B6B6B; values written on or next to each bar so nothing depends on reading the axis):
- **Simulation hours per week:** vertical bars, 12 weeks, x labels are the week's Monday: Oct 26 · Nov 2 · Nov 9 · Nov 16 · Nov 23 · Nov 30 · Dec 7 · Dec 14 · Dec 21 · Dec 28 · Jan 4 · Jan 11. Values: 12 · 14 · 13 · 15 · 16 · 14 · 17 · 15 · 18 · 16 · 19 · 17. Y axis 0–20 h.
- **Room usage** (hours, horizontal bars, sorted high → low): Sim Room 2 · 61 · Sim Room 1 · 58 · Sim Room 3 · 39 · Sim Room 4 · 28
- **Simulator usage** (hours, horizontal bars): Adult high-fidelity manikin 2 · 55 · Adult high-fidelity manikin 1 · 52 · Birthing simulator · 36 · Pediatric manikin (5-year-old) · 24 · IV training arm · 18
- **Types of sessions** (number of events, horizontal bars, not a pie: a pie needs colour to read): High-fidelity · 96 · Task trainer · 41 · Standardized patient · 27 · Hybrid · 10. Card footer muted: "174 events".

Each chart card has a title row with a small ghost icon button `ellipsis` (lucide renamed `more-horizontal`) on the right (its menu: "Export chart" · "Hide from report"). No legends needed (one series each).

Source: `spec/data/seed.json` → `reports.simulationLabUsage["12 weeks"]` (the `previous` values are shown as **same period last year**), `rooms`, `resources`. Contact-hour unit: Q-23.

## Screen 6c · Customize the report (over S6) · frame S6c

Added 2026-10-08. Purpose: each school measures different things (survey Q5), so Maya chooses which metrics the report shows.

**Frame:** duplicate S6 and open a popover anchored under **"Customize"**, about 320 wide. In this state Maya has just **unticked "Faculty contact hours"**, so behind the popover the KPI row already shows **3 tiles** (the remaining tiles stretch to fill the row; no empty gap).

**Popover content:**
- Title **"Show on this report"**
- Group **"Key numbers"** (checkboxes): ☑ Total simulation hours · ☑ Students in simulation · ☑ Learner contact hours · ☐ Faculty contact hours
- Group **"Charts"** (checkboxes): ☑ Simulation hours per week · ☑ Room usage · ☑ Simulator usage · ☑ Types of sessions
- Footer: link button **"Reset to default"** · muted 12 px "Saved for you. Scheduled reports use the same choice."

Rules: at least one metric stays ticked (the last checkbox can't be unticked). A hidden chart card leaves no gap: the row reflows (2 cards fill the width).

## Screen 6b · Weekly report dialog (over S6) · frame S6b

Added 2026-10-08. Flow step 12. Purpose: Maya sets the report to arrive in management's inbox every Monday.

**Frame:** duplicate S6, dim it with the library's overlay/scrim, and open a centred dialog (about 520 wide).

**Dialog content, top to bottom:**
- Title **"Schedule weekly report"** · muted description "Simulation Lab Usage is emailed to these people every week." · close icon button (`x`)
- **Report:** read-only text "Simulation Lab Usage · last 12 weeks · with comparison to last year · 7 metrics"
- **Send every:** select **"Monday"** · **at:** time field **"08:00"** (one row, two fields)
- **Recipients:** a tag/chip input with two chips, each with a remove `x`: **dwhitfield@riverbend.edu** · **dean.nursing@riverbend.edu**, then the placeholder "Add an email address"
- Footer, right-aligned: **"Cancel"** (secondary) · **"Schedule"** (primary)

Source: `seed.json` → `reportSchedules[0]`. Dana Whitfield is the sim centre coordinator; the second address is the dean's office.

## Screen 7 · Recording banner (staff app, 1440×900, sim day 10:10, 08:00 into the recording) · frames S7a, S7b

Added 2026-10-08. Flow steps 5–6, global element (`spec/screens.md` → Global elements, SPEC §7 rule 1). Purpose: while Sim Room 2 records, Maya can leave the Recording view and still see, from anywhere in the app, that the room is recording and stop it.

**S7a · Banner in context:** duplicate the accepted S1 Dashboard frame. Add the banner as a **full-width strip above the top bar** (it pushes the shell down; it doesn't cover content). Change nothing else on the dashboard.

**Banner content, left to right (one row, about 48 px high):**
- Recording dot **#D92D20** (the brief's only colour) + state label **"Recording"** (dot and label together: the state is never colour alone)
- **"Sim Room 2 · NURS 310 · Sepsis recognition"**
- Elapsed time **"08:00"** (tabular figures)
- Right: link-style button **"Open recording view"** · secondary button **"Pause"** (`pause`) · button **"Stop"** (`square`). Stop opens the same confirmation as the Recording view (not drawn here).

The banner background stays neutral (light grey surface + 1 px bottom divider), not red: only the dot carries the colour.

**S7b · The six states:** one frame, 1440 wide, height as needed. Stack the banner in each state with a 12 px label above it ("State: …"). SPEC §7 rule 1: the UI never shows "Recording" or "Paused" on a click alone.
| State | Left | Elapsed | Buttons |
|---|---|---|---|
| Starting… | spinner + "Starting…" | "00:00" muted | Pause and Stop disabled |
| Recording | red dot + "Recording" | "08:00" | Open recording view · Pause · Stop |
| Pausing… | spinner + "Pausing…" | "08:00" | all disabled |
| Paused | `pause` icon (grey, no red) + "Paused" | "08:00" frozen, with muted "Paused at 10:10" | Open recording view · **Resume** (`play`) · Stop |
| Stopping… | spinner + "Stopping…" | "17:40" | all disabled |
| Not recording | no banner: show an empty 12 px label "Not recording · no banner" | — | — |

A pause and resume stays one recording (CAP-07), so Resume continues the same elapsed time.

## Screen 8 · Photo of notes (tablet, 1194×834, sim day 10:31) · frames S8a, S8b, S8c

Added 2026-10-08. Flow step 9. Purpose: after the debrief conversation, Maya photographs her handwritten notes; the AI reads them and adds them to the summary. Starts from **Add photo of notes** in the Debrief's AI summary.

**S8a · Capture:** full-screen camera view on the tablet, no navigation.
- Top bar: ghost button **"Cancel"** (`x`) · title **"Photo of notes"** · nothing on the right
- Camera area (largest): grey placeholder with a lucide `camera` icon and the label "Camera view: Maya's handwritten notes on a clipboard". A thin guide rectangle (1 px dashed) shows where the page should sit.
- Hint under the camera area, 14 px: **"Hold the page flat and fill the frame."**
- Bottom centre: shutter button, the largest native button size (`camera` icon, label "Take photo")

**S8b · Review:**
- Same top bar, title **"Check the photo"**
- The captured photo: grey placeholder with a `file-text` icon and the label "Photo: Maya's notes, 1 page"
- Muted 14 px under it: **"The AI reads your notes and adds them to the summary. The photo stays with this recording."**
- Bottom, right-aligned: secondary **"Retake"** (`rotate-ccw`) · primary **"Use photo"** (`check`)

**S8c · Summary updated:** duplicate the accepted S4 Debrief frame and change **only the AI summary** section:
- Summary text = seed `aiSummary.afterNotePhoto`: "The team took vitals early and recognized SIRS criteria within four minutes. The lactate result was mentioned but not escalated, and fluids were started before blood cultures were drawn. The SBAR handoff to the provider was clear and complete. **From Maya's notes:** discuss closed-loop communication, and who owns the escalation when the nurse is busy."
- The added sentence is marked without colour: a small Neutral badge **"From your notes"** with a `pencil-line` icon before it.
- Under the text, a source row: a 48 px thumbnail placeholder of the photo · "Photo of notes · 10:31" · ghost icon button `trash-2` ("Remove photo").
- The label "AI-generated · review before sharing" stays. **Add photo of notes** becomes **"Add another photo"**.

Source: `seed.json` → `recordings[r-nurs310-sepsis].notePhotos`, `.aiSummary`.

## Screen 9 · Share with participants (tablet, 1194×834, sim day 10:35) · frames S9a, S9b

Added 2026-10-08. Flow step 10. Purpose: Maya picks what the learners get, and sending it approves the AI items she ticked (Q-28). Opens from **Share with participants** in the Debrief header. The page the learner opens is out of scope.

**Frame:** duplicate the S8c Debrief frame (the summary already includes Maya's notes), dim it with an overlay, and open a **right-side sheet**, full height, about 480 wide. Astryx's Figma kit has no Sheet or Dialog: build the container as `CUSTOM · Sheet` (reuse how the S3 Stop confirmation dialog was built on this page if it fits) and use Astryx parts inside it.

**S9a · Sheet content, top to bottom:**
- Title **"Share with participants"** · close icon button (`x`)
- **Learners** · muted "From the event" · 4 rows (Avatar initials + name + email): Emily Baker · ebaker@student.riverbend.edu / Priya Shah · pshah@student.riverbend.edu / Marcus Chen · mchen@student.riverbend.edu / Noah Patel · npatel@student.riverbend.edu. Under them, muted 12 px: "Olivia Grant was absent and isn't included." · link button **"Add"**
- **What to share** (one checkbox per item, label + muted detail):
  - ☑ Video recording · "17:40"
  - ☑ Annotations and markers · "6 · private notes are never shared" *(private/shared idea: Gabor, 10-07 checkpoint)*
  - ☑ Checklist results · "7 items, yes/no, no score"
  - ☑ Debrief notes · "Photo of notes, 10:31"
  - ☑ AI summary · Neutral badge **"AI"** (`sparkles`)
  - AI clips, each its own checkbox with the badge **"AI"** and its range: ☑ The lactate result · 03:50–04:40 / ☐ Fluids before cultures · 08:30–09:30 / ☑ SBAR handoff · 10:50–11:40
  - Under the AI items, 12 px with an `info` icon: **"Sharing an AI item approves it. Unticked AI items stay private."** *(per-item choice: idea from Gabor, 10-07 checkpoint; settles Q-28)*
- **Link** row: `link` icon · "Secure link, opens in the browser without logging in" · muted "Expires Feb 2, 2027 (14 days)" (Q-24)
- **"More options"** collapsed (EXP-05: expiry and download rights live here, not drawn open)
- Footer, right-aligned: secondary **"Cancel"** · primary **"Share with 4 learners"** (`send`)

**S9b · Shared:** same sheet after sending.
- `circle-check` icon + title **"Shared with 4 learners"**
- The 4 learner rows, each with a Neutral badge `mail-check` **"Sent"** (icon + label)
- Muted summary: "Video, annotations, checklist, debrief notes, AI summary and 2 AI clips · expires Feb 2, 2027"
- Secondary **"Copy link"** (`copy`) · primary **"Done"**

Source: `seed.json` → `recordings[r-nurs310-sepsis].share` (recipients, expiresAt), `participants`, event `afterStep4` (Olivia Grant absent).

## Out of scope

The learner's page behind the share link, scoring, the checklist editor, scheduling rules, Canvas, inventory.
