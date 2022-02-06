import '../../styles/page/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, updateDoc} from 'firebase/firestore';
import EditProfilePopUp from '../template/EditProfilePopUp';
import ImportImgs from '../template/ImportImgs'
import EditBioPopUp from '../template/EditBioPopUp';
import EditPic from '../../assets/Images/NewIcons/edit.svg';
import Envelope from '../../assets/Images/NewIcons/email.svg';
import Upload from '../../assets/Images/NewIcons/upload.svg'
let page = 'ProfilePage';


function ProfilePage(props) {
	const [userData, setUserData] = useState()
	const [displayName, setDisplayName] = useState('loading');
	const [profilePicImg, setProfilePicImg] = useState('loading');
	const [/*userEmail*/, setUserEmail] = useState('loading');
	const [/*userAddress*/, setUserAddress] = useState('loading');
	const [/*userGender*/, setUserGender] = useState('loading');
	//const [userArticles, setUserArticles] = useState('loading');
	//const [textSize, setTextSize] = useState('');
	const [editing, setEditing] = useState(false);
	//const [choosingPrefs, setChoosingPrefs] = useState(false);
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
		setIsBioOpen(!isBioOpen);
		setEditing(true);
	};

	function changeProfile(ev) {
		ev.preventDefault();


		const name = ev.target.elements.newName.value;
		const profilePic = httpUrl;
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

	const callBackFunction = (httpRef) => {
		setHttpUrl(httpRef);
	};

	

	function editBio(){
		setIsBioOpen(!isBioOpen);
		setEditing(true);
	}

	return (
		<div className= "wholePage">
			<div className='back-1'>
				<img className ="EditProfBtn1" src={EditPic} type="button" onClick={editProfile} name="editbtn" alt="edit profile button"/>
				<div id='profilePic' style={{ backgroundImage: 'url(' + profilePicImg + ')' }} />
				<div className= "displayName"> {displayName} </div> 
				<img src= {Envelope} className= "emailMe" alt="emailMe"/> 
			</div>
			{/* <div className='back-2'>
				<button className ="EditProfBtn" type="button" name="PrefButton"> Edit Prefrences </button>
				<h2 className='center'> Prefrences </h2> 
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
				 
			</div> */}
			<div className='back-3'>
				<div className='center'> Bio </div> 
				<div className= "finalBio">{userBio}</div>
				
			</div>
			<footer  className='back-2 foot'>

			</footer>

			
			{isOpen && <EditProfilePopUp
      content={<>
        {editing ? <div className='profileEditor'	>
				<div className="editProfile">
					<input type="text" className="bioField" name="newName" placeholder= "Enter New Name" /><br />
					<ImportImgs userData={userData} placeholder= "Enter New Image" className= "choosePictureButton" pageName={page} parentCallBack={callBackFunction} /><img  src={Upload}/>
					<input type="text" className="bioField" placeholder= "Enter New Bio" name="newBio"/>
					<div className='center3' name="editbtn" onClick={changeProfile}> Submit Changes</div>

				</div>


			</div> : null}
      </>}
      handleClose={editProfile}
    />}
	
			

		</div>


	);
}

export default ProfilePage;
