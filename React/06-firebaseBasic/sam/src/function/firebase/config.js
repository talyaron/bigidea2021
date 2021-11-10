// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIQX5Tq1C1wZS845g1lJkTxCg8yrIKn6M",
    authDomain: "fir-1-8cc64.firebaseapp.com",
    projectId: "fir-1-8cc64",
    storageBucket: "fir-1-8cc64.appspot.com",
    messagingSenderId: "196802778144",
    appId: "1:196802778144:web:acc6964a0a418323fa5845",
    measurementId: "G-GF3E041EXN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getFirestore(app);