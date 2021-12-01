import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';

//Pages
import EnterQuestion from './views/pages/EnterQuestion/EnterQuestion';
import GuessQuestion from './views/pages/Guess/Guess';
import Login from './views/pages/Login/Login';

//Components
import LinkHeader from './components/LinkHeader/LinkHeader';

function App() {
  return (
    <Router>
    <nav>
      <div className="App">
        <header className="App-header">
          <LinkHeader page="login"></LinkHeader>
        </header>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/EnterQ" element={<EnterQuestion />} />
      <Route path="/GuessQ" element={<GuessQuestion />} />
    </Routes>
  </Router>
  );
}

export default App;
