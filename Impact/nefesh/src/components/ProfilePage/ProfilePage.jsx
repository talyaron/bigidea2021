import AdminPage from '../AdminPage/AdminPage';
import React, { useEffect, useState } from 'react';
import { db } from '../../functions/firebase/config';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

var isAdmin = true;
const userDocRef = doc(db, 'users', 'pvfu0JLfWT8omzrVMPqY');
const googleProfilePicRef = doc(db, 'users', 'e2s45clXtKNY3mK8Ykl44qjnkYy2');

function ProfilePage() {
	const [displayName, setDisplayName] = useState('displayName');
	const [userID, setUserID] = useState('ID');
	const [isOpen, setIsOpen] = useState(false);
	const [profilePicImg, setProfilePicImg] = useState('');
	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		const userData = onSnapshot(userDocRef, (userDB) => {
			let displayNameTemp = userDB.data().displayName;
			let userIDTemp = userDB.data().userID;
			setDisplayName(displayNameTemp);
			setUserID(userIDTemp);
		});

		//get user profile pic
		const profilePic = getDoc(googleProfilePicRef, (userDB) => {
			setProfilePicImg(userDB.data().userIcon);
		});
	}, []);

	return (
		<div>
			<div className='containerDetails'>
				<div
					id='profilePic'
					style={{ backgroundImage: `url(${profilePicImg})` }}
				/>
				<h4>{displayName}</h4>
				<div className='containerEvents'>
					<p>Events list goes here</p>
				</div>
			</div>
			{isAdmin ? (
				<input
					type='button'
					value='User Settings'
					onClick={togglePopup}
					className='adminButton'
				/>
			) : null}
			{isOpen && (
				<AdminPage
					content={
						<>
							<b>{displayName}</b>
							<p> UserID: '{userID}'</p>
						</>
					}
					handleClose={togglePopup}
				/>
			)}
		</div>
	);
}

export default ProfilePage;
