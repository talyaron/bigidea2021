import "./user.css";

function Userpage() {
return (
    <div>
    <button className="Butt"> Button </button>
    
    <form>
        <div classname="grid-container">
            <div classname="gridcol">
                <div classname="gridrow">
                    <div className="proimg"> </div>
                    <button onclick="">Edit Profile</button>
                </div>
                <div classname="gridrow">
                    <p>Prefrences</p>
                </div>
                <div classname="gridrow">
                    <p>Bio</p>
                    <button onclick="">Edit Bio</button>
                </div>
                <div classname="gridrow">
                    <p>Published articals</p>
                </div>
            </div>
        
        </div>
    </form>
       
    </div>
       )
}
export default Userpage