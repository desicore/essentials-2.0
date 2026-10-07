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

## Out of scope

The learner's page behind the share link, scoring, the checklist editor, scheduling rules, Canvas, inventory.
