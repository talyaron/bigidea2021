import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {db} from './functions/firebase/config';
import {doc, setDoc} from 'firebase/firestore';
import MathProblems from './mathProblems/MathProblems';


function App() {
  return(
    <div className="App">
      <MathProblems />
    </div>
  );
}

export default App;
