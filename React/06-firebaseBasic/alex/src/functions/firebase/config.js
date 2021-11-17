// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARdRRWk_8mLqACO5qZ-aUQGaknnB1fXBs",
  authDomain: "full-stack-b31b6.firebaseapp.com",
  projectId: "full-stack-b31b6",
  storageBucket: "full-stack-b31b6.appspot.com",
  messagingSenderId: "806807239938",
  appId: "1:806807239938:web:398ab434ecb81d4d4bd61b",
  measurementId: "G-EZHCYT5Q2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);