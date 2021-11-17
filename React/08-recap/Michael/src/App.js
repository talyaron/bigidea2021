import { useEffect, useState } from 'react'
import './App.css';
import { db } from './functions/firebase/config';
import { collection, getDocs } from "firebase/firestore";

function App() {
  //get all of us

  //run only on start
  useEffect(() => {
    const Ref = collection(db, "us");
    getDocs(Ref).then(dataDB =>{
      dataDB.forEach(datum =>{
        console.log(datum.data());
      })
    })
  })

  return(
    <div className="App">
      Hi
    </div>
  )
}
export default App;
