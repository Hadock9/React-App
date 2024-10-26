import { Link } from 'react-router-dom'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

import { useState } from 'react'
import NewsAside from '../components/NewsAside'
import NewsList from '../components/NewsList'
import { MySearch } from '../components/Search'
import rootstyle from '../styles/root.module.css'

export function News() {
    const [value, Setvalue] = useState('') // Стан для зберігання значення пошуку

    // Оновлюєм значення із MySearch
    const handleValueChange = (value) => {
        Setvalue(value)
    }
    return (
        <>
            <div className={rootstyle.wrapper}>
                <NavBar />
                <UkrainianWar />
                <div className={rootstyle.Container}>
                    <BurgerMenu />

                    <main
                        className={rootstyle.Main}
                        style={{ paddingLeft: '18px', marginRight: '28px' }}
                    >
                        <MySearch onChange={handleValueChange} />
                        <h3 className="font-bold my-5">
                            Новини кіберспорту по рубриках
                        </h3>
                        <div className="flex font-medium">
                            <span className="w-px h-5 bg-gray-400 mr-4"></span>
                            <Link className="mr-4">CS2</Link>
                            <span className="w-px h-5 bg-gray-400 mr-4"></span>
                            <Link className="mr-4">Dota 2</Link>
                            <span className="w-px h-5 bg-gray-400 mr-4"></span>
                            <Link className="mr-4">EA Sports FC</Link>
                            <span className="w-px h-5 bg-gray-400 mr-4"></span>
                            <Link className="mr-4"> Інші новини</Link>
                        </div>
                        {/* News block*/}
                        <NewsList value={value} />
                    </main>
                    <aside className="w-[25%]">
                        <NewsAside
                            url={'http://localhost:4000/api/news/news_last'}
                        />
                        <NewsAside
                            url={'http://localhost:4000/api/news/news_last'}
                        />
                    </aside>
                </div>
                <Footer />
            </div>
        </>
    )
}
