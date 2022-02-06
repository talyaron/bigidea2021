import '../../styles/page/MainPage.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataFilters from '../template/DataFilters';
import { query } from 'firebase/database';
import { collection, onSnapshot, getFirestore } from 'firebase/firestore';

//const tags = ["newest", "popular", "recent"];
let eventFilter = '';

function App() {
	const navigate = useNavigate();

	const db = getFirestore();
	const [eventListState, setEventListState] = useState([]);

	useEffect(() => {
		const q = query(collection(db, 'events'));
		const eventListTemp = [];

		//listen to events
		const eventsSnapshot = onSnapshot(q, (querySnapshot) => {
			querySnapshot.forEach((doc) => {
				const eventTemp = doc.data();
				eventTemp.id = doc.id;
				eventListTemp.push(eventTemp);
			});
			setEventListState(eventListTemp);
		});

		return () => {
			return eventsSnapshot();
		};
	}, []);

	function changeEventFilter(ev) {
		const eventListTemp = [...eventListState];
		eventFilter = ev.target.value;
		if (eventFilter === 'popular') {
			eventListTemp.sort(function (a, b) {
				return b.views - a.views;
			});
			setEventListState(eventListTemp);
		}
		if (eventFilter === 'newest') {
			eventListTemp.forEach((doc) => {
				doc.dateCompare = doc.Date.replace(/\D/g, '');
			});
			eventListTemp.sort(function (a, b) {
				return b.dateAdded.seconds - a.dateAdded.seconds;
			});
			setEventListState(eventListTemp);
		}
	}

	function handleRoute(eventId) {
		navigate('/event/' + eventId);
	}

	return (
		<div>
			<DataFilters setEventListState={setEventListState} />
			<div className='userInterfaceContainer'>
				<form className='filterEvents'>
					<label htmlFor='eventFilterType'>Sort Events:</label>
					<select name='eventFilterType' id='eventFilterType' onChange={changeEventFilter}>
						<option value='newest'>Upcoming</option>
						<option value='recent'>Freshly Added</option>
					</select>
				</form>
				<div className='eventMapContainer'>
					{eventListState.map((event) => {
						return (
							<div key={event.id} className='nametag card card--link' onClick={() => handleRoute(event.id)}>
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
											<div className="tag">{e}</div>
										))}
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

export default App;
