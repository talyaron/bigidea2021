import React, { useState, useRef, useEffect } from 'react';
import './EditSavedArticles.css';
import { doc, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../../../functions/firebase/config';
import ImportImgs from '../../components/ImportImgs/ImportImgs';
import { useParams } from "react-router-dom";
let i = 0;
let page = 'ArticleCreation';

function EditSavedArticles(props) {
	const [tagsState, setTagsState] = useState([]);
	const inputRef = useRef();
	const [httpUrl, setHttpUrl] = useState('');
	let { eventID } = useParams();
	const [statesSubmitted, setStatesSubmitted] = useState({})
	useEffect(async () => {
		document.getElementById('editor').addEventListener('input', inputEvt, false);
		const eventRef = doc(db, "users", props.userID, "Saved", eventID)
		let eventDB = await getDoc(eventRef)
		setStatesSubmitted(eventDB.data())

	}, []);
	function inputEvt(ev) {
		let parse = 'text';
		setStatesSubmitted({ ...statesSubmitted, [parse]: ev.target.innerHTML });
	}
	function submitArticle() {
		let { title, name, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSubmitted;
		image = httpUrl
		addDoc(collection(db, 'events'), {
			title,
			coverImage: image,
			article: text,
			hostName: name,
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
			types: tagsState,
			creatorUID: props.userID,
			creatorOrg: props.userOrg,
			views,
			dateAdded: new Date(),
			isPublished: true,
			startTime: new Date(startTime),
			endTime: new Date(startTime),
			maxCapacity,
			currentCapacity: maxCapacity,
		});
	}
	function saveDraft() {
		let { title, name, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSubmitted;
		image = httpUrl
		addDoc(collection(db, 'users', props.userID, "Saved"), {
			// title,
			// coverImage: image,
			// article: text,
			// hostName: name,
			// address: {
			// 	streetName: streetName,
			// 	houseNumber: houseNumber,
			// 	city: city,
			// },
			// contactInfo: {
			// 	phone,
			// 	email,
			// 	website,
			// },
			// types: tagsState,
			// creatorUID: props.userID,
			// creatorOrg: props.userOrg,
			// views,
			// dateAdded: new Date(),
			// isPublished: true,
			// startTime: new Date(startTime),
			// endTime: new Date(endTime),
			// maxCapacity,
		});
	}

	function changeState(ev) {
		let parse = ev.target.name;
		setStatesSubmitted({ ...statesSubmitted, [parse]: ev.target.value });
	}

	function addTags(ev) {
		ev.preventDefault();
		setTagsState([...tagsState, ev.target[0].value]);
		console.log(ev.target[0].value);
	}
	function deleteTag(tag) {
		// debugger
		tag.preventDefault();

		let tempArray = [...tagsState];
		tempArray.splice(tag, 1);
		setTagsState(tempArray);
	}
	
	const callBackFunction = (httpRef) => {
		setHttpUrl(httpRef);
	};

	return (
		<div className='backGround'>
			{/* <button onClick={ping}>Hiii</button> */}
			<header className='Header'>Create an Article</header>
			<div className='createArticle-popup-box'>
				<ImportImgs userData={props} pageName={page} parentCallBack={callBackFunction} />
				<input type='text' name='title' onKeyUp={changeState} placeholder='Enter article title here' defaultValue={statesSubmitted.title} className='shadow In' />
				<input type='text' name='name' onKeyUp={changeState} placeholder='Enter host/s name here' value="hii" className='shadow In' />
				<input type='text' name='streetName' onChange={changeState} placeholder='Enter street name here' className='shadow In' />
				<input type='text' name='city' onChange={changeState} placeholder='Enter city here' className='shadow In' />
				<input type='text' name='houseNumber' onChange={changeState} placeholder='Enter building number here' className='shadow In' />
				<input type='number' name='maxCapacity' onChange={changeState} placeholder='Enter maximum capacity here' className='shadow In' />
				<input type='text' name='phone' onChange={changeState} placeholder='Enter phone number here' className='shadow In' />
				<input type='text' name='email' onChange={changeState} placeholder='Enter your contact email here' className='shadow In' />
				<input type='text' name='website' onChange={changeState} placeholder='Enter your website url here' className='shadow In' />
				<div>Event Start Time:</div>
				<input type='datetime-local' name='startTime' onChange={changeState} placeholder='Enter address line 1 here' className='shadow In' />
				<div>Event End Time:</div>
				<input type='datetime-local' name='endTime' onChange={changeState} placeholder='Enter address line 1 here' className='shadow In' />
				<div className='expandBox'>
					<div contentEditable='true' className='textarea' name='text' role='textbox' id='editor' placeholder='Enter event description here'></div>
				</div>

				<form className='Tags' onSubmit={addTags}>
					<input type='text' name='tagsInput' placeholder='Enter event tags here' className='tag34 shadow' />
					<button className='submit Button36 shadow' type='submit'>
						Submit
					</button>
				</form>
				<div className='tagBox'>
					<div className='tagsMapContainer shadow'>
						{tagsState.map((tag) => {
							i++;
							return (
								<form onSubmit={deleteTag} key={(tag, i)} className='tagForm'>
									<div className='nameTag'>{tag}</div>
									<button type='submit'>X</button>
								</form>
							);
						})}
					</div>
				</div>
				<div className='buttonContainer23'>
					<button className='Dragon42 shadow' onClick={saveDraft}>
						Save Draft
					</button>
					<button className='Dragon43 shadow' onClick={submitArticle}>
						Submit Article
					</button>
				</div>
			</div>
		</div>
	);
}

export default EditSavedArticles;
