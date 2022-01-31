import '../../styles/template/EditProfilePopUp.css'
import React, { useEffect, useState } from 'react';
import { db } from '../../scripts/firebase/config';
import { doc, getDoc, onSnapshot, setDoc, updateDoc} from 'firebase/firestore';

const EditProfilePopUp = props => {
    return (
      <div className="popup-box">
        <div className="EditPopUpbox">
          <span className="Edit-close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };
   
  export default EditProfilePopUp;