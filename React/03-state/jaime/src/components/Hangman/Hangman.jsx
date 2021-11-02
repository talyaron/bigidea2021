import { useState } from "react";
import './Hangman.css';

function Hangman() {

    const[color, setColor] = useState('white');
    const [width, setWidth] = useState(400);
    const [showResults, setShowResults] = useState('block');
    const word = "tiger";
    const [guessWordArray, setGuessWordArray] = useState([])
    let guessWord;

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
        guessWord = ev.target.elements.word.value;
        console.log(guessWord);
        setGuessWordArray(guessWord.split(""));
        console.log(guessWordArray);
        setShowResults('none');
    }

    return(
        <div className="guessBox" style={{background:color, width:`${width}px`, height:`150px`}}>
            <p>{color}</p>
            <form onSubmit={handleSubmit} style={{display:showResults}}>
                <input type="password" name="word" id="" placeholder="Type your secret word" onChange={handleCheckText}/>
                <input type="submit" value="Hide" />
            </form>
            <div className="wrapper"></div>
            <p></p>
            {
            guessWordArray.map((letter, index) => {
                return(<p key={index}>"{letter}"</p>)
            })
        }
        </div>
    )
}

export default Hangman;