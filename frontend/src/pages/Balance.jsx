import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { useAuth } from '../context/AuthContext'
import rootstyle from '../styles/root.module.css'

const Balance = () => {
	const { user } = useAuth()
	const [userBalance, setUserBalance] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (user) {
			setUserBalance(user.bonus_money)
			setLoading(false)
		}
	}, [user])

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
						{loading ? (
							<p>Loading balance...</p>
						) : userBalance != null ? (
							<p>Your balance: {userBalance} UAH</p>
						) : (
							<p>No balance information available.</p>
						)}
					</motion.div>
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default Balance
