import React, {useState} from 'react';
import './Hangman.css';

let randomWord = 'tiger'; 

function Hangman() {
    const [text, setText] = useState();
    const [color, setColor] = useState('red');
    

    function handleKeyPress(ev){
        setText(ev.target.value)
        let lastChar = ev.target.value.slice(-1)

        if (randomWord.includes(lastChar)) {
            console.log('Correct letter');
            setColor('green');
            // console.log('GREEN')
        }
        else {
            setColor('red');
            // console.log('RED')
        }
            
    }



    return (

        <div>
            <div className='hangman'></div>
            <div className = 'box' style={{background:color}}></div>

            Guess a letter 
            <input type = 'text' onKeyUp = {handleKeyPress} />
            <div className = 'textContainer'id = 'textbox'/>
            {text}
        </div>
    )
}


export default Hangman;