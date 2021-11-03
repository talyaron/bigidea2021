import React, {useState} from 'react';
import './Hangman.css';

function createIndex(arr){
    const listArray = arr.map((letter, index)=>{
        return {word:letter, id:index}
    })
    console.log(listArray);
    return listArray;
}

function Hangman() {
    const [text, setText] = useState();
    const [color, setColor] = useState('red');
    const [showDom, setShowDom] = useState('block');
    const [word, setWord] = useState([]);
    const [randomWord, setRandomWord] = useState([]);

    let userInput;
    let password;
    let wordArray = [];
    
    
    function handleSubmit(ev) {
        ev.preventDefault();
        password = ev.target.elements.secretWord.value;
        console.log("password = " + password);
        setRandomWord(password);

        for (let i = 0; i < password.length; i++) {
            wordArray[i] = password.substring(i, i+1);
        }

        setWord(createIndex(wordArray));
        console.log(wordArray);

        
        setShowDom('none');

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
            <div className='hangman'>
                <form onSubmit={handleSubmit} id = "container" style = {{display: showDom}}>
                    <input type="password" name="secretWord" placeholder ="Type password here" />
                    <input type="submit" value="hide" />
                </form>
            

                
            </div>


            <div className = 'box' style={{background:color}}></div>

            

            Type your guess: 
            <input type = 'text'
                    placeholder = 'Input guess here'
                    onKeyUp = {handleWriting} 
                    maxLength = "1"/>
            
            
            


            <div 
            className = 'textContainer'
            id = 'textbox'
            />
            {text}

            <div className = "wrapper">

                    {
                        word.map((letter, index)=>{
                            return(<div key={index}>[]</div>)
                    })
                    }
                </div>
        </div>

                    
    )
}


export default Hangman;