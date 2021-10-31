import logo from './pokerpic.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className = 'game'>My favorite game right now is: poker</div>
      <div className = 'box'>I play like 4 times a week</div> 
   <img className='img' src={logo}></img>
   </div>

  );
}

export default App;
