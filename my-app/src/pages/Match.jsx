import { Map } from 'lucide-react'
import TeamLogo from '../img//TeamsLogo/egamersworld (3).png'
import TeamLogo1 from '../img//TeamsLogo/egamersworld (6).png'

import { BurgerMenu } from '../components/BurgerMenu'
import style from '../styles/Match.module.css'

export function Match() {
	return (
		<>
			<div className={style.Container}>
				<BurgerMenu />
				<main className={style.Main}>
					<div className={style.MatchesBlock}>
						<div className={style.MatchesBlockTeam}>
							<img
								draggable='false'
								className={style.MatchesBlockImgLogo}
								src={TeamLogo}
								alt=''
							/>
							<div className={style.MatchesBlockTeamText}>
								<p>Navi</p>
								<p>0</p>
							</div>
						</div>
						<div className={style.MatchesBlockCenter}>
							<p className={style.MatchesBlockVsDateTime}>25.09.24</p>
							<p className={style.MatchesBlockVs}>Vs</p>
							<p className={style.MatchesBlockTime}> 09:30 </p>
						</div>
						<div
							className={`${style.MatchesBlockTeam} ${style.MatchesBlockTeam2}`}
						>
							<img
								draggable='false'
								className={style.MatchesBlockImgLogo}
								src={TeamLogo1}
								alt=''
							/>
							<div className={style.MatchesBlockTeamText}>
								<p>Navi</p>
								<p>0</p>
							</div>
						</div>
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
