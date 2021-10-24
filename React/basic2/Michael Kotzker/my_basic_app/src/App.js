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
        <p>Wednesday, October 20, Bitcoin reached a new all-time high of $ 66,899, surpassing that of last April. Can Bitcoin be considered a reliable investment or is it the usual passing phenomenon?</p>
      </div>
      <div className="Article2">
        <h2>Marijuana</h2>
        <p>Luxembourg will become the first country in Europe to legalize the production and consumption of marijuana, to counter the illegal market.
The government has announced that adults over 18 will be able to grow up to four cannabis plants in their homes or gardens for their own use.</p>
      </div>
      <div className="Article3">
        <h2>Queen Elizabeth</h2>
        <p>Queen Elizabeth and the night in the hospital (as a precaution)
After a dense series of commitments, The Queen followed the doctors' advice and gave up his trip to Northern Ireland.</p>
      </div>
    </div>
  );
}

export default App;
