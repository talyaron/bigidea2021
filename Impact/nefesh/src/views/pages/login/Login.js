import { db } from "../../../functions/firebase/config"
import React from "react"
import { authentication } from "../../../functions/firebase/config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function Login() {

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
      <input placeholder="Email Address"></input>
      <input type="password" placeholder="Password"></input>
      <input type="submit"></input>
      <button onClick={SignIn}>Sign In with google</button>
    </form>
  </div>)
}

export default Login;