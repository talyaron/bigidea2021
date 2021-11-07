import './Card.css';
import { useState } from 'react';
import cornShrine from './cornShrine.jpg';
import friedChicken from './friedChicken.jpeg';
import InNOut from './InNOut.jpeg';
import 

//images

function Card(){

    const [cardArray, setCardArray] = useState();

    function handleShuffle() {
        
        let tempCardArray = [
            { text: '7 Eleven', id: 1 }, { img: , id: 1 },
            { text: "In N' Out", id: 2 }, { img: , id: 2 },
            { text: "Raising Cane's Chicken Fingers", id: 3 }, { img: , id: 3 },
            { text: 'Corn Shrine', id: 4 }, { img: , id: 4 },
            { text: 'Beaver Creek', id: 5 }, { img: , id: 5 },
            { text: 'Lake Lure', id: 6 }, { img: , id: 6 },
            { text: 'Boston Harbor', id: 7 }, { img: , id: 7 },
            { text: 'Santa Monica Pier', id: 8 }, { img: , id: 8 },
        ];
        let currentIndex = tempCardArray.length,  randomIndex;
        
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [tempCardArray[currentIndex], tempCardArray[randomIndex]] = [
            tempCardArray[randomIndex], tempCardArray[currentIndex]];
        }
      
        setCardArray(tempCardArray);
        return;
      }

      
      console.log(cardArray);

    return(
    //code
    <div onClick={handleShuffle()}>Shuffle</div>
    
    
)

}

export default Card;