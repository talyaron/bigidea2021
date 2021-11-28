import './App.css';
import { db } from './functions/firebase/config';
import { useEffect, useState } from 'react'
import { collection, setDoc, doc, getDoc, onSnapshot, updateDoc, addDoc } from 'firebase/firestore'



function App() {
  
  var bDate

  function dateToAge(dateString) {
    var actualDate = new Date();
    var birthDate = new Date(dateString);
    var age = actualDate.getFullYear() - birthDate.getFullYear();
    var m = actualDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && actualDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <a>
          <b>
            blablablablablablablablab
            lablablablablablablablablabl
            ablablablablablablabla
          </b>
          <b>
            <input type='date'  />
            <button onClick='dateToAge()'>:)</button>
          </b>
        </a>
      </header>
    </div>
  );
}

export default App;