import { MessageSquareMore } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NewsDate } from '../js/TimeValidation'

const NewsList = () => {
	const [News, SetNews] = useState([])
	const [failedToFetch, setFailedToFetch] = useState(false)

	useEffect(() => {
		fetch(`http://localhost:4000/api/news/news_list`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json() // Перетворюємо відповідь на JSON
			})
			.then(data => {
				SetNews(data)
				setFailedToFetch(false)
			})
			.catch(err => {
				console.error(err)
				setFailedToFetch(true) // Встановлюємо true, якщо сталася помилка
			})
	}, [])

	console.log(News)

	return (
		<>
			{failedToFetch ? (
				<p>Не вдалося завантажити новини. Спробуйте ще раз пізніше.</p>
			) : (
				News.map(OneNews => (
					<div className='flex   h-[120px] my-5' key={OneNews.id}>
						<img
							src={'/' + OneNews.image_url}
							className='w-auto h-32 rounded-md'
							alt=''
						/>

						<div className='ml-5'>
							<div className='flex'>
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
								<span className='ml-3 w-px h-4 bg-gray-400 mr-4'></span>
								<p className='mr-4 text-gray-400 text-xs'>
									{NewsDate(OneNews.publish_date)}
								</p>
								<MessageSquareMore className='text-gray-400  h-4  ' />
								<p className='text-gray-600 text-xs  '>{OneNews.messages}</p>
							</div>
							<div className='my-3'>
								<Link
									to={`${OneNews.gameName.replace(/[\s-]/g, '_')}?OneNews=${
										OneNews.id
									}`}
									className='text-base underline'
								>
									{OneNews.title}
								</Link>
								<p className='text-sm mt-4'>{OneNews.description}</p>
							</div>
						</div>
					</div>
				))
			)}
		</>
	)
}

export default NewsList
