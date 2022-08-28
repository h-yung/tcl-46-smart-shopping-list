## Forking the og repo

## updating creds

https://github.com/the-collab-lab/smart-shopping-list-deprecated/blob/main/src/lib/firebase.js
// NOTE: import only the Firebase modules that you need in your app.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase.
// These details will need to be replaced with the project specific env vars at the start of each new cohort.
const firebaseConfig = {
apiKey: API_KEY,
authDomain: AUTH_DOMAIN,
projectId: PROJECT_ID,
storageBucket: STORAGE_BUCKET,
messagingSenderId: MESSAGING_SENDER_ID,
appId: APP_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

Need in env vars:
API_KEY
AUTH_DOMAIN
PROJECT_ID
STORAGE_BUCKET
MESSAGING_SENDER_ID
APP_ID

current as of 8/28/22

### in `firebase.ts` lines 16-23

const firebaseConfig = {
apiKey: 'AIzaSyCfI_TVGKMzq7CaxBRQZAbqejH713TzGeg',
authDomain: 'tcl-46-smart-shopping-list.firebaseapp.com',
projectId: 'tcl-46-smart-shopping-list',
storageBucket: 'tcl-46-smart-shopping-list.appspot.com',
messagingSenderId: '750490697092',
appId: '1:750490697092:web:786defaaac8ae2cf73f1d1',
};

### NEW creds:

From firebase web console

1. create new project/app
2. I said I wanted firebase hosting
3. It said, `npm install firebase` if you need to for your new projects, then
   // Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDx8jb67UHO95_S1WtVAfW2dUZGsgfjJ48",
authDomain: "tcl-46-smart-shopping-list-fin.firebaseapp.com",
projectId: "tcl-46-smart-shopping-list-fin",
storageBucket: "tcl-46-smart-shopping-list-fin.appspot.com",
messagingSenderId: "802911115258",
appId: "1:802911115258:web:464871346816378021b643",
measurementId: "G-CPNG3BS6PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

<!-- measurementId in line 67 seems new.oH line 60 comment.--->

THIS VID: deploy a react app with github actions to firebase.
https://www.youtube.com/watch?v=kLEp5tGDqcI

4.  To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

Run the following npm command to install the CLI or update to the latest CLI version.

`npm install -g firebase-tools`

then
`firebase login:ci`
having logged in with your Google account, you should see a token (long string) print in your terminal.

Copy it,
and use it in place of the token placeholder below
Use this token to login on a CI server:

1//0d6lEGMh-dFONCgYIARAAGA0SNgF-L9IrISXBAqLDqrKeinwuz2SSYjgCvvPerw9vGjCscfoFg3kvfX5QrWwrcm8HoEUlsWuDnw

Example:
`firebase deploy --token "$FIREBASE_TOKEN"`

## Firebase hosting

https://firebase.google.com/docs/hosting/usage-quotas-pricing?hl=en&authuser=1
Storage for your Hosting content is at no cost up to 10 GB.

    If you are not on the Blaze plan, and you reach the 10 GB limit of no-cost Hosting storage, you won't be able to deploy new content to your sites. You can set a limit on number of releases to keep: https://firebase.google.com/docs/hosting/manage-hosting-resources?authuser=1#release-storage-settings

next
`firebase init` in project folder
choose HOSTING from list of prompts

if you're grabbing from a forked project, you will notice .firebaserc may be missing. bc it's .gitignored!
Let's hope we don't need it.

### Deploys

deploys are via github action.

starting from 3:16 in
the same video:
https://youtu.be/kLEp5tGDqcI?t=196

so go to the existing repo
your fork of it should have the workflows

check out the DEPLOY TO FIREBASE workflow
the link to the .yaml is subtle but you can click it
and it will show you the code
and here you see
https://github.com/h-yung/tcl-46-smart-shopping-list/blob/main/.github/workflows/firebase-hosting-pull-request.yml also in doc for img

### secrets keys

GITHUB_TOKEN
https://docs.github.com/en/actions/security-guides/automatic-token-authentication
This is automatically linked to your repos in github so when you try to add them it just kinda disappears. bc it's auto linked as secrets.GITHUB_TOKEN

FIREBASE_SERVICE_ACCOUNT_TCL_46_SMART_SHOPPING_LIST from the yaml -
it's the token you got from setting up your firebase instance for hosting, i.e.,
1//0d6lEGMh-dFONCgYIARAAGA0SNgF-L9IrISXBAqLDqrKeinwuz2SSYjgCvvPerw9vGjCscfoFg3kvfX5QrWwrcm8HoEUlsWuDnw

//TRYING STH: RENAMING TO
FIREBASE_TCL_46_SMART_SHOPPING_LIST in BOTH yamls (pull request, merge) and action secret
I see the pull one is fr Xinrui to generate previews on non-main branches too?

//also need to update the firebase.ts in files and the project id in the yaml?

## will leaving project ID unchanged do any harm? (I renamed it adding a "-fin")

#OG app has unit test workflows too

ie.
https://github.com/the-collab-lab/tcl-43-smart-shopping-list/runs/6699393890?check_suite_focus=true
