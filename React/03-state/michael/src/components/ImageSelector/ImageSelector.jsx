import React, {useState} from 'react';
import './ImageSelector.css';
import Mountain from '../../MountEverest.jpg';
import River from '../../River.jpg';
import Waterfall from '../../Waterfall.jpg';

function ImageSelector(){

    const[color, setColor] = useState('white');
    const[variable, setVariable] = useState();

    function changeSRC(ev){
        let selectSRC = ev.target.currentSrc;
        console.log(ev);
        setVariable(selectSRC);
    }

    return(
        <div>
            <div className='box1'  onClick={changeSRC}>
                <img  src={Mountain} style={{width:"100px", height:"100px"}}></img>
            </div>
            <div className='box2' onClick={changeSRC}>
            <img src={River} style={{width:"100px", height:"100px"}}></img>
            </div>
                
            <div className='box3'  onClick={changeSRC}>
            <img src={Waterfall} style={{width:"100px", height:"100px"}}></img>
            </div>
            <div className='changeBox' style={{width:"100px", height:"100px"}} >
                <img src={variable} style={{width:"100px", height:"100px"}}></img>
            </div>
        </div>
    )
}

export default ImageSelector;
