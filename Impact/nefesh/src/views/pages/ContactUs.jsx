import "../../styles/page/ContactUs.css";
import { useEffect, useState} from "react";
import StickyBanner from '../components/StickyBanner'
import NavTopBar from "../components/NavTopBar";

import LogoNew from '../../assets/Images/LogoNew.svg';



function ContactUs(props) {
  const role = props.role;

  const [mailTo, setMailtoLink] = useState('');
  const [userIsOle, setUserIsOle] = useState();
  useEffect(() => {
    //let notName = await getDoc(doc(db, "users", props.uid));
    let userIDTemp = props.uid;
    // let userRole = props.userRole;
    setUserIsOle(props.isOle);
    var email = "Nefesh@nefesh.com";
    var subject = "Request to be Organization Admin";
    var body_start =  `${props.displayName} with User ID: ${userIDTemp} wants to be an organizational Admin because(input your reason here)`;
    setMailtoLink( `mailto:` + email + `?subject=` + subject + `&body=` + body_start);
  }, [mailTo, props]);

  return (
    <div>
      <NavTopBar titleDisplay={LogoNew}/>
      <div className="head">Contact us at:</div>
      <div className="box-1">
        <div className="phoneNum">Phone number: ###-###-####</div>
      </div>
      <div className="box-1">
        <a
          href="mailto:Nefesh@nefesh.com?subject=Contacting Creators!&body=Hi! I wanted to contact you to tell you that (type here)"
          className="email">
          Click here to send us an email!
        </a>
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
      <StickyBanner role={role} />
    </div>
  );
}
export default ContactUs;
