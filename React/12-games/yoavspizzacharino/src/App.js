import './App.css';
import { db } from './firebase/config.js';
import { useEffect, useState } from 'react';
import { doc, setDoc, updateDoc, deleteDoc, onSnapshot, collection,query,getDocs } from 'firebase/firestore';

let questionsRef
let questionsArr = []

function App() {
  

  useEffect(() => {
    
    async function OnStartup() {
      //questionsRef = await collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions')
      const q = query(collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions'));
      const querySnapshot = await getDocs(q);
      let i=1;
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        let tempObj = {
          name: data.user.name,
          true1: data.true1,
          true2: data.true2,
          false: data.untrue,
          index:i
        }
       i++;
        questionsArr.push(tempObj)
        console.log(questionsArr);
      })
    }
    OnStartup();
   
  }, []);


  let randomLiePosition;



  function nextRound() {
    randomise()
  }
  async function randomise() {
    let random = Math.floor(Math.random() * 6)
  }

  function liePosition() {
    let randomNumber = Math.ceil(Math.random() * 3)
    console.log(randomNumber);
    return (randomNumber);
  }

  randomLiePosition = liePosition();
  console.log(randomLiePosition);


  return (
    <div className="App"></div>
  );
}

export default App;
