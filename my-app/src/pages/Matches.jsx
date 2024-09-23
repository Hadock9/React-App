import { BurgerMenu } from '../components/BurgerMenu'
import { Match } from '../components/Match'
import { MySearch } from '../components/Search'
import style from '../styles/Matches.module.css'
export function Matches() {
	return (
		<>
			<div className={style.Container}>
				<BurgerMenu />
				<main className={style.Main}>
					<MySearch />
					<h1>Matches</h1>
					<Match />
				</main>
			</div>
		</>
	)
}
