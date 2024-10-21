import { motion } from 'framer-motion'
import React from 'react'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import rootstyle from '../styles/root.module.css'

const Balance = () => {
	return (
		<div className={rootstyle.wrapper}>
			<NavBar />
			<div className={rootstyle.Container}>
				<BurgerMenu />

				<main className={rootstyle.Main}>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ ease: 'easeIn', duration: 2 }}
					>
						тут буде баланс
					</motion.div>{' '}
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default Balance
