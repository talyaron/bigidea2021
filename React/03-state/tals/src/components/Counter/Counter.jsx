import { useState } from 'react';

//we will use useState hook

function Counter() {
    //[state, setterOfState] = useState (initial value)
    const [counter, setCounter] = useState(1);
    function handleClick() {
        setCounter(counter + 1)
    }
    

    return (
        <div onClick={handleClick}>Counter: {counter}</div>
    )
}




export default Counter;