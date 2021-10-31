import {useState} from 'react';
import './hangman.css'

function HangmanGame(props){
    
    //[state, setterOfState] = useState(initialVal)   
        const [guessIndicatingColor, setColor] = useState('gray'); 
        //style={{background: guessIndicatingColor}}

        let fullWordToGuess = props.letterToGuess;
        let letterToCompare = '';

        const [userGuessText, setText] = useState(''); //Text in this case being a single word
        let newLetterInput = '';
        let isLetterPresent = false;
        //let userGuessCompareSegment = '';
        //Set to lower case, ignoring capital letters for input value too
    
        function handleWriting(ev){
            setText(ev.target.value)
            //setForComparison()
            compareGuess()
        }
    
        /*
        function setForComparison(){
            if(userGuessText.length > 0){
                if(userGuessText.length <= fullWordToGuess.length){
                    userGuessCompareSegment = fullWordToGuess.substring(0, userGuessText.length).toLowerCase();
                } else {
                    userGuessCompareSegment = '';
                }
            } else {
                userGuessCompareSegment = '';
            }
        }*/

        function compareGuess(){
            letterToCompare = userGuessText.substring(userGuessText.length);
            newLetterInput = fullWordToGuess.match(letterToCompare);
            if (newLetterInput == false){
                isLetterPresent = false;
                setColor('red');
            } else {
                isLetterPresent = true;
                setColor('green');
            }
        }

        return(
            <div className = 'container' style={{background: guessIndicatingColor}}>
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