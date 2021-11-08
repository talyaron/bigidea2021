import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

//pages
import Home from './views/pages/Home/Home';
import Blogs from './views/pages/Blogs/Blogs';
import Contact from './views/pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
