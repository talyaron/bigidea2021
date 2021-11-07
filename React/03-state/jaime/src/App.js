import './App.css';
import Counter from './components/Counter/Counter';
import Hangman from './components/Hangman/Hangman';
import ImageSelector from './components/ImageSelector/ImageSelector';
import List from './components/List/List';
import Box from './components/Box/Box';

function App() {
  return (
    <div className="App">
        <Counter />
        <Hangman />
        <ImageSelector />
        <List />
        <Box isOne='castle'/>
        <Box isOne='donald'/>
        <Box isOne='Luffy'/>
        <Box isOne='none'/>
    </div>
  );
}

export default App;
