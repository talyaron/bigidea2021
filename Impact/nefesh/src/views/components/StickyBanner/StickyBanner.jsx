import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StickyBanner.css';
import { Component } from 'react';
import { getAuth, signOut } from "firebase/auth";

//icons
import HomeButton from '../Images/home.svg';
import Menu from '../Images/Menu.svg';
import X from '../Images/X.svg';

function StickyBanner({isAdmin, isOle}) {
	const navigate = useNavigate();
	const [navToggle, setNavToggle] = useState(false);


	function handleMenu() {
		let temp = !navToggle;
		setNavToggle(temp);
		console.log(navToggle, 'nav toggle');
	}
	function handleLogOut(){
		const auth = getAuth();
		signOut(auth).then(() => {
		// Sign-out successful.
		handleRoute();
		window.location.reload(false);
		console.log("signed out");
		}).catch((error) => {
		// An error happened.
		});
	}
	function handleRoute() {
		navigate("/");
	  }
	
	return (
		<div id='stickyBanner'>
			<div
				className='homeB_container'
				onClick={() => {
					navigate('/MainPage');
				}}>
				<img src={HomeButton} alt='Home' id='homeButton' />
			</div>

			{/* {isOle? : isAdmin? : } */}

			<div className='Menu_container'>
				{navToggle ? (
					<div>
						<img src={X} alt='X' id='MenuButton' onClick={handleMenu} />
						<div className='menuList_Container'>
						{isOle? <ul className='menuList'>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ProfilePage')
											handleMenu()
										}}>
										Profile Page
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ContactUs')
											handleMenu()
										}}>
										Contact Us
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
										handleLogOut()
										}}>
										Log Out
									</div>
								</li>
								</ul> : isAdmin? <ul className='menuList'>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ProfilePage')
											handleMenu()
										}}>
										Profile Page
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ContactUs')
											handleMenu()
										}}>
										Contact Us
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ArticleCreation')
											handleMenu()
										}}>
										Article Creation
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/AdminPage')
											handleMenu()
										}}>
										Admin Page
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
										handleLogOut()
										}}>
										Log Out
									</div>
								</li>
							</ul>: <ul className='menuList'>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ProfilePage')
											handleMenu()
										}}>
										Profile Page
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ContactUs')
											handleMenu()
										}}>
										Contact Us
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ArticleCreation')
											handleMenu()
										}}>
										Article Creation
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
										handleLogOut()
										}}>
										Log Out
									</div>
								</li>
								</ul>}
						</div>
					</div>
				) : (
					<img src={Menu} alt='Home' id='MenuButton' onClick={handleMenu} />
				)}
			</div>
		</div>
	);
}

export default StickyBanner;