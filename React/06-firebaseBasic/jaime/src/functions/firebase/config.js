// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1KKdqOZuBX8El0P-fsoByViQ1rPj4V0A",
  authDomain: "flamebasetest.firebaseapp.com",
  projectId: "flamebasetest",
  storageBucket: "flamebasetest.appspot.com",
  messagingSenderId: "349385249068",
  appId: "1:349385249068:web:653f958dd40f4f22f61c89",
  measurementId: "G-H5LEV5RGW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();