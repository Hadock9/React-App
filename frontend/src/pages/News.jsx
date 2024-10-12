import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

import rootstyle from '../styles/root.module.css'

export function News() {
	return (
		<>
			<div className={rootstyle.wrapper}>
				<NavBar />
				<UkrainianWar />
				<div className={rootstyle.Container}>
					<BurgerMenu />

					<main className={rootstyle.Main}></main>
				</div>
				<Footer />
			</div>
		</>
	)
}
