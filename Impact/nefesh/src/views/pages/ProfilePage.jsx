import '../../styles/page/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, updateDoc, collection, getDocs, query } from 'firebase/firestore';
import EditProfilePopUp from '../template/EditProfilePopUp';
import ImportImgs from '../template/ImportImgs'
import EditBioPopUp from '../template/EditBioPopUp';
import EditPic from '../../assets/Images/NewIcons/edit.svg';
import Envelope from '../../assets/Images/NewIcons/email.svg'
import { useNavigate } from "react-router-dom"
let page = 'ProfilePage';



function ProfilePage(props) {
	let savedEventsTemp = []
	const handleRoute = useNavigate()
	const [savedArticles, setSavedArticles] = useState([])
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
	const { uid } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [httpUrl, setHttpUrl] = useState('');
	const [isBioOpen, setIsBioOpen] = useState(false);
	const [userBio, setUserBio] = useState('loading');

	const docRef = (doc(db, "users", props.uid));
	useEffect(async () => {
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		const q = query(collection(db, "users", props.uid, "Saved"))
		const savedEventsDB = await getDocs(q)

		savedEventsDB.forEach((savedEventDB) => {
			const newSavedEvent = savedEventDB.data()
			newSavedEvent.id = savedEventDB.id
			savedEventsTemp.push(newSavedEvent)
		})
		setSavedArticles(savedEventsTemp)
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

		if (ev.target.elements.newName.value.length !== 0) {
			setDisplayName(name);
			updateDoc(doc(db, "users", props.uid), {
				displayName: name,
			})
		}

		if (profilePic.length !== 0) {
			ev.preventDefault()
			setProfilePicImg(profilePic);
			updateDoc(doc(db, "users", props.uid), {
				userIcon: profilePic
			})
		}

		if (ev.target.elements.newEmail.value.length !== 0) {
			setUserEmail(email);
			updateDoc(doc(db, "users", props.uid), {
				email: email
			})
		}

		setEditing(false);
		setIsOpen(!isOpen);

		const bio = ev.target.elements.newBio.value;

		if (ev.target.elements.newBio.value.length !== 0) {
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

		if (ev.target.elements.newBio.value.length !== 0) {
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



	function editBio() {
		setIsBioOpen(!isBioOpen);
		setEditing(true);
	}

	return (
		<div className="wholePage">
			<div className='back-1'>
				<img className="EditProfBtn1" src={EditPic} type="button" onClick={editProfile} name="editbtn" alt="edit profile button" />
				<div id='profilePic' style={{ backgroundImage: 'url(' + profilePicImg + ')' }} />
				<div className="displayName"> {displayName} </div>
				<img src={Envelope} className="emailMe" alt="emailMe" />
			</div>
			{/* <div className='back-2'>
				<button className ="EditProfBtn" type="button" name="PrefButton"> Edit Prefrences </button>
				<h2 className='center'> Prefrences </h2> 
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
				 
			</div> */}
			<div className='back-3'>
				<div className='center'> Bio </div>
				<div className="finalBio">{userBio}</div>

			</div>
			<footer className='back-2 foot'>

			</footer>


			{isOpen && <EditProfilePopUp
				content={<>
					{editing ? <div className='profileEditor'	>
						<h4 className='center2'> Edit Profile Here </h4>
						<form onSubmit={changeProfile}>
							Enter New Name: <input type="text" name="newName" /><br />
							Enter New Image : <ImportImgs userData={userData} pageName={page} parentCallBack={callBackFunction} />
							Enter New Email: <input type="text" name="newEmail" /><br />
							Enter New Bio: <input type="text" name="newBio" />
							<button type="submit" className='center3' name="editbtn"> Submit Changes</button>

						</form>


					</div> : null}
				</>}
				handleClose={editProfile}
			/>}
			{isBioOpen && <EditBioPopUp
				content={<>
					{editing ? <div className='profileEditorBio'	>
						<form onSubmit={changeBio}>
							Enter New Bio: <input type="text" name="newBio" />
							<button type="submit" className='center3' name="editbtn"> Submit Changes</button>

						</form>


					</div> : null}
				</>}
				handleClose={editBio}
			/>}

			<div className="SavedEvents">
				<h3 className="EventParent2">Saved Events:</h3>
				{savedArticles.map((event, index) => {
					return (
						<div key={index}>
							Edit Events:
							<div
								className="nametag card card--link"
								onClick={() => handleRoute(`/ProfilePage/SavedEvents/Edit/${event.id}`)}>
								{event.title}</div>
							<button onClick={() => handleRoute(`/ProfilePage/SavedEvents/Preview/${event.id}`)}>Preview</button>
						</div>
					);
				})}
			</div>
		</div>


	);
}

export default ProfilePage;
