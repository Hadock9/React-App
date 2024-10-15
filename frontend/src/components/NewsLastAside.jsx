import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NewsDate } from '../js/TimeValidation'

const NewsLastAside = () => {
	const [News, SetNews] = useState(null)
	const [failedToFetch, setFailedToFetch] = useState(false)

	useEffect(() => {
		fetch(`http://localhost:4000/api/news/news_last`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then(data => {
				if (data.length > 0) {
					SetNews(data)
				}
				setFailedToFetch(false)
			})
			.catch(err => {
				console.error(err)
				setFailedToFetch(true)
			})
	}, [])
	if (!News && !failedToFetch) {
		return <p>Завантаження...</p>
	}

	if (failedToFetch) {
		return <p>Не вдалося завантажити новину.</p>
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
