import { motion, useAnimationControls } from 'framer-motion'
import {
	CircleDollarSign,
	CircleUserRound,
	Gem,
	Gift,
	History,
	House,
	Mail,
} from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMenu } from '../context/MenuContext'
import style from '../styles/BurgerMenu.module.css'
const sideBarInfo = [
	{ link: '/Home', icon: <House />, name: 'Головна' },
	{ link: '/Stake', icon: <History />, name: 'Історія ставок' },
	{ link: '/Balance', icon: <CircleDollarSign />, name: 'Баланс' },
	{ link: '/Bonuses', icon: <Gem />, name: 'Бонуси' },
	{ link: '/Profile', icon: <CircleUserRound />, name: 'Мій профіль' },
	{ link: '/Donate', icon: <Gift />, name: 'Підтримати' },
	{ link: '/Notifications', icon: <Mail />, name: 'Повідомлення' },
]

const Path = props => (
	<motion.path
		fill='transparent'
		strokeWidth='3'
		stroke='hsl(0, 0%, 18%)'
		strokeLinecap='round'
		{...props}
	/>
)

function BurgerMenu() {
	const { isOpen, setIsOpen } = useMenu()

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	const containerVariants = {
		hidden: {
			width: '60px',
			transition: {
				duration: 0.5,
				damping: 15,
				type: 'spring',
			},
		},
		show: {
			width: '250px',
			transition: {
				duration: 0.5,
				damping: 15,
				type: 'spring',
			},
		},
	}

	const containerControls = useAnimationControls()

	useEffect(() => {
		if (isOpen) {
			containerControls.start('show')
		} else {
			containerControls.start('hidden')
		}
	}, [isOpen, containerControls])

	const AnimatedText = ({ children }) => (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
			transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
			style={{ display: isOpen ? 'block' : 'none' }}
		>
			<p>{children}</p>
		</motion.div>
	)

	return (
		<motion.aside
			initial='hidden' // Initial state
			variants={containerVariants}
			animate={containerControls}
			className={style.BurgerMenuContainer}
		>
			<div className={style.AsideBlockBrowse} onClick={toggleMenu}>
				<div className={style.AsideBlockIconBrowse}>
					<button className={style.MenuToggleButton}>
						<svg width='23' height='23' viewBox='0 0 23 23'>
							<Path
								initial='closed'
								variants={{
									closed: { d: 'M 2 2.5 L 20 2.5' },
									open: { d: 'M 3 16.5 L 17 2.5' },
								}}
								animate={isOpen ? 'open' : 'closed'}
								transition={{ duration: 0.3 }}
							/>
							<Path
								d='M 2 9.423 L 20 9.423'
								variants={{
									closed: { opacity: 1 },
									open: { opacity: 0 },
								}}
								animate={isOpen ? 'open' : 'closed'}
								transition={{ duration: 0.1 }}
							/>
							<Path
								initial='closed'
								variants={{
									closed: { d: 'M 2 16.346 L 20 16.346' },
									open: { d: 'M 3 2.5 L 17 16.346' },
								}}
								animate={isOpen ? 'open' : 'closed'}
								transition={{ duration: 0.3 }}
							/>
						</svg>
					</button>
				</div>
			</div>

			{sideBarInfo.map((Item, index) => (
				<motion.div
					key={index}
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					<Link to={Item.link} className={style.AsideBlock}>
						<div className={style.AsideBlockIcon}>{Item.icon}</div>
						<AnimatedText>{Item.name}</AnimatedText>
					</Link>
				</motion.div>
			))}
		</motion.aside>
	)
}
export default React.memo(BurgerMenu)
