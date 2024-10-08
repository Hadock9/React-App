import { Map } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckFetch } from '../components/BadFatchDisclaimer'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { NavBar } from '../components/NavBar'
import style from '../styles/Match.module.css'
import rootstyle from '../styles/root.module.css'
function extractHoursAndMinutes(timeString) {
	const [hours, minutes] = timeString.split(':')
	return `${hours}:${minutes}`
}
const formatDate = dateString => {
	const date = new Date(dateString)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')

	return `${year}-${month}-${day}`
}
export function Match() {
	const location = useLocation()
	const { idMatch } = location.state

	const [matches, setData] = useState([])
	const [failedToFetch, setFailedToFetch] = useState(false)
	// Fetch 1 Match from the backends
	useEffect(() => {
		fetch(`http://localhost:4000/api/Match_List/Match/${idMatch}`)
			.then(res => res.json())
			.then(data => {
				setData(data)
				setFailedToFetch(false)
			})
			.catch(error => {
				setFailedToFetch(true)
				console.log('Failed to fetch: ', error)
			})
	}, [])

	return (
		<>
			<NavBar />
			<UkrainianWar />

			<div className={rootstyle.Container}>
				<BurgerMenu />
				<main className={rootstyle.Main}>
					{matches.map((match, index) => (
						<div className={style.MatchesBlock} key={index}>
							<div
								className={style.MatchesBlockTeam}
								style={{
									background: `url(/${match.Team1Country})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
									minHeight: '160px',
									width: '40%',
								}}
							>
								<div className={style.MatchesBlockAbsolute}>
									<img
										draggable='false'
										className={style.MatchesBlockImgLogo}
										src={'/' + match.Team1Logo}
										alt={match.Team1Name}
									/>
									<div
										className={`${style.MatchesBlockCoef} ${style.MatchesBlockTeam1Coef}`}
									>
										<p>{match.Team1Coef}</p>
									</div>
									<div className={style.MatchesBlockTeamText}>
										<p>{match.Team1Name}</p>
										<p>{match.Team1Score}</p>
									</div>
								</div>
							</div>
							<div className={style.MatchesBlockCenter}>
								<p className={style.MatchesBlockVsDateTime}>
									{formatDate(match.VsDateTime)}
								</p>
								{console.log(match)}
								<p className={style.MatchesBlockVs}>Vs</p>
								<p className={style.MatchesBlockTime}>
									{extractHoursAndMinutes(match.time)}
								</p>
							</div>
							<div
								className={style.MatchesBlockTeam}
								style={{
									background: `url(/${match.Team2Country})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
									minHeight: '160px',
									width: '40%',
								}}
							>
								<div
									className={`${style.MatchesBlockAbsolute} ${style.MatchesBlockAbsoluteTeam2}`}
								>
									<img
										draggable='false'
										className={style.MatchesBlockImgLogo}
										src={'/' + match.Team2Logo}
										alt={match.Team2Name}
									/>
									<div
										className={`${style.MatchesBlockCoef} ${style.MatchesBlockTeam2Coef}`}
									>
										<p>{match.Team2Coef}</p>
									</div>
									<div className={style.MatchesBlockTeamText}>
										<p>{match.Team2Name}</p>
										<p>{match.Team2Score}</p>
									</div>
								</div>
							</div>
						</div>
					))}
					{failedToFetch ? <CheckFetch /> : console.log('Successful Fetch')}
					<div className={style.MatchesBlockStake}>
						<p>Зробити ставку із коефіцієнтом </p>
					</div>

					<div className={style.Title}>
						<Map />
						<h3>Карти</h3>
					</div>
					<div className={style.MatchesBlock}>
						<div className={`${style.table_component} ${style.MapBlock}`}>
							<table>
								<caption>
									<p>Map 1: </p>
								</caption>
								<thead>
									<tr>
										<th>Bruv123</th>
										<th></th>
										<th>Kukuys</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>3.2K</td>
										<td>Gold</td>
										<td>6.7K</td>
									</tr>
									<tr>
										<td>41.1K</td>
										<td>Net</td>
										<td>50.4K</td>
									</tr>
									<tr>
										<td>7</td>
										<td>Score</td>
										<td>19</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className={`${style.table_component} ${style.MapBlock}`}>
							<table>
								<caption>
									<p>Map 2: </p>
								</caption>
								<thead>
									<tr>
										<th>Bruv123</th>
										<th></th>
										<th>Kukuys</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>3.2K</td>
										<td>Gold</td>
										<td>6.7K</td>
									</tr>
									<tr>
										<td>41.1K</td>
										<td>Net</td>
										<td>50.4K</td>
									</tr>
									<tr>
										<td>7</td>
										<td>Score</td>
										<td>19</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className={`${style.table_component} ${style.MapBlock}`}>
							<table>
								<caption>
									<p>Map 3: </p>
								</caption>
								<thead>
									<tr>
										<th>Bruv123</th>
										<th></th>
										<th>Kukuys</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>3.2K</td>
										<td>Gold</td>
										<td>6.7K</td>
									</tr>
									<tr>
										<td>41.1K</td>
										<td>Net</td>
										<td>50.4K</td>
									</tr>
									<tr>
										<td>7</td>
										<td>Score</td>
										<td>19</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className={style.Title}>
						<Map />
						<h3>Статистика Гравців</h3>
					</div>
					<div className={style.MatchesBlock}>
						<div className={style.StatsBlock}>
							<div
								className={`${style.table_component} ${style.StatsBlockTeam}`}
							>
								<table>
									<caption>
										<p>Team1 </p>
									</caption>
									<thead>
										<tr>
											<th></th>
											<th></th>
											<th>K</th>
											<th>D</th>
											<th>A</th>
											<th>NET</th>
											<th>LH/DN</th>
											<th>GMP / XMP</th>
											<th>GOLD</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td></td>
											<td>player1</td>
											<td>3 </td>
											<td>3</td>
											<td>5</td>
											<td>4.7K</td>
											<td>44 / 2</td>
											<td>
												<div>239 / 344</div>
											</td>
											<td>327</td>
										</tr>
										<tr>
											<td></td>
											<td>player2</td>
											<td>2</td>
											<td>4</td>
											<td>3</td>
											<td>10.7K</td>
											<td>
												<div>32 / 2</div>
											</td>
											<td>534 / 650</td>
											<td>127</td>
										</tr>
										<tr>
											<td></td>
											<td>player3</td>
											<td>1</td>
											<td>2</td>
											<td>5</td>
											<td>14.7K</td>
											<td>44 / 2</td>
											<td>519 / 534</td>
											<td>427</td>
										</tr>
										<tr>
											<td></td>
											<td>player4</td>
											<td>1</td>
											<td>4</td>
											<td>2</td>
											<td>13.7K</td>
											<td>
												<div>107 / 5</div>
											</td>
											<td>360 / 370</td>
											<td>237</td>
										</tr>
										<tr>
											<td></td>
											<td>player5</td>
											<td>2</td>
											<td>5</td>
											<td>4</td>
											<td>9.7K</td>
											<td>32 / 2</td>
											<td>220 / 290</td>
											<td>423</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div
								className={`${style.table_component} ${style.StatsBlockTeam}`}
							>
								<table>
									<caption>
										<p>Team1 </p>
									</caption>
									<thead>
										<tr>
											<th></th>
											<th></th>
											<th>K</th>
											<th>D</th>
											<th>A</th>
											<th>NET</th>
											<th>LH/DN</th>
											<th>GMP / XMP</th>
											<th>GOLD</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td></td>
											<td>player1</td>
											<td>3 </td>
											<td>3</td>
											<td>5</td>
											<td>4.7K</td>
											<td>44 / 2</td>
											<td>
												<div>239 / 344</div>
											</td>
											<td>327</td>
										</tr>
										<tr>
											<td></td>
											<td>player2</td>
											<td>2</td>
											<td>4</td>
											<td>3</td>
											<td>10.7K</td>
											<td>
												<div>32 / 2</div>
											</td>
											<td>534 / 650</td>
											<td>127</td>
										</tr>
										<tr>
											<td></td>
											<td>player3</td>
											<td>1</td>
											<td>2</td>
											<td>5</td>
											<td>14.7K</td>
											<td>44 / 2</td>
											<td>519 / 534</td>
											<td>427</td>
										</tr>
										<tr>
											<td></td>
											<td>player4</td>
											<td>1</td>
											<td>4</td>
											<td>2</td>
											<td>13.7K</td>
											<td>
												<div>107 / 5</div>
											</td>
											<td>360 / 370</td>
											<td>237</td>
										</tr>
										<tr>
											<td></td>
											<td>player5</td>
											<td>2</td>
											<td>5</td>
											<td>4</td>
											<td>9.7K</td>
											<td>32 / 2</td>
											<td>220 / 290</td>
											<td>423</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
