import { useState } from 'react'
import { BurgerMenu } from '../components/BurgerMenu'
import { GamesList } from '../components/GamesList'
import { MySearch } from '../components/Search'
import style from '../styles/Home.module.css'
export function Home() {
	const [value, Setvalue] = useState('')
	//  Оновлюєм значення із MySearch
	const handleValueChange = value => {
		Setvalue(value)
	}
	return (
		<>
			<div className={style.Container}>
				<BurgerMenu />
				<main className={style.Main}>
					{/* Приймаєм значення із MySearch */}
					<MySearch onChange={handleValueChange} />
					{/* Передаєм значення із MySearch в GamesList */}
					<GamesList value={value} />
				</main>
			</div>
		</>
	)
}
