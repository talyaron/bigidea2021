import React, { useState, useEffect } from 'react';
import '../../styles/page/Event.css';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../scripts/firebase/config';
import { useParams } from 'react-router-dom';
import useScript from '../../scripts/useScript';
import Clock from '../../assets/Images/NewIcons/clock.svg'
import { async } from '@firebase/util';
// import 'moment-timezone';

function Event() {
	const [eventData, setEventData] = useState([]);
	const [EventFilter] = useState([{ id: 0, field: 'startTime', label: 'Start', type: 'timestamp'}, { id: 1, field: 'endTime', label: 'End', type: 'timestamp'}, { id: 2, field: 'address', label: 'Address', type: 'location'}]);
	const [tags, setTags] = useState([]);
	//const [addressInfo, setAddressInfo] = useState([]);
	const [contactInfo, setContactInfo] = useState([]);
	const [orgWebsite, setOrgWebsite] = useState([]);
	const [websiteValidity, setWebValidity] = useState(false);
	const [eventDataValid, SetEventDataValid] = useState(false)
	
	let { eventID } = useParams();
	//let navigate = useNavigate();
	const [image, setImage] = useState();
	//const [filterObjectData,setfilterData]=useState([]);
	useEffect(async() => {
		try {
			setWebValidity(false);
			let eventRef = doc(db, 'events', eventID);
			let eventObj;
			await getDoc(eventRef).then((docSnap) => {
				eventObj = docSnap.data();

				let { startTime, endTime, address } = eventObj;
				if (startTime) startTime = new Date(startTime.seconds * 1000).toJSON();
				if (endTime) endTime = new Date(endTime.seconds * 1000).toJSON();
				//if (address) address = Object.entries(address);

				eventObj.startTime = startTime;
				eventObj.endTime = endTime;
				//eventObj.address = address;

				let EventArray = Object.entries(eventObj);
				EventArray = EventArray.map(e=>[e[0], (e[1] instanceof Object && !Array.isArray(e[1])) ? Object.entries(e[1]) : e[1]]);
				//console.log(EventArray)
				console.log(eventID);
				setEventData(EventArray);
				if ('tags' in eventObj && Array.isArray(eventObj.tags)) {
					console.log('we have tags');
					console.log(eventObj.tags);
					setTags(eventObj.tags);
				}
				setImage(eventObj.coverImage);
				//setAddressInfo(eventObj.address);
				setContactInfo(eventObj.contactInfo);
				let validState = validURL(eventObj.contactInfo.website);
				setWebValidity(validState);
				setOrgWebsite(eventObj.contactInfo.website);
				SetEventDataValid(true)
			});
		} catch (err) {
			console.error(err);
		}
	}, [eventID]);


	function filterEntries(data) {
		if (data[0].length === 0) return [];

		let buffer = data[1];
		//.map(e=>Object.entries(e));
		//console.log(data[0]);
		//console.log(buffer);
		buffer.map((element) => element.data = data[0].find(e=>e[0] === element.field)[1]);
		buffer = buffer.map(e => Object.entries(e));
	
		console.log(buffer)
	
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
		
		if (val.type === "location") {
			if (Array.isArray(val.data)) val.data = Object.fromEntries(val.data);
			if (val.data.city && val.data.houseNumber && val.data.streetName) formatted = `${val.data.houseNumber} ${val.data.streetName}, ${val.data.city}`;
		}

		if (val.type === "timestamp" && Date.parse(val.data)) formatted = new Intl.DateTimeFormat('en', { timeStyle: 'short', dateStyle: 'long' }).format(Date.parse(val.data));

		if (!formatted) formatted = val.data;
		return formatted;
	} 

	return (
		<div className='EventPage'>
		
		<div id='mainContainer_Event'>
			{useScript('https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js')}
			<img id='coverImage_Event' src={image} alt='Event'></img>
			<div className='eventData_Event'>
				<div id='title_Event'> {eventData.title} </div>
				<div id='hostName_Event'>
					Hosted by: {eventData.hostName} 
				</div>
				<div className='eventTimesCont'>
					{Object.entries(filterEntries([eventData, ['startTime', 'endTime']])).map((e) => (
						<div className='dataEntry' key={e[0]} id={e[0] + 'Entry'}>
							<img id='clock' src={Clock} alt="clock" /> 
							<div className='dataField' id={e[0] + 'Field'}>
								{e[0]}: {formatField(...e)}
							</div>
						</div>
					))}
				</div>
				<div id='eventWebsite_Event'>
					<a href={websiteValidity ? orgWebsite : null}>{websiteValidity ? orgWebsite : 'There is no link'}</a>
				</div>
					{/* {eventDataValid ? 
					<div id='eventAddress'>
						<div className='inlineBlock'>{eventData.address[2][1]}</div>
						<div className='inlineBlock'>{eventData.address[0][1]}</div>
						<div className='inlineBlock'>{eventData.address[1][1]}</div>
					</div>
					: null} */}
				<div id='eventDescription_Event'>{eventData.article}</div>
				
			</div>
			
			<div className='maxCap__Event'> Max Capacity: {eventData.maxCapacity} </div>
			<div title='Add to Calendar' className='addEventToCalender'>
				Add to Calendar
				<span className='start'>{`${eventData.startTime}`}</span>
				<span className='end'>{`${eventData.endTime}`}</span>
				<span className='timezone'>Asia/Jerusalem</span>
				<span className='title'>{eventData.title}</span>
				<span className='description'>{eventData.article}</span>
			</div>
				<div id='hostPhoneNumber_Event'>
					{contactInfo.phone}
					<a href={`mailto: ${contactInfo.email} ?subject=Event!&body=Hi! I wanted to contact you to tell you that (type here)`} target='_blank'>
						Email {eventData.hostName}!
					</a>
					</div>
			<div className='eventTags_Event'>
				{tags.map((tag, index) => {
					return <tag key={`tag-${index}`}>{tag}</tag>;
				})}
			</div>
		</div>
	</div>
	);
}

export default Event;






