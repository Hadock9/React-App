import { useState } from 'react'
import { BurgerMenu } from '../components/BurgerMenu'
import { Match } from '../components/Match'
import { MySearch } from '../components/Search'
import style from '../styles/Matches.module.css'
export function Matches() {
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
					<MySearch onChange={handleValueChange} />
					<h1>Matches</h1>
					<Match value={value} />
				</main>
			</div>
		</>
	)
}
