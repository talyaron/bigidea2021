import AdminPage from '../AdminPage/AdminPage';
import React, { useEffect, useState } from 'react';
import { db } from '../../functions/firebase/config';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

var isAdmin = true;
const userDocRef = doc(db, 'users', 'pvfu0JLfWT8omzrVMPqY');


function ProfilePage(){
    const [displayName, setDisplayName] = useState("displayName");
	const [userID, setUserID] = useState("ID");
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {setIsOpen(!isOpen);}

    useEffect(()=>{
        //on snapshot displayName
        const userData = onSnapshot(userDocRef, (userDB) => {
            console.log("Current data: ", userDB.data().displayName);
            let displayNameTemp = userDB.data().displayName
            setDisplayName(displayNameTemp);

        });        
        
        //pull userId of selected user and set for superAdmin page
        const tempUserID = getDoc(userDocRef, (userIdDB) => {
            console.log(userIdDB.data().userID);
            
        });
        setUserID(tempUserID);

    },[])

    return(
        <div>
            <h4>{displayName}</h4>
            {isAdmin ? <input type="button" value="User Settings" onClick={togglePopup} className="adminButton"/> : null}
            {isOpen && <AdminPage
            content={<>
                <b>{displayName}</b>
                <p>{userID}</p>
            </>}
            handleClose={togglePopup}
            />}
        </div>
    )
}

export default ProfilePage;
