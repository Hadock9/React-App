import { UserRoundX } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LogoImg from '../img/logo512.png'
import HeaderStyle from '../styles/NavBar.module.css'

export function NavBar() {
	const { isRegUser, user, logout } = useAuth()

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
					<Link
						className='hover:animate-pulse font-sans font-semibold '
						to='/News'
					>
						<div className={HeaderStyle.HeaderText}>
							<p>Новини</p>
						</div>
					</Link>

					<Link
						className='hover:animate-pulse font-sans font-semibold '
						to='/Home'
					>
						<div className={HeaderStyle.HeaderText}>
							<p>Блоги</p>
						</div>
					</Link>

					<Link
						className='hover:animate-pulse font-sans font-semibold '
						to='/Home'
					>
						<div className={HeaderStyle.HeaderText}>
							<p>Головна</p>
						</div>
					</Link>

					<Link
						className='hover:animate-pulse font-sans font-semibold '
						to='/Home'
					>
						<div className={HeaderStyle.HeaderText}>
							<p>Контакти</p>
						</div>
					</Link>

					<Link
						className='hover:animate-pulse font-sans font-semibold '
						to='/Home'
					>
						<div className={HeaderStyle.HeaderText}>
							<p>Підтримати</p>
						</div>
					</Link>
				</div>
				<div className={HeaderStyle.HeaderIcons}>
					{isRegUser ? (
						<Link
							className='hover:animate-pulse font-sans font-semibold '
							to='/Home'
						>
							<div onClick={logout} className={HeaderStyle.HeaderText}>
								<p>Розлогінитися</p>
							</div>
						</Link>
					) : (
						<div className={HeaderStyle.BlockLogin}>
							<Link
								className='hover:animate-pulse font-sans font-semibold '
								to='/Login'
							>
								<div className={HeaderStyle.BlockLoginText}>
									<p>Вхід </p>
								</div>
							</Link>
							<div className={HeaderStyle.BlockLoginText}>
								<p>&nbsp;/&nbsp;</p>
							</div>
							<Link
								className='hover:animate-pulse font-sans font-semibold '
								to='/Registration'
							>
								<div className={HeaderStyle.BlockLoginText}>
									<p> Зареєструватися</p>
								</div>
							</Link>
						</div>
					)}
					<Link
						className='h-[75px] w-[75px] flex justify-center items-center'
						to='/profile'
					>
						{isRegUser ? (
							<div className='h-[45px] w-[45px] flex justify-center items-center'>
								<img
									className='w-[100%] h-auto rounded-full'
									src={user.picture}
									alt='user.picture'
								/>
							</div>
						) : (
							<div className='h-[30px] w-[30px] flex justify-center items-center'>
								<UserRoundX className='w-[100%] h-auto ' />
							</div>
						)}
					</Link>
				</div>
			</header>
		</>
	)
}
