import './Card.css'
import Michael from "./Michael.jpg"

function Card() {
    return (
        <div className="card">
            <img src={Michael} alt="bla" />
        </div>
    )
}

export default Card;