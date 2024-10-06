import { Lock, Mail, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	validateConditions,
	validateEmail,
	validateName,
	validatePassword,
	validateRePassword,
} from '../components/FormValidation.js'
import CustomForm from '../styles/CustomForm.module.css'
import styles from '../styles/RegistrationLogin.module.css'

export function Registration() {
	// Станові змінні для зберігання значень вводу форми
	const [Email, setEmail] = useState('')
	const [Password, setPassword] = useState('')
	const [RePassword, setRePassword] = useState('')
	const [First_Name, setFirst_Name] = useState('')
	const [Last_Name, setLast_Name] = useState('')
	const [Conditions, setConditions] = useState('') // Для зберігання згоди на умови
	const [FormValid, setFormValid] = useState(false) // Для визначення, чи форма готова до відправлення

	// Змінні стану, щоб відстежувати, чи ввід було сфокусовано
	const [EmailDirty, setEmailDirty] = useState(false)
	const [PasswordDirty, setPasswordDirty] = useState(false)
	const [RePasswordDirty, setRePasswordDirty] = useState(false)
	const [First_NameDirty, setFirst_NameDirty] = useState(false)
	const [Last_NameDirty, setLast_NameDirty] = useState(false)

	// Повідомлення про помилки для валідації
	const [EmailError, setEmailError] = useState('Email не може бути пустим')
	const [PasswordError, setPasswordError] = useState(
		'Password не може бути пустим'
	)
	const [RePasswordError, setRePasswordError] = useState(
		'RePassword не може бути пустим'
	)
	const [First_NameError, setFirst_NameError] = useState(
		'First Name не може бути пустим'
	)
	const [Last_NameError, setLast_NameError] = useState(
		'Last Name не може бути пустим'
	)
	const [ConditionsError, setConditionsError] = useState('')

	// Обробник, щоб позначити ввід як "доторкнутий", коли він втрачає фокус
	const blurHandler = e => {
		switch (e.target.name) {
			case 'Email':
				setEmailDirty(true)
				break
			case 'Password':
				setPasswordDirty(true)
				break
			case 'RePassword':
				setRePasswordDirty(true)
				break
			case 'First_Name':
				setFirst_NameDirty(true)
				break
			case 'Last_Name':
				setLast_NameDirty(true)
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

	// Обробник зміни вводу для повторного пароля з валідацією
	const RePasswordHandler = e => {
		setRePassword(e.target.value)
		setRePasswordError(validateRePassword(e.target.value, Password)) //
	}

	// Обробник зміни для чекбокса умов
	const ConditionsHandler = e => {
		const isChecked = e.target.checked
		setConditions(isChecked)
		setConditionsError(validateConditions(isChecked))
	}

	// Обробник зміни вводу для прізвища з валідацією
	const Last_NameHandler = e => {
		setLast_Name(e.target.value)
		setLast_NameError(validateName(e.target.value))
	}

	// Обробник зміни вводу для імені з валідацією
	const First_NameHandler = e => {
		setFirst_Name(e.target.value)
		setFirst_NameError(validateName(e.target.value))
	}

	// Хук ефекту для визначення дійсності форми на основі вводу та стану помилок
	useEffect(() => {
		if (
			EmailError ||
			PasswordError ||
			RePasswordError ||
			First_NameError ||
			Last_NameError ||
			ConditionsError ||
			!Email ||
			!Password ||
			!RePassword ||
			!First_Name ||
			!Last_Name ||
			!Conditions
		) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [
		EmailError,
		PasswordError,
		RePasswordError,
		First_NameError,
		Last_NameError,
		ConditionsError,
		Email,
		Password,
		RePassword,
		First_Name,
		Last_Name,
		Conditions,
	])

	// Обробник відправлення форми
	const handleSubmit = e => {
		e.preventDefault() // Запобігти стандартному поведінці відправлення форми
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
								<Lock />
								<input
									className={CustomForm.CustomInput}
									type='password'
									name='Password'
									value={Password}
									onBlur={blurHandler}
									onChange={PasswordHandler}
									placeholder='Пароль'
									required
								/>
							</div>
						</div>

						{/* Поле Повторний пароль */}
						<div className={styles.RegFormFullBlock}>
							{RePasswordDirty && RePasswordError && (
								<div className={styles.RegFormError}>{RePasswordError}</div>
							)}
							<div className={styles.RegFormBlock}>
								<Lock />
								<input
									className={CustomForm.CustomInput}
									type='password'
									name='RePassword'
									value={RePassword}
									onBlur={blurHandler}
									onChange={RePasswordHandler}
									placeholder='Повторіть пароль'
									required
								/>
							</div>
						</div>

						{/* Поля Ім'я та Прізвище */}
						<div className={styles.RegFormFullBlock}>
							{First_NameDirty && First_NameError && (
								<div className={styles.RegFormError}>{First_NameError}</div>
							)}
							{Last_NameDirty && Last_NameError && (
								<div className={styles.RegFormError}>{Last_NameError}</div>
							)}
							<div className={styles.RegFormNamesBlock}>
								<div
									className={`${styles.RegFormBlock} ${styles.RegFormBlockNames}`}
								>
									<UserRound />
									<input
										className={CustomForm.CustomInput}
										type='text'
										name='First_Name'
										value={First_Name}
										onBlur={blurHandler}
										onChange={First_NameHandler}
										placeholder='Ім’я'
										required
									/>
								</div>
								<div
									className={`${styles.RegFormBlock} ${styles.RegFormBlockNames}`}
								>
									<UserRound />
									<input
										className={CustomForm.CustomInput}
										type='text'
										name='Last_Name'
										value={Last_Name}
										onBlur={blurHandler}
										onChange={Last_NameHandler}
										placeholder='Прізвище'
										required
									/>
								</div>
							</div>
						</div>

						{/* Умови та положення */}
						<div className={styles.RegFormFullBlock}>
							{ConditionsError && (
								<div className={styles.RegFormError}>{ConditionsError}</div>
							)}
							<div
								className={`${styles.RegFormBlock} ${styles.RegFormCheckbox}`}
							>
								<div>
									<input
										type='checkbox'
										id='conditions'
										name='Conditions'
										onChange={ConditionsHandler}
										required
									/>
									<label htmlFor='conditions'>Я погоджуюсь з умовами</label>
								</div>
							</div>
						</div>

						{/* Підписка на новини */}
						<div className={`${styles.RegFormBlock} ${styles.RegFormCheckbox}`}>
							<div>
								<input type='checkbox' id='newsletter' name='newsletter' />
								<label htmlFor='newsletter'>Я хочу отримувати новини</label>
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

					{/* Посилання на вхід */}
					<div className={styles.AfterForm}>
						<Link to={'/Login'}>Вже маєте обліковий запис?</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
