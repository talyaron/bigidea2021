import './ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../../functions/firebase/config';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';

const userDocRef = doc(db, 'users', '0vtoIVm41lXvBJhSStUSmBqBq873');

function ProfilePage(props) {
	const [displayName, setDisplayName] = useState('loading');
	const [profilePicImg, setProfilePicImg] = useState('loading');
	const [userEmail, setUserEmail] = useState('loading')
	const [userAddress, setUserAddress] = useState('loading')
	const [userGender, setUserGender] = useState('loading')
	const [userArticles, setUserArticles] = useState('loading');
	const [textSize, setTextSize] = useState('')
	const [editing, setEditing] = useState(false)
	const [choosingPrefs, setChoosingPrefs] = useState(false)

	useEffect(() => {
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		const userData = onSnapshot(userDocRef, (userDB) => {
			let displayNameTemp = userDB.data().displayName;
			let googleProfilePic = userDB.data().userIcon;
			let email1 = userDB.data().email;
			let address1 = userDB.data().location;
			let gender1 = userDB.data().sex;
			setDisplayName(displayNameTemp);
			setProfilePicImg(googleProfilePic);
			setUserEmail(email1);
			setUserAddress(address1)
			setUserGender(gender1);

		});


	}, []);
	function editProfile(ev) {

		setEditing(true)
	};

	function changeProfile(ev) {
		console.dir(ev.target)
		const name = ev.target.elements.newName.value;
		const profilePic = ev.target.elements.newImg.value;
		const email = ev.target.elements.newEmail.value;
		const gender = ev.target.elements.newGender.value;
		const address = ev.target.elements.newAddress.value;
		setDisplayName(name);
		setProfilePicImg(profilePic);
		setUserEmail(email);
		setUserAddress(address)
		setUserGender(gender);

		setEditing(false)
		setDoc(doc(db, "users", props.uid), {
			displayName: name,
			userIcon: profilePic,
			email: email,
			sex: gender,
			location: address,

		})
	}

	function changePreferences(ev) {
		setChoosingPrefs(true)
	}
	function submitChangePreferences(ev) {
		const fontSize = ev.target.value;
		setTextSize(fontSize);



	}
	function debug() {
		console.log(props.uid)
	}
	return (
		

		<div>
			<div class="loader"></div>
			<div className='containerDetails'>
				<div id='profilePicCont'>
					<div
						id='profilePic'
						style={{ backgroundImage: 'url(' + profilePicImg + ')' }}
					/>
				</div>
				<h4>Name: {displayName}<br />
					Gender: {userGender} <br />
					Email: {userEmail}<br />
					Address: {userAddress}<br />
				</h4>
				<div className='containerEvents'>
					<p>My events:</p>
				</div>
			</div>
			<button type="button" class="mnButton" onClick={changePreferences} name="settingbtn">Preferences</button>
			{choosingPrefs ? <div className='settings'>
				<form onSubmit={submitChangePreferences}>

					Change Font Size: <input type="text" name="newFontSize" class="textBox" /><br />
					<button type="submit" class="submitButton" name="prfbtn"> Submit Changes</button>
				</form>
			</div> : null}

			<button type="button" class= "mnButton" onClick={editProfile} name="editbtn"> Edit Profile!</button>
			{editing ? <div className='profileEditor'	>
				
				<form onSubmit={changeProfile}>
					Enter New Name: <input type="text" name="newName" class="textBox" /><br />
					Enter New Image : <input type="text" name="newImg" class="textBox" /><br />
					Enter New Email: <input type="text" name="newEmail" class="textBox" /><br />
					Enter New Gender: <input type="text" name="newGender" class="textBox" /><br />
					Enter New Address: <input type="text" name="newAddress" class="textBox" /><br />
					<button type="submit" class="submitButton" name="editbtn"> Submit Changes</button>

				</form>


			</div> : null}


		</div>


	);
}

export default ProfilePage;
