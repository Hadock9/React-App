import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchGet from '../hooks/fetch/useFetchGet'
import { NewsDate } from '../js/TimeValidation'
import MyLoader from './Loader'

const NewsLastAside = () => {
	const [News, SetNews] = useState(null)

	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/news/news_last',
	})

	useEffect(() => {
		if (Data) {
			SetNews(Data)
		}
	}, [Data])

	if (!News && !failedToFetch) {
		return <MyLoader />
	}

	return (
		<div className='mr-4 my-5   rounded-xl'>
			<h3 className='font-bold my-5 text-xl'>Останні новини</h3>
			{News.map(OneNews => (
				<div className='my-6' key={OneNews.id}>
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
						<Link className='text-base underline'>{OneNews.title}</Link>
					</div>
				</div>
			))}
		</div>
	)
}

export default NewsLastAside
