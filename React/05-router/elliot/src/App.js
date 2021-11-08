
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import CootieCatcher from './views/pages/CootieCatcher/CootieCatcher' 
import SubOne from './views/pages/SubCatcherOne/SubCatcherOne'
import SubTwo from './views/pages/SubCatcherTwo/SubCatcherTwo'
import Fort1 from './views/pages/FortOne/FortOne'
import Fort2 from './views/pages/FortTwo/FortTwo'
import Fort3 from './views/pages/FortThree/FortThree'
import Fort4 from './views/pages/FortFour/FortFour'


function App() {
  return (
    <Router>

      <Routes>
        <Route exact path='/' element={<CootieCatcher />} />
        <Route path='/subOne' element={<SubOne />} />
        <Route path='/subTwo' element={<SubTwo />} />
        <Route path='/fort1' element={<Fort1 />} />
        <Route path='/fort2' element={<Fort2 />} />
        <Route path='/fort3' element={<Fort3 />} />
        <Route path='/fort4' element={<Fort4 />} />
      </Routes>
    </Router>
  );
}

export default App;
