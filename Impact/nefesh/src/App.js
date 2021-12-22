import Button from './components/Buttons/button'
import Superadmin from './pages/Superadmin/Superadmin'
import Page from './pages/main/main'
import Login from './pages/login/login'
import Createev from './pages/create event/createev';
import Button from './components/Buttons/button';
import Page from './pages/main/main';
import Login from './pages/login/login';
import Createev from './pages/create event/createev';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Page/> */}
      {/* <Button/> */}
      {/* <Superadmin/> */}
      <Createev/>
      <Superadmin/>
      <Createev/>
    </div>
  );
}

export default App;