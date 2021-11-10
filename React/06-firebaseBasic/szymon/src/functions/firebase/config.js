// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc10yCpR3tVsG8I2MiccwxIQsg5hvAQO0",
  authDomain: "fir-1-85cff.firebaseapp.com",
  projectId: "fir-1-85cff",
  storageBucket: "fir-1-85cff.appspot.com",
  messagingSenderId: "348838471051",
  appId: "1:348838471051:web:7879f5f05c8a0802327b8e",
  measurementId: "G-QX49QZKVQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);