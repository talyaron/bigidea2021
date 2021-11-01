import React, {useState} from 'react';
import './ImageSelector.css';
import mcQueen from '../../pictures/mcQueen.jpg';
import mcQueen2 from '../../pictures/mcQueen2.jpg';
import buzz from '../../pictures/buzz.webp';

function ImageSelector() {
    const [color, setColor] = useState('blue');
    const [variable, setVariable] = useState();

    function changeSRC(ev) {
        let selectSRC = ev.target.currentSrc;
        console.log(ev);
        setVariable(selectSRC);
    }





    return (
        <div>
            <div className = 'box1' onClick={changeSRC}>
                <img src={mcQueen}></img>
            </div>
            <div className='box2' onClick = {changeSRC}>
                <img src={mcQueen2}></img>
            </div>
            <div className='box3' onClick = {changeSRC}>
                <img src = {buzz}></img>
            </div>
            <div className = 'changeBox'>
                <img src={variable}></img>
            </div>
        </div>
        
    )
}








export default ImageSelector;