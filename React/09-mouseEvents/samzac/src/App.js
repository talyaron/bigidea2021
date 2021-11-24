import { useRef } from 'react';
import './App.css';
import { db } from './firebase/config.js';
import { useEffect, useState } from 'react';
import { doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import landMP3 from './audio/land.mp3';
import seaMP3 from './audio/sea.mp3';


function App() {

  const circle = useRef(null);
  console.dir(circle);

  function handleClick(ev){
    console.log(ev);
    console.log(ev.target.id)
  
      
    const x = ev.clientX;
    const y = ev.clientY;
  
    circle.current.style.top = `${y - 5}px`;
    circle.current.style.left = `${x - 5}px`;
  
    }

  const sea = new Audio(seaMP3);
  const land = new Audio(landMP3);
  function StartGame(){
    setInterval(function(){
      const random= Math.random();
      let seaOrLand;
      if (random<0.5){
        seaOrLand="Sea";
        sea.play()
      }
      else{
        seaOrLand="Land"
        land.play()
      }
      console.log(seaOrLand)
      setDoc(doc(db, 'gameFiles', "seaOrLand"), {decision:seaOrLand});
    },1000)
  }

  // function ResetGame (){
  //   setDoc(doc(db, 'gameFiles', numberOfUsers), {});
  // };
  function handleSet(ev) {
    ev.preventDefault();
    const setName = ev.target.elements.nameBox.value;
    const setImage = ev.target.elements.imgBox.value;
    const lowerName= setName.toLowerCase();
    console.log(setName, setImage);
    setDoc(doc(db, 'users', lowerName), {image: setImage});
  }

  return (
    <div className="App">
      <form onSubmit={handleSet}>
      <input type='text' placeholder='Enter your name' name='nameBox'/>
      <input type='text' placeholder='Enter your image url' name='imgBox'/>
      <input type="submit" placeholder="submit"></input>
      </form>
      {/* <button onClick={ResetGame}></button> */}
      <button onClick={StartGame}>Start Game</button>
      <div id='sea' className='box blue' onClick = {handleClick}></div>
     <div id = 'land' className='box brown' onClick={handleClick}></div>
     <div ref={circle} className = 'circle'></div>
    </div>
  );
}

export default App;
