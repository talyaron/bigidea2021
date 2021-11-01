import React, { useState } from 'react';
import './ImageSelector.css'
import Ace from './Ace.jpg'
import emma from './emma.jpg'
import Israel from './Israel.jpg'

function ImageSelector() {
    const [background, setBackground] = useState('pink');

    function onClick(){
        // let id = ev.target.getAttribute('');
        // console.dir(ev.target.src);
        // setBackground(id+1);
    }
   
    return (
        <div className='imageSelector'>
            <div className='box' id='box1' onClick={onClick}> 
            <img src={Ace}/> 
            </div>

            <div className='box' id='box2' onClick={onClick}>
            <img src={emma}/> 
            </div>

            <div className='box' id='box3' onClick={onClick}>
            <img src={Israel}/>
            </div>
            <div className='box' id='box4' ></div>
        </div>
    )
}
export default ImageSelector;