import { ThumbsDown, ThumbsUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { fetchCommentAction } from '../js/fetchCommentAction.js'
import { updateDisLikes, updateLikes } from '../js/updateLikesDislikes.js'
const LikesDisslikes = ({ OneComment }) => {
	const { user } = useAuth()
	const [likes, setLikes] = useState(OneComment.likes)
	const [dislikes, setDislikes] = useState(OneComment.dislikes)
	const [onlikes, setOnlikes] = useState(false)
	const [ondislikes, setOndislikes] = useState(false)
	const [onUpdateLikes, setOnUpdateLikes] = useState(false)
	const [onUpdateDisLikes, setOnUpdateDisLikes] = useState(false)
	useEffect(() => {
		// Функція для отримання стану лайків
		fetchCommentAction(OneComment.id, user.id, 'like').then(likeExists =>
			setOnlikes(likeExists)
		)
		// Функція для отримання стану дизлайків
		fetchCommentAction(OneComment.id, user.id, 'dislike').then(dislikeExists =>
			setOndislikes(dislikeExists)
		)
	}, []) // Викликаємо fetchCommentAction 1 раз

	// Оновлення лайків на сервері

	useEffect(() => {
		if (onUpdateLikes) {
			updateLikes(OneComment.id, user.id, likes)
			setOnUpdateLikes(false) // Скидаємо onUpdate після оновлення
		}
	}, [onUpdateLikes])

	useEffect(() => {
		if (onUpdateDisLikes) {
			updateDisLikes(OneComment.id, user.id, dislikes)
			setOnUpdateDisLikes(false) // Скидаємо onUpdate після оновлення
		}
	}, [onUpdateDisLikes])

	// Обробка натискання на лайк
	const handleLikes = () => {
		if (ondislikes) {
			return
		}
		if (onlikes) {
			setLikes(likes - 1) // Віднімемо лайк, якщо вже поставлено
			setOnlikes(false)
		} else {
			setLikes(likes + 1) // Додамо лайк
			setOnlikes(true)
			if (ondislikes) {
				setDislikes(dislikes - 1) // Якщо дизлайк поставлений, знімемо його
				setOndislikes(false)
				setOnUpdateDisLikes(true)
			}
		}
		setOnUpdateLikes(true)
	}

	// Обробка натискання на дизлайк
	const handleDislikes = () => {
		if (onlikes) {
			return
		}
		if (ondislikes) {
			setDislikes(dislikes - 1) // Віднімемо дизлайк, якщо вже поставлено
			setOndislikes(false)
		} else {
			setDislikes(dislikes + 1) // Додамо дизлайк
			setOndislikes(true)
			if (onlikes) {
				setLikes(likes - 1) // Якщо лайк поставлений, знімемо його
				setOnlikes(false)
				setOnUpdateLikes(true)
			}
		}
		// Оновлюємо лайки на сервері
		setOnUpdateDisLikes(true) // Додано оновлення тут
	}

	return (
		<div className='likes-dislikes flex mt-2'>
			<div
				onClick={handleLikes}
				className='flex no-select select-none cursor-pointer'
			>
				{onlikes ? (
					<ThumbsUp className='ml-2 text-green-700 animate-pulse h-4 mt-[2px]' />
				) : (
					<ThumbsUp className='ml-2 text-gray-400 h-4 mt-[2px]' />
				)}
				{likes}
			</div>
			<div
				onClick={handleDislikes}
				className='ml-3 flex select-none cursor-pointer'
			>
				{ondislikes ? (
					<ThumbsDown className='ml-2 text-red-700 animate-pulse h-4 mt-[2px]' />
				) : (
					<ThumbsDown className='ml-2 text-gray-400 h-4 mt-[2px]' />
				)}
				{dislikes}
			</div>
		</div>
	)
}

export default LikesDisslikes
