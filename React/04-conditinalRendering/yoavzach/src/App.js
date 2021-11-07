import './App.css';

//components
import Card from './components/Card/Card';
import source1 from './images/funny.jpg'

function App() {
  return (
    <div className="App">
      <Card source={source1}/>
      
    </div>
  );
}

export default App;
