import { UserRound, UserRoundX } from 'lucide-react'
import { NavBar } from '../components/NavBar'
import { useRegUser } from '../components/RegistrationContext'
import style from '../styles/Profile.module.css'
export function Profile() {
	const { isRegUser, setisRegUser } = useRegUser()

	return (
		<>
			<NavBar /> {/* Навігаційна панель */}
			<div className={style.ProfileBg}>
				{/* Фон профілю */}
				<div className={style.ProfileBlock}>
					{/* Основний блок профілю */}
					<div className={style.ProfileDivImg}>
						{/* Блок зображення профілю */}
						<div>
							<div className={style.Profile}>
								{isRegUser ? <UserRound /> : <UserRoundX />}
							</div>
							{/* Зображення профілю */}
						</div>
					</div>
					<form className={style.form} action=''>
						{/* Форма редагування профілю */}
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockTextFirst}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> ID </label>
									<input
										className={style.CustomInput}
										type='text'
										value='139453138' // ID користувача
										placeholder='139453138'
									/>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> Ім'я </label>
									<input
										className={style.CustomInput}
										type='text'
										placeholder='Василь' // Підказка для введення імені
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> Прізвище </label>
									<input
										className={style.CustomInput}
										type='text'
										placeholder='Фальовський' // Підказка для введення прізвища
									/>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> Дата народження</label>
									<input
										className={style.CustomInput}
										type='text'
										placeholder='12.01.2004' // Підказка для введення дати народження
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> Стать </label>
									<input
										className={style.CustomInput}
										type='text'
										placeholder='Чоловіча' // Підказка для введення статі
									/>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> Ел. Пошта </label>
									<input
										className={style.CustomInput}
										type='text'
										placeholder='Ron.bartonzzz@gmail.com' // Підказка для введення електронної пошти
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
										placeholder=' ' // Підказка для введення номера документа
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
										type='text'
										placeholder=' ' // Підказка для введення номера телефону
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> Країна </label>
									<input
										className={style.CustomInput}
										type='text'
										placeholder='Україна' // Підказка для введення країни
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
										type='password' // Поле для введення пароля
										placeholder=''
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
