import { UserRound, UserRoundX } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LogoImg from '../img/logo512.png'
import HeaderStyle from '../styles/NavBar.module.css'

export function NavBar() {
	const { isRegUser, logout } = useAuth()

	return (
		<>
			<header>
				<div className={HeaderStyle.HeaderLogo}>
					<img
						className={`${HeaderStyle.ImgLogo} animate-slow-spin `}
						src={LogoImg}
						alt='logo512 px'
					/>
				</div>
				<div className={HeaderStyle.HeaderBlockText}>
					<Link to='/News'>
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
							<p>Контакти</p>
						</div>
					</Link>

					<Link to='/Home'>
						<div className={HeaderStyle.HeaderText}>
							<p>Підтримати</p>
						</div>
					</Link>
				</div>
				<div className={HeaderStyle.HeaderIcons}>
					{isRegUser ? (
						<Link to='/Home'>
							<div onClick={logout} className={HeaderStyle.HeaderText}>
								<p>Розлогінитися</p>
							</div>
						</Link>
					) : (
						<div className={HeaderStyle.BlockLogin}>
							<Link to='/Login'>
								<div className={HeaderStyle.BlockLoginText}>
									<p>Вхід </p>
								</div>
							</Link>
							<div className={HeaderStyle.BlockLoginText}>
								<p>&nbsp;/&nbsp;</p>
							</div>
							<Link to='/Registration'>
								<div className={HeaderStyle.BlockLoginText}>
									<p> Зареєструватися</p>
								</div>
							</Link>
						</div>
					)}
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
