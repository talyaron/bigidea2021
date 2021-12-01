import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';

//Pages
import EnterQuestion from './views/pages/EnterQuestion/EnterQuestion';
import GuessQuestion from './views/pages/Guess/Guess';
import Login from './views/pages/Guess/Guess';

function App() {
  return (
    <Router>
    <nav>
      <div className="App">
        <header className="App-header">
          <Link to ="/">Click to Begin!</Link>
        </header>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/EnterQ" element={<EnterQuestion />}>
        <Route path="GuessQ" element={<GuessQuestion />} />
      </Route>
      <Route path="/GuessQ" element={<GuessQuestion />}>
        <Route path="EnterQ" element={<EnterQuestion />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
