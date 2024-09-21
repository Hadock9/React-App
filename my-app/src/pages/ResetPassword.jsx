import { Mail } from 'lucide-react'
import CustomForm from '../styles/CustomForm.module.css'
import styles from '../styles/RegistrationLogin.module.css'

export function ResetPassword() {
	return (
		<div className={styles.Container}>
			<div className={styles.RightBlock}></div>

			<div className={styles.LeftBlock}>
				<div className={styles.RegForm}>
					<div className={styles.RegFormLine}></div>
					<form action=''>
						<h1 className={styles.RegFormHeader}>Recover your account</h1>
						<div className={styles.RegFormBlock}>
							<label>Enter your email to recover your account</label>
						</div>
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
							<button className={CustomForm.CustomButtonSubmit}>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
