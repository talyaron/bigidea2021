import {useRef} from 'react';
import './App.css';

function App() {
  const circle=useRef(null);
  console.dir(circle);
  function handleClick (ev) {
 console.log(ev)
 console.log(ev.target.id)

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
    <div ref={circle} className='circle'>


    </div>
    </div>
  );
}

export default App;
