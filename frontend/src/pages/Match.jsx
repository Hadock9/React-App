import { Map } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckFetch } from '../components/BadFatchDisclaimer'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { extractHoursAndMinutes, formatDate } from '../js/TimeValidation'
import style from '../styles/Match.module.css'
import rootstyle from '../styles/root.module.css'

export function Match() {
	const [searchParams] = useSearchParams()
	const idMatch = searchParams.get('idMatch')
	console.log(idMatch)
	const [matches, setData] = useState([]) // Стан для зберігання матчів
	const [failedToFetch, setFailedToFetch] = useState(false) // Стан для відслідковування помилки запиту

	// Fetch 1 Match from the backend
	useEffect(() => {
		fetch(`http://localhost:4000/api/Match_List/Match/${idMatch}`)
			.then(res => res.json())
			.then(data => {
				setData(data) // Оновлення стану з отриманими даними
				setFailedToFetch(false) // Скидання помилки
			})
			.catch(error => {
				setFailedToFetch(true) // Встановлення помилки у разі невдачі
				console.log('Failed to fetch: ', error)
			})
	}, [])

	return (
		<div className={rootstyle.wrapper}>
			<NavBar />
			<UkrainianWar />

			<div className={rootstyle.Container}>
				<BurgerMenu />
				<main className={rootstyle.Main}>
					{matches.map((match, index) => (
						<div className={style.MatchesBlock} key={index}>
							{/* Блок для команди 1 */}
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

							{/* Блок для відображення результату матчу */}
							<div className={style.MatchesBlockCenter}>
								<p className={style.MatchesBlockVsDateTime}>
									{formatDate(match.VsDateTime)} {/* Форматована дата матчу */}
								</p>
								<p className={style.MatchesBlockVs}>Vs</p>
								<p className={style.MatchesBlockTime}>
									{extractHoursAndMinutes(match.time)} {/* Час матчу */}
								</p>
							</div>

							{/* Блок для команди 2 */}
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

					{/* Відображення повідомлення про помилку при невдалому запиті */}
					{failedToFetch ? <CheckFetch /> : console.log('Successful Fetch')}

					<div className={style.MatchesBlockStake}>
						<p>Зробити ставку із коефіцієнтом </p> {/* Блок для ставок */}
					</div>

					{/* Заголовок для карт */}
					<div className={style.Title}>
						<Map />
						<h3>Карти</h3>
					</div>

					{/* Блок для відображення таблиць карт */}
					<div className={style.MatchesBlock}>
						{/* Map 1 */}
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
						{/* Map 2 */}
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
						{/* Map 3 */}
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

					{/* Заголовок для статистики гравців */}
					<div className={style.Title}>
						<Map />
						<h3>Статистика Гравців</h3>
					</div>

					{/* Блок для відображення таблиць статистики гравців */}
					<div className={style.MatchesBlock}>
						{/* Гравець 1 */}
						<div className={`${style.table_component} ${style.MapBlock}`}>
							<table>
								<caption>
									<p>Player 1: </p>
								</caption>
								<thead>
									<tr>
										<th>Name</th>
										<th>Score</th>
										<th>Kill</th>
										<th>Death</th>
										<th>Assists</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Bruv123</td>
										<td>3</td>
										<td>10</td>
										<td>4</td>
										<td>5</td>
									</tr>
								</tbody>
							</table>
						</div>
						{/* Гравець 2 */}
						<div className={`${style.table_component} ${style.MapBlock}`}>
							<table>
								<caption>
									<p>Player 2: </p>
								</caption>
								<thead>
									<tr>
										<th>Name</th>
										<th>Score</th>
										<th>Kill</th>
										<th>Death</th>
										<th>Assists</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Kukuys</td>
										<td>4</td>
										<td>12</td>
										<td>5</td>
										<td>6</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}
