import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Mybutton from '../../UI/Mybutton'
import TextError from '../../UI/TextError'
import { validateStakeAmount } from '../../js/FormValidation'

export default function StakeForm({
	MatchGet,
	amount,
	handleSubmit,
	setAmount,
	userBalance,
}) {
	const [Match, setMatch] = useState(null)
	const [amountDirty, setAmountDirty] = useState(false)
	const [amountError, setAmountError] = useState('Поле не може бути 0')
	const [isDisabled, setIsDisabled] = useState(true)

	useEffect(() => {
		if (MatchGet) setMatch(MatchGet)
	}, [MatchGet])

	const handleAmount = e => {
		setAmount(e.target.value)
		setAmountError(validateStakeAmount(e.target.value, userBalance))
	}

	useEffect(() => {
		setIsDisabled(!!amountError)
	}, [amountError])

	return (
		<div>
			<Toaster position='top-center' reverseOrder={false} />
			<TextError TextDirty={amountDirty} TextError={amountError} />
			<div className='relative w-full h-[200px] bg-gray-800 flex justify-between mb-2 cursor-pointer rounded-lg'>
				{Match ? (
					<div className='flex '>
						<div className='w-[60%] flex'>
							<div className='m-2'>
								<div className='  bg-gray-600 rounded-full w-10 h-10 text-white flex justify-center items-center right-6'>
									<p>{Match.TeamCoef}</p>
								</div>
								<img
									draggable='false'
									className='w-1/2 h-auto'
									src={`/${Match.TeamCountry}`}
									alt={Match.TeamCountry}
								/>
							</div>
							<div>
								<p className='text-white'>{Match.TeamName}</p>
							</div>
							<img
								draggable='false'
								className='w-1/2 object-cover'
								src={`/${Match.TeamLogo}`}
								alt={`${Match.TeamCountry} logo`}
							/>
						</div>

						<div className=''>
							<form onSubmit={handleSubmit} className=''>
								<label className='block'>
									<span className='text-white'>Сума ставки</span>
									<div className='flex items-center gap-2'>
										<input
											name='amount'
											onBlur={() => setAmountDirty(true)}
											value={amount}
											onChange={handleAmount}
											className='mt-1 block w-full rounded-md bg-gray-700 text-white border border-gray-600 p-2'
										/>
										<span className='text-green-500 text-lg'>
											* {Match.TeamCoef} ={' '}
											{(amount * Match.TeamCoef).toFixed(0)}₴
										</span>
									</div>
								</label>

								<Mybutton ondisable={!isDisabled}>Submit</Mybutton>
							</form>
						</div>
					</div>
				) : (
					<div>Завантаження даних про матч...</div>
				)}
			</div>
		</div>
	)
}
