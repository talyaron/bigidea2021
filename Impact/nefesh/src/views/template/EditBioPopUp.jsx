<<<<<<< HEAD:Impact/nefesh/src/views/template/EditBioPopUp.jsx
import '../../stylesheets/template/EditBioPopUp.css'
=======
import '../../styles/template/EditBioPopUp.css'
>>>>>>> Dev:Impact/nefesh/src/views/pages/ProfilePage/EditBioPopUp.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, onSnapshot, setDoc, updateDoc} from 'firebase/firestore';

const EditProfilePopUp = props => {
    return (
      <div className="popup-boxBio">
        <div className="EditPopUpboxBio">
          <span className="Edit-close-iconBio" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };
   
  export default EditProfilePopUp;