const db = require('../db.js')

exports.getNews_list = (req, res) => {
	const sql =
		'SELECT n.id, n.title, n.content, n.author, g.name AS gameName,g.id AS gameId, n.publish_date, n.status, n.views, n.likes,	n.messages,  n.image_url, n.updated_at, n.description FROM news n JOIN Games_List g ON n.game_id = g.id;'
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}
exports.getNews_last = (req, res) => {
	const sql = `SELECT n.id, 
					n.title, 
					g.name AS gameName, 
					g.id AS gameId, 
					n.publish_date, 
					n.views, 
					n.likes,
					n.messages, 
					n.updated_at, 
					n.description 
		FROM news n 
		JOIN Games_List g ON n.game_id = g.id 
		ORDER BY n.publish_date DESC
		LIMIT 10;`
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}

exports.getNews_pop = (req, res) => {
	const sql = `SELECT n.id, 
					n.title, 
					g.name AS gameName, 
					g.id AS gameId, 
					n.publish_date, 
					n.views, 
					n.likes,
					n.messages, 
					n.updated_at, 
					n.description 
		FROM news n 
		JOIN Games_List g ON n.game_id = g.id 
		ORDER BY n.views DESC
		LIMIT 10;`
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}

exports.getNewsById = (req, res) => {
	const sql = `SELECT 
    n.id, 
    n.title, 
    n.author, 
    g.name AS gameName, 
    g.id AS gameId, 
    n.publish_date, 
    n.status, 
    n.views, 
    n.likes, 
		n.messages, 
    n.image_url, 
    n.updated_at, 
    n.description,
   	n.content 
FROM 
    news n 
JOIN 
    Games_List g ON n.game_id = g.id 
 
WHERE 
    n.id = ? 
GROUP BY 
    n.id, n.title, n.author, g.name, g.id, n.publish_date, n.status, n.views, n.likes, n.image_url, n.updated_at, n.description;`

	db.query(sql, [req.params.id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}
