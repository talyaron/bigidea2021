import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { collection, setDoc, doc, getDoc, onSnapshot, updateDoc, addDoc } from 'firebase/firestore'

const catRef = doc(db, "cats", "0u7sBnlLCLbYIkef8uKf");

function App() {
  useEffect(() => {
    
    //once
    getDoc(catRef).then(catDB => {
      console.log(catDB.data());
    })

    //listen 
    onSnapshot(catRef, catDB => {
      console.log(catDB.data())
    })

    //add a cat
    addDoc(collection(db, "cats"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });

  }, []);

  function handleSetName(ev) {
    const age = ev.target.valueAsNumber;
    const cheshRef = doc(db, 'cats', 'cheshire')
    updateDoc(cheshRef, { age });

  }

  return (
    <div className="App">
      <header className="App-header">

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
