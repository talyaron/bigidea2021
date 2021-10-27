import './Card.css'
import Parrot from "./Parrot.png"
import Hope from "./Hope.png"

function Card() {
    return (
        <div>
            <div className="card">
                <img src={Parrot} alt="bla" />
            </div>
            <div className="card">
                <img src={Hope} alt="bla" />
            </div>
        </div>
    )
}

export default Card;