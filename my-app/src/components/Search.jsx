import { Search } from 'lucide-react'
import style from '../styles/Search.module.css'

export function MySearch() {
	return (
		<div className={style.SearchBlock}>
			<form action=''>
				<div className={style.Search}>
					<input
						type='text'
						placeholder='Search'
						name='Search'
						className={style.CustomInput}
					/>
					<button className={style.CustomButton}>
						<Search />
					</button>
				</div>
			</form>
		</div>
	)
}
