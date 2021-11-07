import './input.css'
import {useState} from 'react';

function TextInput(){
    const[text, setText] = useState('---->text here<----')

    function handlekyeUp(ev){
        setText(ev.target.value)
        
    } 


    return(
        <div>
        <input type="text" name="textinput" onKeyUp={handlekyeUp}/>

        <div id = "textHere">{text}</div>
        </div>

    )
}

export default TextInput;