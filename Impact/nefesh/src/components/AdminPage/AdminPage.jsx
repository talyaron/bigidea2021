import React, { useEffect } from 'react';
import './AdminPage.css';
import { db } from '../../functions/firebase/config';
import {
	doc,
	collection,
	query,
	where,
	getDoc,
	onSnapshot,
	updateDoc,
} from 'firebase/firestore';
import { async } from '@firebase/util';

const AdminPage = (props) => {
	const userIDRef = 'pvfu0JLfWT8omzrVMPqY'; // this will change based on the profile page pulled rn
	const userDocRef = doc(db, 'users', 'pvfu0JLfWT8omzrVMPqY');

	useEffect(() => {
		console.log(getDoc(userDocRef), 'hi');
	}, []);

	function handleChangeDisplayName(ev) {
		/* make sure to check that username is not taken */
		let username = prompt('Enter your new username.');
		console.log(ev, username);
		updateDoc(userDocRef,{
				displayName: username
			})
		.then(async () => {
			// create and show the notification
			const showNotification = () => {
				// create a new notification
				const notification = new Notification('UPDATE', {
					body: 'CHANGES SAVED',
				});
				// close the notification after 10 seconds
				setTimeout(() => {
					notification.close();
				}, 10 * 1000);
			};
			// show an error message
			const showError = () => {
				const error = document.querySelector('.error');
				error.style.display = 'block';
				error.textContent = 'You blocked the notifications';
			};
			// check notification permission
			let granted = false;
			if (Notification.permission === 'granted') {
				granted = true;
			} else if (Notification.permission !== 'denied') {
				let permission = await Notification.requestPermission();
				granted = permission === 'granted' ? true : false;
			}
			// show notification or error
			granted ? showNotification() : showError();
		});
	}
	function handleSetRoleToOle(ev) {
		console.log(ev, 'handleSetRoleToOle');
	}
	function handleSetRoleToOrgAdmin(ev) {
		console.log(ev, 'handleSetRoleToOrgAdmin');
	}
	function handleSuspendUser(ev) {
		console.log(ev, 'handleSuspendUser');
	}
	function handleBanUser(ev) {
		console.log(ev, 'handleBanUser');
	}

	return (
		<div className='popup-box'>
			<div className='box'>
				<span className='close-icon' onClick={props.handleClose}>
					x
				</span>
				{props.content}
				<div className='buttonContainer'>
					<button id='changeDisplayName' onClick={handleChangeDisplayName}>
						Change Display Name
					</button>
					<button id='setRoleToOle' onClick={handleSetRoleToOle}>
						Set Role To Ole
					</button>
					<button id='setRoleToOrgAdmin' onClick={handleSetRoleToOrgAdmin}>
						Set Role To Org Admin
					</button>
					<button id='suspendUser' onClick={handleSuspendUser}>
						Suspend User
					</button>
					<button id='banUser' onClick={handleBanUser}>
						Ban User
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
