import { useEffect, useState } from 'react'
import TextError from '../../UI/TextError'

import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import {
	validateAmount,
	validateCVV,
	validateCardName,
	validateCreditCard,
	validateExpDate,
} from '../../js/FormValidation.js'
import Mybutton from '../../UI/Mybutton.jsx'
import { MotionFireLogo } from './MotionFireLogo.jsx'

export function CreditCard({ action, userBalance }) {
	const { setIsRegUser, setUser, user } = useAuth()
	const navigate = useNavigate()

	const [Amount, setAmount] = useState('')
	const [Card, setCard] = useState('')
	const [Name, setName] = useState('')
	const [ExpDate, setExpDate] = useState('')
	const [CVV, setCVV] = useState('')
	const [FormValid, setFormValid] = useState(false) // Для визначення, чи форма готова до відправлення

	const [AmountDirty, setAmountDirty] = useState(false)
	const [CardDirty, setCardDirty] = useState(false)
	const [NameDirty, setNameDirty] = useState(false)
	const [ExpDateDirty, setExpDateDirty] = useState(false)
	const [CVVDirty, setCVVDirty] = useState(false)

	const [AmountError, setAmountError] = useState(
		'Поле з сумою не може бути пустим'
	)
	const [CardError, setCardError] = useState('Номер карти не може бути пустим')
	const [NameError, setNameError] = useState(
		"Ім'я власника не може бути пустим"
	)
	const [ExpDateError, setExpDateError] = useState(
		'Поле з датою не може бути пустим'
	)
	const [CVVError, setCVVError] = useState('CVV номер не може бути пустим')

	const blurHandler = e => {
		switch (e.target.name) {
			case 'Amount':
				setAmountDirty(true)
				break
			case 'Card':
				setCardDirty(true)
				break
			case 'Name':
				setNameDirty(true)
				break
			case 'ExpDate':
				setExpDateDirty(true)
				break
			case 'CVV':
				setCVVDirty(true)
				break
			default:
				break
		}
	}

	const AmountHandler = e => {
		setAmount(e.target.value)
		setAmountError(validateAmount(e.target.value))
	}
	const CardHandler = e => {
		const value = e.target.value

		var formattedValue = value
			.replace(/[^\d]/g, '')
			.slice(0, 16)
			.replace(/(\d{4})/g, '$1 ')
			.trim()
		setCard(formattedValue)

		setCardError(validateCreditCard(e.target.value))
	}
	const NameHandler = e => {
		setName(e.target.value)
		setNameError(validateCardName(e.target.value))
	}
	const ExpDateHandler = e => {
		const value = e.target.value
		console.log(value.length)

		if (value.length === 2 && !value.includes('/')) {
			setExpDate(value + '/')
		} else if (value.length === 3 && value.includes('/')) {
			setExpDate(value.slice(0, 2))
		} else {
			setExpDate(value)
		}
		setExpDateError(validateExpDate(e.target.value))
	}
	const CVVHandler = e => {
		setCVV(e.target.value)

		setCVVError(validateCVV(e.target.value))
	}

	useEffect(() => {
		if (AmountError || CardError || NameError || ExpDateError || CVVError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [AmountError, CardError, NameError, ExpDateError, CVVError])

	const handleSubmit = async e => {
		e.preventDefault()
		console.log('Form submitted')
		const amountInt = parseInt(Amount, 10)
		// Update user bonus money
		fetch('http://localhost:4000/api/user/updateBonusMoney', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify({
				//user id
				id: user.id,
				bonus_money: userBalance,
				amount: amountInt,
				action: action,
			}),
		})
			.then(response => response.json())
			.then(data => {
				if (data.error) {
					console.log('Error:', data.error)
					alert(data.error)
					return
				}
				console.log('Login successful:', data)
				localStorage.setItem('token', data.token)
				console.log('Оновлення даних пройшло успішно:', data.message)
				const decoded = jwtDecode(data.token)
				setIsRegUser(true)
				setUser(decoded)
				navigate(0)
			})
			.catch(error => {
				console.error('Error during login:', error)
			})
	}
	return (
		<div className='mt-10'>
			<div className='flex flex-col items-center relative'>
				<div className='absolute rounded-full bg-gradient-to-br from-primary bg-red-950 opacity-80 h-[240px] w-[240px] left-[52%] top-[-10%]'></div>
				<div className='absolute rounded-full bg-gradient-to-br from-primary bg-red-950 opacity-80 h-[300px] w-[300px] left-[27%] top-[5%]'></div>

				<div className='flex flex-col absolute left-[70%]'>
					<TextError TextDirty={AmountDirty} TextError={AmountError} />
					<TextError TextDirty={CardDirty} TextError={CardError} />
					<TextError TextDirty={NameDirty} TextError={NameError} />
					<TextError TextDirty={ExpDateDirty} TextError={ExpDateError} />
					<TextError TextDirty={CVVDirty} TextError={CVVError} />
				</div>

				<form
					onSubmit={handleSubmit}
					className=' flex flex-col h-[280px] w-[420px] rounded-2xl bg-black bg-opacity-10 backdrop-blur-lg border border-black border-opacity-10 shadow-lg p-5'
				>
					<div className='flex justify-between'>
						<div className='flex flex-col'>
							<label className='text-white text-xs font-light'>
								СУМА В ГРИВНЯХ
							</label>
							<div className='flex '>
								<input
									className='w-[60%] h-10 text-white text-xl bg-transparent placeholder-gray-400 border-b border-white focus:outline-none mb-4'
									placeholder='123 456'
									type='text'
									name='Amount'
									value={Amount}
									onBlur={blurHandler}
									onChange={AmountHandler}
									maxLength='6'
									required
								/>
								<div className='h-10 text-white text-xl bg-transparent border-white mt-1 align-text-bottom'>
									UAH
								</div>
							</div>
						</div>
						<div className='h-10 w-10 flex justify-center items-center mr-8'>
							<MotionFireLogo />
						</div>
					</div>

					<label className='text-white text-xs font-light'>НОМЕР КАРТИ</label>
					<input
						className='w-full h-10 text-white  text-xl bg-transparent placeholder-gray-400 border-b border-white focus:outline-none mb-8'
						placeholder='1234 1234 1234 1234'
						type='telephone'
						name='Card'
						value={Card}
						onBlur={blurHandler}
						onChange={CardHandler}
						maxLength='19'
						required
					/>

					<div className='container2 flex justify-between'>
						<div className='flex flex-col mr-5 w-1/3'>
							<label className='text-white text-xs font-light mb-1'>
								ІМ'Я ВЛАСНИКА
							</label>
							<input
								className='text-white  bg-transparent placeholder-gray-400 border-b border-white focus:outline-none'
								placeholder='Taras'
								type='text'
								name='Name'
								value={Name}
								onBlur={blurHandler}
								onChange={NameHandler}
								required
							/>
						</div>

						<div className='flex flex-col mr-5 w-1/4'>
							<label className='text-white text-xs font-light mb-1'>
								ДІЙСНА ДО
							</label>
							<input
								className='text-white  bg-transparent placeholder-gray-400 border-b border-white focus:outline-none'
								placeholder='10/25'
								type='text'
								name='ExpDate'
								value={ExpDate}
								onBlur={blurHandler}
								onChange={ExpDateHandler}
								maxLength='5'
								required
							/>
						</div>

						<div className='flex flex-col w-1/4'>
							<label className='text-white text-xs font-light mb-1'>CVV</label>
							<input
								className='text-white  bg-transparent placeholder-gray-400 border-b border-white focus:outline-none'
								placeholder='123'
								type='text'
								maxLength='3'
								name='CVV'
								value={CVV}
								onBlur={blurHandler}
								onChange={CVVHandler}
								required
							/>
						</div>
					</div>
					<Mybutton ondisable={FormValid}>Submit</Mybutton>
				</form>
			</div>
		</div>
	)
}
