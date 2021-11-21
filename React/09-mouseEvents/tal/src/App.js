import { useRef, useEffect, useState } from 'react';
import './App.css'
import seaMP3 from './words/sea.mp3';
//import landMP3 from './words/land.MP3';

let isPass = true;
let pressedOnTime = true;
let landOrSea = 'sea';
let landOrSeaPressed = '';
let x = 0;
function App() {

  const circle = useRef(null);
  const sea = new Audio(seaMP3);
  const land = new Audio(landMP3);

  const [counter, setCounter] = useState(0)

  // say location
  function sayLocation() {
    x++
    setCounter(x);

    

    //say land or sea and set the value
    const r = Math.random();
    if (r >= 0.5) {
      landOrSea = 'sea';
      sea.play()
    } else {
      landOrSea = 'land';
      land.play();
    }

    //wait to see what was the user input
    let waitFor = (Math.random() * 1000) + 2000;
    setTimeout(() => {
      if (isPass) {

        if (landOrSea === landOrSeaPressed) {

          console.log('goooooo!', counter)
          landOrSeaPressed = '';
          sayLocation();
        } else {
          setCounter("You lost!")
        }
      } else {
        setCounter("You lost!")
      }
    }, waitFor)
  }


  function handleClick(ev) {

    landOrSeaPressed = ev.target.id;
    if (isPass && landOrSea === ev.target.id) {

    } else {
      isPass = false;
      setCounter('You lost!')
    }

    //get x and y of the click point
    const x = ev.clientX;
    const y = ev.clientY;

    circle.current.style.top = `${y - 5}px`;
    circle.current.style.left = `${x - 5}px`;



  }

  return (
    <div>
      <button onClick={sayLocation}>Start Game</button>
      <h1>{counter}</h1>
      {counter !== 'You lost!'
        ? <><div id='sea' className='box blue' onClick={handleClick}></div>
          <div id='land' className='box brown' onClick={handleClick}></div>
          <div ref={circle} className='circle'></div>
        </>
        : <h2>And have {x} point</h2>
      }
    </div>
  );
}

export default App;