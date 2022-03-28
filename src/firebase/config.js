import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "DOMAIN.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "BUCKET.appspot.com",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const firestoreInst = firebase.firestore()
const authInst = firebase.auth()
const storageInst = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { firestoreInst, authInst, storageInst, timestamp }
