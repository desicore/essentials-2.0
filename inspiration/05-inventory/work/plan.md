# 05-inventory — plan

Date: 2026-09-30. Low-priority module: 5–8 products, 10–16 flows, 2 fetchers.

## Jobs (verbatim)

| id | Job | What to look for |
|---|---|---|
| `items` | Basic inventory items | Add/edit an item: name, category, quantity, location, photo, unit; list/grid views; bulk import |
| `check-out-manual` | Manual check in / check out | Borrow → return flow: who, what, until when; returning partial quantities; overdue states |
| `check-out-auto` | Automated check in / check out | Barcode/QR/NFC scan to check out or in; auto-deduct consumables when a session/scenario runs |
| `low-stock` | Low quantity alert | Reorder thresholds, alert surfaces (badge, digest, email), reorder / purchase-request flow |
| `ai-equipment` | AI analyses the equipment list | Paste/upload a list or scenario text → AI extracts items, matches them to inventory, flags shortages |

## Seams

- `03-scenario-manager`: still in progress (no notes/synthesis). It owns adding an equipment list to a scenario; here only the shelf side (stock, reserve, consume).
- `06-scheduling`: finished. It hands equipment reservation to this module. Its findings that matter here: conflicts are counted and graded, not blocked (7shifts, Clockwise); import is review-first with created vs. updated counts (Attio); no room/resource calendar was found on Mobbin/Refero.

## Product longlist (22)

- Direct: Sortly, Cheqroom, Snipe-IT, EZOfficeInventory, Asset Panda, itemit, Shelf.nu, Airtable (inventory base), Notion (inventory template)
- Adjacent: Shopify (inventory + purchase orders), Square (stock alerts), Lightspeed, Toast, Faire / wholesale reorder, Amazon Business, Instacart / grocery lists (running low), Mercari/eBay-style photo listing (item from photo)
- Wildcard: Apple Find My, library self-checkout (Libby, public-library apps), bike/scooter/tool rental (Lime, Getaround) for check-out/return, Ramp / Brex purchase requests, Expensify SmartScan / Ramp receipts (line-item extraction), recipe-to-shopping-list apps (AI list extraction)

## Queries

| # | Query | Job(s) | Platform | Fetcher |
|---|---|---|---|---|
| 1 | Add a new inventory item with photo, quantity, category and location (Sortly, Shopify) | items | web, ios | A |
| 2 | Browse and filter inventory items in list or grid by folder/location | items | web | A |
| 3 | Bulk import products from a CSV spreadsheet with column mapping and review | items | web | A |
| 4 | Adjust stock quantity of a product and see adjustment history (Shopify, Square) | items, low-stock | web | A |
| 5 | Set a low-stock threshold and get a low-stock alert or notification | low-stock | web, ios | A |
| 6 | Reorder low-stock items by creating a purchase order (Shopify, Lightspeed, Square) | low-stock | web | A |
| 7 | Submit a purchase request that goes to approval (Ramp, Brex) | low-stock | web | A |
| 8 | Check out equipment to a person with a due date, then check it back in (Cheqroom) | check-out-manual | web, ios | B |
| 9 | Borrow or rent an item and return it, including overdue or late reminder (library, rental) | check-out-manual | ios | B |
| 10 | Scan a barcode or QR code to look up or add an item | check-out-auto, items | ios | B |
| 11 | Scan to check out or return an item / self-checkout | check-out-auto | ios | B |
| 12 | Scan a receipt and AI extracts line items (Ramp, Expensify) | ai-equipment | ios, web | B |
| 13 | Upload or paste a document and AI extracts a structured list / matches records | ai-equipment | web | B |
| 14 | Paste a recipe or list and turn it into a shopping list, marking what you already have | ai-equipment, low-stock | ios | B |
| R | Refero: inventory add item, stock alert/reorder, equipment check-out, barcode scan, receipt/invoice extraction, purchase request | all | web, ios | A (refero.json) |

## Fetcher split

- **Fetcher A** (Haiku 4.5): `items`, `low-stock` → `raw/mobbin.A.json`; plus Refero for all jobs → `raw/refero.json`.
- **Fetcher B** (Haiku 4.5): `check-out-manual`, `check-out-auto`, `ai-equipment` → `raw/mobbin.B.json`.
- Gap round: one extra fetcher only if a job has <2 products after shortlisting.
- Change during run: Fetcher B crashed at the provider's 100-image-per-conversation limit (Mobbin returns inline previews) and saved nothing. Its jobs were relaunched as B1 `check-out-manual` (queries 8–9), B2 `check-out-auto` (10–11), B3 `ai-equipment` (12–14), each capped at 4 Mobbin calls, writing `raw/mobbin.B1/B2/B3.json`.

Custom subagent types are not registered in this Cursor session, so fetchers/annotators run as general-purpose subagents with the `.cursor/agents/*.md` rules embedded in the brief and the models set explicitly.
