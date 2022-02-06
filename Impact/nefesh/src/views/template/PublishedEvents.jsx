import '../../styles/page/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, updateDoc, collection, getDocs, query, onSnapshot } from 'firebase/firestore';
import { useNavigate } from "react-router-dom"

let page = 'ProfilePage';

function PublishedEvents(props) {
	const [eventListState, setEventListState] = useState([]);

	let publishedEventsTemp = []
	const handleRoute = useNavigate()
	const [savedArticles, setSavedArticles] = useState([])
	const docRef = (doc(db, "users", props.userID));
	useEffect(async () => {
		const p = query(collection(db, 'users', props.userID, "Published"));
		const eventListTemp = [];

		//listen to events
		const eventsSnapshot = onSnapshot(p, (querySnapshot) => {
			querySnapshot.forEach((doc) => {
				const eventTemp = doc.data();
				eventTemp.id = doc.id;
				eventListTemp.push(eventTemp);
			});
			setEventListState(eventListTemp);
		});
		//pull userId of selected user and set for superAdmin page
		//on snapshot displayName
		// const q = query(collection(db, "users", props.userID, "Saved"))
		// const savedEventsDB = await getDocs(q)

		// savedEventsDB.forEach((savedEventDB) => {
		// 	const newSavedEvent = savedEventDB.data()
		// 	newSavedEvent.id = savedEventDB.id
		// 	publishedEventsTemp.push(newSavedEvent)
		// })
		// setSavedArticles(publishedEventsTemp)
	}, []);

	function ping() {
		console.log(eventListState[0].id)
	}

	function editNavigate(ev) {

	}



	return (
		<div className="wholePage">
			<div className="SavedEvents">
				<h3 className="EventParent2">Published Events</h3>
				<div className='eventMapContainer'>
					<button onClick={ping}>HIIIII</button>
					{eventListState.map((event) => {
						return (
							<div key={event.id} className='nametag card card--link' >
								<button onClick={() => handleRoute(`Edit/${event.id}`)}>Edit Article</button>
								<div onClick={() => handleRoute(`View/${event.id}`)}>
									<img src={event.coverImage} alt={event.title}></img>
									<h2>{event.title}</h2>
									<div className='cardData'>
										<div id='Date'>
											{new Intl.DateTimeFormat('en', {
												timeStyle: 'short',
												dateStyle: 'medium',
											}).format(event.startTime.seconds * 1000)}
										</div>
										<div id='Views'>
											<div className="tagGroup">
												{event.tags.map((e) => (
													<div className='tag'>{e}</div>
												))}
											</div>
										</div>
									</div>
								</div>
								<div className='cardTags'></div>
							</div>
						);
					})}
				</div>
			</div>
		</div>

	);
}

export default PublishedEvents;
