import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useRef, useState } from 'react';
import { doc, setDoc, getDoc, onSnapshot, collection } from 'firebase/firestore';
import { ref, getDatabase, onValue } from 'firebase/database';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';
import { db } from './functions/firebase/config'
import { FirebaseError } from '@firebase/util';
let highestScore = 0;
let highestPlayer = "";
const seaSound = new Audio(seaMP3);
const landSound = new Audio(landMP3);
let isPlaying = true;
let player = "";
let score = 0;
let scoreArr = [];

function App() {


  return (
    <div>
      Start
    </div>
  );


}



export default App;
