import React, { useEffect, useState } from 'react';

import { db } from '../../scripts/firebase/config';
import { collection } from '@firebase/firestore';
import { doc, getDocs, updateDoc, where } from 'firebase/firestore';
import { query } from 'firebase/database';

let currentID;
const AdminPagePopUp = ({ tempUserIDAdm, content, handleClose, role, isBanned }) => {
	import('../../styles/template/AdminPagePopUp.css');

	let userIDRef = tempUserIDAdm; // this will change based on the profile page pulled rn
	let usersRef = collection(db, 'users');
	let userDocRef = doc(db, 'users', userIDRef);
	

	const [isAdmin, setIsAdmin] = useState(role === 'orgAdmin' ? true : false);
	const [isBanned2, setIsBanned] = useState(isBanned);

	useEffect(() => {
		currentID = sessionStorage.getItem('userIDforPopup');
	}, []);

	function handleChangeDisplayName(ev) {
		/* make sure to check that username is not taken */
		let username = prompt('Enter your new username.');

		if (username === null) {
			return;
		} else {
			updateDoc(userDocRef, {
				displayName: username,
			}).then(async () => {
				// create and show the notification
				const showNotification = () => {
					// create a new notification
					const notification = new Notification('UPDATE', {
						body: `NAME SUCCESSFULLY UPDATED TO ${username}`,
					});
					// close the notification after 10 seconds
					setTimeout(() => {
						notification.close();
					}, 10 * 1000);
				};
				// show an error message
				const showError = () => {
					// const error = document.querySelector('.error');
					// error.style.display = 'block';
					// error.textContent = 'You blocked the notifications';
					alert('Notifications disabled');
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
	}

	async function handleSetRoleToOle(ev) {
		setIsAdmin(!isAdmin);

		const q = query(usersRef, where('id', '==', currentID));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
		});

		
		if (isAdmin === false) {
		
			updateDoc(userDocRef, {
				role: 'orgAdmin',
			}).then(async () => {
				// create and show the notification
				const showNotification = () => {
					// create a new notification
					const notification = new Notification('UPDATE', {
						body: 'ROLE UPDATED TO org admin',
					});
					// close the notification after 10 seconds
					setTimeout(() => {
						notification.close();
					}, 10 * 1000);
				};
				// show an error message
				const showError = () => {
					// const error = document.querySelector('.error');
					// error.style.display = 'block';
					// error.textContent = 'You blocked the notifications';
					alert('Notifications disabled');
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
		} else {
			
			/* make sure to check that username is not taken */
			updateDoc(userDocRef, {
				role: 'ole',
			}).then(async () => {
				// create and show the notification
				const showNotification = () => {
					// create a new notification
					const notification = new Notification('UPDATE', {
						body: 'ROLE UPDATED TO OLE',
					});
					// close the notification after 10 seconds
					setTimeout(() => {
						notification.close();
					}, 10 * 1000);
				};
				// show an error message
				const showError = () => {
					// const error = document.querySelector('.error');
					// error.style.display = 'block';
					// error.textContent = 'You blocked the notifications';
					alert('Notifications disabled');
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
	}

	function handleSuspendUser(ev) {
		console.log(ev, 'handleSuspendUser');
	}
	function handleBanUser(ev) {
		setIsBanned(!isBanned2);
		updateDoc(userDocRef, {
			disabled: !isBanned2,
		}).then(async () => {
			// create and show the notification
			const showNotification = () => {
				// create a new notification
				const notification = new Notification('UPDATE', {
					body: isBanned2 ? 'USER BAN REMOVED' : 'USER BANNED',
				});
				// close the notification after 10 seconds
				setTimeout(() => {
					notification.close();
				}, 10 * 1000);
			};
			// show an error message
			const showError = () => {
				// const error = document.querySelector('.error');
				// error.style.display = 'block';
				// error.textContent = 'You blocked the notifications';
				alert('Notifications disabled');
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

	return (
		<div className='popupAdmin-box'>
			<div className='adminBox'>
				<span className='closeAdmin-icon' onClick={handleClose}>
					x
				</span>
				{content}
				<div className='adminButtonContainer'>
					<button id='changeDisplayName' onClick={handleChangeDisplayName}>
						Change Display Name
					</button>

					<div id='setRoleToOle'>
						Current Role: Ole
						<label className='switch'>
							<input type='checkbox' onClick={handleSetRoleToOle} checked={isAdmin} />
							<span className='slider round'></span>
						</label>
						Organization Admin
					</div>

					
					<button id='suspendUser' onClick={handleSuspendUser}>
						Suspend User *not in MVP
					</button>
					<button id='banUser' className={isBanned2 ? 'danger' : ''} onClick={handleBanUser}>
						{isBanned2 ? 'User Banned' : 'Not Banned'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminPagePopUp;
