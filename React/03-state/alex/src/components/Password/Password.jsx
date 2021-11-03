import React, { useState } from 'react';
import "./Password.css";


function Password() {

    const [password, setPassword] = useState();
    const [passwordArray, setPasswordArray] = useState([]);
    const [showDom, setShowDom] = useState('block');
    const [text, setText] = useState();
    const [color, setColor] = useState('red');

    function handleSubmit(ev) {
        ev.preventDefault();

        setPassword(ev.target.elements.pass1.value);
        // document.getElementById("container").style.display = 'none';
        setShowDom('none');
        setPasswordArray(ev.target.elements.pass1.value.split(''));
        console.log(passwordArray);

    }

    function handleWriting(ev){
        setText(ev.target.value)
        const lastChar = ev.target.value.slice(-1)

        if (password.includes(lastChar)) {
            setColor('green');
        }
        else {
            setColor('red');
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
                passwordArray.map((letter,index)=>{
                    return(<div key={index}>[  ]</div>)
                })
                }
            </div>
            
            <div>
                <div className='hangman'></div>
                <div className = 'box' style={{background:color}}></div>

                Guess a letter: 
                <input type = 'text' placeholder = 'Input guess here' onKeyUp = {handleWriting} maxLength="1" />
                <div className = 'textContainer' id = 'textbox'/>
                {text}
            </div>
        </div>
    )

}
export default Password;