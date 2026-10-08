# Cursor prompts — Figma wireframes, Astryx vs shadcn

Paste-ready prompts for Cursor (corporate account). One prompt = one **new chat**, so the runs stay independent and comparable.

## One-time setup (≈10 min)

1. **Connect Figma in Cursor:** Cursor Settings → MCP (or Plugins) → add the official **Figma** MCP / plugin (remote server `https://mcp.figma.com/mcp`) → log in with the Figma account that can edit the file. If the Figma plugin from the Cursor marketplace is available, take that one: it ships the Figma skills (`figma-use`, `figma-generate-design`) as well as the server.
2. **Workspace:** open the repo root in Cursor: `~/Documents/conductor/workspaces/essentials-2.0/wireframe-benchmark` (branch `desicore/wireframe-benchmark`). Everything for the benchmark is in its `wireframe-benchmark/` folder: the brief, this file, the log, and later `discovery.md` and `comparison.md`. The agent can also read `spec/` if it needs more context.
3. **Model:** pick **Opus 5.5** in Agent mode, and use the same model for every run, so the model isn't a variable.
4. **Figma file:** https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
   Pages: `wireframe test - astryx`, `wireframe test - shadcn`, `learningspace screenshots`. Ignore `🚫 wireframe archive`.

Order: **Prompt 0 once** → 1A → 1B → 2A → 2B. After each run: check the frame by eye and write your own 1–5 score in the log row (the "Daniel's score" column).

---

## Prompt 0 — Discovery (read-only, run once)

```
You are helping me benchmark two UI component libraries (Astryx and shadcn) by building greyscale wireframes in Figma through the Figma MCP. This first task is READ-ONLY: do not create, edit or delete anything in Figma.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Ignore the page "🚫 wireframe archive" completely.

Before any Figma tool call, load the Figma skills (figma-use; if not installed, read the MCP resource skill://figma/figma-use/SKILL.md).

1. Read @wireframe-benchmark/wireframe-brief.md.
2. List the file's pages and which libraries are enabled/available in this file. Confirm both Astryx and shadcn are reachable via search_design_system / get_libraries.
3. For EACH library, map the components the two screens in the brief need: app shell/sidebar nav, nav item, top bar, search input, avatar/user menu, card, list item, badge/status, button (primary/secondary/ghost/icon), segmented control/toggle group, tabs, checkbox or yes/no indicator, video/media placeholder, slider/progress (timeline), calendar (mini month), toggle/switch, tooltip, dialog/sheet. For each: the exact library component name + variant(s) to use, or "MISSING".
4. For EACH library, list its variable collections and modes (colour modes especially). Say whether a neutral/greyscale mode exists.
5. Look at the page "learningspace screenshots" (get_screenshot) and describe the current Essentials shell in 6–10 bullets: nav position and width, header contents, page title placement, content width, density.
6. Write all of this to wireframe-benchmark/discovery.md, with a table per library. Then make sure wireframe-benchmark/benchmark-log.md has this header row:
   | # | Date | Library | Screen | Model | Start | End | Minutes | Follow-up prompts | Library instances | CUSTOM frames | Missing components | Colour leaks | Issues | Daniel's score 1-5 |

Report back in under 15 lines: libraries found, coverage per library (X of Y components), the biggest gaps, and anything that will block building.
```

---

## Prompt 1A — Dashboard · Astryx

```
Build ONE greyscale wireframe in Figma using ONLY the Astryx library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Do not touch any other page. Ignore "🚫 wireframe archive".

Read first: @wireframe-benchmark/wireframe-brief.md (the content and rules) and @wireframe-benchmark/discovery.md (the component map for Astryx and the shell description).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task: build "Screen 1 · Dashboard" from the brief as a top-level frame named "S1 · Dashboard · Astryx", 1440×900, placed to the right of anything already on the page.

How:
- Run `date +%H:%M` in the terminal at the start and at the end, for the log.
- Import Astryx components via search_design_system and use INSTANCES. Never detach. Never draw a lookalike of a component that exists in Astryx.
- Slot check FIRST: place the Astryx AppShell (or SideNav) and put one nav item into its slot without detaching. If that fails, stop and tell me before building anything else.
- Where Astryx has no fitting component, build a plain auto-layout frame named "CUSTOM · <what>".
- Bind fills, text styles, spacing and radii to Astryx variables/styles where they exist. No hard-coded colours except the greyscale fallback and recording red from the brief.
- If Astryx has a neutral/grey mode, set it on the frame. If not, keep the defaults and don't override colours by hand.
- Use auto layout throughout. Real content from the brief only.
- Build section by section (shell → today → upcoming → recent recordings → mini calendar). After each section take a screenshot and fix problems on the existing nodes before moving on.

When done:
1. Append one row to wireframe-benchmark/benchmark-log.md (library instances = count of instance nodes from Astryx; CUSTOM frames = count; list missing components and colour leaks).
2. Reply in under 10 lines: what was hard, what Astryx lacked, and anything you'd do differently.
```

