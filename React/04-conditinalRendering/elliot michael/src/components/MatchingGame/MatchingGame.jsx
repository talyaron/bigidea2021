import {useState} from 'react';
import './MatchingGame.css'

const memory = [
    {text: 'Tel-Aviv', id: 1}, {img: telAviv, id: 1},

] 

function MatchingGame(props){

    const [cards, setCards] = useState(shuffle(memory));
    let isFirstSelected = false;

    function initializedGame(){
        //Goal of this is to run the animation at the start of the game
        //Will flash all images for 3 seconds
        //Make a for each loop to go through all elements in memory
        //Which will select the style for all the images and
        //make them visible
    }

    function handleImageSelection(ev){

    }
    
    return(
        <div className = 'container' style={{background: brown}}>             
            
        </div>
        
    )
}


export default MatchingGame;