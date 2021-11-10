import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";

function App() {

useEffect(()=>{
  const catRef = doc(db, "cats", "s3iS4HfSwqvQPRedjtzb");

  getDoc(catRef).then(catDB=>{
    console.log(catDB.data());
  })

  onSnapshot(catRef,catDB=>{
    console.log(catDB.data());
  })

  setDoc(doc(db, "cats", "Hello"),{
    name:"Jeff"
  })
},[])


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
