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

exports.addNews_views = (req, res) => {
	const { news_id, user_id, news_views } = req.body
	// Перевіряєм чи є запис про перегляди в таблиці
	const checkQuery = `
		SELECT *
		FROM user_views
		WHERE user_id = ? AND news_id = ?;
		`

	db.query(checkQuery, [user_id, news_id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: 'Database error' })
		}

		// Якщо запису немає, вставляємо  запис
		if (result.length === 0) {
			const insertQuery = `
		INSERT INTO user_views (user_id, news_id, created_at) 
		VALUES (?, ?, NOW());
	`
			db.query(insertQuery, [user_id, news_id], (err, insertResult) => {
				if (err) {
					return res.status(500).json({ error: 'Database error' })
				}
				const updateViewsQuery = `
			UPDATE news
			SET views = ? 
			WHERE id = ?;
		`
				// Якщо а також додаєм 1 перегляд
				db.query(updateViewsQuery, [news_views + 1, news_id], (err, result) => {
					if (err) {
						return res.status(500).json({ error: 'Database error' })
					}
					return res.status(201).json({ id: insertResult.insertId })
				})
			})
		}
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
		SELECT n.id, n.title, n.content, n.author, g.name AS gameName, g.id AS gameId,
		       n.publish_date, n.status, n.views, n.likes, n.messages, n.image_url,
		       n.updated_at, n.description
		FROM news n
		JOIN Games_List g ON n.game_id = g.id
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
		const countSql = 'SELECT COUNT(*) AS total FROM news'
		db.query(countSql, (countErr, countResults) => {
			if (countErr) {
				return res.status(500).json({ error: countErr.message })
			}

			const total = countResults[0].total

			// Формуємо заголовок `Content-Range` на основі фактичних даних
			const contentRange = `news ${start}-${
				start + results.length - 1
			}/${total}`
			console.log('Content-Range:', contentRange) // Діагностика Content-Range

			res.setHeader('Content-Range', contentRange)
			res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
			res.json(results)
		})
	})
}
