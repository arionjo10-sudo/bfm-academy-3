# Making messages, notifications and approvals work outside Claude

Inside Claude (the published link) the shared records are built in. In VS Code or on your own web hosting there is no shared place yet, so student messages, director notifications, approvals, grades, announcements and events only live in each person's own browser.

This guide connects the Academy to a **free Firebase Realtime Database** so every student's browser and the director's browser share the same records. It takes about 15 minutes and needs no coding.

## Before you start
- Students must reach the site over the internet. VS Code "Live Server" only runs on your own computer. To let others use it, put the folder on free hosting (Netlify Drop, GitHub Pages, Cloudflare Pages, or your church website host).
- The shared records need a Google account (for Firebase).

## Steps
1. Go to https://console.firebase.google.com and choose **Add project**. Name it `bfm-academy`. You can turn off Google Analytics.
2. **Authentication** > **Get started** > **Sign-in method**. Turn on **Anonymous** and turn on **Email/Password**.
3. **Authentication** > **Users** > **Add user**. Use an email you control (it does not need to be a real inbox, for example `director@bfm-academy.org`) and a long password. This is the **shared records password** that directors type when they unlock the staff tools. Share it only with directors.
4. **Build** > **Realtime Database** > **Create database**. Pick the closest region and start in **locked mode**.
5. Open the **Rules** tab, paste the contents of `firebase-rules.json` from this folder, change `director@bfm-academy.org` to the email from step 3 (it appears 5 times), and press **Publish**.
6. **Project settings** (gear icon) > **General** > **Your apps** > add a **Web app** (name it anything). Copy the `apiKey`. In **Realtime Database** copy the database URL at the top of the Data tab (it looks like `https://bfm-academy-default-rtdb.firebaseio.com`).
7. Open `js/config.js` in VS Code and fill in the three values:
   ```js
   window.BFM_CONFIG={
     apiKey:'AIza...your key...',
     databaseURL:'https://bfm-academy-default-rtdb.firebaseio.com',
     directorEmail:'director@bfm-academy.org'
   };
   ```
8. Save, then open `index.html` (or upload the folder to your hosting).

## How it works for people
- **Students** are signed in anonymously and automatically. Each one can only read and write their own record.
- **Directors** unlock the staff tools with their personal access code and also type the shared records password. Without it the staff portal opens but shows no student data.
- Messages, requests and replies update within a few seconds (the app checks about every 6 seconds while the page is open).

## Good to know
- The Firebase `apiKey` is not a secret. The rules in `firebase-rules.json` are what keep student records private, so do not skip step 5.
- If a student clears their browser data they get a new anonymous identity and their old shared record is no longer linked to them.
- Records are stored as one text block per student, so only the Academy can read them. Delete a student from the staff portal to remove their shared record.
- This has been tested against a simulated Firebase, not against your real project. After setup, test with one student browser and one director browser (send a chat question, then reply from the Messages tab).
- If you change the director email later, update both `js/config.js` and the rules.
