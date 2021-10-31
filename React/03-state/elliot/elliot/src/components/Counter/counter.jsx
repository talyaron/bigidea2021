import {useState} from 'react';

function Counter(){
    
//[state, setterOfState] = useState(initialVal)
    const [counter, setCounter] = useState(1);
    
    function handleClick(){
        setCounter(counter+1)
    }

    return(
        <div onClick={handleClick}>Counter: {counter}</div>
    )
}

export default Counter;