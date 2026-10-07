# Comparison: Astryx vs shadcn (wireframe benchmark, 2026-10-06)

Sources: `benchmark-log.md` (runs 1–4), `discovery.md`, screenshots of the four frames, and a read-only `use_figma` audit of the frames (S1 Astryx `73:3236`, S4 Astryx `83:551`, S1 shadcn `76:7251`, S4 shadcn `96:981`). The sample is small: two screens, one AI run per library per screen, the brief changed between S4 runs, and Daniel's scores aren't in yet.

## 1. Scores (1–5)

| Criterion | Astryx | Evidence | shadcn | Evidence |
|---|---|---|---|---|
| Component coverage | 4 | Found 15 of 18 needs (1 partial, 2 missing). Has an app shell, top nav, calendar, segmented control, progress bar and toolbar. | 3 | Found 10 of 18 (6 partial, 2 missing). No shell, top bar, calendar day grid, progress bar, TabsList or ToggleGroup. |
| Instance vs custom | 5 | S1: 48 instances placed, 2 CUSTOM. S4: 110 placed, 2 CUSTOM (video player and timeline only). | 2 | S1: 79 placed (42 of them calendar-day Buttons), 15 CUSTOM-named nodes including the sidebar, the top bar and all 4 panels. S4: 71 placed, 9 CUSTOM-named in the visible tab, including the clip cards and checklist rows. |
| Token / variable binding | 4 | 0 unbound paints. Speed control radius is a literal 10 (the SegmentedControl radius isn't a variable). Primary-button icons default to a dark colour and had to be rebound. | 4 | Every custom node is bound: paints 46/46 and 54/54, text styles 18/18 and 38/38, auto-layout spacing 95/95 and 61/61, radii 8/8 and 7/7. The `mode` set has no mid grey, so chart bars use the primitive `neutral/300`. |
| Accessibility out of the box | 2 | Focus variants exist (Button, Typeahead, SegmentedControlItem). No native control reaches 44 px (max 36; S1 buttons 28–32). `#737373` text on the `#F1F1F1` body is 4.20:1 (14 cases). Avatar initials are 10 px. | 2 | Focus variants exist on Button, Icon Button, Input, Tab, Switch, Toggle and SliderThumb. Max control is 36 px; Tab 29, Switch 18 high, slider thumb 12. `#737373` on `muted` `#F5F5F5` is 4.35:1 (10 cases). |
| Density (data-heavy staff app) | 3 | S1 fits 1440×900. ListItem is fixed at 56 px and SideNav is 260 px wide, against roughly 35 px rows and an 86 px rail in today's LearningSpace. | 2 | S1 grew to 1440×1050 for the same content. Item rows are 56/72 px, and the 7 checklist Items overflowed 834 px, so they were rebuilt as custom rows. |
| Tablet fitness (1194×834) | 2 | All controls are under 44 px. Icons in Buttons are stuck at 16 px. The Slider track can't stretch, so a ProgressBar with a locked fill stands in. Annotations had to move to a hidden tab. | 2 | All controls are under 44 px, and the smallest targets (Switch, Tab, thumb) are smaller than Astryx's. The slider parts do stretch. Annotations also had to move to a hidden tab. |
| Build effort | 3 | 35 min and 3 follow-up prompts (S1: 6 min, 1 prompt; S4: 29 min, 2 prompts). S4 was rebuilt twice because slot content gets new IDs and can't be resized after placement. | 4 | 23 min and 2 follow-up prompts (S1: 8 min, 1 prompt; S4: 15 min, 1 prompt). The friction came from text overrides without text properties and fixed-height Items. |
| Colour leaks | 5 | Audit found 0 saturated fills or strokes in either frame; Neutral Light is set explicitly. | 5 | Audit found 0 saturated fills or strokes in either frame; light mode is set explicitly. |

Neither screen used the recording red (#D92D20), so how each library handles that literal colour is still untested. Cost can't be split per library: the only checkpoint is $48.58 cumulative for the day.

## 2. Missing for our screens

- **Both libraries:** a video player, a timeline with faculty and AI markers, 44 px touch sizes, 24 px icons inside controls, a chart (both have only chart icons), and an icon-over-label nav rail.
- **Astryx:**
  - The segmented control has only 3 segments, so the 4 playback speeds are a ButtonGroup plus SegmentedControlItems, with no track.
  - No switch; "Approve" is a Button.
  - The calendar has no event-dot state.
  - The Slider doesn't stretch.
  - AppShell has no content slot.
  - No dedicated search field and no dialog or sheet.
- **shadcn:**
  - No app shell, sidebar container or top bar.
  - No mini calendar day grid (header only) and no progress bar.
  - The slider ships as separate parts (track, range and thumb) rather than one component.
  - No ToggleGroup or TabsList wrapper.
  - Card and Item can't be used as containers (no slots, fixed heights).
  - No media thumbnail and no initials avatar.
  - Toggle has no plain "On" state.
  - No mid grey in the `mode` set.

## 3. What engineering should verify before choosing a production library

1. **Angular availability and maturity, first.** shadcn/ui is a React and Radix kit, so any Angular version would be a separate port. Check that it covers the components above, which Angular versions it supports, how often it releases, and whether its keyboard and screen-reader behaviour matches Radix. For Astryx, confirm a code library exists at all, not only the Figma Community file. If either one has no viable Angular option, that outweighs every score above.
2. **Accessibility in code, not in Figma.** Can controls reach 44 px through tokens without forking components? Does muted text pass 4.5:1 on muted surfaces? Do the composite widgets (tabs, segmented control, a slider with markers) have correct focus and keyboard handling?
3. **Parity between Figma and code, and the custom pieces.** Do the Figma variables map one-to-one to code tokens (light and dark, brand colour, recording red)? Is Code Connect or an equivalent available? Which libraries would supply the video player, timeline and calendar? These were custom in both libraries, so they will probably be third-party or in-house whichever library is chosen.

**What the evidence supports:** Astryx covered more of our screens with library parts. shadcn was quicker to build with and had cleaner token bindings. Neither library is tablet-ready out of the box. Point 1 decides the choice; this benchmark doesn't.
