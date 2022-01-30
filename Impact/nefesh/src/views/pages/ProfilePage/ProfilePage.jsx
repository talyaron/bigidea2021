import './ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../../functions/firebase/config';
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
		const profilePic = ev.target.elements.newImg.files[0];
		const email = ev.target.elements.newEmail.value;

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
			console.log(profilePic)
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
			<div className='back-1'>
				<button className ="EditProfBtn" type="button" onClick={editProfile} name="editbtn"> Edit Profile</button>
				<div id='profilePic' style={{ backgroundImage: 'url(' + profilePicImg + ')' }} />
				<h2> {displayName} </h2> 
				<p> {userEmail} </p>
			</div>
			<div className='back-2'>
				<button className ="EditProfBtn" type="button" name="PrefButton"> Edit Prefrences </button>
				<h2 className='center'> Prefrences </h2> 
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
				 
			</div>
			<div className='back-3'>
				<button className ="EditProfBtn" type="button" name="BioButton"> Edit Bio </button>
				<h2 className='center'> Biography </h2> 
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
				
			</div>
			<footer  className='back-2 foot'>

			</footer>
			
			
			
			
			{/*
			<div className='containerDetails'>
				
				<h4 className = "info" style = {{fontSize: textSize + 'px'}}>
					Name: <br />
					Gender: {userGender} <br />
					Email: <br />
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
			</div> : null} */}

			
			{isOpen && <EditProfilePopUp
      content={<>
        {editing ? <div className='profileEditor'	>
				<h4 className='center2'> Edit Profile Here </h4>
				<form onSubmit={changeProfile}>
					Enter New Name: <input type="text" name="newName" /><br />
					Enter New Image : <input type="file" accept="image/*" id="newImg" name="myfile"/> <br />
					Enter New Email: <input type="text" name="newEmail" /><br />
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
