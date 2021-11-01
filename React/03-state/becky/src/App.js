import logo from './logo.svg';
import './App.css';

//components
import Counter from './components/Counter/Counter'
import Hangman from './components/Hangman/Hangman'
import ImageSelector from './components/ImageSelector/ImageSelector';


function App() {
  return (
    <div className="App">
      <ImageSelector/>
    </div>
  );
}

export default App;
