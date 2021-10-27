import './Card.css'
import layla from './layla.jpg'
import emma from './emma.jpg' 
import rachel from './rachel.jpg'
import sadie from './sadie.jpg'


function Card(props){
    return(
    <div className = 'Card '>
        <img src = {props.backgroundImage}/>
        <p>{props.name}</p>
        <p>{props.bio}</p>

    </div>
    )
}

export default Card;