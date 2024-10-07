import {
	Facebook,
	Instagram,
	Twitter,
	UserRound,
	UserRoundX,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import LogoImg from '../img/logo512.png'
import HeaderStyle from '../styles/NavBar.module.css'
import { useAuth } from './AuthContext'

export function NavBar() {
	const { user, isRegUser, logout } = useAuth()

	return (
		<>
			<header>
				<div className={HeaderStyle.HeaderLogo}>
					<img className={HeaderStyle.ImgLogo} src={LogoImg} alt='logo512 px' />
				</div>
				<div className={HeaderStyle.HeaderBlockText}>
					<Link to='/Home'>
						<div className={HeaderStyle.HeaderText}>
							<p>Новини</p>
						</div>
					</Link>

					<Link to='/Home'>
						<div className={HeaderStyle.HeaderText}>
							<p>Блоги</p>
						</div>
					</Link>

					<Link to='/Home'>
						<div className={HeaderStyle.HeaderText}>
							<p>Контакти</p>
						</div>
					</Link>

					<Link to='/Home'>
						<div className={HeaderStyle.HeaderText}>
							<p>Підтримати</p>
						</div>
					</Link>
					{isRegUser ? (
						<Link to='/'>
							<div onClick={logout} className={HeaderStyle.HeaderText}>
								<p>Розлогінитися</p>
							</div>
						</Link>
					) : (
						<Link to='/Registration'>
							<div className={HeaderStyle.HeaderText}>
								<p>Зареєструватися</p>
							</div>
						</Link>
					)}
				</div>
				<div className={HeaderStyle.HeaderIcons}>
					<Link to='https://x.com/'>
						<Twitter />
					</Link>
					<Link to='https://www.facebook.com/'>
						<Facebook />
					</Link>
					<Link to='https://www.instagram.com/'>
						<Instagram />
					</Link>
					<Link to='/profile'>
						<div className={HeaderStyle.Profile}>
							{isRegUser ? <UserRound /> : <UserRoundX />}
						</div>
					</Link>
				</div>
			</header>
		</>
	)
}
