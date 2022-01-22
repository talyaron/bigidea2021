import { db } from '../../../functions/firebase/config';
import React from 'react';
import { authentication } from '../../../functions/firebase/config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './Login.css';
import NefishLogo from "../../components/Images/Nefish_B'Nefish_Logo.png";
import GoogleLogo from '../../components/Images/Google.png';
import LoginArt from '../../components/Images/signin_img.svg';

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
				<img id='logo_LoginPage' src={NefishLogo} alt="Nefish B' Nefish" />
				<form className='googleLoginForm'>
					<button onClick={SignIn} id='googleLogin' className='shadow'>
						<img id='googleLogo' src={GoogleLogo} alt='google' />
						<h4 id='googleText'> Sign In with google</h4>
					</button>
				</form>
				<div className='artContainer_Login'>
					<img id='art_login' src={LoginArt} alt='art' />
				</div>
			</div>
		</div>
	);
}

export default Login;
