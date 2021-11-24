import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { useEffect, useState } from 'react';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

function App() {

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
    </div>
  );
}

export default App;
