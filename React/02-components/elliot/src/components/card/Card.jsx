import './Card.css';
import elliot from './elliotPhoto.jpeg'

function Card(props) {
    console.log(props.name)
    return (
        <div className = 'card'>
            <img src={props.image} alt = 'avg' />
            <p>Name: {props.name}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )

}

export default Card;