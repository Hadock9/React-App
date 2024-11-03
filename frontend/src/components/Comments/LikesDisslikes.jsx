import { ThumbsDown, ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import {
	DeleteStatus,
	updateLikesDislikes,
	updateUser_likes_dislikes,
} from '../../js/updateLikesDislikes.js'

const LikesDisslikes = ({ OneComment }) => {
	const { user } = useAuth()
	const [likes, setLikes] = useState(OneComment.likes)
	const [dislikes, setDislikes] = useState(OneComment.dislikes)
	const [onlikes, setOnlikes] = useState(OneComment.onlikes)
	const [ondislikes, setOndislikes] = useState(OneComment.ondislikes)

	// Оновлення статусу лайків на сервері
	const updateLikes = async newLikes => {
		await updateLikesDislikes(OneComment.id, newLikes, 'like')
		await updateUser_likes_dislikes(OneComment.id, user.id, 'like')
	}

	// Оновлення статусу дизлайків на сервері
	const updateDislikes = async newDislikes => {
		await updateLikesDislikes(OneComment.id, newDislikes, 'dislike')
		await updateUser_likes_dislikes(OneComment.id, user.id, 'dislike')
	}

	// Обробка натискання на лайк
	const handleLikes = () => {
		if (onlikes) {
			// Якщо лайк вже поставлений, знімемо його
			setLikes(likes - 1)
			setOnlikes(false)
			updateLikes(likes - 1) // Оновлення на сервері
		} else {
			// Додамо лайк
			setLikes(likes + 1)
			setOnlikes(true)
			updateLikes(likes + 1) // Оновлення на сервері

			if (ondislikes) {
				// Якщо дизлайк поставлений, знімемо його
				setDislikes(dislikes - 1)
				setOndislikes(false)
				DeleteStatus(OneComment.id, user.id) // Викличемо видалення статусу дизлайка
				updateDislikes(dislikes - 1) // Оновлення на сервері
			}
		}
	}

	// Обробка натискання на дизлайк
	const handleDislikes = () => {
		if (ondislikes) {
			// Якщо дизлайк вже поставлений, знімемо його
			setDislikes(dislikes - 1)
			setOndislikes(false)
			updateDislikes(dislikes - 1) // Оновлення на сервері
		} else {
			// Додамо дизлайк
			setDislikes(dislikes + 1)
			setOndislikes(true)
			updateDislikes(dislikes + 1) // Оновлення на сервері

			if (onlikes) {
				// Якщо лайк поставлений, знімемо його
				setLikes(likes - 1)
				setOnlikes(false)
				DeleteStatus(OneComment.id, user.id) // Викличемо видалення статусу лайка
				updateLikes(likes - 1) // Оновлення на сервері
			}
		}
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
					<ThumbsDown className='ml-2 text-primary animate-pulse h-4 mt-[2px]' />
				) : (
					<ThumbsDown className='ml-2 text-gray-400 h-4 mt-[2px]' />
				)}
				{dislikes}
			</div>
		</div>
	)
}

export default LikesDisslikes
