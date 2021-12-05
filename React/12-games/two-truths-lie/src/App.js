import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import './App.css';
import EnterQuestions from './views/pages/EnterQuestion/EnterQuestion';
import { useState } from "react";
//Pages
import EnterQuestion from './views/pages/EnterQuestion/EnterQuestion';
import Game from './views/pages/Game/Game';
import Login from './views/pages/Login/Login';

//Components
import LinkHeader from './views/components/LinkHeader/LinkHeader';

function App() {

  const [user, setUser] = useState(
    { name: "", image: "" }
  )

  return (
    <Router>
      <nav>
        <div className="App">
          <header className="App-header">
            {/* <LinkHeader page='login'></LinkHeader> */}
            <ul>
              <li><Link to='/Login'>Login</Link></li>
              <li><Link to="EnterQ">Enter Answers</Link></li>
              <li><Link to="GuessQ">The Game</Link></li>
            </ul>
          </header>
        </div>
      </nav>
      <Routes>
        <Route path="/Login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/EnterQ" element={<EnterQuestion />} />
        <Route path="/GuessQ" element={<Game />} />

      </Routes>
    </Router>
  );
}



export default App;

