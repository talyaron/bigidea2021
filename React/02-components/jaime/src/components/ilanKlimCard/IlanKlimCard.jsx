import './IlanKlimCard.css';
import IlanKlim from './IlanKlim.jpg';

function IlanKlimCard(props){
    return(
        <div>
            <div className="cardIlanKlim">Ilan Klimberg<br></br>
            <img src={IlanKlim} width="270px" height="300px"></img>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default IlanKlimCard;