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
      <img className = 'pic' src ={hotweel} id = 'pic1' />
      <img className = 'pic' src ={kitchen} id = 'pic2' />
      <img className = 'pic' src ={lego} id = 'pic3' />
      <img className = 'pic' src ={thomas} id = 'pic4' />
      <img className = 'pic' src ={ribecca} id = 'pic5' />
      <img className = 'pic' src ={nerf} id = 'pic6' />
      
    </div>
  );
}

export default App;