## Prompt 1B — Dashboard · shadcn

Same as 1A with three swaps: **library** "shadcn" (everywhere "Astryx" appears) · **page** "wireframe test - shadcn" · **frame name** "S1 · Dashboard · shadcn". Paste-ready:

```
Build ONE greyscale wireframe in Figma using ONLY the shadcn library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - shadcn". Do not touch any other page. Ignore "🚫 wireframe archive".

Read first: @wireframe-benchmark/wireframe-brief.md (the content and rules) and @wireframe-benchmark/discovery.md (the component map for shadcn and the shell description).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task: build "Screen 1 · Dashboard" from the brief as a top-level frame named "S1 · Dashboard · shadcn", 1440×900, placed to the right of anything already on the page.

How:
- Run `date +%H:%M` in the terminal at the start and at the end, for the log.
- Import shadcn components via search_design_system and use INSTANCES. Never detach. Never draw a lookalike of a component that exists in shadcn.
- Where shadcn has no fitting component, build a plain auto-layout frame named "CUSTOM · <what>".
- Bind fills, text styles, spacing and radii to shadcn variables/styles where they exist. No hard-coded colours except the greyscale fallback and recording red from the brief.
- If shadcn has a neutral/grey mode, set it on the frame. If not, keep the defaults and don't override colours by hand.
- Use auto layout throughout. Real content from the brief only.
- Build section by section (shell → today → upcoming → recent recordings → mini calendar). After each section take a screenshot and fix problems on the existing nodes before moving on.

When done:
1. Append one row to wireframe-benchmark/benchmark-log.md (library instances = count of instance nodes from shadcn; CUSTOM frames = count; list missing components and colour leaks).
2. Reply in under 10 lines: what was hard, what shadcn lacked, and anything you'd do differently.
```

---

## Prompt 2A — Debrief · Astryx

```
Build ONE greyscale wireframe in Figma using ONLY the Astryx library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Do not touch any other page or the existing Dashboard frame. Ignore "🚫 wireframe archive".

Read first: @wireframe-benchmark/wireframe-brief.md (the content and rules) and @wireframe-benchmark/discovery.md (the component map for Astryx).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task: build "Screen 2 · Debrief" from the brief as a top-level frame named "S4 · Debrief · Astryx", 1194×834 (iPad landscape, NO left navigation), placed below the Dashboard frame.

How:
- Run `date +%H:%M` in the terminal at the start and at the end, for the log.
- Astryx INSTANCES only, never detached, no lookalikes. Missing components → plain auto-layout frame named "CUSTOM · <what>".
- Bind to Astryx variables/styles. Neutral mode if it exists; otherwise defaults, no hand-overridden colours.
- Tablet rules: use the library's largest native control size and its native icon size (don't resize instances or force 24 px icons; log it if the result is < 44 px). Type: title 16–18, body 14, meta 12. Status = icon + label, never colour alone. Faculty vs AI markers differ by icon.
- The checklist is yes/no with timestamps. NO score, NO percentage anywhere.
- Build section by section (header → video + timeline + playback speed → AI summary → checklist → AI clips → annotations). After each section take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only.

When done:
1. Append one row to wireframe-benchmark/benchmark-log.md.
2. Reply in under 10 lines: what was hard, what Astryx lacked (especially for the video player, timeline and segmented controls), and what you'd do differently.
```

## Prompt 2B — Debrief · shadcn

