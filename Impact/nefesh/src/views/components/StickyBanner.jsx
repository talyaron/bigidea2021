import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/component/StickyBanner.css';
import { getAuth, signOut } from 'firebase/auth';

//icons
import HomeButton from '../../assets/Images/NewIcons/home.svg';
import Menu from '../../assets/Images/NewIcons/hamburger.svg';
import X from '../../assets/Images/NewIcons/hamburger.svg';
import back from '../../assets/Images/NewIcons/back.svg';

function StickyBanner({ role }) {
	const navigate = useNavigate();
	const [navToggle, setNavToggle] = useState(false);
	let navList = [
		{ id: 1, label: 'Profile Page', href: 'ProfilePage', role: ['member'] },
		{ id: 2, label: 'Contact Us', href: 'ContactUs', role: ['everyone'] },
		{ id: 4, label: 'Article Creation', href: 'ArticleCreation', role: ['orgAdmin', 'superAdmin'] },
		{ id: 5, label: 'Admin Page', href: 'AdminPage', role: ['superAdmin'] },
		{ id: 6, label: 'log in', href: 'login', role: ['guest'] },
		{ id: 7, label: 'log out', href: 'MainPage', function: handleLogOut, role: ['member'] },
		{ id: 8, label: 'Main Page', href: 'MainPage', role: ['member'] },
	];

	navList = navList.filter((navItem) => navItem.role.some((urole) => [role ? role : 'guest', role ? 'member' : null, 'everyone'].includes(urole)));

	function handleMenu() {
		let temp = !navToggle;
		setNavToggle(temp);
	}
	function handleLogOut() {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				window.location.reload(false);
			})
			.catch((error) => {
				// An error happened.
			});
	}

	return (
		<div id='menuButtonGroup'>
			<div
				className='stickyBanner'
				onClick={() => {
					navigate(-1);
				}}>
				<div className='MenuButton' id='backB_container'>
					<img src={back} alt='back' id='backButton_SB' />
				</div>
			</div>
			<div
				className='stickyBanner'
				onClick={() => {
					navigate('/MainPage');
				}}>
				<div className='MenuButton' id='homeB_container'>
					<img src={HomeButton} alt='Home' id='homeButton' />
				</div>
			</div>

			<div className='stickyBanner' onClick={handleMenu}>
				<div className='MenuButton' id='Menu_container'>
					{navToggle ? <img src={X} alt='X' id='MenuButton' /> : <img src={Menu} alt='Home' id='MenuButton' />}
				</div>
			</div>

			{navToggle ? (
				<div className='menuList_Container'>
					<ul className='menuList'>
						{navList.map(function (item) {
							return (
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											handleMenu(); //this keeps hetting removed but it is needed to close the menu after selecting
											if (item.function) item.function();
											if (item.href) navigate('/' + item.href);
										}}>
										{item.label}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			) : null}
		</div>
	);
}

export default StickyBanner;
