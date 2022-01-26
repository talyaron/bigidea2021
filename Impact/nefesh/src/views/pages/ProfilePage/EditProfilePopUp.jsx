import './EditProfilePopUp.css'
import React, { useEffect, useState } from 'react';
import { db } from '../../../functions/firebase/config';
import { doc, getDoc, onSnapshot, setDoc, updateDoc} from 'firebase/firestore';

const EditProfilePopUp = props => {
    return (
      <div className="popup-box">
        <div className="EditPopUpbox">
          <span  onClick={props.handleClose}>
             <div className="Edit-close-icon">X</div>
              </span>
          {props.content}
        </div>
      </div>
    );
  };
   
  export default EditProfilePopUp;