import { useEffect, useState } from 'react'
import './App.css';
import { db } from './functions/firebase/config';
import { doc, onSnapshot, collection, getDocs, getDoc } from "firebase/firestore";

function App() {
  
  useEffect(() => {
    //const usRef = collection(db, "us");
    const michaelRef = doc(db, 'us', "noeAEfNicuKOI0ndT4Nl");
    getDoc(michaelRef).then(michaelDB => {
      console.log(michaelDB.data())
    })

      const unsub = onSnapshot(doc(db, "us", "noeAEfNicuKOI0ndT4Nl"), (doc) => {
        console.log("Current data: ", doc.data());
    })
      
   /* getDocs(usRef).then(usDB=>{
      usDB.forEach(personDB=>{
        console.log(personDB.id)
        console.log(personDB.data())
      })
    })
*/
    //get only Michael from the database
    
  }, [])


  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
