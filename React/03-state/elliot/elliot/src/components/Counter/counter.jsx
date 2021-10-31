import {useState} from 'react';
import './counter.css'


function Counter(){
    
//[state, setterOfState] = useState(initialVal)
    const [counter, setCounter] = useState(1);
    const [text, setText] = useState();

    function handleClick(){
        setCounter(counter+1)
    }

    function handleWriting(ev){
        setText(ev.target.value)
    }

    return(
        <div className = 'container'>
            <div 
                className = 'counter' 
                onClick={handleClick}>
                Counter: {counter}
            </div>
            <input 
                type='text'
                placeholder='Input Words Here'
                onKeyUp={handleWriting}>
            </input>
            <div 
                className = 'textContainer'
                id='textbox'>
                {text}
            </div>
        </div>
        
    )
}

export default Counter;