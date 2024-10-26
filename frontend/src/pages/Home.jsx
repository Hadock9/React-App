import { useState } from 'react'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { GamesList } from '../components/GamesList'
import { NavBar } from '../components/NavBar'
import { MySearch } from '../components/Search'

import rootstyle from '../styles/root.module.css'

export function Home() {
    const [value, Setvalue] = useState('') // Стан для зберігання значення пошуку

    // Оновлюєм значення із MySearch
    const handleValueChange = (value) => {
        Setvalue(value)
    }

    return (
        <>
            <div className={rootstyle.wrapper}>
                <NavBar />
                {/* Приймаємо значення із MySearch */}
                <MySearch onChange={handleValueChange} />

                <UkrainianWar />
                <div className={rootstyle.Container}>
                    <BurgerMenu />
                    <main className={rootstyle.Main}>
                        {/* Передаємо значення із MySearch в GamesList */}
                        <GamesList value={value} />
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}
