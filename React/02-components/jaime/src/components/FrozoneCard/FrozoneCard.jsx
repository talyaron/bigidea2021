import './FrozoneCard.css';

function FrozoneCard(props){
    return(
        <div>
            <div className="cardFroz"><br></br><br></br><br></br>Samuel L. Jackson<br></br>
            <p>Name: {props.name}</p>
            <p>Gender: {props.gender}</p>
            </div>
        </div>
    )
}

export default FrozoneCard;