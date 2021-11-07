import './Box.css';
import hangman1 from '../../img/hangman.png';
import hangman2 from '../../img/hangman2.png';

function Box(props) {

    const isOne = props.isOne;

    if (isOne) {
        return (

            <div>

                <img src={hangman1} />
            </div>
        )
    } else {
        return (
            <div>
                <img src={hangman2} />
            </div>
        )
    }

}

export default Box