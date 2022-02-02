import '../../styles/page/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, updateDoc} from 'firebase/firestore';
import EditProfilePopUp from '../template/EditProfilePopUp';
import ImportImgs from '../template/ImportImgs'
import EditBioPopUp from '../template/EditBioPopUp';
let page = 'ProfilePage';


function ProfilePage(props) {
	const [userData, setUserData] = useState()
	const [displayName, setDisplayName] = useState('loading');
	const [profilePicImg, setProfilePicImg] = useState('loading');
	const [userEmail, setUserEmail] = useState('loading')
	const [userAddress, setUserAddress] = useState('loading')
	const [userGender, setUserGender] = useState('loading')
	//const [userArticles, setUserArticles] = useState('loading');
	const [textSize, setTextSize] = useState('')
	const [editing, setEditing] = useState(false)
	const [choosingPrefs, setChoosingPrefs] = useState(false)
	const {uid} = props;
	const [isOpen, setIsOpen] = useState(false);
	const [httpUrl, setHttpUrl] = useState('');
	const [isBioOpen, setIsBioOpen] = useState(false);
	const [userBio, setUserBio] = useState('loading');
  	
	const docRef = (doc(db, "users", props.uid));
	useEffect(() => {
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		
	getDoc(docRef).then(docSnap => {
		setUserData(docSnap.data())
		setDisplayName(docSnap.data().displayName);
		setProfilePicImg(docSnap.data().userIcon);
		setUserEmail(docSnap.data().email);
		setUserAddress(docSnap.data().location)
		setUserGender(docSnap.data().sex);
		setUserBio(docSnap.data().bio);
		});

	}, [uid, docRef, props]);

	function editProfile() {
		setIsOpen(!isOpen);
		setEditing(true);
	};

	function changeProfile(ev) {
		ev.preventDefault();


		const name = ev.target.elements.newName.value;
		const profilePic = httpUrl
		const email = ev.target.elements.newEmail.value;

		if(ev.target.elements.newName.value.length !== 0) {
			setDisplayName(name);
			updateDoc(doc(db, "users", props.uid), {
				displayName: name,
			})
		}

		if(profilePic.length !== 0) {
			ev.preventDefault()
			setProfilePicImg(profilePic);
			updateDoc(doc(db, "users", props.uid), {
				userIcon: profilePic
			})
		}

		if(ev.target.elements.newEmail.value.length !== 0) {
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
		

		const bio = ev.target.elements.newBio.value;

		if(ev.target.elements.newBio.value.length !== 0) {
			setUserBio(bio);
			
			updateDoc(doc(db, "users", props.uid), {
				bio: bio,
			})
		}

		setEditing(false);

		setIsBioOpen(!isBioOpen);
	}

	function changePreferences() {
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
