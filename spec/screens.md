# Routes and screens

The complete list. A builder (Pencil or code) creates **exactly these**. A new screen needs a spec change first.

Fidelity: **Demo** = full polish, every state from its flow file · **Basic** = wireframe-level, the main state plus empty, clickable only where a demo flow passes through · **Locked** = a placeholder only.

Navigation is provisional (SPEC §5) until Gabor's map is reconciled.

## Staff app (laptop 1280–1440)

| Route | Screen | Fidelity | Flow | Notes |
|---|---|---|---|---|
| `/today` | Today | **Demo** | DF-1, DF-2 | Verdict line, Today list with a row action, Record now, "waiting for you" (shares paused, parts unconfirmed) |
| `/today` + sheet | Start a session | **Demo** | DF-1 | Room → scenario (optional) → people (optional) |
| `/rooms` | Rooms overview | Basic | DF-1 (room picker data) | One card per room: Free / In use / Recording, plus Ready / Issue detected / Can't record |
| `/rooms/:id` | Room detail and check | Basic | DF-1 2b | Last check, the failing component, guided fix steps, history, **Run check now** |
| `/rooms/:id/live` | Live room | **Demo** | DF-1, DF-2 | SRV reuse, refreshed: cameras, audio (talk / listen / announce), Who's here, Marker, Pause / Resume (wireframe level, CAP-07), Next group, part strip |
| `/sessions` | Sessions: list and day view | Basic | DF-2 entry | Filters: room, date, faculty. The day view is by room (columns). |
| `/sessions/:id` | Session sheet | **Demo** | DF-2 | Details · People (parts) · Recording · History · Shares |
| `/sessions/new` | New session (scheduled) | Basic | — | Copy a previous session / day / scenario first (SES-02) |
| `/sessions/import` | Import sessions and roster | Basic | DF-2 precondition | Upload → map → review → result (AS-12); reuses the UM-C pattern |
| `/recordings` | Recordings | Basic | DF-3 | Recent first, filter by room or date, status chips (processing / ready / participants not confirmed) |
| `/recordings/:id/parts` | Fix parts | **Demo** | DF-2 | Split, move boundary, assign, reason |
| `/recordings/:id/shares` | Share status | **Demo** | DF-3 | Per-recipient status, resend, revoke, paused |
| `/scenarios` | Scenario library | Basic | DF-1 picker | List, detail (materials, room and equipment notes), **Use in session**. No editor. |
| `/reports` | Reports | Basic | AS-09 | Three tiles: sessions completed · learner contact hours · room occupied hours, each with the change vs last period, then a drill-down to sessions and export |
| `/reports/:report` | Report detail | Basic | — | Filters, table, drill-down, CSV export |
| `/people` | People: users and recipients | Basic | — | Reuses UM-A, relabelled: roles are **Admin / Faculty**, and recipients are listed without accounts |
| `/people/groups` | Groups | Basic | — | Reuses UM-B. Source badge Local / Canvas. |
| `/settings/integrations` | Integrations | Basic | — | Canvas, Outlook, Google Calendar cards: source, last sync, conflicts, failures (INT-06) |
| `/settings/sharing` | Sharing and retention | Basic | DF-3 default | Default expiry, download allowed, notes visible to learners |
| `/inventory` | Inventory | Locked | AS-11 | Admins only: "Inventory Manager is an add-on. **Contact Sales** · Start trial". Other users never see the nav item. |

## Debrief (iPad landscape 1194×834)

| Route | Screen | Fidelity | Flow |
|---|---|---|---|
| `/debrief` | Debrief home | **Demo** | DF-3 |
| `/debrief/:recordingId` | Debrief player | **Demo** | DF-3 |
| `/debrief/:recordingId` + sheet | Share sheet | **Demo** | DF-3 |
| `/display/:roomId` | Room display (wall screen, 1920×1080) | **Demo** | DF-3 |

## Recipient (phone 390×844)

| Route | Screen | Fidelity | Flow |
|---|---|---|---|
| (email) | Share email | **Demo** | DF-3 |
| `/s/:token` | Verify | **Demo** | DF-3 |
| `/s/:token/view` | Share page | **Demo** | DF-3 |
| `/s/:token` (ended) | Expired / revoked | **Demo** | DF-3 |

## Global elements

- **Recording banner.** App-wide whenever any room the user can see is recording or paused: room, state, elapsed time, Stop. When paused: "Sim Room 2 · Paused 02:14 · Resume · Stop". Several rooms show as "2 rooms recording ▾".
- **Account menu.** Name, role label (Admin / Faculty), language, sign out.
- **"Waiting for you" count** on Today, with Done / Snooze (Linear model, `10-dashboard`).
