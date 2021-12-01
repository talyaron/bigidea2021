import logo from './logo.svg';
import './App.css';

function App() {
  let randomLiePosition;

  function liePosition() {
    let randomNumber = Math.ceil(Math.random() * 3)
    console.log(randomNumber);
    return (randomNumber);
  }

  randomLiePosition = liePosition();
  console.log(randomLiePosition);


  return (
    <div className="App"></div>
  );
}

export default App;
