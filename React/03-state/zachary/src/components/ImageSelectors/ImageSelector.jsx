import { useState } from "react";
import './ImageSelector.css';

import happy from '../images/happy.jpg'
import neutral from '../images/neutral.png'
import sad from '../images/sad.png'

function ImageSelector() {
    const [Img, setImg] = useState('Empty')

    function SelectImage(ev) {
        if (ev.target.id === "happy") {
            setImg(ev.target.src)
            console.log({ Img })
        }
        else if (ev.target.id === "sad") {
            setImg(ev.target.src)
            console.log({ Img })
        }
        else if (ev.target.id === "neutral") {
            setImg(ev.target.src)
            console.log({ Img })
        }

    }

    return (
        <div>
            <div id='parent1'>
                <img class='images' src={happy} onClick={SelectImage} id="happy" alt="happy" />
                <img class='images' src={neutral} onClick={SelectImage} id="neutral" />
                <img class='images' src={sad} onClick={SelectImage} id="sad" />
            </div>
            <img src={Img} id='output'></img>
            <form action='handleHide()'>
                <input type="text" />
            </form>
        </div>

    )
}
export default ImageSelector