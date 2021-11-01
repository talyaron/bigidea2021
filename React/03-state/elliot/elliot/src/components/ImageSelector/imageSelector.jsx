import {useState} from 'react';
import './imageSelector.css'

function ImageSelector(props){
    
    //[state, setterOfState] = useState(initialVal)  
        let chosenImage = '';
        const [image, setImage] = useState(chosenImage); 
    
        function handleClick(ev){
            chosenImage = ev.target.style.backgroundImage;
            setImage(chosenImage);
        }

        return(
            <div className = 'container'>
                <input 
                    className = 'imageButton'
                    id = 'imageOne'
                    type='button'
                    style={{background: props.imageOne}}
                    onClick={handleClick()}>
                </input>
                <input 
                    className = 'imageButton'
                    id = 'imageTwo'
                    type='button'
                    style={{background: props.imageTwo}}
                    onClick={handleClick()}>
                </input>
                <input 
                    className = 'imageButton'
                    id = 'imageThree'
                    type='button'
                    style={{background: props.imageThree}}
                    onClick={handleClick(this)}>
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