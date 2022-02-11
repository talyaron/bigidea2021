import './styles/global/App.css';
import './views/template/AdminPagePopUp';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Login from './views/pages/Login.js';
import Error from './views/pages/404.js';
import Unauthorised from './views/pages/401.js';
import ProfilePage from './views/pages/ProfilePage';
import ContactUs from './views/pages/ContactUs';
import ArticleCreation from './views/pages/ArticleCreation';
import MainPage from './views/pages/MainPage';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './scripts/firebase/config';
//pages
import PublishedEvent from './views/template/PublishedEvent';
import AdminPage from './views/pages/AdminPage';
import NavTopBar from './views/components/NavTopBar';
import Event from './views/pages/Event';
import EditSavedArticle from './views/template/EditSavedArticle';
import SavedEvents from './views/template/SavedEvents';
import SavedEvent from './views/template/SavedEvent';
import PublishedEvents from './views/template/PublishedEvents';
import EditPublishedEvent from './views/template/EditPublishedEvent';
import Credits from './views/pages/Credits';

let role;
let navList = [
	{ id: 0, label: 'Main Page', href: 'MainPage', role: ['everyone'] },
	{ id: 1, label: 'Profile Page', href: 'ProfilePage', role: ['member'] },
	{ id: 2, label: 'Contact Us', href: 'ContactUs', role: ['everyone'] },
	{ id: 3, label: 'Create an Event', href: 'ArticleCreation', role: ['orgAdmin', 'superAdmin'] },
	{ id: 4, label: 'Admin Page', href: 'AdminPage', role: ['superAdmin'] },
	{ id: 5, label: 'Sign In', href: 'login', role: ['guest'] },
	{ id: 6, label: 'Sign Out', href: 'MainPage', function: handleLogOut, role: ['member'] },
	{ id: 7, href: 'event', role: ['everyone'], hidden: true },
];
const auth = getAuth();
let userID = '';
let loggedIn;

function App() {
	const [userState, setUserState] = useState({});
	const [, /*isAdmin*/ setIsAdmin] = useState(false);
	const [isOle, setIsOle] = useState(false);
	const [isUserID, setIsUserID] = useState(null);
	const location = useLocation();
	const [isLogin, setIsLogin] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {


		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				setIsUserID(uid);
				userID = uid;
				//get user from db
				getDoc(doc(db, 'users', uid)).then((userDB) => {
					if (userDB.exists()) {
						role = userDB.data().role;
						setUserState({
							userOrg: userDB.data().organization,
							displayName: userDB.data().displayName,
						});

						if (userDB.data().disabled) {
							alert('user is banned');
							return;
						}

						if (role === 'guest') {
							setIsOle(false);
							setIsAdmin(false);
						}
						if (role === 'ole') {
							setIsOle(true);
							setIsAdmin(false);
						} else {
							setIsOle(false);
							setIsAdmin(false);
							if (role === 'superAdmin') {
								setIsOle(false);
								setIsAdmin(true);
							}
						}

						const uid = userDB.data().userID;
						userID = uid;
					} else {
						//if user exist in db get the user from DB and get the role

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
							disabled: false,
							bio: 'null',
						});
					}
				});
				loggedIn = true;
			} else {
				// user logged out
				loggedIn = false;
			}
		});
	
		let permList = 	[...navList];
	
		permList = permList.find(e => location.pathname.split("/")[1].toLowerCase() === e.href.toLowerCase());
		let roleArr = [role ? role : 'guest', role ? 'member' : null, 'everyone'];
		let authorised = permList ? permList.role.some((urole) => roleArr.includes(urole)) : true;
		if(!authorised) navigate("/");
	}, [location, navigate]);

	useEffect(() => {
		if (location.pathname === '/login') setIsLogin(true);
		else setIsLogin(false);
	}, [location.pathname]);

	return (
		<div>
			{!isLogin ? <NavTopBar role={role} navList={navList} /> : null}
			<div className='container_AppMain'>
				{loggedIn ? (
					<div className='container_App'>
						<Routes>
							<Route path='/' element={<MainPage role={role} />} />
							<Route path='*' element={<Error />} />
							<Route path='401' element={<Unauthorised />} />
							<Route path='MainPage' element={<MainPage role={role} />} />
							<Route path='ContactUs' element={<ContactUs uid={isUserID} displayName={userState.displayName} isOle={isOle} />} />
							<Route path='event/:eventID' element={<Event />} />
							<Route path='ArticleCreation' element={<ArticleCreation userID={userID} userOrg={userState.userOrg} />} />
							<Route path='ProfilePage' element={<ProfilePage uid={userID} />} />
							<Route path='AdminPage' element={<AdminPage />} uid={userID} />
							<Route path='ProfilePage/SavedEvents/View/:eventID' element={<SavedEvent userID={userID} userOrg={userState.userOrg} />} />
							<Route path='ProfilePage/SavedEvents' element={<SavedEvents userID={userID} userOrg={userState.userOrg} />} />
							<Route path='ProfilePage/PublishedEvents' element={<PublishedEvents userID={userID} userOrg={userState.userOrg} />} />
							<Route path='/ProfilePage/PublishedEvents/View/:eventID' element={<PublishedEvent userID={userID} userOrg={userState.userOrg} />} />
							<Route path='/profilePage/PublishedEvents/Edit/:eventID' element={<EditPublishedEvent userID={userID} userOrg={userState.userOrg} />} />
							<Route path='ProfilePage/SavedEvents/Edit/:eventID' element={<EditSavedArticle userID={userID} userOrg={userState.userOrg} />} />
							<Route path='Credits' element={<Credits />}/>
						</Routes>
					</div>
				) : (
					<div className='container_App'>
						<Routes>
							<Route path='/' element={<MainPage role={role} />} />
							<Route path='MainPage' element={<MainPage role={role} />} />
							<Route path='404' element={<Error />} />
							<Route path='401' element={<Unauthorised />} />
							<Route path='ContactUs' element={<ContactUs uid={isUserID} displayName={userState.displayName} isOle={isOle} />} />
							<Route path='event/:eventID' element={<Event />} />
							<Route path='login' element={<Login />} />
						</Routes>
					</div>
				)}
			</div>
		</div>
	);
}

function handleLogOut() {
	const auth = getAuth();
	signOut(auth)
		.then(() => {
			// Sign-out successful.
			window.location.reload(false);
			console.log('signed out');
		})
		.catch((error) => {
			// An error happened.
		});
}

export default App;
