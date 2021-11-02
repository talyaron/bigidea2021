import { useState } from "react";
import './Hangman.css';

function Hangman() {

    const[color, setColor] = useState('white');
    const [width, setWidth] = useState(400);
    const [showResults, setShowResults] = useState('block');
    const word = "tiger";
    const [guessWordArray, setGuessWordArray] = useState([])
    let guessWord, dashes = [];

    function checkText(letter) {

        letter = letter.toLowerCase();
        let choice = guessWord.contains(letter);

        if(choice) {
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
        guessWord = ev.target.elements.word.value;
        console.log(guessWord);
        let wordArr = guessWord.split("");
        
        for(let i=0; i<wordArr.length; i++) {
            guessWordArray.push(wordArr[i]);
            dashes[i]="_";
        }
        console.log(guessWordArray);
        setShowResults('none');
    }

    return(
        <div className="guessBox" style={{background:color, width:`${width}px`, height:`150px`}}>
            <p>{color}</p>
            <form onSubmit={handleSubmit} style={{display:showResults}}>
                <input type="password" name="word" placeholder="Type your secret word"/>
                <input type="submit" value="Hide" />
            </form>
            <p></p>
            <input type="text" name="guessBox" placeholder="Guess a letter" onKeyUp={handleCheckText} maxLength="1"/>
            {
            dashes.map((letter, index) => {
                return(<div key={index}>"{letter}"</div>);
            })
        }
        </div>
    )
}

export default Hangman;