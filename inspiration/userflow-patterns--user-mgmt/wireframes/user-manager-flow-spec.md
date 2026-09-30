# User Manager – low-fidelity flow spec (Essentials 2.0)

Status: v0.1 draft, 2026-09-18. Companion to `../inspiration/user-manager-shortlist.html` (the 41 keeps + 10 counter-examples) and to the legacy screenshots in `pen-files/essentials_v0.1.pen` (frames `ls-essentials-user-manager*`).

Purpose: one source of truth for the wireframe prompts in `pencil-prompts.md`. Fix assumptions here, then regenerate the affected prompt. Nothing in this file is final design; every screen is a solution concept to test against the product vision.

## Scope and actors

- **In scope:** the seven FigJam nodes under *User Manager* (LDAP, import learners from Canvas, learner groups, users, permissions and access, batch upload, SSO). LDAP and SSO are wireframed together as one *Institution sign-in* flow because they share the same admin, the same setup moment, and the same failure modes.
- **Actors:** **Admin** (sets everything up, owns institution sign-in, roles, Canvas connection), **SimTech / SimCoordinator** (maintains: adds people, builds groups, runs imports). Faculty is not a User Manager actor; they matter in the Courses module. Learner appears only as the *other side* of sign-in and invitation screens.
- **Out of scope:** Learner Assignment into events and rooms (Courses module), the Check-In tab, the Courses object itself. Groups are plain cohorts for now; Courses come later.

## Shared model assumptions (hypotheses to test)

| Assumption | Legacy today | 2.0 hypothesis | Why |
|---|---|---|---|
| Roles | 8 global roles + Custom | **3 roles: Admin, Staff, Learner.** Faculty, SimTech, Coordinator are all *Staff*; what they can touch is decided by content scope (group, event, recording), not by role. | "Simplified user roles" is on Hergo's validate list; StackAI / Retool / Fresha matrices are the counter-examples. Gamma and Zendesk show the floor. |
| Account creation | Admin types a password for every user | **No admin-set passwords.** People are *invited* (email) or *provisioned* (SSO first login, Canvas sync). Status: Invited → Active → Deactivated. | John Carroll: password reset via support call locked out founding faculty for six months. Atlassian JIT, Slite invitation. |
| Identity of a person | UCID or email, ambiguous | **Email is the match key** for imports and sync; a *Directory ID* is shown when the account came from LDAP or Canvas. | Canvas NRPS / CSV docs: the duplicate-user trap. Ghost, Intercom upsert on email. |
| Group source | All groups hand-built | Every group carries a **source badge: Local / Directory / Canvas.** Synced groups are read-only for membership. | Okta group source filter; Atlassian review-before-replace. |
| Removal | Inactive checkbox | **Deactivate, never delete from the UI.** Deactivation explains what the person loses and what stays (recordings, grades). | Loom, Microsoft Entra disable vs delete. |
| Access changes | Role dropdown only | Every role or scope change shows a **one-line consequence** before confirm. | Twist downgrade, Slack guest invite. |

## Shared shell (used on every screen)

Left nav (Events, Recording, Video Review, Reports, Groups, Calendar, **People**, Settings), top bar with search. The module is renamed **People** in the wireframes; note it as a naming hypothesis, not a decision. Tabs inside People: **Users · Groups · Imports · Sign-in**. The legacy "Batch User Create" wizard becomes the Imports tab; LDAP/SSO become the Sign-in tab.

Each wireframe artboard is one *journey*: screens left to right, a short arrow label between screens ("clicks Invite", "file parsed"), and sticky notes for decisions, hypotheses and references.

---

## A. Users – add, edit, deactivate

**Actor:** SimTech (add, edit), Admin (deactivate Staff).
**Legacy pain:** 11-field modal, mandatory password, "Inactive" checkbox with no explanation, Role dropdown with 8 options.

Screens:

1. **Users list.** Table: Name, Email, Role (Admin/Staff/Learner), Groups (chips), Source (Local/Directory/Canvas), Status (Invited/Active/Deactivated), Last sign-in. Filters: Role, Status, Source, Group. Primary action **Invite people**. Row click opens the person panel. Multi-select → *Add to group* / *Deactivate*.
2. **Invite people (dialog).** One paste box: "Paste one or more emails". Rows appear below as chips. Role selector (3 radios, one-line description each). Optional "Add to group" picker. Button: **Send invites**. Note: this is also the small-batch path (Miro / Linear); there is no separate "new user" form.
3. **Invite sent (inline confirmation).** Rows in the list appear with Status *Invited*, plus a "Resend" link. Sticky: no password is ever set by staff.
4. **Person panel (side sheet).** Header: name, email, source badge, status. Sections: *Role* (inline segmented control, Expensify style; switching shows a consequence line), *Groups* (chips with remove), *Access* (link to "What can X access?", see flow E), *Sign-in* (last sign-in, "Send reset link", and for Directory accounts: "Identity linked to jdoe@uni.edu · Unlink" – the GitHub repair pattern).
5. **Deactivate (confirmation dialog).** Loom pattern: three lines – what they lose (sign-in, event access), what stays (recordings, assessments stay attributed), who takes over (optional owner transfer for Staff). Buttons: **Deactivate** / Cancel. Reactivate is a single action on the panel later.

