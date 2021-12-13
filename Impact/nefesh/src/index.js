import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


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
    </Routes>
  </BrowserRouter>,
  rootElement
);

function Home (){
  return (<div>
    Home
  </div>)
}
function Login(){
  return(<div>
    Login
  </div>)
}
function Blank (){
  return(<div>
    Hi
  </div>)
}