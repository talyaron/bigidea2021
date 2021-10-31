import {useState} from "react";
import './counter.css';

function Counter() {

    const[Counter, setCounter] = useState(1);
    const[Text, setText] = useState("");

    function handleClick(){
        setCounter(Counter + 1)
    }

    function handleText(ev){
        let value = ev.target.value;
        console.log(value);
        setText(value);
    }
    return(
        <div className='container'>
            <div onClick={handleClick}>Counter: {Counter}</div>
            <input onKeyUp={handleText} type='text' placeholder='type here'></input>
            <p id='text'>{Text}</p>
        </div>
    )
}

export default Counter;