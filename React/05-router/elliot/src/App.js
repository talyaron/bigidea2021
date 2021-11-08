import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import Home from './views/pages/Home/Home';
import Blogs from './views/pages/Blogs/Blogs';
import Contact from './views/pages/Contact/Contact';


function App() {
  return (
    <Router>
      <u1>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </u1>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
