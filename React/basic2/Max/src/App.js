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
       <img src = {singa} className = 'photo'></img>
       <div className = 'text'>Greta is Back at it again tweeting "In the German Rhineland, six further villages are planned to 
       be destroyed to expand the largest coal mine of Europe. This is absurd. Today we visited those defending the villages and 
       fighting for the coal to stay in the ground. We are standing with you. #AlleDörferBleiben" </div>
       <div className = 'text'>par about napolian</div>
       <div className = 'text'>par about singa</div>
       <a className = 'link'>link 1</a>
       <a className = 'link'>link 2</a>
       <a className = 'link'>link 3</a>
    </div>
  );
}

export default App;
