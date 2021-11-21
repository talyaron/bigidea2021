import { useEffect } from 'react'

import { db } from '../functions/firebase/config';
import { doc, getDoc, collection, getDocs, onSnapshot } from "firebase/firestore";

function Michael() {


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
    const docRef = doc(db, 'us', 'noeAEfNicuKOI0ndT4Nl');
    getDoc(docRef).then(docDB => {
      console.log(docDB.data())
    })

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
      <iframe width="560" height="315" src="https://www.youtube.com/embad/watch?v=U_eZmEiyTo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        
      </iframe>
    </h1>
  );
}

export default Michael;
