import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

import rootstyle from '../styles/root.module.css'

export function NewsContent() {
	return (
		<>
			<div className={rootstyle.wrapper}>
				<NavBar />
				<UkrainianWar />
				<div className={rootstyle.Container}>
					<BurgerMenu />

					<main className={rootstyle.Main}>
						{/* News block*/}
						<div className=' w-[80%]  my-5'>
							<div className='ml-5'>
								<p className='text-xl   underline'>
									NAVI – MOUZ. Фінал IEM Rio. Дивитись онлайн. LIVE трансляція
								</p>
								<div className='flex my-4'>
									<Link to='#' className='text-xl'>
										CS2
									</Link>
									<span class='ml-3 w-px h-7 bg-gray-400 mr-4 '></span>
									<p className='mr-4 text-gray-400 text-xl'>
										13 жовтня 2024, 12:14
									</p>
									<Heart className='text-gray-400  pt-1' />
									<p className='text-gray-400 text-xl  '> 0</p>
									<p className='text-gray-400 text-xl ml-2'> Лайків</p>
								</div>
								<img
									src='../img/BgErrorPage.jpg'
									className='w-auto h-90 rounded-md'
									alt=''
								/>

								<div className='my-3  '>
									<p className='text-sm mt-4'>
										У фіналі престижного турніру IEM Rio 2024 команди Natus
										Vincere та MOUZ готові битися у форматі BO5. Цей матч обіцяє
										бути захоплюючим протистоянням між двома командами, які
										продемонстрували високий рівень гри на шляху до фіналу.
										Більше новин з кіберспорту в Telegram Sport.ua b1t (NAVI)
										має сильні показники у кілах на раунд (0.77) та загальний
										рейтинг 1.22, що робить його основним претендентом на
										домінування в матчі. jimpphat (MOUZ) також демонструє високу
										ефективність з рейтингом 1.18 та середньою шкодою 78.9 на
										раунд. Статистика карт: NAVI має перевагу на картах Mirage
										(87%), Ancient (79%) та Dust2 (83%). MOUZ показує сильні
										результати на Inferno (71%) та Nuke (57%). Матч обіцяє бути
										напруженим з урахуванням таких різних переваг на різних
										картах. Фанати обох команд чекають, хто ж з них підніме
										трофей.
									</p>
								</div>
							</div>
						</div>
					</main>
					<aside className='mr-4 my-5 w-[25%] rounded-xl  '>
						<h3 className='font-bold my-5'>Останні новини</h3>
						<div className=''>
							<div className='flex'>
								<Link to='#' className='text-xs'>
									CS2
								</Link>
								<span class='ml-3 w-px h-4 bg-gray-400 mr-4 '></span>
								<p className='mr-4 text-gray-400 text-xs'>
									13 жовтня 2024, 12:14
								</p>
							</div>
							<div className=' '>
								<Link className='text-base  underline'>
									NAVI – MOUZ. Фінал IEM Rio. Дивитись онлайн. LIVE трансляція
								</Link>
							</div>
						</div>
					</aside>
				</div>
				<Footer />
			</div>
		</>
	)
}
