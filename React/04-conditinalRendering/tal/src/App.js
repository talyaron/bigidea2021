import './App.css';
import Box from './components/If/If';
import Switch from './components/Switch/Switch';
import TernaryOperator from './components/TernaryOperator/TernaryOperator';

function App() {
  return (
    <div className="App">
      <TernaryOperator />
      {/* <Box isOne={true} dkfjghdjkfhgjk='aaa' sdfhsdfg='23' />
      <Box isOne={false} dkfjghdjkfhgjk='bbb' skjdh={true} /> */}
      <Switch img='hangman1' />
      <Switch img='hangman2' />
      <Switch img='dragon' />
      <Switch img='fish' />
    </div>
  );
}

export default App;
