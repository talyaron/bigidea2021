import './App.css';
import EPV from "./Empire.jpg"

//components
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        
        <p>
          My Favorite Actor: James Earl Jones
        </p>
        <img src= {EPV}  alt='sdfsdf'/>
      </header>
    </div>
  );
}

export default App;

