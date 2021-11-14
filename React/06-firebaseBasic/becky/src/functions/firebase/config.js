// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF0gj84y0OducRM89AZJos6M1nnCd55mo",
  authDomain: "fir-1-b009b.firebaseapp.com",
  projectId: "fir-1-b009b",
  storageBucket: "fir-1-b009b.appspot.com",
  messagingSenderId: "672288909547",
  appId: "1:672288909547:web:e26b188d1e2512dc6876ae",
  measurementId: "G-213LWLFT6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);