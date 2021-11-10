import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { collection, doc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore'

const catsRef = collection(db, 'cats');

function App() {

  const [cats, setCats] = useState([])
  //call this function only once when the component starts
  useEffect(() => {



    //  getDocs(catsRef).then(catsDB=>{
    //    catsDB.forEach(catDB=>{
    //      console.log(catDB.data())
    //    })
    //  })

    const unsub = onSnapshot(catsRef, catsDB => {
      const catsArr = []
      catsDB.forEach(catDB => {
        console.log(catDB.data())
        catsArr.push(catDB.data())
      });
      setCats(catsArr);
    })

  }, []);

  function handleSetName(ev) {
    const age = ev.target.valueAsNumber;
    const cheshRef = doc(db, 'cats','cheshire')
    updateDoc(cheshRef, {age});

  }

  return (
    <div className="App">
      <header className="App-header">
        {cats.map((cat, i) => {
          return <div>{cat.name} is {cat.age} years old</div>
        })}
         <input
        type='number'
        placeholder='Cheshire age'
        onKeyUp={handleSetName}
      />
      </header>
     
    </div>
  );
}

export default App;
