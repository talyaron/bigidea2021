import './MovieCard.css';

function MovieCard(props){
    console.log(props);
    return(
        <div>
            <div className="card"><br></br><br></br><br></br>
            <p>Name: {props.name}</p>
            <p>Gender: {props.gender}</p>
            </div>
        </div>
    )
}

export default MovieCard;