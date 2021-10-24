import './propaganda.css';
import wheel from './img/wheel.jpg';
import greta from './img/greta.jpg';
import balence from './img/balence.jpg';
function prop() {
    return (
        <div>
            <>
            <div>
                <div><img src={wheel} alt="wheel"></img> </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div><img src={greta} alt="greta"></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div><img src={balence} alt="balence"></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </div>

    );
}
export default prop;
