import tal from './tal.png';
import wow3 from './wow3.jpg';
import './App.css';

const game = 'World Of Warcraft III';

function App() {
  return (
    <div className="box">
      <img src={tal} />
      <h1>My favorite game is:</h1>
      <h2>{game}</h2>
      <img src={wow3} />
    </div>
  );
}

export default App;
