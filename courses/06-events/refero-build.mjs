#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const CLI = path.join(path.dirname(fileURLToPath(import.meta.url)), 'refero-mcp.mjs');

function call(tool, args) {
  const out = execFileSync('node', [CLI, 'call', tool, JSON.stringify(args)], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  return JSON.parse(out);
}

function getFlow(id) {
  const j = call('refero_get_flow', { flow_id: id, response_format: 'json' });
  if (j.error) throw new Error(`flow ${id}: ${JSON.stringify(j.error)}`);
  return j;
}

function getScreen(uuid) {
  // search_screens doesn't support fetch-by-uuid directly in these helpers; use search with a query is unreliable.
  // Instead use refero_search_screens is not for direct uuid lookup; there is no direct "get screen" tool listed,
  // so we rely on cached search results captured earlier (screen thumbnails come from the query results already fetched).
  return null;
}

const flowSpecs = [
  { flowId: 1843, question: 'Q1', app: 'Luma', title: 'Creating an event and picking/creating the owning calendar (course tag equivalent)', take: 'Luma requires choosing or creating a "calendar" (the container/tag) as part of event creation, showing a global-calendar-with-tag pattern rather than an inline-in-course surface.' },
  { flowId: 5222, question: 'Q1', app: 'TravelPerk', title: 'Creating a team event from a global Events area, then viewing its detail overview', take: 'TravelPerk events are created from a dedicated global Events area and then reviewed on a detail overview page, separate from any specific project/course context.' },
  { flowId: 9859, question: 'Q1', app: 'Acuity Scheduling', title: 'Defining an appointment type globally, then offering/scheduling it onto the calendar', take: 'Acuity separates defining the reusable class/appointment type (global catalog) from the act of scheduling an instance onto the calendar, a two-step global-catalog pattern.' },
  { flowId: 12719, question: 'Q2', app: 'Understory', title: 'Creating a calendar event by selecting an existing "Experience" and adding a resource', take: 'The event creation flow requires selecting an existing Experience (content) to link the event to before adding capacity and resources, showing an explicit content-to-event link step.' },
  { flowId: 9226, question: 'Q2', app: 'Preply', title: 'Rescheduling a lesson from the student\'s lesson list, tied to a specific lesson/tutor', take: 'The lesson session is always surfaced from within the specific lesson/tutor relationship, showing the event as inherently linked to one learning context rather than a separate calendar object.' },
  { flowId: 9868, question: 'Q2', app: 'Acuity Scheduling', title: 'Opening an event details panel from the week view and editing its fields inline', take: 'The event details panel opens directly from the calendar view and exposes editable fields inline, showing a bidirectional link between the calendar entry and its detail view.' },
  { flowId: 6310, question: 'Q3', app: 'time2book', title: 'Creating a class and configuring weekly recurrence with specific weekday selection', take: 'Recurrence is configured as a distinct sub-step (Open Repeat Options > Choose Weekly Recurrence > Confirm Weekday Selection) after the base class details are set.' },
  { flowId: 12705, question: 'Q3', app: 'Understory', title: 'Setting a custom recurrence rule and end date when adding a date/location to an experience', take: 'Custom recurrence is its own dialog with an explicit end-date picker, separate from the base date/location entry, letting the end condition be set independently of the start.' },
  { flowId: 9721, question: 'Q3', app: 'Microsoft Teams', title: 'Scheduling a meeting with attendees, date/time, and a recurrence rule via a modal', take: 'Recurrence is set through a dedicated control that opens a modal for rules and end date, embedded in the same form as attendees and date/time rather than a separate screen.' },
  { flowId: 1848, question: 'Q3', app: 'Luma', title: 'Converting a single event into a multi-session series and adjusting the cadence', take: 'Luma treats a multi-session event as a conversion step from a single event, with its own modal for adding sessions manually or configuring a recurring cadence.' },
  { flowId: 9872, question: 'Q3', app: 'Acuity Scheduling', title: 'Rescheduling one appointment instance from the weekly calendar (single-instance edit)', take: 'This flow only reschedules a single appointment instance with no this/following/all series choice presented, illustrating the simpler single-instance edit pattern.', counter_example: true },
  { flowId: 12709, question: 'Q4', app: 'Understory', title: 'Setting up a resource type with follow-up duration and quantity for booking', take: 'Resources are modeled as their own type with a defined quantity, which is the mechanism by which the system could prevent double-booking, though no live conflict warning is shown at creation.' },
  { flowId: 4117, question: 'Q4', app: 'Reclaim AI', title: 'Adding attendees to a Smart Meeting and viewing each attendee\'s calendar status', take: 'The attendee list shows each person\'s calendar status (availability) inline during creation, a conflict signal surfaced before the meeting is saved.' },
  { flowId: 12706, question: 'Q5', app: 'Understory', title: 'Editing the capacity of a date/location block for an experience', take: 'Capacity is edited as its own discrete step directly on the date/location block, independent from other event fields.' },
  { flowId: 10204, question: 'Q5', app: 'Partiful', title: 'RSVPing to an event and adding a plus-one from the event details screen', take: 'Sign-up is modeled as an RSVP action with an explicit plus-one addition, showing attendance capacity being tracked per invitee rather than a generic ticket count.' },
  { flowId: 3371, question: 'Q5', app: 'SavvyCal', title: 'Reviewing a scheduled event and inviting an additional guest', take: 'Attendees can be added to an already-scheduled event after the fact via an "Invite a guest" modal, showing sign-up/attendance as an ongoing editable list rather than fixed at creation.' },
  { flowId: 7186, question: 'Q6', app: 'Homerun', title: 'Scheduling an interview: picking a template, date, start time, duration, and location', take: 'Duration is set as its own explicit control separate from start time, after which end time is presumably derived, rather than requiring the user to pick an end time directly.' },
  { flowId: 9746, question: 'Q6', app: 'Microsoft Teams', title: 'Creating a community event from an empty events state through the full new-event form', take: 'The new-event form surfaces start date/time controls with default values pre-filled, reducing the time-entry burden inside a long creation flow.' },
  { flowId: 3492, question: 'Q6', app: 'Cal', title: 'Rescheduling a booking by picking a new date and time slot from availability', take: 'Time slots are generated from a week/day availability grid tied to the organizer\'s working hours, implying time zone conversion happens behind the slot grid rather than via a manual selector.' },
];

const screenSpecs = [
  { uuid: 'df769788-29a1-4768-94e1-cd5d7ca0e2f9', question: 'Q1', app: 'Calendly', title: 'Scheduled events dashboard listing all events with a global Create button', take: 'Calendly lists all scheduled events in one global dashboard with a single Create action, rather than event creation living inside a specific course/project context.' },
  { uuid: 'c1012b72-e463-47a1-ae55-2a61e5bf1451', question: 'Q1', app: 'Acuity Scheduling', title: 'Scheduling setup screen with sidebar navigation separate from any course/class content area', take: 'Acuity\'s scheduling setup lives in its own dedicated sidebar section, structurally separated from any single class/content area.' },
  { uuid: '20c8ba7c-4cf4-4afe-ac52-cf3f62712cf2', question: 'Q2', app: 'Google Classroom', title: 'Online classroom dashboard showing a course with its associated stream/content', take: 'Google Classroom anchors all activity, including scheduled work, inside a single course dashboard, showing content and class membership tightly coupled to one course.' },
  { uuid: 'f2ebd16a-b856-4b54-abe1-3adcd8f4bd0c', question: 'Q2', app: 'Luma', title: 'Public event page combining event details with descriptive content in one view', take: 'The event page merges the event\'s logistics with its descriptive/linked content into a single public-facing view, an example of a fully bidirectional event-content link.' },
  { uuid: '335bcf72-a662-4f55-9721-84117891f55e', question: 'Q4', app: 'Acuity Scheduling', title: 'New Type of Class form for defining a class/appointment type before scheduling it', take: 'The class-type form is where capacity and other constraints are defined, but no room/facilitator/equipment conflict field or warning appears on this creation form.', counter_example: true },
  { uuid: '023aed7b-e219-4ddc-8374-63091cfda3f7', question: 'Q4', app: 'Understory', title: 'Centered modal for creating/editing an event/session with no resource-conflict field shown', take: 'This creation modal exposes standard event fields but no visible resource or conflict-check field, illustrating how conflict surfacing is often absent from the base creation form.', counter_example: true },
  { uuid: 'ac852836-7888-46c4-9db9-cd40e0b117e3', question: 'Q5', app: 'time2book', title: 'Schedule management interface for a studio showing classes across a calendar grid', take: 'The studio schedule view lists classes on a calendar grid, the surface from which capacity and attendance for each class instance would be managed.' },
  { uuid: '6509f1bf-b86b-4fa9-b311-e7877f057df4', question: 'Q6', app: 'Calendly', title: 'New one-off meeting form with date/time fields in a modal', take: 'The one-off meeting form keeps date and time entry compact in a single modal, without a visibly separate time zone selector on this step.' },
  { uuid: '41e81b79-a016-4ac1-ad64-c714dd3e403c', question: 'Q6', app: 'Microsoft Teams', title: 'Event creation interface with dedicated date/time form fields', take: 'Date and time inputs are laid out as clearly separated form fields within the event creation interface, a baseline pattern for time entry.' },
];

const references = [];

for (const spec of flowSpecs) {
  const f = getFlow(spec.flowId);
  const images = (f.steps || []).slice(0, 8).map(s => s.thumbnail_url).filter(Boolean);
  if (!images.length) { console.error(`SKIP flow ${spec.flowId} - no images`); continue; }
  references.push({
    id: `refero:${f.id}`,
    source: 'refero',
    app: spec.app,
    title: spec.title,
    kind: 'flow',
    url: f.refero_url || `https://refero.design/flows/${f.id}`,
    images,
    question: spec.question,
    take: spec.take,
    counter_example: !!spec.counter_example,
    selected: false,
    crop: '',
  });
  console.error(`OK flow ${spec.flowId} (${spec.app}) - ${images.length} images`);
}

fs.writeFileSync('/tmp/06events-flows-partial.json', JSON.stringify(references, null, 2));
console.log(`built ${references.length} flow references, saved to /tmp/06events-flows-partial.json`);
