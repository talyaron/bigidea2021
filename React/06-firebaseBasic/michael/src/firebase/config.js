// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAhsEIxG3V23UbXzldXrX_5TXlzshI8Ns",
  authDomain: "my-first-project-abc70.firebaseapp.com",
  projectId: "my-first-project-abc70",
  storageBucket: "my-first-project-abc70.appspot.com",
  messagingSenderId: "190051952995",
  appId: "1:190051952995:web:0e41d9c9d011d34ea6cb56",
  measurementId: "G-CC833GQTQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);