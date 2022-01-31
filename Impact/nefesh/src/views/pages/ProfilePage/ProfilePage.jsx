import './ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../../functions/firebase/config';
import { doc, getDoc, onSnapshot, setDoc, updateDoc} from 'firebase/firestore';
import EditProfilePopUp from './EditProfilePopUp';
import ImportImgs from '../../components/ImportImgs/ImportImgs'
import EditBioPopUp from './EditBioPopUp';
let page = 'ProfilePage';


function ProfilePage(props) {
	const [userData, setUserData] = useState()
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
	const [httpUrl, setHttpUrl] = useState('');
	const [isBioOpen, setIsBioOpen] = useState(false);
	const [userBio, setUserBio] = useState('loading');
  	
	
	useEffect(async () => {
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		const docRef = (doc(db, "users", props.uid));
		const docSnap = await getDoc(docRef);
		setUserData(docSnap.data())
		setDisplayName(docSnap.data().displayName);
		setProfilePicImg(docSnap.data().userIcon);
		setUserEmail(docSnap.data().email);
		setUserAddress(docSnap.data().location)
		setUserGender(docSnap.data().sex);
		setUserBio(docSnap.data().bio);
		console.log(props, docSnap.data())
		

	}, [uid]);
	function editProfile(ev) {
		setIsOpen(!isOpen);
		setEditing(true);
	};

	function changeProfile(ev) {
		ev.preventDefault();
		console.dir(ev.target);

		const name = ev.target.elements.newName.value;
		const profilePic = httpUrl
		const email = ev.target.elements.newEmail.value;

		if(ev.target.elements.newName.value.length == 0) {
			//nothing
		} else {
			setDisplayName(name);
			updateDoc(doc(db, "users", props.uid), {
				displayName: name,
			})
		}

		if(profilePic.length == 0) {
			//nothing
		} else {
			ev.preventDefault()
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


	function changeBio(ev) {
		ev.preventDefault();
		console.dir(ev.target);

		const bio = ev.target.elements.newBio.value;

		if(ev.target.elements.newBio.value.length == 0) {
			//nothing
		} else {
			setUserBio(bio);
			console.log(bio)
			updateDoc(doc(db, "users", props.uid), {
				bio: bio,
			})
		}

		setEditing(false);

		setIsBioOpen(!isBioOpen);
	}

	function changePreferences(ev) {
		setChoosingPrefs(true)
	}
	function submitChangePreferences(ev) {
		ev.preventDefault();
		const fontSize = ev.target[0].value;
		setTextSize(fontSize);
	}
	const callBackFunction = (httpRef) => {
		setHttpUrl(httpRef);
	};
	function debug() {
		console.log(props.uid)
	}
	function editBio(){
		setIsBioOpen(!isBioOpen);
		setEditing(true);
	}
	return (
		<div>
			<div className='back-1'>
				<button className ="EditProfBtn" type="button" onClick={editProfile} name="editbtn"> Edit Profile</button>
				<div id='profilePic' style={{ backgroundImage: 'url(' + profilePicImg + ')' }} />
				<h2> {displayName} </h2> 
				<p> {userEmail} </p>
			</div>
			{/* <div className='back-2'>
				<button className ="EditProfBtn" type="button" name="PrefButton"> Edit Prefrences </button>
				<h2 className='center'> Prefrences </h2> 
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
				 
			</div> */}
			<div className='back-3'>
				<button className ="EditProfBtn" type="button" onClick = {editBio} name="BioButton"> Edit Bio </button>
				<h2 className='center'> Bio </h2> 
				<p>{userBio}</p>
				
			</div>
			<footer  className='back-2 foot'>

			</footer>

			
			{isOpen && <EditProfilePopUp
      content={<>
        {editing ? <div className='profileEditor'	>
				<h4 className='center2'> Edit Profile Here </h4>
				<form onSubmit={changeProfile}>
					Enter New Name: <input type="text" name="newName" /><br />
					Enter New Image : <ImportImgs userData={userData} pageName={page} parentCallBack={callBackFunction} />
					Enter New Email: <input type="text" name="newEmail" /><br />
					<button type="submit" className='center3' name="editbtn"> Submit Changes</button>

				</form>


			</div> : null}
      </>}
      handleClose={editProfile}
    />}
	{isBioOpen && <EditBioPopUp
      content={<>
        {editing ? <div className='profileEditorBio'	>
				<h4 className='center2'> Edit Bio Here </h4>
				<form onSubmit={changeBio}>
					Enter New Bio: <input type="text" name="newBio"/>
					<button type="submit" className='center3' name="editbtn"> Submit Changes</button>

				</form>


			</div> : null}
      </>}
      handleClose={editBio}
    />}
			

		</div>


	);
}

export default ProfilePage;
