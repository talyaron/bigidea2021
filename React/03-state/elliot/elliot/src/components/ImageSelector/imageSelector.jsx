import {useState} from 'react';
import './imageSelector.css'

import happy from './Images/happy.png'

function ImageSelector(props){
    
    //[state, setterOfState] = useState(initialVal)  
       
        const [image, setImage] = useState(''); 
    
        function handleClick(ev){
            const chosenImage = ev.target.src;
            console.log(chosenImage)
            setImage(chosenImage);
        }

        return(
            <div className = 'container'>
                <img 
                    className = 'imageButton'
                    id = 'imageOne'
                    src={props.imageOne}
                    onClick={handleClick}>
                </img>
                <img 
                    className = 'imageButton'
                    id = 'imageTwo'
                    src={props.imageTwo}
                    onClick={handleClick}>
                </img>
                <img 
                    className = 'imageButton'
                    id = 'imageThree'
                    src={props.imageThree}
                    onClick={handleClick}>
                </img>
                <div id = 'emptySpace'></div>
                <img 
                    className = 'imageFrame'
                    id='selectedImageDisplay'
                    src={image}>
                </img>
                <div id = 'emptySpace'></div>
            </div>
            
        )
}
    
export default ImageSelector;