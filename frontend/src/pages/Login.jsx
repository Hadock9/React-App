import { Lock, LockOpen, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	validateEmail,
	validatePassword,
} from '../components/FormValidation.js'
import Logon from '../components/loginGoogle.js'
import CustomForm from '../styles/CustomForm.module.css'
import styles from '../styles/RegistrationLogin.module.css'

export function Login() {
	// Станові змінні для зберігання значень вводу форми
	const [Email, setEmail] = useState('')
	const [Password, setPassword] = useState('')
	const [isVisiblePassword, setisVisiblePassword] = useState(false)
	const [TypePassword, setTypePassword] = useState('password')
	const [FormValid, setFormValid] = useState(false)

	// Змінні стану, щоб відстежувати, чи ввід було сфокусовано
	const [EmailDirty, setEmailDirty] = useState(false)
	const [PasswordDirty, setPasswordDirty] = useState(false)

	// Повідомлення про помилки для валідації
	const [EmailError, setEmailError] = useState('Email не може бути пустим')
	const [PasswordError, setPasswordError] = useState(
		'Password не може бути пустим'
	)

	// Обробник, щоб позначити ввід як "доторкнутий", коли він втрачає фокус
	const blurHandler = e => {
		switch (e.target.name) {
			case 'Email':
				setEmailDirty(true)
				break
			case 'Password':
				setPasswordDirty(true)
				break
			default:
				break
		}
	}

	// Обробник зміни вводу для Email з валідацією
	const EmailHandler = e => {
		setEmail(e.target.value)
		setEmailError(validateEmail(e.target.value))
	}

	// Обробник зміни вводу для пароля з валідацією
	const PasswordHandler = e => {
		setPassword(e.target.value)
		setPasswordError(validatePassword(e.target.value))
	}

	// Обробник зміни типу паролю для видимості
	const ChangeTypePassword = e => {
		setisVisiblePassword(!isVisiblePassword) // Перемикає видимість паролю
		setTypePassword(isVisiblePassword ? 'password' : 'text') // Змінює тип інпуту
	}

	// Хук ефекту для визначення дійсності форми на основі вводу та стану помилок
	useEffect(() => {
		setFormValid(!(EmailError || PasswordError)) // Визначає, чи форма є дійсною
	}, [EmailError, PasswordError])

	// Обробник відправлення форми
	const handleSubmit = e => {
		e.preventDefault() // Запобігає стандартній поведінці форми
		if (FormValid) {
			// Обробити реєстрацію тут
			console.log('Форма відправлена') // Повідомлення для успішної відправки
		}
	}

	return (
		<div className={styles.Container}>
			<div className={styles.RightBlock}></div>

			<div className={styles.LeftBlock}>
				<div className={styles.RegForm}>
					<div className={styles.RegFormLine}></div>
					<form onSubmit={handleSubmit} noValidate>
						<h1 className={styles.RegFormHeader}>Форма реєстрації</h1>

						{/* Поле Email */}
						<div className={styles.RegFormFullBlock}>
							{EmailDirty && EmailError && (
								<div className={styles.RegFormError}>{EmailError}</div>
							)}
							<div className={styles.RegFormBlock}>
								<Mail />
								<input
									className={CustomForm.CustomInput}
									type='email'
									name='Email'
									value={Email}
									placeholder='Email'
									onBlur={blurHandler}
									onChange={EmailHandler}
									required
								/>
							</div>
						</div>

						{/* Поле Пароль */}
						<div className={styles.RegFormFullBlock}>
							{PasswordDirty && PasswordError && (
								<div className={styles.RegFormError}>{PasswordError}</div>
							)}
							<div className={styles.RegFormBlock}>
								<div
									onClick={ChangeTypePassword}
									className={styles.RegFormBlockPassword}
								>
									{isVisiblePassword ? <LockOpen /> : <Lock />}
								</div>
								<input
									className={CustomForm.CustomInput}
									type={TypePassword}
									name='Password'
									value={Password}
									onBlur={blurHandler}
									onChange={PasswordHandler}
									placeholder='Пароль'
									required
								/>
							</div>
						</div>

						{/* Кнопка відправлення */}
						<div className={`${styles.RegFormBlock} ${styles.RegFormButton}`}>
							<button
								type='submit'
								disabled={!FormValid} // Вимкнути кнопку, якщо форма не дійсна
								className={styles.CustomButtonSubmit}
							>
								Зареєструватися
							</button>
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
