import {useState} from 'react';
import './MatchingGame.css'

import imageOne from '';


const memory = [
    {text: 'Tel-Aviv', id: 1}, {img: telAviv, id: 1},

] 

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

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
            {cards.map((card, i) => {
            console.log(card.img)
                return (card.img ?
                    <div key={i} className='card' style={{backgroundImage:`url(${card.img})`}}></div>
                    :
                    <div key={i} className='card'>{card.text}</div>
                )

            })
            }
        </div>
        
    )
}


export default MatchingGame;