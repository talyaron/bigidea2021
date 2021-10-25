import './Card.css'
import image from './download.jpg'
import image2 from './fff.jpg'
function Card(){
    return (
    <div className= 'container'>
    <div className='card'> 
         <img src={image} alt='bla' />
         </div>
         
         <div className='card'>
         <img src={image2} alt='bla' />
         </div>

         
         </div>
    )
}

export default Card;