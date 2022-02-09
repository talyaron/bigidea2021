import '../../styles/component/NavTopBar.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';

import Menu from '../../assets/Images/NewIcons/hamburger.svg';
import X from '../../assets/Images/NewIcons/hamburger.svg';
import titleDisplay from '../../assets/Images/LogoNew.svg';
import titleSecondDisplay from '../../assets/Images/NewIcons/tel-aviv-yafo.svg';

function NavTopBar({ role }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if (location.pathname === '/login') setIsLogin(true);
		else setIsLogin(false);
	}, [location.pathname]);

	const [navToggle, setNavToggle] = useState(false);
	let navList = [
		{ id: 'MainPage', label: 'Main Page', href: 'MainPage', role: ['member'] },
		{ id: 'ProfilePage', label: 'Profile Page', href: 'ProfilePage', role: ['member'] },
		{ id: 'ContactUs', label: 'Contact Us', href: 'ContactUs', role: ['everyone'] },
		{ id: 'ArticleCreation', label: 'Article Creation', href: 'ArticleCreation', role: ['orgAdmin', 'superAdmin'] },
		{ id: 'AdminPage', label: 'Admin Page', href: 'AdminPage', role: ['superAdmin'] },
		{ id: 'Login', label: 'log in', href: 'login', role: ['guest'] },
		{ id: 'Logout', label: 'log out', href: 'MainPage', function: handleLogOut, role: ['member'] },
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
		<div className='topNavContainer'>
			{!isLogin ? (
				<div className='titleDisplay'>
					<img
						className='NewLogoTopNav'
						onClick={() => {
							navigate('/MainPage');
						}}
						src={titleDisplay}
						alt='NBN TLV Logo'
					/>
					<img
						className='NewLogoTopNav'
						onClick={() => {
							navigate('/MainPage');
						}}
						src={titleSecondDisplay}
						alt='NBN TLV Alt Logo'
					/>
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
										<li className='ListItemElement' key={item.id} id={item.id}>
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
			) : null}
		</div>
	);
}

export default NavTopBar;
