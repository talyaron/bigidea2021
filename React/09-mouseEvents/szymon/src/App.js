import { useRef } from 'react';
import './App.css'
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3'
import Sea from "./Sea.jpg"
import Island from "./Island.png"

function App() {

  const circle = useRef(null);
  const sea = new Audio(seaMP3);
  const land = new Audio(landMP3)

  console.dir(circle);


  function handleClick(ev) {
    console.log(ev)
    console.log(ev.target.id)

    //get x and y of the click point
    const x = ev.clientX;
    const y = ev.clientY;

    circle.current.style.top = `${y - 5}px`;
    circle.current.style.left = `${x - 5}px`;
    const lanCount = 0;
    const seaCount = 0;
    if()


    sea.play();
    land.play();
  }

<<<<<<< HEAD


    return (
      <div>
        <div ref={circle} className='circle'></div> 
        <div className="sea" onClick={handleClick}></div>
        <div className="land" onClick={handleClick}></div>
      </div>
    );
  
=======
  return (
    <div>
      {/* <div id='sea' className='box blue' onClick={handleClick}></div>
      <div id='land' className='box brown' onClick={handleClick}></div>
      <div ref={circle} className='circle'></div> */}
      <div className="sea"></div>
      <img className="land" src={Island} ></img>
    </div>
  );
>>>>>>> 2f38e796cd93bbd4294b37b4f0ad88808ef13741
}

export default App;