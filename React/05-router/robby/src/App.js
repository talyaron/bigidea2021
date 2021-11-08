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
import LevelThreeBA from "./views/levelOne/levelTwo/levelThreeB/levelThreeBA";
import LevelThreeBB from "./views/levelOne/levelTwo/levelThreeB/levelThreeBB";
import LevelThreeBC from "./views/levelOne/levelTwo/levelThreeB/levelThreeBC";
import LevelFourBAA from "./views/levelOne/levelTwo/levelThreeB/levelFourBA/levelFourBAA";
import LevelFourBAB from "./views/levelOne/levelTwo/levelThreeB/levelFourBA/levelFourBAB";
import LevelFourBAC from "./views/levelOne/levelTwo/levelThreeB/levelFourBB/levelFourBBC";
import LevelFourBBA from "./views/levelOne/levelTwo/levelThreeB/levelFourBB/levelFourBBA";
import LevelFourBBB from "./views/levelOne/levelTwo/levelThreeB/levelFourBB/levelFourBBB";
import LevelFourBBC from "./views/levelOne/levelTwo/levelThreeB/levelFourBB/levelFourBBC";
import LevelFourBCA from "./views/levelOne/levelTwo/levelThreeB/levelFourBC/levelFourBCA";
import LevelFourBCB from "./views/levelOne/levelTwo/levelThreeB/levelFourBC/levelFourBCB";
import LevelFourBCC from "./views/levelOne/levelTwo/levelThreeB/levelFourBC/levelFourBCC";
import LevelThreeCA from "./views/levelOne/levelTwo/levelThreeC/levelThreeCA";
import LevelThreeCB from "./views/levelOne/levelTwo/levelThreeC/levelThreeCB";
import LevelThreeCC from "./views/levelOne/levelTwo/levelThreeC/levelThreeCC";
import LevelFourCAA from "./views/levelOne/levelTwo/levelThreeC/levelFourCA/levelFourCAA";
import LevelFourCAB from "./views/levelOne/levelTwo/levelThreeC/levelFourCA/levelFourCAB";
import LevelFourCBA from "./views/levelOne/levelTwo/levelThreeC/levelFourCB/levelFourCBA";
import LevelFourCBB from "./views/levelOne/levelTwo/levelThreeC/levelFourCB/levelFourCBB";





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
       <Route path ="LevelThreeBA/" element = {<LevelThreeBA/>} />
       <Route path ="LevelThreeBB/" element = {<LevelThreeBB/>} />
       <Route path ="LevelThreeBC/" element = {<LevelThreeBC/>} />
       <Route path= "/LevelFourBAA" element = {<LevelFourBAA/>} />
       <Route path= "/LevelFourBAB" element = {<LevelFourBAB/>} />
       <Route path= "/LevelFourBAC" element = {<LevelFourBAC/>} />
       <Route path= "/LevelFourBBA" element = {<LevelFourBBA/>} />
       <Route path= "/LevelFourBBB" element = {<LevelFourBBB/>} />
       <Route path= "/LevelFourBBC" element = {<LevelFourBBC/>} />
       <Route path= "/LevelFourBCA" element = {<LevelFourBCA/>} />
       <Route path= "/LevelFourBCB" element = {<LevelFourBCB/>} />
       <Route path= "/LevelFourBCC" element = {<LevelFourBCC/>} />
       <Route path ="LevelThreeCA/" element = {<LevelThreeCA/>} />
       <Route path ="LevelThreeCB/" element = {<LevelThreeCB/>} />
       <Route path ="LevelThreeCC/" element = {<LevelThreeCC/>} />
       <Route path= "/LevelFourCAA" element = {<LevelFourCAA/>} />
       <Route path= "/LevelFourCAB" element = {<LevelFourCAB/>} />
       <Route path= "/LevelFourCBA" element = {<LevelFourCBA/>} />
       <Route path= "/LevelFourCBB" element = {<LevelFourCBB/>} />


     
     </Routes>
    </Router>
  );
}

export default App;
