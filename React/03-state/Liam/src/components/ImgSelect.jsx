import './imgselect.css';
import jones from './img/alex.jpg';
import baby from './img/dababy.jpg';
import kiss from './img/kiss.jpg';


function imgSelect() {
    const[img1, setImage] = useState();

    function setImage(ev) {
        console.dir(ev)
        let id= ev.target.getAttribute('');
        console.dir(ev.target.src)
    }

    return (
        <div>
            <div>
                <img src={jones} alt="jones" onClick={setImage} />
            </div>
            <div>
                <img src={baby} alt="baby" onClick={setImage} />
            </div>
            <div>
                <img src={kiss} alt="nick" onClick={setImage} />
            </div>

            <div className='main' style={{backgroundImage:{img1}}}></div>
        </div>

    )

}


export default imgSelect