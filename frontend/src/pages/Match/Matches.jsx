import { useState } from 'react'
import BurgerMenu from '../../components/BurgerMenu'
import { MatchBlock } from '../../components/Match/MatchBlock'
import { MySearch } from '../../components/Search'
import { UkrainianWar } from '../../components/UserExpirience/BlockSaveUkraine'
import Footer from '../../components/UserExpirience/Footer'
import NavBar from '../../components/UserExpirience/NavBar'
import rootstyle from '../../styles/root.module.css'

export function Matches() {
	const [value, Setvalue] = useState('') // Стан для зберігання значення пошуку

	// Оновлюємо значення із MySearch
	const handleValueChange = value => {
		Setvalue(value) // Оновлення стану при зміні значення
	}

	return (
		<>
			<div className={rootstyle.wrapper}>
				<NavBar />
				<UkrainianWar />
				<MySearch onChange={handleValueChange} />

				<div className={rootstyle.Container}>
					<BurgerMenu />
					<main className={rootstyle.Main}>
						<MatchBlock value={value} />
					</main>
				</div>
				<Footer />
			</div>
		</>
	)
}
