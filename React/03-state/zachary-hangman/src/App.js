import './App.css';
import React, {useState} from 'react';
import Header from './components/header'
import Figure from './components/figure'
import WrongLetters from './components/WrongLetters';
import Word from './components/word';
import Popup from './components/Popup';
import Notification from './components/Notification';
const words = ['application', 'programming', 'interface', 'wizard'];


function App() {
  const [playable,setPlayable]=useState(true);
  const [correctLetters,setCorrectLetters]=useState([]);
  const [wrongLetters,setWrontLetters]=useState([true]);
  return (
   
    <div className="App">
      <Header />
      <div className="game-container">
      <Figure />
      <WrongLetters />
      <Word />
      </div>
    </div>
  );
}

export default App;
