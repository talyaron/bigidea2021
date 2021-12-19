import React, { useState } from 'react';
import './ArticleCreation.css';
import {doc, setDoc} from "firebase/firestore"
import {db} from "../../../functions/firebase/config"
let role = "superAdmin"
function ArticleCreation({userID}) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")

    
    const togglePopup = () => {
        setIsOpen(!isOpen);


    }
    function handleCreateArticle(ev) {
        ev.preventDefault();
        let title = ev.target.elements.title.value;
        let name = ev.target.elements.name.value;
        let text = ev.target.elements.text.value;
        let image = ev.target.elements.image.value;
        let date = ev.target.elements.date.value;
        
        console.log("clicked")
        setDoc(doc(db,"events",title),{
            Title:title,
            Date:date,
            Image:image,
            Text:text,
            Organization:name,
            Creator:userID
        })
        
    }




    return <div>
        <div>{title}</div>
        <div>{name}</div>
        <div>{text}</div>
        <div>{image}</div>
        <div>{date}</div>
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
                <input type="text" name="date" placeholder="Enter date here" />
                <br />
                <button type="submit">Create Article</button>
            </form>


            <button onClick={togglePopup}>Close</button>
        </div>
            : null
        }
    </div>
}

export default ArticleCreation;