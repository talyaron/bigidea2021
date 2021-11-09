import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

//pages
import Cootie from './LiamSzymon/Cootie'
import Cootie2 from './LiamSzymon/Cootie2'
import Cootie3 from './LiamSzymon/Cootie3'
import F1 from "./LiamSzymon/F1"
import F2 from "./LiamSzymon/F2"
import F3 from "./LiamSzymon/F3"
import F4 from "./LiamSzymon/F4"
import Final1 from "./LiamSzymon/Final1";
import Final2 from "./LiamSzymon/Final2";
import Final3 from "./LiamSzymon/Final3";
import Final4 from "./LiamSzymon/Final4";
//import Home from './components/Home';
//import Blogs from './components/Blogs';
//import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* <ul>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/blogs'>Blogs</Link>
        </li>
        <li>
        <Link to='/contact'>Contacts</Link>
        </li>
      </ul> */}
      <Routes>
        <Route exact path="/" element={<Cootie />} />
        <Route path="/blogs" element={<Cootie2 />} />
        <Route path="/contact" element={<Cootie3 />} />
        <Route path="/F1" element={<F1 />} />
        <Route path="/F2" element={<F2 />} />
        <Route path="/F3" element={<F3 />} />
        <Route path="/F4" element={<F4 />} />
        <Route path="/Final1" element={<Final1 />} />
        <Route path="/Final2" element={<Final2 />} />
        <Route path="/Final3" element={<Final3 />} />
        <Route path="/Final4" element={<Final4 />} />
      </Routes>
    </Router>
  );
}

export default App;
