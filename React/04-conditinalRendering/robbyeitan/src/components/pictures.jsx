/* 
16 boxes - 1/2 pictures half names but start as blank
- when clicked, box turns and stays until next box is clicked 
    - if box matches, screen turns green and boxes stay flipped
    - if not, boxes go back to normal
*/

import "./pictures.css"
import {useState} from 'react'



const memory = [
    { text: 'Philly', id: 1 }, { text:"1" , id: 1 },
    { text: 'New York City', id: 2 }, { text: "2" , id: 2 },
    { text: 'K', id: 2 }, { text: "2" , id: 2 },
    { text: 'Paris', id: 2 }, { text: "2" , id: 2 },
]



 
function Memory() {
    const [cards, setCards] = useState(shuffle(memory));

    function TernaryOperator(props){
        const isGood= props.isGood
        const [good, setGood]= useState(isGood)
            
        function handleClick(){
           setGood(!good);
    
        }
     
        
    return (
        <div className='cards'>
            {cards.map((card, i) => {
            console.log(card.img)
                return (card.img ?
                    <div key={i} className={good?"hide box2": "show box2"} onClick={handleClick} style={{backgroundImage:`url(${card.img})`}}></div>
                    :
                    <div key={i} className='card'>{card.text}</div>
                    
                )

            })
            }
        </div>
    )
    }





function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
}
export default Memory