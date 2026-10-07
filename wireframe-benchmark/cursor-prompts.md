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
