import { useState } from 'react'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { MatchBlock } from '../components/MatchBlock'
import { NavBar } from '../components/NavBar'
import { NotAuthorized } from '../components/NotAuthorized'
import { MySearch } from '../components/Search'
import { useAuth } from '../context/AuthContext'
import rootstyle from '../styles/root.module.css'

export function Matches() {
	const { isRegUser } = useAuth()
	const [value, Setvalue] = useState('') // Стан для зберігання значення пошуку

	// Оновлюємо значення із MySearch
	const handleValueChange = value => {
		Setvalue(value) // Оновлення стану при зміні значення
	}
	if (!isRegUser) {
		return <NotAuthorized />
	}
	return (
		<>
			<div className={rootstyle.wrapper}>
				<NavBar />
				<UkrainianWar />
				<div className={rootstyle.Container}>
					<BurgerMenu />
					<main className={rootstyle.Main}>
						<MySearch onChange={handleValueChange} />

						<MatchBlock value={value} />
					</main>
				</div>
				<Footer />
			</div>
		</>
	)
}
