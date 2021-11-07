import './Switch.css';
import hangman1 from '../../img/hangman.png';
import hangman2 from '../../img/hangman2.png';
import dragon from '../../img/dragon.png';

function Switch(props) {
    const img = props.img;
    
    switch (img) {
        case "hangman1":
            return <img src={hangman1} alt='jhangman 1' />
        case 'hangman2':
            return <img src={hangman2} alt='hangman 2' />
        case "dragon":
            return <img src={dragon} alt='dragon 1' />
        default:
            return <h1>No image was found</h1>


    }

}

export default Switch;