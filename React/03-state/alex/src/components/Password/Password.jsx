import React, { useState } from 'react';
import "./Password.css";
import stickfigure from "./stickfigure.png";

let passwordArray = [];

function Password() {

    const [password, setPassword] = useState();
    const [blankPasswordArray, setBlankPasswordArray] = useState([]);
    const [showDom, setShowDom] = useState('block');
    const [showDom2, setShowDom2] = useState('block');
    const [showDom3, setShowDom3] = useState('none');
    const [text, setText] = useState("Incorrect Guesses: ");
    const [color, setColor] = useState('red');
    const [figureMove, setFigureMove] = useState(60);

    function handleSubmit(ev) {
        ev.preventDefault();

        setPassword(ev.target.elements.pass1.value);
        setShowDom('none');
        setShowDom3('block');
        passwordArray = (ev.target.elements.pass1.value.split(''));
        console.log(passwordArray);

        for(let i = 0;i<passwordArray.length;i++){
            blankPasswordArray.push('[ ]')
        }
        //console.log(blankPasswordArray);

    }

    function handleWriting(ev){
        const nonStateArray = [...blankPasswordArray]
        const lastChar = ev.target.value.slice(-1);
        let tempBlankPasswordArray = nonStateArray
        if(ev.code != 'Backspace'){

            if(passwordArray.includes(lastChar)){
                setColor('green');
            }
            else {
                setText(text + ev.target.value);
                setColor('red');
                setFigureMove(figureMove+33.33);
            }
            console.log(text.length)

            

           
        }

        if(text.length == 25){
            setText("You Lose!")
            setShowDom2('none');
        }
        if(!tempBlankPasswordArray.includes('[ ]')){
            setText("You Win!");
            setShowDom2('none');
        }

        
        
        while (passwordArray.includes(lastChar)) {
            
            const indexOfLetter = passwordArray.indexOf(lastChar)
            tempBlankPasswordArray[indexOfLetter] = lastChar;
            passwordArray[passwordArray.indexOf(lastChar)] = 'Guessed'
            console.log('Ding!')
        }
        console.log(blankPasswordArray);
        console.log(passwordArray)
        setBlankPasswordArray(tempBlankPasswordArray);

            
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id='container' style={{ display: showDom }}>
                <div>Enter a Word to Start Hangman!</div> 
                <input type="password" name='pass1' placeholder="Enter Password"></input>
                <input type='submit'></input>
            </form>

            <div className='wrapper'>
                {
                blankPasswordArray.map((letter,index)=>{
                    return(<div key={index}>{letter}</div>)
                })
                }
            </div>
            
            <div className = 'daGamePart' style={{display: showDom3}}>
                
                <div className = 'box' style={{background:color}}></div>

                <div className = 'inputContainer' style={{ display: showDom2 }}>
                    Guess a letter: 
                    <input type = 'text' placeholder = 'Input guess here' onKeyUp = {handleWriting} maxLength="1" />
                </div>

                <div className = 'textContainer' id = 'textbox'/>
                {text}
                <div>
                </div>
            </div>
            

            <img style={{position: "relative",width:"300px", height:"300px",top:(figureMove+'px')}} src={stickfigure} alt='Error'></img>
            <div style={{positon:'relative',background:'red',width:'100vw',height:'300px'}}></div>


        </div>
    )

}
export default Password;