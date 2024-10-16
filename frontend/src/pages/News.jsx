import { Link } from 'react-router-dom'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

import rootstyle from '../styles/root.module.css'

export function News() {
	return (
		<>
			<div className={rootstyle.wrapper}>
				<NavBar />
				<UkrainianWar />
				<div className={rootstyle.Container}>
					<BurgerMenu />

					<main className={rootstyle.Main}>
						<h3 className='font-bold my-5'>Новини кіберспорту по рубриках</h3>
						<div className='flex font-medium'>
							<span class='w-px h-5 bg-gray-400 mr-4'></span>
							<Link className='mr-4'>CS2</Link>
							<span class='w-px h-5 bg-gray-400 mr-4'></span>
							<Link className='mr-4'>Dota 2</Link>
							<span class='w-px h-5 bg-gray-400 mr-4'></span>
							<Link className='mr-4'>EA Sports FC</Link>
							<span class='w-px h-5 bg-gray-400 mr-4'></span>
							<Link className='mr-4'> Інші новини</Link>
						</div>
						{/* News block*/}
						<div className='flex w-[80%] h-[120px] my-5'>
							<img
								src='../img/BgErrorPage.jpg'
								className='w-auto h-32 rounded-md'
								alt=''
							/>

							<div className='ml-5'>
								<div className='flex'>
									<Link to='#' className='text-xs'>
										CS2
									</Link>
									<span class='ml-3 w-px h-4 bg-gray-400 mr-4 '></span>
									<p className='mr-4 text-gray-400 text-xs'>
										13 жовтня 2024, 12:14
									</p>
								</div>
								<div className='my-3  '>
									<Link to='Content' className='text-base   underline'>
										NAVI – MOUZ. Фінал IEM Rio. Дивитись онлайн. LIVE трансляція
									</Link>
									<p className='text-sm mt-4'>
										Дивіться початок матчу 13 жовтня о 17:45 за київським часом
									</p>
								</div>
							</div>
						</div>
						<div className='flex w-[80%] h-[120px] my-5'>
							<img
								src='../img/BgErrorPage.jpg'
								className='w-auto h-32 rounded-md'
								alt=''
							/>

							<div className='ml-5'>
								<div className='flex'>
									<Link to='#' className='text-xs'>
										CS2
									</Link>
									<span class='ml-3 w-px h-4 bg-gray-400 mr-4 '></span>
									<p className='mr-4 text-gray-400 text-xs'>
										13 жовтня 2024, 12:14
									</p>
								</div>
								<div className='my-3  '>
									<Link to='Content' className='text-base   underline'>
										NAVI – MOUZ. Фінал IEM Rio. Дивитись онлайн. LIVE трансляція
									</Link>
									<p className='text-sm mt-4'>
										Дивіться початок матчу 13 жовтня о 17:45 за київським часом
									</p>
								</div>
							</div>
						</div>
						<div className='flex w-[80%] h-[120px] my-5'>
							<img
								src='../img/BgErrorPage.jpg'
								className='w-auto h-32 rounded-md'
								alt=''
							/>

							<div className='ml-5'>
								<div className='flex'>
									<Link to='#' className='text-xs'>
										CS2
									</Link>
									<span class='ml-3 w-px h-4 bg-gray-400 mr-4 '></span>
									<p className='mr-4 text-gray-400 text-xs'>
										13 жовтня 2024, 12:14
									</p>
								</div>
								<div className='my-3  '>
									<Link to='Content' className='text-base   underline'>
										NAVI – MOUZ. Фінал IEM Rio. Дивитись онлайн. LIVE трансляція
									</Link>
									<p className='text-sm mt-4'>
										Дивіться початок матчу 13 жовтня о 17:45 за київським часом
									</p>
								</div>
							</div>
						</div>
						<div className='flex w-[80%] h-[120px] my-5'>
							<img
								src='../img/BgErrorPage.jpg'
								className='w-auto h-32 rounded-md'
								alt=''
							/>

							<div className='ml-5'>
								<div className='flex'>
									<Link to='#' className='text-xs'>
										CS2
									</Link>
									<span class='ml-3 w-px h-4 bg-gray-400 mr-4 '></span>
									<p className='mr-4 text-gray-400 text-xs'>
										13 жовтня 2024, 12:14
									</p>
								</div>
								<div className='my-3  '>
									<Link to='Content' className='text-base   underline'>
										NAVI – MOUZ. Фінал IEM Rio. Дивитись онлайн. LIVE трансляція
									</Link>
									<p className='text-sm mt-4'>
										Дивіться початок матчу 13 жовтня о 17:45 за київським часом
									</p>
								</div>
							</div>
						</div>
						<div className='flex w-[80%] h-[120px] my-5'>
							<img
								src='../img/BgErrorPage.jpg'
								className='w-auto h-32 rounded-md'
								alt=''
							/>

							<div className='ml-5'>
								<div className='flex'>
									<Link to='#' className='text-xs'>
										CS2
									</Link>
									<span class='ml-3 w-px h-4 bg-gray-400 mr-4 '></span>
									<p className='mr-4 text-gray-400 text-xs'>
										13 жовтня 2024, 12:14
									</p>
								</div>
								<div className='my-3  '>
									<Link to='Content' className='text-base   underline'>
										NAVI – MOUZ. Фінал IEM Rio. Дивитись онлайн. LIVE трансляція
									</Link>
									<p className='text-sm mt-4'>
										Дивіться початок матчу 13 жовтня о 17:45 за київським часом
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
