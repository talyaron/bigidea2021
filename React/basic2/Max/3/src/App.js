import './App.css';
import Hana from './components/hanaCard/HanaCard'
import Josh from './components/joshCard/JoshCard'
import Sloopy from './components/sloopyCard/SloopyCard'
import Will from './components/willCard/WillCard'



function App() {
  return (
    <div className="cont">
      <Hana className = 'hana card'/>
      <Josh className= 'josh card'/>
      <Sloopy className= 'sloopy card'/>
      <Will className= 'will card'/>
    </div>
  );
}

export default App;
