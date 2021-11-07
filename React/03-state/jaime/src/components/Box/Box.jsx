import './Box.css';
import castle from './Castle Undertale Cut.png';
import donald from './Donald Skiing.png';
import Luffy from './Luffy.png'

function Box(props) {

    const isOne = props.isOne;

    switch(isOne) {

        case "castle":
            return <div>
                <img src={castle} />
                <p></p>
            </div>
        case "donald":
            return <div>
                <img src={donald} />
                <p></p>
            </div>
        
        case "Luffy":
            return <div>
                <img src={Luffy} />
                <p></p>
            </div>
        
        default:
            return <h1>No image was found</h1>
    }
}

export default Box;