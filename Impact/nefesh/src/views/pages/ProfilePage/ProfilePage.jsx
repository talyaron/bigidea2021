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
	const {uid} = props;
	useEffect(async () => {
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		const docRef = (doc(db, "users", props.uid));
		const docSnap = await getDoc(docRef);
		setDisplayName(docSnap.data().displayName);
		setProfilePicImg(docSnap.data().userIcon);
		setUserEmail(docSnap.data().email);
		setUserAddress(docSnap.data().location)
		setUserGender(docSnap.data().sex);

	}, [uid]);
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
			<div className='containerDetails'>
				<div
					id='profilePic'
					style={{ backgroundImage: 'url(' + profilePicImg + ')' }}
				/>
				<h4>Name: {displayName}<br />
					Gender: {userGender} <br />
					Email: {userEmail}<br />
					Address: {userAddress}<br />




				</h4>
				<div className='containerEvents'>
					<p>Events list goes here</p>
				</div>
			</div>
			<button type="button" onClick={changePreferences} name="settingbtn">Preferences</button>
			{choosingPrefs ? <div className='settings'>
				<form onSubmit={submitChangePreferences}>

					Change Font Size: <input type="text" name="newFontSize" /><br />
					<button type="submit" name="prfbtn"> Submit Changes</button>
				</form>
			</div> : null}

			<button type="button" onClick={editProfile} name="editbtn"> Edit Profile!</button>
			{editing ? <div className='profileEditor'	>
				Edit Profile Here: <br />
				<form onSubmit={changeProfile}>
					Enter New Name: <input type="text" name="newName" /><br />
					Enter New Image : <input type="text" name="newImg" /><br />
					Enter New Email: <input type="text" name="newEmail" /><br />
					Enter New Gender: <input type="text" name="newGender" /><br />
					Enter New Address: <input type="text" name="newAddress" />
					<button type="submit" name="editbtn"> Submit Changes</button>

				</form>


			</div> : null}


		</div>


	);
}

export default ProfilePage;
