import AdminPage from '../AdminPage/AdminPage';
import React, { useEffect, useState } from 'react';
import { db } from '../../functions/firebase/config';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

var isAdmin = true;
const userDocRef = doc(db, 'users', 'pvfu0JLfWT8omzrVMPqY');

function ProfilePage() {
	const [displayName, setDisplayName] = useState('displayName');
	const [userID, setUserID] = useState('ID');
	const [isOpen, setIsOpen] = useState(false);
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
            setUserID(userIDTemp)
		});
		//get doc user ID
        
	}, []);

	return (
		<div>
			<h4>{displayName}</h4>
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
