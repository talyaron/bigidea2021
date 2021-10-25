import './Card.css'
import dragon from "./Dragons.jpg"
import actor from "./Actor.jpg"

function Card(){
    return (
        <div className="card">Tom Holland
            <img src={actor} alt='bla'/>
        </div>
    )
}

export default Card