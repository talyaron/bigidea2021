import './eventPage.css';
import MainPage from '../../pages/MainPage/MainPage';
import React, { Component, useState, useEffect } from 'react';
import { collection, setDoc, getDoc, doc } from "firebase/firestore"
import { db } from "../../../functions/firebase/config"
import { BrowserRouter, Routes, Route, Link,useNavigate, useParams } from 'react-router-dom';
import { set } from '@firebase/database';

function EventPage() {
    const [eventData, setEventData] = useState([]);
    const [tags,setTags]=useState([]);
    const [backStyle,setBackStyle]=useState([]);
    let { eventID } = useParams();
    let navigate = useNavigate();

    
    /*For Popup
    const contactEventMakers = document.querySelector(".eventContact")

    document.addEventListener("DOMContentLoaded",() => {
        contactEventMakers.addEventListener("click", handleClick)
    })
    function handleClick(event){

    }
    */

    /*For background image*/
    var divStyle;
    function setBackground(props){
        if(!props){
            divStyle = {
                backgroundImage: "url(https://images.app.goo.gl/zwAQKKfULvPaYiAA9)",
                width: '100vw',
                backgroundSize: 'cover'
            };
            console.log("not valid");
        } else {
            divStyle = {
                backgroundImage: 'url(' + eventData.coverImage + ')',
                width: '100vw',
                backgroundSize: 'cover'
            };
            console.log("valid");
        }
        setBackStyle(divStyle);
    }
    async function checkImage(url){

        const res = await fetch(url);
        const buff = await res.blob();
        return(buff.type.startsWith('image/'));
        
   }

    useEffect(async () => {
        let eventRef = doc(db, "events", eventID)
        const docSnap = await getDoc(eventRef)
        setEventData(docSnap.data())
        setTags(docSnap.data().tags)

        /*For checking the status of the inserted event photo.
        Will determine whether url is valid, and if not, replaces it.*/
        let isValidImage = await checkImage(eventData.coverImage);
        let backgroundResult = isValidImage;
        setBackground(backgroundResult);

        console.log(docSnap.data());
    },[])

    function ping(){
        console.log(eventData)
    }

    return(
        <div className="mainContainer">
            <div className="articleImage" style={divStyle}>
                <button className="backButton" onClick={()=>{
                    navigate(`/MainPage`)
                }}> &#60; Back </button>
                <button className="eventContact"> Contact Us </button>
                <button className="addEventButton"> Add Event </button>
            </div>

            <div className="eventData">
                <h1 className="eventName"> {eventData.title} </h1>
                <div className="secondaryInfo">
                    <div className="eventTimeContainer">
                        <p className="eventDate"> Event Date: {eventData.date} </p>
                        <p className="eventStartTime"> Start Time: {eventData.startTime}</p>
                        <p className="eventEndTime"> End Time: {eventData.endTime}</p>
                    </div>
                    <div className="eventLocationContainer">
                        <p className="eventStreet"> Street Name: </p>
                        <p className="eventHouse"> House Number: </p>
                        <p className="eventCity"> City: </p>
                    </div>
                </div>
                <p className="eventDescription"> {eventData.article}</p>
                <h3 className="username"> Signed / {eventData.hostName} </h3>
            </div>

            <div className="userPromptContainer">
                <button className="signUpButton"> Sign Up </button>
                <div className="capacityValues">
                    <h3 className="viewedAmount">Seen by: {eventData.views} people.</h3>
                    <h3 className="maxCap"> Max Capacity: {eventData.maxCapacity} </h3>
                </div>
                <button className="shareButton"> Share </button>
            </div>

            <div className="testingSpace">
                <div>Hi {eventID}</div>
                <button onClick={ping}>Hi</button>
                {tags.map((tags)=>{
                    return(
                        <div key={tags.id}>{tags.tag}</div>
                    )
                })}
            </div>
        </div>        
    )
}

export default EventPage;