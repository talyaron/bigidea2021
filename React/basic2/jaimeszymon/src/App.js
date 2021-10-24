import logo from './logo.svg';
import './App.css';
import beyblade from './beyblade.jpeg';
import catan from './catan.jpeg';
import cube from './cube.jpg';
import dnd from './dnd.png';
import ds from './ds.png';
import legos from './legos.jpg';

function App() {
  return (
    <div>
    <div className="body">
    <p className="header">Favorite Toys/Games</p>

      <div className="box one">
      <h3>Catan</h3>
      <img url=""></img>
      </div>

      <div className="box two">
      <h3>DS</h3>
      <img></img>
      </div>

      <div className="box three">
      <h3>Rubik's Cube</h3>
      <img></img>
      </div>

      <div className="box four">
      <h3>Legos</h3>
      <img></img>
      </div>
      
      <div className="box five">
      <h3>Dungeons and Dragons</h3>
      <img></img>
      </div>
      
      <div className="box six">
      <h3>Beyblade</h3>
      <img></img>
      </div>

    </div>
    </div>
  );
}

export default App;
