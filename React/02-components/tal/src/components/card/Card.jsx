import './Card.css'
import tal from '../../img/tal.png'

//Becky
//Robby

function Card(props) {
    console.log(props)
    
    return (
        <div className='card'>
            <img src={tal} alt='bla' />
            <p>{props.name}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default Card;