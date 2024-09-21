import { BurgerMenu } from '../components/BurgerMenu'
import { GamesList } from '../components/GamesList'
import { MySearch } from '../components/Search'
import style from '../styles/Home.module.css'
export function Home() {
	return (
		<>
			<div className={style.Container}>
				<BurgerMenu />
				<main className={style.Main}>
					<MySearch />
					<GamesList />
				</main>
			</div>
		</>
	)
}
