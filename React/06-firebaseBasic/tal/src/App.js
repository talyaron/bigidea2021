import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { collection, getDocs, onSnapshot } from 'firebase/firestore'


function App() {

  const [cats, setCats] = useState([])
  //call this function only once when the component starts
  useEffect(() => {
    const catsRef = collection(db, 'cats');


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

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {cats.map((cat, i) => {
          return <div>{cat.name} is {cat.age} years old</div>
        })}
      </header>
    </div>
  );
}

export default App;
