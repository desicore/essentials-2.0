We support user provisioning using the System for Cross-domain Identity Management (SCIM), and this feature uses the SCIM 2.0 version of the protocol.

User provisioning integrates an external user directory with your Atlassian organization. This integration allows you to automatically update the users and groups in your Atlassian organization when you make updates in your identity provider. For example, with user provisioning, you can create, link, and deactivate managed Atlassian user accounts from your identity provider.

**Who can do this?**  
**Role:** Organization admin  
**Atlassian Cloud:** [Atlassian Guard Standard](https://support.atlassian.com/security-and-access-policies/docs/understand-atlassian-guard/)  
**Atlassian Government Cloud:** Available

## Supported identity providers

You can use the identity provider of your choice, but some capabilities are only available with selected identity providers. [Learn which identity providers we support](https://support.atlassian.com/provisioning-users/docs/supported-identity-providers/)

The steps involved to set up user provisioning will differ depending on the identity provider you use. Here are setup instructions for some of the commonly used identity providers:

- Okta: [Learn how to configure user provisioning with Okta](https://support.atlassian.com/provisioning-users/docs/configure-user-provisioning-with-okta/)
- OneLogin: [Learn how to configure user provisioning for OneLogin](https://onelogin.service-now.com/support?id=kb_article&sys_id=05501489db792708ca1c400e0b9619ea "https://onelogin.service-now.com/support?id=kb_article&sys_id=05501489db792708ca1c400e0b9619ea")
- Azure AD: [Learn how to configure user provisioning for Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/atlassian-cloud-provisioning-tutorial "https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/atlassian-cloud-provisioning-tutorial")
- Cisco Duo: [Learn how to configure user provisioning with Cisco Duo](https://support.atlassian.com/provisioning-users/docs/configure-user-provisioning-with-cisco-duo/ "https://support.atlassian.com/provisioning-users/docs/configure-user-provisioning-with-cisco-duo/")
- Google Cloud:[Configure user provisioning with Google Cloud](https://support.atlassian.com/provisioning-users/docs/configure-user-provisioning-with-google-cloud/)
- Google Workspace: [Learn how to set up user provisioning for Google Workspace](https://support.atlassian.com/provisioning-users/docs/connect-to-g-suite/ "https://support.atlassian.com/provisioning-users/docs/connect-to-g-suite/")
- PingFederate: [Learn how to configure user provisioning for PingFederate](https://docs.pingidentity.com/r/en-us/pingfederate-atlassian-cloud-connector "https://docs.pingidentity.com/r/en-us/pingfederate-atlassian-cloud-connector")
- JumpCloud: [Learn how to configure user provisioning for JumpCloud](https://support.jumpcloud.com/support/s/article/Identity-Management-with-Atlassian-Cloud "https://support.jumpcloud.com/support/s/article/Identity-Management-with-Atlassian-Cloud")

If you want to use an identity provider that isn’t supported, you can use the [user provisioning API](https://developer.atlassian.com/cloud/admin/user-provisioning/rest "https://developer.atlassian.com/cloud/admin/user-provisioning/rest") to create your own integration that allows you to manage users and groups.

Before you configure user provisioning, you’ll need to add your identity provider to your Atlassian organization. [Learn how to add an identity provider](https://support.atlassian.com/provisioning-users/docs/choose-your-identity-provider/)

## Available attributes for mapping

This is the attribute mapping between an identity provider and your Atlassian organization.

<table><tbody><tr><th rowspan="1" colspan="1"><p><strong>SCIM attribute</strong></p></th><th rowspan="1" colspan="1"><p><strong>AtlassianCloud attribute</strong></p></th></tr><tr><td rowspan="1" colspan="1"><p>nickName</p></td><td rowspan="1" colspan="1"><p>Publicname</p></td></tr></tbody></table>

The way you map attributes changes depending on your identity provider. Check out the step-by-step instructions for Okta, OneLogin, and Microsoft Azure AD.  
[Learn how to map attributes](https://support.atlassian.com/provisioning-users/docs/sync-user-attributes-to-your-organization/ "https://support.atlassian.com/provisioning-users/docs/sync-user-attributes-to-your-organization/")

## Supported apps

Provisioning is available for all Atlassian accounts, which means that you can create, update, and deactivate accounts from your identity provider. Syncing groups is only currently available for Jira app instances, Confluence, Trello and not yet available for Bitbucket.

When a Trello Enterprise is linked to an Atlassian organization, any users who were already provisioned to the organization via SCIM, as well as any users provisioned this way going forward, will have a free Trello account provisioned. The account will be managed by the Trello Enterprise but will not have an Enterprise license unless granted one by an admin.

## How user provisioning works

After you connect your identity provider to your organization, your users and groups sync to your organization and sites, making them available for granting app access. This diagram illustrates how users and groups sync once you set up user provisioning.

![Diagram of identity provider connecting to your organization - your users and groups sync to your organization and sites](https://images.ctfassets.net/zsv3d0ugroxu/fz3yfJt59O10E0j2Yd442/2903b536866e350bf6a0c490956e05df/diagram_UserProvisioningOverview)

We don’t send users an invitation when they’re provisioned from an identity provider through SCIM or synced from Google Workspace.

[Learn more about user provisioning in this video](https://youtu.be/7EQhYz-vApw "https://youtu.be/7EQhYz-vApw")

### Allowed number of groups and users

A large number of groups and users can take a while to sync to an Atlassian organization. We recommend that you stay below the following limits on any connected site of your external directory.

- **Maximum users:** 1 million
- **Maximum users per group:** 290,000
- **Maximum groups:** 250,000
- **Maximum total group memberships**: 8M

If you need to provision more users or groups than these recommended limits, please [contact customer support](https://support.atlassian.com/contact/#/ "https://support.atlassian.com/contact/#/") to discuss your requirements.

### Users and groups sync from your identity provider to your organization

When you set up user provisioning, you create a directory for your users.

You create the groups to provision to your identity provider directory. For some organizations, you continue to see a group we create called **All members for directory - <** ***directory\_id*** **\>**, and add all users to.

If you use Google Workspace, you will see a group we created called All users for Google Workspace.

![Diagram of identity provider for different groups syncing with your organization](https://images.ctfassets.net/zsv3d0ugroxu/2uV6bXipBgeWxXaSTRewAq/1f9820608825ce406fde77e6b530b875/diagram_UserProvisioning1)

After you connect your identity provider to your Atlassian organization, synced directory groups appear in your Atlassian organization and you're unable to make changes to a user's account from the organization.

If your Atlassian organization already has existing users from a **verified domain**:

- *And the identity provider has a user with the same email address as a user in your organization*, we create a link between both user accounts. You can only make changes to the user's account from your identity provider.
- *And the identity provider doesn't have a user with the same email address as a user in your organization*, the user's access remains the same and you can still manage that user from your Atlassian organization.

If your Atlassian organization already has existing users from an **unverified domain**:

- *And the identity provider has a user with the same email address in your organization*, we create a link between both user accounts. You can only make changes to the user’s account from your identity provider.
	You may want to avoid syncing an existing user from an unverified domain. The user may get access to content in your organization or app access, based on how you set up groups to sync from your identity provider.  
	  
	We recommend you verify the domain for these users to control access to your organization’s content and access to Atlassian apps. [How to verify a domain](https://support.atlassian.com/user-management/docs/verify-a-domain-to-manage-accounts/ "https://support.atlassian.com/user-management/docs/verify-a-domain-to-manage-accounts/")

Syncing more than 500 groups will take a significant amount of time. Be prepared to wait a while for the sync to complete.

### Your organization’s directory syncs to all associated sites

Any sites you've added to your organization now have access to your provisioned users and groups, as shown in the diagram. Synced directory groups will appear along the default and native groups in your sites.

![Diagram of your organization’s directory syncing to all associated sites](https://images.ctfassets.net/zsv3d0ugroxu/5Y3X15svPAwe6GmAvvUaFX/2172155ffed774492407cfe822f3a172/diagram_UserProvisioning2)

### Groups get assigned to apps

You can start granting users app access by assigning groups to your site's apps.

![Diagram of cloud sites getting assigned to Jira Software an to Confluence ](https://images.ctfassets.net/zsv3d0ugroxu/5JGEd8XRTU7GzkTuyVasSy/ed438723a1cc86d2c18b5c76acf5e965/diagram_UserProvisioning3.png)

When users have app access, Jira and Confluence admins can update app permissions for those users from the Jira and Confluence settings. See [What are global permissions, and what do they control?](https://support.atlassian.com/jira-cloud-administration/docs/what-are-global-permissions-and-what-do-they-do/) for administering Jira permissions and [Manage global permissions in Confluence administration](https://support.atlassian.com/confluence-cloud/docs/manage-site-level-permissions/) for administering Confluence permissions.

## User provisioning features

Once you connect your identity provider to your Atlassian organization, you manage all user attributes and group memberships from your identity provider. If you want to manage users from your Atlassian organization, disable the connection with your identity provider.

### Manage group names

Rename groups after they've synced to your Atlassian organization. You’ll need to create a new group with the desired name, update its membership, and delete the old group.

### Resolve group conflicts

Review group names before they’ve synced to your Atlassian organization. You’ll need to rename groups with the same name in your identity provider and Atlassian organization. [Learn how to resolve group conflicts when syncing users](https://support.atlassian.com/provisioning-users/docs/resolve-group-conflicts-when-syncing-users/)

### Supported user account operations

When you perform these user management operations from your identity provider, your updates will sync with your Atlassian organization.

<table><colgroup><col> <col></colgroup><tbody><tr><th rowspan="1" colspan="1"><p><strong>Operations</strong></p></th><th rowspan="1" colspan="1"><p><strong>Notes</strong></p></th></tr><tr><td rowspan="1" colspan="1"><p>Create a new user account</p></td><td rowspan="1" colspan="1"><p>An Atlassian account is created with the email address if one doesn’t already exist.</p></td></tr><tr><td rowspan="1" colspan="1"><p>Link an existing user account</p></td><td rowspan="1" colspan="1"><p>If an Atlassian account already exists on the Atlassian platform, we'll automatically link the user in your identity provider to the user in your Atlassian organization.</p></td></tr><tr><td rowspan="1" colspan="1"><p>Update a user's account details</p></td><td rowspan="1" colspan="1"><p>You can update these user attributes from your identity provider:</p><ul><li><p>Display name: This is a combination of a user’s first and last name. If you update the display name it also overwrites the attributes for first and last name.</p></li><li><p>Email address</p></li><li><p>Organization</p></li><li><p>Job title</p></li><li><p>Timezone</p></li><li><p>Department</p></li><li><p>Preferred language</p></li></ul><div><p>When you update an email address from a verified or unverified domain to an unverified domain it:</p><ul><li><p>Removes the user from groups provisioned by SCIM</p></li><li><p>May cause the user to lose app access granted in the SCIM group</p></li></ul><p>To make sure users aren’t removed from app access groups, <a href="https://support.atlassian.com/user-management/docs/verify-a-domain-to-manage-accounts/">verify a domain</a> in your Atlassian organization first.</p></div><p>About attributes for external users</p><p>External users aren’t managed accounts. This means that when you update attributes in your identity provider for these users, we won't sync the updates.</p></td></tr><tr><td rowspan="1" colspan="1"><p>Activate a user account</p></td><td rowspan="1" colspan="1"><p>You can activate a user's Atlassian account from your identity provider.</p></td></tr><tr><td rowspan="1" colspan="1"><p>Deactivate a user account</p></td><td rowspan="1" colspan="1"><p>You can deactivate the Atlassian account for users from your verified domain in the identity provider.</p><p>When you deactivate external users:</p><ul><li><p>User is removed from group provisioned by SCIM</p></li><li><p>User could lose app access granted in the SCIM group</p></li><li><p>User has Atlassian site access</p></li></ul><p>To remove site access after deactivation, you can remove the user from the site.</p></td></tr><tr><td rowspan="1" colspan="1"><p>Delete a user account</p></td><td rowspan="1" colspan="1"><p>We recommend you deactivate a user's account in your identity provider before you delete a user account.</p><p>To delete a user's Atlassian account from your verified domain, delete the user from the Atlassian directory in your organization.<br></p><p>Unable to delete user account for external users</p><p>When you delete a user from your identity provider, we deactivate the user account. To learn what happens when we deactivate, view the “deactivate a user account” section.</p></td></tr></tbody></table>

You can automate user account operations with the user provisioning [Users API](https://developer.atlassian.com/cloud/admin/user-provisioning/rest/api-group-users/#api-group-users "https://developer.atlassian.com/cloud/admin/user-provisioning/rest/api-group-users/#api-group-users").

### Supported group operations

Use groups to manage admin permissions and app access (new licenses) from your identity provider and these updates will sync with your Atlassian organization.

Any group that is marked as a default group can't be managed via SCIM integration. You can only manage groups synced from your identity provider directory via SCIM.

<table><colgroup><col> <col></colgroup><tbody><tr><th rowspan="1" colspan="1"><p><strong>Operations</strong></p></th><th rowspan="1" colspan="1"><p><strong>Notes</strong></p></th></tr><tr><td rowspan="1" colspan="1"><p>Create a group</p></td><td rowspan="1" colspan="1"><p>The group gets created as a read-only group in the organization's directory. You can only edit groups from your identity provider. Give the new group a name that doesn't already exist your organization.</p></td></tr><tr><td rowspan="1" colspan="1"><p>Delete a group</p></td><td rowspan="1" colspan="1"><p>Delete a group from your identity provider to remove the group from your organization's directory.</p></td></tr><tr><td rowspan="1" colspan="1"><p>Push an existing group</p></td><td rowspan="1" colspan="1"><p>If you try to push a group from your identity provider that has the same name as a group in your organization, you'll get an error.</p></td></tr><tr><td rowspan="1" colspan="1"><p>Update group membership</p></td><td rowspan="1" colspan="1"><p>You can update groups from your identity provider to configure app access, admin privileges, or application-specific settings, such as Confluence space permissions.</p></td></tr></tbody></table>

### Troubleshooting

When troubleshooting issues with syncing users and groups, check the **Troubleshooting log** on the **User provisioning** page of your Atlassian organization.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><th rowspan="1" colspan="1"><p><strong>Problem</strong></p></th><th rowspan="1" colspan="1"><p><strong>Workaround / troubleshooting tips</strong></p></th><th rowspan="1" colspan="1"><p><strong>Recorded in log</strong></p></th></tr><tr><td rowspan="1" colspan="1"><p>A group has successfully synced, but the group is empty and doesn't include any synced users.</p></td><td rowspan="1" colspan="1"><p>When pushing a group, make sure that the synchronized group does not have the same name as a default group (e.g. <em>org-admins</em> or <em>site-admins</em>) or a manually created group.</p></td><td rowspan="1" colspan="1"><p>Yes</p></td></tr><tr><td rowspan="1" colspan="1"><p>A group synced successfully, but you don't see it in the site admin area and can't find it on the <strong>App access</strong> page.</p></td><td rowspan="1" colspan="1"><p>Make sure you added the site to your organization. To add the site, use the <strong>Add a site</strong> option from your Atlassian organization.</p></td><td rowspan="1" colspan="1"><p>No</p></td></tr><tr><td rowspan="1" colspan="1"><p>A user seems to be successfully synced, but the user account doesn't appear on the <strong>Managed accounts</strong> page.</p></td><td rowspan="1" colspan="1"><p>Check that the user's email address is part of your verified domain.<br><br>If the user's account doesn't have an email address with your verified domain, you can navigate to <strong>Apps</strong> > <strong>Users</strong> page to find the user account.</p></td><td rowspan="1" colspan="1"><p>Yes</p></td></tr><tr><td rowspan="1" colspan="1"><p>(If Okta is your identity provider) Users don't sync to the organization directory when they were already assigned to the Atlassian app before the user provisioning integration is complete.</p></td><td rowspan="1" colspan="1"><p>To sync users correctly, reassign them from the <strong>Assignments</strong> tab. If a group contains the affected users, you can reassign the group instead.</p></td><td rowspan="1" colspan="1"><p>No</p></td></tr><tr><td rowspan="1" colspan="1"><p>(If Azure is your identity provider) Users don't sync to the organization directory and you're unable to troubleshoot with the error description from the Azure log.</p></td><td rowspan="1" colspan="1"><p>Configure a second Atlassian app within Azure so that you have one for your SAML single sign-on configuration and one for user provisioning.</p></td><td rowspan="1" colspan="1"><p>No</p></td></tr><tr><td rowspan="1" colspan="1"><p>A user's updated email address can't sync because another user (either from the identity provider or not) already has that email address.</p></td><td rowspan="1" colspan="1"><p>You can either:</p><ul><li><p>Delete the other user.</p></li><li><p>Change the email address of the other user to a different email address.</p></li></ul></td><td rowspan="1" colspan="1"><p>Yes</p></td></tr><tr><td rowspan="1" colspan="1"><p>If you have a group name with the same name as an Atlassian built-in group, you won’t be able to sync the group to your organization from your identity provider.</p><p><strong>Built-in groups</strong></p><ol><li><p>atlassian-addons</p></li><li><p>atlassian-addons-admin</p></li><li><p>site-admins</p></li><li><p>org-admins</p></li><li><p>administrators</p></li><li><p>system-administrators</p></li></ol></td><td rowspan="1" colspan="1"><p>Go to your identity provider and rename the conflicting group with a name that is different from an Atlassian built-in group name and try syncing again.</p></td><td rowspan="1" colspan="1"><p>No</p></td></tr></tbody></table>

We won’t update the listed user attributes in the Atlassian app for users outside of your domain. You will need to manually update them in the Atlassian app.

## Exceptions for the Isolated Cloud

Much of the guidance on this page also applies to user provisioning in Atlassian Isolated Cloud, but there are some exceptions. Learn more about [User provisioning in the Atlassian Isolated Cloud](https://support.atlassian.com/organization-administration/docs/user-provisioning-in-the-atlassian-isolated-cloud/).

## Still need help?

The Atlassian Community is here for you.