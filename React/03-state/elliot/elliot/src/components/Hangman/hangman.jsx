import {useState} from 'react';
import './hangman.css'

/*
                <input 
                    type='text'
                    id = 'inputActualWord'
                    placeholder='Input The Secret Word Here:'
                    onKeyUp={handleTargetWord}> 
                </input>

                <input
                    type='button'
                    id = 'secretWordConfirm'
                    onClick={handleTargetWordConfirmation}> Confirm Secret Word
                </input>
*/

function HangmanGame(props){
    
    //[state, setterOfState] = useState(initialVal)   
        const [color, setColor] = useState('gray');
        let fullSecretWord = props.guessWord.toLowerCase();
        //let inputSecretWord = '';
        let inputGuess = '';
        //let blurredWord = '';

        /*function handleTargetWord(ev){
            inputSecretWord = ev.target.value;
        }

        function handleTargetWordConfirmation(){
            fullSecretWord = props.inputSecretWord.toLowerCase();
            blurredWord = 'X'.repeat(fullSecretWord.length());
            document.getElementById('inputActualWord').style.display = blurredWord;
        }*/

        function handleNewGuess(ev){
            inputGuess = ev.target.value;
            let inputChar = inputGuess.slice(-1)
            compareGuess(inputChar)
        }
    
        function compareGuess(letter){
            letter = letter.toLowerCase();
            console.log(letter);
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
                    placeholder='Input Your Guess Letters Here:'
                    onKeyUp={handleNewGuess}>
                </input>

                <div 
                    className = 'textContainer'
                    id='textbox'>
                    {inputGuess}
                </div>
            </div>
            
        )
    }
    
    export default HangmanGame;