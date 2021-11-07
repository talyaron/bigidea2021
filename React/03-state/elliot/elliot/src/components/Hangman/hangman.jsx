import {useState} from 'react';
import './hangman.css'

import hangmanO from './hangImages/hangZero.png'
import hangman1 from './hangImages/hangOne.png'
import hangman2 from './hangImages/hangTwo.png'
import hangman3 from './hangImages/hangThree.png'
import hangman4 from './hangImages/hangFour.png'
import hangman5 from './hangImages/hangFive.png'
import hangman6 from './hangImages/hangSix.png'

//var letters = /^[A-Za-z]+$/;
//let word = [a, c, t, u, a, l, l, y]
//<div className = "wrapper"> {word.map(letter,index) => return( <p key={index}> {letter} </p> )} </div>
//This creates a list of words

let secretWordArray = [], guessBlanksArray = [], wrongAnswerArray = [];

function HangmanGame(props){
    
        const [color, setColor] = useState('gray');


        const [showSecret, setShowSecret] = useState('block');
        const [showGuess, setShowGuess] = useState('none');
        const [wrongAnswerCounter, setWrongCounter] = useState(props.wrongCounter); //6 mistakes is game over
        const [hangImage, setImage] = useState(hangmanO);

        let guessCharacterIndex = -1;
        const [guess, setGuess] = useState("");

        let secretBlanks = "";
        const [secret, setSecret] = useState("");


        function handleSecretUpdate(ev){
            setSecret(ev.target.value.toLowerCase());
        }

        function handleSecretInput(){
            console.log(secret);
            if(secret === ""){
                alert("Your secret word cannot be empty.")
            } else if(secret.match(/[0-9]/i)){
                alert("Your secret word cannot contain numbers.")
            } else {
                setShowSecret('none')
                setShowGuess('block')
                secretWordArray = [...secret];
                for(let len = 0; len < secretWordArray.length; len++){
                    secretBlanks += "_";
                }
                console.log(secretBlanks);
                guessBlanksArray = [...secretBlanks];
            }
        }

        function handleGuessUpdate(ev){
            setGuess(ev.target.value.slice(-1).toLowerCase());//Set to final character in guess text box
            console.log(guess);
        }

        function handleGuessConfirm(){
            guessCharacterIndex = secret.indexOf(guess);
            console.log(wrongAnswerArray);
            if (guessCharacterIndex === -1){
                setColor('red');

                if(wrongAnswerArray.includes(guess)) {
                    alert("You have already guessed this letter, please try another.");
                } else {
                    wrongAnswerArray.push(guess);

                    setWrongCounter(wrongAnswerCounter+1);
                    switch(wrongAnswerCounter){
                        case 1:
                            setImage(hangman1);
                            console.log('oneIncorrect');
                            break;
                        case 2:
                            setImage(hangman2);
                            break;
                        case 3:
                            setImage(hangman3);
                            break;
                        case 4:
                            setImage(hangman4);
                            break;
                        case 5:
                            setImage(hangman5);
                            break;
                        case 6:
                            setImage(hangman6);
                            alert("Game Over! You have lost. Refresh the page to play again.")
                            break;
                        default:
                            console.log('notWorking');
                            break;
                    }
                }
            } else {
                setColor('green');

                for(var index = 0; index < secretWordArray.length; index++) {
                    if(secretWordArray[index] === guess) {
                        guessBlanksArray[index] = guess;
                    }
                }

                if (guessBlanksArray.indexOf('_') === -1) {
                    alert("You win, good job!")
                }

            }
        }


        return(
            <div className = 'container' style={{background: color}}>             
                <input 
                    type='password'
                    id = 'inputStageOneText'
                    placeholder='Input Your Secret Word Here:'
                    style = {{ display: showSecret}}
                    onKeyUp={handleSecretUpdate}>

                </input>
                <input
                    type='button'
                    value='Confirm Secret Word and Hide'
                    id = 'inputStageOneButton'
                    style = {{ display: showSecret}}
                    onClick = {handleSecretInput}>

                </input>
                <div style = {{ display: showGuess}}></div>
                <div style = {{ display: showGuess}}></div>

                <div className = "containerTwo">
                    {guessBlanksArray.map((letter, index) => 
                        { return (<div key = {index}>[{letter}]</div>) }
                    )}
                </div>
                <div className = "sticks">
                    <img className = "sticks" style = {{ display: showGuess}} src={hangImage} ></img>
                </div>

                <input 
                    type='text'
                    placeholder='Input Your Guess Letter Here:'
                    id = 'inputStageTwoText'
                    style = {{ display: showGuess}}
                    onInput={handleGuessUpdate}>

                </input>
                <input
                    type='button'
                    value='Confirm Guess Letter'
                    id = 'inputStageTwoButton'
                    style = {{ display: showGuess}}
                    onClick={handleGuessConfirm}>
                    
                </input>
                <div style = {{ display: showSecret}}></div>
                <div style = {{ display: showSecret}}></div>
            </div>
            
        )
    }
    
export default HangmanGame;