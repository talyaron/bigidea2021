import './Card.css';
import { useState } from 'react';



function Card(){

    const [cardArray, setCardArray] = useState();

    function handleShuffle() {
        
        let tempCardArray = [
            {text: 'text', id: 1}
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