// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//   apiKey: "AIzaSyBC0osFKwFQIJL4_e_WFpuVTi3nROmFFlg",
//   authDomain: "fir-1-e2823.firebaseapp.com",
//   projectId: "fir-1-e2823",
//   storageBucket: "fir-1-e2823.appspot.com",
//   messagingSenderId: "440005393663",
//   appId: "1:440005393663:web:1706ee9c493d5a29ade0ca",
//   measurementId: "G-Z2KHJY7FM6"
const firebaseConfig = {
    apiKey: "AIzaSyBC0osFKwFQIJL4_e_WFpuVTi3nROmFFlg",
    authDomain: "fir-1-e2823.firebaseapp.com",
    projectId: "fir-1-e2823",
    storageBucket: "fir-1-e2823.appspot.com",
    messagingSenderId: "440005393663",
    appId: "1:440005393663:web:1706ee9c493d5a29ade0ca",
    measurementId: "G-Z2KHJY7FM6"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);