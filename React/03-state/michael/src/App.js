import './App.css';

//components
import Counter from './components/Counter/Counter'
import Hangman from './components/Hangman/Hangman'

//npx create-react-app <nameOfApp>

function App() {
  return (
    <div className="App">
      <Hangman />
    </div>
  );
}

export default App;
