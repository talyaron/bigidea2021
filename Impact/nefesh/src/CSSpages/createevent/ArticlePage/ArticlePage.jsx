import "./ArticlePage.css";
function Article(){
    return(
        <div className="cont">
            <button className="blue butt"> Back </button>
            <div className="backgrey">
            <h2 className="Eventname"> Event Name </h2>
            <div className="cont2">
            <p className="year"> DD/MM/YYYY </p>
            <p className="location"> location </p>
            </div>
            
            <p className="descrpition"> Event description bla blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla </p>
            </div>
            <div className="cont3">
            <button className="black butt4"> signup </button>
            <h3 className="name"> Signed / General Kanobi </h3>
            <button className="black butt5"> Share </button>
            </div>
            <div className="cont4 backgrey">
            <button className="blue butt2"> Home </button>
            <button className="blue butt2 "> Share </button>
            </div>
        </div>
               
            
            
            

        
                
    )
}

export default Article