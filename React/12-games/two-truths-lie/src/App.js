
import { db } from './functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot, collection } from 'firebase/firestore'
import { useState } from 'react';
import Login from './views/pages/Login/Login'

import './App.css';
import EnterQuestions from './views/pages/EnterQuestion/EnterQuestion';


function App() {
  return (
    <div className="App">
      <EnterQuestions />
    </div>
  );
}



export default App;
