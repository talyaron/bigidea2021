import { useState } from "react";
import "./imageselector.css"
import happy from "./smile.jpg"
import sad from "./sad.jpg"
import angry from "./angry.jpg"
import neutral from "./neutral.jpg"

function Select(){
const [image,setimage]=useState()
function onClick(ev){
    
}



    return(
        <div className="image">
            <h1>Select an Image</h1>
            <img id="happy" className="happy" src={happy} />
            <img id="sad" className="sad" src={sad} />
            <img id="angry" className="angry" src={angry} />
            <img id="neutral" className="neutral" src={neutral} />
        </div>
    )
}

export default Select