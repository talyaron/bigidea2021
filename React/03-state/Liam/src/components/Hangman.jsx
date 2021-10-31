import { useState } from 'react';
import './hang.css';

let word = 'tiger';
function Hangman() {
    const [color, setColor] = useState('yellow');
    const [text, setText] = useState('');

    function checkText(ev) {
        setText(ev.target.value);


        if (true) {
            setColor('green');
        } else {
            setColor('red');
        }
    }



    return (
        <div>
            <div className="check" style={{ background: color }} >

            </div>
           
            <input type='text' id='ctr' onKeyUp={checkText} />
        </div>

    )
}

export default Hangman