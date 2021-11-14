import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {db} from './functions/firebase/config';
import {doc, setDoc} from 'firebase/firestore'

function App() {
  useEffect(()=> { const userRef= doc(db, 'users', 'me')
setDoc(userRef, {name: 'Robby', image: 'https://www.cnet.com/a/img/yNXNzolnRRrCXqYkzzXo2GmmVj4=/1200x630/2019/06/27/a6b10caf-cfd4-49c6-b664-db51c84cd9f5/watch-some-crazy-fat-thor-stunts-in-bts-videos-from-avengers-endgame-social.jpg'})}, [])
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
