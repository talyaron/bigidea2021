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
       <div className = 'text' id = "text1">
            Greta is Back at it again tweeting "In the German Rhineland, six further villages are planned to 
            be destroyed to expand the largest coal mine of Europe. This is absurd. Today we visited those defending the villages and 
            fighting for the coal to stay in the ground. We are standing with you. #AlleDörferBleiben"
        </div>
       <div className = 'text' id = "text2">
            While Idaho seems to be a favorite destination for celebrities to visit, there have only been a few things filmed in the gem state. 
            In 2004 a unique comedy come out and took the nation by storm. It was a hard movie to ignore. For at least a decade I still saw people 
            occasionally rocking the 'vote for pedro' shirts. If you have not seen it, Napoleon Dynamite is about a super awkward teenager navigating 
            home and high school in a small town.

       </div>
       <div className = 'text' id = "text3">par about singa</div>
       <a className = 'link' id = "link1" href = 'https://twitter.com/GretaThunberg/status/1441828422448263169?s=20'>link 1</a>
       <a className = 'link' id = "link2" href = 'https://kidotalkradio.com/the-2004-cult-classic-comedy-napoleon-dynamite-was-filmed-in-idaho/'>link 2</a>
       <a className = 'link' id = "link3" href = ''>link 3</a>
    </div>
  );
}

export default App;