```
Build ONE greyscale wireframe in Figma using ONLY the shadcn library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - shadcn". Do not touch any other page or the existing Dashboard frame. Ignore "🚫 wireframe archive".

Read first: @wireframe-benchmark/wireframe-brief.md (the content and rules) and @wireframe-benchmark/discovery.md (the component map for shadcn).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task: build "Screen 2 · Debrief" from the brief as a top-level frame named "S4 · Debrief · shadcn", 1194×834 (iPad landscape, NO left navigation), placed below the Dashboard frame.

How:
- Run `date +%H:%M` in the terminal at the start and at the end, for the log.
- shadcn INSTANCES only, never detached, no lookalikes. Missing components → plain auto-layout frame named "CUSTOM · <what>".
- Bind to shadcn variables/styles. Neutral mode if it exists; otherwise defaults, no hand-overridden colours.
- Tablet rules: use the library's largest native control size and its native icon size (don't resize instances or force 24 px icons; log it if the result is < 44 px). Type: title 16–18, body 14, meta 12. Status = icon + label, never colour alone. Faculty vs AI markers differ by icon.
- The checklist is yes/no with timestamps. NO score, NO percentage anywhere.
- Build section by section (header → video + timeline + playback speed → AI summary → checklist → AI clips → annotations). After each section take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only.

When done:
1. Append one row to wireframe-benchmark/benchmark-log.md.
2. Reply in under 10 lines: what was hard, what shadcn lacked (especially for the video player, timeline and segmented controls), and what you'd do differently.
```

## Prompt 4A — Recording view (SRV) · Astryx

Added 2026-10-07. Run 4A, then 4B, one after the other (not in parallel). The layout is locked in the brief, so only the library differs.

```
Build ONE greyscale wireframe in Figma using ONLY the Astryx library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Do not touch any other page or any existing frame. Ignore "🚫 wireframe archive".

Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules" and "Screen 3 · Recording view") and @wireframe-benchmark/discovery.md (the component map for Astryx).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Reference (READ-ONLY): take a screenshot of node 126:1841 (today's SRV) and 126:1844 (its recording setup dialog) on the page "learningspace screenshots". Keep the SRV's structure as the brief describes. Don't copy its colours, icons or styling.

Task: build "Screen 3 · Recording view" as a top-level frame named "S3 · Recording view · Astryx", 1440×900, staff app in focused mode: NO left navigation. Place it below the lowest existing frame on the page, left-aligned with it, 200 px gap.

How:
- Run `date +%H:%M` in the terminal at the start and at the end, for the log.
- Follow the locked layout table in the brief (header 64, side panel 380 on the right, camera area fills the rest). Don't invent a different arrangement.
- Astryx INSTANCES only, never detached, no lookalikes. Missing components → plain auto-layout frame named "CUSTOM · <what>".
- Bind to Astryx variables/styles. Neutral mode if it exists; otherwise defaults, no hand-overridden colours.
- The ONLY colour is the recording dot, #D92D20. Astryx has no such token: set it by hand on that one dot and log how you did it. "Stop recording" is the library's primary button, NOT red, NOT a destructive variant.
- Native control and icon sizes (16 px icons, don't resize instances). Status = icon + label, never colour alone. Tabular figures for 04:20 and 04:20 / 20:00 if the library's type allows it.
- Avoid boxes inside boxes: checklist rows are flat rows with dividers inside the panel, not separate bordered cards (lesson from run 1B).
- The timeline marker sits ON the track: a tick on the track, the flag icon above it, "04:12" below. Not floating above the track.
- The checklist is yes/no with times. "4 of 7 answered" is the only count. NO score, NO percentage.
- Build section by section (header → layout selector + cameras → transport + timeline → quick notes bar → side panel → Room audio strip LAST). After each section take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only. No AI markers on this screen.
- The Room audio strip is an EXPLORATION layer: one frame named "EXPLORATION · Room audio" at the bottom of the camera area. Give the cameras fill height so that hiding this frame lets them grow. Its faders, meters and knob are CUSTOM (audiocn.dev is the visual reference), greyscale only. Hide it once and screenshot to check the screen still works without it, then show it again.

When done:
1. Don't edit benchmark-log.md. Put your log row in your reply as ONE markdown table line, matching its columns (# = 5).
2. Reply in under 10 lines: what was hard, what Astryx lacked (especially the camera grid, the live timeline, the Yes/No toggle pair, the red dot and the audio controls), and what you'd do differently.
```

## Prompt 4B — Recording view (SRV) · shadcn

