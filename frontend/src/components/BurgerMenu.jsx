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
import style from '../styles/BurgerMenu.module.css'
export function BurgerMenu() {
	return (
		<aside className={style.AsideContainer}>
			<div className={style.AsideBlockBrowse}>
				<div className={style.AsideBlockIconBrowse}>
					<Menu />
				</div>
			</div>
			<div className={style.AsideBlock}>
				<div className={style.AsideBlockIcon}>
					<House />
				</div>
				<div className={style.AsideBlockText}>
					<p>Головна</p>
				</div>
			</div>
			<div className={style.AsideBlock}>
				<div className={style.AsideBlockIcon}>
					<History />
				</div>
				<div className={style.AsideBlockText}>
					<p>Історія ставок</p>
				</div>
			</div>
			<div className={style.AsideBlock}>
				<div className={style.AsideBlockIcon}>
					<CircleDollarSign />
				</div>
				<div className={style.AsideBlockText}>
					<p>Управління Балансом</p>
				</div>
			</div>
			<div className={style.AsideBlock}>
				<div className={style.AsideBlockIcon}>
					<Gem />
				</div>
				<div className={style.AsideBlockText}>
					<p>Бонуси</p>
				</div>
			</div>
			<div className={style.AsideBlock}>
				<div className={style.AsideBlockIcon}>
					<CircleUserRound />
				</div>
				<div className={style.AsideBlockText}>
					<p>Мій профіль</p>
				</div>
			</div>
			<div className={style.AsideBlock}>
				<div className={style.AsideBlockIcon}>
					<Wallet />
				</div>
				<div className={style.AsideBlockText}>
					<p>Гаманець</p>
				</div>
				<br />
			</div>
			<div className={style.AsideBlock}>
				<div className={style.AsideBlockIcon}>
					<Mail />
				</div>
				<div className={style.AsideBlockText}>
					<p>Повідомлення</p>
				</div>
			</div>
		</aside>
	)
}
