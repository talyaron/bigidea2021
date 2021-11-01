import { useState } from "react";
import './Hangman.css';

function Hangman() {

    const[color, setColor] = useState('white');
    const [width, setWidth] = useState(400);
    const word = "tiger";

    function checkText(letter) {

        letter = letter.toLowerCase();
        var format = letter;
        

        if(word.match(format)) {
            console.log(true);
          
            setColor('green');   
            setWidth(200)         
        } else {
            console.log(false);
            
            setColor('red');
            setWidth(500)
        }
    }

    function handleCheckText(ev) {
        let value = ev.target.value, char = value.slice(-1);
        console.log(char);
        checkText(char);
    }

    return(
        <div className="guessBox" style={{background:color, width:`${width}px`, height:`100px`}}>
            <p>{color}</p>
            <input type="text" name="textBox" onChange={handleCheckText}></input>
        </div>
    )
}

export default Hangman;