```
Build ONE greyscale wireframe in Figma using ONLY the shadcn library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - shadcn". Do not touch any other page or any existing frame. Ignore "🚫 wireframe archive".

Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules" and "Screen 3 · Recording view") and @wireframe-benchmark/discovery.md (the component map for shadcn).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Reference (READ-ONLY): take a screenshot of node 126:1841 (today's SRV) and 126:1844 (its recording setup dialog) on the page "learningspace screenshots". Keep the SRV's structure as the brief describes. Don't copy its colours, icons or styling.

Task: build "Screen 3 · Recording view" as a top-level frame named "S3 · Recording view · shadcn", 1440×900, staff app in focused mode: NO left navigation. Place it below the lowest existing frame on the page, left-aligned with it, 200 px gap.

How:
- Run `date +%H:%M` in the terminal at the start and at the end, for the log.
- Follow the locked layout table in the brief (header 64, side panel 380 on the right, camera area fills the rest). Don't invent a different arrangement.
- shadcn INSTANCES only, never detached, no lookalikes. Missing components → plain auto-layout frame named "CUSTOM · <what>".
- Bind to shadcn variables/styles. Light mode; no hand-overridden colours.
- The ONLY colour is the recording dot, #D92D20. shadcn has no such token (its `destructive` is not the recording red): set it by hand on that one dot and log how you did it. "Stop recording" is the default (dark) Button, NOT the destructive variant.
- Native control and icon sizes (16 px icons, don't resize instances). Status = icon + label, never colour alone. Tabular figures for 04:20 and 04:20 / 20:00 if the library's type allows it.
- Avoid boxes inside boxes: checklist rows are flat rows with dividers inside the panel, not separate bordered cards (lesson from run 1B).
- The timeline marker sits ON the track: a tick on the track, the flag icon above it, "04:12" below. Not floating above the track.
- The checklist is yes/no with times. "4 of 7 answered" is the only count. NO score, NO percentage.
- Build section by section (header → layout selector + cameras → transport + timeline → quick notes bar → side panel → Room audio strip LAST). After each section take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only. No AI markers on this screen.
- The Room audio strip is an EXPLORATION layer: one frame named "EXPLORATION · Room audio" at the bottom of the camera area. Give the cameras fill height so that hiding this frame lets them grow. Its faders, meters and knob are CUSTOM (audiocn.dev is the visual reference), greyscale only. Hide it once and screenshot to check the screen still works without it, then show it again.

When done:
1. Don't edit benchmark-log.md. Put your log row in your reply as ONE markdown table line, matching its columns (# = 6).
2. Reply in under 10 lines: what was hard, what shadcn lacked (especially the camera grid, the live timeline, the Yes/No toggle pair, the red dot and the audio controls), and what you'd do differently.
```

## Prompt 5A — Calendar + Edit event · Astryx

Added 2026-10-07. Flow step 2: two frames per library in one run. Run 5A, then 5B, one after the other. If Daniel's inspiration round changes the layout, change the brief first; both prompts read it.

```
Build TWO greyscale wireframes in Figma using ONLY the Astryx library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Do not touch any other page or any existing frame (including the "copy of" / duplicate frames Daniel made). Ignore "🚫 wireframe archive". Do NOT look at the current LearningSpace calendar screenshots for these screens.

Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules", "Screen 4 · Calendar", "Screen 5 · Edit event") and @wireframe-benchmark/discovery.md (the component map for Astryx).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task:
1. "S2a · Calendar · Astryx", 1440×900.
2. "S2b · Edit event · Astryx", 1440×900.
Place S2a below the lowest existing frame on the page, left-aligned with it, 200 px gap; S2b to the right of S2a, 200 px gap.

How:
- Run `date +%H:%M` in the terminal at the start, between the two frames, and at the end, for the log.
- Shell: duplicate the sidebar and top bar from the accepted "S1 · Dashboard · Astryx" frame on this page into both new frames; set Calendar as the active nav item. Don't rebuild the shell.
- Follow the locked layout tables in the brief. Don't invent a different arrangement, extra panels or extra events.
- Astryx INSTANCES only, never detached, no lookalikes. Missing components → plain auto-layout frame named "CUSTOM · <what>".
- Bind to Astryx variables/styles. Neutral mode; no hand-overridden colours.
- Astryx's Calendar component is a month picker, not a week view: the week grid is expected to be CUSTOM. Use Astryx parts inside it where they fit (Badge, text styles, dividers).
- Native control and icon sizes (16 px icons, don't resize instances). Status = icon + label, never colour alone. No colour at all on these two screens.
- Week grid: event blocks are positioned by time (top = start, height = duration, 08:00–16:00 in hour rows). Check each block's top edge against the gutter before moving on. The NURS 310 Sepsis block is the hover state and carries the "No learners" badge.
- Edit event: the Learners column is the focus; flat rows with dividers, not cards. No rotations, no score, nothing about attendance yet.
- Build section by section (S2a: shell → page header + toolbar → notice → grid → event blocks; S2b: shell → page header → event details → learners). After each section take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only.

When done:
1. Don't edit benchmark-log.md. Put your log rows in your reply as TWO markdown table lines (one per frame), matching its columns; leave # empty, Daniel numbers them.
2. Reply in under 10 lines: what was hard, what Astryx lacked (especially the week grid, event blocks, date/time pickers and the checkbox list), and what you'd do differently.
```

