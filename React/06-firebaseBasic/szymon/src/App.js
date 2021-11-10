import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, getDoc, onSnapshot, setDoc, collection } from "firebase/firestore";

function App() {

  const [cats,setCats]=useState([])

useEffect(()=>{
  const catRef = doc(db, "cats", "s3iS4HfSwqvQPRedjtzb");

  getDoc(catRef).then(catDB=>{
    console.log(catDB.data());
  })

  onSnapshot(catRef,catDB=>{
    console.log(catDB.data());
  })

  // setDoc(doc(db, "cats", "Hello"),{
  //   name:"Jeff"
  // })

  const catsRef=collection(db,'cats')
  onSnapshot(catsRef,catsDB=>{
    const CatsArr=[]

    catsDB.forEach(catsDB=>{
      CatsArr.push(catsDB.data());
    })
    setCats(CatsArr)
  })
},[])


  return (
    <div className="App">
      <header className="App-header">
       {
         cats.map((cat,i)=>{
           return(<div key={i}>{cat.name}</div>)
         })
       }
      </header>
    </div>
  );
}

export default App;
