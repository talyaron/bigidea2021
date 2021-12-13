import AdminPage from '../AdminPage/AdminPage';
import React, { useState } from 'react';

var isAdmin = false

function ProfilePage(){
    
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    return(
        <div>
            <h4>userNameHere</h4>
            {isAdmin ? <input type="button" value="User Settings" onClick={togglePopup} className="adminButton"/> : null}
            {isOpen && <AdminPage
            content={<>
                <b>Username</b>
                <p>Random Text</p>
            </>}
            handleClose={togglePopup}
            />}
        </div>
    )
}

export default ProfilePage;