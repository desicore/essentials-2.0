# Data model (prototype)

> **This is the information model behind the prototype's screens and demo data. It is not a database schema.** Engineering owns the production data model and is free to change it. The PRD v0.2 information model is the source. Where the prototype makes a working decision, it's marked as one.

Status: draft 0.1, 2026-10-01.

## Diagram

```mermaid
erDiagram
    INSTITUTION ||--o{ USER : "has staff"
    INSTITUTION ||--o{ ROOM : has
    INSTITUTION ||--o{ SCENARIO : has
    INSTITUTION ||--o{ PARTICIPANT : has
    INSTITUTION ||--o{ GROUP : has
    INSTITUTION ||--o{ SESSION : runs

    ROOM ||--o{ RESOURCE_REF : holds
    ROOM ||--o{ READINESS_CHECK : "is checked by"
    ROOM ||--o{ SESSION : hosts

    EVENT |o--o{ SESSION : "optionally groups (hidden)"
    SCENARIO |o--o{ SESSION : seeds
    COURSE |o--o{ SESSION : "labels (OPEN: Q-02)"
    COURSE |o--o{ GROUP : "labels (OPEN: Q-02)"
    USER ||--o{ SESSION : "runs as faculty"

    GROUP }o--o{ PARTICIPANT : "has members"
    SESSION ||--o{ SESSION_PARTICIPANT : lists
    PARTICIPANT ||--o{ SESSION_PARTICIPANT : "attends as"
    USER |o--o| PARTICIPANT : "may have an account"

    SESSION ||--o| RECORDING : "shows at most one"
    SESSION ||--o{ PART : "plans and records"
    PART }o--o| GROUP : "is for"
    PART ||--o{ PART_PARTICIPANT : "is attributed to"
    PARTICIPANT ||--o{ PART_PARTICIPANT : "appears in"

    RECORDING ||--o{ CAPTURE_ATTEMPT : "keeps (hidden)"
    RECORDING ||--o{ PART : "is split into"
    RECORDING ||--o{ MARKER : has
    RECORDING ||--o{ SHARE : "is shared by"
    SHARE }o--o| PART : "may cover"
    SHARE ||--|{ SHARE_RECIPIENT : "is sent to"
    PARTICIPANT ||--o{ SHARE_RECIPIENT : receives
    USER ||--o{ SHARE : "approves and sends"

    INSTITUTION ||--o{ AUDIT_EVENT : records

    INSTITUTION {
        string id PK
        string name
        string timezone
        bool aiSubscription
        bool inventorySubscription "add-on, not in the demo"
    }
    USER {
        string id PK
        string name
        string email
        string role "admin | faculty"
    }
    ROOM {
        string id PK
        string name
        int cameras
        string readiness "ready | issue_detected"
        bool canRecord "tracked separately (RDY-05)"
    }
    RESOURCE_REF {
        string id PK
        string roomId FK
        string name
    }
    READINESS_CHECK {
        string id PK
        string roomId FK
        datetime checkedAt
        string component
        string result "ready | issue_detected"
        string fixHint
    }
    SCENARIO {
        string id PK
        string name
        int durationMin
        string defaultRoomId FK
    }
    COURSE {
        string id PK
        string label "label only in the prototype"
        string source "canvas | import | manual"
    }
    EVENT {
        string id PK "not shown in the prototype"
    }
    GROUP {
        string id PK
        string name
        string courseId FK "OPEN: Q-02"
    }
    PARTICIPANT {
        string id PK
        string name
        string email
        string kind "learner | faculty | guest | sp | evaluator"
        string userId FK "optional"
    }
    SESSION {
        string id PK
        string roomId FK
        string scenarioId FK "optional"
        string facultyId FK
        string courseId FK "OPEN: Q-02"
        date date
        time plannedStart
        time plannedEnd
        string type "scheduled | ad_hoc (one model, SES-07)"
        string status "planned | recording | done"
    }
    SESSION_PARTICIPANT {
        string sessionId FK
        string participantId FK
        string attendance "planned | present | absent | walk_in"
        bool confirmed "ATT-01"
    }
    PART {
        string id PK
        string sessionId FK
        string recordingId FK "empty until recorded"
        string groupId FK "optional"
        time plannedStart
        time recordedStart
        time recordedEnd
        bool confirmed
    }
    PART_PARTICIPANT {
        string partId FK
        string participantId FK
    }
    RECORDING {
        string id PK
        string sessionId FK
        string state "starting | recording | stopping | not_recording (CAP-04)"
        datetime startedAt
        datetime stoppedAt
        string processing "processing | ready"
    }
    CAPTURE_ATTEMPT {
        string id PK "hidden; only 'recovered after interruption'"
        string recordingId FK
        string outcome "ok | interrupted | recovered | rejected"
    }
    MARKER {
        string id PK
        string recordingId FK
        time at
        string category "optional"
        string note
        string source "faculty | ai (AI-04)"
        bool approved "AI markers need approval"
    }
    SHARE {
        string id PK
        string recordingId FK
        string partId FK "optional"
        time rangeStart
        time rangeEnd
        bool canView
        bool canDownload
        date expiresAt
        string state "active | paused | revoked | expired"
        string sharedBy FK
    }
    SHARE_RECIPIENT {
        string shareId FK
        string participantId FK
        string delivery "sent | opened | not_opened"
        string access "code | sso"
    }
    AUDIT_EVENT {
        string id PK
        string entityType
        string entityId
        string action "swap | split | assign | revoke | ..."
        string oldValue
        string newValue
        string reason
        string by FK
        datetime at
    }
```

