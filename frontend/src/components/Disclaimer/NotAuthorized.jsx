import { Link } from 'react-router-dom'
import style from '../../styles/User/NotAuthorized.module.css'

export function NotAuthorized() {
	return (
		<div className={style.Container}>
			<div className={style.ContainerBlock}>
				<h1 className={style.ContainerBlockText}>Доступ заборонено</h1>
				<p className={style.ContainerBlockText}>
					Ви не маєте достатніх прав для перегляду цієї сторінки
				</p>
				<p className={style.ContainerBlockText}>Авторизуйтеся будь ласка</p>

				<Link to='/Home'>
					<div className={style.GoBack}>Повернутися на головну сторінку </div>
				</Link>
				<Link to='/Login'>
					<div className={style.GoBack}>Авторизуватися </div>
				</Link>
				<Link to='/Registration'>
					<div className={style.GoBack}>Зареєструватися </div>
				</Link>
			</div>
		</div>
	)
}
