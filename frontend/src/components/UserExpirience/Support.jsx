import React, { useEffect, useState } from 'react'
import BurgerMenu from '../../components/BurgerMenu'
import Footer from '../../components/UserExpirience/Footer'
import NavBar from '../../components/UserExpirience/NavBar'

import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { validateInput, validateTextArea } from '../../js/FormValidation'
import rootstyle from '../../styles/root.module.css'
import IsRegUser from '../../UI/IsRegUser'
import Mybutton from '../../UI/Mybutton'
import MyTextArea from '../../UI/TextArea'
import TextError from '../../UI/TextError'
const Support = () => {
	const { user, isRegUser } = useAuth()
	const navigate = useNavigate()

	const [ondisable, Setondisable] = useState(true)
	const [Text, setText] = useState(' ')
	const [TextDirty, setTextDirty] = useState(false)
	const [TextErrorS, setTextError] = useState('Дане поле не може бути пустим')

	const [Title, setTitle] = useState(' ')
	const [TitleDirty, setTitleDirty] = useState(false)
	const [TitleError, setTitleError] = useState('Дане поле не може бути пустим')

	const [Type, setType] = useState('bug')
	const handleText = e => {
		setText(e.target.value)
		setTextError(validateTextArea(e.target.value))
	}
	const handleTitle = e => {
		setTitle(e.target.value)
		setTitleError(validateInput(e.target.value))
	}
	useEffect(() => {
		if (!TextErrorS && !TitleError) {
			Setondisable(true)
		} else {
			Setondisable(false)
		}
	}, [Text, Title])

	const handleChange = e => {
		setType(e.target.value)
	}
	const handleSubmit = async e => {
		e.preventDefault()

		const SupportData = {
			user_id: user.id,
			content: Text,
			title: Title,
			type: Type,
		}

		const response = await fetch('http://localhost:4000/api/support/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(SupportData),
		})

		if (response.ok) {
			console.log('Комент вставлений успішно ')

			toast.success('Запит відправлено успішно')
			setInterval(() => {
				navigate(0)
			}, 1000)
		} else {
			const errorData = await response.json()
			console.log('Помилка:', error)

			toast.error('Запит не відправлено')
			setInterval(() => {
				navigate(0)
			}, 1000)
		}
	}
	return (
		<div className={rootstyle.wrapper}>
			<NavBar />

			<div className={rootstyle.Container}>
				<BurgerMenu />

				<main className={rootstyle.Main}>
					<div className='flex justify-center my-4'>
						<h1 className='text-2xl font-bold '>Технічна підтримка</h1>
					</div>

					<IsRegUser>
						Ви не зареєстровані. Писати у технічну підтримку можуть тільки
						зареєстровані користувачі.
					</IsRegUser>
					<div className='My comment my-3 flex'>
						<div className='w-[10%] flex justify-center   items-center'>
							<img
								src={isRegUser ? user.picture : '/img/User-Default.svg'}
								className='w-[40px] h-[40px] rounded-full'
								alt=''
							/>
						</div>
						<div className='w-[100%]'>
							<TextError TextDirty={TextDirty} TextError={TextErrorS} />
							<TextError TextDirty={TitleDirty} TextError={TitleError} />
							<form
								onSubmit={handleSubmit}
								className='flex flex-col justify-start'
							>
								<label htmlFor=''> Тема запиту </label>
								<div>
									<input
										value={Title}
										onBlur={setTitleDirty}
										onChange={handleTitle}
										type='text'
									/>
								</div>
								<label htmlFor=''> Тип запиту</label>
								<div>
									<select onChange={handleChange} name='type' id='type'>
										<option value='bug'>bug</option>
										<option value='feedback'>feedback</option>
										<option value='feature_request'>feature_request</option>
										<option value='information_request'>
											information_request
										</option>
									</select>
								</div>

								<label htmlFor=''> Текст</label>
								<MyTextArea
									TextError={TextError}
									id='textarea'
									onBlur={setTextDirty}
									value={Text}
									onChange={handleText}
								/>
								<Mybutton ondisable={ondisable & isRegUser}>Submit</Mybutton>
							</form>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default Support
