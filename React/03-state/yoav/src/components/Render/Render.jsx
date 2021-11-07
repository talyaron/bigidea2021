import React from "react";
import './Render.css'
import mcQueen from '../../pictures/mcQueen.jpg';
import mcQueen2 from '../../pictures/mcQueen2.jpg';
import buzz from '../../pictures/buzz.webp';


function Render(props) {
    const img = props.img;

    switch (img) {
        case "mcQueen":
            return <img src={mcQueen} alt='mcQueen 1' />
        case "buzz":
            return <img src={buzz} alt='buzz 1'/>
        case "mcQueen2":
            return <img src={mcQueen2} alt="mcQueen 2" />
        default:
            return <h1>No image was found</h1> 
    }
    


}

export default Render; 