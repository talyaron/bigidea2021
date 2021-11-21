import { useRef } from 'react';
import './App.css'
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';

function App() {

  const circle = useRef(null);
  const sea = new Audio(seaMP3);
  const land = new Audio(landMP3);
  let value;
  let value2;
  let num= Math.random()*2;
  let valueclick;

  console.dir(circle);


  function handleClick(ev) {
    console.log(ev)
    console.log(ev.target.id)
    valueclick=ev.target.id;

   
    //get x and y of the click point
    const x = ev.clientX;
    const y = ev.clientY;

    circle.current.style.top = `${y - 5}px`;
    circle.current.style.left = `${x - 5}px`;
 
 
    
    
  }
  
function pickLocation(){
    
      if(num<=1){
        sea.play();
        
        value= 'sea';
       
        
      }
      else{
        land.play();
   
        value= 'land';
     
      }
      console.log(value);
      console.log(value2);

      if(value=== valueclick){

      }
      else{
        alert("you lose");
      }
      
    }
      setTimeout(pickLocation, Math.random()*1000+2000) 
   
  
  return (
    <div>
      <div id='sea' className='box blue' onClick={handleClick}></div>
      <div id='land' className='box brown' onClick={handleClick}></div>
      <div ref={circle} className='circle'></div>
      <input type='button' onClick={pickLocation}></input>
    </div>
  );
}

export default App;