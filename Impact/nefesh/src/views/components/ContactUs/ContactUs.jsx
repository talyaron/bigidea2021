import './ContactUs.css'
function ContactUs (){
    function redirect(){ 

      var email = "xyz@something.com"
      var mailto_link = 'mailto:' + email
      
}
    return(
        <div>
      <div>You can contact us at: </div>
      <div className="contactWrapper">
      <div className= "phoneNum">
           Phone number: ###-###-####
           </div>
        <div className= "or">OR</div>
        <a href="mailto:Nefesh@nefesh.com?subject=Contacting Creators!&body=Hi! I wanted to contact you to tell you that (type here)"className="email">Click here to email us</a>
        </div>
        </div>

    )
}
export default ContactUs;