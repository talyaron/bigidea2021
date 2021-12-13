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
     </p>
    )
}
export default Welcome