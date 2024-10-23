export const updateLikesDislikes = async (commentId, Value, action) => {
	try {
		const response = await fetch(
			`http://localhost:4000/api/comments/news_comments/updateLikesDislikes`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					commentId: commentId,
					Value,
					action: action,
				}),
			}
		)

		if (!response.ok) {
			throw new Error('Не вдалося оновити лайки/дизлайки на сервері')
		}

		const result = await response.json()
		console.log(result)
	} catch (error) {
		console.error('Помилка при оновленні лайків/дизлайків:', error)
	}
}
export const updateUser_likes_dislikes = async (commentId, userId, action) => {
	try {
		const response = await fetch(
			`http://localhost:4000/api/comments/news_comments/updateUser_likes_dislikes`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					commentId: commentId,
					userId: userId,
					action: action,
				}),
			}
		)

		if (!response.ok) {
			throw new Error('Не вдалося оновити лайки/дизлайки на сервері')
		}

		const result = await response.json()
		console.log(result)
	} catch (error) {
		console.error('Помилка при оновленні лайків/дизлайків:', error)
	}
}

export const DeleteStatus = async (commentId, userId) => {
	try {
		const response = await fetch(
			`http://localhost:4000/api/comments/news_comments/DeleteStatus?commentId=${commentId}&userId=${userId}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					commentId: commentId,
					userId: userId,
				}),
			}
		)

		if (!response.ok) {
			throw new Error('Не вдалося оновити лайки/дизлайки на сервері')
		}

		// Отримайте відповідь, щоб підтвердити оновлення, якщо потрібно
		const result = await response.json()
		console.log(result)
	} catch (error) {
		console.error('Помилка при видаленні статусу лайків/дизлайків:', error)
	}
}
