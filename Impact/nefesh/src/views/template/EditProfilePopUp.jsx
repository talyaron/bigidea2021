import '../../styles/template/EditProfilePopUp.css'
import React from 'react';


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