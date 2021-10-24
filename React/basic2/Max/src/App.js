import './App.css';
import greta from './madGreta.jpg';
import nap from './napolian.jpg';
import singa from './singapore.jpg';



function App() {
  return (
    <div className="cont">
       <h1 className = 'Header'>News</h1>
       <img src = {greta} className = 'photo' id = "photo1"></img>
       <img src = {nap} className = 'photo' id = "photo2"></img>
       <img src = {singa} className = 'photo' id = "photo3"></img>
       
       <div className = 'text' id = "text1">Greta is Back at it again tweeting "In the German Rhineland, six further villages are planned to 
       be destroyed to expand the largest coal mine of Europe. This is absurd. Today we visited those defending the villages and 
       fighting for the coal to stay in the ground. We are standing with you. #AlleDörferBleiben" </div>

       <div className = 'text' id = "text2">par about napolian</div>
       <div className = 'text' id = "text3">par about singa</div>
       <a className = 'link' id = "link1">link 1</a>
       <a className = 'link' id = "link2">link 2</a>
       <a className = 'link' id = "link3">link 3</a>
    </div>
  );
}

export default App;
