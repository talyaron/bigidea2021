import {useState} from 'react';

function Counter(){
//[state, setterofState] = useState (initial value)
    const [counter, setCounter] = useState(1)

    return(
        <div>Counter: {counter}</div>
    )
}

export default Counter;