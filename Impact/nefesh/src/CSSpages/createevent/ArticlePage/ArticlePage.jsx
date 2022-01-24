

function Article(){
    return(
        <div className="mainContainer">
            <div id="articleImage" className="articleImage">
                <button className="backButton"> &#60; Back </button>
                <button className="eventContact" onClick={showPopupData}> Contact Us </button>
                <button className="addEventButton"> Add Event </button>
            </div>

            <div className="eventData">
                <h1 className="eventName"> {eventData.title} </h1>
                <div className="secondaryInfo">
                    <div className="eventTimeContainer">
                        <p className="eventDate"> Event Date: {eventData.date} </p>
                        <p className="eventStartTime"> Start Time: {eventData.startTime} </p>
                        <p className="eventEndTime"> End Time: {eventData.endTime} </p>
                    </div>
                    <div className="eventLocationContainer">
                        <p className="eventStreet"> Street Info </p>
                        <p className="eventHouse"> House Info </p>
                        <p className="eventCity"> City Info </p>
                    </div>
                </div>
                <p className="eventDescription"> {eventData.article}</p>
                <h3 className="username"> Signed / {eventData.hostName} </h3>
            </div>

            <div className="userPromptContainer">
                <button className="signUpButton"> Sign Up </button>
                <div className="capacityValues">
                    <h3 className="viewedAmount">Seen by: {eventData.views} people.</h3>
                    <h3 className="currentCap"> Current Capacity: {eventData.currentCapacity} </h3>
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