Don't build: full name + password acceptance form (Dovetail), per-user permission grid.

---

## B. Groups – create, manage members, archive

**Actor:** SimTech.
**Legacy pain:** dual-list picker in a modal, no source concept, hidden-groups checkbox, no archiving story.

Screens:

1. **Groups list.** Cards or rows: name, member count, source badge (Local / Directory / Canvas), last updated, optional group admin. Filter by source. Primary action **New group**. Sticky: synced groups show "Membership managed by Canvas / Directory".
2. **New group (dialog).** Name, type (Learner cohort / Staff), then **one screen with two ways in** (Front pattern): a checkbox picker of existing people with search, and an "Import from file" drop zone beneath it. Small groups by hand, big cohorts by file.
3. **Group detail.** Members table with Add / Bulk upload / Download side by side (Google Workspace). Multi-select in the *Users* list also offers "Add to group" (Canva), so a group can be built from the roster without opening the builder.
4. **Group settings.** Rename, optional group admin (Calendly delegated admin), **Archive** with consequence text: "Members keep their accounts. Events and recordings linked to this group stay visible to Staff. The group leaves pickers." Sticky: the "still uncovered" items from research – merging groups, late joiners' retroactive access – are marked as open questions on the artboard, not designed.

Don't build: Confluence per-user checkbox grid, a roles matrix on groups.

---

## C. Imports – batch upload via paste or file

**Actor:** SimTech; Admin for large or repeated imports.
**Legacy pain:** must download an Excel template first; no column mapping; create-vs-update is a radio the user has to understand; overview uses cryptic row icons; finalize summary is two numbers.

Screens:

1. **Imports tab, empty state.** Two entry cards: **Paste emails** (small batch, opens flow A screen 2) and **Upload a file** (CSV or XLSX, any column order). A list of past imports below: date, file, created / updated / failed counts, "Undo" available for 24 hours. Sticky: no template download required; any spreadsheet with an email column works.
2. **Upload.** Drop zone; after drop, a preview strip shows the first three rows as detected.
3. **Map columns.** Left: destination fields (Email *required*, First name, Last name, Role, Group, Directory ID). Right: dropdown per field with the file's column headers, auto-matched where obvious, with **sample values** shown beside each (Customer.io / Rox). Unmapped columns are listed as "ignored".
4. **Review.** Counts up front: "42 new · 8 existing (will be updated) · 2 invalid". Matching rule stated in one sentence: "People are matched by email. Existing people are updated, never duplicated." Invalid rows listed with the reason. Option: "Add everyone in this file to group ___". Safety line (Entra quarantine): "This file would deactivate 0 people" – if an import would remove more than N people, the run pauses for confirmation. Button **Import 50 people**.
5. **Result.** Honest summary (Intercom): created / updated / failed with a downloadable error file; the batch is auto-labelled "Import 2026-09-18" as a filter on the Users list (Ghost). Link "Undo this import".

AI note: research found no evidence for AI here. One optional sticky on screen 3: "AI variant: auto-map columns and flag likely duplicates by name similarity" – labelled hypothesis, not a screen.

Don't build: Deel's four-stage full-screen wizard, template-first flows.

---

## D. Canvas – add a synced group

**Actor:** Admin connects once; SimTech adds synced groups.
**Legacy:** nothing exists. Customers double-enter rosters.

Screens:

1. **Sign-in tab → Integrations card "Canvas: Not connected".** Button **Connect Canvas** (Admin only). Sticky: LTI / NRPS is the mechanism; wireframe only the moments the user sees.
2. **Connect Canvas (dialog).** Institution Canvas URL, "Authorize in Canvas" button, returns with a green "Connected as …" state. Test-before-save: **Save** disabled until the test roster call succeeds (GitHub pattern).
3. **New group → source Canvas.** In the New group dialog (flow B screen 2), a third way in appears: **Sync from Canvas course**. Searchable list of courses the connection can see; picking one shows enrolment count and the role filter (Students / Teachers).
4. **Preview matches.** Before creating: "31 learners · 27 already have accounts (matched by email) · 4 will be invited". Identifier warning (Canvas docs): a row where the Canvas email differs from an existing directory email is flagged for the user to choose. Button **Create synced group**.
5. **Synced group detail.** Source badge *Canvas*, "Last synced 5 min ago", **Sync now**, and a sync policy toggle: "Add new enrolments automatically · Never remove people automatically (they are flagged instead)". Vimeo pattern: continuous sync and one-shot upload are distinct verbs in the same header.

