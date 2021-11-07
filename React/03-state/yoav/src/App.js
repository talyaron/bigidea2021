import logo from './logo.svg';
import './App.css';

//components
import Counter from './components/Counter/Counter'
import Hangman from './components/Hangman/Hangman'
import ImageSelector from './components/ImageSelector/ImageSelector'
import List from './components/List/List'
import Render from './components/Render/Render'
import TernaryOperator from './components/TernaryOperator/TernaryOperator'

function App() {
  return (
    <div className="App">
      {/* <TernaryOperator isGood = {true}/> */}
      {/* <Render img = 'buzz'/>  */}
      <Hangman />
      
    </div>
  );
}

export default App;
