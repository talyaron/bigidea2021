
import './App.css';
import Counter from './components/Counter/counter';
import TextInput from './components/Textimput/input';
import Hangman from './components/Hangman/Hangman';
import ImageSelector from './components/ImageSelector/ImageSelector';


function App() {
  return (
    <div className="App">
    
      <Counter/>
      <TextInput/>
      <Hangman/>
      <ImageSelector/>
      
    </div>
  );
}

export default App;
