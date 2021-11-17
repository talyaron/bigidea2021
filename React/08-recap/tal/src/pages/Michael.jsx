import { useEffect } from 'react'

import { db } from '../functions/firebase/config';
import { doc, getDoc, collection, getDocs, onSnapshot } from "firebase/firestore";

function Michael() {


  //run only on start
  useEffect(() => {
    //get all of us...
    const usRef = collection(db, 'us');

    // getDocs(usRef).then(usDB => {
    //   usDB.forEach(personDB => {
    //     console.log(personDB.id)
    //     console.log(personDB.data())
    //   })
    // })

    //get only Michael and print it
    const docRef = doc(db, 'us', 'noeAEfNicuKOI0ndT4Nl');
    // getDoc(docRef).then(docDB => {
    //   console.log(docDB.data())
    // })

    //listen to Micheal
    const unsubscribe = onSnapshot(docRef, docDB => {
      console.log(docDB.data())
    })

    return ()=>{
        //remove listner
        unsubscribe()
    }


  }, [])


  return (
    <h1>
      Michael
    </h1>
  );
}

export default Michael;
