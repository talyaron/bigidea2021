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
            setWidth(300)         
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

    function handleSubmit(ev) {
        ev.preventDefault();
        let guessWord;
        guessWord = ev.target.value;
    }

    return(
        <div className="guessBox" style={{background:color, width:`${width}px`, height:`150px`}}>
            <p>{color}</p>
            <input type="text" name="textBox" onChange={handleCheckText}></input>
            <p></p>
            <form onSubmit={handleSubmit}>
                <input type="password" name="" id="" />
                <input type="submit" value="Hide" />
            </form>
        </div>
    )
}

export default Hangman;