import {useState} from 'react';
import './ImageSelector.css'

function ImageSelector(){

    const[ image1, setImage]= useState();
    function handleClick(ev)
    {
        let id= ev.target.getAttribute('');
        console.dir(ev.target.src);
        setImage(id+1);
    }
    
   return(
       <div className= "container">
        <img  className= 'image' id= "img1" onClick={handleClick} src='https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg'/>   
        <div  className= 'image' id= "img2" onClick={handleClick}>  </div>, 
        <div  className= 'image' id= "img3" onClick={handleClick}>  </div>,
        <div  className= 'bigimage' style= {{backgroundImage:{image1}}}></div>
        </div>

   )
    
}

export default ImageSelector;