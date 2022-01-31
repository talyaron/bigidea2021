import { db } from '../../scripts/firebase/config';
import React from 'react';
import { authentication } from '../../scripts/firebase/config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import '../../stylesheets/page/Login.css';
import NefishLogo from '../../assets/Images/Nefish_B\'Nefish_Logo.png';
import GoogleLogo from '../../assets/Images/Google.png';
import LoginArt from '../../assets/Images/signin_img.svg';

function Login() {
	const SignIn = (ev) => {
		ev.preventDefault();
		const provider = new GoogleAuthProvider();
		signInWithPopup(authentication, provider)
			.then((re) => {
				console.log(re);
				console.log(re.user.displayName);
				console.log(re.user.email);
				console.log(re.user.photoURL);
				let userEmail = re.user.email;
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<div className='loginPage'>
				<div className='centerImg_Login'>
					<div>
						<img id='logo_LoginPage' src={NefishLogo} alt="Nefish B' Nefish" />
					</div>
					
				</div>
				<form className='googleLoginForm'>
					<button onClick={SignIn} id='googleLogin' className='shadow'>
						<img id='googleLogo' src={GoogleLogo} alt='google' />
						<h4 id='googleText'> Sign In with google</h4>
					</button>
				</form>
				<h6 id='bigIdeaTag'>Developed by: Big Idea</h6>
				<div className='artContainer_Login'>
					<img id='art_login' src={LoginArt} alt='art' />
				</div>
			</div>
		</div>
	);
}

export default Login;
