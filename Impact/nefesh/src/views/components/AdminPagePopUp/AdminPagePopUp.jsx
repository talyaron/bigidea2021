import React, { useEffect, useState } from 'react';
import './AdminPagePopUp.css';
import { db } from '../../../functions/firebase/config';
import { collection, Firestore } from '@firebase/firestore';
import { doc, getDoc, getDocs, updateDoc, where } from 'firebase/firestore';
import { userIDAdm } from '../../pages/AdminPage/AdminPage';
import { query } from 'firebase/database';
import { getAuth, updateProfile } from "firebase/auth";

let currentID;
const AdminPagePopUp = ({ tempUserIDAdm, content, handleClose, role, isBanned}) => {


	let userIDRef = tempUserIDAdm; // this will change based on the profile page pulled rn
	let usersRef = collection(db, 'users');
	let userDocRef = doc(db, 'users', userIDRef);
	let userDisabledRef = doc(db, 'users', userIDRef, );
	
	const [isAdmin, setIsAdmin] = useState(role === 'orgAdmin'?true:false);
	const [isBanned2, setIsBanned] = useState(isBanned);
	

	useEffect(() => {
		currentID = sessionStorage.getItem("userIDforPopup");
		
	}, []);


	function handleChangeDisplayName(ev) {
		/* make sure to check that username is not taken */
		let username = prompt('Enter your new username.');
		console.log(ev, username);

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
		console.log(currentID); //works when getting just id, need to get string from "role" field in the db

		const q = query(usersRef, where("id", "==", currentID));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
		})

		// setUserRole(currentID);
		console.log(isAdmin); //role shows up as what it was initialized to, doesn't change b/c of lines above ^^^
		if (isAdmin === false) {
			console.log("true", 'org admin');

			console.log(ev, 'handleSetRoleToOrgAdmin');
			/* make sure to check that username is not taken */

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
			console.log("false", 'ole');

			console.log(ev, 'handleSetRoleToOle');
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
		console.log(isBanned2);
		setIsBanned(!isBanned2);
		updateDoc(userDocRef, {
			disabled: !isBanned2
		}).then(async () => {
			// create and show the notification
			const showNotification = () => {
				// create a new notification
				const notification = new Notification('UPDATE', {
					body: 'USER BANNED',
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
						Current Role:
						Ole
						<label className="switch" >
							<input type="checkbox" onClick={handleSetRoleToOle} checked={isAdmin} />
							<span className="slider round" >
							</span>
						</label>

						Organization Admin
					</div>


					{/* <button id='setRoleToOrgAdmin' onClick={handleSetRoleToOrgAdmin}>
						Set Role To Org Admin
					</button> */}
					<button id='suspendUser' onClick={handleSuspendUser}>
						Suspend User *not in MVP
					</button>
					<button id='banUser' className={isBanned2?"danger":''} onClick={handleBanUser}>
						{isBanned2?"User Banned":"Not Banned"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminPagePopUp;
