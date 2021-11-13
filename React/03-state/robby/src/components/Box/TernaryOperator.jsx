import "./TernaryOperator.css"
import {useState} from 'react'
function TernaryOperator(props){
    const isGood = props.isGood;
    const [good, setGood]= useState(isGood)
        
    function handleClick(){
       setGood(!good);

    }
    return (
        <div className={good?"green box2": "red box2"} onClick={handleClick}>
            TernaryOperator
        </div>
    )
}

export default TernaryOperator