import { useState } from 'react';
import './ctr.css';

//we will use useState hook

function Counter() {
    //[state, setterOfState] = useState (initial value)
    const [counter, setCounter] = useState(1);

    function handleClick() {
        setCounter(counter + 1)
    }

// const text = document.getElementById('ctr');
// text.setAttribute("type", "text");
    return (
        <div className='counter' onClick={handleClick}>
            Counter: {counter}
            
            <input type='text' id='ctr'/>
            
            
             <p>  </p>
        </div>
    )
}




export default Counter;