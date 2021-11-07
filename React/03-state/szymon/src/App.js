import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter/Counter'
import Select from './components/ImageSelector/imageselector'
import Hangman from './components/Hangman/Hangman'
import List from './components/List/List'
import Box from "./components/ConditionalRendering/Box"
import Switch from "./components/Switch/Switch"
import TernaryOperator from "./components/TernaryOperator/TernaryOpertator"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            {/* <Counter/> */}
            {/* {<Select/>} */}
            {/* {<Hangman/>} */}
            {/* {<List/>} */}
            {/* {<Box isOne={true}/>}
            {<Box isOne={false}/>} */}
            {/* <Switch img="dragon1"/>
            <Switch img="dragon2"/>
            <Switch img="dragon3"/>
            <Switch img="lizard"/> */}
            {<TernaryOperator isGood={true}/>}
        </p>
      </header>
    </div>
  );
}

export default App;
