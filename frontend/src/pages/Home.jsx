import { useState } from 'react'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { GamesList } from '../components/GamesList'
import { NavBar } from '../components/NavBar'
import { useRegUser } from '../components/RegistrationContext'
import { MySearch } from '../components/Search'
import rootstyle from '../styles/root.module.css'

export function Home() {
	const [value, Setvalue] = useState('') // Стан для зберігання значення пошуку

	// Оновлюєм значення із MySearch
	const handleValueChange = value => {
		Setvalue(value)
	}
	const { isRegUser, setisRegUser } = useRegUser()
	return (
		<>
			<NavBar />
			<UkrainianWar />
			<div className={rootstyle.Container}>
				<BurgerMenu />
				{console.log(isRegUser)}
				<main className={rootstyle.Main}>
					{/* Приймаємо значення із MySearch */}
					<MySearch onChange={handleValueChange} />
					{/* Передаємо значення із MySearch в GamesList */}
					<GamesList value={value} />
				</main>
			</div>
		</>
	)
}
