import React, { useState } from 'react';
import './ArticleCreation.css';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../functions/firebase/config"
let role = "superAdmin"
let title
let name
let text
let image
let date
let views
let dateAdded
function ArticleCreation({ userID }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [title, setTitle] = useState("")
    // const [name, setName] = useState("")
    // const [text, setText] = useState("")
    // const [image, setImage] = useState("")
    // const [date, setDate] = useState("")


    const togglePopup = () => {
        setIsOpen(!isOpen);


    }
    function handleCreateArticle(ev) {
        ev.preventDefault();
        title = ev.target.elements.title.value;
        name = ev.target.elements.name.value;
        text = ev.target.elements.text.value;
        image = ev.target.elements.image.value;
        date = ev.target.elements.date.value;
        views = ev.target.elements.views.value
        dateAdded = new Date();
        dateAdded.toDateString()
        console.log("clicked")
        console.log(userID)
        addDoc(collection(db, "events"), {
            Title: title,
            Date: date,
            Image: image,
            Text: text,
            Organization: name,
            creator: userID,
            views: views,
            dateAdded:dateAdded
        })
       

    }


function createRandomId(){
    let guid = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}

    return <div>
        <div>{title}</div>
        <div>{name}</div>
        <div>{text}</div>
        <div>{image}</div>
        <div>{date}</div>
        <button onClick={createRandomId}>Hi There ping</button>
        <input
            type="button"
            value="Click to Create Article"
            onClick={togglePopup}
        />

        {isOpen ? <div className='popup-box'>
            <b>Input information here</b>
            <br />
            <form onSubmit={handleCreateArticle}>
                <input type="text" name="title" placeholder="Enter article title here" />
                <br />
                <input type="text" name="name" placeholder="Enter name here" />
                <br />
                <input type="text" name="text" placeholder="Enter text here" />
                <br />
                <input type="text" name="image" placeholder="Enter cover image url here" />
                <br />
                <input type="date" name="date" placeholder="Enter date here" />
                <br />
                <input type="number" name="views" placeholder='Views (delete me later)' />
                <button type="submit">Create Article</button>
            </form>

            
            <button onClick={togglePopup}>Close</button>
        </div>
            : null
        }
    </div>
}

export default ArticleCreation;