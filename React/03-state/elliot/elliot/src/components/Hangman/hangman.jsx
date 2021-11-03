import {useState} from 'react';
import './hangman.css'

//let word = [a, c, t, u, a, l, l, y]
//<div className = "wrapper"> {word.map(letter,index) => return( <p key={index}> {letter} </p> )} </div>
//This creates a list of words

function HangmanGame(props){
    
        const [color, setColor] = useState('gray');
        let fullSecretWord = props.guessWord.toLowerCase();
        let inputGuess = '';
        let inputChar = '';

        function handleNewGuess(ev){
            inputGuess = ev.target.value; //Stores the inserted guess
            inputChar = inputGuess.slice(-1) //Gets the last letter of the inserted guess
            compareGuess(inputChar)
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