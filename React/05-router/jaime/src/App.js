import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Views/Pages/Home/Home";
import Blogs from "./Views/Pages/Blogs/Blogs";
import Contact from "./Views/Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
