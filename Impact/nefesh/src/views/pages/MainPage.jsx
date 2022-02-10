import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataFilters from '../template/DataFilters';
import { query } from 'firebase/database';
import { collection, onSnapshot, getFirestore, where } from 'firebase/firestore';


function App() {
	import('../../styles/page/MainPage.css');
	const navigate = useNavigate();

	const db = getFirestore();
	const [eventListState, setEventListState] = useState([]);
	const [eventFilter, setEventFilter] = useState('Upcoming');

	useEffect(() => {
		const q = query(collection(db, 'events'), where('startTime', '>', new Date()));


		//listen to events
		const unsubuscribe = onSnapshot(q, (querySnapshot) => {
			let eventListTemp = [];
			querySnapshot.forEach((doc) => {
				const eventTemp = doc.data();
				eventTemp.id = doc.id;
				eventListTemp.push(eventTemp);
			});

			eventListTemp = sortBy(eventFilter, eventListTemp);
			setEventListState(eventListTemp);
		});

		return () => {
			return unsubuscribe();
		};
	}, [db, eventFilter]);

	function handleOrderBy(ev) {
		setEventFilter(ev.target.value);
		const eventFilterTemp = ev.target.value;
		const sortedEvents = sortBy(eventFilterTemp, eventListState);
		sortedEvents.forEach((ev) => {
		});
		setEventListState(sortedEvents);
	}

	function sortBy(type, evntsParams) {
		let events = [...evntsParams];
		if (type === 'Upcoming') {
			events = events.sort((a, b) => {
				return a.startTime.seconds - b.startTime.seconds;
			});

		}
		if (type === 'Freshly Added') {
			events = events.sort(function (a, b) {
				return b.dateAdded.seconds - a.dateAdded.seconds;
			});
		}
		return events;
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
					<select name='eventFilterType' id='eventFilterType' onChange={handleOrderBy}>
						<option value='Upcoming'>Upcoming</option>
						<option value='Freshly Added'>Freshly Added</option>
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
									<div id='Views' className='tagGroup'>
										{event.tags.map((e) => (
											<div key={e} className='tag'>{e}</div>
										))}
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
