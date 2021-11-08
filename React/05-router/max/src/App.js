import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// pages
import Blogs from './views/pages/blogs/Blogs';
import Contact from './views/pages/contact/Contact';
import Home from './views/pages/home/Home';



function App() {
  return (
    <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog Articles</Link></li>
      <li><Link to="/contact">Contact Me</Link></li>
    </ul>    
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/blog' element={<Blogs />}/>
        <Route  path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
