import '../../styles/page/ContactUs.css'
function ContactUs (){
    function redirect(){ 

      var email = "xyz@something.com"
      var mailto_link = 'mailto:' + email
      let testID;
      
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
                <a href="mailto:Nefesh@nefesh.com?subject=Organization Admin Request&body= hehe "  className="email">Click here to apply</a>
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