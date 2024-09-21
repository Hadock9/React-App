import { Link } from 'react-router-dom'
import ErorStyle from '../styles/404.module.css'

export function Erorpage() {
	return (
		<div className={ErorStyle.Container}>
			<div className={ErorStyle.ContainerBlock}>
				<h1 className={ErorStyle.ContainerBlockText}>404</h1>
				<p className={ErorStyle.ContainerBlockText}>Page not found</p>

				<Link to='/Home'>
					<div className={ErorStyle.GoBack}>Go back to Home </div>
				</Link>
			</div>
		</div>
	)
}