## Prompt 5B — Calendar + Edit event · shadcn

```
Build TWO greyscale wireframes in Figma using ONLY the shadcn library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - shadcn". Do not touch any other page or any existing frame (including the "copy of" / duplicate frames Daniel made). Ignore "🚫 wireframe archive". Do NOT look at the current LearningSpace calendar screenshots for these screens.

Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules", "Screen 4 · Calendar", "Screen 5 · Edit event") and @wireframe-benchmark/discovery.md (the component map for shadcn).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task:
1. "S2a · Calendar · shadcn", 1440×900.
2. "S2b · Edit event · shadcn", 1440×900.
Place S2a below the lowest existing frame on the page, left-aligned with it, 200 px gap; S2b to the right of S2a, 200 px gap.

How:
- Run `date +%H:%M` in the terminal at the start, between the two frames, and at the end, for the log.
- Shell: duplicate the sidebar and top bar from the accepted "S1 · Dashboard · shadcn" frame on this page into both new frames; set Calendar as the active nav item. Don't rebuild the shell.
- Follow the locked layout tables in the brief. Don't invent a different arrangement, extra panels or extra events.
- shadcn INSTANCES only, never detached, no lookalikes. Missing components → plain auto-layout frame named "CUSTOM · <what>".
- Bind to shadcn variables/styles. Light mode; no hand-overridden colours.
- shadcn's kit has no week view or day grid: the week grid is expected to be CUSTOM. Use shadcn parts inside it where they fit (Badge, text styles, Separator). Avoid boxes inside boxes.
- Native control and icon sizes (16 px icons, don't resize instances). Status = icon + label, never colour alone. No colour at all on these two screens.
- Week grid: event blocks are positioned by time (top = start, height = duration, 08:00–16:00 in hour rows). Check each block's top edge against the gutter before moving on. The NURS 310 Sepsis block is the hover state and carries the "No learners" badge.
- Edit event: the Learners column is the focus; flat rows with dividers, not cards. No rotations, no score, nothing about attendance yet.
- Build section by section (S2a: shell → page header + toolbar → notice → grid → event blocks; S2b: shell → page header → event details → learners). After each section take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only.

When done:
1. Don't edit benchmark-log.md. Put your log rows in your reply as TWO markdown table lines (one per frame), matching its columns; leave # empty, Daniel numbers them.
2. Reply in under 10 lines: what was hard, what shadcn lacked (especially the week grid, event blocks, date/time pickers and the checkbox list), and what you'd do differently.
```

---

## Prompt 6A — Reports (Simulation Lab Usage + Customize + Weekly report) · Astryx

Added 2026-10-08; updated the same day with the survey metrics (4th KPI tile: Faculty contact hours) and the Customize popover (S6c). Flow steps 11–12. Don't run it while another run writes to the Astryx page. **If you already ran the two-frame version,** use the 6A-r1 delta below instead.

