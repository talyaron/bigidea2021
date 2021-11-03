
import './App.css';
 //npx create-react-app <NameOfApp>

//import Counter from './components/Counter/counter'

import HangmanGame from './components/Hangman/hangman';

//import ImageSelector from './components/ImageSelector/imageSelector';
//import first from './components/ImageSelector/Images/happy.png'
//import second from './components/ImageSelector/Images/neutral.jpeg'
//import third from './components/ImageSelector/Images/sad.png'

//import List from './components/List/List';

//<Counter />
//<HangmanGame guessWord = 'Tiger'/>
//<ImageSelector imageOne = {first} imageTwo = {second} imageThree = {third} />
//<HangmanGame />
//<List />

function App() {
  return (
    <div className="App">
      
      <HangmanGame />

    </div>
  );
}

export default App;
