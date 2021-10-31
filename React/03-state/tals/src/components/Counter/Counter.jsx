import { useState } from 'react';
import './Counter.css'

//we will use useState hook

function Counter() {
    //[state, setterOfState] = useState (initial value)
    const [counter, setCounter] = useState(1);

    function handleClick() {
        setCounter(counter + 1)
    }


    return (
        <div
            className='counter'
            onClick={handleClick}>
            Counter: {counter}
        </div>
    )
}




export default Counter;