import { useState } from "react";
import "./Counter.css"

function Counter(){

    const [counter,setCounter]=useState(1)

function handleclick(){
    setCounter(counter+1)
}

    return(
        <div 
        className="counter"
        onClick={handleclick}
        >Counter: {counter}</div>
    )
}

export default Counter;