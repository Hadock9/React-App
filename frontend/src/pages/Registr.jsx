import { Lock, Mail, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import CustomForm from '../styles/CustomForm.module.css'
import styles from '../styles/RegistrationLogin.module.css'

export function Registration() {
	return (
		<div className={styles.Container}>
			<div className={styles.RightBlock}></div>

			<div className={styles.LeftBlock}>
				<div className={styles.RegForm}>
					<div className={styles.RegFormLine}></div>
					<form action=''>
						<h1 className={styles.RegFormHeader}>Registration Form</h1>

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
							<Lock />
							<input
								className={CustomForm.CustomInput}
								type='Password'
								name='Password'
								placeholder='Re-type password'
							/>
						</div>

						<div className={styles.RegFormBlockNames}>
							<div className={styles.RegFormBlock}>
								<UserRound />
								<input
									className={CustomForm.CustomInput}
									type='First_Name'
									name='First_Name'
									placeholder='First Name'
								/>
							</div>
							<span className={styles.MarginNames}></span>
							<div className={styles.RegFormBlock}>
								<UserRound />
								<input
									className={CustomForm.CustomInput}
									type='Last_Name'
									name='Last_Name'
									placeholder='Last Name'
								/>
							</div>
						</div>

						<div className={styles.RegFormBlock}>
							<div>
								<input type='radio' id='User' name='Male' value='Male' />
								<label for='User'>Male</label>
							</div>
							<span className={styles.MarginNames}></span>
							<div>
								<input type='radio' id='User' name='Female' value='Female' />
								<label for='User'>Female</label>
							</div>
						</div>

						<div className={styles.RegFormBlock}>
							<div>
								<input type='checkbox' id='conditions' name='conditions' />
								<label for='User'>I agree with terms and conditions</label>
							</div>
						</div>
						<div className={styles.RegFormBlock}>
							<div>
								<input type='checkbox' id='conditions' name='conditions' />
								<label for='User'>I want to receive the newsletter</label>
							</div>
						</div>

						<div className={styles.RegFormBlock}>
							<button className={CustomForm.CustomButtonSubmit}>
								Register
							</button>
						</div>
					</form>
					<div className={styles.AfterForm}>
						<Link to={'/Login'}> Already have an account? </Link>
					</div>
				</div>
			</div>
		</div>
	)
}
