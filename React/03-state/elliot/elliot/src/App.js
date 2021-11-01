
import './App.css';

import Counter from './components/Counter/counter'
import HangmanGame from './components/Hangman/hangman';
//npx create-react-app <NameOfApp>




function App() {
  return (
    <div className="App">
      <HangmanGame guessWord = 'Tiger'/>

    </div>
  );
}

export default App;
