import React, { useState, useEffect } from 'react';
import '../../styles/page/ArticleCreation.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../scripts/firebase/config';
import ImportImgs from '../template/ImportImgs';
let i = 0;
let statesSumbitted = { views: 0, startTime: '', endTime: '' };
let page = 'ArticleCreation';

function ArticleCreation(props) {
	const [tagsState, setTagsState] = useState([]);
	//const inputRef = useRef();
	//const [value, setValue] = React.useState('I am edittable');
	const [httpUrl, setHttpUrl] = useState('');

	useEffect(() => {
		document.getElementById('editor').addEventListener('input', inputEvt, false);
	}, []);
	function inputEvt(ev) {
		let parse = 'text';
		statesSumbitted = { ...statesSumbitted, [parse]: ev.target.innerHTML };
	}
	function submitArticle() {
		let { title, name, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSumbitted;
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
			tags: tagsState,
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
	}
	function saveDraft() {
		let { title, name, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSumbitted;
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
			tags: tagsState,
			creatorUID: props.userID,
			creatorOrg: props.userOrg,
			views,
			dateAdded: new Date(),
			isPublished: true,
			startTime: new Date(startTime),
			endTime: new Date(endTime),
			maxCapacity,
		});
	}

	function changeState(ev) {
		let parse = ev.target.name;
		statesSumbitted = { ...statesSumbitted, [parse]: ev.target.value };
	}

	function addTags(ev) {
		ev.preventDefault();
		setTagsState([...tagsState, ev.target[0].value]);
		ev.target[0].value = ''
		console.log(ev.target[0].value);
	}
	function deleteTag(tag) {
		// debugger
		tag.preventDefault();

		let tempArray = [...tagsState];
		tempArray.splice(tag, 1);
		setTagsState(tempArray);
	}
	//function ping() {}

	const callBackFunction = (httpRef) => {
		setHttpUrl(httpRef);
	};

	return (<div id='ArtC_Header'>
			<header className='Header'>Create an Article</header>
			<div className='backGround'>
			<div className='createArticle-popup-box'>
				<ImportImgs userData={props} pageName={page} parentCallBack={callBackFunction} />
				<input type='text' name='title' onKeyUp={changeState} placeholder='Enter article title here' className='border-ArticleCreation In placeHolderText_articleCreation' />
				<input type='text' name='name' onKeyUp={changeState} placeholder='Enter host/s name here' className='border-ArticleCreation In placeHolderText_articleCreation' />
				<input type='text' name='streetName' onChange={changeState} placeholder='Enter street name here' className='border-ArticleCreation In placeHolderText_articleCreation' />
				<input type='text' name='city' onChange={changeState} placeholder='Enter city here' className='border-ArticleCreation In placeHolderText_articleCreation' />
				<input type='number' name='houseNumber' onChange={changeState} placeholder='Enter building number here' className='border-ArticleCreation In placeHolderText_articleCreation' />
				<input type='number' name='maxCapacity' onChange={changeState} placeholder='Enter maximum capacity here' className='border-ArticleCreation In placeHolderText_articleCreation' />
				<input type='number' name='phone' onChange={changeState} placeholder='Enter phone number here' className='border-ArticleCreation In placeHolderText_articleCreation' />
				<input type='text' name='email' onChange={changeState} placeholder='Enter your contact email here' className='border-ArticleCreation In placeHolderText_articleCreation' />
				<input type='text' name='website' onChange={changeState} placeholder='Enter your website url here' className='border-ArticleCreation In placeHolderText_articleCreation' />
				<div>Event Start Time:</div>
				<input type='datetime-local' name='startTime' onChange={changeState} placeholder='Enter address line 1 here' className='border-ArticleCreation In' />
				<div>Event End Time:</div>
				<input type='datetime-local' name='endTime' onChange={changeState} placeholder='Enter address line 1 here' className='border-ArticleCreation In' />
				<div className='expandBox'>
					<div contentEditable='true' className='textarea' name='text' role='textbox' id='editor' placeholder='Enter event description here placeHolderText_articleCreation'></div>
				</div>

				<form className='Tags' onSubmit={addTags}>
					<input type='text' name='tagsInput' placeholder='Enter event tags here' className='tag34 border-ArticleCreation placeHolderText_articleCreation' />
					<button className='submit Button36 shadow' type='submit'>Submit</button>
				</form>
				<div className='tagBox'>
					<div className='tagsMapContainer shadow'>
						{tagsState.map((tag) => {
							i++;
							return (
								<form onSubmit={deleteTag} key={(tag, i)} className='tagForm'>
									<div className='Tag-Content'>{tag}</div>
									<button type='submit' className='Tag-X'>X</button>
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
		</div>
	);
}

export default ArticleCreation;
