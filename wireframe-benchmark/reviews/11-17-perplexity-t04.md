# 11-17 · Perplexity Computer: add the T04 screens (Live capture, AV & Anywhere)

Follow-up prompt for the prototype built with `11-16-perplexity-test2.md` (core shell + Live module). It adds the smallest set of T04 screens that tells the story end to end. The prompt to paste is the code block under "Prompt". Everything above it is for Daniel.

## For Daniel (English)

### How to run

1. Open the same Perplexity task that built "Live recording prototype" (test 2). Paste the prompt. Attach nothing: Perplexity reads the frames through its Figma access.
2. The prompt has three parts (A shell, B recording flow, C room AV). Perplexity runs them in order and reports after each. If time is short in the workshop, stop it after Part B: the recording story already works then.
3. Click through in the preview. Share only inside Elevate. Do not press Publish, do not make a pplx.app link, do not deploy to Vercel, do not put it in Git. It is an exploration prototype.

Test 2 has run in Perplexity (confirmed by Daniel on 11-17), so this is purely a follow-up in the same task. The build I checked on 11-16 still has the top bar, because the test 2 prompt was written before the Figma shell changed. Part A removes it. If you already sent the shell follow-up, Part A finds nothing to do and skips.

### The T04 frames (collected from the topic tags in Figma, not guessed)

32 frames carry the tag T04 on the page "🧭 One app · merge [D]" (`1749:8314`): L2, L3, L3b, L3d, L3c, L4, L8, L9, L10, L10b, L11, L8f, L8g, B1, B2, V1 to V7, V9 to V16, L3e, L2b. (V8 is tagged T06 only.)

Used by the prompt: 18 frames. 5 are already built (4 T04 frames plus "Shell · Page", which is tagged T01 and is needed for the shell change), 13 are new. Link form: `https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=<id>`

| Frame | Node id | Link id | Status |
|---|---|---|---|
| Shell · Page | `1749:8657` | 1749-8657 | built, shell changes in Part A |
| L2 · Live | `1752:9232` | 1752-9232 | built |
| L3 · Start recording | `1752:18339` | 1752-18339 | built |
| L3c · 3 rooms recording | `1752:38638` | 1752-38638 | built |
| L4 · Room view | `1752:40197` | 1752-40197 | built |
| L3b · Rooms selected | `1752:32581` | 1752-32581 | new, Part B |
| L3d · Record 3 rooms | `1752:36878` | 1752-36878 | new, Part B |
| L3e · Live, stop all | `1799:23903` | 1799-23903 | new, Part B |
| V1 · Room view, ready to record | `1799:21249` | 1799-21249 | new, Part B |
| V6 · Room view, stop confirmation | `1799:28639` | 1799-28639 | new, Part B |
| V7 · Room view, stopped | `1799:28803` | 1799-28803 | new, Part B |
| B1 · Today, recording banner | `1767:16449` | 1767-16449 | new, Part B (banner only) |
| B2 · Today, 3 rooms recording | `1767:17142` | 1767-17142 | new, Part B (banner only) |
| L8 · Room, AV tab | `1752:19374` | 1752-19374 | new, Part C |
| L8f · Room, add a device | `1799:37735` | 1799-37735 | new, Part C |
| L8g · Room, device added | `1799:40286` | 1799-40286 | new, Part C |
| L9 · Camera, opened from a room | `1752:33497` | 1752-33497 | new, Part C |
| L10 · Simulators & Equipment | `1752:34999` | 1752-34999 | new, Part C |

### Left out, and why

- **V2 Layout & audio, V3 annotations, V4 checklist, V5 intercom in use:** states inside the room view. The checklist already works. The others add depth, not story.
- **V9 to V16** (chapters, transcript, tab menu, collapsed panels, no intercom, a camera stops, report a problem): edge states. V9 and V10 also belong to T10, V15 to T05.
- **L10b (Audio tab) and L11 (Microphone):** the same pattern as L10 and L9. The Audio tab still filters the list from data.
- **L2b (event in two rooms):** needs the Today flow of T03.
- **The Today calendar inside B1 and B2:** tagged T01. Only the banner is built; Today stays a placeholder page.
- **L8b (Room, Details tab):** T05. The tab is visible and shows a placeholder.

