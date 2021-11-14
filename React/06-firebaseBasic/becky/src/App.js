import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { collection, doc, getDoc, onSnapshot, setDoc, addDoc } from "firebase/firestore";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const catRef = doc(db, "cats", "93DaHniizYf0Vz9njQEB");

    getDoc(catRef).then(catDB => {
      console.log(catDB.data());
    })

    onSnapshot(catRef, catDB => {
      console.log(catDB.data());
    })
    // addDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });

    const catsRef = collection(db, 'cats');
    onSnapshot(catsRef, catsDB => {
      const catsArr = [];
      catsDB.forEach(catDB => {
        console.log(catDB.data())
        catsArr.push(catDB.data());
      })
      console.log(catsArr)
      setCats(catsArr);
    })

  }, [])

  function submitForm(){
    document.getElementById(box).style.display = 'block'
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          cats.map((cat, i) => {
            return (<div key={i}>{cat.name}</div>)
          })
        }
        <form onSubmit="submitForm()">
        <input type="text" id="box"/>
        <input type="submit"/>
        </form>
      </header>
    </div>
  );
}

export default App;
