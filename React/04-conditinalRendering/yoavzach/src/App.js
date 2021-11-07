import './App.css';

//components
import Card from './components/Card/Card';
import buzz from './images/buzz.webp'
import mcQueen from './images/mcQueen.jpg';

function App() {
  return (
    <div className="App">
      <Card source={buzz}/>
      <Card source={mcQueen}/>
      
    </div>
  );
}

export default App;
