import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import useFetchGet from '../../hooks/useFetchGet'
import { NewsDate } from '../../js/TimeValidation'
import MyLoader from '../Disclaimer/Loader'

const NewsList = ({ value }) => {
	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/news/news_list',
	})

	const filterNews = Data.filter(News => {
		return News.title.toLowerCase().includes(value.toLowerCase())
	})

	if (isLoading) {
		return <MyLoader />
	}

	const Variants = {
		hidden: { opacity: 0, x: -50 },
		show: { opacity: 1, x: 0 },
	}

	return (
		<>
			{failedToFetch ? (
				<p>Не вдалося завантажити новини. Спробуйте ще раз пізніше.</p>
			) : (
				filterNews.map(OneNews => (
					<motion.div
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						variants={Variants}
						className='flex flex-wrap h-auto my-5'
						key={OneNews.id}
					>
						<Link
							to={`${OneNews.gameName.replace(/[\s-]/g, '_')}?OneNews=${
								OneNews.id
							}`}
						>
							<img
								src={OneNews.image_url}
								className='w-[210px] h-32 rounded-md md:w-[400px] md:h-[260px] w-[300px] h-[200px]'
								alt=''
							/>
						</Link>

						<div className='ml-5 mt-3 md:mt-0 md:ml-5'>
							<div className='flex flex-wrap items-center'>
								{OneNews.gameName}
								<span className='ml-3 w-px h-4 bg-gray-400 mr-4'></span>
								<p className='mr-4 text-gray-400 text-xs sm:text-sm'>
									{NewsDate(OneNews.publish_date)}
								</p>
								<Eye className='text-gray-400 h-4 sm:h-5' />
								<p className='text-gray-600 text-xs sm:text-sm'>{OneNews.views}</p>
							</div>
							<Link
								to={`${OneNews.gameName.replace(/[\s-]/g, '_')}?OneNews=${
									OneNews.id
								}`}
							>
								<div className='my-3'>
									<div className='text-xl font-bold md:text-2xl '>{OneNews.title}</div>

									<p className='text-sm mt-4 sm:text-base'>{OneNews.description}</p>
								</div>
							</Link>
						</div>
					</motion.div>
				))
			)}
		</>
	)
}

export default NewsList
