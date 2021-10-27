import './JonathanCard.css';
import Jonathan from './Jonathan.jpg';

function JonathanCard(props){
    return(
        <div>
            <div className="cardJonathan">Jonathan Yacobi<br></br>
            <img src={Jonathan} width="220px" height="300px"></img>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default JonathanCard;