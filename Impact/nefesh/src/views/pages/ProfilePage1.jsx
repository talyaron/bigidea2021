import '../../stylesheets/page/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

let userDocRef
let userData
function ProfilePage({userID}) {
	userDocRef = doc(db, 'users', userID);
	const [displayName, setDisplayName] = useState('displayName');
	const [profilePicImg, setProfilePicImg] = useState('');
	const [userArticles, setUserArticles] = useState('');

	useEffect(() => {
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		userData = onSnapshot(userDocRef, (userDB) => {
			let displayNameTemp = userDB.data().displayName;
			let googleProfilePic = userDB.data().userIcon;
			setDisplayName(displayNameTemp);
			setProfilePicImg(googleProfilePic);
		});

		
	}, []);

	return (
		<div>
			<div className='containerDetails'>
				<div
					id='profilePic'
					style={{ backgroundImage: 'url(' + profilePicImg + ')' }}
				/>
				<h4>{displayName}</h4>
				<div className='containerEvents'>
					<p>Events list goes here</p>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
