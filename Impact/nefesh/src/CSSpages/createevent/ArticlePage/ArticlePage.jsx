import "./ArticlePage.css";
function Article(){
    return(
        <div className="mainContainer">
            <div className="articleImage">
                <button className="backButton"> &#60; Back </button>
            </div>

            <div className="eventData">
                <h1 className="eventName"> Event Name </h1>
                <div className="secondaryInfo">
                    <p className="eventDate"> DD/MM/YYYY </p>
                    <p className="eventLocation"> location </p>
                </div>
                <p className="eventDescription"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="userPromptContainer">
                <button className="signUpButton black"> Sign Up </button>
                <h3 className="username"> Signed / General Kanobi </h3>
                <button className="shareButton black"> Share </button>
            </div>

            <div className="cont4 backgrey">
                <button className="blue butt2"> Home </button>
                <button className="blue butt2 "> Share </button>
            </div>
        </div>
               
            
            
            

        
                
    )
}

export default Article