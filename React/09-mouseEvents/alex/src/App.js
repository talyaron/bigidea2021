import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import { useRef } from 'react';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';
import { useState } from 'react';

let stopCondition = false;
let scoreMath = 0;

function App() {

  const [score, setScore] = useState(0)
  const [youLose, setYouLose] = useState('')
  const [correctLocation, setCorrectLocation] = useState('')

  const circleRef = useRef(null);
  const sea = new Audio(seaMP3);
  const land = new Audio(landMP3);
  

  
  console.dir(circleRef);

function handleClick(ev){
  console.log(ev);
  console.log(ev.target.id);

  const x = ev.clientX;
  const y = ev.clientY;


  console.log(correctLocation);
  if(ev.target.id == correctLocation){
    console.log('correct!');
    stopCondition = false;
    scoreMath++;
    setScore(scoreMath);
  }else{
    console.log('wrong!');
    stopCondition = true;
  }
  
  
  circleRef.current.style.top = `${y-20}px`;
  circleRef.current.style.left = `${x-20}px`;
}

function sayPosition(){
  if(stopCondition != true){ 
    const pickLocation = Math.floor(Math.random() * 10) + 1;
    if(pickLocation>5){
      setCorrectLocation('sea')
      sea.play();
    }else{
      setCorrectLocation('land')
      land.play();
    }

    console.log(stopCondition);
        setTimeout(sayPosition,Math.floor(Math.random()*(1500-500+1)+500));
        stopCondition = true;
   }else{
     setYouLose("Game Over!!!")
   }
};



  return (
   <div>

     <div id='sea'className='box blue' onClick={handleClick}></div>

     <div id='land' className='box brown' onClick={handleClick}></div>

      <div ref = {circleRef} className='circle' ></div>

      <input type="button" value="Start" onClick={sayPosition}></input>
      <h1>Score: {score}</h1>
      <h1>{youLose}</h1>
   </div>
  );
}

export default App;