### "Anywhere"

Nothing is drawn for it. I searched every text on the page: the only hit is the topic title itself. The closest thing is a device: the "360 camera" (kind "Portable camera", "No room") in L10, L8f and L8g, which can be added to a room. There is no screen for recording outside a fixed room, so the prompt builds none. If the workshop asks about it, the honest answer is "not designed yet".

### Decisions I made that Figma does not answer (change them if you disagree)

1. **Where V1 (ready to record) opens from.** I wired it to "Start recording" on the room page (L8). The Live sheet still starts the recording at once, as in test 2.
2. **The global banner** shows on every normal page except Live (Live has its own banner) and never in the room view.
3. **"Stop" on one Live card** stops at once. Only "Stop all" and "Stop recording" in the room view ask for confirmation, because only those are drawn.
4. **Camera tiles:** V1 shows four tiles for Sim Room 2, L4 and V6 show three, the data says two cameras. The prompt keeps the three-tile layout everywhere.
5. **Figma wins on texts this time.** In test 2 the prompt carried every text and lost against a changed frame (the top bar). Now the frame is the source for layout and texts, and the prompt is the source for behaviour and scope.

### Open questions for you

- Is entry point 1 right, or should V1 open from the event on Today (T03)?
- Should a single "Stop" on Live also ask for confirmation?
- Menu label: the frame says "Live/Capture" today. The prompt takes whatever the frame says at build time.

## Danielnek (magyarul)

### Futtatás

1. Nyisd meg ugyanazt a Perplexity feladatot, amelyik a „Live recording prototype"-ot építette (2. teszt). Másold be a promptot. Csatolni nem kell semmit, a frame-eket a Figma hozzáférésén át olvassa.
2. A prompt három részből áll (A shell, B felvételi folyam, C szoba AV). Sorban futtatja őket, és mindegyik után jelent. Ha a workshopon kevés az idő, a B rész után állítsd meg: a felvételi történet akkor már működik.
3. Kattints végig az előnézetben. Megosztás csak az Elevate-en belül. Nincs Publish, nincs pplx.app link, nincs Vercel, nincs Git. Ez felfedező prototípus.

A 2. teszt lefutott a Perplexityben (Daniel megerősítette 11-17-én), tehát ez tisztán folytatás ugyanabban a feladatban. A 11-16-án megnézett buildben még van felső sáv, mert a 2. teszt promptja a Figma shell változása előtt készült. Az A rész eltávolítja. Ha a shell-javító promptot már elküldted, az A rész nem talál tennivalót, és továbblép.

### A T04 frame-ek (a Figma témacímkéiből gyűjtve, nem találgatva)

32 frame-en van T04 címke: L2, L3, L3b, L3d, L3c, L4, L8, L9, L10, L10b, L11, L8f, L8g, B1, B2, V1–V7, V9–V16, L3e, L2b. (A V8 csak T06.)

