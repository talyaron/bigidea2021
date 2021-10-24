import hotweel from './hotweels.jpeg'
import kitchen from './kitchen.png'
import lego from './lego.jpg'
import thomas from './thomas.jpeg'
import ribecca from './ribecca.jpeg'
import nerf from './nerf.jpg'

import './App.css';


function App(){
  return(
    <div className="cont">
      <img className = 'pic' src ={hotweel} />
      <img className = 'pic' src ={kitchen} />
      <img className = 'pic' src ={lego} />
      <img className = 'pic' src ={thomas} />
      <img className = 'pic' src ={ribecca} />
      <img className = 'pic' src ={nerf} />
      
    </div>
  );
}

export default App;
