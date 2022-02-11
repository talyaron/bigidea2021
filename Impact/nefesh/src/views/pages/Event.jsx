import React, { useState, useEffect } from 'react';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../scripts/firebase/config';
import { useParams } from 'react-router-dom';
import useScript from '../../scripts/useScript';
import Clock from '../../assets/Images/NewIcons/clock.svg';

function Event() {
	import('../../styles/page/Event.css');
	const [eventData, setEventData] = useState([]);
	const [EventFilter] = useState([
		{ id: 0, field: 'startTime', label: 'Start Time', type: 'timestamp' },
		{ id: 1, field: 'endTime', label: 'End Time', type: 'timestamp' },
	]);
	const [tags, setTags] = useState([]);
	const [/*contactInfo*/, setContactInfo] = useState([]);
	const [orgWebsite, setOrgWebsite] = useState([]);
	const [websiteValidity, setWebValidity] = useState(false);
	let { eventID } = useParams();
	const [image, setImage] = useState();
	const [/*eventDataValid*/, SetEventDataValid] = useState(false);
	useEffect(() => {
		try {
			setWebValidity(false);
			let eventRef = doc(db, 'events', eventID);
			let eventObj;
			getDoc(eventRef).then((docSnap) => {
				eventObj = docSnap.data();
				let { startTime, endTime /*address*/ } = eventObj;
				if (startTime) startTime = new Date(startTime.seconds * 1000).toJSON();
				if (endTime) endTime = new Date(endTime.seconds * 1000).toJSON();

				eventObj.startTime = startTime;
				eventObj.endTime = endTime;

				let EventArray = Object.entries(eventObj);
				EventArray = EventArray.map((e) => [e[0], e[1] instanceof Object && !Array.isArray(e[1]) ? Object.entries(e[1]) : e[1]]);

				setEventData(EventArray);
				if ('tags' in eventObj && Array.isArray(eventObj.tags)) {

					setTags(eventObj.tags);
				}
				setImage(eventObj.coverImage);
				setContactInfo(eventObj.contactInfo);
				let tempURL = eventObj.contactInfo.website;
				let validState = validURL(tempURL);
				setWebValidity(validState);
				if (tempURL.includes('https://')) {
					setOrgWebsite(tempURL);
				}else if (tempURL.includes('http://')) {
					setOrgWebsite('Unsecure website. Link not displayed.');
				} else {
					tempURL = 'https://' + tempURL;

					setOrgWebsite(tempURL);
				}
				SetEventDataValid(true);
			});
		} catch (err) {
			console.error(err);
		}
	}, [eventID]);

	function filterEntries(data) {
		if (data[0].length === 0) return [];
		let buffer = data[1];
		buffer.map((element) => (element.data = data[0].find((e) => e[0] === element.field)[1]));
		buffer = buffer.map((e) => Object.entries(e));
		return buffer;
	}

	function getField(data, field) {
		return Object.fromEntries(data)[field];
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
		let val = Object.fromEntries(value);
		if (val.type === 'location') {
			if (Array.isArray(val.data)) val.data = Object.fromEntries(val.data);
			if (val.data.city && val.data.houseNumber && val.data.streetName) formatted = `${val.data.streetName} ${val.data.houseNumber} ${val.data.city}`;
		}

		if (val.type === 'timestamp' && Date.parse(val.data)) formatted = new Intl.DateTimeFormat('en', { timeStyle: 'short', dateStyle: 'long' }).format(Date.parse(val.data));

		if (!formatted) formatted = val.data;
		return formatted;
	}

	return (
		<div className='EventPage'>
			<div id='mainContainer_Event'>
				{useScript('https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js')}
				<img id='coverImage_Event' src={image} alt='Event'></img>
				<div className='eventData_Event'>
					<div id='title_Event'> {getField(eventData, 'title')} </div>
					<div id='hostName_Event'> Hosted By: {getField(eventData, 'hostName')} </div>
					<div id='eventWebsite_Event'>
						<a href={websiteValidity ? orgWebsite : null}>{websiteValidity ? orgWebsite : 'There is no link'}</a>
					</div>
					<div className='eventTimesCont'>
						{Object.entries(filterEntries([eventData, EventFilter])).map((e) => (
							<div className='dataEntry' id={e[1][1][1] + 'Entry'} key={e}>
								<img id='clock' className='inlineBlock' src={Clock} alt='clock' />
								{e[1][2][1] ? (
									<div className='dataLabel inlineBlock' id={e[1][1][1] + 'Label'}>
										{e[1][2][1]}:
									</div>
								) : null}
								<div className='dataField inlineBlock' id={e[1][1][1] + 'Field'}>
									{formatField(...e)}
								</div>
							</div>
						))}
					</div>

					<div id='eventAddress'>{Object.entries(filterEntries([eventData, [{ field: 'address', type: 'location' }]])).map((e) => formatField(...e)) /* {formatField([ ["type", 'location'], ["data", getField(eventData, "address")]])} */}</div>
					<div id='eventDescription_Event'>{getField(eventData, 'text')}</div>
				</div>
				<div className='addToCalAndMaxCap_Cont'>
					<div className='userPromptContainer_Event'>
						<div title='Add to Calendar' className='addeventatc'>
							Add to Calendar
							<span className='start'>{`${getField(eventData, 'startTime')}`}</span>
							<span className='end'>{`${getField(eventData, 'endTime')}`}</span>
							<span className='timezone'>Asia/Jerusalem</span>
							<span className='title'>{getField(eventData, 'title')}</span>
							<span className='description'>{getField(eventData, 'text')}</span>
						</div>

						
					</div>
					<div id='maxCap'> Max Capacity: {getField(eventData, 'maxCapacity')} </div>
				</div>

				<div className='eventTags_Event'>
					{tags.map((tag, index) => {
						return (
							<div className='tag_Event inlineBlock' key={`tag-${index}`}>
								{tag}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Event;
