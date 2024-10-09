import { useState } from 'react'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { MatchBlock } from '../components/MatchBlock'
import { NavBar } from '../components/NavBar'
import { MySearch } from '../components/Search'
import rootstyle from '../styles/root.module.css'

export function Matches() {
	const [value, Setvalue] = useState('') // Стан для зберігання значення пошуку

	// Оновлюємо значення із MySearch
	const handleValueChange = value => {
		Setvalue(value) // Оновлення стану при зміні значення
	}

	return (
		<>
			<NavBar />
			<UkrainianWar />
			<div className={rootstyle.Container}>
				<BurgerMenu />
				<main className={rootstyle.Main}>
					<MySearch onChange={handleValueChange} />
					<h1>Matches</h1>
					<MatchBlock value={value} />
				</main>
			</div>
		</>
	)
}
