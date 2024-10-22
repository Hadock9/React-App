import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Logon() {
	const navigate = useNavigate()
	const { setIsRegUser, setUser } = useAuth()

	const responseSucess = async response => {
		const { credential } = response

		fetch('http://localhost:4000/api/auth/google-login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token: credential,
			}),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Login successful:', data)
				localStorage.setItem('token', data.token)
				console.log('Вхід успішний:', data.message)
				const decoded = jwtDecode(data.token)
				setIsRegUser(true)
				setUser(decoded)
				navigate('/Home')
				navigate(0)
			})
			.catch(error => {
				console.error('Error during login:', error)
			})
	}
	const responseFailure = () => {
		console.log('login is not successful')
	}

	return (
		<div className='App'>
			<GoogleLogin
				clientId='500804855419-pms6km4isevbtq88rpgbpp02tdjq26fm.apps.googleusercontent.com'
				onSuccess={responseSucess}
				onFailure={responseFailure}
			/>
		</div>
	)
}
