import React, {useState} from 'react';
import './ImageSelector.css';
import shark from '../../shark.jpg';
import alaska from '../../alaska.jpg';
import boat from '../../boat.jpg';

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
            <div className='box1' style={{width:"100px", height:"100px"}} onClick={changeSRC}>
                <img src={shark}></img>
            </div>
            <div className='box2' style={{width:"100px", height:"100px"}} onClick={changeSRC}>
            <img src={boat}></img>
            </div>
                
            <div className='box3' style={{width:"100px", height:"100px"}}  onClick={changeSRC}>
            <img src={alaska}></img>
            </div>
            <div className='changeBox' style={{width:"100px", height:"100px"}} >
                <img src={variable}></img>
            </div>
        </div>
    )
}

export default ImageSelector;
