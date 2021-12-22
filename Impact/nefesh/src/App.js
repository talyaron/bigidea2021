import Superadmin from './pages/Superadmin/Superadmin'
import Page from './pages/main/main'
import Login from './pages/login/login'
import Button from './components/Buttons/button';
import Createev from './pages/create event/createev';
import Userpage from './pages/User/user';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Page/> */}
      {/* <Button/> */}
      {/* <Superadmin/> */}
      {/* <Createev/> */}
      <Userpage/>
    </div>
  );
}

export default App;