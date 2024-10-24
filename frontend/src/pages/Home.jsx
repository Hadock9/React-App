import { useEffect, useState } from 'react'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { GamesList } from '../components/GamesList'
import { NavBar } from '../components/NavBar'
import { MySearch } from '../components/Search'

import MyCarousel from '../components/Carousel'
import useFetchGet from '../hooks/fetch/useFetchGet'
import rootstyle from '../styles/root.module.css'

export function Home() {
	const [value, Setvalue] = useState('') // Стан для зберігання значення пошуку

	// Оновлюєм значення із MySearch
	const handleValueChange = value => {
		Setvalue(value)
	}
	const [games, setGames] = useState([])
	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/games/Games_List',
	})
	useEffect(() => {
		setGames(Data)
	}, [Data])

	return (
		<>
			<div className={rootstyle.wrapper}>
				<NavBar />
				<MySearch onChange={handleValueChange} />

				<UkrainianWar />
				<div className={rootstyle.Container}>
					<BurgerMenu />
					<main className={rootstyle.Main}>
						{/* Приймаємо значення із MySearch */}
						{/* Передаємо значення із MySearch в GamesList */}

						<GamesList value={value} />
					</main>
				</div>
				<MyCarousel Array={games} />
				<Footer />
			</div>
		</>
	)
}
