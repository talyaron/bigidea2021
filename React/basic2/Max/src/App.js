import './App.css';
import greta from './madGreta.jpg';
import nap from './napolian.jpg';
import singa from './singapore.jpg';



function App() {
  return (
    <div className="cont">
       <h1 className = 'Header'>News</h1>
       <img src = {greta} className = 'photo'></img>
       <img src = {nap} className = 'photo'></img>
       <img src ={singa} className = 'photo'></img>
    </div>
  );
}

export default App;
