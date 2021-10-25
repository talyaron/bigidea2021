import './Card.css'
import tal from '../../img/tal.png'

//Becky 
//Robby file:///Users/robert/Desktop/pictures/5d71018a-8a92-4d86-917e-00e5657ce208.jpg

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