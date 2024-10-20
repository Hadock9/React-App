import { useEffect, useState } from 'react'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { formatDate, formatTime } from '../js/TimeValidation'

import MyLoader from '../components/Loader'
import useFetchGet from '../hooks/fetch/useFetchGet'
import rootstyle from '../styles/root.module.css'

export function Stake() {
	const [Stakes, setData] = useState([])

	const [matchId, setMatchId] = useState(0)
	const [amount, setAmount] = useState(0)
	const [Coef, setCoef] = useState(0)
	const [status, setStatus] = useState('pending')

	const handleSubmit = e => {
		e.preventDefault()

		const stakeData = {
			match_id: parseInt(matchId),
			amount: parseFloat(amount),
			Coef: parseFloat(Coef),
			status: status,
		}

		fetch('http://localhost:4000/api/stake/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(stakeData),
		})
	}

	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/stake/',
	})

	useEffect(() => {
		if (Data) {
			setData(Data)
		}
	}, [Data])

	if (isLoading) {
		return <MyLoader />
	}
	return (
		<div className={rootstyle.wrapper}>
			<NavBar />
			<UkrainianWar />
			<div className={rootstyle.Container}>
				<BurgerMenu />

				<main className={rootstyle.Main}>
					{/* Відображення деталей кожної ставки */}
					{Stakes.map(stake => (
						<div
							className='w-full min-h-[100px] h-[120px] bg-gray-800 text-gray-200 flex gap-4 items-center justify-evenly p-4 rounded-lg my-5'
							key={stake.id}
						>
							<div>{stake.id}</div>
							<div>{stake.match_id}</div>
							<div className='min-w-[20%] flex flex-col items-center'>
								<div className='text-white text-3xl'>
									₴{stake.amount * stake.Coef}
								</div>
								<div className='flex'>
									<div>₴{stake.amount}</div>
									<div>x{stake.Coef}</div>
								</div>
							</div>
							<div className='flex flex-col justify-evenly items-center'>
								<div>{formatTime(stake.stake_time)}</div>
								<div>{formatDate(stake.stake_time)}</div>
								<div>Status: {stake.status}</div>
							</div>
						</div>
					))}

					<div>
						<form onSubmit={handleSubmit} className='space-y-4'>
							<label className='block'>
								<span>match_id</span>
								<input
									type='number'
									name='match_id'
									onChange={e => setMatchId(e.target.value)}
									className='mt-1 block w-full rounded-md bg-gray-700 text-white border border-gray-600 p-2'
								/>
							</label>
							<label className='block'>
								<span>amount</span>
								<input
									type='number'
									name='amount'
									onChange={e => setAmount(e.target.value)}
									className='mt-1 block w-full rounded-md bg-gray-700 text-white border border-gray-600 p-2'
								/>
							</label>
							<label className='block'>
								<span>Coef</span>
								<input
									type='number'
									name='Coef'
									onChange={e => setCoef(e.target.value)}
									className='mt-1 block w-full rounded-md bg-gray-700 text-white border border-gray-600 p-2'
								/>
							</label>
							<button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>
								submit
							</button>
						</form>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}
