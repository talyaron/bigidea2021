import './NoahCard.css';
import Noah from './Noah.JPG';

function NoahCard(props){
    return(
        <div>
            <div className="cardNoah">Noah Givner<br></br>
            <img src={Noah} width="230px" height="260px"></img>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default NoahCard;