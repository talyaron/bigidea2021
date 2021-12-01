import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import EnterQuestions from './views/pages/EnterQuestion/EnterQuestion';
import { useState } from "react";
//Pages
import EnterQuestion from './views/pages/EnterQuestion/EnterQuestion';
import GuessQuestion from './views/pages/Guess/Guess';
import Login from './views/pages/Login/Login';

//Components
import LinkHeader from './views/components/LinkHeader/LinkHeader';

function App() {

  const [user, setUser]= useState(
    {name: "", image: ""}
  )

  return (
    <Router>
    <nav>
      <div className="App">
        <header className="App-header">
          <LinkHeader page='login'></LinkHeader>
        </header>
      </div>
    </nav>
    <Routes>
      <Route path="/EnterQ" element={<EnterQuestion />} />
      <Route path="/GuessQ" element={<GuessQuestion />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </Router>
  );
}



export default App;
