import React, { useState, useEffect } from 'react';

import { collection, addDoc, getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../scripts/firebase/config';
import ImportImgs from '../template/ImportImgs';
import { useNavigate } from 'react-router-dom';

let statesSubmitted = { views: 0, startTime: '', endTime: '' };
let page = 'ArticleCreation';
let endValueNum=1
function ArticleCreation(props) {
	import('../../styles/page/ArticleCreation.css');
	const navigate = useNavigate();
	const [httpUrl, setHttpUrl] = useState('');
	const [tags, setTags] = useState([]);
	const [selectedTagArray, setSelectedTagArray] = useState([]);
	
	let tagsSorted=[]
	const [endValue,setEndValue]=useState("Submit Article to Main Page")
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
			alert("Not all fields had inputs")
		}
	}
	function saveDraft() {
		let { title, hostName, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSubmitted;
		image = httpUrl;
		try{ const docref=addDoc(collection(db, "users", props.userID, "Saved"), {
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
		navigate("../ProfilePage")
	} catch(err){
		console.error(err)
		alert("Not all fields had inputs")
	}


	}
function Ping(){
	console.log(endValue)
	console.log(endValueNum)
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
function ArticleCheck(ev){
	ev.preventDefault();
	if (endValueNum==1){
		submitArticle(ev.target)
	}
	else if (endValueNum==2)
	saveDraft(ev.target)

}
function ChangeEndButton(ev){
	ev.preventDefault();
	console.log("runs")
	if (endValueNum==1){
		console.log("true")
		setEndValue("Save event to private Profile Area")
		endValueNum=2
	}
	else {
		console.log("false")
		setEndValue("Submit Event to Main Page")
		endValueNum=1
	}
}


	
	return (
		<div id='ArtC_Header'>
			<button onClick={Ping}>HIIIII</button>
			<header className='Header'>Create an Article</header>
			<div className='backGround'>
				<div className='createArticle-popup-box'>
					<form onSubmit={ArticleCheck}>
					
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
						<button onClick={ChangeEndButton}>Save Article privately instead</button>
						{/* <input type="checkbox" name="publishArticleCheckbox" id="Publish"></input>
						<label htmlFor="publishArticleCheckbox">Publish Article to Main Page!</label> */}
					<div className='buttonContainer23'>
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

export default ArticleCreation;
