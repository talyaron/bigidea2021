import AdminPage from '../AdminPage/AdminPage';
import React, { useState } from 'react';

function ProfilePage(){
    
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {setIsOpen(!isOpen);}

    return(
        <div>
            <h4>userNameHere</h4>
            <input type="button" value="User Settings" onClick={togglePopup} className="adminButton"/>
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