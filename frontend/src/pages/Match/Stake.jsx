import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BurgerMenu } from '../../components/BurgerMenu'
import MyLoader from '../../components/Disclaimer/Loader'
import MatchOneBlock from '../../components/Match/MatchOneBlock'
import { UkrainianWar } from '../../components/UserExpirience/BlockSaveUkraine'
import { Footer } from '../../components/UserExpirience/Footer'
import { NavBar } from '../../components/UserExpirience/NavBar'
import { useAuth } from '../../context/AuthContext'
import useFetchGet from '../../hooks/useFetchGet'
import { validateStakeAmount } from '../../js/FormValidation'
import { formatDate, formatTime } from '../../js/TimeValidation'
import rootstyle from '../../styles/root.module.css'
import Mybutton from '../../UI/Mybutton'
import TextError from '../../UI/TextError'

export function Stake() {
	const [searchParams] = useSearchParams()
	const id = searchParams.get('MatchId')
	const TeamNumber = searchParams.get('TeamNumber')
	const [Stakes, setStakes] = useState([])
	const [amount, setAmount] = useState(0)
	const [amountDirty, setAmountDirty] = useState('')
	const [amountError, setAmountError] = useState('Поле не може  != 0')

	const { user } = useAuth()

	const [Match, setMatch] = useState(null)
	const [isLoadingMatch, setIsLoadingMatch] = useState(true)
	const [failedToFetchMatch, setFailedToFetchMatch] = useState(null)
	const [StakeTeamInfo, setStakeTeamInfo] = useState({})

	useEffect(() => {
		const fetchMatch = async () => {
			try {
				const response = await fetch(
					`http://localhost:4000/api/games/match/Match/${id}`
				)
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				setMatch(data)
			} catch (error) {
				setFailedToFetchMatch(`Failed to fetch match data: ${error.message}`)
				console.error('Failed to fetch match data: ', error)
			} finally {
				setIsLoadingMatch(false)
			}
		}

		fetchMatch()
	}, [id])

	useEffect(() => {
		if (Match && Match.length > 0) {
			const teamInfo =
				TeamNumber == 1
					? {
							TeamCoef: Match[0].Team1Coef,
							TeamCountry: Match[0].Team1Country,
							TeamID: Match[0].Team1ID,
							TeamLogo: Match[0].Team1Logo,
							TeamName: Match[0].Team1Name,
					  }
					: {
							TeamCoef: Match[0].Team2Coef,
							TeamCountry: Match[0].Team2Country,
							TeamID: Match[0].Team2ID,
							TeamLogo: Match[0].Team2Logo,
							TeamName: Match[0].Team2Name,
					  }
			setStakeTeamInfo(teamInfo)
		}
	}, [Match, TeamNumber])

	const {
		Data: stakeData,
		isLoading: isLoadingStakes,
		failedToFetch,
	} = useFetchGet({
		url: 'http://localhost:4000/api/stake/',
	})

	const handleSubmit = async e => {
		e.preventDefault()

		if (!StakeTeamInfo.TeamID) {
			console.error('Team ID is not defined.')
			return
		}

		const stakeData = {
			match_id: Match[0]?.MatchID,
			Coef: StakeTeamInfo.TeamCoef,
			user_id: user.id,
			team_id: StakeTeamInfo.TeamID,
			amount: amount,
		}

		try {
			const response = await fetch('http://localhost:4000/api/stake/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(stakeData),
			})

			if (!response.ok) {
				throw new Error('Error submitting stake')
			}

			console.log('Stake submitted successfully')
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		if (stakeData) {
			setStakes(stakeData)
		}
	}, [stakeData])

	const handleAmount = e => {
		setAmount(e.target.value)
		setAmountError(validateStakeAmount(e.target.value, user.bonus_money))
	}
	const [ondisable, Setondisable] = useState(true)
	useEffect(() => {
		if (!amountError) {
			Setondisable(true)
		} else {
			Setondisable(false)
		}
	}, [amountError])

	if (isLoadingStakes || isLoadingMatch) {
		return <MyLoader />
	}

	if (failedToFetch || failedToFetchMatch) {
		return <div>Error loading data. Please try again later.</div>
	}

	return (
		<div className={rootstyle.wrapper}>
			<NavBar />
			<UkrainianWar />
			<div className={rootstyle.Container}>
				<BurgerMenu />
				<main className={rootstyle.Main}>
					<TextError TextDirty={amountDirty} TextError={amountError} />
					<div className='flex '>
						<MatchOneBlock MatchGet={StakeTeamInfo} />
						<div>
							<form onSubmit={handleSubmit} className=' '>
								<label className='block'>
									<span>Amount</span>
									<input
										type='number'
										name='amount'
										onBlur={setAmountDirty}
										value={amount}
										onChange={handleAmount}
										className='mt-1 block w-full rounded-md bg-gray-700 text-white border border-gray-600 p-2'
									/>
								</label>

								<Mybutton ondisable={ondisable}>Submit</Mybutton>
							</form>
						</div>
					</div>

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
					<div></div>
				</main>
			</div>
			<Footer />
		</div>
	)
}
