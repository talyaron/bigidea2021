import {useState} from 'react';
import './hangman.css'

function HangmanGame(props){
    
    //[state, setterOfState] = useState(initialVal)   
        const [color, setColor] = useState('gray'); 
        let guessWord = props.guessWord;
    
        function handleWriting(ev){
            let inputGuess = ev.target.value;
            let inputChar = inputGuess.slice(-1)
            compareGuess(inputChar)
        }
    
        function compareGuess(letter){
            letter = letter.toLowerCase();

            if (guessWord.match(letter)){
                setColor('red');
            } else {
                setColor('green');
            }
        }

        return(
            <div className = 'container' style={{background: color}}>
                <div 
                    className = 'textContainer'
                    id='emptyPlaceholder'>
                </div>
                <input 
                    type='text'
                    placeholder='Input Words Here'
                    onKeyUp={handleWriting}>
                </input>
                <div 
                    className = 'textContainer'
                    id='textbox'>
                    {userGuessText}
                </div>
            </div>
            
        )
    }
    
    export default HangmanGame;