import React, {useState} from 'react';
import './Hangman.css';

let randomWord = 'tiger'; 

function Hangman() {
    const [text, setText] = useState();
    const [color, setColor] = useState('red');
    let userInput;
    

    function handleWriting(ev){
        setText(ev.target.value)
        const lastChar = ev.target.value.slice(-1)

        if (randomWord.includes(lastChar)) {
            console.log('YES');
            setColor('green');
        }
        else {
            setColor('red');
        }
            
    }



    return (

        <div>
            <div className='hangman'></div>
            <div className = 'box' style={{background:color}}></div>

            Type your guess: 
            <input type = 'text'
                    placeholder = 'Input guess here'
                    onKeyUp = {handleWriting} />
            <div 
            className = 'textContainer'
            id = 'textbox'
            />
            {text}
        </div>
    )
}


export default Hangman;

