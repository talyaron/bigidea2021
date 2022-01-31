import '../../styles/template/EditBioPopUp.css'
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