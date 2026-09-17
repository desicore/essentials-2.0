This document outlines the active, inactive, concluded, and deleted status options; how students interact with Canvas when they are given a specific status; and how instructors and admins view each student status throughout their course.

Canvas defines user enrollments according to status. An enrollment can be one of four status options: active, inactive, concluded, or deleted. A user’s enrollment status can be set via the Enrollments API, uploaded via CSV file in student information systems (SIS), or controlled manually in the Canvas interface.

When updating an enrollment status via CSV, the status can be set to active, deleted, completed, inactive, or deleted\_last\_completed. The deleted\_last\_completed option is not technically a status, but combines the deleted and completed statuses. If there is at least one other active enrollment in the course, enrollments marked as deleted\_last\_completed will be deleted. If it is the last enrollment in the course, the deleted\_last\_completed enrollment will be set as complete.

This document outlines the four status options, how students interact with Canvas when they are given a specific status, and how instructors and admins view each student status throughout their course.

**Note:** [Suspending a user](https://community.instructure.com/en/kb/articles/661554-how-do-i-suspend-or-reactivate-users-in-an-account) does not affect student enrollment status but is applied to the student's user profile. Suspending a user allows root account admins to remove the user's login access to authorized systems. Suspending a user from the account removes their all access to all authorized systems from all their logins. An individual login can be suspended via SIS or API. Additionally, suspended users can be [reactivated](https://community.instructure.com/en/kb/articles/661554-how-do-i-suspend-or-reactivate-users-in-an-account). Only root account admins can view and manage suspensions.

## Student Enrollment Status Definitions

### Active Status

Active enrollments have full participation in the course. They can view the course and participate in all course activities, which means they can submit assignments and reply to discussions. They can also view course grades.

Unless an instructor/admin restricts students from viewing future courses before a specific term, course, or section date, students can access the course but cannot participate in the course until the defined course start date.

### Inactive Status

Inactive enrollments are students previously enrolled in a course but who can no longer access course content. This status can be used for students who do not pay tuition or drop the course at a future date.

- Inactive enrollments cannot view the name of the course in their Courses list or see a course card in the Canvas Dashboard.
- Inactive enrollments cannot be sent or receive messages through any messaging option in Canvas.
- Inactive enrollments cannot be added to any groups in a course. If the student was already in a group when he or she was deactivated, the student no longer has access to the group; other students in the group cannot view inactive students in the group People page.
- If necessary, instructors can still access any previously submitted assignments from inactive enrollments, both in Assignments and SpeedGrader.
- Instructors can still assign grades to inactive students. However, inactive students cannot view grades or receive any notifications about assignment comments.
- User data for inactive enrollments is included in course statistics and user access reports, but user analytics are not available.

Currently, instructors can tell which students are inactive when viewing Discussions, the Gradebook (Settings option), People, and the User Details page. (Additional updates will be made in a future release.)

### Concluded Status

Concluded enrollments are students who can only view the course in a read-only format. This is the same status that is automatically given to students when a course is concluded.

- Unless an instructor or admin restricts students from viewing concluded courses after a specific term, course, or section date, students can access the course but cannot submit assignments or participate in discussions.
- Students can view prior courses in Conversations, but they cannot send messages in concluded courses.
- User data is included in course statistics, user access reports, and user analytics.

You can tell which students are concluded in the Gradebook (Settings option), People (Prior Enrollments button), and the User Details page.

### Deleted Status

Deleted enrollments are students whose entire enrollment has been removed from a course. Students do not have any record of participation in the course. Users with admin permissions can include deleted enrollments when generating reports in Account Settings.

## Course Behavior by Role and Enrollment Status

### Student Role

**Student Enrollment Status**

| **Behavior** | **Active\*** | **Inactive** | **Concluded\*\*** | **Deleted** |
| --- | --- | --- | --- | --- |
| View Course in Global Navigation Courses List | ✔️ | ✖️ | ✔️ | ✖️ |
| View and Access Course/Groups Content | ✔️ | ✖️ | ✔️ | ✖️ |
| Participate in Course/Groups | ✔️ | ✖️ | ✖️ | ✖️ |
| Message Other Users | ✔️ | ✖️ | ✖️ | ✖️ |
| View Course Grades | ✔️ | ✖️ | ✔️ | ✖️ |

\*prior access may be restricted by **Restrict students from viewing course before start date** account/course setting.

\*\*past access may be restricted by **Restrict students from viewing course after end date** account/course setting.

### Instructor/Admin Roles

**Student Enrollment Status**

| **Behavior** | **Active** | **Inactive** | **Concluded** | **Deleted** |
| --- | --- | --- | --- | --- |
| View Names in People Page | ✔️ | ✔️ | ✔️ \* | ✖️ |
| Show Names in Messaging Lists | ✔️ | ✖️ | ✖️ | ✖️ |
| View Names/Grades in Gradebook | ✔️ | ✔️ | ✔️ \* | ✖️ |
| View/Download Assignments | ✔️ | ✔️ | ✔️ \*\* | ✖️ |
| Assign to Groups | ✔️ |  |  | ✖️ |
| Counted in Course Analytics | ✔️+ all statistics | ✔️ + statistics student tab | ✔️ + statistics student tab | ✖️ |
| View User Analytics | ✔️ | ✖️ | ✖️ | ✖️ |
| View Access Report | ✔️ | ✔️ | ✖️ | ✖️ |
| View Status in Reports (Account Settings) | ✔️ | ✔️ | ✔️ | ✔️ \*\*\* |

\*available as an optional setting in the page content

\*\*only available for students in courses concluded by course or term dates (manual concluding does not apply)

\*\*\*not available in all reports

This resource can also be accessed from the following Canvas Guides:

- [How do I deactivate an enrollment in a course?](https://community.instructure.com/en/kb/articles/660973-how-do-i-deactivate-an-enrollment-in-a-course)
- [How do I conclude an enrollment in a course?](https://community.instructure.com/en/kb/articles/660974-unknown)
- [How do I remove an enrollment from a course?](https://community.instructure.com/en/kb/articles/660977-how-do-i-remove-an-enrollment-from-a-course)
- [How do I view grades for inactive student enrollments in the Gradebook?](https://community.instructure.com/en/kb/articles/660835-how-do-i-view-grades-for-inactive-or-concluded-student-enrollments-in-the-gradebook)
- [How do I view grades for inactive or concluded student enrollments in the New Gradebook?](https://community.instructure.com/en/kb/articles/660835-how-do-i-view-grades-for-inactive-or-concluded-student-enrollments-in-the-gradebook)
- [How do I suspect or reactivate users in an account?](https://community.instructure.com/en/kb/articles/661554-how-do-i-suspend-or-reactivate-users-in-an-account)