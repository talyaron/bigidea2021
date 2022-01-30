import { useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../stylesheets/StickyBanner.css';

import { getAuth, signOut } from "firebase/auth";
import { collection, setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../scripts/firebase/config";

//icons
import HomeButton from '../../assets/Images/home.svg';
import Menu from '../../assets/Images/Menu.svg';
import X from '../../assets/Images/X.svg';

//const auth = getAuth();
//const docRef = (doc(db, "users", auth.currentUser.uid));

function StickyBanner({role}) {
	const navigate = useNavigate();
	const [navToggle, setNavToggle] = useState(false);
	let navList = [
		{ id: 1, label: 'Profile Page', href: 'ProfilePage', role: ['member'] },
		{ id: 2, label: 'Contact Us', href: 'ContactUs', role: ['everyone'] },
		{ id: 3, label: 'Request Org', href: ' ', role: ['everyone'] },
		{ id: 4, label: 'Article Creation', href: 'ArticleCreation', role: ['ole', 'admin'] },
		{ id: 5, label: 'Admin Page', href: 'AdminPage', role: ['ole', 'admin'] },
		{ id: 6, label: 'log in', href: 'login', role: ['guest'] },
		{ id: 7, label: 'log out', href: ' ', function: handleLogOut, role: ['member'] },
	]

		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		
	console.log(role)
		//getDoc(docRef).then(data => {
			navList = navList.filter(navItem => navItem.role.some(urole => [role ? role : "guest", role ? "member" : null, "everyone"].includes(urole)));
			console.log(navList);
		//});
	
		
	function handleMenu() {
		let temp = !navToggle;
		setNavToggle(temp);
		console.log(navToggle, 'nav toggle');
	}

	function handleLogOut() {
		const auth = getAuth();
		signOut(auth).then(() => {
			// Sign-out successful.
			window.location.reload(false);
			navigate('/login')
			console.log("signed out");
		}).catch((error) => {
			// An error happened.
		});
	}

	return (
		<div id='menuButtonGroup'>
			<div className='stickyBanner'
				onClick={() => {
					navigate('/MainPage');
				}}>
				<div
					className='MenuButton'
					id='homeB_container'
				>
					<img src={HomeButton} alt='Home' id='homeButton' />
				</div>
			</div>
			<div className='stickyBanner' onClick={handleMenu}>
				<div className='MenuButton'
					id='Menu_container'>
					{navToggle ?
						(<img src={X} alt='X' id='MenuButton' />)
						:
						(<img src={Menu} alt='Home' id='MenuButton' />)
					}
					{navToggle ? (
						<div className='menuList_Container'>
							<ul className='menuList'>
								{
									navList.map(function (item) {
										return <li className='ListItemElement'>
											<div
												className='menuItem'
												onClick={() => {
													if(item.function) item.function();
													if(item.href) navigate('/' + item.href);
												}}>
												{item.label}
											</div>
										</li>
									})
								}
							</ul>
						</div>

					) : null}
				</div>
			</div>
		</div>
	);
}

export default StickyBanner;