```
Build THREE greyscale wireframes in Figma using ONLY the Astryx library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Do not touch any other page or any existing frame (including duplicates and "copy of" frames). Ignore "🚫 wireframe archive". Do NOT look at any existing Reports screen (current-product screenshots or other pages).

Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules", "Screen 6 · Simulation Lab Usage", "Screen 6c · Customize the report", "Screen 6b · Weekly report dialog") and @wireframe-benchmark/discovery.md (the component map for Astryx).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task:
1. "S6 · Reports · Astryx", 1440 wide (height grows with content, min 900). 4 KPI tiles.
2. "S6c · Customize report · Astryx", same size, to the right of S6 with a 200 px gap.
3. "S6b · Weekly report dialog · Astryx", same size, to the right of S6c with a 200 px gap.
Place S6 below the lowest existing frame on the page, left-aligned with it, 200 px gap.

How:
- Run `date +%H:%M` in the terminal at the start, between frames, and at the end, for the log.
- Shell: duplicate the sidebar and top bar from the accepted "S1 · Dashboard · Astryx" frame on this page; set Reports as the active nav item. Don't rebuild the shell.
- Follow the locked layout table in the brief. No extra charts, filters, legends or tabs.
- Astryx INSTANCES only, never detached, no lookalikes. Missing components → plain auto-layout frame named "CUSTOM · <what>". Check discovery.md for a chart, stat or KPI component before building custom.
- Astryx has no chart components in its Figma kit (expected): build each chart as "CUSTOM · Bar chart · <name>" from plain rectangles and Astryx text styles, inside an Astryx card/surface if one exists.
- Charts are greyscale and every bar carries its value as text. The comparison shows only on the KPI tiles, as icon + text.
- Native control and icon sizes (16 px icons, don't resize instances). No colour on these screens.
- S6c: duplicate S6 (don't rebuild). Remove the Faculty contact hours tile so the other 3 stretch to fill the row, then add the popover under "Customize" with CheckboxInput rows in two groups. Use Astryx's Popover if its Content slot can hold the list; otherwise "CUSTOM · Popover" from library parts.
- S6b: duplicate S6 (don't rebuild), add the library's overlay/scrim and the dialog from the brief. If Astryx has no dialog component, build it as "CUSTOM · Dialog" from library parts (card/surface, buttons, inputs) and log it.
- Build section by section (shell → header + filter bar → KPI row → weekly chart → three chart cards; then the dialog). After each section take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only.

When done:
1. Don't edit benchmark-log.md. Put your log rows in your reply as THREE markdown table lines (one per frame), matching its columns; leave # empty, Daniel numbers them.
2. Reply in under 10 lines: what was hard, what Astryx lacked (charts, KPI tile, segmented control, switch, popover, dialog, chip input), and what you'd do differently.
```

### 6A-r1 — delta, only if the two-frame 6A already ran

```
Update the Reports frames on page "wireframe test - astryx" in https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes. Work on existing nodes; don't rebuild. Don't touch any other frame.
Read first: @wireframe-benchmark/wireframe-brief.md ("Screen 6", "Screen 6c", "Screen 6b"; the metrics changed on 10-08). Load the figma-use skill before any Figma tool call.
1. "S6 · Reports · Astryx": add the "Customize" button (secondary, sliders-horizontal) left of "Schedule weekly report"; add the 4th KPI tile "Faculty contact hours · 262 h · +19% vs 221 h last year" with its info tooltip trigger, by duplicating an existing tile; the 4 tiles share the row equally.
2. "S6b · Weekly report dialog · Astryx": the same 4th tile behind the scrim; the Report text ends with "· 7 metrics".
3. New "S6c · Customize report · Astryx": duplicate the updated S6, place it between S6 and S6b (shift S6b right to keep 200 px gaps), and build the popover state from the brief.
After each frame, screenshot and fix on the existing nodes. Reply in under 8 lines: what changed, what was CUSTOM.
```


## Prompt 6B — Reports (Simulation Lab Usage + Weekly report) · shadcn

> **Dropped 10-08 — do not run.** Astryx was chosen (`comparison.md` §4). Kept for the record.

