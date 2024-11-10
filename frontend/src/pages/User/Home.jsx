import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BurgerMenu from '../../components/BurgerMenu'
import { UkrainianWar } from '../../components/UserExpirience/BlockSaveUkraine'
import MyCarousel from '../../components/UserExpirience/Carousel'
import Footer from '../../components/UserExpirience/Footer'
import { MotionFireLogo } from '../../components/UserExpirience/MotionFireLogo'
import NavBar from '../../components/UserExpirience/NavBar'
import useFetchGet from '../../hooks/useFetchGet'
import rootstyle from '../../styles/root.module.css'

export function Home() {
	const heroTextAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	const heroImageAnimation = {
		hidden: {
			x: 100,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	const infoAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	}

	const [games, setGames] = useState([])
	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/games/Games_List',
	})
	useEffect(() => {
		setGames(Data)
	}, [Data])

	return (
		<div className={rootstyle.wrapper}>
			<NavBar />
			<UkrainianWar />
			<div className={rootstyle.Container}>
				<BurgerMenu />
				<main className={rootstyle.Main}>
					<motion.section
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						className='flex flex-col-reverse md:flex-row items-center bg-gray-100 py-16 px-6 md:px-12'
					>
						<motion.div
							variants={heroTextAnimation}
							className='md:w-1/2 flex flex-col items-start text-left'
						>
							<h1 className='text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4'>
								Вітаю на нашому сайті зі ставками на кіберспорт
							</h1>
							<p className='text-gray-600 text-lg mb-6'>
								Досліджуйте можливості нашого сервісу, які зможуть допомогти вам
								досягнути вашої цілі, легко та ефективно. Починайте подорож у
								кіберспорт вже сьогодні.
							</p>
							<Link
								to='/Games'
								className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300'
							>
								Почати
							</Link>
						</motion.div>
						<motion.div
							variants={heroImageAnimation}
							className='md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0'
						>
							<MotionFireLogo />
						</motion.div>
					</motion.section>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						className='flex flex-col items-center justify-center bg-gray-100 px-6 py-12'
					>
						<div className='w-16 h-1 bg-blue-600 rounded mb-8'></div>
						<div className='text-center max-w-2xl'>
							<motion.p
								custom={1}
								variants={infoAnimation}
								className='text-2xl font-bold text-gray-800 mb-4'
							>
								Що ми пропонуємо
							</motion.p>
							<motion.p
								custom={2}
								variants={infoAnimation}
								className='text-lg text-gray-700 leading-relaxed'
							>
								Ми пропонуємо вам унікальні можливості для ставок на
								найпопулярніші кіберспортивні події. Наш сервіс забезпечує
								найвищий рівень безпеки та зручності, щоб ви могли зосередитися
								на підтримці улюблених команд та гравців. Спробуйте себе у світі
								кіберспорту разом з нами!
							</motion.p>
						</div>
					</motion.div>
					<MyCarousel Array={games} />
				</main>
			</div>
			<Footer />
		</div>
	)
}
