import {useState} from 'react';
import './TextInput.css'

function TextInput(){
    const[text, setText]= useState('');
    function handleonkeyup(){
        setText(text)
    }
    
    return(
        <div className= 'TextInput' onKeyUp={handleonkeyup}>Write Here --> {text} 
        <input type= 'text'></input>

        </div>
    )
}
export default TextInput;   