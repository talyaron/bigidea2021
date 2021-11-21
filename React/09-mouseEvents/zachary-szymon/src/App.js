import landMP3 from './words/land.mp3'
import seaMP3 from './words/sea.mp3'
import './App.css';
import { useRef, useState } from 'react';

const sea = new Audio(seaMP3);
const land = new Audio(landMP3);



function App() {

  const [score, setScore] = useState(0)
  const [assigned, setAssigned] = useState("")
  const [chosen,setChosen]=useState("")
  const circle = useRef(null);
  console.dir(circle);

  function sayLocation() {
    let random = Math.random()
      console.log(random)
      if (random > 0.5) {
        setAssigned("Sea")
        sea.play();
      }
      else {
        setAssigned("Land")
        land.play();
      }
      console.log(assigned)
    setTimeout(function (ev) {
      if (chosen===assigned){
        setScore(score+1);
        sayLocation();
      }
      else{
        setScore(0);
        alert("You Lose!");
      }
    
    //   let random = Math.random()
    //   console.log(random)
    //   if (random > 0.5) {
    //     setAssigned("Sea")
    //     sea.play();
    //   }
    //   else {
    //     setAssigned("Land")
    //     land.play();
    //   }
    //   console.log(assigned)

    }, 2000);
  }
  function handleClick(ev) {

    //  console.log(ev)
    //  console.log(ev.target.id)
    //  land.play();
    //get x and y of click point
    const x = ev.clientX - 10;
    const y = ev.clientY - 10;
    //move circle
    circle.current.style.top = `${y}px`;
    circle.current.style.left = `${x}px`;

    setChosen(ev.target.id)
    // if (ev.target.id === assigned) {
    //   sayLocation();
    //   setScore(score + 1);
    // }
    // else {
    //   alert("you lose");
    //   setScore(0)
    // }
  }

  return (
    <div className="App">
      <div id='Sea' className='box blue' onClick={handleClick}>

      </div>

      <div id='Land' className='box brown' onClick={handleClick}>

      </div>
      <div ref={circle} className='circle'></div>

      <button onClick={sayLocation}>Start Game</button>

      <div>Score:{score}</div>


    </div>
  );
}

export default App;
