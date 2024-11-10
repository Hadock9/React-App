import { Map } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import BurgerMenu from '../../components/BurgerMenu'
import Comments from '../../components/Comments/Comments'
import { CheckFetch } from '../../components/Disclaimer/BadFatchDisclaimer'
import MyLoader from '../../components/Disclaimer/Loader'
import { MapStat, PlayerStat } from '../../components/Match/MatchStatistic'
import { UkrainianWar } from '../../components/UserExpirience/BlockSaveUkraine'
import Footer from '../../components/UserExpirience/Footer'
import NavBar from '../../components/UserExpirience/NavBar'
import { useAuth } from '../../context/AuthContext'
import useFetchGet from '../../hooks/useFetchGet'
import { extractHoursAndMinutes, formatDate } from '../../js/TimeValidation'
import rootstyle from '../../styles/root.module.css'
import IsRegUser from '../../UI/IsRegUser'

export function Match() {
	const [searchParams] = useSearchParams()
	const idMatch = searchParams.get('idMatch')
	const [match, setMatch] = useState(null)
	const { user, isRegUser } = useAuth()

	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/match/matches/Match',
		id: idMatch,
	})

	useEffect(() => {
		if (Data) {
			setMatch(Data[0])
		}
	}, [Data])

	if (isLoading) {
		return <MyLoader />
	}

	if (!match) {
		return <CheckFetch />
	}

	return (
		<div className={rootstyle.wrapper}>
			<NavBar />
			<UkrainianWar />
			<div className={rootstyle.Container}>
				<BurgerMenu />

				<main className={rootstyle.Main}>
					<IsRegUser>
						Ви не зареєстровані.Робити ставки можуть тільки зареєстровані
						користувачі.
					</IsRegUser>
					<div className=''>
						<div className='flex justify-between w-full h-full bg-gray-700 rounded-t-lg'>
							{/* Блок для команди 1 */}
							<div
								className='relative w-[40%] h-[260px] flex justify-center items-center px-5 rounded-tl-lg'
								style={{
									backgroundImage: `linear-gradient(to right, rgba(57, 62, 70, 0.8), rgba(57, 62, 70, 0)), url(/${match.Team1Country})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'left',
								}}
							>
								<img
									draggable='false'
									className='h-[100px] w-[100px] object-contain mx-[10%]'
									src={'/' + match.Team1Logo}
									alt={match.Team1Name}
								/>
								<div className='flex items-center justify-center bg-gray-700 bg-opacity-60 rounded-full mr-5 w-[40%]'>
									<p className='text-center font-semibold text-white text-[22px]'>
										{match.Team1Name}
									</p>
								</div>
								<div className='flex flex-col items-center justify-between font-bold text-white text-[22px] mt-2 h-[80%]'>
									<div className='mt-4 p-2 rounded-full bg-gray-700 bg-opacity-60 w-12 h-12 flex justify-center items-center'>
										<p>{match.Team1Coef}</p>
									</div>
									<div className='mt-4 p-2 rounded-full bg-gray-700 bg-opacity-60 w-12 h-12 flex justify-center items-center'>
										{match.Team1Score > match.Team2Score ? (
											<p className='text-green-700'>{match.Team1Score}</p>
										) : (
											<p className='text-red-700'>{match.Team1Score}</p>
										)}
									</div>
								</div>
							</div>

							{/* Блок для відображення результату матчу */}
							<div className='flex flex-col items-center justify-center w-[20%] h-[260px] text-white text-[18px]'>
								<p className='font-semibold text-center'>
									{formatDate(match.VsDate)}
								</p>
								<p className='font-bold'>Vs</p>
								<p className='font-bold text-[24px]'>
									{extractHoursAndMinutes(match.time)}
								</p>
							</div>

							{/* Блок для команди 2 */}
							<div
								className='relative w-[40%] h-[260px] flex flex-row-reverse justify-center items-center px-5 rounded-tr-lg'
								style={{
									backgroundImage: `linear-gradient(to left, rgba(57, 62, 70, 0.8), rgba(57, 62, 70, 0)), url(/${match.Team2Country})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'right',
								}}
							>
								<img
									draggable='false'
									className='h-[100px] w-[100px] object-contain mx-[10%]'
									src={'/' + match.Team2Logo}
									alt={match.Team2Name}
								/>
								<div className='flex items-center justify-center bg-gray-700 bg-opacity-60 rounded-full ml-5 w-[40%]'>
									<p className='text-center font-semibold text-white text-[22px]'>
										{match.Team2Name}
									</p>
								</div>
								<div className='flex flex-col items-center justify-between font-bold text-white text-[22px] mt-2 h-[80%]'>
									<div className='mt-4 p-2 rounded-full bg-gray-700 bg-opacity-60 w-12 h-12 flex justify-center items-center'>
										<p>{match.Team2Coef}</p>
									</div>
									<div className='mt-4 p-2 rounded-full bg-gray-700 bg-opacity-60 w-12 h-12 flex justify-center items-center'>
										{match.Team2Score > match.Team1Score ? (
											<p className='text-green-700'>{match.Team2Score}</p>
										) : (
											<p className='text-red-700'>{match.Team2Score}</p>
										)}
									</div>
								</div>
							</div>
						</div>

						{/* Заголовок для статистики команд по картах */}
						{(match.status == 'finished') | !isRegUser ? (
							<div className='flex w-full justify-center items-center  bg-gray-700 rounded-b-lg'>
								<div className=' text-white text-lg font-bold py-6'>
									Ставки не приймаються
								</div>
							</div>
						) : (
							<div className='flex w-full bg-gray-700 text-white justify-between rounded-b-lg'>
								<div className='flex w-[40%] justify-center'>
									<Link
										to={`/Stake?MatchId=${idMatch}&TeamNumber=${1}`}
										className='w-full'
									>
										<div className='flex justify-center items-center w-full h-full rounded-b-lg bg-primary px-5 py-4   hover:bg-primary-dark text-white duration-300'>
											Зробити ставку із коефіцієнтом
										</div>
									</Link>
								</div>
								<div className='flex  w-[20%] justify-center items-center'>
									<p> Зробити ставку </p>
								</div>
								<div className='flex  w-[40%] justify-center'>
									<Link
										to={`/Stake?MatchId=${idMatch}&TeamNumber=${2}`}
										className='w-full'
									>
										<div className='flex justify-center items-center w-full h-full rounded-b-lg bg-primary px-5 py-4   hover:bg-primary-dark text-white duration-300'>
											Зробити ставку із коефіцієнтом
										</div>
									</Link>
								</div>
							</div>
						)}

						<div className='flex items-center justify-center my-4'>
							<Map className='text-black' />
							<h3 className='text-black text-lg ml-2'>Карти</h3>
						</div>

						{/* Блок для відображення таблиць карт */}
						<div className='flex flex-wrap justify-between w-full'>
							{/* Map 1 */}
							<MapStat match={match} />
							{/* Map 2 */}
							<MapStat match={match} />
							{/* Map 3 */}
							<MapStat match={match} />
						</div>

						{/* Заголовок для статистики гравців*/}
						<div className='flex items-center my-4 justify-center'>
							<Map className='text-black' />
							<h3 className='text-black text-lg ml-2 '>Статистика Гравців</h3>
						</div>

						{/* Блок для відображення таблиць статистики гравців */}
						<div className='flex flex-wrap justify-between w-full'>
							{/* Team 1 */}
							<PlayerStat match={match} />
							{/* Team 2 */}
							<PlayerStat match={match} />
						</div>
					</div>
					<Comments
						id={idMatch}
						urlFetch={`http://localhost:4000/api/comments/match_comments/${idMatch}/${
							isRegUser ? user.id : 0
						}`}
						urlPost={
							'http://localhost:4000/api/comments/match_comments/comment'
						}
						what_id='match'
					/>
				</main>
			</div>
			<Footer />
		</div>
	)
}
