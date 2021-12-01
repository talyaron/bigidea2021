import { useRef } from 'react';
import './App.css';
//import landMP3 from './audio/land.mp3';
//import seaMP3 from './audio/sea.mp3';


function App() {
  const circle = useRef(null);
 // const sea = new Audio(seaMP3);
  //const land = new Audio(landMP3);

  console.dir(circle);

  function handleClick(ev){
    console.log(ev);
    console.log(ev.target.id)

    //get x and y of the click point
    const x = ev.clientX;
    const y = ev.clientY;

    circle.current.style.top = `${y - 5}px`;
    circle.current.style.left = `${x - 5}px`;

   // land.play();
   // sea.play();
  }
  
  return (
  <div>
   <div id='sea' className='box blue' onClick = {handleClick}></div>
   <div id = 'land' className='box brown' onClick={handleClick}></div>
   <div ref={circle} className = 'circle'></div>
  </div>
  );
}

export default App;
