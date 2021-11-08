import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FortThree from './pages/FortThree/FortThree';
import FortFour from './pages/FortFour/FortFour';

const SubCatcherTwo = () => {
    return <div>
        <Router>
            <u1>
                <li><Link to="/fortThree">3</Link></li>
                <li><Link to="/fortFour">4</Link></li>
            </u1>
            <Routes>
                <Route path="/fortThree" element={<FortThree />} />
                <Route path="/fortFour" element={<FortFour />} />
            </Routes>
        </Router>
    </div>;
};
  
export default SubCatcherTwo;