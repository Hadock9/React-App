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
import Myinput from '../../UI/Myinput'
import Mylabel from '../../UI/Mylabel'
import MyTextArea from '../../UI/TextArea'
import TextError from '../../UI/TextError'

const Support = () => {
	const { user, isRegUser } = useAuth()
	const navigate = useNavigate()

	const [ondisable, Setondisable] = useState(true)
	const [Text, setText] = useState('')
	const [TextDirty, setTextDirty] = useState(false)
	const [TextErrorS, setTextError] = useState('Дане поле не може бути пустим')

	const [Title, setTitle] = useState('')
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
			toast.success('Запит відправлено успішно')
			setInterval(() => {
				navigate(0)
			}, 1000)
		} else {
			const errorData = await response.json()
			console.error('Помилка:', errorData)

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
					<div className='flex justify-center my-8'>
						<h1 className='text-3xl font-bold text-gray-800'>
							Технічна підтримка
						</h1>
					</div>

					<IsRegUser>
						<p className='text-center text-red-500 mb-4'>
							Ви не зареєстровані. Писати у технічну підтримку можуть тільки
							зареєстровані користувачі.
						</p>
					</IsRegUser>

					<div className='bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded-lg'>
						<h2 className='text-lg font-semibold'>
							Як використовувати цю форму
						</h2>
						<p className='mt-2 text-sm'>
							Використовуйте цю форму для зв'язку з нашою технічною підтримкою.
							Заповніть тему запиту, виберіть тип, який найкраще описує вашу
							проблему або питання, і надайте детальний опис у полі тексту. Наші
							спеціалісти зв'яжуться з вами якомога швидше.
						</p>
					</div>

					<div className='bg-white shadow-lg rounded-lg p-8 my-4 flex items-start space-x-4'>
						<div className='flex-shrink-0'>
							<img
								src={isRegUser ? user.picture : '/img/User-Default.svg'}
								className='w-16 h-16 rounded-full border border-gray-300'
								alt='User Avatar'
							/>
						</div>
						<div className='w-full'>
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div>
									<Mylabel htmlFor='title'>Тема запиту</Mylabel>

									<Myinput
										id='title'
										type='text'
										value={Title}
										onBlur={() => setTitleDirty(true)}
										onChange={handleTitle}
										placeholder='Введіть тему'
									/>
									<TextError TextDirty={TitleDirty} TextError={TitleError} />
								</div>

								<div>
									<Mylabel htmlFor='type'>Тип запиту</Mylabel>
									<select
										id='type'
										value={Type}
										onChange={handleChange}
										className='mt-1 block w-full p-3 border border-primary rounded-md shadow-sm focus:ring-primary focus:border-primary'
									>
										<option value='bug'>Bug</option>
										<option value='feedback'>Feedback</option>
										<option value='feature_request'>Feature Request</option>
										<option value='information_request'>
											Information Request
										</option>
									</select>
								</div>

								<div>
									<Mylabel htmlFor='textarea'>Текст</Mylabel>
									<MyTextArea
										TextError={TextError}
										id='textarea'
										onBlur={() => setTextDirty(true)}
										value={Text}
										onChange={handleText}
									/>
									<TextError TextDirty={TextDirty} TextError={TextErrorS} />
								</div>

								<Mybutton
									ondisable={ondisable && isRegUser}
									className='w-full mt-40'
								>
									Submit
								</Mybutton>
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
