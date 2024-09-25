import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import LogoImg from '../img/logo512.png'
import ProfileImg from '../img/profile.jpg'
import HeaderStyle from '../styles/NavBar.module.css'

export function NavBar() {
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

					<Link to='/Registration'>
						<div className={HeaderStyle.HeaderText}>
							<p>Зареєструватися</p>
						</div>
					</Link>
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
							<img className={HeaderStyle.ProfileImg} src={ProfileImg} alt='' />
						</div>
					</Link>
				</div>
			</header>
			<Link to='https://savelife.in.ua/en/'>
				<div className={HeaderStyle.SaveUkraine}>
					<div className={HeaderStyle.SaveUkraineTopBlock}>#UkrainianWar</div>
					<div className={HeaderStyle.SaveUkraineBottomBlock}>Support</div>
				</div>
			</Link>
		</>
	)
}
