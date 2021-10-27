import './IlanECard.css';
import IlanE from './IlanE.JPG';

function IlanECard(props){
    return(
        <div>
            <div className="cardIlanE">Ilan Enteen<br></br>
            <img src={IlanE} width="210px" height="310px"></img>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default IlanECard;