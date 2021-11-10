// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEpgTZr3dBKGX_C1axB-eaEY72opJ99Z0",
  authDomain: "fir-no001.firebaseapp.com",
  projectId: "fir-no001",
  storageBucket: "fir-no001.appspot.com",
  messagingSenderId: "821581357618",
  appId: "1:821581357618:web:e7812112a2708cdd2b122b",
  measurementId: "G-2HZ8J4F24Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();