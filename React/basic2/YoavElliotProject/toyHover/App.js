//import logo from './logo.svg';
import imageA from './geoGuess.png';
import imageB from './geoGuess.png';
import imageC from './geoGuess.png';
import './App.css';

const abc = 123;

function App() {
  return (
    <div className="main">
      <div className="blogTitle">GeoGuesser: The Best Game of All Time?</div>

      <div className="toyImage a" style={{backgroundImage:'url(${imageA})'}}>[Figure 1]
      </div>

      
      <div className="para1">I am here today to talk to you about GeoGuesser. I love GeoGuesser. It is a fun and engaging game that teaches people about local regions on other parts of the planet, alongside how cultural differences can change the look and feel of society. Trying to identifty which region of the world you are in, though difficult, gradually broadens your understanding of the global landscape.</div>
    </div>
  );
}

export default App;
