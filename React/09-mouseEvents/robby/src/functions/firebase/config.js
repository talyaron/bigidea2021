

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDapS68qpDP6ABTttkJQsIWFXoXIAdQTkM",
  authDomain: "landorsea-bde63.firebaseapp.com",
  projectId: "landorsea-bde63",
  storageBucket: "landorsea-bde63.appspot.com",
  messagingSenderId: "461272467675",
  appId: "1:461272467675:web:c2591ece0443e6f8dee4fe",
  measurementId: "G-VW89WM6L9E"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 