import './Card.css'
import dragon from "./Dragons.jpg"

function Card(){
    return (
        <div className="card">Card
            <img src={dragon} alt='bla'/>
        </div>
    )
}

export default Card