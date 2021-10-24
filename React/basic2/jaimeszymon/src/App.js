import logo from './logo.svg';
import './App.css';
import beyblade from './beyblade.jpeg';
import catan from './catan.jpeg';
import cube from './cube.jpg';
import dnd from './dnd.jpg';
import ds from './ds.png';
import legos from './legos.jpg';

function App() {
  return (
    <div>
    <div className="body">
    <h1 className="header">Favorite Toys/Games -> Jaime and Szymon</h1>

      <div className="box one">
      <h3>Catan</h3>
      </div>

      <div className="box two">
      <h3>DS</h3>
      </div>

      <div className="box three">
      <h3>Rubik's Cube</h3>
      </div>

      <div className="box four">
      <h3>Legos</h3>
      </div>
      
      <div className="box five">
      <h3>Dungeons and Dragons</h3>
      </div>
      
      <div className="box six">
      <h3>Beyblade</h3>
      </div>

    </div>
    </div>
  );
}

export default App;
