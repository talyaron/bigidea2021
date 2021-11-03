import logo from './logo.svg';
import './App.css';

// import Counter from './components/Counter/Counter'
// import Select from './components/ImageSelector/imageselector'
import Hangman from './components/Hangman/Hangman'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            {/* <Counter/> */}
            {/* {<Select/>} */}
            {<Hangman/>}
        </p>
      </header>
    </div>
  );
}

export default App;
