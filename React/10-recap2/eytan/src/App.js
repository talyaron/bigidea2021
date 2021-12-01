import './App.css';
import { db } from './functions/firebase/config';
import { useEffect, useState } from 'react'
import { collection, setDoc, doc, getDoc, onSnapshot, updateDoc, addDoc } from 'firebase/firestore'



function App() {
  
  var bDate

  function dateToAge() {
    var actualDate = new Date();
    var birthDate = new Date('dateString');
    var age = actualDate.getFullYear() - birthDate.getFullYear();
    var m = actualDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && actualDate.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age)
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
            <form onSubmit={dateToAge} className='App-row' >
              <input type='date' name='dateString' />
              <input type='submit' value='submit' className='button'/>
            </form>
          </b>
        </a>
      </header>
    </div>
  );
}

export default App;