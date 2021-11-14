import {useEffect} from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, getDoc, collection, onSnapshot, setDoc } from "firebase/firestore";
 
const catRef= doc(db, "cats")

function App() {
 const [cats, setCats]= useState([]);
  
  useEffect(()=> {
    setDoc(doc(db, "cats", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"});

  
  const catRef = collection(db, "cats",);
  onSnapshot(catRef, catdDB=>{
    const catsArr= [];

    catdDB.array.forEach(catdDB => {
      catsArr.push(catdDB.data());
      
    });
    setCats(catsArr)
  })
},
 [] );
//once
  getDoc(catRef).then(catDB=>{
    console.log(catDB.data());
  })
  //listen
  onSnapshot(catRef, catDB=>{
    console.log(catDB.data())
  })


  return (
    <div className="App">
      <header className="App-header">
       {
         cats.map((cat, i)=>{
           return (<div key ={i}>{cat.name}</div>)
         })
        }
       
        

      </header>
    </div>
  );


}

 
export default App;
