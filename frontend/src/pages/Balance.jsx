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

				<main className={rootstyle.Main}> тут буде баланс </main>
			</div>
			<Footer />
		</div>
	)
}

export default Balance
