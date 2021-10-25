import './Card.css'
import tal from '../../img/tal.png'

//Becky https://farm66.static.flickr.com/65535/51266845914_37d6047f37.jpg
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