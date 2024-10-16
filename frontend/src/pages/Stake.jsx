import { useEffect, useState } from 'react'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { extractHoursAndMinutes, formatDate } from '../js/TimeValidation'

import MyLoader from '../components/Loader'
import useFetchGet from '../hooks/fetch/useFetchGet'
import rootstyle from '../styles/root.module.css'
import style from '../styles/Stake.module.css'

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
			method: 'POST', // Відправка POST-запиту
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(stakeData), // Відправка даних ставки у форматі JSON
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
				<div className={rootstyle.Main}>
					{/* Відображення деталей кожної ставки */}
					{Stakes.map(stake => (
						<div className={style.StakeBlock} key={stake.id}>
							<div className={style.block}>{stake.id}</div>
							<div className={style.block}>{stake.match_id}</div>
							<div className={style.AmountBlock}>
								<div className={style.WinAmount}>
									${stake.amount * stake.Coef}
								</div>
								<div className={style.AmountInfoBlock}>
									<div className={style.block}>${stake.amount}</div>
									<div className={style.block}>x{stake.Coef}</div>
								</div>
							</div>
							<div className={style.DateStatusBlock}>
								<div className={style.block}>
									{extractHoursAndMinutes(stake.stake_time)}
								</div>
								<div className={style.block}>
									{formatDate(stake.stake_time)}
								</div>
								<div className={style.block}>Status: {stake.status}</div>
							</div>
						</div>
					))}

					<div>
						<form action='' onSubmit={handleSubmit}>
							<label htmlFor=''>match_id</label>
							<input
								type='number'
								name='match_id'
								onChange={e => setMatchId(e.target.value)}
							/>
							<label htmlFor=''>amount</label>
							<input
								type='number'
								name='amount'
								onChange={e => setAmount(e.target.value)}
							/>
							<label htmlFor=''>Coef</label>
							<input
								type='number'
								name='Coef'
								onChange={e => setCoef(e.target.value)}
							/>
							<button>submit</button> {/* Відправлення форми */}
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
