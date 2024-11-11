import { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'
import BurgerMenu from '../../components/BurgerMenu'
import { CheckFetch } from '../../components/Disclaimer/BadFatchDisclaimer'
import MyLoader from '../../components/Disclaimer/Loader'
import StakeForm from '../../components/Match/StakeForm'
import { UkrainianWar } from '../../components/UserExpirience/BlockSaveUkraine'
import Footer from '../../components/UserExpirience/Footer'
import NavBar from '../../components/UserExpirience/NavBar'
import { useAuth } from '../../context/AuthContext'
import useFetchGet from '../../hooks/useFetchGet'
import { formatDate, formatTime } from '../../js/TimeValidation'
import rootstyle from '../../styles/root.module.css'

export function Stake() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const id = searchParams.get('MatchId')
	const TeamNumber = searchParams.get('TeamNumber')

	const [stakes, setStakes] = useState([])
	const [amount, setAmount] = useState(0)
	const [match, setMatch] = useState(null)
	const [stakeTeamInfo, setStakeTeamInfo] = useState({})
	const { user } = useAuth()
	const [userBalance, setUserBalance] = useState(null)
	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: `http://localhost:4000/api/user/${user?.id}/getMoney`,
	})

	useEffect(() => {
		if (Data && Data[0]?.bonus_money !== undefined) {
			setUserBalance(Data[0].bonus_money)
		}
	}, [Data])

	// Fetch stakes data for the user
	useEffect(() => {
		if (!user) return

		const fetchStakesData = async () => {
			try {
				const response = await fetch(
					`http://localhost:4000/api/stake/${user.id}`
				)
				if (!response.ok) throw new Error('Network response was not ok')
				const data = await response.json()
				setStakes(data)
			} catch (error) {
				console.error('Failed to fetch stakes:', error)
			}
		}

		fetchStakesData()
	}, [user])

	// Fetch match data based on match ID
	useEffect(() => {
		if (!id) return

		const fetchMatchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:4000/api/match/matches/Match/${id}`
				)
				if (!response.ok) throw new Error('Network response was not ok')
				const data = await response.json()
				setMatch(data)
			} catch (error) {
				console.error('Failed to fetch match data:', error)
				toast.error(`Failed to fetch match data: ${error.message}`)
			}
		}

		fetchMatchData()
	}, [id])

	// Set stake team info based on team number
	useEffect(() => {
		if (match && match.length > 0) {
			const teamInfo =
				TeamNumber === '1'
					? {
							TeamCoef: match[0].Team1Coef,
							TeamCountry: match[0].Team1Country,
							TeamID: match[0].Team1ID,
							TeamLogo: match[0].Team1Logo,
							TeamName: match[0].Team1Name,
					  }
					: {
							TeamCoef: match[0].Team2Coef,
							TeamCountry: match[0].Team2Country,
							TeamID: match[0].Team2ID,
							TeamLogo: match[0].Team2Logo,
							TeamName: match[0].Team2Name,
					  }
			setStakeTeamInfo(teamInfo)
		}
	}, [match, TeamNumber])

	const handleSubmit = async e => {
		e.preventDefault()

		if (!match || !stakeTeamInfo.TeamID) {
			console.error('Missing required data for submission.')
			return
		}
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
				bonus_money: user.bonus_money,
				amount,
				action: 'sub',
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
			})
			.catch(error => {
				console.error('Error during login:', error)
			})

		const stakeData = {
			match_id: match[0]?.MatchID,
			Coef: stakeTeamInfo.TeamCoef,
			user_id: user.id,
			team_id: stakeTeamInfo.TeamID,
			amount,
		}
		// add stake
		try {
			const response = await fetch('http://localhost:4000/api/stake/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(stakeData),
			})

			if (!response.ok) throw new Error('Error submitting stake')

			navigate(0)
			toast.success('Stake submitted successfully')
		} catch (err) {
			console.error(err)
			toast.error('Failed to submit stake')
		}
	}

	if (failedToFetch) {
		return <CheckFetch />
	}
	if (isLoading) {
		return <MyLoader />
	}
	return (
		<div className={rootstyle.wrapper}>
			<NavBar />
			<Toaster position='top-center' reverseOrder={false} />
			<UkrainianWar />
			<div className={rootstyle.Container}>
				<BurgerMenu />
				<main className={rootstyle.Main}>
					{id && TeamNumber && (
						<div className='flex'>
							<StakeForm
								MatchGet={stakeTeamInfo}
								amount={amount}
								handleSubmit={handleSubmit}
								setAmount={setAmount}
								userBalance={userBalance}
							/>
						</div>
					)}
					{stakes.map(stake => (
						<div
							className='w-full min-h-[100px] h-[120px] bg-gray-800 text-gray-200 flex gap-4 items-center justify-evenly p-4 rounded-lg my-5'
							key={stake.id}
						>
							<div className='flex items-center gap-2'>
								<img
									src={`/${stake.TeamLogo}`}
									alt={`${stake.TeamName} logo`}
									className='h-20 w-20 object-cover'
								/>
							</div>
							<div className='min-w-[20%] flex flex-col items-center'>
								<div className='text-white text-3xl'>
									₴{(stake.amount * stake.Coef).toFixed(2)}
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
				</main>
			</div>
			<Footer />
		</div>
	)
}
