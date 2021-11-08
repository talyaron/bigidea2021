import { useState } from 'react';
import './HideWord.css';
import line from './line.png';
import circle from './circle.png';

let SecWord = []
let hiddenElements;
let setLifeTemp = 0

function HideWord(props) {
    const [tempArr, setTempArr] = useState([])
    const [color, setColor] = useState('red');
    const [text, setText] = useState();
    const [secWordBlanks, setSecWordBlanks] = useState([]);
    const [life, setLife] = useState(0)

    
    function handleHideWord(ev) {

        ev.preventDefault()
        hiddenElements = ev.target.elements.hidden.value;
        ev.target.style.display = 'none';
        SecWord = hiddenElements.split('')
        console.log(SecWord)
        const secWordBlanksTemp = [];
        
        for (let i = 0; i < SecWord.length; i++) {
            tempArr.push(SecWord[i])
            secWordBlanksTemp[i] = '_'
        }
        console.log(secWordBlanksTemp)
        setSecWordBlanks(secWordBlanksTemp)
    }
    
    let correctL = hiddenElements;
    let correctGL = '';


    function handleWriting(ev) {
        setText(ev.target.value)
        const lastChar = ev.target.value.slice(-1)

        
        console.log(SecWord)
        console.log(secWordBlanks)

        if(correctGL != correctL){
            if (hiddenElements.includes(lastChar)) {
                    console.log('YES');
                    setColor('green');
                    correctGL = lastChar + correctL
                    for(let x = 0; x<=SecWord.length; x++){
                        if(lastChar === SecWord[x]){
                            secWordBlanks[x] = lastChar
                        }
                    }
                }
                else {
                    setColor('red');
                    setLifeTemp ++
                    setLife(setLifeTemp)
                }
        }
            else{
                if(alert(`you won!!! the word was: ${hiddenElements}`)){}
                else{window.location.reload();}
            }
        }
    
        switch(life){
            case 0:
                return(
                    <div className='hangman'>
                        <form onSubmit={handleHideWord}>
                            <input type="password" placeholder='Input secret word here' name='hidden' />
                            <input type='submit' value='hide' />
                        </form>
                        
                        <input type='text' maxLength="1" placeholder='Input guess here' onKeyUp={handleWriting} />
                        <div className='textContainer' id='textbox' /> 
                        <div className="wrapper">
                            {secWordBlanks.map((letter, index) => {
                                return (<div key={index}>[{letter}]</div>
                            )})}
                        </div>
                        <div className='box' style={{ background: color }}>Green = Correct letter<br/>Red = Wrong letter</div>
                    </div>
    )
    
    
            case 1:
                console.log('1')
                return(
                    <div className="hangman">
                        <input type='text' maxLength="1" placeholder='Input guess here' onKeyUp={handleWriting} />
                        <div className='textContainer' id='textbox' /> 
                        <div className="wrapper">
                            {secWordBlanks.map((letter, index) => {
                                return (<div key={index}>[{letter}]</div>
                            )})}
                        </div>
                        <div className='box' style={{ background: color }}>Green = Correct letter<br/>Red = Wrong letter</div> 
                        <div className='hangCont'>
                            <img src={circle} alt="head" id='head'/>
                        </div>
                    </div>

                )
                
            case 2:
                console.log('2')
                return(
                    <div className="hangman">
                        <input type='text' maxLength="1" placeholder='Input guess here' onKeyUp={handleWriting} />
                        <div className='textContainer' id='textbox' /> 
                        <div className="wrapper">
                            {secWordBlanks.map((letter, index) => {
                                return (<div key={index}>[{letter}]</div>
                            )})}
                        </div>
                        <div className='box' style={{ background: color }}>Green = Correct letter<br/>Red = Wrong letter</div> 
                        <div className='hangCont'>
                            <img src={line} alt="body" id='body' />
                            <img src={circle} alt="head" id='head'/>
                    </div></div>
                    )
            case 3:
                console.log('3')
                return(
                    <div className="hangman">
                        <input type='text' maxLength="1" placeholder='Input guess here' onKeyUp={handleWriting} />
                        <div className='textContainer' id='textbox' /> 
                        <div className="wrapper">
                            {secWordBlanks.map((letter, index) => {
                                return (<div key={index}>[{letter}]</div>
                            )})}
                        </div>
                        <div className='box' style={{ background: color }}>Green = Correct letter<br/>Red = Wrong letter</div> 
                        <div className='hangCont'>
                            <img src={line} alt="body" id='body' />
                            <img src={circle} alt="head" id='head'/>
                            <img src={line} alt="arm1" id='arm1' />
                        </div>
                    </div>
                    )
            case 4:
                console.log('4')
                return(
                    <div className="hangman">
                        <input type='text' maxLength="1" placeholder='Input guess here' onKeyUp={handleWriting} />
                        <div className='textContainer' id='textbox' /> 
                        <div className="wrapper">
                            {secWordBlanks.map((letter, index) => {
                                return (<div key={index}>[{letter}]</div>
                            )})}
                        </div>
                        <div className='box' style={{ background: color }}>Green = Correct letter<br/>Red = Wrong letter</div> 
                        <div className='hangCont'>
                            <img src={line} alt="body" id='body' />
                            <img src={circle} alt="head" id='head'/>
                            <img src={line} alt="arm1" id='arm1' />
                            <img src={line} alt="arm2" id='arm2' />
                        </div>
                    </div>
                    )
            case 5:
                console.log('5')
                return(
                    <div className="hangman">
                        <input type='text' maxLength="1" placeholder='Input guess here' onKeyUp={handleWriting} />
                        <div className='textContainer' id='textbox' /> 
                        <div className="wrapper">
                            {secWordBlanks.map((letter, index) => {
                                return (<div key={index}>[{letter}]</div>
                            )})}
                        </div>
                        <div className='box' style={{ background: color }}>Green = Correct letter<br/>Red = Wrong letter</div> 
                        <div className='hangCont'>
                            <img src={line} alt="body" id='body' />
                            <img src={circle} alt="head" id='head'/>
                            <img src={line} alt="arm1" id='arm1' />
                            <img src={line} alt="arm2" id='arm2' />
                            <img src={line} alt="leg1" id='leg1' />
                        </div>
                    </div>
                    )
            case 6:
                console.log('6')
                return(
                    <div className="hangman">
                        <input type='text' maxLength="1" placeholder='Input guess here' onKeyUp={handleWriting} />
                        <div className='textContainer' id='textbox' /> 
                        <div className="wrapper">
                            {secWordBlanks.map((letter, index) => {
                                return (<div key={index}>[{letter}]</div>
                            )})}
                        </div>
                        <div className='box' style={{ background: color }}>Green = Correct letter<br/>Red = Wrong letter</div> 
                        <div className='hangCont'>
                            <img src={line} alt="body" id='body' />
                            <img src={circle} alt="head" id='head'/>
                            <img src={line} alt="arm1" id='arm1' />
                            <img src={line} alt="arm2" id='arm2' />
                            <img src={line} alt="leg1" id='leg1' />
                            <img src={line} alt="leg2" id='leg2' />
                        </div>
                    </div>
                    )
            case 7:
                if(alert(`you lost the word was ${hiddenElements}`)){}
                else{window.location.reload();}
                return(
                        <div className='hangCont'>
                            <img src={line} alt="body" id='body' />
                            <img src={circle} alt="head" id='head'/>
                            <img src={line} alt="arm1" id='arm1' />
                            <img src={line} alt="arm2" id='arm2' />
                            <img src={line} alt="leg1" id='leg1' />
                            <img src={line} alt="leg2" id='leg2' />
                        </div>
                    )
                
        }
}

export default HideWord;
