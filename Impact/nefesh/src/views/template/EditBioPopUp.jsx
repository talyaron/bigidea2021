import '../../styles/template/EditBioPopUp.css'
import React from 'react';


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