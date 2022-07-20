
import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAeZ0C5ZDR5kbMpseqiBHt7GWT4jnCHMPY",
  authDomain: "ticket-system-cf5a8.firebaseapp.com",
  projectId: "ticket-system-cf5a8",
  storageBucket: "ticket-system-cf5a8.appspot.com",
  messagingSenderId: "955642063006",
  appId: "1:955642063006:web:4c0e9aebd91933cff8338f",
  measurementId: "G-6GLLN14EM5"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig)

export default firebase