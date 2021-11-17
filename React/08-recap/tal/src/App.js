import { useEffect, useState } from 'react'
import './App.css';
import { db } from './functions/firebase/config';
import { doc, onSnapshot, collection, getDocs,getDoc } from "firebase/firestore";

function App() {
  const [name,setName]=useState('')
  const [surprise,setSurprise]=useState('')
  useEffect(() => {
    //get all of us...

  
    const usRef = collection(db, "us");

    getDocs(usRef).then(dataDB => {
      dataDB.forEach(personDB =>{
        console.log(personDB.data())
        console.log(personDB.id)
      })
    })
  
//get only Michael and print it
    const docRef=doc(db,"us","noeAEfNicuKOI0ndT4Nl");

    getDoc(docRef).then(dataDB=>{
        console.log(dataDB.data());
    })

    //listen to Michael
    const unsub=onSnapshot(docRef,docDB =>{
      console.log(docDB.data());
      setName(docDB.data().name);
      setSurprise(docDB.data().surprise);
    })
    
    return()=>{
      unsub()
    }
  }, [])


  return (
    <div className="App">
      {name}
      {surprise}
    </div>
  );
}

export default App;
