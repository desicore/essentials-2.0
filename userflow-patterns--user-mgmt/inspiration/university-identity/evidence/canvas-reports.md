This document outlines the descriptions of the default Canvas reports, their configurations, and CSV export format and data.

Account and subaccount admins have access to [Canvas reports](https://community.instructure.com/en/kb/articles/661600-how-do-i-view-reports-for-an-account) that can be used to review account data or in conjunction with [accessing Canvas via the API](https://community.instructure.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fcanvas.instructure.com%2Fdoc%2Fapi%2Fall_resources.html). Canvas includes a set of default reports available to all institutions. This document outlines the descriptions of all default reports, their configurations, and CSV export format and data. Configurations refer to the options and filters that can be enabled before the report is run.

**Subaccount Reports**

Users are associated with an account through a group or a course enrollment. Even though courses and groups can be created within subaccounts, user data is maintained at the account level. Subaccount reports that involve user data may not be as current as account-level reports. To maintain accuracy for subaccount reports, Canvas updates all user account associations weekly on Sundays (exact times may vary).

## Course Grade Passback

The Course Grade Passback report gets the grade passback setting for courses in a selected term and only displays courses where a value has been set.

| Configuration | Term |
| --- | --- |
| CSV Format | One row per course |
| CSV Data | Course ID, grade passback setting |

## Course Storage

The Course Storage report shows the current statistics for storage space used in every course in a selected term (shown in megabytes).

The report shows two columns about file storage. The storage used column shows unique files in the course; files included through a previous import or course copy are not counted against the storage limit. The sum of all files column shows the amount of space required to download all files associated with the course.

| Configuration | Term |
| --- | --- |
| CSV Format | One row per course |
| CSV Data | Course ID, course SIS ID, course short name, course name, account ID, account SIS ID, account name, storage used (in MB), sum of all files (in MB) |

## Developer Keys Report

The Developer Keys Report includes Developer Keys available to the institution. The report includes keys inherited from parent or root account and keys installed directly in the account in which the report is run. For more information, see the [Canvas API documentation](https://community.instructure.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Finstructure.vanillacommunities.com%2Fhome%2Fleaving%3FallowTrusted%3D1%26target%3Dhttps%253A%252F%252Fcanvas.instructure.com%252Fdoc%252Fapi%252Ffile.developer_keys.html).

| CSV Format | One row per key |
| --- | --- |
| CSV Data | Global ID, key name, inherited from parent account, contact info, key type, permitted API endpoints |

## ePortfolio Report

The ePortfolio report includes all active ePortfolios for the current institution. The report can be customized to reduce the scope of the ePortfolio results to users without enrollments and/or ePortfolios that have been removed.

| Configuration | Enrollment status, removed ePortfolios |
| --- | --- |
| CSV Format | One row per ePortfolio |
| CSV Data | ePortfolio name, ePortfolio ID, author name, author ID, author SIS ID, author login ID, date created, date updated, is public, workflow state |

## Grade Export

The Grade Export report shows the final grade results for all the students in a selected term.

The current score reflects the total while ignoring unsubmitted assignments and muted assignments, and the final score counts unsubmitted assignments and muted assignments as zero. If the Final Grade Override feature preview has been turned on in an account, the Grade Export report will include the override\_score column.

For use with grading periods, use the MGP Grade Export report.

| Configuration | Term, deleted objects |
| --- | --- |
| CSV Format | One row per enrollment |
| CSV Data | Student name, student ID, student SIS ID, student integration ID\*, course name, course ID, course SIS ID, section name, section ID, section SIS ID, term name, term ID, term SIS ID, current score, final score, enrollment state, unposted current score, unposted final score, override score, current grade, final grade, unposted current grade, unposted final grade, override grade |

\* Contact your Customer Success Manager to include student integration IDs in the grade export report.

## LTI Report

The LTI report provides an export of data that shows LTI (Learning Tool Interoperability) usage information.

| Configuration | Deleted objects |
| --- | --- |
| CSV Format | One row per LTI tool |
| CSV Data | Configuration location, associated account/course ID, associated account name, associated course name, tool ID, tool name, tool type, LTI version, tool created at, tool privacy level, launch URL, custom fields |

## Last Enrollment Activity

The Last Enrollment Activity report shows the last activity on a user’s enrollments.

| Configuration | Term |
| --- | --- |
| CSV Format | One row per enrollment |
| CSV Data | User ID, user name, last activity date and time |

## Last User Access

The Last User Access report shows the last login for active users. The endpoint used for the most recent access date and time is updated every 10 minutes. The date and time displayed in the report will reflect the time the endpoint was updated and may differ from the exact time the user accessed Canvas.

| Configuration | Term, deleted objects |
| --- | --- |
| CSV Format | One row per enrollment |
| CSV Data | User ID, user SIS ID (if applicable), user name, last access date and time, IP address |

## Multiple Grading Periods Grade Export

The Multiple Grading Period (MGP) Grade Export report shows grading period grades (and overall course grades) for each student enrolled in a given term.

Each \[grading period name\] also includes columns that indicate the unposted current score and unposted final score. Depending on the term configuration, this report may include multiple grading periods. If the Final Grade Override feature preview has been turned on in an account, the MGP Grade Export report will include the override\_score column.

| Configuration | Term |
| --- | --- |
| CSV Format | One row per enrollment |
| CSV Data | Student name, student ID, student SIS ID, course name, course ID, course SIS ID, section name, section ID, section SIS ID, term name, term ID, term SIS ID, grading period set name, grading period set ID, \[grading period name\] ID, \[grading period name\] current score, \[grading period name\] final score, \[grading period name\] unposted current score, \[grading period name\] unposted final score, current score, final score, enrollment state, unposted current score, unposted final score, override score, current grade, final grade, unposted current grade, unposted final grade, override grade |

## Outcome Export

The Outcome Export report shows all learning outcomes in an account and includes details of all attributes associated with each outcome.

| CSV Format | One row per outcome |
| --- | --- |
| CSV Data | Canvas ID, vendor guide, object type, outcome title, outcome description, display name, calculation method, calculation integer, parent guides, workflow state, mastery points, ratings |

## Outcome Results

The Outcome Results report shows the learning outcome results for all students in published courses.

Outcome results are tied to their level of outcome access. Account outcomes display on the account report, while the sub-account outcomes display on the sub-account report. Course outcomes only display within course reports. The only time outcomes would be displayed on both reports is if they are stored in both accounts, such as copying an account outcome to the sub-account level.

When generating this report from the account or subaccount level, all outcomes are included for the appropriate context or a parent sub-account level.

| Configuration | Term, deleted objects |
| --- | --- |
| CSV Format | One row per user-outcome-result pair |
| CSV Data | Student name, student ID, student SIS ID, assessment title, assessment ID, assessment type, submission date, submission score, learning outcome name, learning outcome ID, attempt number, outcome score, assessment question, assessment question ID, course name, course ID, course SIS ID, section name, section ID, section SIS ID, assignment URL, learning outcome friendly name, learning outcome points possible, learning outcome mastery score, learning outcome mastered, learning outcome rating, learning outcome rating points, account ID, account name, enrollment state |

## Provisioning

The Provisioning report exports all the needed information that relates to provisioning Canvas in one or all of its respective categories: Users, Accounts, Terms, Courses, Sections, Enrollments, Groups, Group Memberships, Group Categories, Cross-listing, and User Observers.

Each report includes a *created by SIS* column. SIS data is displayed in the column regardless if the SIS creation checkbox is selected as part of the report configuration. Selecting the Created by SIS checkbox will display only data created by SIS.

Deleted courses without SIS IDs are only included in the Provisioning report if the course was deleted less than 120 days before the date the report is created. Courses with SIS IDs are not affected by this limit.

Groups and Group Memberships are only included in the Provisioning report if they were created through a Canvas SIS integration. To help manage and track manually created groups and group memberships, you may want to automatically allocate unique SIS IDs for manually created groups/memberships.

Start dates and end dates are only included in Provisioning reports for courses and sections that have selected the Students can only participate in the course between these dates checkbox in Course Settings.

Deleted temporary enrollments are included in the Enrollments Provisioning report when the Include Deleted/Concluded Objects option is selected.

| Configuration | Term, CSV File Type, created by SIS, deleted objects |
| --- | --- |
| CSV Format | One row per category |
| CSV Data | **Users:** Canvas user ID, integration ID, authentication provider ID, user ID, login ID, first name, last name, full name, sortable name, short name, email, status  **Accounts:** Canvas account ID, account ID, Canvas parent ID, parent account ID, name, status, user UUID  **Terms:** Canvas term ID, term ID, name, status, start date, end date  **Courses:** Canvas course ID, integration ID, course ID, short name, long name, Canvas account ID, account ID, Canvas term ID, term ID, status, start date, end date, Canvas Blueprint Course ID  **Sections:** Canvas section ID, section ID, integration ID, Canvas course ID, course ID, name, status, start date, end date, Canvas account ID, account ID  **Enrollments:** Canvas course ID, course ID, user ID, role, role ID, canvas section ID, section ID, status, Canvas associated user ID, base role type, limit section privileges, Canvas enrollment ID, Canvas temporary enrollment source ID, temporary enrollment source user ID  **Groups:** Canvas group ID, group ID, Canvas group category ID, group category ID, Canvas account ID, account ID, Canvas course ID, course ID, name, status, context ID, context type, group category ID, max membership  **Group Memberships:** Canvas group ID, group ID, Canvas user ID, user ID, status  **Group Categories:** Canvas group category ID, group category ID, context ID, context type, group name, role, self signup, group limit, auto leader, status  **Cross-listing (X list):** Canvas xlist course ID, xlist course ID, Canvas section ID, section ID, status, Canvas nonxlist course ID, nonxlist course ID  **User Observers:** Canvas observer ID, observer ID, Canvas student ID, student ID, status  **Admin:** Admin user name, Canvas user ID, user ID, Canvas account ID, account ID, role ID, role, status |

## Public Courses

The Public Courses report shows all the public courses that are not deleted for a given term.

| Configuration | Term |
| --- | --- |
| CSV Format | One row per course |
| CSV Data | Course ID, course SIS ID, course short name, course name, course start date, course end date |

## Recently Deleted Courses

The Recently Deleted Courses report shows all the courses for a given term that have been deleted in the last 30 days.

| Configuration | Term |
| --- | --- |
| CSV Format | One row per course |
| CSV Data | Course ID, course SIS ID, course short name, course name, course start date, course end date |

## SIS Export

The SIS Export report exports the needed files for Users, Accounts, Terms, Courses, Sections, Enrollments, Groups, Group Memberships, Cross-listing, and User Observers managed by the SIS import. *To view* ***all*** *file data not managed by SIS, please configure and export the Provisioning report.*

Each report includes a *created by SIS* column. SIS data is only displayed in the column if the SIS creation checkbox is selected as part of the report configuration.

Start dates and end dates are only included in SIS Export reports for courses and sections that have selected the Students can only participate in the course between these dates checkbox in Course Settings.

| Configuration | Term, CSV File Type, created by SIS, deleted objects |
| --- | --- |
| CSV Format | One row per category |
| CSV Data | **Accounts:** Canvas account ID, account ID, Canvas parent ID, parent account ID, name, status  **Users:** Canvas user ID, integration ID, authentication provider ID, user ID, login ID, first name, last name, full name, sortable name, short name, email, status  **Terms:** Canvas term ID, term ID, name, status, start date, end date  Courses: Canvas course ID, integration ID, course ID, short name, long name, Canvas account ID, account ID, Canvas term ID, term ID, status, start date, end date, course format, blueprint course id  **Sections:** Canvas section ID, section ID, integration ID, Canvas course ID, course ID, name, status, start date, end date, Canvas account ID, account ID  **Enrollments:** Canvas course ID, course ID, user ID, role, role ID, canvas section ID, section ID, status, Canvas associated user ID, limit section privileges  **Group Categories:** Group category ID, account ID, course ID, category name, status  **Groups:** Canvas group ID, group ID, group category ID, Canvas account ID, account ID, name, status  **Group Memberships:** Canvas group ID, group ID, Canvas user ID, user ID, status  **Cross-listing (X list):** Canvas xlist course ID, xlist course ID, Canvas section ID, section ID, status, Canvas nonxlist course ID, nonxlist course ID  **User Observers:** observer ID, student ID, status  Admin: User ID, account ID, role ID, role, status |

## SIS Submission Reports

The SIS Submission report gets the submissions for courses. The SIS Submission Report may only display for institutions that have authenticated Canvas to post grades to their SIS.

| Configuration | Term |
| --- | --- |
| CSV Format | One row per category |
| CSV Data | Submission ID, attempt, score, grade, late, submission type, submitted at, graded at, workflow state, excused, assignment id, assignment name, assignment created at, assignment due at, assignment points possible, assignment description, assignment post to SIS, assignment group ID, assignment group name, assignment SIS source ID, course ID, course SIS ID, course name, section ID, section SIS ID, section name, account ID, account name, term ID, term SIS ID, term name, user ID, user name, user sortable name, user SIS user ID, user SIS login ID |

## Student Competency

The Student Competency report shows the learning outcome results for all students.

This report displays the details of the outcome result including the associated assignment. However, this report only shows outcome results for assignments and does not include outcomes tied to question banks. For detailed reports, create outcomes at the account or sub-account level and add those outcomes to course activities.

When generating this report from the account or subaccount level, all outcomes are included for the appropriate context or a parent sub-account level. Additionally, reports include all child subaccount outcomes and all course level outcomes.

| Configuration | Term, deleted objects |
| --- | --- |
| CSV Format | One row per user-outcome-result pair |
| CSV Data | Student name, student ID, student SIS ID, assignment title, assignment ID, submission date, submission score, learning outcome name, learning outcome ID, attempt, outcome score, course name, course ID, course SIS ID, section name, section ID, section SIS ID, assignment URL, learning outcome friendly name, learning outcome points possible, learning outcome mastery score, learning outcome mastered, learning outcome rating, learning outcome rating points, account ID, account name, enrollment state |

## Students with No Submissions

The Students with no submissions report shows all students enrolled in a course in a given term who have not submitted an assignment, graded discussion, or quiz between the given date range in a course.

| Configuration | Term, start date, end date, enrollment state |
| --- | --- |
| CSV Format | One row per student enrollment that meets the criteria |
| CSV Data | User ID, user SIS ID, user name, section ID, section SIS ID, section name, course ID, course SIS ID, course name |

## Unpublished Courses

The Unpublished Courses report shows all the courses for a given term that are not published.

| Configuration | Term |
| --- | --- |
| CSV Format | One row per course |
| CSV Data | Course ID, course SIS ID, course short name, course name, course start date, course end date |

## Unused Courses

The Unused Courses report shows courses that have none of the following items: assignments, announcements, discussions, files, modules, pages, or quizzes.

| Configuration | Term |
| --- | --- |
| CSV Format | One row per course |
| CSV Data | Course ID, course SIS ID, course short name, course long name, course status, course created date and time |

## User Access Tokens

The User Access Tokens report shows users with access tokens.

| Configuration | Deleted objects |
| --- | --- |
| CSV Format | One row per token |
| CSV Data | User ID, user name, token hint, expiration, last used, dev key ID, dev key name,  creation date, status, purpose, token ID. |

## User Course Access Log

The User Course Access Log report shows all the activity from users enrolled in all courses in a given term. The times viewed and times participated are counted from the beginning of time until the time the report was generated. A maximum of one month's data will be retrieved. By default, it will return data from the beginning of the previous week.

| Configuration | Term, start date, enrollment type |
| --- | --- |
| CSV Format | One row per student activity |
| CSV Data | Section ID, section SIS ID, section name, course ID, course SIS ID, course name, term ID, term SIS ID, term name, user ID, user SIS ID, user name, content type, content, times viewed, times participated, last viewed |

## Zero Activity

The Zero Activity report shows all the students enrolled in any courses in a given term.

| Configuration | Term, start date |
| --- | --- |
| CSV Format | One row per user enrollment that have not visited the course since the date |
| CSV Data | User ID, user SIS ID, student name, section ID, section SIS ID, section name, course ID, course SIS ID, course name |

This resource can also be accessed from the below Canvas Guide:

- [How do I view reports for an account?](https://community.instructure.com/en/kb/articles/661600-how-do-i-view-reports-for-an-account)