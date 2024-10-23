import { AnimatePresence, motion } from 'framer-motion'
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
import { Link } from 'react-router-dom'
import { useMenu } from '../context/MenuContext'
import style from '../styles/BurgerMenu.module.css'

export function BurgerMenu() {
	const { isOpen, setIsOpen } = useMenu()

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	const textAnimations = {
		hidden: { opacity: 0, x: -20 },
		show: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -20 },
	}

	const transition = {
		duration: 0.6,
		ease: 'easeInOut',
	}

	const AnimatedText = ({ children }) => (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial='hidden'
					animate='show'
					exit='exit'
					variants={textAnimations}
					transition={transition}
				>
					<p>{children}</p>
				</motion.div>
			)}
		</AnimatePresence>
	)

	return (
		<motion.aside animate={{ width: isOpen ? '350px' : '60px' }}>
			<div className={style.AsideBlockBrowse} onClick={toggleMenu}>
				<div className={style.AsideBlockIconBrowse}>
					<Menu />
				</div>
			</div>

			<>
				<Link to='/Home' className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<House />
					</div>
					<AnimatedText>Головна</AnimatedText>
				</Link>
				<Link to='/Stake' className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<History />
					</div>
					<AnimatedText>Історія ставок</AnimatedText>
				</Link>
				<Link to='/Balance' className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<CircleDollarSign />
					</div>
					<AnimatedText>Баланс</AnimatedText>
				</Link>
				<Link to='/Home' className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<Gem />
					</div>
					<AnimatedText>Бонуси</AnimatedText>
				</Link>
				<Link to='/Profile' className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<CircleUserRound />
					</div>
					<AnimatedText>Мій профіль</AnimatedText>
				</Link>
				<Link to='/Home' className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<Wallet />
					</div>
					<AnimatedText>Гаманець</AnimatedText>
				</Link>
				<Link to='/Notifications' className={style.AsideBlock}>
					<div className={style.AsideBlockIcon}>
						<Mail />
					</div>
					<AnimatedText>Повідомлення</AnimatedText>
				</Link>
			</>
		</motion.aside>
	)
}
