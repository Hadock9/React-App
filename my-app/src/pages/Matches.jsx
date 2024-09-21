import { BurgerMenu } from '../components/BurgerMenu'
import { MySearch } from '../components/Search'
import TeamLogo from '../img//TeamsLogo/egamersworld (3).png'
import country from '../img/Countries/ua.png'
import style from '../styles/Matches.module.css'
export function Matches() {
	return (
		<>
			<div className={style.Container}>
				<BurgerMenu />
				<main className={style.Main}>
					<MySearch />
					<h1>Matches 1</h1>
					<div className={style.MatchesBlock}>
						<div className={style.MatchesBlockInfo}>
							<div className={style.MatchesBlockTeam}>
								<div className={style.MatchesBlockCountry}>
									<img
										className={style.MatchesBlockImgCountry}
										src={country}
										alt=''
									/>{' '}
								</div>
								<img
									className={style.MatchesBlockImgLogo}
									src={TeamLogo}
									alt=''
								/>
							</div>
							<div className={style.MatchesBlockVs}>
								<h3></h3>
								<p> Vs</p>
								<p>Bo3</p>
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
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
