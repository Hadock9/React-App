import ProfileImg from '../img/profile.jpg'
import style from '../styles/Profile.module.css'

export function Profile() {
	return (
		<>
			<div className={style.ProfileBg}>
				<div className={style.ProfileBlock}>
					<div className={style.ProfileDivImg}>
						<div>
							<img className={style.ProfileImg} src={ProfileImg} alt='' />
						</div>
					</div>

					<form className={style.form} action=''>
						<div className={style.ProfileBlockInfo}>
							<div className={style.ProfileBlockTextFirst}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> ID </label>
									<input
										className={style.CustomInput}
										type='text'
										value='139453138'
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
										placeholder='Василь'
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> Прізвище </label>
									<input
										className={style.CustomInput}
										type='text'
										placeholder='Фальовський'
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
										placeholder='12.01.2004'
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> Стать </label>
									<input
										className={style.CustomInput}
										type='text'
										placeholder='Чоловіча'
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
										placeholder='Ron.bartonzzz@gmail.com'
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
										placeholder=' '
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
										placeholder=' '
									/>
								</div>
							</div>
							<div className={style.ProfileBlockText}>
								<div className={style.LabelInput}>
									<label className={style.CustomLabel}> Країна </label>
									<input
										className={style.CustomInput}
										type='text'
										placeholder='Україна'
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
										placeholder=''
									/>
								</div>
							</div>
						</div>
						<div className={style.ProfileBlockInfo}>
							<button className={style.CustomButtonSubmit}>
								Зберегти зміни
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
