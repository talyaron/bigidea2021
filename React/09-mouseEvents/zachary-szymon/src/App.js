import landMP3 from './words/land.mp3'
import seaMP3 from './words/sea.mp3'
import './App.css';
import { useRef } from 'react';

function App() {
  const sea = new Audio(seaMP3);
  const land = new Audio(landMP3);
 


  const circle=useRef(null);
  console.dir(circle);
  function sayLocation (){
    setTimeout( function (ev){ 
     
     },Math.random()*10000+2000);
  }
function handleClick (ev) {
  
 console.log(ev)
 console.log(ev.target.id)
 land.play();

 //get x and y of click point
 const x=ev.clientX-10;
 const y=ev.clientY-10;
 

 //move circle
circle.current.style.top=`${y}px`;
circle.current.style.left=`${x}px`;
}
  
  return (
    <div className="App">
      <div id='sea' className='box blue' onClick={handleClick}>
        
      </div>

      <div id='land' className='box brown' onClick={handleClick}>
        
        </div>
    <div ref={circle} className='circle'></div>

    <button onClick={sayLocation}>Start Game</button>

    


    </div>
  );
}

export default App;
