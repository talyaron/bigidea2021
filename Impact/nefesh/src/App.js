import "./styles/global/App.css";
import "./views/template/AdminPagePopUp";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from './views/pages/Login.js';
import Error from './views/pages/404.js';
import Unauthorised from './views/pages/401.js';
import ProfilePage from './views/pages/ProfilePage';
import ContactUs from './views/pages/ContactUs';
import ArticleCreation from './views/pages/ArticleCreation';
import MainPage from './views/pages/MainPage';
import { checkRole } from './scripts/general.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './scripts/firebase/config';
//pages
import AdminPage from './views/pages/AdminPage';
import StickyBanner from './views/components/StickyBanner'
import NavTopBar from "./views/components/NavTopBar";
import Event from './views/pages/Event';

//hi
let role; //if changed to superAdmin it updates correctly but shows red warnings, also needs to be changed manually
let permissionedRole;
const auth = getAuth();
let userID = "";
let loggedIn,
isAdmin = "false";

function App() {
  const [userState, setUserState] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOle, setIsOle] = useState(true);
  const [isUserID, setIsUserID] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user logged in");
        const uid = user.uid;
        setIsUserID(uid);
        userID = uid;
        //get user from db
        getDoc(doc(db, "users", uid)).then((userDB) => {
          if (userDB.exists()) {
            console.log("user exists");
			role = userDB.data().role;
            setUserState({
              userOrg: userDB.data().organization,
              displayName: userDB.data().displayName
            });
            
            if (userDB.data().disabled){
              console.log("user is banned");
              return;
            }

            console.log(role);
            if (role === "ole") {
				setIsOle(true);
				setIsAdmin(false);
            } else {
				setIsOle(false);
        setIsAdmin(false);
        if(role === "superAdmin"){
          setIsOle(false);
          setIsAdmin(true);
        }
            }

            const uid = userDB.data().userID;
            userID = uid;
          } else {
            //if user exist in db get the user from DB and get the role
            console.log("user does not exist");
            setDoc(doc(db, "users", uid), {
              age: "null",
              displayName: user.displayName,
              email: user.email,
              location: "null",
              organization: "null",
              role: "ole",
              sex: "null",
              userID: uid,
              userIcon: user.photoURL,
              userPref: ["null"],
              disabled : false,
              bio: "null"
            });
          }
        });
        loggedIn = true;
      } else {
        // user logged out
        console.log("User loged out");
        loggedIn = false;
      }
    });
  }, []);

	return (
		<div>
			{loggedIn ? (
	    <NavTopBar titleDisplay="NBM Tel Aviv" />
			) : (null) }
		<div className='container_AppMain'>
		
			{loggedIn ? (
				<div className='container_App'>
          
					<Routes>
						<Route path='/' element={<MainPage role={role}/>} />
						<Route path='404' element={<Error />} />
						<Route path='401' element={<Unauthorised />} />
						<Route path='MainPage' element={<MainPage role={role} />} />
						<Route path='ContactUs' element={<ContactUs  uid = {isUserID} displayName={userState.displayName}/>}/>
						<Route path='event/:eventID' element={<Event />} />
						<Route path='ArticleCreation' element={<ArticleCreation userID={userID} userOrg={userState.userOrg} />} />
						<Route path='ProfilePage' element={<ProfilePage uid={userID} />} />
						<Route path='AdminPage' element={<AdminPage />}/>
            
					</Routes>
					
				</div>
			) : (
				<div className='container_App'>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='login' element={<Login />} />
					</Routes>
				</div>
			)}
		</div>
		<div className="footer"></div>
		{
			loggedIn ? (<StickyBanner role={role} />) : (null) 
		}
		</div>
	);
}

export default App;
