import { GoogleLogin } from '@react-oauth/google'
import { useState } from 'react'

export default function Logon() {
	const [showLogin, setShowLogin] = useState(false)
	// const [showLogout, setShowLogout] = useState(false);

	const responseSucess = () => {
		console.log('login is  sucesss')
		setShowLogin(true)
		// setShowLogout(true);
	}

	const responseFailure = () => {
		console.log('login is not sucesss')
	}

	return (
		<div className='App'>
			{!showLogin && (
				<GoogleLogin
					clientId='500804855419-pms6km4isevbtq88rpgbpp02tdjq26fm.apps.googleusercontent.com'
					buttonText='Login'
					onSuccess={responseSucess}
					onFailure={responseFailure}
				/>
			)}
		</div>
	)
}
