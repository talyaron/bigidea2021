import React, {useState} from 'react';
import './Counter.css'

//we will use useState hook

function Counter(){
    //[state, setterOfState] = useState (initial value)
    const [counter, setCounter] = useState(1);
    const [text, setText] = useState();
    let userInput;
    

    function handleClick(){
        setCounter(counter+1)
    }

    function handleWriting(ev){
        setText(ev.target.value)
        userInput = ev.target.value
        console.log(userInput)
    }

    return (


        <div 
        className='counter'
        onClick={handleClick}>
        Counter: {counter}
        
        <input type='text' 
                placeholder = 'Input Words Here'
                onKeyUp={handleWriting}/> 
        <div
            className = 'textContainer'
            id = 'textbox'>
            {text}
            
        </div>
        </div>
    )
}



export default Counter;