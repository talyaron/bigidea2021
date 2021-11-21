import { useEffect, useState } from 'react'
import './App.css';
import { db } from './functions/firebase/config';
import { doc, collection, getDoc, onSnapshot } from "firebase/firestore";


function App() {
const [name, setName]= useState('');
const [surprise, setSurprise]= useState('');


//run only on start
useEffect(()=>{
  const Ref= doc(db, "us", "noeAEfNicuKOI0ndT4Nl");
  getDoc(Ref).then(dataDB=>{
    const unsub= onSnapshot(doc(db, "us", "noeAEfNicuKOI0ndT4Nl"), (doc)=> 
    console.log("Current data:" ,doc.data()));

      // console.log(datum.data());
      console.log(dataDB.data())

     


  })
   
}, [])

  return (
    <div className="App">
     Hi
    </div>
 
);
}

export default App;
