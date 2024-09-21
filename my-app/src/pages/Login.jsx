import { Lock, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logon from '../components/loginGoogle.js'
import CustomForm from '../styles/CustomForm.module.css'
import styles from '../styles/RegistrationLogin.module.css'

export function Login() {
	return (
		<div className={styles.Container}>
			<div className={styles.RightBlock}></div>

			<div className={styles.LeftBlock}>
				<div className={styles.RegForm}>
					<div className={styles.RegFormLine}></div>
					<form action=''>
						<h1 className={styles.RegFormHeader}>Login in to your account</h1>

						<div className={styles.RegFormBlock}>
							<Mail />
							<input
								className={CustomForm.CustomInput}
								type='Email'
								name='Email'
								placeholder='Email'
							/>
						</div>
						<div className={styles.RegFormBlock}>
							<Lock />
							<input
								className={CustomForm.CustomInput}
								type='Password'
								name='Password'
								placeholder='Password'
							/>
						</div>

						<div className={styles.RegFormBlock}>
							<button className={CustomForm.CustomButtonSubmit}>Log In</button>
						</div>
					</form>

					<div className={styles.AfterForm}>
						<Link to={'/Registration'}>
							Don't have an account yet? Register
						</Link>
					</div>
					<div className={styles.AfterForm}>
						<Link to={'/ResetPassword'}>I Forgot My Password</Link>
					</div>
					<div className={styles.AfterForm}>
						<Logon />
					</div>
				</div>
			</div>
		</div>
	)
}
