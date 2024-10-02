import { Link } from 'react-router-dom'
import TeamLogo from '../img//TeamsLogo/egamersworld (3).png'
import TeamLogo1 from '../img//TeamsLogo/egamersworld (6).png'
import country1 from '../img/Countries/cz.svg'
import country from '../img/Countries/ua.png'
import CsMiniLogo1 from '../img/GamesMiniLogo/counterstrike.png'
import CsMiniLogo2 from '../img/GamesMiniLogo/counterstrikeminlogo.png'
import style from '../styles/Matches.module.css'
import { NoResultDisclaimer } from './NoResultDisclaimer'

const MatchInfo = [
	{
		id: '1',
		Place: 'European',
		VsDateTime: '23.09.24 12:00',

		Team1Name: 'Navi1',
		Team1Logo: TeamLogo,
		Team1Country: country,
		Team1Coef: 1.34,

		Team2Name: 'Navi',
		Team2Logo: TeamLogo1,
		Team2Country: country1,
		Team2Coef: 3.32,
	},
	{
		id: '2',
		Place: 'European',
		VsDateTime: '23.09.24 12:00',

		Team1Name: 'Navi2',
		Team1Logo: TeamLogo,
		Team1Country: country,
		Team1Coef: 1.34,

		Team2Name: 'Navi',
		Team2Logo: TeamLogo1,
		Team2Country: country1,
		Team2Coef: 3.32,
	},
	{
		id: '3',
		Place: 'European',
		VsDateTime: '23.09.24 12:00',

		Team1Name: 'Navi3',
		Team1Logo: TeamLogo,
		Team1Country: country,
		Team1Coef: 1.34,

		Team2Name: 'Navi',
		Team2Logo: TeamLogo1,
		Team2Country: country1,
		Team2Coef: 3.32,
	},
	{
		id: '4',
		Place: 'European',
		VsDateTime: '23.09.24 12:00',

		Team1Name: 'Navi4',
		Team1Logo: TeamLogo,
		Team1Country: country,
		Team1Coef: 1.34,

		Team2Name: 'G2',
		Team2Logo: TeamLogo1,
		Team2Country: country1,
		Team2Coef: 3.32,
	},
	{
		id: '5',
		Place: 'European',
		VsDateTime: '23.09.24 12:00',

		Team1Name: 'Navi5',
		Team1Logo: TeamLogo,
		Team1Country: country,
		Team1Coef: 1.34,

		Team2Name: 'Navi',
		Team2Logo: TeamLogo1,
		Team2Country: country1,
		Team2Coef: 3.32,
	},
	{
		id: '6',
		Place: 'European',
		VsDateTime: '23.09.24 12:00',

		Team1Name: 'Navi6',
		Team1Logo: TeamLogo,
		Team1Country: country,
		Team1Coef: 1.34,

		Team2Name: 'Navi',
		Team2Logo: TeamLogo1,
		Team2Country: country1,
		Team2Coef: 3.32,
	},
]

export function MatchBlock({ value }) {
	const filterMatches = MatchInfo.filter(Match => {
		return (
			Match.Team1Name.toLowerCase().includes(value.toLowerCase()) ||
			Match.Team2Name.toLowerCase().includes(value.toLowerCase())
		)
	})
	return (
		<>
			{filterMatches.length > 0 ? (
				filterMatches.map(Match => {
					return (
						<Link
							to={Match.Team1Name + 'Vs' + Match.Team1Name}
							state={{ idMatch: Match.id, Matcheslist: MatchInfo }}
							key={Match.id}
						>
							<div className={style.MatchesBlock}>
								<div className={style.MatchesBlockInfo}>
									<div className={style.MatchesBlockTeam}>
										<div className={style.MatchesBlockCountry}>
											<img
												draggable='false'
												className={style.MatchesBlockImgCountry}
												src={Match.Team1Country}
												alt=''
											/>
										</div>
										<img
											draggable='false'
											className={style.MatchesBlockImgLogo}
											src={Match.Team1Logo}
											alt=''
										/>
										<div
											className={`${style.MatchesBlockCoef} ${style.MatchesBlockTeam1Coef}`}
										>
											<p>{Match.Team1Coef}</p>
										</div>
									</div>
									<div className={style.MatchesBlockCenter}>
										<p className={style.MatchesBlockVsDateTime}>
											{Match.VsDateTime}
										</p>
										<p className={style.MatchesBlockVs}>Vs</p>
										<p className={style.MatchesBlockPlace}> {Match.Place}</p>
									</div>
									<div className={style.MatchesBlockTeam2}>
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
			) : (
				<NoResultDisclaimer value={value} />
			)}
		</>
	)
}
