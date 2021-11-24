import logo from './logo.svg';
import './App.css';
import { db } from './firebase/config.js';
import { useEffect, useState } from 'react';
import { doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';

function App() {
  function ResetGame (){
    
  }
  function handleSet(ev) {
    ev.preventDefault();
    const setName = ev.target.elements.nameBox.value;
    const setImage = ev.target.elements.imgBox.value;
    console.log(setName, setImage);
    setDoc(doc(db, 'users', 'me'), {name: setName, image: setImage});
  }

  return (
    <div className="App">
      <form onSubmit={handleSet}>
      <input type='text' placeholder='Enter your name' name='nameBox'/>
      <input type='text' placeholder='Enter your image url' name='imgBox'/>
      </form>
      <button onClick={ResetGame}></button>
    </div>
  );
}

export default App;
