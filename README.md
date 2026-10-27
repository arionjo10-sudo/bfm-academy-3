# BFM Academy

A static website (HTML, CSS, JavaScript). No build step and no server code.

## Open it in VS Code
1. Unzip the folder and open it in VS Code (File > Open Folder).
2. Install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.
   (Double-clicking `index.html` also works, but Live Server is smoother.)

## Folder layout
- `index.html` – page shell (header, footer, script tags)
- `css/styles.css` – all styling. Brand colors and fonts are the variables at the top (`--brand` is the gold #C6A75E).
- `js/courses.js` – all 65 courses (New Members Class, Water Baptism Class, and the leadership tracks) (lessons, quizzes, projects), tracks, ministries, readiness weights
- `js/app.js` – the app: progress, unlocks, grades, notifications, profile, readiness, transcript and certificate PDFs, verification

## Classes
The New Members Class (5 courses, files `nmc-101` to `nmc-105`) and the Water Baptism Class (3 courses, `bap-101` to `bap-103`) are at the end of `js/courses.js` in the files marked NEW MEMBERS CLASS and WATER BAPTISM CLASS. Each course unlocks when the one before it is finished, and finishing a class earns a certificate.

## Common edits
- **Change or add a course:** edit `js/courses.js`. Each course is a `C({...})` entry. The files are grouped by track.
- **Change the colors/fonts:** edit the brand block near the bottom of `css/styles.css`.
- **Certificate QR address:** in `index.html`, set `window.BFM_VERIFY_BASE` to the address where you host the site.

## Admin mode (instructor preview)
Staff open the **Staff** link in the footer and enter their personal Director access code. Each director has a different code (10 characters, like `ABCDE-FGH23`). Codes are never stored in the site: `ADMIN_KEYS` in `js/app.js` holds only salted PBKDF2 hashes. To add, replace or revoke codes, run `node tools/make-passcodes.js 10`, paste the printed `ADMIN_KEYS` over the old one, give each person one code from `staff-passcodes.txt`, then delete that file. Sessions last 4 hours, lock after 30 idle minutes, and 5 wrong tries cause a waiting period.

## Tracks and manuals
- **Track 2** is general spiritual leadership for any ministry (12 courses, any order).
- **Track 3** is for specific ministries: Youth, Children's, Men's, Women's, Outreach, Media & Communications, Christian Education, Dance, Deacon, Usher & Hospitality, Couples, and Nursery. To add one, add a `{k,n,f}` entry to `SPECS` in `js/courses.js`, two `C({...})` courses with the same `key`, and a row in `WS` (post.js section).
- Every study guide (screen, print, PDF) opens with "BUSHWICK FAMILY MINISTRIES" (large, bold), "CHURCH OF GOD OF PROPHECY" (smaller), then the ministry or program name. The name comes from `minName()` in `js/app.js`.

## Classes, registration and review
- BFM New Believers, New Members and Water Baptism open after the student presses **Register for this class**. The BFM Discipleship Class opens only by permission from the Academy director (students request it on the class page).
- Any locked course can be unlocked for a student: the student sends **Request unlock**, or the director opens it from the student's page (**Unlock courses**) in the Students tab.
- Lessons, assessments, projects and study guides stay locked until the above is done. Lessons, assessments, projects and study guides stay locked until then.
- Each class course has **Review my work and answers**: written answers open per lesson once it is completed, and assessment answers with the correct ones open once the assessment has been taken.
- **BFM Discipleship Class** joins Discipleship 101 and 201 (files `d14.js`).
- **Track 3** has one course per ministry (12 in all); `post.js` joins the lessons of each pair into a single course and drops the old core courses.

## Good to know
- Progress, the student profile, and certificates are saved in the browser's local storage, per device. Clearing site data erases them.
- Certificate verification checks that the ID matches the name, credential and date. A real "was this issued by BFM" check needs a shared database (for example Learning Station), which this version does not have.
- The PDF and QR features load two libraries from the jsDelivr CDN, so they need an internet connection.
- Fonts (Inter, Montserrat) load from Google Fonts.


## Latest changes
- **Logo**: gold BFM logo in the header (`img/logo-gold.png`, swap the file to change it).
- **New Believers Class** (4 courses, locked in order) added at the top of the Classes list.
- **Enroll without starting**: the course page has *Enroll in this course*; enrolled courses show an *Enrolled* badge and the button becomes *Continue*.
- **Hero Start learning** scrolls down to the Classes section.
- **Notifications** open as a small dropdown from the bell (*View all* opens the full page).
- **Back to Campus** button on every page except the home page.

## Admin tools, requests, profile, study guides (latest)
- **Admin > Students / Review & grade / Requests / Course activity / Certificates** (Staff link, personal access code).
- Students can request to skip a course (approved = "Waived") and request permission to start Track A (open to everyone, needs approval).
- Profile has a picture upload, **Save profile**, a live student profile card, a picture editor (crop, zoom, rotate), several ministries, interests and a favorite scripture, Settings (Light/Dark/Auto, larger text), and Delete profile.
- **Study guides**: Download PDF or Print from any unlocked course page.
- Required-course counts exclude the optional Track A (Administrative) and Teacher Certification.
- **Final test**: the Water Baptism Class ends with a final test course (BAP 190): a review lesson, a 15-question test (70% to pass, unlimited retakes) and a sign-off with the pastor. The class certificate is issued only after it. The other classes have no final test. Exam courses use `pass:0.7` and `exam:true` in `js/courses.js` (`d16`).
- **Teacher Certification** (track `T`, optional, by director permission): TCH 101, 102, 103, 201 and a practicum + final exam (TCH 202), covering Sunday school, discipleship, water baptism preparation, new believers and new members classes. Earns the BFM Certified Teacher certificate (`BFM-T-…`). Students request permission from the track page (`access_T`); the director approves under Requests or from a student's Unlock box.
- Sharing student records between devices needs a database. On claude.ai this uses the page's `db` capability (see `initShared`, `pushNow`, `watchAdmin` in js/app.js). In plain VS Code / GitHub Pages hosting there is no database, so Admin shows only the current browser. To use your own backend (Firebase, Supabase), replace those three functions.

## Dashboard additions
- Started courses, course search, and a large footer with the logo, Quick access, Events (links to the BFM events calendar) and site links. The daily streak was removed.
- Study guides redesigned for PDF and print (cover page with contents, running header and footer, ruled writing lines). Print styles are in `css/styles.css` under `/* study guide */`.

- Study guides now open with a cover page and a letter to the student (the gold logo for the PDF is embedded in js/logo data inside js/app.js). Started courses also appear at the top of the Catalog.

## Security notes
- A browser-only site cannot truly hide an admin screen: the real protection for student records is the database access rules (only the artifact owner and invited editors can read `inbox`). Treat the access code as a front door and the rules as the lock.
- For a public website, move sign-in and records to a real server (accounts, server-side checks) and keep this UI.

## Round 4 features
- **Settings (student):** text size slider, dyslexia-friendly font (Lexend), line spacing, high contrast, reduce motion, weekly study goal with a gentle reminder.
- **Course tools:** bookmark any lesson and keep private notes (Bookmarks and notes page, notes download).
- **Staff tabs:** Reports (monthly, quarterly, yearly grading reports as PDF or CSV), Announcements, Events.
- Announcements and events are stored in the shared documents `pub/announcements` and `pub/events` (everyone can read, only admins can write). If you move off the artifact database, replace `pubWatch` and `pubSet` in `js/app.js`.


## Latest round
- **Study guides page**: classes and tracks are separate sections with spacing, and every group starts collapsed.
- **Track 3 is "Ministry Specializations"**: every ministry has its own **Ministry manual** (screen and PDF) with no course code, course title or "Department". Resources lists them as "<Ministry> manual".
- **Ministry calling**: a student picks one ministry in Track 3 and only that course shows; other ministries are locked under "Other ministries" and need permission (Request to unlock). The director can set or reset a student's ministry under "Ministry calling" on the student page.
- **Logo on all PDFs**: study guides, ministry manuals, transcript, certificate and grading report.
- **Director notification bell** (new requests, updates, messages) and a **Messages** tab for student questions and replies.
- **FAQs and Privacy** pages, different for students and for the director (footer links).
- **Help chat** with the logo button in the corner: answers from the FAQs by keyword (not AI) and can send the question to the director.
- Director settings: the "Text and display" box is fixed.

## Ministry manuals and Nursery (latest)
- **Nursery Ministry** was added to Track 3 (course MIN 420, lessons from `js/courses.js` file section NURSERY MINISTRY). Track 3 now has 12 ministries.
- Every ministry has a **separate Ministry manual** from its study guide. It is on the course page as soon as the course opens (Open manual, Download PDF, Print) and in Study guides and resources. The manual text lives in `js/courses.js` under MINISTRY MANUALS (`MN('youth',{...})`). Edit the roles, rhythm, standards, safety and checklists there. Each manual is a template that the ministry leader and pastor confirm.
- The ministry study guide keeps the lessons; the manual is the working document for running the ministry.
- **Help chat** has an **End chat** button to start over, and the **Academy Director** portal has a small logo icon at the bottom right that opens Quick actions.

## Shared records in VS Code
Messages, notifications and approvals need a shared place. Follow `SETUP-SHARED-RECORDS.md` (Firebase, free, about 15 minutes) and fill in `js/config.js`. With `js/config.js` left empty, everything still works on one device only.

## Ministry manuals, previews and footers (latest)
- Each manual now covers: understanding the ministry (what it is and is not), purpose and Scripture, a typical service or meeting, team roles, **communication**, **consistency and faithfulness**, **character and integrity**, safety, checklists, what a healthy ministry looks like with common challenges, reporting, and a sign-off page. The text is different for every ministry. It lives in `js/courses.js` under MINISTRY MANUALS (`MN('youth',{...})` and `MX('youth',{...})`).
- The on-screen preview of every study guide and manual now matches the PDF: logo cover, running sections, and a footer with the small logo, "Bushwick Family Ministries | Church of God of Prophecy | Ministry name", and "Copyright 2026 Bushwick Family Ministries". The browser Print button repeats that footer on every page.
- The downloaded PDFs have the same footer on every page.

## Academy Director experience (staff)
- After the director signs in, the header reads **Campus AD · Catalog · Admin · Records**. These are teacher pages, not the student pages.
- **Campus AD**: classroom overview, teaching tools, per-track progress, live announcements and coming events.
- **Catalog**: every course with enrolled, completed and average grade, plus its study guide and ministry manual.
- **Admin**: program health, catalog controls (Discipleship and Track A permissions), students by ministry, admin tools, access and security.
- **Records**: every student's transcript (view or PDF, including seminar and event hours, waived courses, certificates and readiness), earned certificates, issue a certificate, and verify a certificate against the Academy records.
- **Log out** sits at the bottom of Overview and Profile. The quick-actions logo button follows the director on every page.
- Announcements have a **Preview** step before posting.

- Profile roles: Church Member, Ministry Member, Assistant Ministry Director, Ministry Director, Deacon, Clergy, Minister, Pastor, Administrative, Other (type your own). Ministries include Praise & Worship and Usher, and Other lets a student type a ministry that is not listed.
- Registering for a class sends a request to the Academy Director under Requests. The class opens right away. The director can confirm it, or decline it to close the class again.


## UI/UX update (v33)
- Phones and small tablets get a bottom tab bar (Campus, Catalog, Readiness, Transcript, Profile); the top menu and the Back to Campus button hide at that size.
- A gold reading-progress bar runs across the top of lesson pages.
- Skip and unlock requests on a course page are tucked into a "Need to skip or unlock this course?" panel.
- Fixed a horizontal scroll caused by the campus hero background.
- Toasts size to their message, sit clear of the bottom bar, and close when tapped.
- Director stats show two per row on phones; the portal tabs fade at the edge to show they scroll.


## Manuals in the BFM template and volunteer packets (v34)
- All ministry manuals now follow the BFM template: cover letter, table of contents, welcome statement, then Section 1 BFM Organizational Foundation, 2 Ministry Foundation (slogan, mission and vision, goals and core values, healthy qualities, Scriptures), 3 Standards & Expectations / Character Qualities, 4 Culture, 5 Servanthood | Life Led By Christ | Balance of Ministry & Life, 6 Safety & Care, 7 Safeguarding & Compliance.
- 15 manuals: Children's, Youth & Young Adults, Men's, Women's, Usher & Hospitality, Nursery, Media, Communications, Dance, Pastoral Aid/Care, Administrative, Couples, Deacon, Christian Education, Outreach. Communications opens with the Media course, Pastoral Aid/Care opens with Track 3, and Administrative opens with Track A.
- **Volunteer training packets** follow one template: Welcome Statement, Table of Contents, Section 1 Foundational Section (church vision statement, core values), Section 2 Roles & Responsibilities (organizational chart for the Director, Assistant Director and Volunteer roles, and what each role means), and Additional Materials (FAQs and a volunteer agreement). There are two general packets (Volunteer Orientation Packet, Volunteer Safety & Safeguarding Packet) for anyone who has not found a ministry, shown on the Track 1 page, plus one packet per ministry, shown on each ministry's page and under Individual ministries in Study guides and resources. They are printed documents, not courses. Edit the wording in `generalDoc` and `packetDoc` in `js/app.js`.
- Content lives in `js/courses.js`: `MN(...)` fields per manual, `MTPL` (slogan, culture heading, expectation groups, safe-environment audience) and `BFM_FOUND` (church statement, vision, mission, core values). Much of the wording is placeholder text for your pastor and ministry leaders to replace.

## Manual layout (v36)

Every manual and packet PDF now has: page 1 cover (logo, Bushwick Family Ministries, Church of God of Prophecy, ministry name), page 2 table of contents with subsections and page numbers, page 3 welcome statement, then seven sections, each on its own page with a big bold section name and titled subsections (no numbers). Smaller groups inside a subsection are bold headings. The contents page lists each section with its page number and its subsections. The same structure shows on screen and in Print. Edit the wording in `js/courses.js`.

## Manual layout (v38)

The contents page shows section and subsection numbers. Section 1 is named BFM Foundation. After the welcome statement the sections flow one after another instead of one per page. The cover prints the ministry name as large as fits the page.

## Manual and packet layout (v40)
- Covers: gold label, rule, large title, italic tagline, BFM ACADEMY and copyright near the bottom, under the black logo band.
- Table of contents: numbered sections and subsections with page numbers and dot leaders (two columns on manuals).
- Page fit: a paragraph, list item, or subsection is never split across pages. If a full subsection will not fit, it starts on the next page.
- Indented items are bullet points.
- Vision, scripture (Matthew 28:18-20), and mission updated everywhere.
- Arrival times: Sunday school teachers 9:30 AM; deacon, admin, pastoral aid, media, communications, and usher volunteers 45 min to 1 hr before the 10:30 service.
- New Volunteer Information Form at the end of every packet (Track 1 checklist, personal information, important note).

## UI/UX polish (v41)
- Back button now goes up one level (lesson to course, course to track, and so on) and names where it goes.
- Course outline is open by default on the course page.
- Assessments show "n of N answered" in a sticky bar next to Submit.
- Home: Leadership tracks (1 to 3) and Optional programs (Track A, Teacher Certification) are separate rows.
- Readiness card says "Your readiness summary" for students.
- Director: staff tabs wrap on desktop, the Admin nav item stays highlighted on staff pages, and the footer shows director links.
- Fixed: on-screen manuals and packets showed paragraph text as small gold capitals (class name clash).
- Fixed: manuals and study guides were unreadable in dark mode.
- Mobile: tidier progress ring, resource list, and transcript stats.

## v42 – Manual restructure
- Removed "How this manual fits the whole church" and "How to use this manual"; removed disagreements, social media, common challenges, important contacts and notes from all manuals.
- Emergency procedures and incident reports kept only in the nursery, children's and youth manuals; Welcoming guests only in Usher & Hospitality.
- "<Ministry> Foundation" now carries full-text KJV scriptures with a "How it connects" note for mission, vision, goals/values, and (in Culture) healthy qualities; one scripture per character quality.
- Servanthood rewritten with spiritual and practical application; compliance and quarterly reporting guidelines updated; 10-12 FAQs per ministry at the end.
- New files: scr_data.js, scr_faq1/2.js, scr_lead.js, bible.js (merged into js/courses.js).

## v43 and v44
- Background checks are renewed whenever leadership asks.
- Lessons now show the full text of each Bible passage (King James Version, public domain) in "Read ..." panels under What Scripture says.
- Punctuation pass: serial commas made consistent; "&" used consistently in Track 1 course titles.

## v45
- 6-month renewal now spells out first aid, safety, fire hazards, and safety training.
- New "How BFM Academy works" strip for new students; optional programs collapse on Campus.
- Locked tracks show one clear lock message with a "Go to Track N" button and a collapsed course preview.
- Track 3 ministry cards no longer repeat the ministry name; "Your steps" checklist at the top of each lesson.

## v46 – Guided tours
- New student tour (12 steps) and director tour (13 steps): a spotlight walks through the real pages, with Back, Next, a progress bar, and a Skip tour button on every step. Arrow keys move between steps and Esc skips.
- New students (and directors on their first staff visit) see a small prompt, once. Students who have already started a course are not prompted.
- The tour stays out of the way after that. Replay it from the footer (Guided tour, or Student tour / Director tour for staff), the Profile page, or the FAQs.
- Code: js/app.js (app_l.js section). Styles: .tour* in css/styles.css.

## v47
- Removed the "How BFM Academy works" strip from Campus.
- Guided tour rebuilt to visit every section: 21 steps for students (Campus, Catalog, a track, a course, Readiness, Transcript, Certificates, Study guides, Bookmarks, Events, Profile, FAQs, help button) and 16 for directors (every staff tab, Staff FAQs, and the student preview).
- Smoother tour: it waits for each page to draw, follows the target while the page scrolls, keeps the card clear of the highlighted area, and keeps keyboard focus inside the card.

## v48
- Course page: the main button is now "Next lesson" and goes straight to the first unfinished lesson (it becomes "Take the assessment" or "Go to the project" when the lessons are done). The next lesson is marked "Next" in the outline.

## v49
- Fixed: the director grading report always showed "Courses completed: 0". It now counts completions correctly.
- Found during the 50-student dry run (see the separate demo package).

## v50
- Leadership tracks (Track 1, 2, 3) now open only after the four BFM classes (New Believers, New Members, Water Baptism, Discipleship). Anyone with a position (deacon, assistant ministry director, ministry director, minister, clergy, pastor, administrative, or a typed role) sees “Would you like to skip this class?” with Yes and No on each class page. Yes shows “Awaiting approval from the Academy” until the director approves; regular members do not see this prompt. Church members and ministry members finish them, or ask to skip New Believers or Water Baptism on those class pages. A student who already has Track 1-3 progress is not locked out.
- Announcements: inline banner or floating pop-up, X to close, arrows (1 of 3), start and end date and time, icon, colors, archive and restore. Students see Past announcements on the news page.
- New events pop-up: when the director adds an event, students get a pop-up that points to the events calendar in the footer.

## v52
- Floating announcements open as a centered pop-up over a dark, blurred background.
- Footer events column no longer overlaps.
- Excel exports (.xlsx) with the BFM logo and a styled table for the student roster and grading reports; CSV is still there. Excel needs internet once (loads a small library).
- Director messages: more space above Send reply, a Delete button on each message, and Clear answered.

## v53
- Ministry manual, Safeguarding & Compliance, Reporting: added Monthly Reports (last Sunday, no later than the 5th of the next month) and Quarterly Reports (end of the quarter, or by the 5th of the next month).
