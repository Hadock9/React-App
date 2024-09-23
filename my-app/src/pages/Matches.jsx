import { BurgerMenu } from '../components/BurgerMenu'
import { MySearch } from '../components/Search'
import TeamLogo from '../img//TeamsLogo/egamersworld (3).png'
import country from '../img/Countries/ua.png'
import CsMiniLogo1 from '../img/GamesMiniLogo/counterstrike.png'
import CsMiniLogo2 from '../img/GamesMiniLogo/counterstrikeminlogo.png'
import style from '../styles/Matches.module.css'
export function Matches() {
	return (
		<>
			<div className={style.Container}>
				<BurgerMenu />
				<main className={style.Main}>
					<MySearch />
					<h1>Matches</h1>
					<div className={style.MatchesBlock}>
						<div className={style.MatchesBlockInfo}>
							<div className={style.MatchesBlockTeam}>
								<div className={style.MatchesBlockCountry}>
									<img
										className={style.MatchesBlockImgCountry}
										src={country}
										alt=''
									/>
								</div>
								<img
									className={style.MatchesBlockImgLogo}
									src={TeamLogo}
									alt=''
								/>
								<div
									className={`${style.MatchesBlockCoef} ${style.MatchesBlockTeam1Coef}`}
								>
									<p>1.43</p>
								</div>
							</div>
							<div className={style.MatchesBlockCenter}>
								<p className={style.MatchesBlockVsDateTime}>23.09.24 12:00</p>
								<p className={style.MatchesBlockVs}>Vs</p>
								<p className={style.MatchesBlockPlace}> European</p>
							</div>
							<div className={style.MatchesBlockTeam2}>
								<div className={style.MatchesBlockCountry}>
									<img
										className={style.MatchesBlockImgCountry}
										src={country}
										alt=''
									/>
								</div>

								<img
									className={style.MatchesBlockImgLogo}
									src={TeamLogo}
									alt=''
								/>
								<div
									className={`${style.MatchesBlockCoef} ${style.MatchesBlockTeam2Coef}`}
								>
									<p>1.43</p>
								</div>
							</div>
						</div>
						<div className={style.MatchesBlockSide}>
							<div className={style.MatchesSideBlockImg1}>
								<img
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
									className={style.MatchesSideImg}
									src={CsMiniLogo2}
									alt=''
								/>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
