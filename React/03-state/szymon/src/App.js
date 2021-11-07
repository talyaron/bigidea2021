import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter/Counter'
import Select from './components/ImageSelector/imageselector'
import Hangman from './components/Hangman/Hangman'
import List from './components/List/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            {/* <Counter/> */}
            {/* {<Select/>} */}
            {<Hangman/>}
            {/* {<List/>} */}
        </p>
      </header>
    </div>
  );
}

export default App;
