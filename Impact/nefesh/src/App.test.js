import { render, screen } from '@testing-library/react';
import App from './App';
import Userpage from "././CSSpages/user/User";
import Main from "././CSSpages/main/main";
import Log from '././CSSpages/login/login';
import superAd from "./CSSpages/superadmin/Superadmin";
import CreateEV from "./CSSpages/createevent/createev";

function app() {

  render(
    //<Userpage/>
    <Main/>
  )
}
export default app;
