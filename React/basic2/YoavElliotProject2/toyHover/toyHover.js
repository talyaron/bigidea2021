//import logo from './logo.svg';
import imageA from './pokerpic.jpg';
import './toyHover.css';

const abc = 123;

function App() {
  return (
    <div className="main">
      <div className="blogTitle">Childhood games</div>

      <div className="toyImage a" style={{backgroundImage:'url(${imageA})'}}>[Figure 1]
      </div>
      <div className="toyImage b" style={{backgroundImage:'url(${imageB})'}}>[Figure 2]
      </div>

      
      <div className="para1">These are all the games me and Yoav played as a kid.</div>

      <div className = "box"></div>
      <div className = "box2"></div>
      <div className = "box3"></div>
      <div className = "box4"></div>
      <div className = "box5"></div>
      <div className = "box6"></div>
      <div className = "box7"></div>
      <div className = "box8"></div>
      <div className = "box9"></div>
    </div>
  );
}

export default App;
