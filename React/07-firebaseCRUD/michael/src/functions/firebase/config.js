// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //apiKey: "AIzaSyDAhsEIxG3V23UbXzldXrX_5TXlzshI8Ns",
  //authDomain: "my-first-project-abc70.firebaseapp.com",
  //projectId: "my-first-project-abc70",
  //storageBucket: "my-first-project-abc70.appspot.com",
  //messagingSenderId: "190051952995",
  //appId: "1:190051952995:web:c86eb8eea2ed2acea6cb56",
  //measurementId: "G-37HC6C997J"
  apiKey: "AIzaSyDBrctixsp9hagB4axdLENPLTXSfzhOUl8",
  authDomain: "common-tst.firebaseapp.com",
  projectId: "common-tst",
  storageBucket: "common-tst.appspot.com",
  messagingSenderId: "253126688266",
  appId: "1:253126688266:web:66b65b2bb48a5340e9e9f3",
  measurementId: "G-0CELWFLDGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);