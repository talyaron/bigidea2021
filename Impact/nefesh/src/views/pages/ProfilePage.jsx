import '../../stylesheets/page/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, onSnapshot, setDoc, updateDoc} from 'firebase/firestore';
import EditProfilePopUp from './EditProfilePopUp';

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
	const [isOpen, setIsOpen] = useState(false);
  	
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
		setIsOpen(!isOpen);
		setEditing(true)
	};

	function changeProfile(ev) {
		ev.preventDefault();
		console.dir(ev.target);

		const name = ev.target.elements.newName.value;
		const profilePic = ev.target.elements.newImg.value;
		const email = ev.target.elements.newEmail.value;
		const gender = ev.target.elements.newGender.value;
		const address = ev.target.elements.newAddress.value;

		if(ev.target.elements.newName.value.length == 0) {
			//nothing
		} else {
			setDisplayName(name);
			updateDoc(doc(db, "users", props.uid), {
				displayName: name,
			})
		}

		if(ev.target.elements.newImg.value.length == 0) {
			//nothing
		} else {
			setProfilePicImg(profilePic);
			updateDoc(doc(db, "users", props.uid), {
				userIcon: profilePic
			})
		}

		if(ev.target.elements.newEmail.value.length == 0) {
			//nothing
		} else {
			setUserEmail(email);
			updateDoc(doc(db, "users", props.uid), {
				email: email
			})
		}

		if(ev.target.elements.newGender.value.length == 0) {
			//nothing
		} else {
			setUserGender(gender);
			updateDoc(doc(db, "users", props.uid), {
				sex: gender	
			})
			
		}
		
		if(ev.target.elements.newAddress.value.length == 0) {
			//nothing
		} else {
			setUserAddress(address);
			updateDoc(doc(db, "users", props.uid), {
				location: address
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
		<div>
			<div className='containerDetails'>
				<div
					id='profilePic'
					style={{ backgroundImage: 'url(' + profilePicImg + ')' }}
				/>
				<h4 className = "info" style = {{fontSize: textSize + 'px'}}>
					Name: {displayName}<br />
					Gender: {userGender} <br />
					Email: {userEmail}<br />
					Address: {userAddress}<br />
					Font Size: {textSize}




				</h4>
				<div className='containerEvents'>
					<p>Events list goes here</p>
				</div>
			</div>
			<button type="button" id = "prefButton" onClick={changePreferences} name="settingbtn">Preferences</button>
			{choosingPrefs ? <div className='settings'>
				<form onSubmit={submitChangePreferences}>

					Change Font Size: <input type="text" name="newFontSize" /><br />
					<button type="submit" id = "submitChanges" name="prfbtn"> Submit Changes</button>
				</form>
			</div> : null}

			<button type="button" onClick={editProfile} name="editbtn"> Edit Profile!</button>
			{isOpen && <EditProfilePopUp
      content={<>
        {editing ? <div className='profileEditor'	>
				Edit Profile Here: <br />
				<form onSubmit={changeProfile}>
					Enter New Name: <input type="text" name="newName" /><br />
					Enter New Image : <input type="file" accept="image/*" id="newImg" name="myfile"/>
					Enter New Email: <input type="text" name="newEmail" /><br />
					Enter New Gender: <input type="text" name="newGender" /><br />
					Enter New Address: <input type="text" name="newAddress" />
					<button type="submit" name="editbtn"> Submit Changes</button>

				</form>


			</div> : null}
      </>}
      handleClose={editProfile}
    />}
			

		</div>


	);
}

export default ProfilePage;