import { MessageSquareMore } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

import Comments from '../components/Comments'
import NewsLastAside from '../components/NewsLastAside'
import NewsPopAside from '../components/NewsPopAside'
import { NewsDate } from '../js/TimeValidation'
import rootstyle from '../styles/root.module.css'

export function NewsContent() {
	const [OneNews, SetOneNews] = useState(null)
	const [failedToFetch, setFailedToFetch] = useState(false)

	const [searchParams] = useSearchParams()
	const id = searchParams.get('OneNews')

	useEffect(() => {
		fetch(`http://localhost:4000/api/news/news_list/${id}`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then(data => {
				if (data.length > 0) {
					SetOneNews(data[0])
				}
				setFailedToFetch(false)
			})
			.catch(err => {
				console.error(err)
				setFailedToFetch(true)
			})
	}, [id])

	// Якщо новини немає, показуємо повідомлення про помилку
	if (!OneNews && !failedToFetch) {
		return <p>Завантаження...</p>
	}

	if (failedToFetch) {
		return <p>Не вдалося завантажити новину.</p>
	}
	const parsedContent = JSON.parse(OneNews.content)
	return (
		<>
			<div className={rootstyle.wrapper}>
				<NavBar />
				<UkrainianWar />
				<div className={rootstyle.Container}>
					<BurgerMenu />

					<main className={rootstyle.Main}>
						{/* News block */}
						<div className='News my-5 ml-5'>
							<div className=' '>
								<p className='text-[28px] font-sans  underline'>
									{OneNews.title}
								</p>
								<div className='flex my-4'>
									<Link to='#' className='text-sm'>
										{OneNews.gameName}
									</Link>
									<span className='ml-3 w-px h-5 bg-gray-400 mr-4 '></span>
									<p className='mr-4 text-gray-400 text-sm'>
										{NewsDate(OneNews.publish_date)}
									</p>
									<MessageSquareMore className='text-gray-400  h-4  ' />
									<p className='text-gray-600 text-xs  '>{OneNews.likes}</p>
								</div>
								<img
									src={'/' + OneNews.image_url}
									className='w-[80%]  rounded-md'
									alt='Новинне зображення'
								/>

								<div className='my-3'>
									<div className='news-details'>
										<h2 className='text-xl  font-bold'>Деталі новини</h2>
										{parsedContent && parsedContent.questions.length > 0 ? (
											parsedContent.questions.map((item, index) => (
												<div key={index} className='question-answer mb-4'>
													<p className='text-lg font-sans  font-bold'>
														{item.question}
													</p>
													<p className='text-lg font-sans'>{item.answer}</p>
												</div>
											))
										) : (
											<p>Немає даних для відображення.</p>
										)}
									</div>
									<Comments id={id} />
								</div>
							</div>
						</div>
					</main>
					<aside className='w-[25%]'>
						<NewsLastAside />
						<NewsPopAside />
					</aside>
				</div>
				<Footer />
			</div>
		</>
	)
}
