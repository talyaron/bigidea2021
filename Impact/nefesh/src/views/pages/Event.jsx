import React, { useState, useEffect } from "react";
import "../../styles/page/Event.css";
import { collection, setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../scripts/firebase/config";
import { useNavigate, useParams } from "react-router-dom";
import useScript from "../../scripts/useScript";
import Moment from 'react-moment';
// import 'moment-timezone';

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
	const [image,setImage]=useState()
	useEffect(async () => {
		try {
			setWebValidity(false);
			let eventRef = doc(db, "events", eventID);
			const docSnap = await getDoc(eventRef);
			const eventObj = docSnap.data();
			let { startTime, endTime } = eventObj;
			if (startTime) startTime = new Date(startTime.seconds * 1000);
			if (endTime) endTime = new Date(endTime.seconds * 1000);
			console.log(startTime, endTime);
			eventObj.startTime = startTime;
			eventObj.endTime = endTime;
			console.log(eventObj);
			console.log(eventID);
			setEventData(eventObj);
			if ("tags" in eventObj && Array.isArray(eventObj.tags)) {
				console.log("we have tags");
				console.log(eventObj.tags)
				setTags(eventObj.tags);
			}
			setImage(eventObj.coverImage)
			setAddressInfo(eventObj.address);
			setContactInfo(eventObj.contactInfo);
			let validState = validURL(eventObj.contactInfo.website);
			setWebValidity(validState);
			setOrgWebsite(eventObj.contactInfo.website);
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

	return (
		<div className="mainContainer_Event">
			{useScript("https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js")}
			<div className="eventData_Event">
				<div className="title"> {eventData.title} </div>
				<div className='eventDetails_Event'>
					<a href={websiteValidity ? orgWebsite : null}>{websiteValidity ? orgWebsite : 'There is no link'}</a>
				</div>
				<img className="coverImage" src={image}></img>
				<div className="timeContainer">
					<p className="time">
						Start Time: <br></br><b><Moment format="YYYY/MM/DD @ hh:mm">{eventData.startTime}</Moment></b>
					</p>
					<p className="time"> End Time: <br></br><b><Moment format="YYYY/MM/DD @ hh:mm">{eventData.endTime}</Moment> </b></p>
				</div>
				<div className="locationContainer">
					<p className="eventStreet_Event">
						{" "}
						Street Name: {addressInfo.streetName}
					</p>
					<p className="eventHouse_Event">
						{" "}
						House Number: {addressInfo.houseNumber}
					</p>
					<p className="eventCity_Event"> City: {addressInfo.city}</p>
				</div>
				<h4 className="eventDetails_Event">
					{" "}
					Description: {eventData.article}
				</h4>
				<h3 className="username_Event"> Signed / {eventData.hostName} </h3>
			</div>

			<div className="userPromptContainer_Event">
				<h3 className="maxCap"> Max Capacity: {eventData.maxCapacity} </h3>
				<div title="Add to Calendar" className="addeventatc">
					Add to Calendar
					<span className="start">{`${eventData.date}+${eventData.startTime}`}</span>
					<span className="end">{`${eventData.date}+${eventData.endTime}`}</span>
					<span className="timezone">Asia/Jerusalem</span>
					<span className="title">{eventData.title}</span>
					<span className="description">{eventData.article}</span>
				</div>
				<button className="shareButton button_Event"> Share </button>
			</div>

			<div className="contactUsContainer_Event">
				<div className="contactUsContent_Event">
					<p>Our Phone Number: {contactInfo.phone}</p>
					<p>Our Email Address: {contactInfo.email}</p>
				</div>
			</div>
			<div className="eventTags_Event">
				<h3 className="tagTitle_Event">Event Tags:</h3>
				{tags.map((tag, index) => {
					return <div className="tag" key={`tag-${index}`}>{tag}</div>;
				})}
			</div>
		</div>
	);
}

export default Event;
