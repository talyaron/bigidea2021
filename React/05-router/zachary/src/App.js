import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';



import Home from "./views/Home";
import Blogs from "./views/Blogs";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Blogs">Blogs</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>

  );
}

export default App;
