import logo from './logo.svg';
import './App.css';
let x;

function App() {
  let untruePosition;
  let true1Position;
  let true2Position

  function shufflePositions() {
    let randomNumber = Math.ceil(Math.random() * 3)
    untruePosition = randomNumber;

    let randomNumber2 = Math.ceil(Math.random() * 2)
    if (randomNumber2 === 1) {
      if (untruePosition === 1) {
        true1Position = 2;
        true2Position = 3;
      }
      else if (untruePosition === 2) {
        true1Position = 1;
        true2Position = 3;
      }
      else if (untruePosition === 3) {
        true1Position = 1;
        true2Position = 2;
      }
    }
    if (randomNumber2 === 2) {
      if (untruePosition === 1) {
        true2Position = 2;
        true1Position = 3;
      }
      else if (untruePosition === 2) {
        true2Position = 1;
        true1Position = 3;
      }
      else if (untruePosition === 3) {
        true2Position = 1;
        true1Position = 2;
      }
    }

    
  }

  shufflePositions();
  console.log("True 1: " + true1Position + ",True 2: " + true2Position + ", Untrue: " + untruePosition);


  return (
    <div className="App">
    </div>
  );
}

export default App;
