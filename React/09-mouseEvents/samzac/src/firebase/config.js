// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqCWFxoJ-sItHic-mi4Vl4_I2SXWwNYhk",
  authDomain: "samzac-4bea6.firebaseapp.com",
  projectId: "samzac-4bea6",
  storageBucket: "samzac-4bea6.appspot.com",
  messagingSenderId: "916529516498",
  appId: "1:916529516498:web:413a7b99c521789c2a820b",
  measurementId: "G-CKPZ7RCM58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebaseConfig