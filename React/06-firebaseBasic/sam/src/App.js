import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './function/firebase/config';
import { doc, collection, updateDoc, getDoc, setDoc, onSnapshot } from "firebase/firestore";

function App() {

  const [cats, setCats] = useState([])

useEffect(()=>{
  const catRef = doc(db, "cats", "7VvewYjJXfstUSv3poaB");

  //once
  getDoc(catRef).then(catDB=> {
    console.log(catDB.data());

  })

  //listen
  onSnapshot(catRef, catDB=>{
    console.log(catDB.data())
  })
 
  //add a cat
  /*setDoc(doc(db, "cats", "Caaaaazzzoooo"), {
    name: "cheshire",
    age: "4",
  });*/

  // ref to collection of cats
  const catsRef = collection(db, 'cats');
onSnapshot(catsRef, catsDB=>{
  const catsArr = [];

  catsDB.forEach(catDB=>{
    catsArr.push(catDB.data());
  })

  setCats(catsArr)

})

},[]);

function handleSetName(ev) {
  const age = ev.target.valueAsNumber;
  const cheshRef = doc(db, 'cats', 'cheshire')
  updateDoc(cheshRef, { age });

}
  return (
    <div className="App">
      <header className="App-header">
        {
          cats.map((cat,i)=>{
            return (<div key={i}>{cat.name}</div>)
          })
        }

        <input
        type='number'
        placeholder='Cheshire age'
        onkeyUp={handleSetName}>
          
        </input>
        
      </header>
    </div>
  );
}

export default App;
