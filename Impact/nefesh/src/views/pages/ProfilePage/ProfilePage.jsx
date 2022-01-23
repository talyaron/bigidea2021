import './ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../../functions/firebase/config';
import { doc, getDoc, onSnapshot, } from 'firebase/firestore';

const userDocRef = doc(db, 'users', '0vtoIVm41lXvBJhSStUSmBqBq873');

function ProfilePage() {
	const [displayName, setDisplayName] = useState('loading');
	const [profilePicImg, setProfilePicImg] = useState('loading');
	const [userEmail, setUserEmail]= useState('loading')
	const [userAddress, setUserAddress]= useState('loading')
	const [userGender, setUserGender]= useState('loading')
	const [userArticles, setUserArticles] = useState('loading');
	const [textSize, setTextSize]= useState('')
	const [editing, setEditing]= useState(false)
	const [choosingPrefs, setChoosingPrefs]= useState(false)

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
			const name= ev.target.elements.newName.value;
			const profilePic= ev.target.elements.newImg.value;
			const email= ev.target.elements.newEmail.value;
			const gender= ev.target.elements.newGender.value;
			const address= ev.target.elements.newAddress.value;
			setDisplayName(name);
			setProfilePicImg(profilePic);
			setUserEmail(email);
			setUserAddress(address)
			setUserGender(gender);

			setEditing(false)
		}

		function changePreferences(ev){
		setChoosingPrefs(true)
		}
		function submitChangePreferences(ev){
		const fontSize= ev.target.value;
		setTextSize(fontSize);


		 
		}
	return (
		<div>
			<div className='containerDetails'>
				<div
					id='profilePic'
					style={{ backgroundImage: 'url(' + profilePicImg + ')' }}
				/>
				<h4>Name: {displayName}<br/>
				Gender: {userGender} <br/>
				Email: {userEmail}<br/>
				Address: {userAddress}<br/>




				</h4>
				<div className='containerEvents'>
					<p>Events list goes here</p>
				</div>
			</div>
			<button type= "button" onClick= {changePreferences} name= "settingbtn">Preferences</button>
			{choosingPrefs?<div className= 'settings'>
   	<form onSubmit={submitChangePreferences}>

	 Change Font Size: <input type="text" name="newFontSize" /><br/>
	 <button type="submit"  name = "prfbtn"> Submit Changes</button>
	 </form>
	</div>:null}
			
			<button type="button" onClick={editProfile} name = "editbtn"> Edit Profile!</button>
	{editing?<div className= 'profileEditor'	>
    		Edit Profile Here: <br/>
   	<form onSubmit={changeProfile}>
	 Enter New Name: <input type="text" name="newName" /><br/>
   	 Enter New Image : <input type="text" name="newImg" /><br/>
   	 Enter New Email: <input type="text" name="newEmail" /><br/>
   	 Enter New Gender: <input type="text" name="newGender" /><br/>
	 Enter New Address: <input type="text" name="newAddress" />
	 <button type="submit"  name = "editbtn"> Submit Changes</button>
	 </form>
	</div>:null}


</div>


	);
}

export default ProfilePage;
