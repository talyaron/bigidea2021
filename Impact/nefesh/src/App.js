import './App.css';
import './views/components/AdminPagePopUp/AdminPagePopUp';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './views/pages/login/Login.js';
import Error from './views/pages/404/404.js';
import Unauthorised from './views/pages/401/401.js';
import ProfilePage from './views/pages/ProfilePage/ProfilePage';
import ContactUs from './views/components/ContactUs/ContactUs';
import ArticleCreation from './views/components/ArticleCreation/ArticleCreation';
import MainPage from './views/pages/MainPage/MainPage';
import { checkRole } from './functions/general.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './functions/firebase/config';
import AdminPage from './views/pages/AdminPage/AdminPage';

//hi
let role = 'superAdmin';
let permissionedRole;
const auth = getAuth();
let loggedIn;

function App() {
	const [userState, setUserState] = useState({});

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('user logged in');
				const uid = user.uid;

				//get user from db
				getDoc(doc(db, 'users', uid)).then((userDB) => {
					if (userDB.exists()) {
						console.log('user exists');
						setUserState({ userName: userDB.data().displayName });
						role = userDB.data().role;
					} else {
						//if user exist in db get the user from DB and get the role
						console.log('user does not exist');
						setDoc(doc(db, 'users', uid), {
							age: 'null',
							displayName: user.displayName,
							email: user.email,
							location: 'null',
							organization: 'null',
							role: 'ole',
							sex: 'null',
							userID: uid,
							userIcon: user.photoURL,
							userPref: ['null'],
						});
					}
				});
				loggedIn = true;
			} else {
				// user logged out
				console.log('User loged out');
				loggedIn = false;
			}
		});
	}, []);
	return (
		<div>
			{loggedIn ? (
				<div className='container_App'>
					<BrowserRouter>
						<nav>
							<Link to='/MainPage'>Main Page</Link>
							<Link to='/ContactUs'>Contact Us</Link>
							<Link to='/ArticleCreation'>Article Creation</Link>
							<Link to='/ProfilePage'>Profile Page</Link>
							<Link to='/AdminPage'>*** Admin Page***</Link>
						</nav>
						<Routes>
							<Route path='/' element={<MainPage role={role} />} />
							<Route path='404' element={<Error />} />
							<Route path='401' element={<Unauthorised />} />
							<Route path='MainPage' element={<MainPage role={role} />} />
							<Route path='ContactUs' element={<ContactUs />} />
							<Route path='ArticleCreation' element={<ArticleCreation />} />
							<Route path='ProfilePage' element={<ProfilePage />} />
							<Route path='AdminPage' element={<AdminPage />} />
						</Routes>
					</BrowserRouter>
					<div id='stickyBanner'>
						<h5>Developed by: Big Idea</h5>
					</div>
				</div>
			) : (
				<div className='container_App'>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Login />} />
							<Route path='login' element={<Login />} />
						</Routes>
					</BrowserRouter>
				</div>
			)}
		</div>
	);
}

export default App;
