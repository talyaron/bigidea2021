import {useState} from 'react';
import './ImageSelector.css';
import Zelda from './BOTW.jpg';
import Gear2 from './Gear\ Sekando.jpg';
import Skis from './skisx.jpg';

function ImageSelector() {
    
    const [Image, setImage] = useState('');

    function handleClick(ev) {
        
        let source = ev.target.src;
        setImage(source);
    }

    return(
        <div className="container2">
            <img className ="smaller" id="one" onClick={handleClick} src={Zelda}></img>
            <img className ="smaller" id="two" onClick={handleClick} src={Gear2}></img>
            <img className ="smaller" id="three" onClick={handleClick} src={Skis}></img>

            <img className="bigger" id="four" src={Image}></img>
        </div>
    )
}

export default ImageSelector;