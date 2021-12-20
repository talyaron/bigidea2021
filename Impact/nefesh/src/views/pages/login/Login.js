import { db } from "../../../functions/firebase/config"
import React from "react"
import { authentication } from "../../../functions/firebase/config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState , useEffect } from 'react';
import { addDoc } from "@firebase/firestore";

function Login() {

  const [disableInput, setDisableInput] = useState(false);
  const [visibleSignUp, setVisibleSignUp] = useState('none');
  const usernameList = []; 
  //Replaces using database of usernames 
  //as a reference since it doesn't exist yet

  const SignIn = (ev) => {
    ev.preventDefault()
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re)
        console.log(re.user.displayName)
        console.log(re.user.email)
        console.log(re.user.photoURL)
        let userEmail = re.user.email
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function SignUp(ev){
    alert("activates");
    setDisableInput(true);
    setVisibleSignUp('block');
  }

  function enterAccountDetails(ev){
    console.log(ev);//To see structure of ev
    let userResult = usernameQualifies(ev.username.value);
    let userPreference = ev.preferences.value;
    if(userResult === 1){
      alert("Username cannot be empty.");
    } else if (userResult === 2){
      alert("Username is already taken, please choose another.");
    } else {
      if(userPreference === null){
        alert("User must choose a preference.")
      } else {
        //addDoc for info... Yoav takes care of this
        alert("User account is successfully made.")
      }
    }
  }

  function usernameQualifies(username){
    if (username === ""){
      return 1;
    } else if(usernameList.exists(username)){ //Needs to be syced to the database
      return 2;
    } else {
      return 3;
    }
  }



 


















































  //yoav's attempt at writing his function

  /*
  1. Idk where they are, but access the user's preferences and add them to a list / create a variable for them
  2. Create a new database document for that user (using doc/setDoc)
  3. Add all the preferences into that document (also using doc/setDoc, but this time multiple times)

  --> const eventsRef = collection(db, 'events')
  --> const {username}Ref = (eventsRef, {username})
  --> doc({username}Ref, *input preferences here with field names*)
  */
















  return (<div>
    <h1>
      login
    </h1>
    <form className="Login">
      <input placeholder="Email Address" disabled={disableInput}></input>
      <input type="password" placeholder="Password" disabled={disableInput}></input>
      <input type="submit" disabled={disableInput}></input>
      <button onClick={SignIn} disabled={disableInput}>Sign In with google</button>
      <button onClick={SignUp} disabled={disableInput}>Sign Up for New Account</button>
    </form>

    <div className="RegisterAccount">
      <form className="AccountData" onSubmit={enterAccountDetails}>
        <input type = "text" placeholder = "Enter a username" id = "username">Username, make into a text box</input>
        <select placeholder = "Choose a preference" id = "preferences">
          <option value="A"></option>
          <option value="B"></option>
          <option value="C"></option>
          <option value="D"></option>
        </select>
        <input type = "" placeholder = "" id = "location">Location, optional, make a geolocation</input>
        <input type = "" placeholder = "" id = "portrait">Profile pic, optional, make an input link or if possible a fancy file drag-n-drop</input>
        <input type="submit">Submit when done</input>
      </form>
    </div>
  </div>)
}

export default Login;