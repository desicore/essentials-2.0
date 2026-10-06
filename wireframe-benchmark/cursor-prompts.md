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
