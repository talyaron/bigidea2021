import btc from './btc.jpg'
import marijuana from './marijuana.jpg'
import queen from './queenElizabeth.jpg'
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>News</h1>
      <div className="Images">
        <img className="btc" src= {btc}/>
        <img className="mja" src= {marijuana}/>
        <img className="queen" src= {queen}/>
      </div>
      <div className='Article1'>
        <h2>Bitcoin</h2>
        <p></p>
      </div>
      <div className="Article2">
        <h2>Marijuana</h2>
        <p></p>
      </div>
      <div className="Article3">
        <h2>Queen Elizabeth</h2>
        <p></p>
      </div>
    </div>
  );
}

export default App;
