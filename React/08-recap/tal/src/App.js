
//GROUP 1
//import { useEffect} from 'react'
//import './App.css';
//import { db } from './functions/firebase/config';
//import { doc, onSnapshot, getDoc, getDocs, collection, setState} from "firebase/firestore";

import {BrowserRouter, Routes, Route, Link} from 'react-dom';
import { db } from './functions/firebase/config';
import Liam from "./pages/Liam";
import Michael from "./pages/Michael";

function App() {
  

  return (
    <BrowserRouter>
      <u1>
        <li></li>
      </u1>
    
    </BrowserRouter>
  );
}

export default App;


  //GROUP 1
  //Makes sure to run only once in the beginning
  /*const ourDatabase = collection(db, "us");
  const ourElement = doc(db, "us", 'kNdaVEOJxe9bYlnlbQaT');

  useEffect(()=>{
    let ourDBArray = [];

    getDocs(ourDatabase).then(dataDB => {
      dataDB.forEach(datum => {
        ourDBArray.push(datum.data())
        console.log(datum.id)
        console.log(datum.data())
      })
      console.log(ourDBArray)
      console.log("stage 1")
    })
    
    getDoc(ourElement).then(docDB => {
      console.log(docDB.data())
      console.log("stage 2")
    })
    
    const unsubscribe = onSnapshot(ourElement, (doc) => {
      console.log('Current Data: ' + doc.data());
      console.log("stage 3")
    })

  },[]) GROUP 1 ENDS HERE*/