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

    // let leg1 = document.getElementById('leg1').style="display:none";
    // let leg2 = document.getElementById('leg2').style="display:none";
    // let arm1 = document.getElementById('arm1').style="display:none";
    // let arm2 = document.getElementById('arm2').style="display:none";
    // let head = document.getElementById('head').style="display:none";
    // let body = document.getElementById('body').style="display:none";
    
    
    
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
    function handleWriting(ev) {
        setText(ev.target.value)
        const lastChar = ev.target.value.slice(-1)
        
        
        if (hiddenElements.includes(lastChar)) {
            console.log('YES');
            setColor('green');
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
        switch(life){
            case 1:
                console.log('1')
                break;
            case 2:
                console.log('2')
                break;
            case 3:
                console.log('3')
                break;
            case 4:
                console.log('4')
                break;
            case 5:
                console.log('5')
                break;
            case 6:
                console.log('6')
                break;
            case 7:
                if(alert(`you lost the word was ${SecWord}`)){}
                else    window.location.reload(); 
        }
    return (
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

            <div className='hangCont'>
                <img src={circle} alt="head" id='head' className={Shows? 'show'}/>
                <img src={line} alt="leg1" id='leg1' />
                <img src={line} alt="leg2" id='leg2' />
                <img src={line} alt="body" id='body' />
                <img src={line} alt="arm1" id='arm1' />
                <img src={line} alt="arm2" id='arm2' />
                
            </div>
        </div>
    )
}

export default HideWord;
