import React, { useState } from 'react';
import './Hangman.css';

function createIndex(arr) {
    const listArray = arr.map((letter, index) => {
        return { word: letter, id: index }
    })

    return listArray;
}

function Hangman() {
    const [text, setText] = useState();
    const [color, setColor] = useState('red');
    const [showDom, setShowDom] = useState('block');
    const [word, setWord] = useState([]);
    const [revealedWord, setrevealedWord] = useState([]);
    const [randomWord, setRandomWord] = useState([]);

    let userInput;
    let secretWord2;




    function handleSubmit(ev) {
        ev.preventDefault();
        secretWord2 = ev.target.elements.secretWord.value;
        console.log("secretWord2 = " + secretWord2);
        let revealedWordArray = [];
        let wordArray = [];
        setRandomWord(secretWord2);

        for (let i = 0; i < secretWord2.length; i++) {
            revealedWordArray[i] = secretWord2.substring(i, i + 1);
            wordArray[i] = '[_]';
        }
        revealedWordArray = createIndex(revealedWordArray);
        console.log(revealedWordArray);
        console.log(wordArray);
        setrevealedWord(revealedWordArray);
        setWord(wordArray);


        setShowDom('none');

    }

    function handleWriting(ev) {
        setText(ev.target.value)
        const lastChar = ev.target.value.slice(-1)


        if (randomWord.includes(lastChar)) {

            const revealedWordArray = [...revealedWord];
            
            console.log('YES');
            setColor('green');

            console.log(revealedWordArray);
    
            const index = revealedWordArray.findIndex(letter=> letter.word === lastChar);
            const wordArrayTemp = [...word];
            wordArrayTemp[index] = lastChar;
                
            setWord(wordArrayTemp);
            
            
            
            

        }
        else {
            setColor('red');
        }

    }





    return (

        <div>
            <div className='hangman'>
                <form onSubmit={handleSubmit} id="container" style={{ display: showDom }}>
                    <input type="secretWord2" name="secretWord" placeholder="Type secretWord2 here" />
                    <input type="submit" value="hide" />
                </form>



            </div>


            <div className='box' style={{ background: color }}></div>



            Type your guess:
            <input type='text'
                placeholder='Input guess here'
                onKeyUp={handleWriting}
                maxLength="1" />
            <div
                className='textContainer'
                id='textbox'
            />
            {text}

            <div className="wrapper">

                {
                    word.map((letter, index) => {
                        console.log(letter)
                        return (<div key={index}>{letter}</div>)
                    })
                }
            </div>
        </div>


    )
}


export default Hangman;