import { Search } from 'lucide-react'
import style from '../styles/Search.module.css'

//передаєм значення вище
export function MySearch({ onChange }) {
	//Кожен раз при зміні HandleNameChange оновлюєм знаення
	const HandleNameChange = event => {
		onChange(event.target.value)
	}

	return (
		<div className={style.SearchBlock}>
			<form action=''>
				<div className={style.Search}>
					<input
						type='text'
						placeholder='Search'
						name='Search'
						className={style.CustomInput}
						//При зміні беремо створюємо функцію HandleNameChange
						onChange={HandleNameChange}
					/>
					<button className={style.CustomButton}>
						<Search />
					</button>
				</div>
			</form>
		</div>
	)
}
