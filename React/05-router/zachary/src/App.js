import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';



import Home from "./views/Home";
import Blogs from "./views/Blogs";
import Contact from "./views/Contact";
import Fortune1 from "./views/Fortune1";
import Fortune2 from "./views/Fortune2";
import Fortune3 from "./views/Fortune3";
import Fortune4 from "./views/Fortune4";

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
        <Route path="/Fortune1" element={<Fortune1/>}/>
        <Route path="/Fortune2" element={<Fortune2/>}/>
        <Route path="/Fortune3" element={<Fortune3/>}/>
        <Route path="/Fortune4" element={<Fortune4/>}/>

      </Routes>
    </Router>

  );
}

export default App;
