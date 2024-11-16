const db = require('../db.js')

exports.CreateRequest = (req, res) => {
	const { user_id, content, title, type } = req.body

	const sql =
		'INSERT INTO support (author_id, content, title, request_type) VALUES (?, ?, ?, ?)'
	const params = [user_id, content, title, type]

	db.query(sql, params, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}

		res.status(201).json({ id: result.insertId })
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
		SELECT s.*, u.first_name AS author, u.picture  
	 FROM support s
	 JOIN users u ON s.author_id = u.id
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
		const countSql = 'SELECT COUNT(*) AS total FROM support'
		db.query(countSql, (countErr, countResults) => {
			if (countErr) {
				return res.status(500).json({ error: countErr.message })
			}

			const total = countResults[0].total

			// Формуємо заголовок `Content-Range` на основі фактичних даних
			const contentRange = `support ${start}-${
				start + results.length - 1
			}/${total}`
			console.log('Content-Range:', contentRange) // Діагностика Content-Range

			res.setHeader('Content-Range', contentRange)
			res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
			res.json(results)
		})
	})
}
