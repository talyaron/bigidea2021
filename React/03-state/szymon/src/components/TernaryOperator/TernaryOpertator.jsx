import { useState } from "react"
import "./TernaryOperator.css"

function TernaryOperator(props){
    const isGood=props.isGood
const [good,setGood]=useState(isGood)

    function handleClick(ev){
        setGood(!good)
    }

    return(
        <div className={good?"green box":'red box'} onClick={handleClick}>
            Ternary Operator
        </div>
    )
}

export default TernaryOperator