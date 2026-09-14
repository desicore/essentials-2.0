import json,pathlib
p=pathlib.Path(__file__).parent;f=p/'references.json';d=json.loads(f.read_text())
takes={
'ec16c800':'Circle’s publishing flow exposes draft mode and Open/Private/Secret audience descriptions, then topics, thumbnail and Save changes; Open refers to community members, not the public internet.',
'9aa981d2':'Kajabi’s module menu offers Draft, Publish, Drip and Lock; choosing Publish produces a Published state and confirmation toast.',
'94f6be70':'Podia confirms Course published, separates Published/Open/Visible, and shows a delayed module plus an audience table with progress, signup, start and expiry columns.',
'9ef7d498':'Teachable places per-lesson Publish actions beside a Drip panel with days after enrolment, Activate drip, notification controls and saved feedback.',
'd02990dd':'Teachable’s curriculum combines Preview and per-lesson Publish controls with a Drip panel that visibly requires a plan upgrade.',
'6f84d500':'Teachable’s Drip panel exposes days after enrolment, a numeric delay, Activate drip, student notification controls and saved feedback.',
'e801d8ae':'Circle’s Invite members screen combines selected-space access with admin/moderator permission controls and Send invites; privilege assignment is separate from choosing spaces.',
'b227715d':'Figma combines email invitation, Copy link, existing people and can-view permissions in one dialog; this is a content-sharing analogy for course access.',
'ffaf7085':'Figma exposes Anyone access, View/Edit, optional password protection and a viewers-can-copy/save/export setting before Save; a password is not a classroom join code.',
'11b3c0a4':'Counter-example in scope: Gumroad’s creator content editor has a Share tab and Collaborators navigation, but this capture does not show a learner-access grant or invitation status.',
'44650693':'Notion’s Add members modal supports names or emails, an explained Member role, an invitation message and Send invite; workspace membership is an adjacent analogy, not course enrolment.',
'9f7bcb4e':'Notion shows a typed email suggestion labelled Guest alongside Member role selection, an invite message and Send invite; inspect identity and role labels together.',
'c04c0023':'Teachable’s learner home shows Start Lesson, a lesson list and 0% completion, giving the new learner a clear first action.',
'18683325':'Coursera foregrounds Continue learning, course progress, a module card, Resume and a weekly goal; session scheduling and announcements are not observed here.',
'6462b667':'Podia’s captured invitation flow shows Customer invited, audience rows with progress, and Customers/Pending analytics; these states do not establish email delivery, acceptance or course opening.',
'2fe9271e':'Slack’s invitation management shows Requests/Pending/Accepted/Invite Links tabs plus bounced, resent and revoked invitation states, providing recovery evidence beyond a success message.',
'f31fedca':'Coursera’s web home shows enrolled learning, progress, Resume and a weekly goal; pair with its iOS reference to compare the core learner hierarchy.',
'd76cce29':'Coursera iOS shows module progress, Download, daily goals and Up Next; its matched web capture supports hierarchy parity, not verified offline or invite behaviour.',
'be865fb9':'Teachable shows a learner-facing home inside an Edit in Admin / Preview as admin shell, with Draft lesson states, Start actions and 0% completion; this is preview context, not a verified ordinary learner session.',
'89b6481f':'Udemy’s iOS learner course home provides mobile context; no matched web capture was retained, so cross-device parity remains unverified.'
}
for r in d['references']:
 s=r['id'].split(':')[1][:8]
 if s in takes:r['take']=takes[s]
f.write_text(json.dumps(d,indent=2))
