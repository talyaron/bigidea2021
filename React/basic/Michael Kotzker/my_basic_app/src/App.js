import logo from './logo.svg';
import tal from './tal.png';
import './App.css';

const abc = 123;

function App() {
  return (
    <div className="box">
      <img src={tal} />
      <h1>Boo {abc}</h1>
      <div>Hi all</div>
    </div>
  );
}

export default App;
