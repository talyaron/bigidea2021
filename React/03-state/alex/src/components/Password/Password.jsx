import React, { useState } from 'react';
import "./Password.css";

let passwordArray = [];

function Password() {

    const [password, setPassword] = useState();
    const [blankPasswordArray, setBlankPasswordArray] = useState([]);
    const [showDom, setShowDom] = useState('block');
    const [showDom2, setShowDom2] = useState('block');
    const [text, setText] = useState("Incorrect Guesses: ");
    const [color, setColor] = useState('red');

    function handleSubmit(ev) {
        ev.preventDefault();

        setPassword(ev.target.elements.pass1.value);
        // document.getElementById("container").style.display = 'none';
        setShowDom('none');
        passwordArray = (ev.target.elements.pass1.value.split(''));
        console.log(passwordArray);

        for(let i = 0;i<passwordArray.length;i++){
            blankPasswordArray.push('[ ]')
        }
        console.log(blankPasswordArray);

    }

    function handleWriting(ev){
        const lastChar = ev.target.value.slice(-1)

        if(passwordArray.includes(lastChar)){
            setColor('green');
        }
        else {
            setText(text + ev.target.value);
            console.log(text.length)
            setColor('red');
        }

        while (passwordArray.includes(lastChar)) {
            blankPasswordArray[passwordArray.indexOf(lastChar)] = lastChar;
            passwordArray[passwordArray.indexOf(lastChar)] = 'Guessed'
        }

        if(text.length == 24){
            setText("You Lose!")
            setShowDom2('none');
        }
        if(!blankPasswordArray.includes('[ ]')){
            setText("You Win!");
            setShowDom2('none');
        }

            
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id='container' style={{ display: showDom }}>
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
            
            <div>
                
                <div className = 'box' style={{background:color}}></div>

                <div className = 'inputContainer' style={{ display: showDom2 }}>
                    Guess a letter: 
                    <input type = 'text' placeholder = 'Input guess here' onKeyUp = {handleWriting} maxLength="1" />
                </div>

                <div className = 'textContainer' id = 'textbox'/>
                {text}
            </div>
        </div>
    )

}
export default Password;