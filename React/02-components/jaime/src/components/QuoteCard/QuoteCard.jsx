import './QuoteCard.css';

function QuoteCard(props){
    console.log(props);
    return(
        <div>
            <div className="cardQuote"><br></br><br></br>"Honey, where's my super suit!?"<br></br>
            <p>Name: {props.name}</p>
            <p>Gender: {props.gender}</p></div>
        </div>
    )
}

export default QuoteCard;