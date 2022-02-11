import React, { useState, useEffect } from 'react';

import { collection, addDoc, getDoc, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../scripts/firebase/config';
import ImportImgs from '../template/ImportImgs';
import { useNavigate, useParams } from 'react-router-dom';

let page = 'ArticleCreation';
let endValueNum = 1
Date.prototype.toDateInputValue = function () {
	var local = new Date(this);
	local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	return local.toJSON().slice(0, 10);
};

export function convertToDefaultTime(time) {
	console.log(typeof time);

	let hours = time.getHours();
	if (hours < 10) hours = `0${hours}`;
	let minutes = time.getMinutes();
	if (minutes < 10) minutes = `0${minutes}`;

	return `${time.toDateInputValue()}T${hours}:${minutes}`;
}
function EditSavedArticle(props) {
	let { eventID } = useParams();
	import('../../styles/page/ArticleCreation.css');
	const navigate = useNavigate();
	const [httpUrl, setHttpUrl] = useState('');
	const [tags, setTags] = useState([]);
	const [selectedTagArray, setSelectedTagArray] = useState([]);
	const [statesSubmitted, setStatesSubmitted] = useState({});
	const [contactInfo, setContactInfo] = useState([]);
	const [address, setAddress] = useState([]);
	let tagsSorted = []
	const [endValue, setEndValue] = useState("Publish event")
	const [endButton, setEndButton] = useState("Switch to save event")
	const [imageName,setImageName]=useState("null")
	const [profileImageState,setProfileImageState]=useState("editing")
	useEffect(() => {
		async function getData() {
			const imageNameRef = await getDoc(doc(db,"users",props.userID,"UploadedImgs",eventID))
			console.log(imageNameRef.data())
			setImageName(imageNameRef.data())
			const eventRef = doc(db, 'users', props.userID, 'Saved', eventID);
			let eventDB = await getDoc(eventRef);
			const eventDBTemp = eventDB.data();
			const tagsDB = await getDoc(doc(db, "tagCollection", "tagDoc"))
			tagsSorted = tagsDB.data().tagArray;
			tagsSorted.sort(function (a, b) {
				return a.localeCompare(b); //using String.prototype.localCompare()
			})
			setTags(tagsSorted)
			if ('dateAdded' in eventDBTemp) {
				let time = new Date(eventDB.data().dateAdded.seconds * 1000);
				time = convertToDefaultTime(time);

				eventDBTemp.dateAdded = time;
				console.log(eventDBTemp.dateAdded);
			} else {
				eventDBTemp.dateAdded = new Date().toDateInputValue();
			}

			if ('startTime' in eventDBTemp) {
				eventDBTemp.startTime = convertToDefaultTime(new Date(eventDB.data().startTime.seconds * 1000));
			} else {
				eventDBTemp.startTime = new Date().toDateInputValue();
			}
			if ('endTime' in eventDBTemp) {
				eventDBTemp.endTime = convertToDefaultTime(new Date(eventDB.data().endTime.seconds * 1000));
			} else {
				eventDBTemp.endTime = new Date().toDateInputValue();
			}
			//console.log(new Date(eventDB.data().dateAdded.seconds * 1000).toDateInputValue());
			// console.log(new Date(eventDB.data().endTime.seconds*1000).toDateInputValue())
			setStatesSubmitted(eventDBTemp);
			setAddress(eventDBTemp.address);
			setContactInfo(eventDBTemp.contactInfo);
			setSelectedTagArray(eventDBTemp.tags);
			setHttpUrl(eventDBTemp.coverImage);
		}
		getData()
	}, []);
	function inputEvt(ev) {
		let parse = 'text';
		statesSubmitted = { ...statesSubmitted, [parse]: ev.target.innerHTML };
	}

	async function submitArticle() {

		try {
			let { title, hostName, views, startTime, endTime, maxCapacity, text } = statesSubmitted;
			await setDoc(doc(db, 'events', eventID), {
				title,
				id: eventID,
				coverImage: httpUrl,
				text,
				hostName,
				address: {
					streetName: statesSubmitted.address.streetName,
					houseNumber: statesSubmitted.address.houseNumber,
					city: statesSubmitted.address.city,
				},
				contactInfo: {
					phone: statesSubmitted.contactInfo.phone,
					email: statesSubmitted.contactInfo.email,
					website: statesSubmitted.contactInfo.website,
				},
				tags: selectedTagArray,
				creatorUID: props.userID,
				creatorOrg: props.userOrg,
				views,
				dateAdded: new Date(),
				isPublished: true,
				startTime: new Date(startTime),
				endTime: new Date(endTime),
				maxCapacity,
			});
			await setDoc(doc(db, 'users', props.userID, 'Published', eventID), {
				title,
				id: eventID,
				coverImage: httpUrl,
				text,
				hostName,
				address: {
					streetName: statesSubmitted.address.streetName,
					houseNumber: statesSubmitted.address.houseNumber,
					city: statesSubmitted.address.city,
				},
				contactInfo: {
					phone: statesSubmitted.contactInfo.phone,
					email: statesSubmitted.contactInfo.email,
					website: statesSubmitted.contactInfo.website,
				},
				tags: selectedTagArray,
				creatorUID: props.userID,
				creatorOrg: props.userOrg,
				views,
				dateAdded: new Date(),
				isPublished: true,
				startTime: new Date(startTime),
				endTime: new Date(endTime),
				maxCapacity,
			});
			deleteDoc(doc(db,"users",props.userID,"Saved",eventID))
			alert('Event Submitted!')
			navigate('../MainPage')
		} catch (err) {
			console.error(err)
			alert("Not all fields had inputs")
		}
	}
	function saveDraft() {


		try {
			let { title, hostName, text, views, startTime, endTime, maxCapacity } = statesSubmitted;
			const docref = updateDoc(doc(db, "users", props.userID, "Saved",eventID), {
				title,
				coverImage: httpUrl,
				text,
				hostName,
				address: {
					streetName: statesSubmitted.address.streetName,
					houseNumber: statesSubmitted.address.houseNumber,
					city: statesSubmitted.address.city,
				},
				contactInfo: {
					phone: statesSubmitted.contactInfo.phone,
					email: statesSubmitted.contactInfo.email,
					website: statesSubmitted.contactInfo.website,
				},
				tags: selectedTagArray,
				creatorUID: props.userID,
				creatorOrg: props.userOrg,
				views,
				dateAdded: new Date(),
				isPublished: true,
				startTime: new Date(startTime),
				endTime: new Date(endTime),
				maxCapacity,
				id: eventID

			});
			alert('Event Saved!')
			navigate("../ProfilePage")
		} catch (err) {
			console.error(err)
			alert("Not all fields had inputs")
		}


	}

	function changeState(ev) {
		let parse = ev.target.name;
		setStatesSubmitted({ ...statesSubmitted, [parse]: ev.target.value });
	}

	const callBackFunction = (httpRef) => {
		setHttpUrl(httpRef);
	};
	let tempArray = [...selectedTagArray];
	function getTarget(ev) {
		let temp = ev.target.innerHTML;
		if (tempArray.includes(temp)) {
			const index = tempArray.indexOf(temp);
			tempArray.splice(index, 1);
		} else {
			tempArray.push(temp);
		}
		setSelectedTagArray(tempArray);
	}
	function ArticleCheck(ev) {
		ev.preventDefault();
		if (endValueNum == 1) {
			saveDraft(ev.target)
		}
		else if (endValueNum == 2)
			submitArticle(ev.target)
			

	}
	function ChangeEndButton(ev) {
		ev.preventDefault();
		if (endValueNum === 1) {
			setEndValue("Save event")
			setEndButton("Switch to publish event")
			endValueNum = 2
		}
		else {
			setEndValue("Publish Event")
			setEndButton("Switch to save event")
			endValueNum = 1
		}
	}


	return (
		<div id='ArtC_Header'>

			<header className='Header'>Edit Saved Article</header>
			<div className='backGround'>
				<div className='createArticle-popup-box'>
					<form onSubmit={ArticleCheck}>
					<ImportImgs userData={props} profileState={profileImageState} pageName={page} parentCallBack={callBackFunction} eventID={eventID} userID={props.userID} imageName={imageName} />
						<input type='text' name='title' onChange={changeState} placeholder='Enter article title here' defaultValue={statesSubmitted.title} className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='text' name='hostName' onChange={changeState} placeholder='Enter host/s name here' defaultValue={statesSubmitted.hostName} className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='text' name='streetName' onChange={changeState} placeholder='Enter street name here' defaultValue={address.streetName} className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='text' name='city' onChange={changeState} placeholder='Enter city here' defaultValue={address.city} className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='number' defaultValue={address.houseNumber} onKeyPress={(event) => {
							if (!/[0-9]/.test(event.key)) {
								event.preventDefault();
							}
						}} name='houseNumber' onChange={changeState} placeholder='Enter building number here' className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='number' onKeyPress={(event) => {
							if (!/[0-9]/.test(event.key)) {
								event.preventDefault();
							}
						}} name='maxCapacity' onChange={changeState} placeholder='Enter maximum capacity here' defaultValue={statesSubmitted.maxCapacity} className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='number'
							onKeyPress={(event) => {
								if (!/[0-9]/.test(event.key)) {
									event.preventDefault();
								}
							}} name='phone' onChange={changeState} placeholder='Enter phone number here' defaultValue={contactInfo.phone} className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='text' name='email' onChange={changeState} placeholder='Enter your contact email here' defaultValue={contactInfo.email} className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='text' name='website' onChange={changeState} placeholder='Enter your website url here' defaultValue={contactInfo.website} className='border-ArticleCreation In placeHolderText_articleCreation' />
						<div>Event Start Time:</div>
						<input type='datetime-local' name='startTime' defaultValue={statesSubmitted.startTime} onChange={changeState} placeholder='Enter address line 1 here' className='border-ArticleCreation In' />
						<div>Event End Time:</div>
						<input type='datetime-local' name='endTime' onChange={changeState} defaultValue={statesSubmitted.endTime} placeholder='Enter address line 1 here' className='border-ArticleCreation In' />
						<textarea name='text' className='expandBox' defaultValue={statesSubmitted.text} onChange={changeState}></textarea>
						<label htmlFor="selected_tagBox">Selected Tags:</label>

						<div name='selected_tagBox' className='selected_tagBox'>
							<div className='tagsMapContainer_selected'>
								{[...tempArray].map((tag) => {
									return (
										<div key={tag}>
											<div className='inline-block'>
												<div className='filterBtn_articleCreation inline-block shadow' name={tag} onClick={getTarget}>
													{tag}
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<label htmlFor="unselected_tagBox">Unselected Tags:</label>
						<div name='unselected_tagBox' className='unselected_tagBox'>
							<div className='tagsMapContainer'>
								{tags.map((tag) => {
									return (
										<div key={tag}>
											<div className='inline-block'>
												<div className='filterBtn_articleCreation inline-block shadow' name={tag} onClick={getTarget}>
													{tag}
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className='buttonContainer23'>
							<button className="Dragon42 Shadow" onClick={ChangeEndButton}>{endButton}</button>
							<button className='Dragon43 shadow' type='submit'>
								{endValue}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default EditSavedArticle;
