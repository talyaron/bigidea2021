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
let statesSumbitted={title:"",name:"",date:"",text:"",isPublished:"",image:"",views:0}
function ArticleCreation({ userID }) {
   
    const [isOpen, setIsOpen] = useState(false);

 
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
        
       

    }
function ping(){
    console.log(statesSumbitted)
}
function submitArticle(){
    addDoc(collection(db, "events"), {
        Title: title,
        Date: date,
        Image: image,
        Text: text,
        Organization: name,
        creator: userID,
        views: views,
        dateAdded:dateAdded,
        isPublished:true
    })
}
function saveDraft(){
    console.log(statesSumbitted)
    const {title,name,date,text,image,views} = statesSumbitted;

    addDoc(collection(db, "events"), {
        title,
        date,
        image,
        text,
        organization: name,
        creator: userID,
        views,
        dateAdded:new Date(),
        isPublished:false
    })

}
// function createRandomId(){
//     let guid = () => {
//         let s4 = () => {
//             return Math.floor((1 + Math.random()) * 0x10000)
//                 .toString(16)
//                 .substring(1);
//         }
//         //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
//         return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
//     }
// }
function changeState(ev){
    let parse=ev.target.name
    statesSumbitted={...statesSumbitted,[parse]:ev.target.value}
}

    return <div>
        

       <div className='popup-box'>
            <b>Input information here</b>
            <br />

                <input type="text" name="title" onKeyUp={changeState}  placeholder="Enter article title here" />
                <br />
                <input type="text" name="name"  onKeyUp={changeState} placeholder="Enter name here" />
                <br />
                <input type="text" name="text" onKeyUp={changeState} placeholder="Enter text here" />
                <br />
                <input type="text" name="image" onKeyUp={changeState} placeholder="Enter cover image url here" />
                <br />
                <input type="date" name="date" onChange={changeState} placeholder="Enter date here" />
                <br />
                <input type="number" name="views" onKeyUp={changeState} placeholder='Views (delete me later)' />
                <button onClick={ping}></button>
                <button onClick={saveDraft}>Save Draft</button>
                <button onClick={submitArticle}>Submit Article</button>

            
        </div>
    </div>
}

export default ArticleCreation;