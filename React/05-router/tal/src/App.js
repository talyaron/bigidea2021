import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

//pages
import Home from './views/pages/Home/Home';
import Blogs from './views/pages/Blogs/Blogs';
import Contact from './views/pages/Contact/Contact';
import MarketingBlog from './views/pages/Blogs/MarketingBlog';
import TechBlog from './views/pages/Blogs/TechBlog';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>
            <Link to='/blogs'>Blogs</Link>
            <ul>
              <li><Link to='/blogs/tech'>Tech Blog</Link></li>
              <li><Link to='/blogs/marketing'>Marketing Blog</Link></li>
            </ul>
          </li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} >
          <Route path="marketing" element={<MarketingBlog />} />
          <Route path="tech" element={<TechBlog />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
