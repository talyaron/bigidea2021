import './actorimg.css'
import dude from './theDude.jpg'


function Actorimg(){
    return(
        <card className = 'dude'>
        <img src = {dude} alt =''/>
        <p>the actor whjo played "The Dude" is Jeff Bridges</p>

      </card>
    
    )
}

export default Actorimg;
