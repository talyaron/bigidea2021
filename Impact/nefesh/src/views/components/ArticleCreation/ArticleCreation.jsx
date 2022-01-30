import React, { useState, useRef, useEffect } from 'react';
import "./ArticleCreation.css"
import { collection, addDoc, arrayRemove } from "firebase/firestore"
import { db } from "../../../functions/firebase/config"
import ImportImgs from '../ImportImgs/ImportImgs'
let i = 0
let statesSumbitted = { views: 0, startTime: "", endTime: "" }
let page = 'ArticleCreation'



function ArticleCreation(props) {

    const [tagsState, setTagsState] = useState([])
    const inputRef = useRef();
    const [value, setValue] = React.useState("I am edittable");

    useEffect(() => {
        document.getElementById("editor").addEventListener("input", inputEvt, false);
    }, [])
    function inputEvt(ev) {
        let parse = "text"
        statesSumbitted = { ...statesSumbitted, [parse]: ev.target.innerHTML }
    }
    function submitArticle() {
        const { title, name, date, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSumbitted;
        addDoc(collection(db, "events"), {
            title,
            date,
            coverImage: image,
            article: text,
            hostName: name,
            address: {
                streetName: streetName,
                houseNumber: houseNumber,
                city: city
            },
            contactInfo: {
                phone,
                email,
                website
            },
            tags: tagsState,
            creatorUID: props.userID,
            creatorOrg: props.userOrg,
            views,
            dateAdded: new Date(),
            isPublished: true,
            startTime,
            endTime,
            maxCapacity,
            currentCapacity: maxCapacity
        })
    }
    function saveDraft() {
        const { title, name, date, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity, phone, website, email } = statesSumbitted;

        addDoc(collection(db, "events"), {
            title,
            date,
            coverImage: image,
            article: text,
            hostName: name,
            address: {
                streetName: streetName,
                houseNumber: houseNumber,
                city: city
            },
            contactInfo: {
                phone,
                email,
                website
            },
            tags: tagsState,
            creatorUID: props.userID,
            creatorOrg: props.userOrg,
            views,
            dateAdded: new Date(),
            isPublished: true,
            startTime,
            endTime,
            maxCapacity
        })

    }

    function changeState(ev) {
        let parse = ev.target.name
        statesSumbitted = { ...statesSumbitted, [parse]: ev.target.value }
    }

    function addTags(ev) {
        ev.preventDefault()
        setTagsState([...tagsState, { id: i, tag: ev.target[0].value }])
        i++
        console.log(ev.target[0].value)
    }
    function deleteTag(tag) {
        // debugger
        tag.preventDefault()

        let tempArray = [...tagsState]
        tempArray.splice(tag, 1)
        setTagsState(tempArray)
    }
    return <div className='backGround'>
        <header className='Header'>Create an Article</header>
        <div className='createArticle-popup-box'>
            {/* <b className='infoTitle'>Input information here</b>  */}
            <ImportImgs userData={props} pageName={page}/>
            <input type="text" name="title" onKeyUp={changeState} placeholder="Enter article title here"   className='shadow'/>
            <input type="text" name="name" onKeyUp={changeState} placeholder="Enter host/s name here"  className='shadow'/>
            <input type="text" name="streetName" onChange={changeState} placeholder="Enter street name here" className='shadow'/>
            <input type="text" name="city" onChange={changeState} placeholder="Enter city here"  className='shadow'/>
            <input type="text" name="houseNumber" onChange={changeState} placeholder="Enter building number here" className='shadow'/>
            <input type="number" name="maxCapacity" onChange={changeState} placeholder="Enter maximum capacity here"  className='shadow'/>
            <input type="text" name="phone" onChange={changeState} placeholder="Enter phone number here"  className='shadow'/>
            <input type="text" name="email" onChange={changeState} placeholder="Enter your contact email here"  className='shadow'/>
            <input type="text" name="website" onChange={changeState} placeholder="Enter your website url here" className='shadow'/>
            <div>Event Date:</div>
            <input type="date" name="date" onChange={changeState} placeholder="Enter date here" className='shadow' />
            <div>Event Start Time:</div>
            <input type="time" name="startTime" onChange={changeState} placeholder="Enter address line 1 here" className='shadow' />
            <div>Event End Time:</div>
            <input type="time" name="endTime" onChange={changeState} placeholder="Enter address line 1 here" className='shadow' />
            <div className="expandBox"><div contentEditable="true"  className="textarea" name="text" role="textbox" id="editor"  placeholder='Enter event description here'></div></div>




            <form className='Tags' onSubmit={addTags}>
                <input type="text" name="tagsInput" placeholder="Enter event tags here" />
                <button className='submit Button' type="submit">Submit</button>
            </form>
            <div className='tagBox'>
                <div className="tagsMapContainer shadow">
                    {tagsState.map(tag => {
                        return (
                            <form onSubmit={deleteTag} key={tag.id} className='tagForm'>
                                <div className='nameTag'>{tag.tag}</div>
                                <button type="submit">X</button>
                            </form>
                        )
                    })
                    }
                </div>
            </div>
            <button className='Dragon42 shadow' onClick={saveDraft}>Save Draft</button>
            <button className='Dragon43 shadow' onClick={submitArticle}>Submit Article</button>
        </div>
    </div>
}

export default ArticleCreation;