import React, { useState, useEffect } from "react";
import "../../styles/page/Event.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../scripts/firebase/config";
import {  useParams } from "react-router-dom";
import useScript from "../../scripts/useScript";
// import 'moment-timezone';

function Event() {
	const [eventData, setEventData] = useState([]);
	const [tags, setTags] = useState([]);
	const [addressInfo, setAddressInfo] = useState([]);
	const [contactInfo, setContactInfo] = useState([]);
	const [orgWebsite, setOrgWebsite] = useState([]);
	const [websiteValidity, setWebValidity] = useState(false);
	//const [imageValidity, setImgValidity] = useState(false);
	let { eventID } = useParams();
	//let navigate = useNavigate();
	const [image,setImage]=useState();
	//const [filterObjectData,setfilterData]=useState([]);
	useEffect(() => {
		try {
			setWebValidity(false);
			let eventRef = doc(db, "events", eventID);
			let eventObj;
			getDoc(eventRef).then(docSnap => {
				eventObj = docSnap.data();

				let { startTime, endTime, address } = eventObj;
			if (startTime) startTime = new Date(startTime.seconds * 1000).toJSON();
			if (endTime) endTime = new Date(endTime.seconds * 1000).toJSON();
			if (address) address = Object.entries(address);

			eventObj.startTime = startTime;
			eventObj.endTime = endTime;
			eventObj.address = address;
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
			});
		} catch (err) {
			console.error(err);
		}
	}, [eventID]);

	function filterEntries(data) {
		if(data[0].length === 0) return [];
		let data2 = Object.entries(data[0]);
		let buffer = [...data[1]];

		let buffer2 = buffer.map(element => data2.find(e=> e[0] === element));
		let objectData = Object.fromEntries(buffer2);

		return objectData;
}

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

	function formatField(key, value) {
		let formatted = {};
		if(Array.isArray(value)) {
			if(Array.isArray(value[1])) value = Object.fromEntries(value);
		}

		if(Date.parse(value)) formatted = new Intl.DateTimeFormat("en", { timeStyle: "short", dateStyle: "medium"}).format(Date.parse(value));

		if(typeof value == "object") { 
			if(key === "address") formatted = `${value.houseNumber} ${value.streetName}, ${value.city}`;
		}

		if(!formatted)  formatted = value;

		return formatted;
	}

	return (
		<div className="mainContainer_Event">
			{useScript("https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js")}
			<img className="coverImage" src={image} alt="Event"></img>
			<div className="eventData_Event">
				<div className="title"> {eventData.title} </div>
				<div class="dataBox">
					{
						
					Object.entries(filterEntries([eventData, ["startTime", "endTime", "address"]])).map(e=>
						 (<div className="dataEntry" id={e[0] + "Entry"}>
							<div className="dataLabel" id={e[0] + "Label"}>
								{e[0]}
							</div>
							<div className="dataField" id={e[0] + "Field"}>
								{ formatField(...e) }
							</div>
							</div>)
					)
				}
				
				</div>
				<div className='eventDetails_Event'>
					<a href={websiteValidity ? orgWebsite : null}>{websiteValidity ? orgWebsite : 'There is no link'}</a>
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
					return <tag key={`tag-${index}`}>{tag}</tag>;
				})}
			</div>
		</div>
	);
}

export default Event;
