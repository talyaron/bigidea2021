import logo from './logo.svg';
import './App.css';

//components
import Counter from './components/Counter/Counter'
import Hangman from './components/Hangman/Hangman'
import ImageSelector from './components/ImageSelector/ImageSelector'
import List from './components/List/List'

function App() {
  return (
    <div className="App">
      {/* <Hangman />  */}
      <List />
    </div>
  );
}

export default App;