```
Build TWO greyscale wireframes in Figma using ONLY the shadcn library. This is a benchmark run: follow the brief exactly and log honestly what worked and what didn't.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - shadcn". Do not touch any other page or any existing frame (including duplicates and "copy of" frames). Ignore "🚫 wireframe archive". Do NOT look at any existing Reports screen (current-product screenshots or other pages).

Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules", "Screen 6 · Simulation Lab Usage", "Screen 6b · Weekly report dialog") and @wireframe-benchmark/discovery.md (the component map for shadcn).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task:
1. "S6 · Reports · shadcn", 1440 wide (height grows with content, min 900).
2. "S6b · Weekly report dialog · shadcn", same size, to the right of S6 with a 200 px gap.
Place S6 below the lowest existing frame on the page, left-aligned with it, 200 px gap.

How:
- Run `date +%H:%M` in the terminal at the start, between the two frames, and at the end, for the log.
- Shell: duplicate the sidebar and top bar from the accepted "S1 · Dashboard · shadcn" frame on this page; set Reports as the active nav item. Don't rebuild the shell.
- Follow the locked layout table in the brief. No extra charts, filters, legends or tabs.
- shadcn INSTANCES only, never detached, no lookalikes. Missing components → plain auto-layout frame named "CUSTOM · <what>". The shadcn kit may ship Chart, Card, Switch, Dialog, Toggle Group and Badge: search for each before building custom.
- If the shadcn kit has a Chart component (bar/horizontal bar), use it and set it to greyscale through its variables; otherwise build "CUSTOM · Bar chart · <name>" from plain rectangles inside a shadcn Card.
- Charts are greyscale and every bar carries its value as text. The comparison shows only on the KPI tiles, as icon + text.
- Native control and icon sizes (16 px icons, don't resize instances). No colour on these screens.
- S6b: duplicate S6 (don't rebuild), add the library's overlay/scrim and the dialog from the brief. If shadcn has no dialog component, build it as "CUSTOM · Dialog" from library parts (card/surface, buttons, inputs) and log it.
- Build section by section (shell → header + filter bar → KPI row → weekly chart → three chart cards; then the dialog). After each section take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only.

When done:
1. Don't edit benchmark-log.md. Put your log rows in your reply as TWO markdown table lines (one per frame), matching its columns; leave # empty, Daniel numbers them.
2. Reply in under 10 lines: what was hard, what shadcn lacked (charts, KPI tile, segmented control, switch, dialog, chip input), and what you'd do differently.
```

## Sub-screens · Astryx only (7A, 8A, 9A)

Added 2026-10-08, after the library decision (`comparison.md` §4). All three write to the Astryx page, so run them **one at a time**, never alongside 6A or another run on that page. Suggested order: 7A → 8A → 9A (9A duplicates the S8c frame). Not benchmark runs: no log rows, but the reply still lists what was CUSTOM.

### Prompt 7A — Recording banner · Astryx

```
Build TWO greyscale wireframes in Figma using ONLY the Astryx library.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Do not touch any other page or any existing frame (including duplicates and "copy of" frames). Ignore "🚫 wireframe archive".

Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules", "Shells", "Screen 7 · Recording banner") and @wireframe-benchmark/discovery.md (the component map for Astryx).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task:
1. "S7a · Recording banner · Astryx", 1440×948 (the dashboard plus the 48 px banner): duplicate "S1 · Dashboard · Astryx" and add the banner above the top bar. Change nothing else.
2. "S7b · Recording banner states · Astryx", 1440 wide, height as needed: the six states from the brief's table, stacked, each with a 12 px "State: …" label above it.
Place S7a below the lowest existing frame on the page, left-aligned with it, 200 px gap; S7b to the right of S7a, 200 px gap.

How:
- Search the library for a Banner first. If it exists, use it in its neutral variant and put the content in its slots. If not, build ONE "CUSTOM · Recording banner" from an auto-layout frame with Astryx Buttons, Spinner and text styles inside, and reuse it (duplicate) for every state.
- The recording dot is the only colour: a literal #D92D20 fill on one small CUSTOM ellipse. The banner background stays neutral. Paused uses a grey `pause` icon, no red.
- Disabled buttons use the Button's disabled state, not lowered opacity.
- Elapsed time uses tabular figures if the type style allows it.
- After each frame, take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only.

When done, reply in under 10 lines: what was CUSTOM, what Astryx lacked, anything you weren't sure about.
```

### Prompt 8A — Photo of notes · Astryx

