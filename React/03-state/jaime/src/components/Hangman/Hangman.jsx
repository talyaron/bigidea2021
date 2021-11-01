import { useState } from "react";
import './Hangman.css';

function Hangman() {

    const[color, setColor] = useState('white');
    const word = "tiger";

    function checkText(letter) {

        letter = letter.toLowerCase();
        var format = letter;
        

        if(word.match(format)) {
            console.log(true);
          
            setColor('green');            
        } else {
            console.log(false);
            
            setColor('red');
        }

   
    }

    function handleCheckText(ev) {
        let value = ev.target.value, char = value.slice(-1);
        console.log(char);
        checkText(char);
    }

    return(
        <div className="guessBox" style={{background:color}}>
            <p></p>
            <input type="text" name="textBox" onChange={handleCheckText}></input>
        </div>
    )
}

export default Hangman;