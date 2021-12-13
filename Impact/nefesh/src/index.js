import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./index.css"
import Login from "./pages/login/Login.js"
import Home from"./pages/home/Home.js"
import Error from "./pages/404/404.js"
import Unauthorised from "./pages/401/401.js"
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <nav>
        <Link to="/login">Login</Link> 
        <Link to="/home">Home</Link>
        <Link to="/blank">Blank</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="blank" element={<Blank />}/>
      <Route path="404" element={<Error />}/>
      <Route path="401" element={<Unauthorised />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);



function Blank (){
  return(<div>
    Hi
  </div>)
}