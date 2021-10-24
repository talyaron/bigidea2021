import './propaganda.css';
import wheel from './img/wheel.jpg';
import greta from './img/greta.jpg';
import balence from './img/balence.jpg';
function prop() {
    return (
        <div>
            <h2 className='h2'>Liam's favorite video games</h2>
            
            <div className="Parent">
                <div className="item item1">
                    <div className="Image"><img src={greta} alt="greta"/></div>
                    <div className="Title">Greta lives the high lifestyle while children are starving in africa</div>
                    <div className="TextBold">Her fallowers say this photo is fake but we know its not.</div>
                    <div classname="TextNormal">| Science &#38; Enviroment</div>
                </div>
                <div className="item item2">
                    <div className="Image"><img src={wheel} alt="wheel"/></div>
                    <div className="Title"> Record-breaking ferris wheel opens in Dubai</div>
                    <div className="TextBold">The massive wheel was opened in Dubai with a lavish fireworks display to mark the occasion.</div>
                    <div classname="TextNormal">| MIDDLE EAST</div>
                </div>
                <div className="item item3">
                    <div className="Image"><img src={balence} alt="balence"/></div>
                    <div className="Title"> A-level book pulled over Native American question</div>
                    <div className="TextBold">The exam board AQA apologises and says the textbook should never have been approved.</div>
                    <div classname="TextNormal">| FAMILY &#38; EDUCATION</div>
                </div>
            </div>
        </div>
    );
}
export default prop;
