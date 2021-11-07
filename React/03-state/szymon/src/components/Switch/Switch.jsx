import "./Switch.css"
import dragon1 from '../ConditionalRendering/dragon1.jpg'
import dragon2 from '../ConditionalRendering/Dragon2.jpg'
import dragon3 from '../ConditionalRendering/dragon3.jpg'

function Switch(props){
    const img=props.img

    switch(img){
        case "dragon1":
            return <img src={dragon1} alt="dragon1"/>
        case "dragon2":
            return <img src={dragon2} alt="dragon2"/>
        case "dragon3":
            return <img src={dragon3} alt="dragon3"/>
        default:
            return <h1>No Image Was Found</h1>
    }
}

export default Switch