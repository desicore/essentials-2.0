**Which user management experience do you have?**

Go to [Atlassian Administration](https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/ "https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/"). Select your organization if you have more than one. You can identify which user management experience you have by checking where your **Users** page is located.

<table><tbody><tr><th rowspan="1" colspan="1"><p><strong>Centralized</strong></p></th><th rowspan="1" colspan="1"><p><strong>Original</strong></p></th></tr><tr><td rowspan="1" colspan="1"><p>In Atlassian Administration, <strong>Users</strong> is located in <strong>Directory</strong>.</p><img src="https://images.ctfassets.net/zsv3d0ugroxu/4xDJS7tC2c2Jzp82YL5aOJ/4fe1e63a96584e485ee1f2ead53c47d2/Screenshot_OriginalUserManagement.png"></td><td rowspan="1" colspan="1"><p>In Atlassian Administration, <strong>Users</strong> is located in the <code>{site}</code> you select within <strong>Apps</strong>.</p><img src="https://images.ctfassets.net/zsv3d0ugroxu/7AevASHr0yJp0LZaXGBoxP/415717c565dfbf9c05191cef54f11de0/Screenshot_OriginalUserManagement.png"></td></tr></tbody></table>

Jump to the

---

## Original user management content

**Who can do this?**  
**Role:** Organization admin  
**Atlassian Cloud:** [Atlassian Guard Standard](https://support.atlassian.com/security-and-access-policies/docs/understand-atlassian-guard/)  
**Atlassian Government Cloud:** Available

When you set up user provisioning, you may run into the situation where your groups in your Atlassian sites have the same names as groups in your identity provider (IdP).

When you sync, we’ll warn you about duplicate group names between your IdP and your Atlassian sites. You’ll then be able to accept or reject changes to group members before you sync those groups.

Group conflicts occur when groups have the same name in your IdP as groups that already exist in your organization.

## Review groups before you sync

Before you sync and replace your groups, we’ll share a list with you of group names and a breakdown of the membership changes that will happen. Here’s a screenshot with a sample breakdown.

![A list of group names, their product access, and the changes that will happen with sync](https://images.ctfassets.net/zsv3d0ugroxu/2QFZFXi609obpZKkubMoVy/34b245d968f486ea09fc6810aa18f340/diagram_UserProvisioning2.png)
1. **Name** of the group
2. **App access** for the group
3. Name of each **site** for the group
4. Number of users **added** or **removed** if you decide to overwrite the group

**Can I sync default access groups?**

We can’t sync groups from your identity provider when the group is a default access group on your Atlassian app site. If you want to sync the group, you can change its default access status and then sync it.

To change the default access status of the group:

1. Go to [Atlassian Administration](https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/ "https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/"). Select your organization if you have more than one.
2. Select **Apps**, then **Atlassian apps**.
3. From the **More actions** () column, select **Update default group settings**.
4. Choose from the options displayed, then select **Update**.

Learn more about [Give users access to apps](https://support.atlassian.com/user-management/docs/give-users-access-to-products/)

## Update groups before you sync

To update groups before you sync, you compare user membership between the groups in a table, review each potential user change, and then make one of the following updates to your IDP.

- **Remove** users from your IdP group if you don’t want them to gain access to your Atlassian apps.
- **Add** users to your IdP group if you don't want them to lose access to your Atlassian apps.
- **Rename** your IdP group if you want to keep your Atlassian site group when syncing from your IdP to your organization.

## Sync groups after you review

When we sync groups, we overwrite your organization and site groups with your IdP groups. This means that some users could lose or gain app access and permissions granted by the group.

You have the flexibility to sync one group at a time or to sync all groups at once.

To review and sync groups:

1. Go to [Atlassian Administration](https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/ "https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/"). Select your organization if you have more than one.
2. Select **Security**, then **User security**, then **Identity providers**.
	1. For Google Workspace, select **Groups.**
		2. For other identity providers, go to the **User provisioning** section.
3. A warning message appears with the number of groups we could not sync.
4. Select **Review groups**
5. Review member changes (members to be **added** or **removed** from the group).
6. Select **Sync group.**

If you want to quickly sync all groups then select **Sync all groups** and follow the prompts.

## Group sync is complete

You know you’re done syncing when the number of synced groups listed in **User provisioning** matches the number of synced groups in your IdP.

Learn more about syncing in [User provisioning](https://support.atlassian.com/provisioning-users/docs/understand-user-provisioning "https://support.atlassian.com/provisioning-users/docs/understand-user-provisioning") or [Google Workspace](https://support.atlassian.com/provisioning-users/docs/connect-to-g-suite "https://support.atlassian.com/provisioning-users/docs/connect-to-g-suite")

---

## Centralized user management content

**Who can do this?**  
**Role:** Organization admin  
**Atlassian Cloud:** [Atlassian Guard Standard](https://support.atlassian.com/security-and-access-policies/docs/understand-atlassian-guard/)  
**Atlassian Government Cloud:** Available

When you set up user provisioning, you may run into the situation where your groups in your Atlassian organization have the same names as groups in your identity provider (IdP).

When you sync, we’ll warn you about duplicate group names between your IdP and your Atlassian organization. You’ll then be able to accept or reject changes to group members before you sync those groups.

Group conflicts occur when groups have the same name in your IdP as groups that already exist in your organization.

## Review groups before you sync

Before you sync and replace your groups, we’ll share a list with you of group names and a breakdown of the membership changes that will happen. Here’s a screenshot with a sample breakdown.

![A list of group names, their product access, and the changes that will happen with sync](https://images.ctfassets.net/zsv3d0ugroxu/2QFZFXi609obpZKkubMoVy/34b245d968f486ea09fc6810aa18f340/diagram_UserProvisioning2.png)
1. **Name** of the group
2. **App access** for the group
3. Name of each **site** for the group
4. Number of users **added** or **removed** if you decide to overwrite the group

**Can I sync default access groups?**

We can’t sync groups from your identity provider when the group is a default access group in your Atlassian organization. If you want to sync the group, you can change its default access status and then sync it.

To change the default access status of the group:

1. Go to [Atlassian Administration](https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/ "https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/"). Select your organization if you have more than one.
2. Select **Apps**, then **Atlassian apps**.,
3. For the app you want to change, select **Manage Access**.
4. Next to the group you want to change, select **More actions** (), then **Update default group setting**.  
	If you can’t select it, assign default access to another group first.
5. Select which role you’d like to make the default role for this group. Or select **None** to remove it as a default group.

Learn more about [default access groups](https://support.atlassian.com/user-management/docs/give-users-access-to-products/)

## Update groups before you sync

To update groups before you sync, you compare user membership between the groups in a table, review each potential user change, and then make one of the following updates to your IDP.

- **Remove** users from your IDP group if you don’t want them to gain access to your Atlassian apps.
- **Add** users to your IDP group if you don't want them to lose access to your Atlassian apps.
- **Rename** your IDP group if you want to keep your Atlassian organization group when syncing from your IDP to your organization.

You can use the user provisioning [Group APIs](https://developer.atlassian.com/cloud/admin/user-provisioning/rest/api-group-groups/#api-group-groups "https://developer.atlassian.com/cloud/admin/user-provisioning/rest/api-group-groups/#api-group-groups") to automate the process of adding and removing users.

## Sync groups after you review

When we sync groups, we overwrite your organization groups with your IDP groups. This means that some users could lose or gain app access and permissions granted by the group.

You have the flexibility to sync one group at a time or to sync all groups at once.

To review and sync groups:

1. Go to [Atlassian Administration](https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/ "https://support.atlassian.com/organization-administration/docs/explore-an-atlassian-organization/"). Select your organization if you have more than one.
2. Select **Security**, then **User security**, then **Identity providers**.
	1. For Google Workspace, select **Groups.**
		2. For other identity providers, go to the **User provisioning** section.
3. A warning message appears with the number of groups we could not sync.
4. Select **Review groups**
5. Review member changes (members to be **added** or **removed** from the group).
6. Select **Sync group.**

If you want to quickly sync all groups then select **Sync all groups** and follow the prompts.

**Sync all groups** syncs the first 20 groups on the list of conflicting groups. You may need to select **Sync all groups** multiple times to sync your complete list of conflicts in batches of 20.

## Group sync is complete

You know you’re done syncing when the number of synced groups listed in **User provisioning** matches the number of synced groups in your IDP.

Learn more about syncing in [User provisioning](https://support.atlassian.com/provisioning-users/docs/understand-user-provisioning/) or [Google Workspace](https://support.atlassian.com/provisioning-users/docs/connect-to-g-suite/)

## Still need help?

The Atlassian Community is here for you.