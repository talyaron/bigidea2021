
import './App.css';
import { useEffect, useState } from 'react'
import { db } from './functions/firebase/config';
import { collection, setDoc, doc, getDoc, onSnapshot, updateDoc, addDoc } from 'firebase/firestore'


function App() {
  useEffect(() => {
    
    //once
    getDoc(catRef).then(catDB => {
      console.log(catDB.data());
    })

    //listen 
    onSnapshot(catRef, catDB => {
      console.log(catDB.data());

    })

    //add a cat
    addDoc(collection(db, "cats"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });

    setMessages(user, )

  }, []);

  function handleSetName(ev) {
    const age = ev.target.valueAsNumber;
    const cheshRef = doc(db, 'cats', 'cheshire')
    updateDoc(cheshRef, { age });

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type='number'
          placeholder='Cheshire age'
          onKeyUp={handleSetName}
        />
      </header>
    </div>
  );
}

export default App;
