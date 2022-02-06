import '../../styles/page/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, updateDoc, collection, getDocs, query } from 'firebase/firestore';
import EditProfilePopUp from '../template/EditProfilePopUp';
import ImportImgs from '../template/ImportImgs'
import EditBioPopUp from '../template/EditBioPopUp';
import EditPic from '../../assets/Images/NewIcons/edit.svg';
import Envelope from '../../assets/Images/NewIcons/email.svg';
import Upload from '../../assets/Images/NewIcons/upload.svg'
import { useNavigate } from "react-router-dom"
let page = 'ProfilePage';



function SavedEvents(props) {
	let savedEventsTemp = []
	const handleRoute = useNavigate()
	const [savedArticles, setSavedArticles] = useState([])
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
	}, []);



	


	return (
		<div className="wholePage">
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

export default SavedEvents;
