import { Map } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckFetch } from '../components/BadFatchDisclaimer'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import MyLoader from '../components/Loader'
import { NavBar } from '../components/NavBar'
import useFetchGet from '../hooks/fetch/useFetchGet'
import { extractHoursAndMinutes, formatDate } from '../js/TimeValidation'
import rootstyle from '../styles/root.module.css'

export function Match() {
	const [searchParams] = useSearchParams()
	const idMatch = searchParams.get('idMatch')
	const [match, setMatch] = useState(null)

	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/games/match/Match',
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
					<div className='bg-[#393e46]'>
						<div className='flex justify-between w-full h-full bg-[#393e46]'>
							{/* Блок для команди 1 */}
							<div
								className='relative w-[40%] h-[160px] flex justify-center items-center px-5'
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
							<div className='flex flex-col items-center justify-center w-[20%] h-[160px] text-white text-[18px]'>
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
								className='relative w-[40%] h-[160px] flex flex-row-reverse justify-center items-center px-5'
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

						<div className='flex w-full h-[30px] bg-[#393e46] text-white'>
							<p>Зробити ставку із коефіцієнтом</p>
						</div>

						<div className='flex items-center my-4'>
							<Map className='text-white' />
							<h3 className='text-white text-lg ml-2'>Карти</h3>
						</div>

						{/* Блок для відображення таблиць карт */}
						<div className='flex flex-wrap justify-between w-full'>
							{/* Map 1 */}
							<div className='w-full sm:w-1/3 p-2'>
								<table className='w-full text-left bg-gray-800 rounded-lg overflow-hidden'>
									<caption className='text-white'>
										<p>Map 1: </p>
									</caption>
									<thead>
										<tr className='bg-gray-700'>
											<th className='p-2 text-white'>Bruv123</th>
											<th className='p-2 text-white'></th>
											<th className='p-2 text-white'>Kukuys</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='p-2 text-white'>3.2K</td>
											<td className='p-2 text-white'>Gold</td>
											<td className='p-2 text-white'>6.7K</td>
										</tr>
										<tr>
											<td className='p-2 text-white'>41.1K</td>
											<td className='p-2 text-white'>Net</td>
											<td className='p-2 text-white'>50.4K</td>
										</tr>
										<tr>
											<td className='p-2 text-white'>7</td>
											<td className='p-2 text-white'>Score</td>
											<td className='p-2 text-white'>19</td>
										</tr>
									</tbody>
								</table>
							</div>
							{/* Map 2 */}
							<div className='w-full sm:w-1/3 p-2'>
								<table className='w-full text-left bg-gray-800 rounded-lg overflow-hidden'>
									<caption className='text-white'>
										<p>Map 2: </p>
									</caption>
									<thead>
										<tr className='bg-gray-700'>
											<th className='p-2 text-white'>Bruv123</th>
											<th className='p-2 text-white'></th>
											<th className='p-2 text-white'>Kukuys</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='p-2 text-white'>3.2K</td>
											<td className='p-2 text-white'>Gold</td>
											<td className='p-2 text-white'>6.7K</td>
										</tr>
										<tr>
											<td className='p-2 text-white'>41.1K</td>
											<td className='p-2 text-white'>Net</td>
											<td className='p-2 text-white'>50.4K</td>
										</tr>
										<tr>
											<td className='p-2 text-white'>7</td>
											<td className='p-2 text-white'>Score</td>
											<td className='p-2 text-white'>19</td>
										</tr>
									</tbody>
								</table>
							</div>
							{/* Map 3 */}
							<div className='w-full sm:w-1/3 p-2'>
								<table className='w-full text-left bg-gray-800 rounded-lg overflow-hidden'>
									<caption className='text-white'>
										<p>Map 3: </p>
									</caption>
									<thead>
										<tr className='bg-gray-700'>
											<th className='p-2 text-white'>Bruv123</th>
											<th className='p-2 text-white'></th>
											<th className='p-2 text-white'>Kukuys</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='p-2 text-white'>3.2K</td>
											<td className='p-2 text-white'>Gold</td>
											<td className='p-2 text-white'>6.7K</td>
										</tr>
										<tr>
											<td className='p-2 text-white'>41.1K</td>
											<td className='p-2 text-white'>Net</td>
											<td className='p-2 text-white'>50.4K</td>
										</tr>
										<tr>
											<td className='p-2 text-white'>7</td>
											<td className='p-2 text-white'>Score</td>
											<td className='p-2 text-white'>19</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						{/* Заголовок для статистики гравців */}
						<div className='flex  items-center my-4'>
							<Map className='text-white' />
							<h3 className='text-white text-lg ml-2'>Статистика Гравців</h3>
						</div>

						{/* Блок для відображення таблиць статистики гравців */}
						<div className='flex flex-wrap justify-between w-full'>
							{/* Player 1 */}
							<div className='w-full sm:w-1/2 p-2'>
								<table className='w-full text-left bg-gray-800 rounded-lg overflow-hidden'>
									<caption className='text-white'>
										<p>Player 1: </p>
									</caption>
									<thead>
										<tr className='bg-gray-700'>
											<th className='p-2 text-white'>Name</th>
											<th className='p-2 text-white'>Score</th>
											<th className='p-2 text-white'>Kill</th>
											<th className='p-2 text-white'>Death</th>
											<th className='p-2 text-white'>Assists</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='p-2 text-white'>Bruv123</td>
											<td className='p-2 text-white'>3</td>
											<td className='p-2 text-white'>10</td>
											<td className='p-2 text-white'>4</td>
											<td className='p-2 text-white'>5</td>
										</tr>
									</tbody>
								</table>
							</div>
							{/* Player 2 */}
							<div className='w-full sm:w-1/2 p-2'>
								<table className='w-full text-left bg-gray-800 rounded-lg overflow-hidden'>
									<caption className='text-white'>
										<p>Player 2: </p>
									</caption>
									<thead>
										<tr className='bg-gray-700'>
											<th className='p-2 text-white'>Name</th>
											<th className='p-2 text-white'>Score</th>
											<th className='p-2 text-white'>Kill</th>
											<th className='p-2 text-white'>Death</th>
											<th className='p-2 text-white'>Assists</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='p-2 text-white'>Kukuys</td>
											<td className='p-2 text-white'>4</td>
											<td className='p-2 text-white'>12</td>
											<td className='p-2 text-white'>5</td>
											<td className='p-2 text-white'>6</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}
