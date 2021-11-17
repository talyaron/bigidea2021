import './App.css';
import { useEffect} from 'react'
import { db } from '../functions/firebase/config';
import { doc, onSnapshot, getDoc, getDocs, collection} from "firebase/firestore";

function Michael(){
    const ourDatabase = collection(db, "us");
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
      
      getDoc(ourElement).then(docDB => {
        console.log(docDB.data())
        console.log("stage 2")
      })
      
      const unsubscribe = onSnapshot(ourElement, (doc) => {
        console.log('Current Data: ' + doc.data());
        console.log("stage 3")
      })
  
    },[])

    return {

    }
}



export default Michael