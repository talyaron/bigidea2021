/* 
16 boxes - 1/2 pictures half names but start as blank
- when clicked, box turns and stays until next box is clicked 
    - if box matches, screen turns green and boxes stay flipped
    - if not, boxes go back to normal
*/

import "./pictures.css"
import {useState} from 'react'



function Memory(props){
    const isGood = props.isGood;
    const [good, setGood]= useState(isGood)
    const memoryArray= [{text: 'Philly', id: '1'}, {picture:'' /* import picture*/, id: '1'}, {text: 'New York City', id: '2'}, {picture: ''/* import picture*/, id: '2'},]
    function Memory(){
        const [cards, setCards]= useState(shuffle(memory))
    }
  
    function handleClick1(){
       setGood(!good);

    }
    function handleClick2(){
       setGood(!good);

    }
    function handleClick3(){
       setGood(!good);

    }
    function handleClick4(){
       setGood(!good);

    }
    function handleClick1(){
       setGood(!good);

    }
    function handleClick1(){
       setGood(!good);

    }
    function handleClick1(){
       setGood(!good);

    }
    function handleClick1(){
       setGood(!good);

    }
    return (
        <div className= "container">
        <div className={good?"blank": "flipped 1"} onClick={handleClick1}>
            
        </div>
        <div className={good?"blank": "flipped 1"} onClick={handleClick}>
            
        </div>
        <div className={good?"blank": "flipped 2"} onClick={handleClick}>
            
        </div>
        <div className={good?"blank ": "flipped 2"} onClick={handleClick}>
            
        </div>
        <div className={good?"blank": "flipped 3"} onClick={handleClick}>
            
        </div>
        <div className={good?"blank ": "flipped 3"} onClick={handleClick}>
            
        </div>
        <div className={good?"blank ": "flipped 4"} onClick={handleClick}>
            
        </div>
        <div className={good?"blank ": "flipped 4"} onClick={handleClick}>
            
        </div>
        </div>
    
    )
}

export default Memory