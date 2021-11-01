import React, {useState} from 'react';
import './Hangman.css';

let randomWord = 'tiger'; 


function Hangman() {
    const [text, setText] = useState();
    const [color, setColor] = useState('red');
    const [showDom, setShowDom] = useState('block')
    let userInput;
    
    function handleSubmit(ev){
        ev.preventDefault();
        let word = ev.target.elements.secretWord.value
        console.log(word);
        // ev.target.style.display = "none";
        setShowDom('none')
        word.setShowDom()
        
       

    }

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
            <form onSubmit={handleSubmit} id = 'container' style = {{ display: showDom}}>
                <input type="password" name="secretWord" id="form" />
                <input type="submit"  value= 'hide' />
            </form>
            {/* <div className = 'box' style={{background:color}}></div>
            Type your guess: 
            <input type = 'text'
                    placeholder = 'Input guess here'
                    onKeyUp = {handleWriting} />
            <div 
            className = 'textContainer'
            id = 'textbox'
            />
            {text} */}
            <div className ='wrapper'>
             { word.map((letter, index)=>{
            return(<div key={index}>{letter}</div>)
        }
            )}
            </div>
        </div>
       
    )
}


export default Hangman;

