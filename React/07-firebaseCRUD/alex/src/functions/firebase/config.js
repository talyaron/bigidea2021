// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyARdRRWk_8mLqACO5qZ-aUQGaknnB1fXBs",
  // authDomain: "full-stack-b31b6.firebaseapp.com",
  // projectId: "full-stack-b31b6",
  // storageBucket: "full-stack-b31b6.appspot.com",
  // messagingSenderId: "806807239938",
  // appId: "1:806807239938:web:398ab434ecb81d4d4bd61b",
  // measurementId: "G-EZHCYT5Q2Q"
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