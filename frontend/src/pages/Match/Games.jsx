import { useEffect, useState } from 'react'
import BurgerMenu from '../../components/BurgerMenu'
import { GamesList } from '../../components/Match/GamesList'
import { MySearch } from '../../components/Search'
import { UkrainianWar } from '../../components/UserExpirience/BlockSaveUkraine'
import Footer from '../../components/UserExpirience/Footer'
import NavBar from '../../components/UserExpirience/NavBar'

import MyCarousel from '../../components/UserExpirience/Carousel'
import useFetchGet from '../../hooks/useFetchGet'
import rootstyle from '../../styles/root.module.css'

export function Games() {
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
				{/* Приймаємо значення із MySearch */}

				<MySearch onChange={handleValueChange} />

				<UkrainianWar />
				<div className={rootstyle.Container}>
					<BurgerMenu />
					<main className={rootstyle.Main}>
						<MyCarousel Array={games} />

						{/* Передаємо значення із MySearch в GamesList */}
						<GamesList value={value} />
					</main>
				</div>
				<Footer />
			</div>
		</>
	)
}
