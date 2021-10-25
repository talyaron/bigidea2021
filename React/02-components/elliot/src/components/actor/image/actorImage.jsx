import './actorImage.css';
import benedict from './benedictCumberbatch.jpeg'

function Card() {
    return (
        <div className = 'favoriteImage'>
            <img src={benedict} alt = 'avg' />
        </div>
    )

}

export default Card;