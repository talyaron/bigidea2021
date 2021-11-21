import './App.css'

function App() {
  function handleClick(ev) {
    console.log(ev)
    console.log(ev.target.id)
  }
  return (
   <div>
     <div id='sea' className= 'box blue' onClick={handleClick}>

     </div>
     <div id='land' className= 'box brown' onClick={handleClick}>

     </div>
   </div>
  );
}

export default App;