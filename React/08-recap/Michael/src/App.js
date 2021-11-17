import { useEffect, useState } from 'react'
import './App.css';
import { db } from './functions/firebase/config';
import { collection,doc, getDocs, getDoc, onSnapshot } from "firebase/firestore";

function App() {
  //get all of us

  //run only on start
  //useEffect(() => {
    //const Ref = doc(db, "us", "noeAEfNicuKOI0ndT4Nl");
    //getDoc(Ref).then(dataDB =>{
    //  console.log(dataDB.data())
    //})

    //get me  

    //const unsub = onSnapshot(doc(db, "us", "noeAEfNicuKOI0ndT4Nl"), (doc) => {
    //  console.log("Current data: ", doc.data());
    //})

  //},[])

  //return(
    //<div className="App">
     // Hi
    //</div>
  //)
}
export default App;