Don't build: a snapshot import that creates new accounts for every roster row.

---

## E. Access – roles, content scope, "what can X access"

**Actor:** Admin (roles), SimTech / Staff (sharing a recording or event).
**Legacy pain:** 8 roles, groups carry no privileges, access to a video decided by assignment plus role with no way to see the result.

Screens:

1. **Roles (Settings → People → Roles).** Three cards, one line each: *Admin – everything, including sign-in and billing*; *Staff – runs events, records, grades, sees what they are assigned to or what is shared with them*; *Learner – sees own events, recordings and feedback*. No matrix. Sticky: "Hypothesis – 8 → 3. What did we lose? List the legacy roles here and where each maps." (Gamma / Zendesk).
2. **Change role (inline).** Segmented control on the person panel; choosing a lower role shows "Jane will lose: event scheduling, grading. She keeps: her recordings." (Twist).
3. **Share (recording or event) panel.** Three audiences stacked, each with its own level (ElevenLabs / Coda): *Groups* (BScN 2nd-year: View), *People* (named, View / Annotate / Download), *Link* (off / anyone with the link at the institution). Inherited access from the event is shown greyed with "inherited from event" (Coda). Time box (Frame.io / Squarespace): "Available from [date] until [date]" with presets (until end of semester, 7 days, custom).
4. **What can Jane access? (person-side view).** Basecamp pattern: a plain-English checklist per content type – "Events: 12, via BScN 2nd-year · Recordings: 40, via events · Reports: none". Each line links to the source of the access. This is the direct answer to the Galen lab-manager complaint.
5. **Guest / time-boxed invite.** Slack pattern: inviting an external SP or guest faculty shows role, content scope and expiry on one screen.

Don't build: StackAI / Retool / Fresha matrices and tiers.

---

## F. Institution sign-in – LDAP / Active Directory and SSO

**Actor:** Admin (setup), Learner and Staff (sign-in, recovery).
**Legacy:** System → Security and Directory Access tabs that need institutional IT and Elevate Support; password reset by support call.

Screens:

1. **Sign-in tab overview.** Three cards with status: *Password sign-in (on)*, *Single sign-on – SAML (not set up)*, *Directory – LDAP / AD (not connected)*, plus Integrations (Canvas, flow D). Each card: one-line consequence of turning it on. Homerun pattern: login policy radios "Password · Password or SSO · SSO only" with consequence text; "SSO only" is disabled until a test has passed.
2. **Set up SSO.** Metadata upload or IdP URL, then **Test sign-in** which opens a test login; **Enable** stays disabled until the test passes (GitHub). Provisioning policy radio: "Create accounts at first sign-in as Learner" (Atlassian JIT) or "Only people who already exist".
3. **Connect directory (LDAP / AD).** Server, bind account, then **choose what to import**: user OU picker and group OU picker as two separate lists (Okta). Matching rule stated: "People are matched by email; directory groups become groups with source *Directory*". Warning line: "Changing these filters later can deactivate people who fall outside them" (Okta). **Preview** shows counts before enabling.
4. **Learner sign-in.** One field: email. If the domain maps to SSO, the button becomes "Continue with University sign-in"; if not, password. Failure state (Riverside): "This email isn't set up for university sign-in. Use a password instead, or contact your sim centre" – retry and contact routes stay on screen (incident.io).
5. **Recovery.** Wrong password → inline "Send me a code instead" (Microsoft Copilot); too many attempts → code, not lockout (Surfshark). Admin side: person panel shows "Send reset link" and "Unlink identity" (GitHub repair). Sticky: this is the six-month-lockout fix; self-service recovery is a retention feature for the most capable users.

Don't build: recovery keys (Skiff), dead-end "link expired" pages (Sentry).

---

## Open questions for the artboard (sticky notes, not screens)

- Is *Staff* one role or two (Coordinator can manage people, Faculty cannot)? Wireframe assumes one; flag it.
- Simulated Patients: a Learner-type account with no sign-in, or a group type? Not designed.
- Renaming, merging groups; late joiners' retroactive access (research Q7 gap).
- Whether Canvas sync belongs in Groups or in Courses once the Courses module exists.
- Naming: "People" vs "User Manager".
