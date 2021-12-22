import "./Superadmin.css"

function Superadmin(){
    return(
        <div>
            <div className="container2">
                <div className="role">Current Role:xxx</div>
                <div className="username">@username</div>
            </div>
            <div className="Ref"> User Ref #</div>
            <div className="container">
                <button className="Buttons">Change Display Name</button>
                <button className="Buttons">Set Role Ole</button>
                <button className="Buttons">Set Role to Organizer</button>
                <button className="Buttons">Suspend User</button>
                <button className="Buttons">Ban User</button>
            </div>
            <div className="container3">
                <button className="Button2">Back</button>
                <button className="Button3">Save</button>
            </div>
        </div>
    )
}

export default Superadmin