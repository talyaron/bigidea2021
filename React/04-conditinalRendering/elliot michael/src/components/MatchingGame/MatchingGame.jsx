import {useState} from 'react';
import './MatchingGame.css'

import imageOne from '';


const memory = [
    {text: 'Tel-Aviv', id: 1}, {img: telAviv, id: 1},

] 

function MatchingGame(){

    const [cards, setCards] = useState(shuffle(memory));
    const [allCardVisibility, setVisibility] = useState('block');
    let isFirstSelected = false;

    function initializedGame(){
        //Goal of this is to run the animation at the start of the game
        //Will flash all images for 3 seconds
        //Make a for each loop to go through all elements in memory
        //Which will select the style for all the images and
        //make them visible
    }

    function swapAllImages(){
        
    }
    
    return(
        <div className = 'container'>             
            {guessBlanksArray.map((letter, index) => 
                { return (<div key = {index}>[{letter}]</div>) }
            )}
        </div>
        
    )
}


export default MatchingGame;