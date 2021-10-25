import './Card.css'
import JEJ from "./James Earl Jones.webp"

function Card() {
    return (
        <div className="card">
            <img src={JEJ} alt="bla" />
        </div>
    )
}

export default Card;