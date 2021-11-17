import './App.css';
import { useEffect} from 'react'
import { db } from '../functions/firebase/config';
import { doc, onSnapshot, getDocs, collection, useState} from "firebase/firestore";

function Liam(){
  const ourDatabase = collection(db, "us");
  const [surprise, setSurprise] = useState('');
  const ourElement = doc(db, "us", 'kNdaVEOJxe9bYlnlbQaT');

  useEffect(()=>{
    let ourDBArray = [];

    getDocs(ourDatabase).then(dataDB => {
      dataDB.forEach(datum => {
        ourDBArray.push(datum.data())
        console.log(datum.id)
        console.log(datum.data())
      })
      console.log(ourDBArray)
      console.log("stage 1")
    })
    
    const unsubscribe = onSnapshot(ourElement, docDB => {
      console.log(docDB.data());
      setSurprise(docDB.data().surprise)

    })

    return ()=>{
        unsubscribe()
    }
  },[])

    return(
        <h1>
            {name}
        </h1>
        <h2>
            {surprise}
        </h2>
    );
}



export default Liam
