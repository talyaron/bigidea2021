import './actorImage.css';
import benedict from './benedictCumberbatch.jpeg'

function actorImage() {
    return (
        <div className = 'favoriteImage'>
            <img src={benedict} alt = 'avg' />
            Benedict Cumberbatch
        </div>
    )

}

export default actorImage;