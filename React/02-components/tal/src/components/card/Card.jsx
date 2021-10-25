import './Card.css'
import tal from '../../img/tal.png'

function Card() {
    
    return (
        <div className='card'>
            <img src={tal} alt='bla' />
            Tal
        </div>
    )
}

export default Card;