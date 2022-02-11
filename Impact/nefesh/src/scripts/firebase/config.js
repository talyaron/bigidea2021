// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: 'AIzaSyDBrctixsp9hagB4axdLENPLTXSfzhOUl8',
	authDomain: 'common-tst.firebaseapp.com',
	projectId: 'common-tst',
	storageBucket: 'common-tst.appspot.com',
	messagingSenderId: '253126688266',
	appId: '1:253126688266:web:66b65b2bb48a5340e9e9f3',
	measurementId: 'G-0CELWFLDGP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const authentication = getAuth(app);
