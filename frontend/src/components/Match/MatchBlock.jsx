import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'
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

	let url = 'http://localhost:4000/api/match/matches'
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
			'w-[3rem] h-[2.5rem] text-white border-none cursor-pointer rounded-md transition-all duration-100'
		const activeClasses = isActive ? 'bg-red-700' : 'bg-gray-500'
		return `${baseClasses} ${activeClasses}`
	}
	const buttonVariants = {
		hover: { scale: 1.1 },
		tap: { scale: 0.9 },
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
									<div
										className={`${style.MatchesBlockTeam} w-full sm:w-[40%] md:w-[45%]`}
									>
										<div className={style.MatchesBlockCountry}>
											<img
												draggable='false'
												className={`${style.MatchesBlockImgCountry} w-8 sm:w-8 md:w-12 lg:w-16`}
												src={Match.Team1Country}
												alt=''
											/>
										</div>
										<img
											draggable='false'
											className={`${style.MatchesBlockImgLogo} w-12 sm:w-10 md:w-16 lg:w-20`}
											src={Match.Team1Logo}
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
									<div
										className={`${style.MatchesBlockTeam2} w-full sm:w-[40%] md:w-[45%]`}
									>
										<div className={style.MatchesBlockCountry}>
											<img
												draggable='false'
												className={style.MatchesBlockImgCountry}
												src={Match.Team2Country}
												alt=''
											/>
										</div>

										<img
											draggable='false'
											className={style.MatchesBlockImgLogo}
											src={Match.Team2Logo}
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
											src={Match.GameMinLogo}
											alt=''
										/>
									</div>
									<div className={style.MatchesSideText}>
										<p>{Match.season}</p>
									</div>
									<div className={style.MatchesSideBlockImg1}>
										<img
											draggable='false'
											className={style.MatchesSideImg}
											src={Match.GameMinLogo}
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

			{Data.totalPages > 1 && (
				<div className='flex justify-center gap-2 mb-3'>
					<motion.button
						type='button'
						onClick={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}
						variants={buttonVariants}
						whileHover='hover'
						whileTap='tap'
					>
						<ChevronLeft className='w-[3rem] h-[2rem] text-gray-500' />
					</motion.button>

					{currentPage - 3 >= 1 && (
						<>
							<motion.button
								type='button'
								className={getButtonClasses(currentPage === Data.totalPages)}
								onClick={() => setCurrentPage(1)}
								variants={buttonVariants}
								whileHover='hover'
								whileTap='tap'
							>
								{1}
							</motion.button>
							<Ellipsis className='self-end' />
						</>
					)}

					{PagesArray.filter(
						page => page >= currentPage - 2 && page <= currentPage + 2
					).map(page => (
						<motion.button
							type='button'
							className={getButtonClasses(currentPage === page)}
							key={page}
							onClick={() => setCurrentPage(page)}
							variants={buttonVariants}
							whileHover='hover'
							whileTap='tap'
						>
							{page}
						</motion.button>
					))}

					{currentPage + 3 <= Data?.totalPages && (
						<>
							<Ellipsis className='self-end' />
							<motion.button
								type='button'
								className={getButtonClasses(currentPage === Data.totalPages)}
								onClick={() => setCurrentPage(Data.totalPages)}
								variants={buttonVariants}
								whileHover='hover'
								whileTap='tap'
							>
								{Data.totalPages}
							</motion.button>
						</>
					)}

					<motion.button
						type='button'
						onClick={() =>
							setCurrentPage(prev =>
								prev < Data?.totalPages ? prev + 1 : prev
							)
						}
						variants={buttonVariants}
						whileHover='hover'
						whileTap='tap'
					>
						<ChevronRight className='w-[3rem] h-[2rem]  text-gray-500 ' />
					</motion.button>
				</div>
			)}
		</>
	)
}
