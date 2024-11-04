import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import useFetchGet from '../../hooks/useFetchGet'
import { formatDate } from '../../js/TimeValidation'
import style from '../../styles/Match/Matches.module.css'
import { CheckFetch } from '../Disclaimer/BadFatchDisclaimer'
import MyLoader from '../Disclaimer/Loader'
import { NoResultDisclaimer } from '../Disclaimer/NoResultDisclaimer'

export function MatchBlock({ value }) {
	const [Match, setData] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const limit = 10

	const [searchParams] = useSearchParams()
	const game_id = searchParams.get('game_id')

	let url = 'http://localhost:4000/api/games/matches'
	if (game_id) {
		url += `/game_id=${game_id}`
	} else {
		url += `?_limit=${limit}&_page=${currentPage}`
	}
	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: url,
	})

	useEffect(() => {
		if (Data && Array.isArray(Data.data)) {
			setData(Data.data)
		} else {
			setData(Data)
		}
	}, [Data])

	const filterMatches = Match.filter(Match => {
		return (
			Match.Team1Name.toLowerCase().includes(value.toLowerCase()) ||
			Match.Team2Name.toLowerCase().includes(value.toLowerCase())
		)
	})

	const getPagesArray = totalPages => {
		const pagesArray = []
		for (let i = 1; i <= totalPages; i++) {
			pagesArray.push(i)
		}
		return pagesArray
	}

	let PagesArray = getPagesArray(Data?.totalPages)

	// стилізація кнопок бажано переробити)
	const getButtonClasses = isActive => {
		const baseClasses =
			'focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   dark:hover:bg-green-700 dark:focus:ring-green-800'
		const activeClasses = isActive ? 'bg-green-700' : 'bg-red-700'
		return `${baseClasses} ${activeClasses}`
	}

	if (isLoading) {
		return <MyLoader />
	}
	return (
		<>
			{failedToFetch ? <CheckFetch /> : console.log('Successful Fetch')}
			{filterMatches.length > 0 ? (
				filterMatches.map(Match => {
					return (
						<Link
							to={`${Match.Team1Name}Vs${Match.Team2Name}?idMatch=${Match.MatchID}`}
							key={Match.MatchID}
						>
							{console.log(Match)}
							<div className={style.MatchesBlock}>
								<div className={style.MatchesBlockInfo}>
									<div className={style.MatchesBlockTeam}>
										<div className={style.MatchesBlockCountry}>
											<img
												draggable='false'
												className={style.MatchesBlockImgCountry}
												src={'/' + Match.Team1Country}
												alt=''
											/>
										</div>
										<img
											draggable='false'
											className={style.MatchesBlockImgLogo}
											src={'/' + Match.Team1Logo}
											alt=''
										/>
										{console.log(Match.Team1Country)}
										<div
											className={`${style.MatchesBlockCoef} ${style.MatchesBlockTeam1Coef}`}
										>
											<p>{Match.Team1Coef}</p>
										</div>
									</div>
									<div className={style.MatchesBlockCenter}>
										<p className={style.MatchesBlockVsDateTime}>
											{formatDate(Match.VsDate)}
										</p>
										<p className={style.MatchesBlockVs}>Vs</p>
										<p className={style.MatchesBlockPlace}> {Match.Place}</p>
									</div>
									<div className={style.MatchesBlockTeam2}>
										<div className={style.MatchesBlockCountry}>
											<img
												draggable='false'
												className={style.MatchesBlockImgCountry}
												src={'/' + Match.Team2Country}
												alt=''
											/>
										</div>

										<img
											draggable='false'
											className={style.MatchesBlockImgLogo}
											src={'/' + Match.Team2Logo}
											alt=''
										/>
										<div
											className={`${style.MatchesBlockCoef} ${style.MatchesBlockTeam2Coef}`}
										>
											<p>{Match.Team2Coef}</p>
										</div>
									</div>
								</div>
								<div className={style.MatchesBlockSide}>
									<div className={style.MatchesSideBlockImg1}>
										<img
											draggable='false'
											className={style.MatchesSideImg}
											src={'/' + Match.GameMinLogo}
											alt=''
										/>
									</div>
									<div className={style.MatchesSideText}>
										<p>{Match.season}</p>
									</div>
									<div className={style.MatchesSideBlockImg}>
										<img
											draggable='false'
											className={style.MatchesSideImg}
											src={'/' + Match.GameMinLogo}
											alt=''
										/>
									</div>
								</div>
							</div>
						</Link>
					)
				})
			) : failedToFetch ? (
				console.log('Failed Fatch No Results :)')
			) : (
				<NoResultDisclaimer value={value} />
			)}

			<div>
				<div className='flex justify-center'>
					{PagesArray.map(page => (
						<button
							type='button'
							className={getButtonClasses(currentPage === page)}
							key={page}
							onClick={() => setCurrentPage(page)}
						>
							{page}
						</button>
					))}
				</div>
			</div>
		</>
	)
}
