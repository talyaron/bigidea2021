
import { db } from './functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot, collection } from 'firebase/firestore'
import { useState } from 'react';
import Login from './views/pages/Login/Login'

import './App.css';

function App() {
  return (
    <Login />
  )
}



export default App;
