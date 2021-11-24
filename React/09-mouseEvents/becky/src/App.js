import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import Land from './words/land.mp3'
import Sea from './words/sea.mp3'
import { db } from './functions/firebase/config';
import {doc} from 'firebase/firestore'


function App() {
  const circle = useRef(null);
  console.dir(circle);
  const seaSound = new Audio(Sea);
  const landSound = new Audio(Land);
  let instruction;
  let nameRef = useRef(null)

  function seaOrLand() {
    if ((Math.floor(Math.random() * 2) + 1) == 1) {
      seaSound.play()
      instruction = 'sea';
    }
    else {
      landSound.play()
      instruction = 'land';

    }
  }

  function checkAnswer(id) {
    if (id == instruction) {
      console.log('true')
      return (true)
    }
    else {
      alert('You lost');
      return (false)
    }
  }



  function handleClick(ev) {
    console.log(ev)
    console.log(ev.target.id)
    const x = ev.clientX;
    const y = ev.clientY;
    circle.current.style.top = `${y - 50}px`;
    circle.current.style.left = `${x - 50}px`;
    if (checkAnswer(ev.target.id) == true) {
      setTimeout(function () { seaOrLand() }, 1000)
    }
  }
  function handleStart() {
    setTimeout(function () { seaOrLand() }, 1000)
  }

  function handleName(event){
    event.preventDefault();
    nameRef = doc(db , 'YB', 'playerList') 
    console.log(event.target.elements.nameBox.value)
  }


  return (
    <div className="App">

      <div id="sea" className='boxblue' onClick={handleClick}></div>
      <div id="land" className='boxgreen' onClick={handleClick}></div>
      <div ref={circle} className='circle'></div>
      <form>
      <input type='text' placeholder='name' id = 'nameBox'/>
      <input type='submit' value='submit' onClick={handleName}/>
      <input type='submit' value='start' onClick={handleStart} />
      </form>
    </div>
  );
}

export default App;
