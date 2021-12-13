import "./Welcome.css"

function Welcome(){
    return(
      <p>
          <h1 className="header">
              Welcome User!
          </h1>
          <h1 className="header">
              Do you Need an Account?
          </h1>
                <div className="arrow"></div>
                <div className="container">
                    <div className="pointer1"></div>
                    <div className="pointer2"></div>
                </div>
                <button className="SignUp" type="submit">Sign Up</button>
                <div className="box">
                <label>If you already have an account clike here</label>
                <button type="submit">Sign In</button>
                </div>
     </p>
    )
}
export default Welcome