```
Build THREE greyscale wireframes in Figma using ONLY the Astryx library.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Do not touch any other page or any existing frame (including duplicates and "copy of" frames). Ignore "🚫 wireframe archive".

Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules", "Screen 2 · Debrief", "Screen 8 · Photo of notes") and @wireframe-benchmark/discovery.md (the component map for Astryx).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task (all 1194×834, tablet, no left navigation):
1. "S8a · Photo of notes · capture · Astryx"
2. "S8b · Photo of notes · review · Astryx"
3. "S8c · Debrief · summary with notes · Astryx": duplicate the accepted "S4 · Debrief · Astryx" frame and change ONLY the AI summary section. If there is more than one frame with that name, stop and ask me which one.
Place S8a below the lowest existing frame on the page, left-aligned with it, 200 px gap; S8b and S8c to its right, 200 px gaps.

How:
- Tablet: use the library's largest native control size (Button Size=LG); don't resize instances beyond it. If that is under 44 px, note it in the reply.
- Camera and photo areas = grey placeholders with a lucide icon and a label, as the brief says. The shutter is a large Button (icon + "Take photo"), not a hand-drawn circle.
- S8c: keep the Debrief's structure exactly (tabs or stacked sections, whichever the accepted frame has). Mark the added sentence with a Neutral Badge, never with colour.
- After each frame, take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only.

When done, reply in under 10 lines: what was CUSTOM, what Astryx lacked, anything you weren't sure about.
```

### Prompt 9A — Share with participants · Astryx

```
Build TWO greyscale wireframes in Figma using ONLY the Astryx library.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Target page: "wireframe test - astryx". Do not touch any other page or any existing frame (including duplicates and "copy of" frames). Ignore "🚫 wireframe archive".

Read first: @wireframe-benchmark/wireframe-brief.md ("Wireframe rules", "Screen 9 · Share with participants") and @wireframe-benchmark/discovery.md (the component map for Astryx).
Before any Figma tool call, load the figma-use skill (and figma-generate-design if available).

Task (both 1194×834, tablet):
1. "S9a · Share with participants · Astryx": duplicate "S8c · Debrief · summary with notes · Astryx", dim it with an overlay, and open a right-side sheet, full height, about 480 wide.
2. "S9b · Shared · Astryx": duplicate S9a and switch the sheet to the sent state from the brief.
Place S9a below the lowest existing frame on the page, left-aligned with it, 200 px gap; S9b to its right, 200 px gap.

How:
- Astryx's Figma kit has no Sheet or Dialog. Look at how "S3 · Recording view · Stop confirmation · Astryx" built its overlay and dialog and reuse that approach if it fits; otherwise build ONE "CUSTOM · Sheet" auto-layout container. Everything inside it is Astryx instances: CheckboxInput, ListItem, Avatar (initials), Badge, Button, Collapsible or a ghost "More options" Button, text styles.
- One checkbox per item, exactly as listed. Fluids before cultures is the only unticked item. The "AI" badge is a Neutral Badge with the `sparkles` icon.
- If the sheet content is taller than 834, let the item list scroll inside the sheet and keep the footer pinned; don't shrink the type.
- Tablet: largest native control size; don't resize instances beyond it. Note anything under 44 px in the reply.
- After each frame, take a screenshot and fix problems on the existing nodes before moving on.
- Real content from the brief only.

When done, reply in under 10 lines: what was CUSTOM, what Astryx lacked, anything you weren't sure about.
```

---

## Prompt 3 — Comparison (after all four runs, read-only)

```
READ-ONLY in Figma. Compare the four benchmark frames:
- page "wireframe test - astryx": "S1 · Dashboard · Astryx", "S4 · Debrief · Astryx"
- page "wireframe test - shadcn": "S1 · Dashboard · shadcn", "S4 · Debrief · shadcn"

Use @wireframe-benchmark/benchmark-log.md, @wireframe-benchmark/discovery.md and screenshots of the four frames. Write wireframe-benchmark/comparison.md with:
1. A table per criterion, Astryx vs shadcn, score 1–5 + one line of evidence each: component coverage, instance vs custom ratio, token/variable binding, out-of-the-box accessibility (focus, contrast, 44 px targets), visual density for a data-heavy staff app, tablet fitness, build effort (minutes + follow-up prompts from the log), colour leaks.
2. What each library was missing for OUR screens (video player, timeline with markers, segmented control, mini calendar…).
3. Three things engineering should verify before choosing a production library (Angular availability and maturity first).
Keep it under one page. Don't recommend more than the evidence supports.
```

## Fix-up prompt (when a run goes wrong)

```
In the frame "<frame name>" on page "<page>": <what's wrong, one line each>.
Fix it on the existing nodes (don't delete and rebuild the frame). Keep using library instances only. Then add 1 to "Follow-up prompts" in that run's row in wireframe-benchmark/benchmark-log.md.
```
