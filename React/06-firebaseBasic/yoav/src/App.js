import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, getDoc, onSnapshot } from "firebase/firestore";

function App() {

  useEffect(() => {
    const catRef = doc(db, "cats", "nw03YaQ8CV4Zu6VS1sMy");

    getDoc(catRef).then(catDB => {
      console.log(catDB.data());
    })

    onSnapshot(catRef, catDB=>{
     console.log(catDB.data())
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
