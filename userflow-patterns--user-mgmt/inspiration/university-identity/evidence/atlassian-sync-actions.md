## How to Manage Account Sync Actions in Atlassian Admin Hub

Platform Notice: Cloud Only - This article only applies to Atlassian apps on the [cloud platform](https://confluence.atlassian.com/display/Cloud/Compare+Atlassian+cloud+vs+server).

## Summary

When your organisation uses **SCIM (System for Cross-domain Identity Management)** to provision users from an identity provider (IdP) such as Okta, Azure AD, or OneLogin, Atlassian maintains a live link between each user's IdP record and their Atlassian account. This link called a **SCIM link** controls how attributes (name, email, department) and group memberships (and therefore product access) flow from your IdP into Atlassian.

In practice, SCIM links can get into broken or outdated states:

- A user's IdP attributes were updated but the change never propagated to Atlassian the account looks **stale**.
- A transient SCIM failure left the account partially out of sync.
- The SCIM link is pointing to the **wrong person** the wrong human is behind the link.
- The account is **blocked by SCIM** admins can't delete, reactivate, or locally edit it because SCIM “owns” those operations.

## Solution

Org admins can now unlink or resync these accounts directly from the AdminHub UI.

### The two new actions

| Action in Admin UI | What it does | Use when |
| --- | --- | --- |
| **Sync account** | Forces a fresh re-read of the user's SCIM record from your IdP and applies it immediately to the Atlassian account - attributes, groups, and product access | User's data in Atlassian is stale or inconsistent with your IdP |
| **Stop syncing account** | Breaks the SCIM link between the Atlassian account and the IdP record. The Atlassian account stays active; the IdP record stays intact. Only the connection between them is removed. | SCIM link is wrong, or you need to manage the account locally (delete, reactivate, edit) |

**Both actions have an immediate effect.** Read the relevant section carefully before proceeding.

### Understanding SCIM account states

Before using these actions, it helps to understand the three states a SCIM-managed account can be in:

| State | What it means | Actions available |
| --- | --- | --- |
| **Managed account with no SCIM\_LINK** | Atlassian account exists, but there is no SCIM user linked to it. The account may still be in a verified domain (making it a “managed account”) but it is not SCIM-controlled. | Sync account and Stop syncing account are **hidden** there is nothing to sync or unlink |
| **SCIM\_MANAGED\_LINKED** | Normal SCIM-managed state. A SCIM user record exists in the provisioning directory and is linked to this Atlassian account. Attributes and groups flow from IdP -> Atlassian. Some lifecycle operations (delete, reactivate) may be blocked by SCIM. | **Sync account** and **Stop syncing account** are both available (when exactly 1 healthy link exists) |
| **SCIM\_UNLINKED** | The SCIM user record still exists in the provisioning directory (`scimUserId` is retained), but the link to the Atlassian account has been broken (`atlassian_account_id = NULL`). SCIM updates are still received by the directory but are no longer applied to any Atlassian account. The Atlassian account is still a “managed account” (email in a verified domain) but is no longer SCIM-controlled. | Sync account and Stop syncing account are **hidden**. Lifecycle operations (delete, reactivate, local edits) are now unblocked. |

### Before you begin

- You must be an **Org admin** or **User access admin** for the organisation.
- Your organisation must have **Atlassian Guard** with SCIM provisioning configured.
- Both actions are only available when a user has **exactly one active, healthy SCIM link**. Zero links or two or more links disable both actions.
- Both actions are accessible from Atlassian Admin: **Directory -> Managed accounts** or **Members** view -> click a user -> **More actions** menu.

### Scenario 1: A user's profile or product access is out of date - use Sync account

### The problem this solves

**Sync account** triggers an immediate, targeted sync for one user when their Atlassian profile or product access is stale compared with your IdP.

### Common situations

- User's display name, email, job title, or other attributes in Atlassian don't match your IdP.
- User should have product access based on their IdP group, but the access hasn't applied yet.
- A transient SCIM failure left the account partially out of sync.
- You updated the user in your IdP and want the change applied immediately.

### What happens when you sync

1. Atlassian re-reads the user's current record from the SCIM directory.
2. SCIM-managed attributes are overwritten to match the IdP.
3. Group memberships and product access are updated to match current IdP assignments.
4. Changes propagate to Jira, Confluence, and other products through the standard provisioning pipeline.

**The sync overwrites any locally made changes to SCIM-managed fields with whatever is currently in your IdP.** Make sure your IdP data is accurate before syncing.

### How to sync an account

1. Go to [admin.atlassian.com](https://admin.atlassian.com/) and select your organisation.
2. Navigate to **Directory** -> **Managed accounts**.
3. Find and click the user you want to sync.
4. Open the **⋯ More actions** menu.
5. Click **Sync account**.
6. The sync begins immediately and a **“Sync completed.”** banner appears when it finishes.

**No confirmation dialog appears for Sync account.** If you are unsure, verify your IdP data first.

### Scenario 2: A user is incorrectly linked or blocked by SCIM - use Stop syncing account

### The problem this solves

**Stop syncing account** breaks the SCIM link safely when the link is wrong or when local account management is blocked by SCIM. It does not delete the Atlassian account or the IdP record.

### Common situations

- The user is linked to the wrong SCIM record.
- You need to delete, reactivate, or locally edit an account that is currently blocked by SCIM.
- You need to change a user's email or identifier in Atlassian and then relink them to the IdP.
- A user has left the organisation in the IdP, but their Atlassian account needs to remain active temporarily.

### What happens when you stop syncing

1. The SCIM user record is unlinked from the Atlassian account.
2. SCIM-managed group memberships are removed from the Atlassian account.
3. The Atlassian account remains active and billable.
4. The SCIM record in your IdP is not deleted.
5. Future SCIM updates are no longer applied to the Atlassian account.
6. Previously blocked lifecycle operations are unblocked.

**Understand the risks before stopping sync:** billing continues until you deactivate or delete the Atlassian account, relinking requires matching identifiers, authentication policies may change, and SCIM-managed group access may be removed.

### How to stop syncing an account

1. Go to [admin.atlassian.com](https://admin.atlassian.com/) and select your organisation.
2. Navigate to **Directory** -> **Managed accounts**.
3. Find and click the user whose sync you want to stop.
4. Open the **⋯ More actions** menu.
5. Click **Stop syncing account**.
6. Review the confirmation dialog.
7. Click **Stop sync** to confirm, or **Cancel** to exit without changes.
8. On success, a **“Sync stopped.”** banner appears and the account page refreshes.

### Why are the actions greyed out or hidden?

| What you see | Reason | What to do |
| --- | --- | --- |
| **Sync account** and **Stop syncing account actions are hidden** | The account has no SCIM link or is not managed by any Identity Provider. | No action needed; the account is already locally managed. |
| **Sync account** and **Stop syncing account** is disabled because | The user has two or more SCIM links. | Contact Atlassian Support to resolve duplicate SCIM links. |

### Quick decision guide: Which action should I use?

| Situation | Recommended action |
| --- | --- |
| User data in Atlassian is wrong or out of date, and the IdP data is correct. | **Sync account** |
| IdP data is also wrong. | Fix the IdP data first, then use **Sync account**. |
| The SCIM link points to the wrong person. | **Stop syncing account**, then reprovision correctly. |
| The account is blocked by SCIM and you need to delete or reactivate it. | **Stop syncing account**, then perform the lifecycle action locally. |
| The button is greyed out because of multiple identity providers. | Contact Atlassian Support first. |

### Troubleshooting errors

#### “We couldn't sync this account” or “Something went wrong. Try again.”

A transient error occurred. Wait a few minutes and try again. If the issue persists, check the [Atlassian status page](https://status.atlassian.com/) and contact Atlassian Support with the user's Atlassian Account ID, organisation ID, and approximate time.

#### “We couldn't stop syncing this account” or “Something went wrong. Try again.”

A transient unlink error occurred. Wait a few minutes and try again. If the issue persists, contact Atlassian Support.

**Do not assume the account was partially unlinked.** Treat it as SCIM-managed until you see the “Sync stopped.” banner and the page refreshes.

#### The sync completed but the user's data hasn't changed

The SCIM directory may already match Atlassian, or your IdP changes may not have propagated yet. Verify the IdP data and provisioning logs, wait a few minutes, and try again.

#### The user's product access changed unexpectedly after syncing

Syncing applies the current group memberships from your IdP. Review and update the user's IdP groups if needed, then sync again.

### Frequently asked questions

- Will syncing an account disrupt the user's active session?
	- No. Sync account updates profile attributes and group memberships in the background. Active sessions are not interrupted.
- Can I undo Stop syncing account?
	- Not with a single button. To re-establish the SCIM link, reprovision the user from your IdP with matching identifiers such as email, userName, and externalId.
- Does Stop syncing account delete the user from my IdP or from Atlassian?
	- No. Neither account is deleted. Only the link between them is broken.
- Can I use these actions if a user has multiple SCIM links?
	- No. Both actions are disabled when a user has more than one SCIM link. Contact Atlassian Support to investigate and resolve multiple links first.
- Are these actions logged in the audit trail?
	- Yes. Both actions are logged as admin actions through Atlassian's Enterprise Gatekeeper.
- What happens to billing after I stop syncing?
	- The Atlassian account remains active and billable. Deactivate or delete the account separately if you want billing to stop.

### Related articles

- [Configure user provisioning with an identity provider](https://support.atlassian.com/provisioning-users/docs/configure-user-provisioning-with-an-identity-provider/)
- [Manage SCIM provisioning for your organisation](https://support.atlassian.com/provisioning-users/docs/manage-scim-provisioning-for-your-organization/)
- [Understand managed accounts](https://support.atlassian.com/user-management/docs/understand-user-types-and-permissions/)