A prompt 18 frame-et használ: 5 már megépült (4 T04 frame és a „Shell · Page", ami T01 címkés, de a shell-cseréhez kell), 13 új. A pontos lista node id-kkal és linkekkel az angol rész táblázatában van.

### Mi maradt ki, és miért

- **V2, V3, V4, V5:** a room view belső állapotai. A checklist már működik, a többi mélységet ad, nem történetet.
- **V9–V16:** szélső állapotok; a V9 és V10 a T10-hez, a V15 a T05-höz is tartozik.
- **L10b és L11:** ugyanaz a minta, mint az L10 és az L9. Az Audio fül így is szűr az adatból.
- **L2b:** a T03 Today folyamata kell hozzá.
- **A Today naptár a B1 és B2 frame-ben:** T01. Csak a banner épül meg, a Today helykitöltő oldal marad.
- **L8b (Details fül):** T05. A fül látszik, helykitöltőt mutat.

### „Anywhere"

Nincs rá semmi megrajzolva. Az oldal összes szövegében kerestem: az egyetlen találat maga a témacím. A legközelebbi dolog egy eszköz: a „360 camera" („Portable camera", „No room") az L10, L8f és L8g frame-ben, amit szobához lehet adni. Fix szobán kívüli felvételre nincs képernyő, ezért a prompt sem épít ilyet. Ha a workshopon rákérdeznek, a válasz: még nincs megtervezve.

### Amit én döntöttem el, mert a Figma nem ad rá választ

1. **Honnan nyílik a V1 (ready to record).** A szobaoldal (L8) „Start recording" gombjára kötöttem. A Live sheet továbbra is azonnal indítja a felvételt.
2. **A globális banner** minden normál oldalon látszik, kivéve a Live-ot (annak saját bannere van), és a room view-ban soha.
3. **Egy kártya „Stop" gombja a Live-on** azonnal leállít. Megerősítést csak a „Stop all" és a room view „Stop recording" kér, mert csak ezek vannak megrajzolva.
4. **Kameracsempék:** a V1 négy csempét mutat, az L4 és a V6 hármat, az adat szerint két kamera van. A prompt mindenhol a háromcsempés elrendezést tartja.
5. **Most a Figma nyer a szövegekben.** A 2. tesztben a prompt vitte a szövegeket, és alulmaradt egy megváltozott frame-mel szemben (felső sáv). Most a frame az elrendezés és a szövegek forrása, a prompt a viselkedésé és a terjedelemé.

### Nyitott kérdések

- Jó az 1. belépési pont, vagy a V1 a Today eseményéből nyíljon (T03)?
- Kérjen megerősítést a Live-on az egyes „Stop" is?
- Menüfelirat: a frame ma „Live/Capture"-t mutat. A prompt azt veszi át, ami építéskor a frame-ben van.

## Prompt

Paste everything in the block into the task that built the prototype. Nothing to attach.

```
Continue the prototype you built in this task ("Live recording prototype": core/ + modules/live/). Add the screens below. Read all of this before you start.

GOAL
The prototype shows one story for a workshop: staff see the rooms, start a recording in one room or in several rooms, watch the room, stop the recording, and check or change the cameras and audio of a room.
You already built: the Live page, the Start recording sheet, the Room view while recording.
Now add: A. the new shell. B. the rest of the recording flow. C. the room's AV pages.

RULES THAT STAY (same as before)
- Plain HTML, CSS and JavaScript. No framework, no build step, classic <script src> tags, no type="module", no import, export or fetch. It must run in your preview and from disk by a double-click on index.html.
- Same structure: core/ (tokens, components, shell, data, state) and modules/. Every screen is built only from core components. No raw button, a, nav, select, input or dialog element in modules/. No colour, font-size or radius value outside tokens.css. No sample data string outside core/data/.
- No network request. No analytics.
- Greyscale. Colour only in status badges, the record and stop controls, and the red recording dot.
- No photos. The frames show photos in camera tiles. Use the grey "Live picture" placeholder.
- Desktop only, 1440 × 900 design size. English UI.
- These words never appear in the UI: "OpSpace", "SRV", "Center overview", "Video review", "Dashboard". "Essentials" appears only in the logo.
- This is an exploration prototype. Do not publish it. No pplx.app link, no Vercel, no other deploy, no Git repository. Do not offer these as next steps. I share it inside my company myself.

WHAT IS DIFFERENT THIS TIME
- Figma is the source for layout, sizes and every UI text. Open each frame link before you build its screen. Copy the texts from the frame exactly.
- This prompt is the source for scope and behaviour: what is clickable and what happens.
- If you cannot open a frame, stop and tell me. Do not build that screen from guesswork.
- If a frame shows something this prompt does not mention, build how it looks and make it do nothing. List it in REPORT.md.
- Do not rebuild what works. Change existing files only where a part says so.
- You may add new core components and new data files. You must not change how an existing core component behaves for the screens that already use it. If you must, say why in REPORT.md.

Figma file: IMSH-MVP. Link form: https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=<id>

Work in the order A, B, C. After each part: run its check list, fix what fails, and write three lines in the chat (what you built, what failed, what you left open). Then start the next part.

PART A · SHELL WITHOUT A TOP BAR
Frames:
- Shell · Page  https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1749-8657
- L4 · Room view (for the rail)  https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-40197
If core/shell/top-bar.js does not exist any more, skip Part A and say so.
Otherwise:
- Remove the top bar everywhere. Delete core/shell/top-bar.js and top-bar.css and their tags in index.html.
- Side navigation, expanded (260 px, full height), top to bottom as in the frame: logo and institution name; a search field (placeholder "Search", visual only: the user can type, nothing happens); the nav groups; a footer with "Help" (does nothing) and "Settings"; then a separate user row (avatar "MO", "Dr. Maya Ortiz", chevron down, does nothing).
- Side navigation, rail (48 px): the 11 nav icons; at the bottom the Settings icon, the avatar "MO" and the expand chevron (does nothing). No logo, no search, no Help.
- Take every menu label from the frame. The item after the heading "Sessions" may read "Live/Capture". Use what the frame says. Its route stays /live and the page title stays "Live".
- AppShell: side navigation plus content, no top bar. Keep one empty slot above the whole app, full width, for the global banner of Part B.
- RoomViewShell: rail plus content, no top bar. The room view is now 1440 × 900 and its header row starts at the top of the page.
- Change only files in core/shell, core/data/nav.js, tokens.css and index.html. If a file in modules/ needs a change for Part A, tell me which and why before you change it.
Check list A:
1. No screen has a top bar. The string "top-bar" appears in no file.
2. Logo, institution, search, Help, Settings and the user row are inside the side navigation and match the frame.
3. The old click path still works: Live → Start recording → Room view → back → Stop all.
4. Files changed in modules/ for Part A: none, or listed with a reason.

PART B · THE RECORDING FLOW
New core components you will need (build each once, in core/components): Dialog (centred, dim layer, title, close button, body text, two footer buttons; closes on the close button, on Escape and on the secondary button), Checkbox, Breadcrumb.

B1. L3b · Rooms selected
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-32581
Shows: the Live page in selection mode. Room cards with cameras have a checkbox. Selected cards have a 2 px border. A bar at the bottom of the content shows the count, "Clear" and "Record 3 rooms".
This is the same Live page with other state. Do not build a second page.
Behaviour:
- "Select rooms" on Live turns selection mode on. The header then shows only "Cancel selection".
- In selection mode a click on a card or its checkbox selects or deselects that room. Debrief Room 1 has no cameras: no checkbox, cannot be selected. A room that is recording cannot be selected.
- The bar appears when at least one room is selected. The count and the button label follow the selection ("1 room selected", "Record 1 room").
- "Clear" deselects all. "Cancel selection" leaves selection mode.
- The record button in the bar opens the sheet of B2.

B2. L3d · Record 3 rooms
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-36878
Shows: a side sheet over the Live page, one block per selected room, each with an "Event" select and a hint line.
Behaviour:
- One block per selected room, in the order of the Live page.
- A room that has an event next today is prefilled with that event (Sim Room 2: the 10:00 event) and shows the "Matched from today's calendar" hint from the frame. Every other room shows "Ad hoc recording" and the other hint from the frame.
- The Event select lists "Ad hoc recording" and today's events. Changing it changes the hint.
- "Cancel" and the close button close the sheet. The selection stays.
- The start button ("Start 3 recordings", the number follows the selection) starts a recording in each selected room with its event, closes the sheet, leaves selection mode, and stays on Live. Live now shows the recording state you already built (L3c).

B3. L3e · Live, stop all
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1799-23903
Shows: a confirmation Dialog over the Live page.
Behaviour:
- "Stop all" in the Live banner opens this Dialog. The title and the text follow the state: the number and the room names of the rooms that record.
- "Keep recording" and the close button close the Dialog. Nothing stops.
- "Stop all" in the Dialog stops every recording and closes the Dialog.
- "Stop" on one room card still stops that room at once, with no Dialog.
- Compare the Live banner with the frame L3c (node-id=1752-38638). If the frame's banner has other buttons than your build, follow the frame.

B4. V1 · Room view, ready to record
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1799-21249
Shows: the Room view before the recording starts. The timer reads 00:00. The main button reads "Start recording".
This is the same Room view page with other state. Do not build a second page.
Behaviour:
- New route "/room/<roomId>" for a room that is not recording shows this ready state. (Before, it redirected to Live. Remove that redirect for rooms with cameras.)
- The ready state shows the room's next event of today in the header and its checklist. A room with no event next shows the ad hoc header you already built.
- "Start recording" starts the recording of this room with that event. The page changes to the recording state you already built (L4). The timer counts.
- The back arrow goes to Live. Nothing was started.
- Camera tiles: the frame shows four tiles. Keep the three-tile layout of L4 in every Room view state. This is a known mismatch. Do not fix it.
- The camera labels have no red dot in the ready state and a red dot while recording.

B5. V6 · Room view, stop confirmation
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1799-28639
Shows: a confirmation Dialog over the Room view. The timeline has three markers. The annotation field names the current time.
Behaviour:
- "Stop recording" in the Room view opens this Dialog. It no longer stops at once.
- The Dialog text names the event of the recording. For an ad hoc recording it names the room.
- "Keep recording" and the close button close the Dialog. The recording goes on.
- "Stop recording" in the Dialog stops the recording and shows the stopped state of B6.
- Sample annotations: put the three annotations of frame V7 (time, kind, text, author) in core/data/annotations.js. They belong to the event "NURS 310 · Sepsis recognition". A marker shows on the timeline only when the elapsed time has passed its time.
- The annotation field placeholder follows the elapsed time, as in the frame.

B6. V7 · Room view, stopped
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1799-28803
Shows: the Room view after the recording stopped. The header has a "Recording | Debrief" switch and a QR icon. The main button reads "Open debrief". The timer is frozen. The "Annotations" tab lists the annotations.
Behaviour:
- The timer and the progress bar stay at the time of the stop. No red dots on the camera labels.
- "Open debrief", the "Debrief" side of the switch and the QR icon do nothing. They belong to a later module.
- The "Annotations" tab is selected. It lists the sample annotations whose time is before the stop time. With none, it shows the muted text "No annotations yet."
- The other tabs keep working as before. The checklist keeps its answers.
- The back arrow goes to Live. The room is no longer recording there.
- The stopped state lives only while this page is open. Opening "/room/<roomId>" again shows the ready state.

B7. Global recording banner (frames B1 and B2)
- B1 · one room records  https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1767-16449
- B2 · three rooms record  https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1767-17142
Build only the banner at the top of these frames. Do not build the Today calendar under it. Today stays a placeholder page.
Shows: a 48 px bar above the whole app, full width, above the side navigation too. It pushes the app down.
Behaviour:
- The banner goes into the empty AppShell slot. It is a part of the "live" module and reads the same store. Pages do not know about it.
- It shows on every page with the AppShell while at least one room records, except on the Live page (Live has its own banner). It never shows in the Room view.
- One room records: texts and controls as in B1. The time counts. The "Open <room>" control opens "/room/<roomId>". "Stop" opens the stop confirmation Dialog of B5 for that room.
- Several rooms record: texts and controls as in B2. If B2 has a control that opens Live, it goes to "/live". "Stop all" opens the Dialog of B3.
- When nothing records, the banner is gone and takes no space.

Presets for Part B (same rule as before: a preset in the URL freezes the timers)
- "#/live?preset=l3b"   selection mode, Sim Room 1, Sim Room 2 and Skills Lab 1 selected.
- "#/live?preset=l3d"   the same, with the sheet of B2 open.
- "#/live?preset=l3e"   three rooms record (the l3c state) with the stop all Dialog open.
- "#/room/sim-room-2?preset=v1"   ready state.
- "#/room/sim-room-2?preset=v6"   recording at 18:42, four checklist items answered as in the frame, Dialog open.
- "#/room/sim-room-2?preset=v7"   stopped at 18:42.
- "#/soon/today?preset=b1"   Sim Room 2 records at 08:00 on the timer, banner visible.
- "#/soon/today?preset=b2"   three rooms record, banner visible.

Check list B:
1. Path 1: Live → "Select rooms" → select three rooms → "Record 3 rooms" → "Start 3 recordings" → Live shows three recordings → "Stop all" → Dialog → "Stop all" → nothing records.
2. Path 2: Live → "Start recording" on a card → sheet → "Start recording" → Room view counts → "Stop recording" → Dialog → "Keep recording" → still counts → "Stop recording" → Dialog → "Stop recording" → stopped state → back arrow → Live, room is ready.
3. Path 3: start a recording, go back to Live, click "Rooms" in the navigation. The global banner shows above the placeholder page and counts. "Stop" in the banner opens the Dialog. Click "Live": the global banner is gone, the Live banner shows.
4. The Live page is still one function. The Room view is still one page function with states (ready, recording, stopped).
5. The eight presets show their frames.
6. A timer tick does not close an open sheet, Dialog or select list.

PART C · THE ROOM'S CAMERAS AND AUDIO
New module folder: modules/rooms/. New data file: core/data/devices.js. New core components you will need: DataTable (header row, rows, optional row click), Checkbox (from Part B), Breadcrumb (from Part B).
devices.js: one list of every device. Take the eight rows from the frame L10 (name, kind, room, status, serial) and the "Last seen" and "Primary" values from the frame L8. Every screen in Part C reads this one list.

C1. L8 · Room, AV tab
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-19374
Route: "/rooms/sim-room-2/av". Nav item "Rooms" is active.
Shows: the room page of Sim Room 2 with the tabs "Details" and "AV". The AV tab has two cards, "Cameras" and "Audio", each a table of the room's devices, and an "Add device" button.
Behaviour:
- Opens from the "Room devices" button on the Sim Room 2 card on Live.
- The tables and the count lines in the card headers come from devices.js, filtered by room.
- The row "Overhead camera" opens C3. The other rows do nothing.
- "Details" tab: shows the muted text "Not part of this prototype yet."
- "Check this room" does nothing.
- "Start recording" opens "/room/sim-room-2" in the ready state (B4).
- "Add device" opens the sheet of C2.
- Breadcrumb "Rooms" opens the Rooms placeholder page.
- Build the page for any room id, but only Sim Room 2 has a way in.

C2. L8f · Room, add a device, and L8g · Room, device added
- L8f  https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1799-37735
- L8g  https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1799-40286
Shows: a side sheet that lists the devices that are in no room, each with a checkbox. After adding, the room page shows the new row and a note line under "Add device".
Behaviour:
- The sheet lists the devices from devices.js whose room is empty. Nothing is selected when it opens.
- The counter ("1 of 2 selected") and the button label ("Add 1 device") follow the selection. With nothing selected the button is disabled.
- "Cancel" and the close button close the sheet and change nothing.
- The add button sets the room of each selected device to this room, closes the sheet, and the page shows the state of L8g: the new row, the new count line, and the note line from the frame (with the device name).
- This is a change in the store. It lasts until the page reloads.

C3. L9 · Camera, opened from a room
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-33497
Route: "/devices/overhead-camera", with "?from=room" when it opens from the room page.
Shows: the device page of the Overhead camera: live picture, saved views, camera controls, details, advanced settings.
Behaviour:
- One page for a device. Only the breadcrumb and the active nav item differ by where it opened from:
  from the room page: breadcrumb "Rooms / Sim Room 2 / Overhead camera", nav item "Rooms" active;
  from the equipment list: breadcrumb "Simulators & Equipment / Overhead camera", nav item "Simulators & Equipment" active.
- The breadcrumb levels are links back.
- Every control on the page (move, zoom, focus, "Go to", "Save current view", "Change", "Remove from room", "Show") does nothing.
- Only the Overhead camera has a device page.

C4. L10 · Simulators & Equipment
https://www.figma.com/design/dbJVpAusLJCtreiz0jlEh3/IMSH-MVP?node-id=1752-34999
Route: "/equipment". The nav item "Simulators & Equipment" now opens this page, not a placeholder.
Shows: every device in one table, with tabs (All, Simulators, Cameras, Audio, Other), three filter fields and "Add equipment".
Behaviour:
- The table comes from devices.js. A device added to Sim Room 2 in C2 shows "Sim Room 2" in the Room column here.
- The tabs filter the table by kind. Decide the kind groups from the data and list them in REPORT.md.
- The three filter fields and "Add equipment" are visual only.
- The row "Overhead camera" opens C3 with the equipment breadcrumb. "Assign" and the other rows do nothing.

Presets for Part C
- "#/rooms/sim-room-2/av?preset=l8"    the room page as in L8.
- "#/rooms/sim-room-2/av?preset=l8f"   the sheet open, "360 camera" selected.
- "#/rooms/sim-room-2/av?preset=l8g"   after adding the 360 camera.
- "#/devices/overhead-camera?from=room&preset=l9"
- "#/equipment?preset=l10"

Check list C:
1. Path 4: Live → "Room devices" on Sim Room 2 → AV tab → "Add device" → select "360 camera" → "Add 1 device" → the row and the note show → click "Simulators & Equipment" → the 360 camera shows the room "Sim Room 2".
2. Path 5: AV tab → "Overhead camera" → device page with the room breadcrumb → breadcrumb "Sim Room 2" → AV tab. Then "Simulators & Equipment" → "Overhead camera" → the same page with the equipment breadcrumb.
3. Path 6: AV tab → "Start recording" → Room view in the ready state → "Start recording" → it records.
4. modules/rooms/ needed no change in modules/live/ except the "Room devices" button link. core/ changes: only new files, plus the ones listed in REPORT.md.
5. The five presets show their frames.

DO NOT BUILD
- The Today calendar, Events, Notifications, Recordings, the Rooms list, People, Inventory, Labels, Prep checklists, Settings. They stay placeholder pages.
- The debrief, the review of a recording, chapters, transcript.
- The Room view states for layout and audio, intercom in use, collapsed panels, a camera that stops, report a problem.
- The Details tab of a room, the room check, device pages other than the Overhead camera.
- A screen for recording outside a room. None is designed.
- Search behaviour, login, user menu, help.
- Real video, audio or device access.

WHEN ALL PARTS ARE DONE
- Update README.md (folder map, how to add a module) and REPORT.md. Keep the old content of REPORT.md and add a section "T04 follow-up" with: "Built", "Not specified" (every decision you made, one line each), "Differences from Figma" (one line each), "Could not do", and the three check lists with pass or fail per line.
- Run the old self-check again (searches for raw elements in modules/, colour values outside tokens.css, data strings outside core/data/, network requests, file:// start). Report pass or fail.
- The app stays in the preview of this task. Do not publish it and do not suggest publishing.
```
