import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../stylesheets/StickyBanner.css';

//icons
import HomeButton from '../../assets/Images/home.svg';
import Menu from '../../assets/Images/Menu.svg';
import X from '../../assets/Images/X.svg';

function StickyBanner() {
	const navigate = useNavigate();
	const [navToggle, setNavToggle] = useState(false);

	function handleMenu() {
		let temp = !navToggle;
		setNavToggle(temp);
		console.log(navToggle, 'nav toggle');
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
			<div className='Menu_container'>
				{navToggle ? (
					<div>
						<img src={X} alt='X' id='MenuButton' onClick={handleMenu} />
						<div className='menuList_Container'>
							<ul className='menuList'>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ProfilePage');
										}}>
										ProfilePag
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ContactUs');
										}}>
										contactUs
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/');
										}}
										name='add a reqest to be org page'>
										RequestOrg
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/ArticleCreation');
										}}>
										ArticleCreation
									</div>
								</li>
								<li className='ListItemElement'>
									<div
										className='menuItem'
										onClick={() => {
											navigate('/AdminPage');
										}}>
										AdminPage
									</div>
								</li>
							</ul>
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
