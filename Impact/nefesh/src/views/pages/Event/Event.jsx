import React, { useState, useEffect } from "react";
import "./Event.css";
import { collection, setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../../functions/firebase/config";
import { useParams } from "react-router-dom";
import useScript from "../../../functions/useScript";

function Event() {
	const [eventData, setEventData] = useState([]);
	const [tags, setTags] = useState([]);
	let { eventID } = useParams();

	useEffect(async () => {
		try {
			let eventRef = doc(db, "events", eventID);
			const docSnap = await getDoc(eventRef);
			setEventData(docSnap.data());
			setTags(docSnap.data().tags);
		} catch (err) {
			console.error(err);
		}
	}, []);

	function ping() {
		console.log(eventData);
	}
	return (
		<div>
			{useScript("https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js")}

			<div>Hi {eventID}</div>
			<button onClick={ping}>Hi</button>
			<div name="title">{eventData.title}</div>
			<div name="date">{eventData.date}</div>
			<div name="startTime">{eventData.startTime}</div>
			<div name="endTime">{eventData.endTime}</div>
			<img name="coverImage" src={eventData.coverImage}></img>
			<div name="maxCapacity">{eventData.maxCapacity}</div>
			<div name="currentCapacity">{eventData.currentCapacity}</div>
			<div name="hostName">{eventData.hostName}</div>
			<div name="organizationName">{eventData.creatorOrg}</div>
			<div name="views">Views: {eventData.views}</div>
			{tags.map((tags) => {
				return <div key={tags.id}>{tags.tag}</div>;
			})}
			<div name="text">{eventData.article}</div>
			<div title="Add to Calendar" className="addeventatc">
				Add to Calendar
				<span className="start">{`${eventData.date}+${eventData.startTime}`}</span>
				<span className="end">{`${eventData.date}+${eventData.endTime}`}</span>
				<span className="timezone">Asia/Jerusalem</span>
				<span className="title">{eventData.title}</span>
				<span className="description">{eventData.article}</span>
			</div>
		</div>
	);
}

export default Event;
