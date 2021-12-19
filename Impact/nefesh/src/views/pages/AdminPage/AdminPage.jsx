import './AdminPage.css';
import AdminPagePopUp from '../../components/AdminPagePopUp/AdminPagePopUp';
import React, { useEffect, useState } from 'react';
import { db } from '../../../functions/firebase/config';
import { onSnapshot, collection, query } from 'firebase/firestore';

var isAdmin = true;

function AdminPage() {
	const [displayName, setDisplayName] = useState('displayName');
	const [userID, setUserID] = useState('ID');
	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	const namesRef = collection(db, 'users');
	const [Names, setNames] = useState([]);
	let q = query(namesRef);

	useEffect(() => {
		const namesQuery = onSnapshot(q, (snapshot) => {
			let list = [];
			snapshot.forEach((namesDB) => {
				const namesTemp = namesDB.data();
				list.push(namesTemp);
			});
			console.log(list);
			setNames(list);
		});
	}, []);

	return (
		<div>
			{isAdmin ? (
				<div className='eventMapContainer'>
					{Names.map((names) => {
						return (
							<div key={names.userID} className='nametag'>
								<button
									value='User Settings'
									onClick={togglePopup}
									className='adminButton'
									name='userSelect'>
									<h4>{names.displayName}</h4>
                                    <h5>{names.email}</h5>
									<h5>{names.userID}</h5>
								</button>
							</div>
						);
					})}
				</div>
			) : null}
			{isOpen && (
				<AdminPagePopUp
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

export default AdminPage;
