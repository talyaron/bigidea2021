import './Card.css';

function Card({ text }) {
    return (
        <div className="card">
            {text}
        </div>
    )
}

export default Card;