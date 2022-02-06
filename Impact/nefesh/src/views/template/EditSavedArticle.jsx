import React, { useState, useRef, useEffect } from "react";
import "../../styles/template/EditSavedArticles.css";
import { doc, getDoc, setDoc, addDoc,deleteDoc } from "firebase/firestore";
import { db } from "../../scripts/firebase/config";
import ImportImgs from "./ImportImgs";
import { useParams,useNavigate } from "react-router-dom";
// import ContentEditable from '../../components/contentEditable/ContentEditable'
let i = 0;
let page = "ArticleCreation";

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
	const navigate = useNavigate()
	const [tagsState, setTagsState] = useState([]);
	const inputRef = useRef();
	const [httpUrl, setHttpUrl] = useState("");
	let { eventID } = useParams();
	const [statesSubmitted, setStatesSubmitted] = useState({});
	const [address, setAddress] = useState([]);
	const [contactInfo, setContactInfo] = useState([]);
	const [tags, setTags] = useState([]);
	const [selectedTagArray, setSelectedTagArray] = useState([]);

	useEffect(async () => {
		const eventRef = doc(db, "users", props.userID, "Saved", eventID);
		let eventDB = await getDoc(eventRef);
		const eventDBTemp = eventDB.data();
		const tagsRef = doc(db, 'tagCollection', 'tagDoc');
		getDoc(tagsRef).then((tagsDB) => {
			console.log(tagsDB.data().tagArray);
			setTags(tagsDB.data().tagArray);

		})
		if ("dateAdded" in eventDBTemp) {
			let time = new Date(eventDB.data().dateAdded.seconds * 1000);
			time = convertToDefaultTime(time);

			eventDBTemp.dateAdded = time;
			console.log(eventDBTemp.dateAdded);
		} else {
			eventDBTemp.dateAdded = new Date().toDateInputValue();
		}

		if ("startTime" in eventDBTemp) {
			eventDBTemp.startTime = convertToDefaultTime(new Date(eventDB.data().startTime.seconds * 1000));
		} else {
			eventDBTemp.startTime = new Date().toDateInputValue();
		}
		if ("endTime" in eventDBTemp) {
			eventDBTemp.endTime = convertToDefaultTime(new Date(eventDB.data().endTime.seconds * 1000));
		} else {
			eventDBTemp.endTime = new Date().toDateInputValue();
		}
		console.log(
			new Date(eventDB.data().dateAdded.seconds * 1000).toDateInputValue()
		);
		// console.log(new Date(eventDB.data().endTime.seconds*1000).toDateInputValue())
		setStatesSubmitted(eventDBTemp);
		setAddress(eventDBTemp.address);
		setContactInfo(eventDBTemp.contactInfo);
		setTagsState(eventDBTemp.tags);
	}, []);

	function submitArticle() {
		let {
			title,
			hostName,
			coverImage,
			views,
			startTime,
			endTime,
			maxCapacity,
			article
		} = statesSubmitted;
		coverImage = httpUrl;
		setDoc(doc(db, "events",eventID), {
			title,
			coverImage,
			article,
			hostName,
			address: {
				streetName: statesSubmitted.address.streetName,
				houseNumber: statesSubmitted.address.houseNumber,
				city: statesSubmitted.address.city,
			},
			contactInfo: {
				phone:statesSubmitted.contactInfo.phone,
				email: statesSubmitted.contactInfo.email,
				website: statesSubmitted.contactInfo.website,
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
		deleteDoc(doc(db,"users",props.userID,"Saved",eventID))
		alert("Event Published")
		navigate("/ProfilePage")
	}
	function saveDraft() {
		let {
			title,
			hostName,
			coverImage,
			views,
			startTime,
			endTime,
			maxCapacity,
			article
		} = statesSubmitted;
		coverImage = httpUrl;
		setDoc(doc(db, "users", props.userID, "Saved", eventID), {
			title,
			coverImage,
			article,
			hostName,
			address: {
				streetName: statesSubmitted.address.streetName,
				houseNumber: statesSubmitted.address.houseNumber,
				city: statesSubmitted.address.city,
			},
			contactInfo: {
				phone:statesSubmitted.contactInfo.phone,
				email: statesSubmitted.contactInfo.email,
				website: statesSubmitted.contactInfo.website,
			},
			tags: tagsState,
			creatorUID: props.userID,
			creatorOrg: props.userOrg,
			views,
			dateAdded: new Date(),
			isPublished: false,
			startTime: new Date(startTime),
			endTime: new Date(endTime),
			maxCapacity,
		});
		navigate("/ProfilePage")
		alert("Event Saved!")
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
	function ping() {
		console.log(statesSubmitted);
		console.log(props)
	}
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
		<>
			{statesSubmitted ? (
				<div className="backGround">
					<header className="Header">Edit Article</header>
					<div className="createArticle-popup-box">
						<div>Change your image file here:</div>
						<ImportImgs
							userData={props}
							pageName={page}
							parentCallBack={callBackFunction}
						/>
						<input
							type="text"
							name="title"
							onKeyUp={changeState}
							placeholder="Enter article title here"
							defaultValue={statesSubmitted.title}
							className="shadow In"
						/>
						<input
							type="text"
							name="hostName"
							onKeyUp={changeState}
							placeholder="Enter host/s name here"
							defaultValue={statesSubmitted.hostName}
							className="shadow In"
						/>
						<input
							type="text"
							name="streetName"
							onChange={changeState}
							placeholder="Enter street name here"
							defaultValue={address.streetName}
							className="shadow In"
						/>
						<input
							type="text"
							name="city"
							onChange={changeState}
							placeholder="Enter city here"
							defaultValue={address.city}
							className="shadow In"
						/>
						<input
							type="text"
							name="houseNumber"
							onChange={changeState}
							placeholder="Enter building number here"
							defaultValue={address.houseNumber}
							className="shadow In"
						/>
						<input
							type="number"
							name="maxCapacity"
							onChange={changeState}
							placeholder="Enter maximum capacity here"
							defaultValue={statesSubmitted.maxCapacity}
							className="shadow In"
						/>
						<input
							type="text"
							name="phone"
							onChange={changeState}
							placeholder="Enter phone number here"
							defaultValue={contactInfo.phone}
							className="shadow In"
						/>
						<input
							type="text"
							name="email"
							onChange={changeState}
							placeholder="Enter your contact email here"
							defaultValue={contactInfo.email}
							className="shadow In"
						/>
						<input
							type="text"
							name="website"
							onChange={changeState}
							placeholder="Enter your website url here"
							defaultValue={contactInfo.website}
							className="shadow In"
						/>
						<div>Event Start Time:</div>
						<input
							type="datetime-local"
							name="startTime"
							onChange={changeState}
							defaultValue={statesSubmitted.startTime}
							className="shadow In"
						/>
						<div>Event End Time:</div>
						<input
							type="datetime-local"
							name="endTime"
							onChange={changeState}
							defaultValue={statesSubmitted.endTime}
							className="shadow In"
						/>
						<textarea
							name="article"
							className="expandBox"
							defaultValue={statesSubmitted.article}
							onChange={changeState}></textarea>

						<button onClick={ping}>HIIII</button>
						
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
					</div>
						<div className="buttonContainer23">
							<button className="Dragon42 shadow" onClick={saveDraft}>
								Save Draft
							</button>
							<button className="Dragon43 shadow" onClick={submitArticle}>
								Submit Article
							</button>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default EditSavedArticle;
