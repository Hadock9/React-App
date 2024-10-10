import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import style from '../styles/Footer.module.css'
export function Footer() {
	return (
		<footer>
			<div className={style.HeaderIcons}>
				<Link to='https://x.com/'>
					<Twitter />
				</Link>
				<Link to='https://www.facebook.com/'>
					<Facebook />
				</Link>
				<Link to='https://www.instagram.com/'>
					<Instagram />
				</Link>
			</div>
		</footer>
	)
}
