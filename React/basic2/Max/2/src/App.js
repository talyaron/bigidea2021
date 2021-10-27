import './App.css';

import Poster from './component/moviePos/moviepos'
import Actor from './component/actorIMG/actorIMG'
import Quote from './component/quote/quote'

function App() {
  return (
    <div className="cont">
      <Poster />
      <Actor/>
      <Quote/>
      
    </div>
  );
}

export default App;
