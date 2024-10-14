import { jwtDecode } from 'jwt-decode'
import { UserRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { NotAuthorized } from '../components/NotAuthorized'
import { useAuth } from '../context/AuthContext'
import { formatDate } from '../js/TimeValidation'
import style from '../styles/Profile.module.css'

export function Profile() {
	const navigate = useNavigate()
 
	const {setIsRegUser, setUser, user, isRegUser } = useAuth()
	const [UserProfile, setUserProfile] = useState(null)
	const [formData, setFormData] = useState({
		id: '',
		firstName: '',
		lastName: '',
		date_of_birth: '',
		gender: '',
		email: '',
		documentNumber: '',
		phone: '',
		country: '',
		password: '',
		pictureSrc: '',
	})
	 

	// Оновлюємо UserProfile, коли user змінюється
	useEffect(() => {
		if (user) {
			setUserProfile(user)
			setFormData({
				id: user.id,
				firstName: user.first_name,
				lastName: user.last_name,
				date_of_birth: formatDate(user.date_of_birth),
				gender: user.gender,
				email: user.email,
				created_at: user.created_at,
				phone: user.phone_number,
				country: user.country,
				pictureSrc: user.picture,
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
		 
		const updatedData = {
			id :formData.id,
			first_name: formData.firstName,
			last_name: formData.lastName,
			date_of_birth: formData.date_of_birth,
			gender: formData.gender,
			phone: formData.phone,
			country: formData.country,
			password:formData.password,
		}

		 
			fetch('http://localhost:4000/api/auth/updateProfile', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(updatedData),
			})
			.then(response => response.json())
			.then(data => {
				if (data.error) {
					console.log('Error:', data.error); 
					alert(data.error);
					return;  
			}
				console.log('Login successful:', data)
				localStorage.setItem('token', data.token)
				console.log('Оновлення даних пройшло успішно:', data.message)
				const decoded = jwtDecode(data.token)
				setIsRegUser(true)
				setUser(decoded)
				navigate(0);
			})
			.catch(error => {
				console.error('Error during login:', error)
				 
			})
			 
		 
	}

	if (!isRegUser) {
		return <NotAuthorized />
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
					<div className='mt-[-60px] mb-8 h-[96px] w-[96px] flex justify-center items-center bg-white rounded-[50%]'>
						{/* Зображення профілю */}
						{formData.pictureSrc ? (
							<img
								className='max-w-full h-auto rounded-full'
								src={formData.pictureSrc}
								alt=''
							/>
						) : (
							<UserRound width={46} height={46} />
						)}

						<div>{/* Зображення профілю */}</div>
					</div>
					 
					<form className={style.form} onSubmit={handleSave}>
						{/* Форма редагування профілю */}
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockTextFirst}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>ID</label>
									<input
										className={style.CustomInput}
										type='text'
										value={formData.id}
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
										placeholder=' '
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
										placeholder=' '
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
										name='date_of_birth'
										value={formData.date_of_birth}
										onChange={handleChange}
										placeholder=' '
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
										placeholder=''
										readOnly
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}>Дата реєстрації</label>
									<input
										className={style.CustomInput}
										type='text'
										name='created_at'
										value={formatDate(formData.created_at)}
										onChange={handleChange}
										readOnly
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
										placeholder=''
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
