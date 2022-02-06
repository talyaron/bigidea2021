import "../../styles/page/ContactUs.css";
import Envelope from '../../assets/Images/NewIcons/email.svg'
import Phone from '../../assets/Images/NewIcons/phone.svg'

import { useEffect, useState} from "react";

function ContactUs(props) {
  const [mailTo, setMailtoLink] = useState('');
  const [userIsOle, setUserIsOle] = useState();
  useEffect(() => {
    console.log("users", props.uid, props.displayName, props.isOle);
    //let notName = await getDoc(doc(db, "users", props.uid));
    let userIDTemp = props.uid;
    // let userRole = props.userRole;
    setUserIsOle(props.isOle);
    var email = "Nefesh@nefesh.com";
    var subject = "Request to be Organization Admin";
    var body_start =  `${props.displayName} with User ID: ${userIDTemp} wants to be an organizational Admin because(input your reason here)`;
    setMailtoLink( `mailto:` + email + `?subject=` + subject + `&body=` + body_start);
    console.log(mailTo);
  }, [mailTo, props]);

  return (
    <div>
      <div className="head">Contact us at:</div>
      <div className="box-1">
        <div className="phoneNum">Phone number: ###-###-####</div>
        <img src = {Phone} className = "phoneNum" />
      </div>
      <div className="box-1">
        {/* <a
          href="mailto:Nefesh@nefesh.com?subject=Contacting Creators!&body=Hi! I wanted to contact you to tell you that (type here)"
          className="email">
          Click here to send us an email!
        </a> */}
      
      <img src= {Envelope} className= "emailMe"/>
      
      

      </div>
      {userIsOle? (
      <div className="apply">
        Apply for an organizational profile: &nbsp;
        <div className="apbutton">
          <div className="box-1">
            <a href={`${mailTo}`} target="_blank" rel="noreferrer">
              Click here to apply
            </a>
          </div>
        </div>
      </div>) : (null) }
      <div className="mission">
        <span className="mishead"> Our Mission </span>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>

      <div className = "organization">Be An Organization</div>
    </div>
  );
}
export default ContactUs;
