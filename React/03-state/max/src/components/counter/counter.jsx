import {useState} from 'react';
import './counter.css'

function Counter(){
    const[counter, setCounter] = useState(1)
    
    
    function handleClick(){
    setCounter(counter + 1)
    }

    return(
    <div 
        className = 'counter'
        onClick ={handleClick}>
        counter: {counter}
    
        </div>
    )}


export default Counter;