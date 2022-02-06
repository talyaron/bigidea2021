import '../../styles/template/EditProfilePopUp.css'
import React from 'react';


const EditProfilePopUp = props => {
    return (
      <div className="popup-box">
        <div className="EditPopUpbox">
          <div className="Edit-close-icon" onClick={props.handleClose}></div>
          {props.content}
        </div>
      </div>
    );
  };
   
  export default EditProfilePopUp;