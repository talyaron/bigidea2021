import './login.css';

function Login() {
    return (
      <div className="login">
          <header className='header'>Login</header>
       
          <form className='form' onSubmit='handleSubmit(event)'>
            <label className='label' for="text">Username</label>
            <input className='input' type="text" name="text" id="text" />
            <label className='label' for="text">Password</label>
            <input className='input' type="text" name="text" id="text" />
            <br />
            <button classname= 'button'>Submit</button>
            <br />
            <button classname= 'button'>Sign in with Google</button>
          </form>
       
      </div>
    );
}

export default Login;