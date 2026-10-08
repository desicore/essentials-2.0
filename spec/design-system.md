# Design system

Status: **wireframe phase.** The UI library, tokens and icons are locked by Daniel on 10-01 → 10-02 (prototype plan, step 4). Until then only the wireframe kit below applies.

## Guardrails already decided

- **Stay close to the Elevate blue theme.** Don't go green, don't go wild (Gergely, 09-29).
- **Use a ready-made UI library**, not a custom build (09-29 tasks call). **Astryx** is the choice for the prototype; it has a matching Figma library. Engineering chooses the production library.
- **Astryx confirmed for the prototype on 10-08** after the Astryx vs shadcn benchmark (`wireframe-benchmark/comparison.md` §4). Rules that follow from it:
  - **Pin the version** (beta, v0.6.x). Rerun `astryx theme build` after every upgrade.
  - **Fix contrast and touch sizes once, in the theme** (`defineTheme` token and component overrides), never per screen. The theme file doubles as the token spec for engineering.
  - **Custom components** (Astryx has none): charts (Recharts, coloured with Astryx tokens), the video player, the timeline with faculty and AI markers, and the room audio mixer. Build them from Astryx primitives and tokens.
  - Gaps found in the Figma kit (switch, dialog/sheet, search field) exist in the Astryx **code** library, so they are not custom in the prototype.
- The current Essentials icons are to be replaced (inconsistent and heavy). A candidate icon set is **lucide**, which the wireframe kit uses already.
- **WCAG 2.1 AA.** Status always uses an icon plus a label, never colour alone. Tablet targets are ≥ 44 px.
- Figma is the design source of truth after wireframes. Pencil comes first, then Figma.

## Wireframe kit (Pencil, "LF v2")

Carries over the rules of the User Manager wireframe kit with these changes:

| Rule | Value |
|---|---|
| Colour | Greyscale only. Background #FFFFFF, canvas #F4F4F4, stroke #111111 1 px, secondary text #6B6B6B, placeholder #E6E6E6. The primary button is black with white text. |
| **Recording red** | The single exception: #D92D20 for the recording dot and banner, so the recording state reads in wireframes (SPEC §7.1) |
| Type | Inter: 20 title / 14 body / 12 label / 11 annotation |
| Icons | lucide 16 px (24 px on tablet screens) |
| Radius / effects | 4, with no shadows and no gradients |
| Stickies | #FFF4B8, 220 wide, prefixed **HYPOTHESIS: / REF: / OPEN: / DON'T BUILD:** |
| Artboards | One per flow, named `DF-1 …`, `DF-2 …`, `DF-3 …`. Basic screens go on `BASIC · <area>`. |
| Shells | **Staff** 1280×800 with the SPEC §5 nav · **Debrief** 1194×834, no nav · **Display** 1920×1080 · **Recipient** 390×844 |

The kit is rebuilt because the navigation, the roles (Admin / Faculty / Recipient) and the terms changed since the 09-18 packs.

## To fill in on 10-02

- Library and version
- Tokens: colour (blue scale plus semantic: recording, ready, issue, can't record), spacing, radius, type scale
- Icon set confirmation
- Component list mapped to the screens in `screens.md`
