import { useState } from 'react';
import './ternaryOperator.css'

function TernaryOperator(props) {
    const isGoood = props.isGood;

    function handleClick(){
    setGood (!good);
    }
    return (
        <div className={isGood ? "green box" : "red box"} onClick={ handleClick}>
            TernaryOperator
        </div>
    )
}

