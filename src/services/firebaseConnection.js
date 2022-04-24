// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const firebase = initializeApp(firebaseConfig);

export default firebase