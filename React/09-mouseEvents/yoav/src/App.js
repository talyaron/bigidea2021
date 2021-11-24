import {useRef} from 'react';
import './App.css';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';
import buzz from './avatar/buzz.webp';
import { db } from './functions/firebase/config';
import { collection, doc, setDoc, updateDoc, getDoc, onSnapshot } from "firebase/firestore";

function App() {
  const circle = useRef(null);
  const sea = new Audio(seaMP3);
  const land = new Audio(landMP3);
  let instruction; 

  console.dir(circle);

  function seaOrLand(){
    let randomDigit = Math.floor(Math.random()*2) + 1;
    console.log(randomDigit);
    if (randomDigit === 1) {
      sea.play();
      instruction = 'sea'; 
    }
    else if (randomDigit === 2) {
      land.play();
      instruction = 'land'; 
    }


  }


  function checkAnswer(id) {
    if (id == instruction) {
      console.log("true");
      return (true);
    }
    else {
      console.log("You are wrong");
      alert("You lost");
      return (false);
    }
  }

  function handleStart(){
    setTimeout(function(){seaOrLand()},1000);
  }
  
  function handleName(ev){
    
  }

  function handleClick(ev){
    console.log(ev)
    console.log(ev.target.id)

    //get x and y of the click point
    const x = ev.clientX;
    const y = ev.clientY;

    circle.current.style.top = `${y - 5}px`;
    circle.current.style.left = `${x - 5}px`;

    if (checkAnswer(ev.target.id) == true) {
      setTimeout(function(){seaOrLand()},1000);
    }

  }

  return (
    <div>
      
      <div id = 'sea' className = 'box blue' onClick = {handleClick}></div>
      <div id = 'land' className = 'box brown' onClick = {handleClick}></div>
      <img ref = {circle} className = 'circle' src = {buzz}></img>
      <input id = 'nameBox' type = 'text' placeHolder = 'Name'/>
      <input type = 'submit' value = 'submit' onClick = {handleName}/>
      <input type = 'submit' value = "start" onClick = {handleStart}/>
    </div>
  );
}

export default App;
