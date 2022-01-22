import React, { useState } from 'react';
import './ArticleCreation.css';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../functions/firebase/config"
let i=0
let statesSumbitted = { views: 0, startTime: "", endTime: "" }
function ArticleCreation(props) {
    const [tagsState, setTagsState] = useState([])
    function submitArticle() {
        const { title, name, date, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity } = statesSumbitted;
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
        const { title, name, date, text, image, views, streetName, houseNumber, city, startTime, endTime, maxCapacity } = statesSumbitted;

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
    function ping() {
        console.log(tagsState)
    }
    function addTags(ev) {
        ev.preventDefault()
        setTagsState([...tagsState,{id:i,tag:ev.target[0].value}])
        i++
    }
    return <div>
        <div className='popup-box'>
            <b>Input information here</b>
            <br />

            <input type="text" name="title" onKeyUp={changeState} placeholder="Enter article title here" />
            <br />
            <input type="text" name="name" onKeyUp={changeState} placeholder="Enter host/s name here" />
            <br />
            <input type="text" name="text" onKeyUp={changeState} placeholder="Enter text here" />
            <br />
            <input type="text" name="image" onKeyUp={changeState} placeholder="Enter cover image url here" />
            <br />
            <input type="date" name="date" onChange={changeState} placeholder="Enter date here" />
            <br />
            <input type="text" name="streetName" onChange={changeState} placeholder="Enter street name here" />
            <br />
            <input type="text" name="houseNumber" onChange={changeState} placeholder="Enter building number here" />
            <br />
            <input type="text" name="city" onChange={changeState} placeholder="Enter city here" />
            <br />
            <div>Start Time</div>
            <input type="time" name="startTime" onChange={changeState} placeholder="Enter address line 1 here" />
            <div>End Time</div>
            <input type="time" name="endTime" onChange={changeState} placeholder="Enter address line 1 here" />
            <br />
            <input type="number" name="maxCapacity" onChange={changeState} placeholder="Enter maximum capacity here" />
            <br />
            <form onSubmit={addTags}>
                <input type="text" name="tagsInput" placeholder="Enter tag here" />
                <button type="submit">Submit</button>
            </form>
            <div className="tagsMapContainer">
                {tagsState.map(tag => {
                    return (
                        <form>
                        <div key={tag.id}className='nametag'>{tag.tag}
                        </div>
                        </form>
                    )
                })
                }
            </div>
            <button onClick={saveDraft}>Save Draft</button>
            <button onClick={ping}>Hi</button>
            <button onClick={submitArticle}>Submit Article</button>


        </div>
    </div>
}

export default ArticleCreation;