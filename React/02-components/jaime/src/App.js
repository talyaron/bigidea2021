import logo from './logo.svg';
import './App.css';

//components
import FrozoneCard from './components/FrozoneCard/FrozoneCard';
import QuoteCard from './components/QuoteCard/QuoteCard';
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FrozoneCard name='Samuel L. Jackson' gender='Male'/>
        <QuoteCard name='Frozone'gender='Female'/>
        <MovieCard name='Nick Fury' gender='Male'/>
      </header>
    </div>
  );
}

export default App;
