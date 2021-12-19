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
import ContactUs from "./views/components/ContactUs/ContactUs"
import MainPage from "./views/pages/MainPage/MainPage"

function App() {
    return (
        <BrowserRouter>
            <nav className="mainLinks">
                <Link to="/login" >Login  </Link>
                <Link to="/home">Home  </Link>
                <Link to="/hi">Hi  </Link>
                <Link to ="/contactUs">Contact Us  </Link>
                <Link to ="/mainPage">Main Page</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="hi" element={<Hi />} />
                <Route path="404" element={<Error />} />
                <Route path="401" element={<Unauthorised />} />
                <Route path="contactUs" element={<ContactUs/>} />
                <Route path ="mainPage" element ={<MainPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;