import { db } from "../../../functions/firebase/config"
import React from "react"
import { authentication } from "../../../functions/firebase/config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './Login.css'
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

  return (
  <div className="loginPage">
    <h1 className="header_Login">
      Login to see content
    </h1>
    <form className="googleLoginForm">
      <button onClick={SignIn} id="googleLogin">Sign In with google</button>
    </form>
  </div>)
}

export default Login;