import { useState } from "react";
import './Hangman.css';

let guessWord, dashes = [], wordArr =[], guessesLeft = 6;

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
            for(let i=0; i<=wordArr.length; i++) {
                if(char == wordArr[i]) {
                    dashes[i] = char;
                }
            }    

        } else { // incorrect

            if(!char) {
                console.log("no letter");
                return;
            }

            setColor('red');
            guessesLeft -= 1;
            console.log(`You have ${guessesLeft} guesses left.`);

            switch(guessesLeft) {

                case 5:
                    console.log("5");
                    //add head
                    break;

                case 4:
                    console.log("4");
                    //add body
                    break;

                case 3:
                    console.log("3");
                    //add left arm
                    break;

                case 2:
                    console.log("2");
                    //add right arm
                    break;

                case 1:
                    console.log("1");
                    //add left leg
                    break;

                case 0:
                    console.log("0 game over");
                    //add right leg
                    //Game Over
                    setColor('darkred');
                    break;

                default:
                    break;
            }
            
        }
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        guessWord = ev.target.elements.word.value;
        wordArr = guessWord.split("");
        console.log(guessWord);
        
        for(let i=0; i<wordArr.length; i++) {
            guessWordArray.push(wordArr[i]);
            dashes[i]='_';
        }
        console.log(guessWordArray);
        console.log(dashes);
        setShowResults('none');
    }

    return(
        <div className="guessBox" style={{background:color, width:`500px`, height:`210px`}}>
            <p>Hangman</p>
            <form onSubmit={handleSubmit} style={{display:showResults}}>
                <input type="password" name="word" placeholder="Type your secret word"/>
                <input type="submit" value="Hide" />
            </form>
            <p></p>
            <input type="text" name="guessBox" placeholder="Guess a letter" onKeyUp={handleCheckText} maxLength="1"/>
            <div className="wrapper">
            {dashes.map((letter, index) => {
                return(<div key={index}>'{letter}'</div>)
            }
            )}
            </div>
            <p></p>
            <div className="stickfigure">
                <div id="head"></div>
                <div id="stickBody"></div>
                <div id="leftArm"></div>
                <div id="rightArm"></div>
                <div id="leftLeg"></div>
                <div id="rightLeg"></div>
            </div>
        </div>
    )
}

export default Hangman;