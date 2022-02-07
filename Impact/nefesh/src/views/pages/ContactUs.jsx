import '../../styles/page/ContactUs.css';
import Envelope from '../../assets/Images/NewIcons/email.svg';
import Phone from '../../assets/Images/NewIcons/phone.svg';

import { useEffect, useState } from 'react';

function ContactUs(props) {
	const [mailTo, setMailtoLink] = useState('');
	const [userIsOle, setUserIsOle] = useState();
	useEffect(() => {
		console.log('users', props.uid, props.displayName, props.isOle);
		//let notName = await getDoc(doc(db, "users", props.uid));
		let userIDTemp = props.uid;
		// let userRole = props.userRole;
		setUserIsOle(props.isOle);
		var email = 'Nefesh@nefesh.com';
		var subject = 'Request to be Organization Admin';
		var body_start = `${props.displayName} with User ID: ${userIDTemp} wants to be an organizational Admin because(input your reason here)`;
		setMailtoLink(`mailto:` + email + `?subject=` + subject + `&body=` + body_start);
		console.log(mailTo);
	}, [mailTo, props]);

	function handleEmail() {
		window.location = 'mailto:Nefesh@nefesh.com?subject=Contacting Creators!';
	}

	return (
		<div className='back-color'>
			<div className='head'>About us</div>
			<div className='line'> </div>

			{userIsOle ? (
				<div className='apply'>
					Apply for an organizational profile: &nbsp;
					<div className='apbutton'>
						<div className='box-1'>
							<a href={`${mailTo}`} target='_blank' rel='noreferrer'>
								Click here to apply
							</a>
						</div>
					</div>
				</div>
			) : null}
			<div className='mission'>
				<p>The NBN TLV Hub is a multidimensional community hub with a spacious, creative and homey co-working & event space designed with innovation and collaboration in mind.</p>
				<p>
					Having opened in March 2017, the NBN TLV Hub is a multidimensional community hub with a spacious, creative and homey co-working & event space designed with innovation and collaboration in mind. The Hub bridges new Olim to the startup, career and community ecosystem of Tel Aviv, serving as
					a launching pad for their new lives in Israel. Career Advisors sit in the Hub to guide Olim as they navigate a new professional environment. The Hub hosts weekly social events to build community and business seminars and 1-1 professional consultations in accounting, banking, budgeting,
					legal aspects of setting up a business, marketing, online engagement and business coaching.
				</p>
			</div>
			<div className='head sp'>Contact us</div>
			<div className='line'> </div>

			<div className='position'>
				<div className='btn'>
					<img src={Phone} alt='phone'/> &nbsp; 072-336-9280
				</div>
				<div className='btn'  onClick={handleEmail}>
					<img src={Envelope} alt='Envelope' /> Email Us
				</div>
			</div>
			<div className='btn'>
				<img src={Phone} alt='phone'/>https://www.nbn.org.il/nbn-tlv-hub/
			</div>
      <div className='btn'>
      <div className='location'>76 Rothschild BLVD Tel Aviv, Israel</div>
      </div>
			<div className='head sp'>Request to be a Host</div>
			<div className='line'> </div>
			<div className='btns'>
				<div className='btn'>Ask to be A Host</div>{' '}
			</div>
			
		</div>
	);
}
export default ContactUs;
