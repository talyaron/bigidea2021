// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBH2K4cux58YrZrgohTd-hjkC2U2-EKr7Q",
  authDomain: "full-stuck.firebaseapp.com",
  databaseURL: "https://full-stuck.firebaseio.com",
  projectId: "full-stuck",
  storageBucket: "full-stuck.appspot.com",
  messagingSenderId: "334581568051",
  appId: "1:334581568051:web:a62cb649bfec44c9750946",
  measurementId: "G-ZFC07MTQG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);