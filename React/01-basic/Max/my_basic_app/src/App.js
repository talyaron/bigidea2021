import logo from './logo.svg';
import './App.css';
import shark from './shark.jpg';
import csgo from './csgo.jpg';



function App() {
  return (
    <div className="box">
        <img src={shark}/>
        <h1>Hi my name is Max Blog post </h1>
        <img src={csgo} className='CSGO'/>
        <div className ="bodypar">this picture is not of me, however look how SWAG he looks.<br/>
        this has nothing to do with my favorate game but what it is, is my profile pic <br/>
        when I play csgo. Csgo is my favorate game because im good at it :)
        </div>
    </div>
  );
}

export default App;
