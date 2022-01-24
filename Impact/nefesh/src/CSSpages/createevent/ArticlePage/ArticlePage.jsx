import "./ArticlePage.css";
function Article(){
    return(
        <div className="mainContainer">
            <div className="articleImage">
                <button className="backButton"> &#60; Back </button>
                <button className="addEventButton"> Add Event </button>
            </div>

            <div className="eventData">
                <h1 className="eventName"> Event Name </h1>
                <div className="secondaryInfo">
                    <div className="eventTimeContainer">
                        <p className="eventDate"> Event Date: DD/MM/YYYY </p>
                        <p className="eventStartTime"> Start Time: 11:00AM </p>
                        <p className="eventEndTime"> End Time: 4:00PM </p>
                    </div>
                    <div className="eventLocationContainer">
                        <p className="eventStreet"> Street Info </p>
                        <p className="eventHouse"> House Info </p>
                        <p className="eventCity"> City Info </p>
                    </div>
                </div>
                <p className="eventDescription"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3 className="username"> Signed / Joe </h3>
            </div>

            <div className="userPromptContainer">
                <button className="signUpButton"> Sign Up </button>
                <div className="capacityValues">
                    <h3 className="currentCap"> Current Capacity: 43 </h3>
                    <h3 className="maxCap"> Max Capacity: 120 </h3>
                </div>
                <button className="shareButton"> Share </button>
            </div>

            <div className="userNavigation">
                <div>This is a placeholder</div>
            </div>
        </div>
               
            
            
            

        
                
    )
}

export default Article