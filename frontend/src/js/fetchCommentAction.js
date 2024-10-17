export const fetchCommentAction = async (commentId, userId, type) => {
	const response = await fetch(
		`http://localhost:4000/api/comments/news_comments/${commentId}/${userId}/${type}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)

	if (!response.ok) {
		return false
	}

	const data = await response.json()
	// Встановлюємо onlikes в true, якщо лайк активний
	if (data && data.length > 0) {
		return true
	} else {
		return false
	}
}
