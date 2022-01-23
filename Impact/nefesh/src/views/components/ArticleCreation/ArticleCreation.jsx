import React, { useState } from 'react';
import "./ArticleCreation.css"
import { collection, addDoc, arrayRemove } from "firebase/firestore"
import { db } from "../../../functions/firebase/config"
let i = 0
let statesSumbitted = { views: 0, startTime: "", endTime: "" }
function ArticleCreation(props) {
    const [tagsState, setTagsState] = useState([])
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
    function deleteTag(tag){
        // debugger
        tag.preventDefault()
        
        let tempArray=[...tagsState]
        tempArray.splice(tag,1)
        setTagsState(tempArray)
    }
    return <div>
        <div className='popup-box'>

            <b className='infoTitle'>Input information here</b>
            <input type="text" name="title" onKeyUp={changeState} placeholder="Enter article title here" className='textBasic inputTitle'/>

            <input type="text" name="name" onKeyUp={changeState} placeholder="Enter host/s name here" className='textBasic hostName'/>

            <input type="text" name="image" onKeyUp={changeState} placeholder="Enter cover image url here" className='textBasic imgUrl'/>

            <input type="text" name="streetName" onChange={changeState} placeholder="Enter street name here" className='textBasic street'/>
            <input type="text" name="city" onChange={changeState} placeholder="Enter city here" className='textBasic city'/>

            <input type="text" name="houseNumber" onChange={changeState} placeholder="Enter building number here" className='textBasic building'/>
            <input type="number" name="maxCapacity" onChange={changeState} placeholder="Enter maximum capacity here" className='textBasic maxCap'/>

            <input type="text" name="phone" onChange={changeState} placeholder="Enter phone number here" className='textBasic phoneNum'/>
            <input type="text" name="email" onChange={changeState} placeholder="Enter your contact email here" className='textBasic email'/>

            <input type="text" name="website" onChange={changeState} placeholder="Enter your website url here" className='textBasic webUrl'/>

            <input type="date" name="date" onChange={changeState} placeholder="Enter date here" className='textBasic date'/>           
            <div className='timeData'>
                <div>Start Time</div>
                <input type="time" name="startTime" onChange={changeState} placeholder="Enter address line 1 here" className='textBasic'/>
                <div>End Time</div>
                <input type="time" name="endTime" onChange={changeState} placeholder="Enter address line 1 here" className='textBasic'/>
            </div>

            <input type="text" name="text" onKeyUp={changeState} placeholder="Enter text here" className='textBasic description'/>

            <form className='Tags' onSubmit={addTags}>
                <input type="text" name="tagsInput" placeholder="Enter tag here" className='textBasic'/>
                <button className='submitButton' type="submit">Submit</button>
            </form>
            

            <div className="tagsMapContainer">
                {tagsState.map(tag => {
                    return (
                        <form onSubmit={deleteTag} key={tag.id}>
                            <div className='nametag'>{tag.tag}</div>
                            <button type="submit">X</button>
                        </form>
                    )
                })
                }
            </div>
            <button className='submitButton' onClick={saveDraft}>Save Draft</button>
            <button className='submitButton' onClick={submitArticle}>Submit Article</button>


        </div>
    </div>
}

export default ArticleCreation;