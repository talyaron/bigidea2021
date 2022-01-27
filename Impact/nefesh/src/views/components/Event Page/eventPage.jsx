import './eventPage.css';
import React, { Component, useState, useEffect } from 'react';
import { collection, setDoc, getDoc, doc } from "firebase/firestore"
import { db } from "../../../functions/firebase/config"
import { useNavigate, useParams } from 'react-router-dom';
import { set } from '@firebase/database';

function EventPage() {
    const [eventData, setEventData] = useState([]);
    const [tags,setTags]=useState([]);
    const [backStyle, setBackStyle]=useState([]);
    const [addressInfo, setAddressInfo]=useState([]);
    const [contactInfo, setContactInfo]=useState([]);
    const [orgWebsite, setOrgWebsite] = useState([]);
    const [websiteValidity, setWebValidity] = useState(false);
    const [imageValidity, setImgValidity] = useState(false);
    let { eventID } = useParams();
    let navigate = useNavigate();

    // const popUp = document.querySelector(".popUp");
    // const stylePopUpOne = {
    //     display: "none"
    // };

    // function displayOrganizerContact(){
    //     popUp.style.display = "block";
    // }
    // function hideOrganizerContact(){
    //     popUp.style.display = "none";
    // }
    
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    /*For background image
    var divStyle;
    function setBackground(props){ //Would return if the url is valid or not
        //No longer uses urls, instead works with firebase...
        if(!props){
            // divStyle = {
            //     backgroundImage: "url(https://images.app.goo.gl/zwAQKKfULvPaYiAA9)",
            //     width: '100vw',
            //     backgroundSize: 'cover'
            // }; Method for changing background no longer works...
            console.log("not valid");
        } else {
            // divStyle = {
            //     backgroundImage: 'url(' + eventData.coverImage + ')',
            //     width: '100vw',
            //     backgroundSize: 'cover'
            // }; Method for changing background no longer works...
            console.log("valid");
        }
        setBackStyle(divStyle);
    }
    async function checkImage(url){
        //Check to see if this works with the firebase images...
        const res = await fetch(url);
        const buff = await res.blob();
        return(buff.type.startsWith('image/'));
        
   }*/

    useEffect(async () => {
        setWebValidity(false);
        let eventRef = doc(db, "events", eventID);
        const docSnap = await getDoc(eventRef);
        setEventData(docSnap.data());
        setTags(docSnap.data().tags);
        setAddressInfo(docSnap.data().address);
        setContactInfo(docSnap.data().contactInfo);
        let validState = validURL(docSnap.data().contactInfo.website);
        setWebValidity(validState);
        setOrgWebsite(docSnap.data().contactInfo.website);
        
        
        /*For checking the status of the inserted event photo.
        Will determine whether url is valid, and if not, replaces it.*/
        //let isValidImage = await checkImage(eventData.coverImage);
        //let backgroundResult = isValidImage;
        //setBackground(backgroundResult);
        console.log(websiteValidity);
        console.log(docSnap.data());
    },[])

    return(
        <div className="mainContainer">
            <div className="articleImage" /*style={divStyle}*/>
                <div className="articleImageButtons">
                    {/* <button className="backButton" onClick={()=>{
                        navigate(`/MainPage`)
                    }}> &#60; Back </button> */}

                    {/* <button className="eventContact" onClick={displayOrganizerContact}> Contact Us </button> */}

                    <button className="addEventButton" onClick={()=>{
                        navigate(`/ArticleCreation`)
                    }}> Add Event </button>

                </div>
                
                {/* <div className="popUp" style={stylePopUpOne}>
                    <div className="popUpContent">
                        <button className="closePopUp" onClick={hideOrganizerContact}>  &times; Close</button>
                        <p>Our Website: {contactInfo.website}</p>
                        <p>Our Phone Number: {contactInfo.phone}</p>
                        <p>Our Email Address: {contactInfo.email}</p>
                    </div>
                </div> */}


            </div>

            <div className="eventData">
                <h1 className="eventName"> {eventData.title} </h1>
                <h4 className="eventDetails"> 
                    <a href={websiteValidity ? orgWebsite : null}>{websiteValidity ? orgWebsite : "There is no link"}</a>
                </h4>
                <div className="secondaryInfo">
                    <div className="eventTimeContainer">
                        <p className="eventDate"> Event Date: {eventData.date} </p>
                        <p className="eventStartTime"> Start Time: {eventData.startTime}</p>
                        <p className="eventEndTime"> End Time: {eventData.endTime}</p>
                    </div>
                    <div className="eventLocationContainer">
                        <p className="eventStreet"> Street Name: {addressInfo.streetName}</p>
                        <p className="eventHouse"> House Number: {addressInfo.houseNumber}</p>
                        <p className="eventCity"> City: {addressInfo.city}</p>
                    </div>
                </div>
                <h4 className="eventDetails"> Description: {eventData.article}</h4>
                <h3 className="username"> Signed / {eventData.hostName} </h3>
            </div>

            <div className="userPromptContainer">
                <h3 className="maxCap"> Max Capacity: {eventData.maxCapacity} </h3>
                <button className="shareButton"> Share </button>
            </div>

            <div className="eventTags">
                <h3 className="tagTitle">Event Tags:</h3>
                {tags.map((tags)=>{
                    return(
                        <div className="tagBox" key={tags.id}>
                            {tags.tag}
                        </div>
                    )
                })}
            </div>

            <div className="contactUsContainer">
                <div className="contactUsContent">
                    {/* <button className="closePopUp" onClick={hideOrganizerContact}>  &times; Close</button> */}
                    <p>Our Website: {websiteValidity ? orgWebsite : "No Link Available"}</p>
                    <p>Our Phone Number: {contactInfo.phone}</p>
                    <p>Our Email Address: {contactInfo.email}</p>
                </div>
            </div>
        </div>        
    )
}

export default EventPage;