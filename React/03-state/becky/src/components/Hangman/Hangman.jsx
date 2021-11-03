import React, {useState} from 'react';
import './Hangman.css';

let word; 
let dashes = [];

function Hangman() {
    const [text, setText] = useState();
    const [color, setColor] = useState('red');
    const [showDom, setShowDom] = useState('block')
    const [guessWordArray, setGuessWordArray] = useState([])
    let userInput;
    
    function handleSubmit(ev){
        ev.preventDefault();
        word = ev.target.elements.secretWord.value
        let wordarr = word.split("");
        console.log(word);
        // ev.target.style.display = "none";
        setShowDom('none')
        // word.setShowDom()
        for(let i=0; i<wordarr.length; i++){
            guessWordArray.push(wordarr[i]);
            dashes[i]= '_'
        }
        console.log(guessWordArray);
        console.log(dashes);
        
       

    }

    function handleWriting(ev){
        setText(ev.target.value)
        const lastChar = ev.target.value.slice(-1)

        if (word.includes(lastChar)) {
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
            <div className = 'box' style={{background:color}}></div>
            Type your guess: 
            <input type = 'text' maxlength = "1"
                    placeholder = 'Input guess here'
                    onKeyUp = {handleWriting} />
            <div 
            className = 'textContainer'
            id = 'textbox'
            />
            {text}
            <div className = "wrapper">
             {dashes.map((letter, index)=>{
                return(<div key={index}>"{letter}"</div>)
        }
            )}
            </div>
           
        </div>
       
    )
}


export default Hangman;

