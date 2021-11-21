import {useRef} from 'react';
import './App.css';

function App() {
  const circle= useRef(null);
  console.dir(circle)
  function handleClick(ev){
    console.log(ev)
    console.log(ev.target.id)

const x= ev.clientX;
const y= ev.clientY;

circle.offsetTop= y;
circle.offsetLeft= x;
  }
  return (
    <div>
      <div id= "sea" className= "box blue" onClick= {handleClick}> </div>

      <div id= "land" className= "box brown" onClick= {handleClick}> </div>
      <div ref = {circle} className= 'circle'></div>
    </div>
  );
}

export default App;
