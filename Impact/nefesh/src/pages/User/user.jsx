import "./user.css";

function Userpage() {
return (
    <div>
    <button className="Butt"> Button </button>
    
    <form>
        <div className="grid">
        <input type="text" className="child" name="username" value={"Username"}></input>
        <input type="text" className="child" name="name" value={"name"}></input>
        <input type="text" className="child" name="bday" value={"Birth Date"}></input>
        <input type="text" className="child" name="sex" value={"Gender"}></input>
        <button className="Uset child"> User Settings </button>
        </div>
    </form>
       
    </div>
       )
}
export default Userpage