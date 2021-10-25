import './FrozoneCard.css';

function FrozoneCard(props){
    return(
        <div>
            <div className="card"><br></br><br></br><br></br>Samuel L. Jackson</div>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default FrozoneCard;