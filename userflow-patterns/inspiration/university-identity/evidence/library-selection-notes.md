# Refero selection and visual review

Access date: 2026-09-08. Research scope is institutional identity journeys, not visual redesign.

Six references were selected after inspecting actual retrieved screenshots: Zendesk SAML configuration; Calendly provisioning explanation; Riverside SSO discovery failure; Loom member deactivation; Intercom CSV user import; Rox CSV column mapping. Every ordered screenshot is retained locally in JPEG and in the report data. The FigJam selection keeps the original indices and limits long flows to eight screenshots.

The supported Refero `get_screen_image` tool with `image_size=full` supplied actual image data. Original thumbnail URLs remain in the reference record for provenance; local image bytes are used for presentation. No failed preview URL was bypassed. `library-assets.json` maps reference IDs to paths relative to `assets/`; `localAssets` in `library-references.json` is relative to this research folder.

## Outcome corrections after inspecting screenshots

- Intercom 671: the final job has **0 created, 0 updated, 9 errors**, all invalid emails. The upstream flow metadata describes a happy path; the screenshots do not support successful import or partial success. A finished processing job is different from successfully imported records.
- Riverside 4649: the supplied email is **not recognized for SSO**; the screen refers the person to their organization administrator. No identity-provider handoff or successful sign-in is shown.
- Rox 10795: mapping review shows both columns at 10/10 valid. The last toast says the file is uploaded and processing; it does **not** prove completed contact creation.
- Loom 1250: active members decrease from two to one after deactivation. The confirmation describes content and reactivation billing consequences, but no reactivation flow, sync or directory-managed action is shown.
- Zendesk: a blank SAML form with helper text is observed. Save success and test connection are not shown.
- Calendly: a provisioning information page separates provisioning from SSO and exposes help/contact links. Actual SCIM setup is not shown.

## Deduplication

Intercom 671 is reused from the page-1 research because this round asks a materially different question: how repeated snapshot imports match identity and how administrators recover from an all-error import. The original bulk-entry research is preserved. Existing assets in this round were reused during this selection pass. Calendly and Zendesk appear on page 1 with different reference IDs; these selected screens concern institutional identity setup rather than previous general access patterns. Each selected product uses Refero as its library source for this round.

## Genuine library gaps

The additional literal query `SCIM managed user profile synced group` returned generic group-management and invitation screens (for example TravelPerk company groups, Calendly groups, Retool permission groups and Dropbox groups), without proven externally controlled profile fields or directory source labels. No Q3 reference was added from these titles alone. Earlier LDAP/n8n search results with LDAP only in a navigation sidebar were also insufficient evidence of configuration or lifecycle behavior.

No selected Refero sequence demonstrates university stable-ID account linking, changed-email recovery, first synchronization scope preview, externally controlled profile editing, or Canvas roster-to-institutional-identity matching. Official documentation supplements these gaps; it must remain labeled documentation, not a library flow.
