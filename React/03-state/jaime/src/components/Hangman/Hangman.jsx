import { useState } from "react";
import './Hangman.css';

let guessWord, dashes = [], wordArr =[];

function Hangman() {

    const[color, setColor] = useState('orange');
    const [showResults, setShowResults] = useState('block');
    const [guessWordArray, setGuessWordArray] = useState([]);

    function handleCheckText(ev) {
        let value = ev.target.value, char = value.slice(-1);
        console.log(char);

        char = char.toLowerCase();

        if(wordArr.includes(char)) {
            setColor('green');         
        } else {
            setColor('red');
        }
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        guessWord = ev.target.elements.word.value;
        wordArr = guessWord.split("");
        console.log(guessWord, wordArr);
        
        for(let i=0; i<wordArr.length; i++) {
            guessWordArray.push(wordArr[i]);
            dashes[i]='_';
        }
        console.log(guessWordArray);
        console.log(dashes);
        setShowResults('none');
    }

    return(
        <div className="guessBox" style={{background:color, width:`500px`, height:`150px`}}>
            <p>Hangman</p>
            <form onSubmit={handleSubmit} style={{display:showResults}}>
                <input type="password" name="word" placeholder="Type your secret word"/>
                <input type="submit" value="Hide" />
            </form>
            <p></p>
            <input type="text" name="guessBox" placeholder="Guess a letter" onKeyUp={handleCheckText} maxLength="1"/>
            <div className="wrapper">
            {dashes.map((letter, index) => {
                return(<div key={index}>"{letter}"</div>)
            }
            )}
            </div>
        </div>
    )
}

export default Hangman;