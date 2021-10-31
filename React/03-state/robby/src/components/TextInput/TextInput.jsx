import {useState} from 'react';
import './TextInput.css'

function TextInput(){
    const[text, setText]= useState('here');
    function handleonkeyup(ev){
        setText(ev.target.value)
    }
    
    return(
        <div> 
            
        <input type= 'text' name = "TextInput" onKeyUp={handleonkeyup}></input>

        <div id= "textHere">{text}</div>
        </div>
    )
}
export default TextInput;  

