import './App.css';
import { db } from './firebase/config.js';
import { useEffect, useState } from 'react';
import { doc, setDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

let playersRef= doc(db,'true-lie','qocj2PnYZcvmDXOf4mCn','players')
 
function App() {
 
  let randomLiePosition;

function nextRound(){
  randomise
}


  function liePosition() {
    let randomNumber = Math.ceil(Math.random() * 3)
    console.log(randomNumber);
    return (randomNumber);
  }

  randomLiePosition = liePosition();
  console.log(randomLiePosition);


  return (
    <div className="App"></div>
  );
}

export default App;
