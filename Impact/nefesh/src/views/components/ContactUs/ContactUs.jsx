import './ContactUs.css';
function ContactUs (){
    return(
        <div>
      <div>You can contact us at: </div>
      <div className="contactWrapper">
      <div className= "phoneNum">
           Phone number: ###-###-####
           </div>
        <div className= "or">OR</div>
        <div className= "email">Email:email@gmail.com</div>
        </div>
        </div>

    )
}
export default ContactUs;