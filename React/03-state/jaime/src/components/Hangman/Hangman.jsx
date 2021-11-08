import { useState } from "react";
import './Hangman.css';

let guessWord, wordArr = [], guessesLeft = 6;

function Hangman() {

    const [color, setColor] = useState('orange');
    const [showResults, setShowResults] = useState('block');
    const [guessWordArray, setGuessWordArray] = useState([]);
    const [dashes, setDashes] = useState([]);
    const [hideBox1, setHideBox1]= useState('none');
    const [hideBox2, setHideBox2]= useState('none');
    const [hideBox3, setHideBox3]= useState('none');
    const [hideBox4, setHideBox4]= useState('none');
    const [hideBox5, setHideBox5]= useState('none');
    const [hideBox6, setHideBox6]= useState('none');

    function handleCheckText(ev) {
        let value = ev.target.value, char = value.slice(-1);
        console.log(char);

        char = char.toLowerCase();

        if (wordArr.includes(char)) {
            const tempDashes = [...dashes]
            setColor('green');
            for (let i = 0; i <= wordArr.length; i++) {
                if (char == wordArr[i]) {
                    tempDashes[i] = char;
                }
            }
            setDashes(tempDashes)

        } else { // incorrect

            if (!char) {
                console.log("no letter");
                return;
            }

            setColor('red');
            guessesLeft -= 1;
            console.log(`You have ${guessesLeft} guesses left.`);

            switch (guessesLeft) {

                case 5:
                    console.log("5");
                    setHideBox1('block');
                    break;

                case 4:
                    console.log("4");
                    setHideBox2('block');
                    break;

                case 3:
                    console.log("3");
                    setHideBox3('block');
                    break;

                case 2:
                    console.log("2");
                    setHideBox4('block');
                    break;

                case 1:
                    console.log("1");
                    setHideBox5('block');
                    break;

                case 0:
                    console.log("0 game over");
                    alert("Game Over.")
                    setHideBox6('block');
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

        for (let i = 0; i < wordArr.length; i++) {
            guessWordArray.push(wordArr[i]);
            dashes[i] = '_';
        }
        console.log(guessWordArray);
        console.log(dashes);
        setShowResults('none');
    }

    return (
        <div className="guessBox" style={{ background: color, width: `500px`, height: `210px` }}>
            <p>Hangman</p>
            <form onSubmit={handleSubmit} style={{ display: showResults }}>
                <input type="password" name="word" placeholder="Type your secret word" />
                <input type="submit" value="Hide" />
            </form>
            <p></p>
            <input type="text" name="guessBox" placeholder="Guess a letter" onKeyUp={handleCheckText} maxLength="1" />
            <div className="wrapper">
                {dashes.map((letter, index) => {
                    return (<div key={index}>'{letter}'</div>)
                }
                )}
            </div>
            <p></p>
            <div className="stickfigure">
                <div id="head" style={{display:hideBox1}}></div>
                <div id="stickBody" style={{display:hideBox2}}></div>
                <div id="leftArm" style={{display:hideBox3}}></div>
                <div id="rightArm" style={{display:hideBox4}}></div>
                <div id="leftLeg" style={{display:hideBox5}}></div>
                <div id="rightLeg" style={{display:hideBox6}}></div>
            </div>
        </div>
    )
}

export default Hangman;