import { Link } from 'react-router-dom'
import style from '../styles/UkrainianWarBlock.module.css'
export function UkrainianWar() {
	return (
		<Link to='https://savelife.in.ua/en/'>
			<div className={style.SaveUkraine}>
				<div className={style.SaveUkraineTopBlock}>#UkrainianWar</div>
				<div className={style.SaveUkraineBottomBlock}>Support</div>
			</div>
		</Link>
	)
}
