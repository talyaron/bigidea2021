import {useState} from 'react'
import './Counter.css'


function Counter(){
    const [counter, setCounter] = useState(1)
    const [text, setText] = useState()
function handleClick(){
    setCounter(counter+1)
}
function handleChange(ev){
    setText(ev.target.value)
}
    return(
        <div className= 'counter' onClick={handleClick}> Counter: {counter} 
        <br></br>
        <input type ='text' placeholder = 'text' onKeyUp={handleChange}/>
        <div>
            {text}
            </div>
        </div>
        
    )
}


export default Counter;