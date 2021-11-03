import {useState} from 'react';
import './hangman.css'

//var letters = /^[A-Za-z]+$/;
//let word = [a, c, t, u, a, l, l, y]
//<div className = "wrapper"> {word.map(letter,index) => return( <p key={index}> {letter} </p> )} </div>
//This creates a list of words

function createHangmanBlanks(arr){
    let listArray = arr.map((elm, index) => {
            return {character:"_", id:index}
        })
    return listArray;
}

function HangmanGame(){
    
        const [color, setColor] = useState('gray');
        const [showSecret, setShowSecret] = useState('block');
        const [showGuess, setShowGuess] = useState('none');
        let wrongAnswerCounter = 0; //6 mistakes is game over

        let guessCharacterIndex = -1;
        const [guess, setGuess] = useState("");

        let secretWordArray = [];
        const [secret, setSecret] = useState("");
        const [guessBlanksArray, setGuessBlanks] = useState([]);

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
                setGuessBlanks(createHangmanBlanks(secretWordArray));
            }
        }

        function handleGuessUpdate(ev){
            setGuess(ev.target.value.slice(-1));//Set to final character in guess text box
            console.log(guess);
        }

        function handleGuessConfirm(ev){
            guessCharacterIndex = secret.indexOf(guess);
            console.log("activating");
            if (guessCharacterIndex === -1){
                setColor('red');

                wrongAnswerCounter++;
                if(wrongAnswerCounter === 6){
                    alert("The game is over, you lose...");
                }
            } else {
                setColor('green');

                const guessBlanksArrayTemp = [...guessBlanksArray];
                for(var index = 0; index < secretWordArray.length; index++) {
                    if(secretWordArray[index] === guess) {
                        guessBlanksArrayTemp[index] = guess;
                    }
                }
                setGuessBlanks(guessBlanksArrayTemp);

                if (guessBlanksArray.indexOf("_") === -1) {
                    alert("You win, good job!")
                }

            }
        }


        return(
            <div className = 'container' style={{background: color}}>             
                <input 
                    type='text'
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

                <div className = "container">
                    {guessBlanksArray.map((elm, index) => 
                        { return (<div key = {elm.id}> {elm.character} </div>) }
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
                    onKeyUp={handleGuessUpdate}>

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