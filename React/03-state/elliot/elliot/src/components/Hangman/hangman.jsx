import {useState} from 'react';
import './hangman.css'

var letters = /^[A-Za-z]+$/;
//let word = [a, c, t, u, a, l, l, y]
//<div className = "wrapper"> {word.map(letter,index) => return( <p key={index}> {letter} </p> )} </div>
//This creates a list of words

function HangmanGame(props){
    
        const [color, setColor] = useState('gray');
        const [guess, setGuess] = useState("");
        const [secret, setSecret] = useState("");
        const [showSecret, setShowSecret] = useState('block');

        let fullSecretWord = "";
        let inputGuess = "";
        //let secretWordArray = fullSecretWord.split("");
        //let emptyBoxes = secretWordArray;
        //emptyBoxes.map(x => "_");

        function handleSecretUpdate(ev){
            setSecret(ev.target.value);
        }

        function handleSecretInput(){
            if(secret.match("")){
                alert("Your secret word cannot be empty.")
            } else {
                setShowSecret('none')
                fullSecretWord = secret.toLowerCase();
            }
        }

        function handleGuessUpdate(ev){
            inputGuess = ev.target.value; //Stores the inserted guess
            setGuess(inputGuess.slice(-1)); //Gets the last letter of the inserted guess
            compareGuess(guess)
        }

        function handleGuessConfirm(ev){

        }
    
        function compareGuess(letter){
            letter = letter.toLowerCase();
            
            if (fullSecretWord.match(letter)){
                setColor('green');
            } else {
                setColor('red');
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


                <div>
                    Placeholder for empty text boxes
                </div>
                <div>
                    Placeholder for empty space
                </div>


                <input 
                    type='text'
                    placeholder='Input Your Guess Letter Here:'
                    id = 'inputStageTwoText'
                    onKeyUp={handleGuessUpdate}>

                </input>
                <input
                    type='button'
                    value='Confirm Guess Letter'
                    id = 'inputStageTwoButton'
                    onKeyUp={handleGuessConfirm}>
                    
                </input>
            </div>
            
        )
    }
    
export default HangmanGame;