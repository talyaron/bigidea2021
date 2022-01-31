import '../../stylesheets/page/ContactUs.css'
import { db } from '../../scripts/firebase/config';
import { collection, Firestore } from '@firebase/firestore';
import { doc, getDoc, getDocs, updateDoc, where } from 'firebase/firestore';
import { useEffect } from 'react';
function ContactUs (props){
    let mailto_link;
    useEffect(async ()=>{
      let notName = await getDoc(doc(db, "users", props.uid, props.displayName));
      let userIDTemp = props.uid;
      var email = "Nefesh@nefesh.com"
      var subject = "Request to be Organization Admin"
      var body_start= `user ${notName} with User ID: ${userIDTemp} wants to be an organizational Admin because(input your reason here)`
      mailto_link = `mailto:`+ email + `?subject=`+subject+`&body=`+body_start;
      



    },[])
    function handleEmail(){
        window.open(mailto_link);
    }
      
      
    return(
        <div>
            <div className='head'>
                Contact us at:
            </div>
            <div className='box-1'>
                     
                <div className= "phoneNum">
                    Phone number: ###-###-####
                </div> 
            </div>
            <div className='box-1'>
                <a href="mailto:Nefesh@nefesh.com?subject=Contacting Creators!&body=Hi! I wanted to contact you to tell you that (type here)"className="email">Click here to email us</a>
            </div>
            <div className='apply'>
                Apply for an organizational profile: &nbsp;
                <div className='apbutton'>
                <button onClick = {handleEmail} className="email">Click here to apply</button>
            </div>
            </div>
            <div className='mission'>
                 <span className='mishead'> Our Mission </span>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>

    )
}
export default ContactUs;