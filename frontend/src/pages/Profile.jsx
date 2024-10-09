import React, { useEffect, useState } from 'react'
import { useAuth } from '../components/AuthContext'
import { NavBar } from '../components/NavBar'
import style from '../styles/Profile.module.css'

export function Profile() {
	const { user, isRegUser, loading } = useAuth()
	const [UserProfile, setUserProfile] = useState(null)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		dob: '',
		gender: '',
		email: '',
		documentNumber: '',
		phone: '',
		country: '',
		password: '',
	})
	const [message, setMessage] = useState('')

	// Оновлюємо UserProfile, коли user змінюється
	useEffect(() => {
		if (user) {
			setUserProfile(user)
			setFormData({
				firstName: user.first_name,
				lastName: user.last_name,
				dob: user.birthDate,
				gender: user.gender,
				email: user.email,
				documentNumber: user.documentNumber,
				phone: user.phone,
				country: user.country,
				password: '',
			})
		}
	}, [user])

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSave = async e => {
		e.preventDefault()
		// Логіка для збереження змін, наприклад, відправка на сервер
		const updatedData = {
			first_name: formData.firstName,
			last_name: formData.lastName,
			birthDate: formData.dob,
			gender: formData.gender,
			email: formData.email,
			documentNumber: formData.documentNumber,
			phone: formData.phone,
			country: formData.country,
		}

		try {
			const response = await fetch('http://localhost:4000/api/updateProfile', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(updatedData),
			})

			if (response.ok) {
				const data = await response.json()
				console.log('Профіль успішно оновлено:', data)
				setMessage('Профіль успішно оновлено!')

				setUserProfile(data)
			} else {
				const errorData = await response.json()
				console.error('Помилка оновлення профілю:', errorData.message)
				setMessage('Помилка оновлення профілю.')
			}
		} catch (error) {
			console.error("Помилка з'єднання:", error)
			setMessage("Помилка з'єднання з сервером.")
		}
	}

	if (loading) {
		return <div>Loading...</div>
	}

	if (!isRegUser) {
		return <div>Ви не увійшли у систему.</div>
	}

	if (!UserProfile) {
		return <div>Завантаження даних профілю...</div>
	}

	return (
		<>
			<NavBar /> {/* Навігаційна панель */}
			<div className={style.ProfileBg}>
				{/* Фон профілю */}
				<div className={style.ProfileBlock}>
					{/* Основний блок профілю */}
					<div className={style.ProfileDivImg}>
						{/* Зображення профілю */}
						<div>{/* Зображення профілю */}</div>
					</div>
					{message && <div className={style.Message}>{message}</div>}
					<form className={style.form} onSubmit={handleSave}>
						{/* Форма редагування профілю */}
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockTextFirst}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>ID</label>
									<input
										className={style.CustomInput}
										type='text'
										value={UserProfile.id || ''}
										readOnly
									/>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>Ім'я</label>
									<input
										className={style.CustomInput}
										type='text'
										name='firstName'
										value={formData.firstName}
										onChange={handleChange}
										placeholder='Василь'
										required
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>Прізвище</label>
									<input
										className={style.CustomInput}
										type='text'
										name='lastName'
										value={formData.lastName}
										onChange={handleChange}
										placeholder='Фальовський'
										required
									/>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>Дата народження</label>
									<input
										className={style.CustomInput}
										type='date'
										name='dob'
										value={formData.dob}
										onChange={handleChange}
										placeholder='12.01.2004'
										required
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>Стать</label>
									<select
										className={style.CustomInput}
										name='gender'
										value={formData.gender}
										onChange={handleChange}
										required
									>
										<option value=''>Виберіть стать</option>
										<option value='Чоловіча'>Чоловіча</option>
										<option value='Жіноча'>Жіноча</option>
										<option value='Інша'>Інша</option>
									</select>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>Ел. Пошта</label>
									<input
										className={style.CustomInput}
										type='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										placeholder='Ron.bartonzzz@gmail.com'
										required
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>
										Номер основного документа
									</label>
									<input
										className={style.CustomInput}
										type='text'
										name='documentNumber'
										value={formData.documentNumber}
										onChange={handleChange}
										placeholder=' '
										required
									/>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>Номер телефону</label>
									<input
										className={style.CustomInput}
										type='tel'
										name='phone'
										value={formData.phone}
										onChange={handleChange}
										placeholder=' '
										required
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>Країна</label>
									<input
										className={style.CustomInput}
										type='text'
										name='country'
										value={formData.country}
										onChange={handleChange}
										placeholder='Україна'
										required
									/>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockTextFirst}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>
										Введіть пароль, щоб зберегти зміни
									</label>
									<input
										className={style.CustomInput}
										type='password'
										name='password'
										value={formData.password}
										onChange={handleChange}
										placeholder=''
										required
									/>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<button className={style.CustomButtonSubmit}>
								Зберегти зміни {/* Кнопка для збереження змін */}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Profile
