import './App.css';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "./functionism/config.js";
import { useState, useEffect } from "react";

function App() {
  const [person, setPerson] = useState("")
  useEffect(() => {
    getData()
  }, [])
  async function getData() {
    let docRef = doc(db, 'zachary', 'person');
    let results = await getDoc(docRef);
    console.log(results.data().name)
    const name = results.data().name+" ?";
    if (typeof name === 'string') {
      setPerson(name);
    }
  }

  return (
    <div className="App">
      What's up {person}
    </div>
  );
}

export default App;
