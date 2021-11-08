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
    const [wrongs, setWrongs] = useState(0);

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
            let tempWord = randomWord;
            
            console.log('YES');
            setColor('green');

            console.log(revealedWordArray);
    
            const index = revealedWordArray.findIndex(letter=> letter.word === lastChar);
            const wordArrayTemp = [...word];
            
            wordArrayTemp[index] = lastChar;

            console.log("random word = " + randomWord);
            
            tempWord = tempWord.slice(0, index) + tempWord.slice(index + 1);
            console.log("temp word = " + tempWord);

            if (tempWord.includes(lastChar)) {
                const doubleLetterArray = [...tempWord];
                const index2 = doubleLetterArray.indexOf(lastChar);
                console.log("INDEX 2 " + index2);
                
                if (index2 > index) {
                    wordArrayTemp[index2+1] = lastChar;
                }
                else if (index2 == index) {
                    wordArrayTemp[index2 + 1] = lastChar;
                }
                else {
                    wordArrayTemp[index2] = lastChar;
                }

            }
            
            console.log("WORD TEMP " + wordArrayTemp);
            setWord(wordArrayTemp);
            
            
            
            

        }
        else {
            setColor('red');
            setWrongs(wrongs + 1);
            if (wrongs >= 6) {
                console.log("Game Over");
            }
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

            {/* <div className='structureTop' style = {{display: setShowDom('none')}}></div> */}
        </div>


    )
}


export default Hangman;