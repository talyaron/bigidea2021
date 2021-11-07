import { useState } from 'react';
import './TernaryOperator.css';

function TernaryOperator(props){
    const isGood = props.isGood;
    const [good, setGood] = useState(isGood);

    function handleClick(){
        setGood(!good);
    }

    return (
        <div className={isGood?"green box":"red box"} onClick={handleClick}>
            TernaryOperator
        </div>
    )
}

export default TernaryOperator;