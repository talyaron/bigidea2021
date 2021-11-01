import './ImageSelector.css'
import fish from './fish.png'
import dino from './dino.jpg'
import cat from './art.jpg'
import React, {useState} from 'react';


function ImageSelector(){
    const [picture, setPicture] = useState();

    function handleClick(ev){
        let pictureVal = ev.target.src
        console.log(pictureVal)
        setPicture(pictureVal)
      
    }

    

    return(
        <div className = 'cont'>
            <img 
                className='button' 
                onClick={handleClick} 
                id='fish'
                src = {fish}
                alt='fish'>
                
            </img>
            <img 
                className='button' 
                onClick={handleClick}
                id='dino' 
                src = {dino}
                alt='dino'>
            </img>
            <img
                className='button' 
                onClick={handleClick} 
                id = 'cat'
                src = {cat} 
                alt='cat'>
            </img>

            <img src={picture} alt="ran" className='button'/>


        </div>


    )
}


export default ImageSelector;