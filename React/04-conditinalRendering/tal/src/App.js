import logo from './logo.svg';
import './App.css';
import Box from './components/Box/Box';

function App() {
  return (
    <div className="App">
      <Box isOne={true} />
      <Box isOne={false} />
    </div>
  );
}

export default App;
