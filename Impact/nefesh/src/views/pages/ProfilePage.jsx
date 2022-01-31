import '../../stylesheets/page/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, onSnapshot, setDoc, updateDoc} from 'firebase/firestore';
import EditProfilePopUp from './EditProfilePopUp';

function ProfilePage(props) {

	const docRef = (doc(db, "users", props.uid));
	
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
	const [isOpen, setIsOpen] = useState(false);
  	
	useEffect(() => {
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		
		getDoc(docRef).then(docSnap => {
		setDisplayName(docSnap.data().displayName);
		setProfilePicImg(docSnap.data().userIcon);
		setUserEmail(docSnap.data().email);
		setUserAddress(docSnap.data().location)
		setUserGender(docSnap.data().sex);
		});
	}, [uid]);
	function editProfile(ev) {
		setIsOpen(!isOpen);
		setEditing(true)
	};

	function changeProfile(ev) {
		ev.preventDefault();
		console.dir(ev.target);
		const profileData = {
			name: 		ev.target.elements.newName.value,
			profilePic: ev.target.elements.newImg.files[0] || ev.target.elements.newImg.value,
			email: 		ev.target.elements.newEmail.value,
			gender: 	ev.target.elements.newGender.value,
			address: 	ev.target.elements.newAddress.value
		}

		if(profileData.name.length !== 0) {
			setDisplayName(profileData.name);
			updateDoc(doc(db, "users", props.uid), {
				displayName: profileData.name,
			})
		}

		if(profileData.profilePic.length !== 0) {
			setProfilePicImg(profileData.profilePic);
			updateDoc(doc(db, "users", props.uid), {
				userIcon: profileData.profilePic
			})
		}

		if(profileData.email.length !== 0) {
			setUserEmail(profileData.email);
			updateDoc(doc(db, "users", props.uid), {
				email: profileData.email
			})
		}

		if(profileData.gender.length !== 0) {
			setUserGender(profileData.gender);
			updateDoc(doc(db, "users", props.uid), {
				sex: profileData.gender	
			})
		}
		
		if(profileData.address.length !== 0) {
			setUserAddress(profileData.address);
			updateDoc(doc(db, "users", props.uid), {
				location: profileData.address
			})
		}

		setEditing(false);

		setIsOpen(!isOpen);
	}

	function changePreferences(ev) {
		setChoosingPrefs(true)
	}
	function submitChangePreferences(ev) {
		ev.preventDefault();
		const fontSize = ev.target[0].value;
		setTextSize(fontSize);



	}
	function debug() {
		console.log(props.uid)
	}
	return (
		
			<div className='containerDetails'>
				<img
					id='profilePic'
					src={profilePicImg}
					alt='User Profile Img'
				/>
				<h4 className = "info" style = {{fontSize: textSize + 'px'}}>
					<h3 id="prof_DisplayName">{displayName}</h3>
					<h4 class="profileLabel">Gender</h4>
					<p id="prof_UserGender" class="detailValue">{userGender}</p>
					<h4 class="profileLabel">Email</h4>
					<p id="prof_UserEmail" class="detailValue">{userEmail}</p>
					<h4 class="profileLabel">Address</h4>
					<p id="prof_UserAddress" class="detailValue">{userAddress}</p>
					<div>
					{ textSize.length !== 0 ?
					(<h4 class="profileLabel">Font Size
					<p id="prof_TextSize" class="detailValue">{textSize}</p></h4>
					) : null }
					</div>
				</h4>
				<div className='containerEvents'>
					<p>Events list goes here</p>
				</div>
			
			<button className='profileButton' type="button" id = "prefButton" onClick={changePreferences} name="settingbtn">Preferences</button>
			{choosingPrefs ? <div className='settings'>
				<form onSubmit={submitChangePreferences}>

					Change Font Size: <input type="text" name="newFontSize" /><br />
					<button className='profileButton' type="submit" id = "submitChanges" name="prfbtn"> Submit Changes</button>
				</form>
			</div> : null}

			<button className='profileButton' type="button" onClick={editProfile} name="editbtn"> Edit Profile!</button>
			{isOpen && <EditProfilePopUp
      content={<>
        {editing ? <div className='profileEditor'	>
				<h4>Edit Profile Here:</h4>
				<form onSubmit={changeProfile}>
					Enter New Name: <input type="text" name="newName" />
					Enter New Image : <input type="file" accept="image/*" id="newImg" name="myfile"/>
					Enter New Email: <input type="text" name="newEmail" />
					Enter New Gender: <input type="text" name="newGender" />
					Enter New Address: <input type="text" name="newAddress" />
					<button className='profileButton center3' type="submit" name="editbtn"> Submit Changes</button>

				</form>


			</div> : null}
      </>}
      handleClose={editProfile}
    />}
		</div>
	);
}

export default ProfilePage;