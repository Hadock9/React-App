import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CsMiniLogo1 from '../img/GamesMiniLogo/counterstrike.png'
import CsMiniLogo2 from '../img/GamesMiniLogo/counterstrikeminlogo.png'
import style from '../styles/Matches.module.css'
import { CheckFetch } from './BadFatchDisclaimer'
import { NoResultDisclaimer } from './NoResultDisclaimer'

const formatDate = dateString => {
	const date = new Date(dateString)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')

	return `${year}-${month}-${day}`
}

export function MatchBlock({ value }) {
	const [Match, setData] = useState([])
	const [failedToFetch, setFailedToFetch] = useState(false)
	// Fetch users from the backend
	useEffect(() => {
		fetch('http://localhost:4000/api/Match_List')
			.then(res => res.json())
			.then(data => {
				setFailedToFetch(false)
				setData(data)
			})
			.catch(error => {
				setFailedToFetch(true)
				console.log('Failed to fetch: ', error)
			})
	}, [])
	console.log(Match)
	const filterMatches = Match.filter(Match => {
		return (
			Match.Team1Name.toLowerCase().includes(value.toLowerCase()) ||
			Match.Team2Name.toLowerCase().includes(value.toLowerCase())
		)
	})
	return (
		<>
			{failedToFetch ? <CheckFetch /> : console.log('Successful Fetch')}
			{filterMatches.length > 0 ? (
				filterMatches.map(Match => {
					return (
						<Link
							to={Match.Team1Name + 'Vs' + Match.Team1Name}
							state={{ idMatch: Match.MatchID }}
							key={Match.MatchID}
						>
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
											{formatDate(Match.VsDateTime)}
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
											src={CsMiniLogo1}
											alt=''
										/>
									</div>
									<div className={style.MatchesSideText}>
										<p>European Pro League Season 19</p>
									</div>
									<div className={style.MatchesSideBlockImg}>
										<img
											draggable='false'
											className={style.MatchesSideImg}
											src={CsMiniLogo2}
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
		</>
	)
}
