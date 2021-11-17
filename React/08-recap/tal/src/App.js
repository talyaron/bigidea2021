import { useEffect, useState } from 'react'
import './App.css';
import { db } from './functions/firebase/config';
import { collection, doc, getDocs, getDoc, onSnapshot } from "firebase/firestore";

function App() {
  
  const [name, setName] = useState('');
  const [surprise, setSurprise] = useState('');

  //get all of us...

  //run only on start
  useEffect(() => {

    const usRef = collection(db, 'us');
    getDocs(usRef).then(dataDB => {
      dataDB.forEach(datum => {
        console.log(datum.data());
      })
    })

    const michaelRef = doc(db, 'us', 'noeAEfNicuKOI0ndT4Nl');
    getDoc(michaelRef).then(docDB => {
      const name = docDB.data().name;
      setName(name);
    })

    const unsubscribe = onSnapshot( michaelRef, docDB => {
      const surprise = docDB.data().surprise;
      setSurprise(surprise);
    })

  }, [])
  
  return(
    <div className="App">
      <h1>{name}</h1>
      <h2>{surprise}</h2>
    </div>
  );
}

export default App;
