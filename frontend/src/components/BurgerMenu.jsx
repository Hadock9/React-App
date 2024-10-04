import {
	CircleDollarSign,
	CircleUserRound,
	Gem,
	History,
	House,
	Mail,
	Menu,
	Wallet,
} from 'lucide-react'
import { useMenu } from '../components/MenuContext'

import style from '../styles/BurgerMenu.module.css'

export function BurgerMenu() {
	const { isOpen, setIsOpen } = useMenu()

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<aside
			className={isOpen ? style.AsideContainer : style.AsideContainerHidden}
		>
			<div className={style.AsideBlockBrowse} onClick={toggleMenu}>
				<div className={style.AsideBlockIconBrowse}>
					<Menu />
				</div>
			</div>

			<>
				<div className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<House />
					</div>
					<div className={isOpen ? style.AsideBlockText : style.HiddenBlock}>
						<p>Головна</p>
					</div>
				</div>
				<div className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<History />
					</div>
					<div className={isOpen ? style.AsideBlockText : style.HiddenBlock}>
						<p>Історія ставок</p>
					</div>
				</div>
				<div className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<CircleDollarSign />
					</div>
					<div className={isOpen ? style.AsideBlockText : style.HiddenBlock}>
						<p>Управління Балансом</p>
					</div>
				</div>
				<div className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<Gem />
					</div>
					<div className={isOpen ? style.AsideBlockText : style.HiddenBlock}>
						<p>Бонуси</p>
					</div>
				</div>
				<div className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<CircleUserRound />
					</div>
					<div className={isOpen ? style.AsideBlockText : style.HiddenBlock}>
						<p>Мій профіль</p>
					</div>
				</div>
				<div className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<Wallet />
					</div>
					<div className={isOpen ? style.AsideBlockText : style.HiddenBlock}>
						<p>Гаманець</p>
					</div>
				</div>
				<div className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<Mail />
					</div>
					<div className={isOpen ? style.AsideBlockText : style.HiddenBlock}>
						<p>Повідомлення</p>
					</div>
				</div>
			</>
		</aside>
	)
}
