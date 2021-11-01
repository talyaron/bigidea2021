import React, { useState } from 'react';
import './ImageSelector.css'
import Ace from './Ace.jpg'
import emma from './emma.jpg'
import Israel from './Israel.jpg'

function ImageSelector() {
    const [background, setBackground] = useState('pink');
    const[variable, setVariable] = useState();

    function changeSource(ev){
        let selectSRC = ev.target.currentSrc;
        console.log(ev);
        setVariable(selectSRC);
    }
   
    return (
        <div className='imageSelector'>
            <div className='box' id='box1' onClick={changeSource}> 
            <img style={{width:"300px", height:"300px"}} src={Ace}/> 
            </div>

            <div className='box' id='box2' onClick={changeSource}>
            <img style={{width:"300px", height:"300px"}} src={emma}/> 
            </div>

            <div className='box' id='box3' onClick={changeSource}>
            <img style={{width:"300px", height:"300px"}} src={Israel}/>
            </div>
            <div className='box' id='box4' >
            <img src={variable} style={{width:"300px", height:"300px"}}/>
            </div>
        </div>
    )
}
export default ImageSelector;