import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import {useEffect} from 'react'
import {doc,setDoc} from 'firebase/firestore'

function App() {
  useEffect(()=>{
    const userRef=doc(db,'users', 'me')
    setDoc(userRef, {name:'Becky', image:'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers.jpg'})
  },[]);
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
