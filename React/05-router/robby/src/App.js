import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Home from "./views/pages/Home/Home";
import Blogs from "./views/pages/Blog/Blog";
import Contacts from './views/pages/Contact/Contact'
import LevelOne from "./views/levelOne/levelOne"
import LevelTwoA from "./views/levelOne/levelTwo/levelTwoA";
import LevelTwoB from "./views/levelOne/levelTwo/levelTwoB";
import LevelTwoC from "./views/levelOne/levelTwo/levelTwoC";
import LevelThreeAA from "./views/levelOne/levelTwo/levelThreeA/levelThreeAA";
import LevelThreeAB from "./views/levelOne/levelTwo/levelThreeA/levelThreeAB";
import LevelThreeAC from "./views/levelOne/levelTwo/levelThreeA/levelThreeAC";
import LevelFourAAA from "./views/levelOne/levelTwo/levelThreeA/levelFourAA/levelFourAAA";
import LevelFourAAB from "./views/levelOne/levelTwo/levelThreeA/levelFourAA/levelFourAAB";
import LevelFourAAC from "./views/levelOne/levelTwo/levelThreeA/levelFourAA/levelFourAAC";
import LevelFourABA from "./views/levelOne/levelTwo/levelThreeA/levelFourAB/levelFourABA";
import LevelFourABB from "./views/levelOne/levelTwo/levelThreeA/levelFourAB/levelFourABB";
import LevelFourABC from "./views/levelOne/levelTwo/levelThreeA/levelFourAB/levelFourABC";
import LevelFourACA from "./views/levelOne/levelTwo/levelThreeA/levelFourAC/levelFourACA";
import LevelFourACB from "./views/levelOne/levelTwo/levelThreeA/levelFourAC/levelFourACB";
import LevelFourACC from "./views/levelOne/levelTwo/levelThreeA/levelFourAC/levelFourACC";
import LevelThreeCA from "./views/levelOne/levelTwo/levelThreeC/levelThreeCA";
import LevelThreeCB from "./views/levelOne/levelTwo/levelThreeC/levelThreeCB";
import LevelThreeCC from "./views/levelOne/levelTwo/levelThreeC/levelThreeCC";
import LevelFourCAA from "./views/levelOne/levelTwo/levelThreeC/levelFourCA/levelFourCAA";
import LevelFourCAB from "./views/levelOne/levelTwo/levelThreeC/levelFourCA/levelFourCAB";
import LevelFourCBA from "./views/levelOne/levelTwo/levelThreeC/levelFourCB/levelFourCBA";
import LevelFourCBB from "./views/levelOne/levelTwo/levelThreeC/levelFourCB/levelFourCBB";
import LevelFourCCA from "./views/levelOne/levelTwo/levelThreeC/levelFourCB/levelFourCCA";
import LevelFourCCB from "./views/levelOne/levelTwo/levelThreeC/levelFourCB/levelFourCCB";




function App() {
  return (
    <Router>
        <div><Link to='/'>Start Over</Link></div>
     <Routes>
       <Route exact path ="/" element= {<LevelOne/>} />
       <Route path ="/blogs" element= {<Blogs/>} />
       <Route path ="/contacts" element= {<Contacts/>} /> 
       <Route path ="/contacts" element= {<Contacts/>} /> 
       <Route path="/levelOne" element ={<LevelOne/>} />
       <Route path="/levelTwoA" element ={<LevelTwoA/>} />
       <Route path="/levelTwoB" element ={<LevelTwoB/>} />
       <Route path="/levelTwoC" element ={<LevelTwoC/>} />
       <Route path="/levelThreeA/LevelThreeAA" element = {<LevelThreeAA/>} />
       <Route path= "LevelThreeAB" element = {<LevelThreeAB/>} />
       <Route path= "LevelThreeAC" element = {<LevelThreeAC/>} />
       <Route path= "/LevelFourAAA" element = {<LevelFourAAA/>} />
       <Route path= "/LevelFourAAB" element = {<LevelFourAAB/>} />
       <Route path= "/LevelFourAAC" element = {<LevelFourAAC/>} />
       <Route path= "/LevelFourABA" element = {<LevelFourABA/>} />
       <Route path= "/LevelFourABB" element = {<LevelFourABB/>} />
       <Route path= "/LevelFourABC" element = {<LevelFourABC/>} />
       <Route path= "/LevelFourACA" element = {<LevelFourACA/>} />
       <Route path= "/LevelFourACB" element = {<LevelFourACB/>} />
       <Route path= "/LevelFourACC" element = {<LevelFourACC/>} />
     
     </Routes>
    </Router>
  );
}

export default App;
