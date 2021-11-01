import {useState} from 'react';
import './imageSelector.css'

function ImageSelector(props){
    
    //[state, setterOfState] = useState(initialVal)  
        const [image, setImage] = useState(); 
    
        function handleClick(ev){
            let chosenImage = ev.target.style.background;
            updateImage(chosenImage);
        }
    
        function updateImage(newImage){
            setImage(newImage);
        }

        return(
            <div className = 'container'>
                <input 
                    className = 'imageButton'
                    id = 'imageOne'
                    type='button'
                    style={{background: props.imageOne}}
                    onClick={handleClick(this)}>
                </input>
                <input 
                    className = 'imageButton'
                    id = 'imageTwo'
                    type='button'
                    style={{background: props.imageTwo}}
                    onClick={handleClick(this)}>
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