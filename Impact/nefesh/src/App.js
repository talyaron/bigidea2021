import SignUp from "./pages/SignUp/SignUp"
// import Pages from "./pages/login/Login"
import Welcome from "./pages/Welcome/Welcome"
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from "./pages/login/Login.js"
import Home from "./pages/home/Home.js"
import Error from "./pages/404/404.js"
import Unauthorised from "./pages/401/401.js"
import Hi from "./pages/hi/Hi.js"
import {checkRole} from "./functions/general.js"

let role="ole"
let permissionedRole

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <Pages/> */}
      <Welcome/>
      <BrowserRouter>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/home">Home</Link>
                <Link to="/hi">Hi</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home role={role}/>} />
                <Route path="login" element={<Login />} />
                <Route path="hi" element={<Hi />} />
                <Route path="404" element={<Error />} />
                <Route path="401" element={<Unauthorised />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
