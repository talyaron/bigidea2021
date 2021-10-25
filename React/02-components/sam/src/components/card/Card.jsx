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
<div>

“I use xanax to focus, ambien to sleep, weed to calm me down, cocaine to cheer me up and morphine because it's great. But, of all these, my favorite drug, well, is money."</div>
         
         </div>
    )
}

export default Card;