## Working decisions in the prototype

Each comes from the PRD's "working model decisions" unless marked otherwise.

1. **One session shows at most one recording.** Capture attempts and media files stay behind the scenes. The only visible trace is "recovered after interruption" in the history.
2. **Repeated groups are one session with sequential parts.** A part is a non-destructive time range, usually for one group. Planned parts exist before recording (DF-2, Session sheet); recording fills in their actual times. *Prototype decision:* a part belongs to the session and, once recorded, to the recording. Engineering still has to confirm whether downstream integrations need derived sessions (CAP-12).
3. **Attribution is two levels.** Who was booked or present in the session (`SESSION_PARTICIPANT`), and who is in each part (`PART_PARTICIPANT`). Both can be unconfirmed. Nothing blocks recording or debrief because of it.
4. **Participants don't need an account.** A learner who gets a share opens it with an email code or SSO (IAM-05).
5. **A share is a range, not a new file.** It points at a recording and a time range, optionally a part. It can be paused when a correction changes the range (SHR-10, DF-2 step 12).
6. **Every correction writes an audit event** with the old value, the new value, who, when and why.
7. **Events exist in the model but not in the UI.** A scheduled session is a session with a time.

## Open questions this model depends on

| Q | Question | Prototype default |
|---|---|---|
| Q-02 | Is **Course** a real entity, or a label? The PRD v0.2 has no Course entity. | Label only. Decide before the 10-15 handoff, because adding a core entity mid-build is expensive. |
| CAP-12 | Do downstream integrations need one session per group instead of parts? | One session with parts |
| — | Can a part have participants who are not in its group (walk-ins, swaps)? | Yes. Group is a default, `PART_PARTICIPANT` is the truth. |

## Not modelled in the prototype

Evaluation results, media assets, the inventory module, rotations and stations, scenario authoring. They are in the PRD and out of scope for 10-15.

## Demo data coverage (`data/seed.json`)

| Entity | In seed.json now | Needed by |
|---|---|---|
| Institution, users, rooms, resources, scenarios, groups, sessions | ✅ | all flows |
| Course | ✅ as a label | Q-02 |
| Participant | ⚠️ only as names inside groups | DF-1, DF-2, DF-3 (attribution, shares) |
| Session participants and parts | ❌ | DF-2 (planned parts A/B/C, swap, absent) |
| Recording | ❌ | DF-1, DF-2, DF-3 |
| Marker | ❌ | DF-1, DF-3 |
| Share and recipients | ❌ | DF-2 step 12, DF-3 |
| Readiness checks | ⚠️ only the room's last-check time | Rooms overview, room detail |
| Audit events | ❌ | DF-2 history tab |
