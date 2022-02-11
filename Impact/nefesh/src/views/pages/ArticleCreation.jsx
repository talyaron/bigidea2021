import React, { useState, useEffect } from 'react';

import { collection, addDoc, getDoc, doc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../../scripts/firebase/config';
import ImportImgs from '../template/ImportImgs';
import { useNavigate } from 'react-router-dom';

let statesSubmitted = { views: 0, startTime: '', endTime: '' };
let page = 'ArticleCreation';
let endValueNum = 1;
function ArticleCreation(props) {
	import('../../styles/page/ArticleCreation.css');
	const navigate = useNavigate();
	const [httpUrl, setHttpUrl] = useState('');
	const [tags, setTags] = useState([]);
	const [selectedTagArray, setSelectedTagArray] = useState([]);
	let tagsSorted = [];
	const [documentReference, setDocumentReference] = useState('');
	const [endValue, setEndValue] = useState('Submit Article to Main Page');
	const [endButton, setEndButton] = useState('Change to Save Event privately to your Profile Page');
	const [imageName, setImageName] = useState('null');
	const [profileImageState, setProfileImageState] = useState('creation');
	useEffect(() => {
		async function getData() {
			setDocumentReference(Date.now().toString(36) + Math.random().toString(36).substr(2));
			document.getElementById('editor').addEventListener('input', inputEvt, false);
			const tagsDB = await getDoc(doc(db, 'tagCollection', 'tagDoc'));
			tagsSorted = tagsDB.data().tagArray;
			tagsSorted.sort(function (a, b) {
				return a.localeCompare(b); //using String.prototype.localCompare()
			});
			setTags(tagsSorted);
		}
		getData();
	}, []);
	function inputEvt(ev) {
		let parse = 'text';
		statesSubmitted = { ...statesSubmitted, [parse]: ev.target.innerHTML };
	}

	async function submitArticle(ev) {
		let { title, hostName, text, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSubmitted;
		try {
			const imgRef = await getDoc(doc(db, 'users', props.userID, 'UploadedImgs', documentReference));
			setImageName(imgRef.data().setImageName);
			await setDoc(doc(db, 'events', documentReference), {
				title,
				coverImage: httpUrl,
				imageName,
				text,
				hostName,
				address: {
					streetName: streetName,
					houseNumber: houseNumber,
					city: city,
				},
				contactInfo: {
					phone,
					email,
					website,
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
				currentCapacity: maxCapacity,
			});
			await setDoc(doc(db, 'users', props.userID, 'Published', documentReference), {
				id: documentReference,
				title,
				coverImage: httpUrl,
				text,
				imageName,
				hostName,
				address: {
					streetName: streetName,
					houseNumber: houseNumber,
					city: city,
				},
				contactInfo: {
					phone,
					email,
					website,
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
				currentCapacity: maxCapacity,
			});
			alert('Event Submitted!');
			navigate('../ProfilePage');
		} catch (err) {
			console.error(err);
			alert('Not all fields had inputs');
		}
	}
	function saveDraft() {
		try {
			let { title, hostName, text, views, startTime, endTime, maxCapacity } = statesSubmitted;
			setDoc(doc(db, 'users', props.userID, 'Saved', documentReference), {
				title,
				coverImage: httpUrl,
				text,
				hostName,
				address: {
					streetName: statesSubmitted.streetName,
					houseNumber: statesSubmitted.houseNumber,
					city: statesSubmitted.city,
				},
				contactInfo: {
					phone: statesSubmitted.phone,
					email: statesSubmitted.email,
					website: statesSubmitted.website,
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
				id: documentReference,
			});
			alert('Event Saved!');
			navigate('/ProfilePage');
		} catch (err) {
			console.error(err);
			alert('Not all fields had inputs');
		}
	}

	function changeState(ev) {
		let parse = ev.target.name;
		statesSubmitted = { ...statesSubmitted, [parse]: ev.target.value };
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
			if (tempArray.length >= 6) {
				alert('A maximum of five tags can be selected at once.');
			} else {
				tempArray.push(temp);
			}
		}
		if (temp === 'CertifiedKosher' && tempArray.includes('CertifiedKosher') === true) {
			if (window.confirm('Please confirm that all of the food at your event is certified kosher/hechshered')) {
			} else {
				const index = tempArray.indexOf('CertifiedKosher');
				tempArray.splice(index, 1);
			}
		}

		setSelectedTagArray(tempArray);
	}
	function ArticleCheck(ev) {
		ev.preventDefault();
		if (endValueNum == 1) {
			submitArticle(ev.target);
		} else if (endValueNum == 2) saveDraft(ev.target);
	}
	function ChangeEndButton(ev) {
		ev.preventDefault();
		if (endValueNum == 1) {
			setEndValue('Save event to private Profile Area');
			setEndButton('Publish to Main Page instead');
			endValueNum = 2;
		} else {
			setEndValue('Submit Event to Main Page');
			setEndButton('Save Event privately to your Profile instead');
			endValueNum = 1;
		}
	}

	return (
		<div id='ArtC_Header'>
			<header className='Header'>Create an Event</header>
			<div className='backGround'>
				<div className='createArticle-popup-box'>
					<form onSubmit={ArticleCheck}>
						<ImportImgs userData={props} pageName={page} profileState={profileImageState} parentCallBack={callBackFunction} eventID={documentReference} userID={props.userID} imageName={imageName} />
						<input type='text' name='title' onChange={changeState} placeholder='Enter article title here' className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='text' name='hostName' onChange={changeState} placeholder='Enter host/s name here' className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='text' name='streetName' onChange={changeState} placeholder='Enter street name here' className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='text' name='city' onChange={changeState} placeholder='Enter city here' className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input
							type='number'
							onKeyPress={(event) => {
								if (!/[0-9]/.test(event.key)) {
									event.preventDefault();
								}
							}}
							name='houseNumber'
							onChange={changeState}
							placeholder='Enter building number here'
							className='border-ArticleCreation In placeHolderText_articleCreation'
						/>
						<input
							type='number'
							onKeyPress={(event) => {
								if (!/[0-9]/.test(event.key)) {
									event.preventDefault();
								}
							}}
							name='maxCapacity'
							onChange={changeState}
							placeholder='Enter maximum capacity here'
							className='border-ArticleCreation In placeHolderText_articleCreation'
						/>
						<input
							type='number'
							onKeyPress={(event) => {
								if (!/[0-9]/.test(event.key)) {
									event.preventDefault();
								}
							}}
							name='phone'
							onChange={changeState}
							placeholder='Enter phone number here'
							className='border-ArticleCreation In placeHolderText_articleCreation'
						/>
						<input type='text' name='email' onChange={changeState} placeholder='Enter your contact email here' className='border-ArticleCreation In placeHolderText_articleCreation' />
						<input type='text' name='website' onChange={changeState} placeholder='Enter your website url here' className='border-ArticleCreation In placeHolderText_articleCreation' />
						<div>Event Start Time:</div>
						<input type='datetime-local' name='startTime' onChange={changeState} placeholder='Enter address line 1 here' className='border-ArticleCreation In' />
						<div>Event End Time:</div>
						<input type='datetime-local' name='endTime' onChange={changeState} placeholder='Enter address line 1 here' className='border-ArticleCreation In' />
						<div className='expandBox'>
							<div contentEditable='true' className='textarea' name='text' role='textbox' id='editor' placeholder='Enter event description here placeHolderText_articleCreation'></div>
						</div>
						<label htmlFor='selected_tagBox'>Selected Tags:</label>
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
						<label htmlFor='unselected_tagBox'>Unselected Tags:</label>
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

						{/* <input type="checkbox" name="publishArticleCheckbox" id="Publish"></input>
						<label htmlFor="publishArticleCheckbox">Publish Article to Main Page!</label> */}
						<div className='buttonContainer23'>
							<button className='Dragon42 Shadow' onClick={ChangeEndButton} name='switch'>
								{endButton}
							</button>
							<button className='Dragon43 shadow' type='submit' name='submit'>
								{endValue}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ArticleCreation;
