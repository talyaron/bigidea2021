import './Card.css';
import elliot from './elliotPhoto.jpeg'

function Card() {
    return (
        <div className = 'card'>
            <img src={elliot} alt = 'avg' />
            Card
        </div>
    )

}

export default Card;