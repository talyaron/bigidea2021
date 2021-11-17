import { useEffect, useState} from 'react'

import { db } from '../functions/firebase/config';
import { doc, getDoc, collection, getDocs, onSnapshot } from "firebase/firestore";

function Liam() {
const [surprise, setSurprise] = useState('');
const [name, setName] = useState('');

  //run only on start
  useEffect(() => {
    //get all of us...
    const usRef = collection(db, 'us');

    getDocs(usRef).then(usDB => {
      usDB.forEach(personDB => {
        console.log(personDB.id)
        console.log(personDB.data())
      })
    })

    //get only Michael and print it
    const docRef = doc(db, 'us', 'e1B12ECzbM9IfjYlZo8M');
    getDoc(docRef).then(docDB => {
      console.log(docDB.data())
    })

    //listen to Micheal
    const unsubscribe = onSnapshot(docRef, docDB => {
      console.log(docDB.data())

      setSurprise(docDB.data().suprise);
      setName(docDB.data().name)
    })

   return ()=>{
       //remove listner
       unsubscribe()
   }


  }, [])


  return (
      <div>
    <h1>
      {name}
    </h1>
    <h2>{surprise}</h2>
    </div>
  );
}

export default Liam;
