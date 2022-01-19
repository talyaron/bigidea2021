import "./MenuPopup.css";

const button = styled.button`
  background-color: blue;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  `;

function MenuPopup (ev){ 

return (
<div className="container">

    
    <div className="Logout">
        <button onClick={() => this.handleClick()}>
        Logout
        </button>
    </div>
    <div className="Profile">
        <button onClick={() => this.handleClick()}>
            Profile
        </button>
    </div>
    <div className="Admin Page">
        <button onClick={() => this.handleClick()}>
            Admin Page
        </button>
    </div>
</div>
)
}

export default MenuPopup;