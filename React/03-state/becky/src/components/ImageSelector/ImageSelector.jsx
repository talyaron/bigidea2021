import React, { useState } from 'react';
import './ImageSelector.css'
import Ace from './Ace.jpg'
import emma from './emma.jpg'
import Israel from './Israel.jpg'

function ImageSelector() {
    const [backgroundImage, setBackground] = useState('pink');
    function onClick(ev) {
        setBackground(ev.target.value);

    }
    return (
        <div className='imageSelector'>
            <div className='box' id='box1' style={{ background: backgroundImage }} onClick={onClick}></div>
            <div className='box' id='box2' style={{ background: backgroundImage }} onClick={onClick}></div>
            <div className='box' id='box3' style={{ background: backgroundImage }} onClick={onClick}></div>
            <div className='box' id='box4' style={{ background: backgroundImage }} ></div>
        </div>
    )
}
export default ImageSelector;