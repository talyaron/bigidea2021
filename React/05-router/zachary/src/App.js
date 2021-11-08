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
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  );
}

export default App;
