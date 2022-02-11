import React, { useEffect } from 'react';
import { authentication } from '../../scripts/firebase/config';
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import LogoNew from '../../assets/Images/LogoNew.svg';
import GoogleLogo from '../../assets/Images/Google.svg';
import LoginArt from '../../assets/Images/signin_img.svg';

const auth = getAuth();

function Login() {
	import('../../styles/page/Login.css');
	const navigate = useNavigate();

	useEffect(()=>{
		if (auth.currentUser) {
		navigate('/mainpage'); //After successful login, user will be redirected to home.html
	}
	},[auth.currentUser])
	
	const SignIn = (ev) => {
		ev.preventDefault();
		const provider = new GoogleAuthProvider();
		signInWithRedirect(authentication, provider);
		getRedirectResult(authentication)
			.then((result) => {
				// The signed-in user info.
			
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<div className='loginPage'>
				<div className='centerImg_Login'>
					<div>
						<img id='logo_LoginPage' src={LogoNew} alt="Nefish B' Nefish" />
					</div>
				</div>
				<form className='googleLoginForm'>
					<button onClick={SignIn} id='googleLogin' className='shadow'>
						<img id='googleLogo' src={GoogleLogo} alt='google' />
						<h4 id='googleText'> Sign In with Google</h4>
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
