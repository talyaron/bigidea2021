import hotweel from './hotweels.jpeg'
import kitchen from './kitchen.png'
import lego from './lego.jpg'
import thomas from './thomas.jpeg'
import rebecca from './ribecca.jpeg'
import nerf from './nerf.jpg'

import './App.css';


function App(){
  return(
    <div className="cont">
      <div className = 'pic' id = 'pic1'  alt='' style={{ backgroundImage: `url(${hotweel})` }}></div>
      <div className = 'pic'  id = 'pic2'  alt=''style={{ backgroundImage: `url(${kitchen})` }}></div>
      <div className = 'pic'  id = 'pic3'  alt=''style={{ backgroundImage: `url(${lego})` }}></div>
      <div className = 'pic'  id = 'pic4'  alt=''style={{ backgroundImage: `url(${thomas})` }}></div>
      <div className = 'pic'  id = 'pic5'  alt=''style={{ backgroundImage: `url(${rebecca})` }}></div>
      <div className = 'pic'  id = 'pic6' alt=''style={{ backgroundImage: `url(${nerf})` }}></div>
      
    </div>
  );
}



export default App;
