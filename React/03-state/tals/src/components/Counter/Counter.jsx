import { useState } from 'react';
import './Counter.css'

//we will use useState hook

function Counter() {
    //[state, setterOfState] = useState (initial value)
    const [counter, setCounter] = useState(1);
    const [text, setText] = useState('')

    function handleClick() {
        setCounter(counter + 1)
    }
    
    function handleKeyUp(ev){
        setText(ev.target.value)
    }

    return (

        <div
            className='counter'
            onClick={handleClick}
        >
            <span>Counter: {counter}</span>
            <br />
            <input type='text' onKeyUp={handleKeyUp} />
            <p>Text:{text}</p>
        </div>
    )
}




export default Counter;