import './app.css';
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
import { checkRole } from "./functions/general.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "./functions/firebase/config"


let role = "ole"
let permissionedRole
const auth = getAuth();
// lfrg
function App() {

    const [userState, setUserState] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user logged in')
                const uid = user.uid;

                //get user from db
                getDoc(doc(db, "users", uid)).then(userDB => {
                    if (userDB.exists()) {
                        console.log("user exists")
                        setUserState({userName:userDB.data().displayName})
                    role=userDB.data().role
                    }
                    else {
                        //if user exist in db get the user from DB and get the role 
                        console.log("user does not exist")
                        setDoc(doc(db, "users", uid), {
                            age:"null",
                            displayName: user.displayName,
                            email: user.email,
                            location:"null",
                            organization:"null",
                            role: "ole",
                            sex:"null",
                            userID:uid,
                            userIcon: user.photoURL,
                            userPref:["null"]
                        })
                    }
                })
            } else {
                // user logged out
                console.log('User loged out')

            }
        })

    }, [])
    return (
        <BrowserRouter>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/home">Home</Link>
                <Link to="/hi">Hi</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home role={role} />} />
                <Route path="login" element={<Login />} />
                <Route path="hi" element={<Hi />} />
                <Route path="404" element={<Error />} />
                <Route path="401" element={<Unauthorised />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;