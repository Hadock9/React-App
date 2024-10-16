import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

import rootstyle from '../styles/root.module.css'

const Notifications = () => {
	return (
		<div className={rootstyle.wrapper}>
			<NavBar />

			<div className={rootstyle.Container}>
				<BurgerMenu />

				<main className={rootstyle.Main}></main>
			</div>
			<Footer />
		</div>
	)
}

export default Notifications
