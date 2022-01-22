import React, { useState } from 'react';
import './ArticleCreation.css';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../functions/firebase/config"

let statesSumbitted = { title: "", name: "", date: "", text: "", isPublished: "", image: "", views: 0 }
function ArticleCreation(props ) {

    function submitArticle() {
        const { title, name, date, text, image, views } = statesSumbitted;
        addDoc(collection(db, "events"), {
            title,
            date,
            image,
            text,
            creator: props.userID,
            views,
            name,
            dateAdded: new Date(),
            isPublished: true
        })
    }
    function saveDraft() {
        const { title, name, date, text, image, views } = statesSumbitted;

        addDoc(collection(db, "events"), {
            title,
            date,
            image,
            text,

            creator: props.userID,
            name,
            views,
            dateAdded: new Date(),
            isPublished: false
        })

    }

    function changeState(ev) {
        let parse = ev.target.name
        statesSumbitted = { ...statesSumbitted, [parse]: ev.target.value }
    }
    function ping(){
        console.log(props)
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
            <input type="number" name="views" onKeyUp={changeState} placeholder='Views (delete me later)' />
            <button onClick={saveDraft}>Save Draft</button>
            <button onClick={ping}>Hi</button>
            <button onClick={submitArticle}>Submit Article</button>


        </div>
    </div>
}

export default ArticleCreation;