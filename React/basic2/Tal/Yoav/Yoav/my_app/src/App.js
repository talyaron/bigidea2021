import logo from './pokerpic.jpg';
import './App.css';

const game = 'world of warcraft';

function App() {
  return (
    <div>
      <div> Hello</div>
      <div className = ''> 
      Hi {game};
      </div>
   <img className='img' src={logo}></img>
   </div>

  );
}

export default App;
