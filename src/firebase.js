import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFm6-mCPgJlaxBrMyyaH0MCfGstVU59NI",
    authDomain: "form-maker-99b9e.firebaseapp.com",
    projectId: "form-maker-99b9e",
    storageBucket: "form-maker-99b9e.appspot.com",
    messagingSenderId: "830799157014",
    appId: "1:830799157014:web:6f49e975e5e73675cc2237",
    measurementId: "G-MVZQC75STF"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();


export {db,auth,storage};

