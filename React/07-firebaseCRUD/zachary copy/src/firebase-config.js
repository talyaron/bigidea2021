import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPnPoRyA4_fA9AHYNUXHoMSlbWd2zEW2U",
    authDomain: "crud-tutorial-ab816.firebaseapp.com",
    projectId: "crud-tutorial-ab816",
    storageBucket: "crud-tutorial-ab816.appspot.com",
    messagingSenderId: "577515906868",
    appId: "1:577515906868:web:19b32c358c7f386c2c2761",
    measurementId: "G-K2CMR5R2RR"
  };

  const app = initializeApp(firebaseConfig);

  export const db=getFirestore(app);