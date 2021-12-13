import './SignUp.css'

function SignUp(){
    return(
        <form>
            <h1 className="header">
                Create a New Account
            </h1>
            <div className="wrapper">
                <label>Username</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="text"></input>
                <label>Repeat Passowrd</label>
                <input type="text"></input>
                <button className="submit" type="submit">Create Account</button>
            </div>
        </form>
    )
}

export default SignUp