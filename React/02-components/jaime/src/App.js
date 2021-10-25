
import './App.css';

//components
import FrozoneCard from './components/FrozoneCard/FrozoneCard';
import QuoteCard from './components/QuoteCard/QuoteCard';
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FrozoneCard />
        <QuoteCard />
        <MovieCard />
      </header>
    </div>
  );
}

export default App;
