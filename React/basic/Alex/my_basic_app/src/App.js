import logo from './logo.svg';
import scuba from './scuba_diver.jpg';
import './App.css';

const abc = 123;

function App() {
  return (
   <div className='gold'>
     <img src={scuba}/>
     <h1>My wifi wont let me download a new image, but I really like scuba diving :)</h1>
    <div>Boo {abc}</div>
   </div>

  );
}

export default App;
