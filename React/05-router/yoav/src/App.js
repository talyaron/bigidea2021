import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Home from './views/pages/Home/Home';
import Odd from './views/pages/Odd/Odd';
import Even from './views/pages/Even/Even';
import Result1 from './views/pages/Result1/Result1';
import Result2 from './views/pages/Result2/Result2';
import Result3 from './views/pages/Result3/Result3';
import Result4 from './views/pages/Result4/Result4';
import Result5 from './views/pages/Result5/Result5';
import Result6 from './views/pages/Result6/Result6';
import Result7 from './views/pages/Result7/Result7';
import Result8 from './views/pages/Result8/Result8';

function App() {
  return (
    <Router>
      <ul> 
        <li><Link to = '/'>Start Over</Link></li>

      </ul>

      <Routes>
        <Route exact path = "/" element = { <Home />} />
        <Route path = "/odd" element = {<Odd />}/>
        <Route path = "/even" element = {<Even />} />
        <Route path = "/R1" element = {<Result1 />} />
        <Route path = "/R2" element = {<Result2 />} />
        <Route path = "/R3" element = {<Result3 />} />
        <Route path = "/R4" element = {<Result4 />} />
        <Route path = "/R5" element = {<Result5 />} />
        <Route path = "/R6" element = {<Result6 />} />
        <Route path = "/R7" element = {<Result7 />} />
        <Route path = "/R8" element = {<Result8 />} />
      </Routes>

      
    
    </Router>
  );
}

export default App;
