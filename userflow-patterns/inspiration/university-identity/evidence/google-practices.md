To run a successful synchronization with Google Cloud Directory Sync (GCDS), we recommend that you follow these best practices.

## Prepare GCDS

- **Ensure you meet the system requirements, particularly the amount of free RAM required** —If you are planning on syncing a large number of entities from your LDAP directory, make sure you have enough free RAM on your GCDS server. Also, make sure you're running the latest version of GCDS.
- **Make sure your setup is secure** —Ensure that the machine where GCDS is installed is secure. The credentials stored in the XML configuration file are encrypted, but if an attacker gains access to the machine, they can obtain both the XML file and the encryption key.
- **Align LDAP host name with base DN** —If you're using Active Directory, make sure the Host name setting matches the Base DN setting in Configuration Manager. If you set it to a higher level, the sync might stop after the first 1,000 users or when it reaches your configured page size. Or, select a domain controller (for example, dc01.example.com) that holds the user account objects in the base DN.
- **Update your LDAP data first and remember to simulate a sync** —When your LDAP data is ready, run a simulated sync to verify your settings. Then, run a full sync to transfer the updates to your Google Account. GCDS works best when your Google data is updated by the synchronization process.
- **Review and invite unmanaged users** —Check for existing unmanaged users. If you find unmanaged users, invite them to transfer their account to your organization's managed Google Account before running the first sync. Doing so ensures that a sync won't create conflicting accounts for these users.

#### Related topics

- [System requirements](https://knowledge.workspace.google.com/admin/users/gcds-system-requirements)
- [Download and install GCDS](https://knowledge.workspace.google.com/admin/users/download-and-install-gcds)
- [Find and manage existing accounts](https://knowledge.workspace.google.com/admin/users/use-the-transfer-tool-to-migrate-unmanaged-users)

## Manage user & admin accounts

- **User accounts: Suspend, don't delete** —If user accounts aren't found in your LDAP directory, set GCDS to suspend, rather than delete, the accounts. Deleted accounts can't be retrieved after 20 days, but data is retained for suspended accounts. You can also transfer email and Google Drive content from a suspended account to another account.
- **Sync user accounts on a different schedule** —You can quickly create and suspend user accounts after they're changed in the LDAP directory by synchronizing user accounts on a separate, more frequent, schedule. Changes that aren't as urgent (for example, shared contacts updates or group memberships) can be synced less often. Use the command line to sync only user accounts.
- **Admin accounts: Don't suspend or delete** —By default, GCDS won't suspend or delete Google administrator accounts that aren't found in your LDAP directory. Retain this setting to make sure that you don't lose any Google admin accounts.

#### Related topics

- [Find and manage existing accounts](https://knowledge.workspace.google.com/admin/users/use-the-transfer-tool-to-migrate-unmanaged-users)
- [User attribute settings](https://knowledge.workspace.google.com/admin/users/learn-more-about-configuration-manager-options#user)
- [Synchronize using the command line](https://knowledge.workspace.google.com/admin/users/synchronize-using-the-command-line)

## Use rules & limits to sync data

- **Review delete limits** —Review the GCDS delete limits for each of the items that you want to synchronize. Ensure that the limit is related to your account size and based on a reasonable percentage or item count.
- **Use exclusion rules to retain users or groups in your Google Account** —If you have user accounts or groups in Google that don't exist in your LDAP directory, you can use an exclusion rule to make sure that the users or groups remain in your Google Account. Before you use exclusion rules, make sure you're familiar with their usage.
- **Exclude LDAP data by using focused search rules** —If you want to prevent entities in your LDAP directory syncing to your Google Account, we recommend using focused search rules. Search rules are easier to manage than LDAP exclusion rules and can improve sync performance. Before you use search rules, get familiar with their usage.

#### Related topics

- [Use limits with GCDS](https://knowledge.workspace.google.com/admin/users/use-limits-with-gcds)
- [Use exclusion rules with GCDS](https://knowledge.workspace.google.com/admin/users/omit-data-with-exclusion-rules-and-queries)
- [Use LDAP search rules to synchronize data](https://knowledge.workspace.google.com/admin/users/use-ldap-search-rules-to-synchronize-data)

## Next step

[Download and install GCDS](https://knowledge.workspace.google.com/admin/users/download-and-install-gcds)

*Google, Google Workspace, and related marks and logos are trademarks of Google LLC. All other company and product names are trademarks of the companies with which they are associated.*