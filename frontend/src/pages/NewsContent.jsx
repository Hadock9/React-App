import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

import { Eye } from 'lucide-react'
import Comments from '../components/Comments'
import MyLoader from '../components/Loader'
import NewsLastAside from '../components/NewsLastAside'
import NewsPopAside from '../components/NewsPopAside'
import { useAuth } from '../context/AuthContext'
import useFetchGet from '../hooks/fetch/useFetchGet'
import { NewsDate } from '../js/TimeValidation'
import rootstyle from '../styles/root.module.css'

export function NewsContent() {
	const [OneNews, SetOneNews] = useState(null)
	const { user } = useAuth()

	const [searchParams] = useSearchParams()
	const id = searchParams.get('OneNews')
	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/news/news_list',
		id: id,
	})

	useEffect(() => {
		if (Data) {
			SetOneNews(Data[0])
		}
	}, [Data])

	useEffect(() => {
		const addViews = async () => {
			if (!OneNews?.id || !user?.id) {
				console.log('Новина або користувач не визначені')
				return
			}

			try {
				const response = await fetch(
					'http://localhost:4000/api/news/addNews_views',
					{
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							news_id: OneNews.id,
							user_id: user.id,
							news_views: OneNews.views,
						}),
					}
				)

				if (response.ok) {
					console.log('Перегляд вставлений успішно')
					navigate(0) // Перезавантажити сторінку
				} else {
					const errorData = await response.json()
					console.log('Помилка:', errorData)
				}
			} catch (error) {
				console.log('Помилка запиту:', error)
			}
		}

		if (user && OneNews) {
			addViews()
		}
	}, [user, OneNews])

	// Перевірка на існування OneNews перед тим, як намагатися отримати контент
	if (!OneNews && !failedToFetch) {
		return <MyLoader />
	}

	if (failedToFetch) {
		return <p>Не вдалося завантажити новину.</p>
	}

	// Перевірка на наявність контенту перед парсингом
	const parsedContent = OneNews?.content ? JSON.parse(OneNews.content) : null

	return (
		<>
			<div className={rootstyle.wrapper}>
				<NavBar />
				<UkrainianWar />
				<div className={rootstyle.Container}>
					<BurgerMenu />

					<main className={rootstyle.Main}>
						{/* News block */}
						<div className='News my-5 ml-5 mr-24'>
							<div className=' '>
								<p className='text-[28px] font-sans underline'>
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
									<Eye className='text-gray-400 h-4 ' />
									<p className='text-gray-600 text-xs'>{OneNews.views}</p>
								</div>
								<div>
									<img
										src={OneNews.image_url}
										className='w-[100%] rounded-md'
										alt='зображення'
									/>
								</div>
								<div className='my-3'>
									<div className='news-details'>
										<h2 className='text-xl font-bold'>Деталі новини</h2>
										{parsedContent && parsedContent.questions.length > 0 ? (
											parsedContent.questions.map((item, index) => (
												<div key={index} className='question-answer mb-4'>
													<p className='text-lg font-sans text-justify font-bold'>
														{item.question}
													</p>
													<p className='text-lg text-justify font-sans'>
														{item.answer}
													</p>
												</div>
											))
										) : (
											<p>Немає даних для відображення.</p>
										)}
									</div>
									<Comments
										id={id}
										urlFetch={
											'http://localhost:4000/api/comments/news_comments'
										}
										urlPost={
											'http://localhost:4000/api/comments/news_comments/comment'
										}
									/>
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
