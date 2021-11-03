import {useState} from 'react';
import './hangman.css'

//var letters = /^[A-Za-z]+$/;
//let word = [a, c, t, u, a, l, l, y]
//<div className = "wrapper"> {word.map(letter,index) => return( <p key={index}> {letter} </p> )} </div>
//This creates a list of words

let secretWordArray = [], guessBlanksArray = [], wrongAnswerArray = [];

function HangmanGame(){
    
        const [color, setColor] = useState('gray');
        const [showSecret, setShowSecret] = useState('block');
        const [showGuess, setShowGuess] = useState('none');
        let wrongAnswerCounter = 0; //6 mistakes is game over

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

                    wrongAnswerCounter++;
                    if(wrongAnswerCounter === 6){
                        alert("The game is over, you lose...");
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
                <div>
                    Placeholder for empty space.
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