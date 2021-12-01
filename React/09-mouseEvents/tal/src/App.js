import { useRef, useEffect, useState } from 'react';
import './App.css'
import { db } from './functions/firebase/config'
import seaMP3 from './words/sea.mp3';
import { doc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore';
//import landMP3 from './words/land.MP3';

const docRef = doc(db, 'test', 'test');

function App() {
  const [result, setResult] = useState(0)
  useEffect(() => {

    getDoc(docRef).then(res => {
      console.log(res.data())
      let results = res.data().aa + 20;
      setResult(results);
    });
let x = 345;

    // const playerRef = doc(db, 'players', playerId)
    console.log('rerun')
    onSnapshot(docRef, (docDB) => {
      console.log(docDB.data());
    });
  }, []);

  async function getData() {

    let results = await getDoc(docRef);
    console.log(results.data())
    results = results.data().aa + 20;

    updateDoc(docRef, { aa: results })
    setResult(results);
  }

  return (
    <div>
      sTART: {result}
      <button onClick={getData}>GET DATA</button>
    </div>
  );
}

export default App;