import React, { useState, useEffect } from 'react';
import './Event.css';
import { collection, setDoc, getDoc, doc } from 'firebase/firestore';
import { db } from '../../../functions/firebase/config';
import { useNavigate, useParams } from 'react-router-dom';
import useScript from '../../../functions/useScript';

function Event() {
	const [eventData, setEventData] = useState([]);
	const [tags, setTags] = useState([]);
	const [addressInfo, setAddressInfo] = useState([]);
	const [contactInfo, setContactInfo] = useState([]);
	const [orgWebsite, setOrgWebsite] = useState([]);
	const [websiteValidity, setWebValidity] = useState(false);
	const [imageValidity, setImgValidity] = useState(false);
	let { eventID } = useParams();
	let navigate = useNavigate();

	useEffect(async () => {
		// try {
		// setWebValidity(false);
		let eventRef = doc(db, 'events', eventID);
		const docSnap = await getDoc(eventRef);
		console.log(docSnap.data())
		console.log(eventID)
		setEventData(docSnap);
		setTags(docSnap.data().types);
		setAddressInfo(docSnap.data().address);
		setContactInfo(docSnap.data().contactInfo);
		// let validState = validURL(docSnap.data().contactInfo.website);
		// setWebValidity(validState);
		setOrgWebsite(docSnap.data().contactInfo.website);
		// } catch (err) {
		// 	console.error(err);
		// }
	}, []);

	// function validURL(str) {
	// 	var pattern = new RegExp(
	// 		'^(https?:\\/\\/)?' + // protocol
	// 		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
	// 		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
	// 		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
	// 		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
	// 		'(\\#[-a-z\\d_]*)?$',
	// 		'i'
	// 	); // fragment locator
	// 	return !!pattern.test(str);
	// }

	function ping() {
		console.log(eventData.data());
	}
	return (
		
		<div className='mainContainer_Event'>
			{useScript("https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js")}
			<div className='eventData_Event'>
				<div className='eventName_Event'> {eventData.title} </div>
				{/* <h4 className='eventDetails_Event'>
					<a href={websiteValidity ? orgWebsite : null}>{websiteValidity ? orgWebsite : 'There is no link'}</a>
				</h4> */}
				<div className='secondaryInfo'>
					<div className='eventTimeContainer_Event'>
						<p className='eventStartTime_Event'> Start Time: {eventData.startTime}</p>
						<p className='eventEndTime_Event'> End Time: {eventData.endTime}</p>
					</div>
					<div className='eventLocationContainer_Event'>
						<p className='eventStreet_Event'> Street Name: {addressInfo.streetName}</p>
						<p className='eventHouse_Event'> House Number: {addressInfo.houseNumber}</p>
						<p className='eventCity_Event'> City: {addressInfo.city}</p>
					</div>
				</div>
				<h4 className='eventDetails_Event'> Description: {eventData.article}</h4>
				<h3 className='username_Event'> Signed / {eventData.hostName} </h3>
			</div>

			<div className='userPromptContainer_Event'>
				<h3 className='maxCap'> Max Capacity: {eventData.maxCapacity} </h3>
				<div title='Add to Calendar' className='addeventatc'>
					Add to Calendar
					<span className='start'>{`${eventData.date}+${eventData.startTime}`}</span>
					<span className='end'>{`${eventData.date}+${eventData.endTime}`}</span>
					<span className='timezone'>Asia/Jerusalem</span>
					<span className='title'>{eventData.title}</span>
					<span className='description'>{eventData.article}</span>
				</div>
				<button className='shareButton button_Event'> Share </button>
			</div>

			<div className='contactUsContainer_Event'>
				<div className='contactUsContent_Event'>
					<p>Our Phone Number: {contactInfo.phone}</p>
					<p>Our Email Address: {contactInfo.email}</p>
				</div>
			</div>
			<button onClick={ping}>Hi</button>
			<div className='eventTags_Event'>
				<h3 className='tagTitle_Event'>Event Tags:</h3>
				{tags.map((tags) => {
					return <div key={tags.id}>{tags.tag}</div>;
				})}
			</div>
		</div>
	);
}

export default Event;
