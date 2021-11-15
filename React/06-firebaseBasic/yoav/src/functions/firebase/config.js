// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2meEYoUvzmQ3vNUHUoot4XIrYARj4kvc",
  authDomain: "fir-1-2cf7f.firebaseapp.com",
  projectId: "fir-1-2cf7f",
  storageBucket: "fir-1-2cf7f.appspot.com",
  messagingSenderId: "863215693103",
  appId: "1:863215693103:web:d630e900b750e92573c5da",
  measurementId: "G-BF81EZ7K2Z"
};

<<<<<<< Updated upstream
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
=======
//Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

>>>>>>> Stashed changes
