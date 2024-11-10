const db = require('../db.js')

exports.getNews_comments = (req, res) => {
	const sql = `SELECT c.*, 
       uld.action AS likedOrDisliked, 
       u.first_name AS author, 
       u.picture AS picture
				FROM comments c
				LEFT JOIN user_likes_dislikes uld 
							ON c.id = uld.comment_id 
							AND uld.user_id = ?
				JOIN users u 
							ON c.user_id = u.id
				WHERE c.news_id = ?;`
	db.query(sql, [req.params.user_id, req.params.id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}

exports.Create_comment = (req, res) => {
	const { id, content, user_id } = req.body

	const sql =
		'INSERT INTO comments (user_id, content,  news_id, publish_date) VALUES (?, ?, ?, NOW())'

	db.query(sql, [user_id, content, id], (err, result) => {
		if (err) {
			console.error('Error inserting user:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		return res.status(201).json({ id: result.insertId })
	})
}

exports.Delete_comment = (req, res) => {
	const { commentId } = req.body

	const sql = 'DELETE FROM comments WHERE id = ?'

	db.query(sql, [commentId], (err, result) => {
		if (err) {
			console.error('Error inserting user:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		return res.status(201).json({ commentId: result.deleteResult })
	})
}
exports.update_comment = (req, res) => {
	const { commentId, content } = req.body

	const sql = 'UPDATE comments SET content = ? WHERE id = ?'

	db.query(sql, [content, commentId], (err, result) => {
		if (err) {
			console.error('Error inserting user:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		return res.status(201).json({ id: result.insertId })
	})
}
exports.DeleteStatus = (req, res) => {
	const { commentId, userId } = req.query

	if (!commentId || !userId) {
		return res.status(400).json({ error: 'Missing required parameters' })
	}

	const deleteStatusQuery = `
		DELETE FROM user_likes_dislikes 
		WHERE comment_id = ? AND user_id = ?;
	`

	db.query(deleteStatusQuery, [commentId, userId], (err, result) => {
		if (err) {
			return res.status(500).json({ error: 'Database error' })
		}

		if (result.affectedRows === 0) {
			return res.status(404).json({ message: 'No record found to delete' })
		}

		return res.status(200).json({ message: 'Status deleted successfully' })
	})
}

exports.updateLikesDislikesCount = (req, res) => {
	const { commentId, Value, action } = req.body

	if (action === 'like') {
		const updateLikesQuery = `
			UPDATE comments
			SET likes = ? 
			WHERE id = ?;
		`
		db.query(updateLikesQuery, [Value, commentId], (err, updateResult) => {
			if (err) {
				return res.status(500).json({ error: 'Database error' })
			} else {
				return res.status(200).json({ message: 'Likes updated' })
			}
		})
	} else if (action === 'dislike') {
		const updatedislikesQuery = `
			UPDATE comments
			SET dislikes = ? 
			WHERE id = ?;
		`
		db.query(updatedislikesQuery, [Value, commentId], (err, updateResult) => {
			if (err) {
				return res.status(500).json({ error: 'Database error' })
			} else {
				return res.status(200).json({ message: 'Dislikes updated' })
			}
		})
	}
}

exports.updateUser_likes_dislikes = (req, res) => {
	const { commentId, userId, action } = req.body

	// Перевіряєм чи є запис про лайки/дизлайки в таблиці
	const checkQuery = `
		SELECT *
		FROM user_likes_dislikes
		WHERE user_id = ? AND comment_id = ?;
	`

	db.query(checkQuery, [userId, commentId], (err, result) => {
		if (err) {
			return res.status(500).json({ error: 'Database error' })
		}

		// Якщо запису немає, вставляємо новий лайк або дизлайк
		if (result.length === 0) {
			const insertQuery = `
				INSERT INTO user_likes_dislikes (user_id, comment_id, action, created_at) 
				VALUES (?, ?, ?, NOW());
			`
			db.query(
				insertQuery,
				[userId, commentId, action],
				(err, insertResult) => {
					if (err) {
						return res.status(500).json({ error: 'Database error' })
					}
					return res.status(201).json({ id: insertResult.insertId })
				}
			)
		} else {
			// Якщо запис є, видаляємо існуючий лайк або дизлайк
			const deleteQuery = `
				DELETE FROM user_likes_dislikes 
				WHERE user_id = ? AND comment_id = ? AND action = ?;
			`
			db.query(
				deleteQuery,
				[userId, commentId, action],
				(err, deleteResult) => {
					if (err) {
						return res
							.status(500)
							.json({ error: 'Database error while deleting' })
					}

					if (deleteResult.affectedRows === 0) {
						return res.status(404).json({ message: 'No record found' })
					}

					return res
						.status(200)
						.json({ message: `${action} removed successfully` })
				}
			)
		}
	})
}

exports.getMatch_comments = (req, res) => {
	const sql = `SELECT c.*, 
       uld.action AS likedOrDisliked, 
       u.first_name AS author, 
       u.picture AS picture
				FROM comments c
				LEFT JOIN user_likes_dislikes uld 
									ON c.id = uld.comment_id 
									AND uld.user_id = ?
				JOIN users u 
									ON c.user_id = u.id
				WHERE c.match_id = ?;`
	db.query(sql, [req.params.user_id, req.params.id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}
exports.getIdLast_comment = (req, res) => {
	const sql = `SELECT c.id 
			FROM comments c
			ORDER BY c.id DESC
			LIMIT 1;`
	db.query(sql, [req.params.id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}

exports.Create_Match_comment = (req, res) => {
	const { id, content, user_id } = req.body

	const sql =
		'INSERT INTO comments (	user_id, content,  match_id ,publish_date) VALUES (?, ?,   ?, NOW()) '

	db.query(sql, [user_id, content, id], (err, result) => {
		if (err) {
			console.error('Error inserting user:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		return res.status(201).json({ id: result.insertId })
	})
}

exports.GET_LIST = (req, res) => {
	// параметри `range` та `sort` з запиту
	const range = JSON.parse(req.query.range || '[0, 9]')
	const sort = JSON.parse(req.query.sort || '["id", "ASC"]')

	const start = range[0]
	const end = range[1]
	const limit = end - start + 1
	const offset = start

	const [sortField, sortOrder] = sort

	// Основний SQL-запит з урахуванням сортування, обмеження та зміщення
	const sql = `
		SELECT c.*, 
      
       u.first_name AS author, 
       u.picture AS picture
				FROM comments c
				JOIN users u 
							ON c.user_id = u.id
			 
		ORDER BY ?? ${sortOrder === 'DESC' ? 'DESC' : 'ASC'}
		LIMIT ? OFFSET ?;
	`

	// Параметри для запиту
	const queryParams = [sortField, limit, offset]

	// Виконуємо основний запит
	db.query(sql, queryParams, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}

		// Запит для підрахунку загальної кількості записів
		const countSql = 'SELECT COUNT(*) AS total FROM comments'
		db.query(countSql, (countErr, countResults) => {
			if (countErr) {
				return res.status(500).json({ error: countErr.message })
			}

			const total = countResults[0].total

			// Формуємо заголовок `Content-Range` на основі фактичних даних
			const contentRange = `comments ${start}-${
				start + results.length - 1
			}/${total}`
			console.log('Content-Range:', contentRange) // Діагностика Content-Range

			res.setHeader('Content-Range', contentRange)
			res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
			res.json(results)
		})
	})
}
