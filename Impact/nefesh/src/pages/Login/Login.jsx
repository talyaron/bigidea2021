import './Login.css';

function Page() {
    return (
      <div className="login">
          <header>Login</header>
       
            <form onSubmit='handleSubmit(event)'>
                <label for="text">Username</label>
                <input type="text" name="text" id="text" />
                <label for="text">Password</label>
                <input type="text" name="text" id="text" />
                <input type="submit" name="submit" id="submit" />
            </form>
       
      </div>
    );
}

export default Page;