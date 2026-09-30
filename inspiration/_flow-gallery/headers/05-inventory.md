<!-- vars
SLUG: 05-inventory
PRODUCTS: 5–8
FLOWS: 10–16
FETCHERS: 2
PLATFORMS: web first; ios for scan / check-out flows
TASK_INTENT: Research complete user flows for equipment inventory and check-in/check-out in a simulation-center management platform
-->
# Essentials 2.0 — Inventory: flow inspiration research

Run this in the **Cursor desktop app** with **Opus 5.5** as the orchestrator, with the `windhoek` folder open so the subagents in `.cursor/agents/` are available. This is a **low-priority** module: keep it lean (smaller targets below, 2 fetchers).

## Context

Essentials 2.0 is Elevate's simulation-education platform, the successor to LearningSpace Essentials. A simulation center runs recorded training sessions in rooms with manikins/simulators, standardized patients (SPs) and cameras. Faculty design scenarios, sim techs/operators prepare rooms and equipment, learners are evaluated, and admins run the center.

Inventory is the stock of equipment and consumables a center needs for its scenarios: manikins, task trainers, monitors, IV kits, moulage supplies. Today this lives in spreadsheets or nowhere. In the concept, a scenario carries an **equipment list** (Scenario manager module), and Inventory knows what's on the shelf.

## Jobs (from the FigJam concept map "Essentials — Concept", node 141:429)

| id | Job | What to look for |
|---|---|---|
| `items` | Basic inventory items | Add/edit an item: name, category, quantity, location, photo, unit; list/grid views; bulk import |
| `check-out-manual` | Manual check in / check out | Borrow → return flow: who, what, until when; returning partial quantities; overdue states |
| `check-out-auto` | Automated check in / check out | Barcode/QR/NFC scan to check out or in; auto-deduct consumables when a session/scenario runs |
| `low-stock` | Low quantity alert | Reorder thresholds, alert surfaces (badge, digest, email), reorder / purchase-request flow |
| `ai-equipment` | AI analyses the equipment list | Paste/upload a list or scenario text → AI extracts items, matches them to inventory, flags shortages |

## Baseline

**Today:**
- Essentials has no inventory.
- LearningSpace **Enterprise** has an Inventory Manager dashboard module.

**Decision history:**
- 2026-09-10: dropped.
- 2026-09-18: back in, as an **optional paid add-on**. The reason was commercial: small centers stayed on Enterprise because Essentials lacked inventory.

**Direction from the solution concept:**
- **Light and predictive**, not detailed counting of gloves and needles.
- **Auto check-in/out driven by scenario runs.**
- Trend and reorder notifications.
- Equipment/simulator scheduling.
- A usage report.

**Undefined so far:** the failure cases (shortage, two scenarios needing the same item in parallel, returns, manual correction). Flows that handle these are especially valuable.

## Seams (read, don't re-research)

- Scenario manager module (`inspiration/03-scenario-manager/`, may not exist yet) owns *adding an equipment list to a scenario*. Here, cover only the inventory side: what's on the shelf, and reserving/consuming it.
- Scheduling (`inspiration/06-scheduling/`) owns room booking. Equipment reservation tied to a booking belongs here only if a product shows it as one flow.

## Seed products (verify on Mobbin/Refero; replace freely)

- **Direct:** Sortly, Cheqroom, Snipe-IT, EZOfficeInventory, Asset Panda, itemit, Shelf.nu
- **Adjacent:** Shopify / Square / Lightspeed inventory and stock alerts, Toast (restaurant stock), Airtable/Notion inventory templates, Amazon Business reorder, Instacart / grocery "running low" lists
- **Wildcard:** Apple Find My (item location), library self-checkout apps, Ramp/Brex purchase requests (the reorder hand-off), AI receipt/invoice extraction (e.g. Ramp, Expensify SmartScan) as the pattern for `ai-equipment`

## Module-specific rules

- iOS is expected for scanning; keep scan flows even if the rest of the product is web.
- If Mobbin/Refero have almost nothing on `check-out-auto` or `ai-equipment`, take the best adjacent pattern (e.g. receipt scanning → line-item extraction) and say so in `why`.
