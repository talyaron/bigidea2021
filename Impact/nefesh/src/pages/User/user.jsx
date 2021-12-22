import "./user.css";
import Capture from './Capture.png';
function Userpage() {
return (
    <div>
    <button className="Butt"> Button </button>
    
    <form>
        <div className="input">
        <img src={Capture}></img>
        <input type="text" name="username" value={"Username"}></input>
        <input type="text" name="name" value={"name"}></input>
        <input type="text" name="bday" value={"Birth Date"}></input>
        <input type="text" name="sex" value={"Gender"}></input>
        <button className="Uset"> User Settings </button>
        </div>
    </form>
       
    </div>
       )
}
export default Userpage