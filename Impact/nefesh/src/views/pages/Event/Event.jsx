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
		try {
			setWebValidity(false);
			let eventRef = doc(db, 'events', eventID);
			const docSnap = await getDoc(eventRef);
			setEventData(docSnap.data());
			setTags(docSnap.data().tags);
			setAddressInfo(docSnap.data().address);
			setContactInfo(docSnap.data().contactInfo);
			let validState = validURL(docSnap.data().contactInfo.website);
			setWebValidity(validState);
			setOrgWebsite(docSnap.data().contactInfo.website);
		} catch (err) {
			console.error(err);
		}
	}, []);

	function validURL(str) {
		var pattern = new RegExp(
			'^(https?:\\/\\/)?' + // protocol
				'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
				'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
				'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
				'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
				'(\\#[-a-z\\d_]*)?$',
			'i'
		); // fragment locator
		return !!pattern.test(str);
	}

	function ping() {
		console.log(eventData);
	}
	return (
		<div className='mainContainer'>
			  {useScript("https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js")}
			<div className='articleImage' /*style={divStyle}*/>
				<div className='articleImageButtons'></div>
			</div>

			<div className='eventData'>
				<h1 className='eventName'> {eventData.title} </h1>
				<h4 className='eventDetails'>
					<a href={websiteValidity ? orgWebsite : null}>{websiteValidity ? orgWebsite : 'There is no link'}</a>
				</h4>
				<div className='secondaryInfo'>
					<div className='eventTimeContainer'>
						<p className='eventDate'> Event Date: {eventData.date} </p>
						<p className='eventStartTime'> Start Time: {eventData.startTime}</p>
						<p className='eventEndTime'> End Time: {eventData.endTime}</p>
					</div>
					<div className='eventLocationContainer'>
						<p className='eventStreet'> Street Name: {addressInfo.streetName}</p>
						<p className='eventHouse'> House Number: {addressInfo.houseNumber}</p>
						<p className='eventCity'> City: {addressInfo.city}</p>
					</div>
				</div>
				<h4 className='eventDetails'> Description: {eventData.article}</h4>
				<h3 className='username'> Signed / {eventData.hostName} </h3>
			</div>

			<div className='userPromptContainer'>
				<h3 className='maxCap'> Max Capacity: {eventData.maxCapacity} </h3>
				<div title='Add to Calendar' className='addeventatc'>
						Add to Calendar
						<span className='start'>{`${eventData.date}+${eventData.startTime}`}</span>
						<span className='end'>{`${eventData.date}+${eventData.endTime}`}</span>
						<span className='timezone'>Asia/Jerusalem</span>
						<span className='title'>{eventData.title}</span>
						<span className='description'>{eventData.article}</span>
					</div>
				<button className='shareButton button_AP'> Share </button>
			</div>

			<div className='contactUsContainer'>
				<div className='contactUsContent'>
					{/* <button className="closePopUp" onClick={hideOrganizerContact}>  &times; Close</button> */}
					<p>Our Website: {websiteValidity ? orgWebsite : 'No Link Available'}</p>
					<p>Our Phone Number: {contactInfo.phone}</p>
					<p>Our Email Address: {contactInfo.email}</p>
				</div>
			</div>

			<div className='eventTags'>
				<h3 className='tagTitle'>Event Tags:</h3>
				{tags.map((tags) => {
					return (
						<div className='tagBox' key={tags.id}>
							{tags.tag}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Event;
