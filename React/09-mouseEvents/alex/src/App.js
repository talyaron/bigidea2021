import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import { useRef,useEffect } from 'react';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';
import { useState } from 'react';
import { db } from './functions/firebase/config';
import { doc, onSnapshot,setDoc,addDoc, collection,updateDoc,getDoc,getDocs,query } from 'firebase/firestore';


let stopCondition = false;
let scoreMath = 0;
let continueGame = true;
let playerName  = ''

function App() {

  const [score, setScore] = useState([])
  const [youLose, setYouLose] = useState('')
  //const [correctLocation, setCorrectLocation] = useState('')

  const circleRef = useRef(null);
  const nameRef = useRef(null);
  const landSeaRef = doc(db,'LandSea','LandSea')
  const namesRef = collection(db,'names')
  
  

  const sea = new Audio(seaMP3);
  const land = new Audio(landMP3);
  
  
  console.dir(nameRef);
  console.dir(circleRef);


function handleNameInput(ev){
  ev.preventDefault();  
  setDoc(doc(db, "names",nameRef.current.value ), {
    name: nameRef.current.value,
    score: 0,
    stillPlaying: true
  });
  playerName = nameRef.current.value;
  
}
useEffect(() => {
  

  const q = query(collection(db, "LandSea"));
  const updated = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      getDoc(landSeaRef).then(docDB => {
        let data = docDB.data()
      if (change.type === "modified") {
        setTimeout(handleTimer,data.timer);
        const audioName = data.LandOrSea;
        console.log(audioName);
        if(audioName == 'land'){
          land.play();
        }else{
          sea.play();
        }
      }
    })
    });
  });








}, [])

function handleClick(ev){
  console.log(ev);
  console.log(ev.target.id);

  const x = ev.clientX;
  const y = ev.clientY;

  getDoc(landSeaRef).then(docDB => {
    let data = docDB.data()
    const correctLocation = data.LandOrSea
  
  console.log(correctLocation);
  if(ev.target.id == correctLocation){
    console.log('correct!');
    stopCondition = false;
    console.log(playerName);
    const playernamesRef = doc(db,'names',playerName)
    getDoc(playernamesRef).then(docDB =>{
      let data = docDB.data();
      console.log(data.score); //0
      let newScore = data.score;
      newScore += 1; 
      console.log(newScore); //0
      updateDoc(playernamesRef,{
        score: newScore
      });
      console.log(data.score); //1  
  })
    
  }else{
    console.log('wrong!');
    stopCondition = true;
  }
 })
  

 handleUpdateDom();
 
  
  circleRef.current.style.top = `${y-20}px`;
  circleRef.current.style.left = `${x-20}px`;
}

function handleTimer(){
  console.log("handleTimer pinged")
  console.log(stopCondition);
  if(stopCondition==true){
    const playernamesRef = doc(db,'names',playerName)
    getDoc(playernamesRef).then(docDB => {
      let data = docDB.data()
      updateDoc(playernamesRef,{
        stillPlaying: false
      });
      setYouLose("Game Over!!!")
    })
  }
  stopCondition = true;
}

async function handleUpdateDom(){
  const q = query(collection(db, "names"));
  const querySnapshot = await getDocs(q);

   let tempArray = []
   querySnapshot.forEach((doc) => {
    let data = doc.data();
    let tempObj = {
      name: data.name,
      score: data.score
    }
    tempArray.push(tempObj);
    
  })
  setScore(tempArray);
}

async function sayPosition(){
  const q = query(collection(db, "names"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    if(data.stillPlaying == true){
      continueGame = true;
    }
  })
  
  
  
  if(continueGame == true){ 
      const pickLocation = Math.floor(Math.random() * 10) + 1;
      if(pickLocation>5){
        updateDoc(landSeaRef, {
          LandOrSea: 'sea',
          timer: Math.floor(Math.random()*(1500-500+1)+500)
        });
      }else{
        updateDoc(landSeaRef, {
          LandOrSea: 'land',
          timer: Math.floor(Math.random()*(1500-500+1)+500)
        });
      }

    console.log(stopCondition);
        getDoc(landSeaRef).then(docDB => {
          let data = docDB.data()
          setTimeout(sayPosition,data.timer);
        });
        //setTimeout(sayPosition,Math.floor(Math.random()*(1500-500+1)+500));
        continueGame = false;
   }else{
     //setYouLose("Game Over!!!")
   }
  //  let tempArray = []
  //  querySnapshot.forEach((doc) => {
  //   let data = doc.data();
  //   let tempObj = {
  //     name: data.name,
  //     score: data.score
  //   }
  //   tempArray.push(tempObj);
    
  // })
  // setScore(tempArray);

};



  return (
   <div>
     <form onSubmit={handleNameInput}>
      <input type='text' ref = {nameRef}></input>
      <input type='submit' value = "Submit Name"></input>
     </form>

     <div id='sea'className='box blue' onClick={handleClick}></div>

     <div id='land' className='box brown' onClick={handleClick}></div>

      <div ref = {circleRef} className='circle' ></div>

      <input type="button" value="ONLY CLICK IF YOURE ALEX" onClick={sayPosition}></input>
      <div className="Scoreboard">
          {score.map((points, i) => {
            return (<div key={i}>{points.name}:{points.score}</div>)
          })
          }
          
        </div>
      <h1>{youLose}</h1>
   </div>
  );
}

export default App;