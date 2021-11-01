import {useState} from 'react';
import './imageSelector.css'

import happy from './Images/happy.png'

function ImageSelector(props){
    
    //[state, setterOfState] = useState(initialVal)  
       
        const [image, setImage] = useState(''); 
    
        function handleClick(ev){
            const chosenImage = ev.target.style.backgroundImage;
            console.log(chosenImage)
            setImage(chosenImage);
        }

        return(
            <div className = 'container'>
                <img 
                    className = 'imageButton'
                    id = 'imageOne'
                    type='button'
                    src={happy}
                    onClick={handleClick}>
                </img>
                <input 
                    className = 'imageButton'
                    id = 'imageTwo'
                    type='button'
                    style={{background: props.imageTwo}}
                    onClick={handleClick}>
                </input>
                <input 
                    className = 'imageButton'
                    id = 'imageThree'
                    type='button'
                    style={{background: props.imageThree}}
                    onClick={handleClick}>
                </input>
                <div 
                    className = 'imageFrame'
                    id='selectedImageDisplay'
                    style={{background: image}}>
                </div>
            </div>
            
        )
}
    
export default ImageSelector;