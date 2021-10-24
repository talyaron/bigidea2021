import './propaganda.css';
import wheel from '';
function prop() {
    return (
        <div>
            <h2 className='h2'>Liam's favorite video games</h2>
            <img src={smash} alt="smash" />
            <div className="Parent">
                <div className="item ">
                    <div className="Image"></div>
                    <div className="Title"></div>
                    <div className="TextBold"></div>
                    <div classname="TextNormal"></div>
                </div>
                <div>
                    <div className="Image"></div>
                    <div className="Title"></div>
                    <div className="TextBold"></div>
                    <div classname="TextNormal"></div>
                </div>
                <div>
                    <div className="Image"></div>
                    <div className="Title"></div>
                    <div className="TextBold"></div>
                    <div classname="TextNormal"></div>
                </div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
}
export default prop;
