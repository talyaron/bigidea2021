import React, { useState, useEffect } from 'react';

import { collection, addDoc, getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../scripts/firebase/config';
import ImportImgs from '../template/ImportImgs';
import { useNavigate } from 'react-router-dom';

let statesSubmitted = { views: 0, startTime: '', endTime: '' };
let page = 'ArticleCreation';

function ArticleCreation(props) {
	import('../../styles/page/ArticleCreation.css');
	const navigate = useNavigate();
	const [httpUrl, setHttpUrl] = useState('');
	const [tags, setTags] = useState([]);
	const [selectedTagArray, setSelectedTagArray] = useState([]);
	let tagsSorted=[]
	useEffect(async () => {
		document.getElementById('editor').addEventListener('input', inputEvt, false);
		// const tagsRef = doc(db, 'tagCollection', 'tagDoc');
		// getDoc(tagsRef).then((tagsDB) => {
		// 	console.log(tagsDB.data().tagArray);
		// 	setTags(tagsDB.data().tagArray);
		// });
		const tagsDB = await getDoc(doc(db, "tagCollection", "tagDoc"))

		tagsSorted = tagsDB.data().tagArray;

		tagsSorted.sort(function (a, b) {
			return a.localeCompare(b); //using String.prototype.localCompare()
		})

		setTags(tagsSorted)
	}, []);
	function inputEvt(ev) {
		let parse = 'text';
		statesSubmitted = { ...statesSubmitted, [parse]: ev.target.innerHTML };
	}

	async function submitArticle(ev) {
		ev.preventDefault();
		let { title, hostName, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSubmitted;
		image = httpUrl;
		try {
			const docRef = await addDoc(collection(db, 'events'), {
				title,
				coverImage: image,
				article: text,
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
			console.log(docRef.id)
			addDoc(collection(db, 'users',props.userID,"Published"), {
				id:docRef.id,
				title,
				coverImage: image,
				article: text,
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
			alert('Event Submitted!')
			navigate('/MainPage')
		} catch (err) {
			console.error(err)

			// create and show the notification
			const showNotification = () => {
				// create a new notification
				const notification = new Notification('Error', {
					body: 'Not All Fields Were Filled',
				});
				// close the notification after 10 seconds
				setTimeout(() => {
					notification.close();
				}, 10 * 1000);
			};
			// show an error message
			const showError = () => {
				// const error = document.querySelector('.error');
				// error.style.display = 'block';
				// error.textContent = 'You blocked the notifications';
				alert('Notifications disabled');
			};
			// check notification permission
			let granted = false;
			if (Notification.permission === 'granted') {
				granted = true;
			} else if (Notification.permission !== 'denied') {
				let permission = await Notification.requestPermission();
				granted = permission === 'granted' ? true : false;
			}
			// show notification or error
			granted ? showNotification() : showError();
		}
	}
	function saveDraft() {
		let { title, hostName, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSubmitted;
		image = httpUrl;
		addDoc(collection(db, "users", props.userID, "Saved"), {
			title,
			coverImage: image,
			article: text,
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
		});
		alert('Event Saved!')
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
			tempArray.push(temp);
		}
		setSelectedTagArray(tempArray);

	}
	return (
		<div id='ArtC_Header'>
			<header className='Header'>Create an Article</header>
			<div className='backGround'>
				<div className='createArticle-popup-box'>
					<form onSubmit={submitArticle}>
					<ImportImgs userData={props} pageName={page} parentCallBack={callBackFunction} />
					<input type='text' name='title' onChange={changeState} placeholder='Enter article title here' className='border-ArticleCreation In placeHolderText_articleCreation' />
					<input type='text' name='hostName' onChange={changeState} placeholder='Enter host/s name here' className='border-ArticleCreation In placeHolderText_articleCreation' />
					<input type='text' name='streetName' onChange={changeState} placeholder='Enter street name here' className='border-ArticleCreation In placeHolderText_articleCreation' />
					<input type='text' name='city' onChange={changeState} placeholder='Enter city here' className='border-ArticleCreation In placeHolderText_articleCreation' />
					<input type='number' onKeyPress={(event) => {
						if (!/[0-9]/.test(event.key)) {
							event.preventDefault();
						}
					}} name='houseNumber' onChange={changeState} placeholder='Enter building number here' className='border-ArticleCreation In placeHolderText_articleCreation' />
					<input type='number' onKeyPress={(event) => {
						if (!/[0-9]/.test(event.key)) {
							event.preventDefault();
						}
					}} name='maxCapacity' onChange={changeState} placeholder='Enter maximum capacity here' className='border-ArticleCreation In placeHolderText_articleCreation' />
					<input type='number'
						onKeyPress={(event) => {
							if (!/[0-9]/.test(event.key)) {
								event.preventDefault();
							}
						}} name='phone' onChange={changeState} placeholder='Enter phone number here' className='border-ArticleCreation In placeHolderText_articleCreation' />
					<input type='text' name='email' onChange={changeState} placeholder='Enter your contact email here' className='border-ArticleCreation In placeHolderText_articleCreation' />
					<input type='text' name='website' onChange={changeState} placeholder='Enter your website url here' className='border-ArticleCreation In placeHolderText_articleCreation' />
					<div>Event Start Time:</div>
					<input type='datetime-local' name='startTime' onChange={changeState} placeholder='Enter address line 1 here' className='border-ArticleCreation In' />
					<div>Event End Time:</div>
					<input type='datetime-local' name='endTime' onChange={changeState} placeholder='Enter address line 1 here' className='border-ArticleCreation In' />
					<div className='expandBox'>
						<div contentEditable='true' className='textarea' name='text' role='textbox' id='editor' placeholder='Enter event description here placeHolderText_articleCreation'></div>
					</div>
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
						<button className='Dragon42 shadow' onClick={saveDraft}>
							Save Draft
						</button>
						<button className='Dragon43 shadow' type='submit'>
							Submit Article
						</button>
					</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ArticleCreation;
