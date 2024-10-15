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
