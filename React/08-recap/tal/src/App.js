import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Liam from './pages/Liam';
import Michael from './pages/Michael';

  function handleURLSubmit(ev) {
    ev.preventDefault();
    let url = ev.target.elements.link.value;
    const moviesRef = doc(db, 'movies', 'movie');
    setDoc((moviesRef), { url: url });
  }

function App() {
  return (
    <BrowserRouter>
    <ul>
      <li><Link to='/michael'>Michael</Link></li>
      <li><Link to='/liam'>Liam</Link></li>
    </ul>
      <Routes>
        <Route exact={true} path="/" element={<Liam />} />
        <Route path="/liam" element={<Liam />} />
        <Route path="/michael" element={<Michael />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
