// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDgkdkzJC0A3gIo4TeL_NvT91F6eqGcGtE',
	authDomain: 'shark9y-p-1.firebaseapp.com',
	projectId: 'shark9y-p-1',
	storageBucket: 'shark9y-p-1.appspot.com',
	messagingSenderId: '17193136268',
	appId: '1:17193136268:web:14d2129b02b6b26f388ba9',
	measurementId: 'G-J42QFZ42KF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
