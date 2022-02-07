import '../../styles/page/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, updateDoc, collection, getDocs, query } from 'firebase/firestore';
import { useNavigate } from "react-router-dom"
let page = 'ProfilePage';



function PublishedEvents(props) {
	let publishedEventsTemp = []
	const handleRoute = useNavigate()
	const [savedArticles, setSavedArticles] = useState([])
	const docRef = (doc(db, "users", props.userID));
	useEffect(async () => {
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		const q = query(collection(db, "users", props.userID, "Saved"))
		const savedEventsDB = await getDocs(q)

		savedEventsDB.forEach((savedEventDB) => {
			const newSavedEvent = savedEventDB.data()
			newSavedEvent.id = savedEventDB.id
			publishedEventsTemp.push(newSavedEvent)
		})
		setSavedArticles(publishedEventsTemp)
	}, []);



	


	return (
		<div className="wholePage">
			<div className="SavedEvents">
				<h3 className="EventParent2">Published Events</h3>
				{savedArticles.map((event, index) => {
					return (
						<div key={index}>
							Edit Events:
							<div
								className="nametag card card--link"
								onClick={() => handleRoute(`/ProfilePage/PublishedEvents/Edit/${event.id}`)}>
								{event.title}</div>
							<button onClick={() => handleRoute(`/ProfilePage/PublishedEvents/View/${event.id}`)}>View</button>
						</div>
					);
				})}
			</div>
		</div>

	);
}

export default PublishedEvents;
