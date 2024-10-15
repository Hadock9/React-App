import { ThumbsDown, ThumbsUp, UserRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NewsDate } from '../js/TimeValidation'

const Comments = ({ id }) => {
	const [Comments, SetComments] = useState([])
	const [failedToFetch, setFailedToFetch] = useState(false)
	useEffect(() => {
		fetch(`http://localhost:4000/api/comments/news_comments/${id}`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then(data => {
				SetComments(data)

				setFailedToFetch(false)
			})
			.catch(err => {
				console.error(err)
				setFailedToFetch(true)
			})
	}, [id])

	// Якщо Comments немає, показуємо повідомлення про помилку
	if (!Comments && !failedToFetch) {
		return <p>Завантаження...</p>
	}

	if (failedToFetch) {
		return <p>Не вдалося завантажити новину.</p>
	}

	return (
		<div className='Comments'>
			<div className='flex'>
				<h1 className='text-xl text-black font-semibold'>
					Коментарі {Comments.comment_count}
				</h1>
			</div>
			{Comments.map(OneComment => (
				<div className='comment-block flex  my-3 w-[80] ' key={OneComment.id}>
					{console.log(OneComment)}
					<div className='w-[10%] flex justify-center   items-center'>
						<UserRound className='w-[70%] h-[50%] ' />
					</div>
					<div>
						<div className='flex justify-start items-center h-auto'>
							<p className='text-lg text-black font-semibold'>
								{OneComment.author}
							</p>
							<p className='ml-3 text-gray-400'>
								{NewsDate(OneComment.publish_date)}
							</p>
						</div>
						<div className='Content mt-2'>
							<p>{OneComment.content}</p>
						</div>
						<div className='likes-dislikes flex mt-2'>
							<div className='flex      '>
								<ThumbsUp className='ml-2 text-gray-400   h-4 mt-[2px]' />
								{OneComment.likes}
							</div>
							<div className='flex '>
								<ThumbsDown className='ml-2 text-gray-400  h-4 mt-1' />
								{OneComment.dislikes}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Comments
