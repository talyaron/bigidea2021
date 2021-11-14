// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVj1wYHljG_12c-2FnEsbxgh4E9DPQl9k",
  authDomain: "aegrrtgbr.firebaseapp.com",
  projectId: "aegrrtgbr",
  storageBucket: "aegrrtgbr.appspot.com",
  messagingSenderId: "482765223171",
  appId: "1:482765223171:web:dd121602360bb22d236536",
  measurementId: "G-GGZQVLBBYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);