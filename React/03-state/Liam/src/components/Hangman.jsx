import './hang.css';
import hangman1 from '/img.hangman.jpg';
import hangman2 from '/img.hangman2.jpg';
import React, {useState} from 'react';

let word;
let hiddenletter = [];
let wordarr= [];


function Hangman() {
    const [text, setText] = useState();
    const [color, setColor] = useState('white');
    const [showDom, setShowDom] = useState('block')
    const [guessWordArray, setGuessWordArray] = useState([])
    let userInput;
    
    
    function handleSubmit(ev){
        ev.preventDefault();
        word = ev.target.elements.secretWord.value
        wordarr = word.split("");
        console.log(word);
        setShowDom('none')
        for (let i = 0; i < wordarr.length; i++) {
            guessWordArray.push(wordarr[i]);
            hiddenletter[i] = '[]'
        }
        console.log(guessWordArray);
        console.log(hidden0letter);



    }

    function handleWords(ev) {
        setText(ev.target.value)
        const lastChar = ev.target.value.slice(-1)

        if (word.includes(lastChar)) {
            console.log('YES');
            setColor('green');
            for(let x=0; x<=wordarr.length; x++){
                if(lastChar==wordarr[x]){
                    hiddenletter[x]= lastChar;
                }
            }

            }
        else {
            setColor('red');
        }

    }



    return (

        <div>
            <div className='hangman'></div>
            <form onSubmit={handleSubmit} id='container' style={{ display: showDom }}>
                <input type="password" name="secretWord" id="form" />
                <input type="submit" value='hide' />

            </form>
            <div className = 'box' style={{background:color}}></div>
            Type your guess: 
            <input type = 'text' maxLength = "1"
                    placeholder = 'Input guess here'
                    onKeyUp = {handleWords} />
            <div 
            className = 'textContainer'
            id = 'textbox'
            />
            {text}
            <div className="wrapper">
                {hiddenletter.map((letter, index) => {
                    return (<div key={index}>{letter}</div>)
                }
                )}
            </div>

        </div>

    )
}
function Box(props) {

    const isOne = props.isOne;

    if (isOne) {
        return (

            <div>

                <img src={hangman1} />
            </div>
        )
    } else {
        return (
            <div>
                <img src={hangman2} />
            </div>
        )
    }

}


export default Hangman;

