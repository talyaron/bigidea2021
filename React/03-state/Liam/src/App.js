import logo from './logo.svg';
import './App.css';
import './components/TernOp/TernaryOp';
import './components/switch/Switch';
import './components/if/box';

//components
import Hangman from './components/Hangman';
//import ImageSelect from './components/ImgSelect'
//import List from './components/List/list';

//npx create-react-app <nameOfApp>

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
