
import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAWA-mxD3zAa0ddyV3th8Mgni2_6YGdUQc",
  authDomain: "sistema-chamado-b1cac.firebaseapp.com",
  projectId: "sistema-chamado-b1cac",
  storageBucket: "sistema-chamado-b1cac.appspot.com",
  messagingSenderId: "1053619923651",
  appId: "1:1053619923651:web:09e7a4dfb96b53996d1076",
  measurementId: "G-R00PDZVYFZ"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig)

export default firebase