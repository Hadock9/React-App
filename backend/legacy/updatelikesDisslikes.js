exports.updateLikesDislikes = (req, res) => {
	const { commentId, userId, likes, action } = req.body

	const likesCheckQuery = `
        SELECT *
        FROM user_likes_dislikes
        WHERE user_id = ? AND comment_id = ? AND action = ?;
    `

	db.query(likesCheckQuery, [userId, commentId, action], (err, result) => {
		if (err) {
			return res.status(500).json({ error: 'Database error' })
		}

		// Якщо лайка або дизлайка  немає вставляємо новий лайк або дизлайк
		if (result.length === 0) {
			const updateLikesQuery = `
                UPDATE comments
                SET likes = ? 
                WHERE id = ?;
            `
			db.query(updateLikesQuery, [likes, commentId], (err, updateResult) => {
				if (err) {
					return res.status(500).json({ error: 'Database error' })
				}

				// Вставка нового лайка в таблицю user_likes_dislikes
				const insertLikeQuery = `
                    INSERT INTO user_likes_dislikes (user_id, comment_id, action, created_at) 
                    VALUES (?, ?, 'like', NOW());
                `
				db.query(insertLikeQuery, [userId, commentId], (err, insertResult) => {
					if (err) {
						return res.status(500).json({ error: 'Database error' })
					}
					return res.status(201).json({ id: insertResult.insertId })
				})
			})
		} else {
			// Якщо лайк вже є, оновлюємо лайки у таблиці comments
			const updateLikesQuery = `
                UPDATE comments
                SET likes = ? 
                WHERE id = ?;
            `
			db.query(updateLikesQuery, [likes, commentId], (err, updateResult) => {
				if (err) {
					return res.status(500).json({ error: 'Database error' })
				}

				// Видалення лише конкретного лайка користувача
				const deleteLikeQuery = `
                    DELETE FROM user_likes_dislikes 
                    WHERE user_id = ? AND comment_id = ? AND action = 'like';
                `
				db.query(deleteLikeQuery, [userId, commentId], (err, deleteResult) => {
					if (err) {
						console.error('Error deleting likes:', err)
						return res
							.status(500)
							.json({ error: 'Database error while deleting likes' })
					}

					if (deleteResult.affectedRows === 0) {
						return res
							.status(404)
							.json({ message: 'No likes found for this comment' })
					}

					return res
						.status(200)
						.json({ message: 'Likes deleted successfully', likes })
				})
			})
		}
	})
}
exports.updateDisLikes = (req, res) => {
	const { commentId, userId, dislikes } = req.body

	const dislikesCheckQuery = `
        SELECT *
        FROM user_likes_dislikes
        WHERE user_id = ? AND comment_id = ? ;
    `

	db.query(dislikesCheckQuery, [userId, commentId], (err, result) => {
		if (err) {
			return res.status(500).json({ error: 'Database error' })
		}

		// Якщо дизлайка ще немає, вставляємо новий дизлайк
		if (result.length === 0) {
			const updateDislikesQuery = `
                UPDATE comments
                SET dislikes = ? 
                WHERE id = ?;
            `
			db.query(
				updateDislikesQuery,
				[dislikes, commentId],
				(err, updateResult) => {
					if (err) {
						return res.status(500).json({ error: 'Database error' })
					}

					// Вставка нового дизлайка в таблицю user_likes_dislikes
					const insertDislikeQuery = `
                    INSERT INTO user_likes_dislikes (user_id, comment_id, action, created_at) 
                    VALUES (?, ?, 'dislike', NOW());
                `
					db.query(
						insertDislikeQuery,
						[userId, commentId],
						(err, insertResult) => {
							if (err) {
								return res.status(500).json({ error: 'Database error' })
							}
							return res.status(201).json({ id: insertResult.insertId })
						}
					)
				}
			)
		} else {
			// Якщо дизлайк вже є, оновлюємо дизлайки у таблиці comments
			const updateDislikesQuery = `
                UPDATE comments
                SET dislikes = ? 
                WHERE id = ?;
            `
			db.query(
				updateDislikesQuery,
				[dislikes, commentId],
				(err, updateResult) => {
					if (err) {
						return res.status(500).json({ error: 'Database error' })
					}

					// Видалення лише конкретного дизлайка користувача
					const deleteDislikeQuery = `
                    DELETE FROM user_likes_dislikes 
                    WHERE user_id = ? AND comment_id = ? AND action = 'dislike';
                `
					db.query(
						deleteDislikeQuery,
						[userId, commentId],
						(err, deleteResult) => {
							if (err) {
								console.error('Error deleting dislikes:', err)
								return res
									.status(500)
									.json({ error: 'Database error while deleting dislikes' })
							}

							if (deleteResult.affectedRows === 0) {
								return res
									.status(404)
									.json({ message: 'No dislikes found for this comment' })
							}

							return res
								.status(200)
								.json({ message: 'Dislikes deleted successfully', dislikes })
						}
					)
				}
			)
		}
	})
}
