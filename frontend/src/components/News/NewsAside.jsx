import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchGet from '../../hooks/useFetchGet'
import { NewsDate } from '../../js/TimeValidation'
import MyLoader from '../Disclaimer/Loader'

const NewsAside = ({ url, title }) => {
	const [News, SetNews] = useState(null)

	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: url,
	})

	useEffect(() => {
		if (Data) {
			SetNews(Data)
		}
	}, [Data])

	if (!News && !failedToFetch) {
		return <MyLoader />
	}
	const Variants = {
		hidden: { opacity: 0, x: 50 },
		show: { opacity: 1, x: 0 },
	}
	return (
		<div className='mr-4 my-5   rounded-xl'>
			<h3 className='font-bold my-5 text-lg'>{title}</h3>
			{News.map(OneNews => (
				<motion.div
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					variants={Variants}
					key={OneNews.id}
					className='my-6'
				>
					<div className='flex '>
						<Link
							to={
								'/Home/' +
								OneNews.gameName.replaceAll(' ', '_').replaceAll('-', '_') +
								`/Matches?game_id=${OneNews.gameId}`
							}
							className='text-xs'
						>
							{OneNews.gameName}
						</Link>
						<span className='ml-3 w-px h-4 bg-gray-400 mr-4 '></span>
						<p className='mr-4 text-gray-400 text-xs'>
							{NewsDate(OneNews.publish_date)}
						</p>
					</div>
					<div>
						<Link
							to={`/News/${OneNews.gameName.replace(/[\s-]/g, '_')}?OneNews=${
								OneNews.id
							}`}
							className='text-base underline'
						>
							{OneNews.title}
						</Link>
					</div>
				</motion.div>
			))}
		</div>
	)
}

export default NewsAside
