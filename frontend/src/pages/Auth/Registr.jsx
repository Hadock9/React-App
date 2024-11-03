import { Lock, LockOpen, Mail, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Terms } from '../../components/Disclaimer/Terms.jsx'
import {
	validateConditions,
	validateEmail,
	validateLastName,
	validateName,
	validatePassword,
	validateRePassword,
} from '../../js/FormValidation.js'
import styles from '../../styles/Auth/RegistrationLogin.module.css'
import CustomForm from '../../styles/CustomForm.module.css'
import rootstyles from '../../styles/root.module.css'

export function Registration() {
	const navigate = useNavigate()
	// Станові змінні для зберігання значень вводу форми
	const [Email, setEmail] = useState('')
	const [Password, setPassword] = useState('')
	const [RePassword, setRePassword] = useState('')
	const [First_Name, setFirst_Name] = useState('')
	const [Last_Name, setLast_Name] = useState('')
	const [isVisiblePassword, setisVisiblePassword] = useState(false)
	const [TypePassword, setTypePassword] = useState('password')
	const [Conditions, setConditions] = useState(false)
	const [FormValid, setFormValid] = useState(false) // Для визначення, чи форма готова до відправлення

	const [ReadTerms, setReadTerms] = useState(false)
	// Змінні стану, щоб відстежувати, чи ввід було сфокусовано
	const [EmailDirty, setEmailDirty] = useState(false)
	const [PasswordDirty, setPasswordDirty] = useState(false)
	const [RePasswordDirty, setRePasswordDirty] = useState(false)
	const [First_NameDirty, setFirst_NameDirty] = useState(false)
	const [Last_NameDirty, setLast_NameDirty] = useState(false)
	const [ConditionsDirty, setConditionsDirty] = useState(false)

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
	const [ConditionsError, setConditionsError] = useState(
		'Ви повинні погодитися з умовами.'
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
			case 'RePassword':
				setRePasswordDirty(true)
				break
			case 'First_Name':
				setFirst_NameDirty(true)
				break
			case 'Last_Name':
				setLast_NameDirty(true)
				break
			case 'Conditions':
				setConditionsDirty(true)
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
		setLast_NameError(validateLastName(e.target.value))
	}

	// Обробник зміни вводу для імені з валідацією
	const First_NameHandler = e => {
		setFirst_Name(e.target.value)
		setFirst_NameError(validateName(e.target.value))
	}
	const ChangeTypePassword = () => {
		if (!isVisiblePassword) {
			setisVisiblePassword(!isVisiblePassword)
			setTypePassword('text')
		} else {
			setisVisiblePassword(!isVisiblePassword)
			setTypePassword('password')
		}
	}

	// Хук ефекту для визначення дійсності форми на основі вводу та стану помилок
	useEffect(() => {
		if (
			EmailError ||
			PasswordError ||
			RePasswordError ||
			First_NameError ||
			Last_NameError ||
			ConditionsError
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
	])

	// Обробник відправлення форми
	const handleSubmit = async e => {
		e.preventDefault()
		if (FormValid) {
			const RegData = {
				Email: Email,
				Password: Password,
				First_Name: First_Name,
				Last_Name: Last_Name,
			}

			try {
				const response = await fetch(
					'http://localhost:4000/api/auth/registration',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(RegData),
					}
				)
				console.log(response.ok)

				if (response.ok) {
					console.log('Форма відправлена')
					navigate('/Login')
				} else {
					const errorData = await response.json()

					if (
						errorData.err.sqlMessage &&
						errorData.err.sqlMessage.includes('Duplicate entry')
					) {
						setEmailError('Цей email вже зареєстровано. Спробуйте інший.')
					} else {
						console.error('Помилка на сервері:', errorData)
					}
				}
			} catch (error) {}
		}
	}
	const handleReadTerms = () => {
		setReadTerms(true)
	}
	if (ReadTerms) {
		return <Terms setReadTerms={setReadTerms} />
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

						{/* Поле Повторний пароль */}
						<div className={styles.RegFormFullBlock}>
							{RePasswordDirty && RePasswordError && (
								<div className={styles.RegFormError}>{RePasswordError}</div>
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
							{ConditionsDirty && ConditionsError && (
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
										onBlur={blurHandler}
										onChange={ConditionsHandler}
										checked={Conditions}
										required
									/>
									<Link onClick={handleReadTerms} className={rootstyles.link}>
										<label htmlFor='conditions'>
											Я погоджуюсь з умовами реєстрації
										</label>
									</Link>
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
								disabled={!FormValid} // Вимкнути кнопку, якщо форма не дійснf
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
