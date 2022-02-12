import Envelope from '../../assets/Images/NewIcons/email.svg';
import Phone from '../../assets/Images/NewIcons/phone.svg';
import www from '../../assets/Images/NewIcons/www.svg';
import home from '../../assets/Images/NewIcons/home.svg';
import form from '../../assets/Images/NewIcons/form.svg';

import { useEffect, useState } from 'react';

function ContactUs(props) {
	import('../../styles/page/ContactUs.css');
	const [mailTo, setMailtoLink] = useState('');
	const [userIsOle, setUserIsOle] = useState();
	const [body, setBody] = useState('')
	useEffect(() => {
		let userIDTemp = props.uid;
		setUserIsOle(props.isOle);
		var email = 'Nefesh@nefesh.com';
		var subject = 'Request to be Organization Admin';
		var body_start = `${props.displayName} with User ID: ${userIDTemp} wants to be an organizational Admin because (input your reason here)`;
		setBody(body_start);
		setMailtoLink(`mailto:` + email + `?subject=` + subject + `&body=` + body_start);
	}, [mailTo, props]);

	function handleEmail() {
		window.location = `mailto:nbntlv@nbn.org.il?subject=Contact Support &body= Hi Nefesh B' Nefesh, my name is ${props.displayName} and I am contacting you with regards to (input reasoning here)`;
	}

	function handleOrganization() {
		window.location = `mailto:NBN.App.Management@gmail.com?subject=Request to Become An Organization &body=${body} `;
	}

	function openLink() {
		window.open('https://www.nbn.org.il/nbn-tlv-hub/');
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
				<p>Having opened in March 2017, the NBN TLV Hub is a multidimensional community hub with a spacious, creative and homey co-working & event space designed with innovation and collaboration in mind.</p>
				<p>
					The Hub bridges new Olim to the startup, career and community ecosystem of Tel Aviv, serving as a launching pad for their new lives in Israel. Career Advisors sit in the Hub to guide Olim as they navigate a new professional environment. The Hub hosts weekly social events to build community
					and business seminars and 1-1 professional consultations in accounting, banking, budgeting, legal aspects of setting up a business, marketing, online engagement and business coaching.
				</p>
			</div>
			<div className='head sp'>Contact us</div>
			<div className='line'> </div>

			<div className='buttonHolder'>
				<div className='button'>
					<img src={Phone} alt='phone'  id='phone' /> &nbsp; 072-336-9280
				</div>
				<div className='button' onClick={handleEmail}>
					<img src={Envelope} alt='Envelope' id='email' /> nbntlv@nbn.org.il
				</div>
				<div className='button' onClick={openLink}>
					<img src={www} alt ='button' id='www' />
					https://www.nbn.org.il/nbn-tlv-hub/
				</div>
				<div className='button'>
					<img src={home} alt='button' id='home' />
					76 Rothschild BLVD Tel Aviv, Israel
				</div>
			</div>

			<div className='head sp'>Request to be a Host</div>
			<div className='line'> </div>

			<div className='btns'>
				<div className='buttonOrgContact' onClick={handleOrganization}>
					<img src={form} id='form' alt="contact"/>
					Be An Organization
				</div>
			</div>
		</div>
	);
}
export default ContactUs;
