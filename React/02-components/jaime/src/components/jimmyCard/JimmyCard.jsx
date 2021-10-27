import './JimmyCard.css';
import Jimmy from './Jimmy.jpg';

function JimmyCard(props){
    return(
        <div>
            <div className="cardJimmy">Jimmy Hadjenberg<br></br>
            <img src={Jimmy} width="290px" height="300px"></img>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default JimmyCard;