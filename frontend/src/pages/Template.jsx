import { BurgerMenu } from '../components/BurgerMenu'
import Footer from '../components/UserExpirience/Footer'
import { NavBar } from '../components/UserExpirience/NavBar'

import rootstyle from '../styles/root.module.css'

export function Template() {
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
