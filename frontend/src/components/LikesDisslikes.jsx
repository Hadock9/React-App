import { ThumbsDown, ThumbsUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const LikesDisslikes = ({ OneComment }) => {
	const [likes, setLikes] = useState(OneComment.likes)
	const [dislikes, setDislikes] = useState(OneComment.dislikes)

	const [onlikes, setOnlikes] = useState(false)
	const [ondislikes, setOndislikes] = useState(false)

	useEffect(() => {
		const updateLikesDislikes = async () => {
			try {
				const response = await fetch(
					`http://localhost:4000/api/comments/news_comments/updateLikesDislikes`,
					{
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							commentId: OneComment.id,
							likes,
							dislikes,
						}),
					}
				)
				if (!response.ok) {
					throw new Error('Не вдалося оновити лайки/дизлайки на сервері')
				}
			} catch (error) {
				console.error('Помилка при оновленні лайків/дизлайків:', error)
			}
		}

		updateLikesDislikes()
	}, [likes, dislikes])

	const handleLikes = () => {
		if (onlikes) {
			setLikes(likes - 1) // Віднімемо лайк  якщо вже поставлено
		} else {
			setLikes(likes + 1) // Додамо лайк
			if (ondislikes) {
				setDislikes(dislikes - 1) // Якщо дизлайк поставлений знімемо його
				setOndislikes(false)
			}
		}
		setOnlikes(!onlikes) // Перемикаємо стан лайків
	}

	const handleDislikes = () => {
		if (ondislikes) {
			setDislikes(dislikes - 1) // Віднімемо дизлайк, якщо вже поставлено
		} else {
			setDislikes(dislikes + 1) // Додамо дизлайк
			if (onlikes) {
				setLikes(likes - 1) // Якщо лайк поставлений, знімемо його
				setOnlikes(false)
			}
		}
		setOndislikes(!ondislikes) // Перемикаємо стан дизлайків
	}
	return (
		<div className='likes-dislikes flex mt-2 '>
			<div
				onClick={handleLikes}
				className='flex no-select select-none cursor-pointer'
			>
				{onlikes ? (
					<ThumbsUp className='ml-2 text-gray-700 animate-pulse  h-4 mt-[2px]' />
				) : (
					<ThumbsUp className='ml-2 text-gray-400    h-4 mt-[2px]' />
				)}

				{likes}
			</div>
			<div
				onClick={handleDislikes}
				className=' ml-3 flex select-none cursor-pointer '
			>
				{ondislikes ? (
					<ThumbsDown className='ml-2 text-gray-700 animate-pulse   h-4 mt-[2px]' />
				) : (
					<ThumbsDown className='ml-2 text-gray-400    h-4 mt-[2px]' />
				)}
				{dislikes}
			</div>
		</div>
	)
}

export default LikesDisslikes
