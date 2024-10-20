export const updateLikes = async (commentId, userId, likes) => {
	try {
		const response = await fetch(
			`http://localhost:4000/api/comments/news_comments/updateLikes`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					commentId: commentId,
					userId: userId,
					likes,
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
		console.error('Помилка при оновленні лайків/дизлайків:', error)
	}
}

export const updateDisLikes = async (commentId, userId, dislikes) => {
	try {
		const response = await fetch(
			`http://localhost:4000/api/comments/news_comments/updateDisLikes`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					commentId: commentId,
					userId: userId,
					dislikes,
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
		console.error('Помилка при оновленні лайків/дизлайків:', error)
	}
}
