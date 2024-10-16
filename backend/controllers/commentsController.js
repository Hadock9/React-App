const db = require('../db.js')

exports.getNews_comments = (req, res) => {
	const sql = `SELECT * FROM comments WHERE news_id = (?);`
	db.query(sql, [req.params.news_id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}

exports.Create_comment = (req, res) => {
	const { news_id, author, content, picture } = req.body

	const sql =
		'INSERT INTO comments (	author, content, picture,news_id ,publish_date) VALUES (?, ?, ?, ?, NOW()) '

	db.query(sql, [author, content, picture, news_id], (err, result) => {
		if (err) {
			console.error('Error inserting user:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		return res.status(201).json({ id: result.insertId })
	})
}

exports.updateLikesDislikes = (req, res) => {
	const { commentId, likes, dislikes } = req.body
	const updateQuery = `
			UPDATE comments
			SET likes = ?, dislikes = ?
			WHERE id = ?
		`
	db.query(updateQuery, [likes, dislikes, commentId], (err, result) => {
		if (err) {
			console.error('Error inserting user:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		return res.status(201).json({ id: result.insertId })
	})
}
